// Platform-independent bot logic: input in -> array of message objects out.
import { config } from './config.js';
import { LANGS, LANG_ORDER, TOPICS } from './content.js';
import { PROVINCES } from './offices.js';
import { lookupRegistration, isValidFormat, cleanNumber } from './status.js';

// In-memory sessions. Swap for Redis/DB in production so state survives restarts.
const sessions = new Map();
export const resetSession = (id) => sessions.delete(id);

const GREETING = /^(hi|hii+|hello|hey|heita|hallo|start|sawubona|molo|dumela|thobela|ndaa|aa|haai)\b/i;
const MENU_WORD = /^(menu|imenyu|menyu)$/i;

const LANG_ALIASES = {
  en: /^(en|english)$/i,
  zu: /^(zu|zulu|isizulu)$/i,
  ve: /^(ve|venda|tshivenda|tshivenḓa)$/i,
  nso: /^(nso|sepedi|northern sotho)$/i,
  xh: /^(xh|xhosa|isixhosa)$/i,
  st: /^(st|sotho|sesotho|southern sotho)$/i,
};

// Light keyword routing for typed questions (English + a few local words). Order matters.
const INTENTS = [
  ['renew', /renew|vuselela|hlaziya|mpshafatša|ntlafatsa|vusulusa/i],
  ['status', /status|expired|expiry|valid|certificate|check my/i],
  ['enrol', /enrol|warranty|new home|ngwadiša ntlo/i],
  ['register', /regist|ngwadiša|bhalisa|ngodisa|ṅwalisa/i],
  ['technical', /technical|defect|inspect|crack|leak|geotech|engineer/i],
  ['contact', /contact|phone|call|number|email|address|office|hotline|hours|xhumana/i],
  ['services', /service|what do you do|what does nhbrc do/i],
  ['about', /what is|about|who are|nhbrc\??$/i],
];

const fill = (str, extra = {}) =>
  Object.entries({ ...config.contact, ...extra }).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, v), str);

const fmtDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });

// ---------- message builders ----------
function languageList() {
  return {
    type: 'list',
    header: 'NHBRC 🏠',
    body:
      '👋 Hello / Sawubona / Molo / Dumela / Thobela / Ndaa\n\n' +
      'Welcome to the NHBRC assistant.\nPlease choose your language.\n' +
      'Khetha ulimi lwakho · Khetha leleme · Nanguli luambo',
    button: 'Language / Ulimi',
    sectionTitle: 'Languages',
    rows: LANG_ORDER.map((code) => ({ id: `lang_${code}`, title: LANGS[code].name })),
  };
}

function mainMenu(code) {
  const L = LANGS[code];
  return {
    type: 'list',
    header: 'NHBRC 🏠',
    body: L.menuBody,
    footer: L.menuFooter,
    button: L.menuButton,
    sectionTitle: L.menuButton,
    rows: [...TOPICS, 'status', 'language'].map((t) => ({
      id: `topic_${t}`,
      title: L.rows[t][0],
      description: L.rows[t][1],
    })),
  };
}

// 9 provinces + National = 10 rows (WhatsApp's maximum for a list)
function provinceList(code) {
  const L = LANGS[code];
  return {
    type: 'list',
    header: 'NHBRC 📞',
    body: L.contactPick,
    button: L.contactButton,
    sectionTitle: L.contactButton,
    rows: [
      ...PROVINCES.map((p) => ({ id: `prov_${p.id}`, title: p.name, description: p.offices.map((o) => o.town).join(', ') })),
      { id: 'prov_national', title: L.rows.national[0], description: L.rows.national[1] },
    ],
  };
}

function officeAnswer(code, provId) {
  const L = LANGS[code];
  const p = PROVINCES.find((x) => x.id === provId);
  if (!p) return [provinceList(code)];
  const blocks = p.offices.map(
    (o) =>
      `*${o.name}*\n📍 ${L.lblAddr}: ${o.address}\n📞 ${L.lblTel}: ${o.tel}\n🕐 ${L.lblHrs}: ${o.hours || config.contact.hours}`
  );
  return [
    { type: 'text', body: fill(`*${p.name}*\n\n${blocks.join('\n\n')}\n\n☎️ NHBRC: {phone}\n\n${L.officeNote}`) },
    {
      type: 'buttons',
      body: L.more,
      buttons: [
        { id: 'topic_contact', title: L.btnOther },
        { id: 'topic_menu', title: L.btnMenu },
      ],
    },
  ];
}

function answer(code, topic) {
  const L = LANGS[code];
  let buttons = [
    { id: 'topic_menu', title: L.btnMenu },
    { id: 'topic_language', title: L.btnLanguage },
  ];
  if (topic === 'register' || topic === 'renew') buttons = [{ id: 'topic_status', title: L.btnStatus }, buttons[0], buttons[1]];
  if (topic === 'contact') buttons = [{ id: 'topic_contact', title: L.btnOther }, buttons[0]];
  return [
    { type: 'text', body: fill(L.answers[topic] + '\n\n' + L.note) },
    { type: 'buttons', body: L.more, buttons },
  ];
}

async function statusResult(code, input) {
  const L = LANGS[code];
  let r;
  try {
    r = await lookupRegistration(input);
  } catch (err) {
    console.error('Status lookup failed:', err.message); // never log the registration number
    return [{ type: 'text', body: fill(L.statusError) }, { type: 'buttons', body: L.more, buttons: [{ id: 'topic_status', title: L.btnAgain }, { id: 'topic_menu', title: L.btnMenu }] }];
  }
  const again = { id: 'topic_status', title: L.btnAgain };
  const menu = { id: 'topic_menu', title: L.btnMenu };

  if (!r.found) {
    return [
      { type: 'text', body: L.statusNotFound.replace('{num}', cleanNumber(input)) },
      { type: 'buttons', body: L.more, buttons: [again, menu] },
    ];
  }
  const head = { valid: L.statusValidH, expired: L.statusExpiredH, suspended: L.statusSuspendedH }[r.status];
  const lines = [head, '', `${L.lblNumber}: ${r.number}`];
  if (r.name) lines.push(`${L.lblName}: ${r.name}`);
  if (r.expiryDate) lines.push(`${r.status === 'expired' ? L.lblExpiredOn : L.lblValidUntil}: ${fmtDate(r.expiryDate)}`);
  if (r.status === 'expired') lines.push('', L.statusExpiredNote);
  if (r.status === 'suspended') lines.push('', L.statusSuspendedNote);

  const buttons = r.status === 'expired' ? [{ id: 'topic_renew', title: L.btnRenew }, again, menu] : [again, menu];
  return [{ type: 'text', body: lines.join('\n') }, { type: 'buttons', body: L.more, buttons }];
}

// ---------- main handler ----------
export async function handleMessage(from, { text = '', id = '' }) {
  const s = sessions.get(from) || {};
  sessions.set(from, s);
  const input = text.trim();

  // 1. Language chosen from the list
  if (id.startsWith('lang_') && LANGS[id.slice(5)]) {
    s.lang = id.slice(5);
    s.awaiting = null;
    return [{ type: 'text', body: LANGS[s.lang].langSet }, mainMenu(s.lang)];
  }

  // 2. Waiting for a registration number
  if (s.awaiting === 'status' && s.lang && !id && input && !GREETING.test(input)) {
    if (MENU_WORD.test(input)) {
      s.awaiting = null;
      return [mainMenu(s.lang)];
    }
    if (!isValidFormat(input)) return [{ type: 'text', body: LANGS[s.lang].statusBadInput }];
    s.awaiting = null;
    return statusResult(s.lang, input);
  }

  // 3. Language typed by name
  const typedLang = Object.keys(LANG_ALIASES).find((c) => LANG_ALIASES[c].test(input));
  if (typedLang) {
    s.lang = typedLang;
    s.awaiting = null;
    return [{ type: 'text', body: LANGS[typedLang].langSet }, mainMenu(typedLang)];
  }

  // 4. "hi" (or no language chosen yet) -> always show the language options
  if (GREETING.test(input) || !s.lang) {
    s.awaiting = null;
    return [languageList()];
  }

  // 5. Menu / topic selections
  if (id) s.awaiting = null;
  if (id === 'topic_language') return [languageList()];
  if (id === 'topic_menu' || MENU_WORD.test(input)) return [mainMenu(s.lang)];
  if (id === 'topic_status') return askStatus(s);
  if (id === 'topic_contact') return [provinceList(s.lang)];
  if (id === 'prov_national') return answer(s.lang, 'contact');
  if (id.startsWith('prov_')) return officeAnswer(s.lang, id.slice(5));
  if (id.startsWith('topic_')) {
    const topic = id.slice(6);
    if (TOPICS.includes(topic)) return topic === 'contact' ? [provinceList(s.lang)] : answer(s.lang, topic);
  }

  // 6. Typed question -> keyword match
  const hit = INTENTS.find(([, re]) => re.test(input));
  if (hit) {
    if (hit[0] === 'status') return askStatus(s);
    if (hit[0] === 'contact') return [provinceList(s.lang)];
    return answer(s.lang, hit[0]);
  }

  // 7. Fallback
  return [{ type: 'text', body: LANGS[s.lang].fallback }, mainMenu(s.lang)];
}

function askStatus(s) {
  s.awaiting = 'status';
  return [{ type: 'text', body: LANGS[s.lang].statusAsk }];
}
