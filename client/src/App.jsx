import { useEffect, useRef, useState } from 'react';
import { handleMessage, resetSession } from '../../server/src/bot.js';

// DEMO=true (GitHub Pages build): the bot runs inside the browser, no server needed.
const DEMO = import.meta.env.VITE_DEMO === 'true';

const newSession = () =>
  globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2) + Date.now().toString(36);

const LANGUAGE_DETAILS = {
  lang_en: { tag: 'EN', subtitle: 'English' },
  lang_zu: { tag: 'ZU', subtitle: 'isiZulu' },
  lang_ve: { tag: 'VE', subtitle: 'Tshivenḓa' },
  lang_nso: { tag: 'NS', subtitle: 'Sepedi' },
  lang_xh: { tag: 'XH', subtitle: 'isiXhosa' },
  lang_st: { tag: 'ST', subtitle: 'Sesotho' },
};

function Icon({ name, size = 18 }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    chat: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" /></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

// Render WhatsApp-style *bold* and line breaks
function Rich({ text }) {
  return String(text ?? '').split('\n').map((line, i) => (
    <div key={i}>
      {line.split(/(\*[^*]+\*)/g).map((part, j) =>
        part.startsWith('*') && part.endsWith('*') ? <b key={j}>{part.slice(1, -1)}</b> : part
      )}
      {line === '' && <br />}
    </div>
  ));
}

export default function App() {
  const [sessionId, setSessionId] = useState(newSession);
  const [chat, setChat] = useState([]); // {from:'user'|'bot', ...message}
  const [input, setInput] = useState('');
  const [sheet, setSheet] = useState(null); // open list message
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  useEffect(() => {
    if (!sheet) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSheet(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [sheet]);

  async function send({ text = '', id = '', label }) {
    setSheet(null);
    setChat((c) => [...c, { from: 'user', type: 'text', body: label || text }]);
    setBusy(true);
    try {
      let messages;
      if (DEMO) {
        messages = await handleMessage(`demo:${sessionId}`, { text, id });
      } else {
        const res = await fetch('/api/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, text, id }),
        });
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data = await res.json();
        messages = Array.isArray(data.messages) ? data.messages : [];
      }
      setChat((c) => [...c, ...messages.map((m) => ({ from: 'bot', ...m }))]);
    } catch (err) {
      setChat((c) => [...c, { from: 'bot', type: 'text', body: `⚠️ Cannot reach the server (${err.message}). Is it running on port 3001?` }]);
    } finally {
      setBusy(false);
    }
  }

  async function reset() {
    if (DEMO) resetSession(`demo:${sessionId}`);
    else {
      await fetch('/api/simulate/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      }).catch(() => {});
    }
    setChat([]);
    setSheet(null);
    setSessionId(newSession());
  }

  function submit(e) {
    e.preventDefault();
    if (!input.trim() || busy) return;
    send({ text: input.trim() });
    setInput('');
  }

  return (
    <div className="page">
      <div className="phone">
        <header>
          <div className="avatar"><Icon name="home" size={21} /></div>
          <div className="identity">
            <strong>NHBRC Assistant</strong>
            <small><span className="online-dot" /> Bot tester · simulated WhatsApp</small>
          </div>
          <button className="reset" onClick={reset} title="Start a new chat"><Icon name="refresh" size={16} /><span>Reset</span></button>
        </header>

        <div className="messages">
          {chat.length === 0 && <div className="welcome"><span className="welcome-icon"><Icon name="chat" size={21} /></span><b>Welcome to NHBRC Assistant</b><span>Type <b>hi</b> to get started</span></div>}
          {chat.length === 0 && DEMO && (
            <div className="demo">
              <b>Prototype demo</b> – sample data only, not official NHBRC information.<br />
              To try the status check use: <b>1234567</b> (valid), <b>7654321</b> (expired), <b>5555555</b> (suspended).
            </div>
          )}
          {chat.map((m, i) => (
            <div key={i} className={`bubble ${m.from}`}>
              <Rich text={m.body} />
              {m.type === 'list' && (
                <button className="action" onClick={() => setSheet(m)}><Icon name="menu" size={16} />{m.button}<Icon name="chevron" size={16} /></button>
              )}
              {m.type === 'buttons' && (
                <div className="btns">
                  {m.buttons.map((b) => (
                    <button key={b.id} className="action" onClick={() => send({ id: b.id, label: b.title })}>
                      {b.title}<Icon name="chevron" size={15} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {busy && <div className="bubble bot typing">…</div>}
          <div ref={endRef} />
        </div>

        {sheet && (
          <div className="sheet-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSheet(null); }}>
            <div className="sheet" role="dialog" aria-modal="true" aria-label={sheet.button}>
              <div className="sheet-grab" />
              <div className="sheet-head">
                <span className="sheet-icon"><Icon name={sheet.rows[0]?.id.startsWith('lang_') ? 'globe' : 'menu'} size={19} /></span>
                <div className="sheet-title"><strong>{sheet.button}</strong><small>{sheet.rows[0]?.id.startsWith('lang_') ? 'Choose the language you’re most comfortable with' : 'Select an option to continue'}</small></div>
                <button className="sheet-close" onClick={() => setSheet(null)} aria-label="Close menu"><Icon name="close" size={18} /></button>
              </div>
              <div className="sheet-options">
              {sheet.rows.map((r) => {
                const language = LANGUAGE_DETAILS[r.id];
                return (
                  <button key={r.id} className={`row${language ? ' language-row' : ''}`} onClick={() => send({ id: r.id, label: r.title })}>
                    {language && <span className="language-tag">{language.tag}</span>}
                    <span className="row-copy"><span className="row-title">{r.title}</span>{(r.description || language?.subtitle) && <small>{r.description || language.subtitle}</small>}</span>
                    <Icon name="chevron" size={17} />
                  </button>
                );
              })}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={submit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" />
          <button type="submit" disabled={busy || !input.trim()} aria-label="Send message"><Icon name="send" size={17} /><span>Send</span></button>
        </form>
      </div>
    </div>
  );
}
