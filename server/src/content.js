// All user-facing text, per language.
// ⚠️ Translations are a first draft. Have NHBRC-approved native speakers review them
//    (especially Tshivenḓa) before going live. Facts/fees/contacts can change — confirm at www.nhbrc.org.za.
//
// Placeholders filled at runtime from .env: {phone} {web} {address} {ethics}
// WhatsApp limits: list row title 24 chars, row description 72, list button 20, reply button 20.

export const TOPICS = ['about', 'services', 'register', 'renew', 'enrol', 'technical', 'contact'];
export const LANG_ORDER = ['en', 'zu', 've', 'nso', 'xh', 'st'];

export const LANGS = {
  // ─────────────────────────────── ENGLISH ───────────────────────────────
  en: {
    name: 'English',
    langSet: 'Language set to English ✅',
    menuBody: 'How can I help you today? Tap *Menu* and choose a topic.',
    menuFooter: 'Type menu anytime',
    menuButton: 'Menu',
    btnMenu: 'Main menu',
    btnLanguage: 'Change language',
    more: 'Is there anything else I can help with?',
    fallback: "Sorry, I didn't understand that. Please use the *Menu* to choose a topic.",
    note: 'ℹ️ Requirements and fees may change. Please confirm on {web}.',
    rows: {
      about: ['What is the NHBRC?', 'Who we are and what we do'],
      services: ['Our services', 'Everything the NHBRC does'],
      register: ['Builder registration', 'How to register as a home builder'],
      renew: ['Renew registration', 'How to renew your registration'],
      enrol: ['Enrol a new home', 'Enrolment steps and warranty cover'],
      technical: ['Technical enquiries', 'Inspections, defects, standards'],
      contact: ['Contact the NHBRC', 'Phone, website, offices'],
      language: ['Change language', 'Choose another language'],
    },
    answers: {
      about:
        '*What is the NHBRC?*\nThe National Home Builders Registration Council (NHBRC) is a South African statutory body, established under the Housing Consumers Protection Measures Act, 1998 (Act 95 of 1998). It protects housing consumers and regulates the home building industry.',
      services:
        '*What the NHBRC does*\n• Registers and renews home builders\n• Enrols new homes\n• Inspects homes during construction\n• Provides warranty cover for structural and other defects\n• Gives technical advice (geotechnical and materials engineering)\n• Trains home builders\n• Handles complaints and resolves disputes',
      register:
        '*Home builder registration*\nEvery home builder must be registered with the NHBRC before building a home.\n\n*Usually needed:*\n• Certified ID copy (and for each director, if a company)\n• Company registration documents (if applicable)\n• Proof of address\n• Proof of experience / qualifications\n• Tax compliance details\n\n*How:* Apply on the NHBRC online portal or at a Customer Care Office. Once approved you receive a registration number and certificate.',
      renew:
        '*Renew your registration*\nRegistration is valid for 12 months. Renew before it expires — a builder with a lapsed registration cannot enrol new homes.\n\n*Steps:*\n1. Log in to the NHBRC online portal (or visit an office)\n2. Update your details and documents\n3. Pay the renewal fee\n4. Download your renewed certificate',
      enrol:
        '*Enrol a new home*\nEvery new home must be enrolled with the NHBRC at least 15 days before construction starts. Only a registered builder can enrol a home.\n\n*Usually needed:*\n• Builder registration number\n• Approved building plans\n• Proof of ownership of the property\n• Home value / construction cost details\n\nThe NHBRC inspects the home during construction. Once enrolled, the home has warranty cover:\n• 3 months – defects from poor workmanship or materials\n• 12 months – roof leaks and wall/floor dampness\n• 5 years – major structural defects',
      technical:
        '*Technical enquiries*\nWe can help with:\n• The Home Building Manual and technical requirements\n• Geotechnical (soil/site) and engineering questions\n• Inspections of your home\n• Reporting defects or complaints\n\nWhen you contact us, have ready: your enrolment number, property address, contact details and photos of the problem. Choose *Contact the NHBRC* to see how to reach us.',
      contact:
        '*Contact the NHBRC*\n📞 Toll-free: {phone}\n🌐 {web}\n📍 Head Office: {address}\n🚨 Ethics hotline (fraud / bribery): {ethics}\n\n⚠️ The NHBRC never asks for bribes. Report anyone who does.',
    },
  },

  // ─────────────────────────────── ISIZULU ───────────────────────────────
  zu: {
    name: 'isiZulu',
    langSet: 'Ulimi lusethwe ku-isiZulu ✅',
    menuBody: 'Ngingakusiza kanjani namuhla? Chofoza *Imenyu* bese ukhetha isihloko.',
    menuFooter: 'Bhala imenyu noma inini',
    menuButton: 'Imenyu',
    btnMenu: 'Imenyu enkulu',
    btnLanguage: 'Shintsha ulimi',
    more: 'Ingabe kukhona okunye engingakusiza ngakho?',
    fallback: 'Uxolo, angiqondanga. Sicela usebenzise *Imenyu* ukukhetha isihloko.',
    note: 'ℹ️ Izidingo nezindleko zingashintsha. Sicela uqinisekise ku-{web}.',
    rows: {
      about: ['Yini i-NHBRC?', 'Siyini futhi senzani'],
      services: ['Izinsizakalo zethu', 'Konke okwenziwa yi-NHBRC'],
      register: ['Ukubhalisa umakhi', 'Ukubhalisa njengomakhi wezindlu'],
      renew: ['Vuselela ukubhaliswa', 'Indlela yokuvuselela ukubhaliswa'],
      enrol: ['Bhalisa indlu entsha', 'Izinyathelo nesivikelo (warranty)'],
      technical: ['Imibuzo yobuchwepheshe', 'Ukuhlola, amaphutha, izindinganiso'],
      contact: ['Xhumana ne-NHBRC', 'Ucingo, iwebhusayithi, amahhovisi'],
      language: ['Shintsha ulimi', 'Khetha olunye ulimi'],
    },
    answers: {
      about:
        '*Yini i-NHBRC?*\nI-National Home Builders Registration Council (NHBRC) yisikhungo sikahulumeni saseNingizimu Afrika esasungulwa ngokwe-Housing Consumers Protection Measures Act ka-1998 (Umthetho 95 ka-1998). Sivikela abathengi bezindlu futhi silawula imboni yokwakha izindlu.',
      services:
        '*Okwenziwa yi-NHBRC*\n• Ukubhalisa nokuvuselela abakhi bezindlu\n• Ukubhalisa izindlu ezintsha\n• Ukuhlola izindlu ngesikhathi zakhiwa\n• Isivikelo (warranty) samaphutha esakhiwo nokunye\n• Iseluleko sobuchwepheshe (i-geotechnical nobunjiniyela bezinto zokwakha)\n• Ukuqeqesha abakhi bezindlu\n• Ukuphatha izikhalazo nokuxazulula izingxabano',
      register:
        '*Ukubhalisa komakhi wezindlu*\nUmakhi ngamunye kumele abhaliswe ne-NHBRC ngaphambi kokwakha indlu.\n\n*Okudingekayo ngokuvamile:*\n• Ikhophi ye-ID eqinisekisiwe (nomqondisi ngamunye uma kuyinkampani)\n• Amadokhumenti okubhaliswa kwenkampani (uma kudingeka)\n• Ubufakazi bekheli\n• Ubufakazi bokuhlangenwe nakho / amakhwalifikheshini\n• Imininingwane yokuthobela intela\n\n*Kanjani:* Faka isicelo ku-portal ye-NHBRC ku-inthanethi noma ehhovisi lokunakekela amakhasimende. Uma wamukelwe uzothola inombolo nesitifiketi sokubhaliswa.',
      renew:
        '*Vuselela ukubhaliswa kwakho*\nUkubhaliswa kusebenza izinyanga eziyi-12. Vuselela ngaphambi kokuphela — umakhi onokubhaliswa okuphelelwe yisikhathi akakwazi ukubhalisa izindlu ezintsha.\n\n*Izinyathelo:*\n1. Ngena ku-portal ye-NHBRC (noma uvakashele ihhovisi)\n2. Vuselela imininingwane namadokhumenti\n3. Khokha imali yokuvuselela\n4. Landa isitifiketi esivuselelwe',
      enrol:
        '*Bhalisa indlu entsha*\nIndlu ngayinye entsha kumele ibhaliswe ne-NHBRC okungenani ezinsukwini eziyi-15 ngaphambi kokuqala ukwakhiwa. Umakhi obhalisiwe kuphela ongabhalisa indlu.\n\n*Okudingekayo ngokuvamile:*\n• Inombolo yokubhaliswa komakhi\n• Amapulani okwakha avunyiwe\n• Ubufakazi bobunikazi bendawo\n• Inani lendlu / izindleko zokwakha\n\nI-NHBRC iyayihlola indlu ngesikhathi yakhiwa. Uma ibhaliswe, indlu ithola isivikelo (warranty):\n• Izinyanga ezi-3 – amaphutha emisebenzi noma ezintweni ezisetshenzisiwe\n• Izinyanga ezi-12 – ukuvuza kophahla nomswakama ezindongeni/phansi\n• Iminyaka emi-5 – amaphutha amakhulu esakhiwo',
      technical:
        '*Imibuzo yobuchwepheshe*\nSingakusiza ngalokhu:\n• I-Home Building Manual nezidingo zobuchwepheshe\n• Imibuzo ye-geotechnical (inhlabathi/indawo) nobunjiniyela\n• Ukuhlolwa kwendlu yakho\n• Ukubika amaphutha noma izikhalazo\n\nUma usithinta, lungisa: inombolo yokubhaliswa kwendlu, ikheli, imininingwane yakho nezithombe zenkinga. Khetha *Xhumana ne-NHBRC* ukuze ubone indlela yokusithinta.',
      contact:
        '*Xhumana ne-NHBRC*\n📞 Mahhala: {phone}\n🌐 {web}\n📍 Ihhovisi Eliyinhloko: {address}\n🚨 Ucingo lwezokuziphatha (inkohlakalo / ukufumbathiswa): {ethics}\n\n⚠️ I-NHBRC ayikaze icele ukufumbathiswa. Bika noma ubani ofunayo.',
    },
  },

  // ─────────────────────────────── TSHIVENḒA ───────────────────────────────
  ve: {
    name: 'Tshivenḓa',
    langSet: 'Luambo lwo vhekanywa kha Tshivenḓa ✅',
    menuBody: 'Ndi nga ni thusa hani namusi? Pindani *Menu* ni nanguli thero.',
    menuFooter: 'Ṅwalani menu tshifhinga tshiṅwe na tshiṅwe',
    menuButton: 'Menu',
    btnMenu: 'Menu khulwane',
    btnLanguage: 'Shandukisa luambo',
    more: 'Hu na zwiṅwe zwine nda nga ni thusa ngazwo naa?',
    fallback: 'Pfarelani, a thi ngo pfesesa. Ndi khou ni humbela ni shumise *Menu* u nanguludza thero.',
    note: 'ℹ️ Zwiṱoḓea na mitengo zwi nga shanduka. Khwaṱhisedzani kha {web}.',
    rows: {
      about: ['NHBRC ndi mini?', 'Ri nnyi na zwine ra zwi ita'],
      services: ['Mishumo yashu', 'Zwoṱhe zwine NHBRC ya zwi ita'],
      register: ['U ṅwalisa muaki', 'U ṅwaliswa sa muaki wa dzinndu'],
      renew: ['U vusulusa u ṅwaliswa', 'Nḓila ya u vusulusa u ṅwaliswa'],
      enrol: ['Ṅwalisani nndu ntswa', 'Maga a u ṅwalisa na tsireledzo'],
      technical: ['Mbudziso dza thekiniki', 'U ṱoḓulusa, vhukhakhi, milayo'],
      contact: ['Kwamani NHBRC', 'Mbingano, webusaithi, wofisi'],
      language: ['Shandukisa luambo', 'Nanguli luṅwe luambo'],
    },
    answers: {
      about:
        '*NHBRC ndi mini?*\nNational Home Builders Registration Council (NHBRC) ndi tshiimiswa tsha muvhuso wa Afrika Tshipembe, tsho vhumbiwaho nga Housing Consumers Protection Measures Act ya 1998 (Act 95 ya 1998). I tsireledza vhathu vhane vha renga dzinndu na u langa mishumo ya u aka dzinndu.',
      services:
        '*Zwine NHBRC ya zwi ita*\n• U ṅwalisa na u vusulusa vhaaki vha dzinndu\n• U ṅwalisa dzinndu ntswa\n• U ṱoḓulusa dzinndu musi dzi tshi khou akiwa\n• Tsireledzo (warranty) ya vhukhakhi ha tshivhumbeo na zwiṅwe\n• Ndededzo ya thekiniki (geotechnical na engineering ya zwishumiswa)\n• U vhuedza vhaaki vha dzinndu\n• U shumana na mbilaelo na u ṱanzwa ha khakhathi',
      register:
        '*U ṅwalisa muaki wa nndu*\nMuaki muṅwe na muṅwe u fanela u ṅwaliswa na NHBRC musi a sa athu u aka nndu.\n\n*Zwine zwa ṱoḓea zwiṅwe tshifhinga:*\n• Khophi ya ID yo khwaṱhisedzwaho (na mulangi muṅwe na muṅwe arali ndi khamphani)\n• Marifhi a u ṅwalisa khamphani (arali zwi tshi ṱoḓea)\n• Ndingo ya aderese\n• Ndingo ya ṱhaphuḓi / zwitifikhethi\n• Mafhungo a tax\n\n*Nḓila:* Itani khumbelo kha portal ya NHBRC kana wofisini ya Customer Care. Musi ni tshi tendelwa ni wana nomboro na setifikhethi ya u ṅwaliswa.',
      renew:
        '*U vusulusa u ṅwaliswa hawe*\nU ṅwaliswa hu shuma miṅwedzi ya 12. Vusulusani phanḓa ha musi hu tshi fhela — muaki one u ṅwaliswa hawe ho fhelaho a nga ṅwalisi dzinndu ntswa.\n\n*Nḓila:*\n1. Dzhenani kha portal ya NHBRC (kana ni ye wofisini)\n2. Vusulusani mafhungo na marifhi\n3. Badelani mulingo wa u vusulusa\n4. Dawuloudani setifikhethi yo vusuluswaho',
      enrol:
        '*U ṅwalisa nndu ntswa*\nNndu ntswa yoṱhe i fanela u ṅwaliswa na NHBRC nga u ṱhogomela maḓuvha a 15 phanḓa ha musi u aka hu tshi thoma. Ndi muaki o ṅwaliswaho fhedzi ane a nga ṅwalisa nndu.\n\n*Zwine zwa ṱoḓea zwiṅwe tshifhinga:*\n• Nomboro ya u ṅwaliswa ha muaki\n• Dziplane dza u aka dzo tendelwaho\n• Ndingo ya vhunini ha thundu\n• Ndeme ya nndu / ndindo ya u aka\n\nNHBRC i ṱoḓulusa nndu musi i tshi khou akiwa. Musi yo ṅwaliswa, nndu i wana tsireledzo (warranty):\n• Miṅwedzi ya 3 – vhukhakhi ha mushumo kana zwishumiswa\n• Miṅwedzi ya 12 – u kovhela ha tshiṱaka na mukhukhu miṱani/fhasi\n• Miṅwaha ya 5 – vhukhakhi vhuhulwane ha tshivhumbeo',
      technical:
        '*Mbudziso dza thekiniki*\nRi nga ni thusa nga:\n• Home Building Manual na zwiṱoḓea zwa thekiniki\n• Mbudziso dza geotechnical (mavu/vhupo) na engineering\n• U ṱoḓulusa nndu yaṋu\n• U ḓivhadza vhukhakhi kana mbilaelo\n\nMusi ni tshi kwama NHBRC, dzudzanyani: nomboro ya u ṅwaliswa ha nndu, aderese, mafhungo aṋu na zwifanyiso zwa thaidzo. Nanguli *Kwamani NHBRC* u vhona nḓila ya u ri swikelela.',
      contact:
        '*Kwamani NHBRC*\n📞 Mahala: {phone}\n🌐 {web}\n📍 Wofisi khulwane: {address}\n🚨 Mbingano ya vhuḓifari (u kombetshedza tshelede): {ethics}\n\n⚠️ NHBRC a i nga ṱoḓi tshelede nga maanḓa. Ḓivhadzani nga muthu ane a i ṱoḓa.',
    },
  },

  // ─────────────────────────────── SEPEDI ───────────────────────────────
  nso: {
    name: 'Sepedi',
    langSet: 'Leleme le beilwe go Sepedi ✅',
    menuBody: 'Nka go thuša bjang lehono? Kgotla *Menyu* gomme o kgethe sehlogo.',
    menuFooter: 'Ngwala menyu nako le nako',
    menuButton: 'Menyu',
    btnMenu: 'Menyu ye kgolo',
    btnLanguage: 'Fetola leleme',
    more: 'A go na le se sengwe seo nka go thušago ka sona?',
    fallback: 'Tshwarelo, ga se ka go kwešiša. Hle diriša *Menyu* go kgetha sehlogo.',
    note: 'ℹ️ Ditlhokego le ditefo di ka fetoga. Hle netefatša ka {web}.',
    rows: {
      about: ['NHBRC ke eng?', 'Re bomang le gore re dira eng'],
      services: ['Ditirelo tša rena', 'Tšohle tšeo NHBRC e di dirago'],
      register: ['Ngwadiša moagi', 'Go ngwadiša bjalo ka moagi wa dintlo'],
      renew: ['Mpshafatša ngwadišo', 'Tsela ya go mpshafatša ngwadišo'],
      enrol: ['Ngwadiša ntlo e mpsha', 'Dikgato le tšhireletšo (warranty)'],
      technical: ['Dipotšišo tša theknike', 'Tlhahlobo, diphošo le melao'],
      contact: ['Ikgokaganye le NHBRC', 'Mogala, webosaete, diofisi'],
      language: ['Fetola leleme', 'Kgetha leleme le lengwe'],
    },
    answers: {
      about:
        '*NHBRC ke eng?*\nNational Home Builders Registration Council (NHBRC) ke mokgatlo wa mmušo wa Afrika Borwa o hlomilwego ka Housing Consumers Protection Measures Act ya 1998 (Act 95 ya 1998). E šireletša bareki ba dintlo gomme e laola intasteri ya go aga dintlo.',
      services:
        '*Seo NHBRC e se dirago*\n• Go ngwadiša le go mpshafatša bagi ba dintlo\n• Go ngwadiša dintlo tše diswa\n• Go hlahloba dintlo ge di sa agwa\n• Tšhireletšo (warranty) ya diphošo tša sebopego le tše dingwe\n• Keletšo ya theknike (geotechnical le boenjiniere bja didirišwa)\n• Go ruta bagi ba dintlo\n• Go swara dingongorego le go rarolla dikgang',
      register:
        '*Go ngwadiša moagi wa dintlo*\nMoagi yo mongwe le yo mongwe o swanetše go ngwadišwa le NHBRC pele a aga ntlo.\n\n*Tše di hlokegago gantši:*\n• Kopi ya ID e netefaditšwego (le molaodi yo mongwe le yo mongwe ge e le khamphani)\n• Ditokomane tša ngwadišo ya khamphani (ge go hlokega)\n• Bohlatse bja aterese\n• Bohlatse bja maitemogelo / dikgonthišetšo\n• Dintlha tša go obamela lekgetho\n\n*Bjang:* Ngwala kopo ka portal ya NHBRC ya inthanete goba ofising ya Customer Care. O tla hwetša nomoro le setifikeiti sa ngwadišo ge o amogelwa.',
      renew:
        '*Mpshafatša ngwadišo ya gago*\nNgwadišo e šoma dikgwedi tše 12. E mpshafatše pele e fela — moagi yo ngwadišo ya gagwe e felelwego ga a kgone go ngwadiša dintlo tše diswa.\n\n*Dikgato:*\n1. Tsena ka portal ya NHBRC (goba etela ofisi)\n2. Mpshafatša dintlha le ditokomane\n3. Lefa tefo ya go mpshafatša\n4. Theogela setifikeiti se se mpshafaditšwego',
      enrol:
        '*Ngwadiša ntlo e mpsha*\nNtlo e nngwe le e nngwe e mpsha e swanetše go ngwadišwa le NHBRC bonyenyane matšatši a 15 pele ga ge go thoma kago. Ke moagi yo a ngwadišitšwego fela yo a ka ngwadišago ntlo.\n\n*Tše di hlokegago gantši:*\n• Nomoro ya ngwadišo ya moagi\n• Dipolane tša kago tše di dumeletšwego\n• Bohlatse bja go ba mong wa thoto\n• Boleng bja ntlo / ditshenyagalelo tša kago\n\nNHBRC e hlahloba ntlo ge e sa agwa. Ge e ngwadišitšwe, ntlo e hwetša tšhireletšo (warranty):\n• Dikgwedi tše 3 – diphošo tša mošomo goba didirišwa\n• Dikgwedi tše 12 – go dutla ga marulelo le mongobo maboteng le fase\n• Mengwaga e 5 – diphošo tše kgolo tša sebopego',
      technical:
        '*Dipotšišo tša theknike*\nRe ka go thuša ka:\n• Home Building Manual le ditlhokego tša theknike\n• Dipotšišo tša geotechnical (mmu/lefelo) le boenjiniere\n• Tlhahlobo ya ntlo ya gago\n• Go begela diphošo goba dingongorego\n\nGe o ikgokaganya le rena, ba le: nomoro ya ngwadišo ya ntlo, aterese, dintlha tša gago le diswantšho tša bothata. Kgetha *Ikgokaganye le NHBRC* go bona kamoo o ka re fihlelelago.',
      contact:
        '*Ikgokaganye le NHBRC*\n📞 Mahala: {phone}\n🌐 {web}\n📍 Ofisi ye Kgolo: {address}\n🚨 Mogala wa maitshwaro (bofora / go kgopela tefo ya sephiri): {ethics}\n\n⚠️ NHBRC ga e kgopele tefo ya sephiri le ka mohla. Begela mang le mang yo a e kgopelago.',
    },
  },

  // ─────────────────────────────── ISIXHOSA ───────────────────────────────
  xh: {
    name: 'isiXhosa',
    langSet: 'Ulwimi lumiselwe kwisiXhosa ✅',
    menuBody: 'Ndingakunceda njani namhlanje? Cofa *Imenyu* ukhethe isihloko.',
    menuFooter: 'Bhala imenyu nanini na',
    menuButton: 'Imenyu',
    btnMenu: 'Imenyu ephambili',
    btnLanguage: 'Tshintsha ulwimi',
    more: 'Ngaba kukho enye into endinganceda ngayo?',
    fallback: 'Uxolo, andiqondanga. Nceda usebenzise *Imenyu* ukukhetha isihloko.',
    note: 'ℹ️ Iimfuno neendleko zinokutshintsha. Nceda uqinisekise kwi-{web}.',
    rows: {
      about: ['Yintoni i-NHBRC?', 'Singobani yaye senza ntoni'],
      services: ['Iinkonzo zethu', 'Yonke into eyenziwa yi-NHBRC'],
      register: ['Bhalisa umakhi', 'Ukubhalisa njengomakhi weendlu'],
      renew: ['Hlaziya ubhaliso', 'Indlela yokuhlaziya ubhaliso'],
      enrol: ['Bhalisa indlu entsha', 'Amanyathelo nesiqinisekiso'],
      technical: ['Imibuzo yobugcisa', 'Uhlolo, iziphene, imigangatho'],
      contact: ['Unxibelelwano', 'Ifowuni, iwebhusayithi, iiofisi'],
      language: ['Tshintsha ulwimi', 'Khetha olunye ulwimi'],
    },
    answers: {
      about:
        '*Yintoni i-NHBRC?*\nI-National Home Builders Registration Council (NHBRC) liziko likarhulumente laseMzantsi Afrika elasekwa phantsi kwe-Housing Consumers Protection Measures Act ka-1998 (uMthetho 95 ka-1998). Likhusela abathengi beendlu yaye lilawula ishishini lokwakha iindlu.',
      services:
        '*Okwenziwa yi-NHBRC*\n• Ukubhalisa nokuhlaziya abakhi beendlu\n• Ukubhalisa iindlu ezintsha\n• Ukuhlola iindlu ngexesha zakhiwa\n• Isiqinisekiso (warranty) seziphene zesakhiwo nezinye\n• Ingcebiso yobugcisa (i-geotechnical kunye nobunjineli bezixhobo)\n• Uqeqesho lwabakhi beendlu\n• Ukusingatha izikhalazo nokusombulula iingxabano',
      register:
        '*Ubhaliso lomakhi wendlu*\nUmakhi ngamnye kufuneka abhaliswe ne-NHBRC phambi kokuba akhe indlu.\n\n*Okufunekayo ngokuqhelekileyo:*\n• Ikopi ye-ID eqinisekisiweyo (nomlawuli ngamnye ukuba yinkampani)\n• Amaxwebhu obhaliso lwenkampani (ukuba kuyafuneka)\n• Ubungqina bedilesi\n• Ubungqina bamava / iziqinisekiso zemfundo\n• Iinkcukacha zokuthobela irhafu\n\n*Njani:* Faka isicelo kwi-portal ye-NHBRC kwi-intanethi okanye kwiofisi yeNkonzo yaBathengi. Xa wamkelwe uya kufumana inombolo kunye nesatifikethi sobhaliso.',
      renew:
        '*Hlaziya ubhaliso lwakho*\nUbhaliso lusebenza iinyanga ezili-12. Lihlaziye phambi kokuphelelwa — umakhi onobhaliso oluphelelwe lixesha akanakubhalisa iindlu ezintsha.\n\n*Amanyathelo:*\n1. Ngena kwi-portal ye-NHBRC (okanye utyelele iofisi)\n2. Hlaziya iinkcukacha namaxwebhu\n3. Hlawula ifizi yokuhlaziya\n4. Khuphela isatifikethi esihlaziyiweyo',
      enrol:
        '*Bhalisa indlu entsha*\nIndlu nganye entsha kufuneka ibhaliswe ne-NHBRC ubuncinane kwiintsuku ezili-15 phambi kokuba kuqalise ukwakhiwa. Ngumakhi obhalisiweyo kuphela onokubhalisa indlu.\n\n*Okufunekayo ngokuqhelekileyo:*\n• Inombolo yobhaliso lomakhi\n• Amaplani okwakha avunyiweyo\n• Ubungqina bobunini bepropati\n• Ixabiso lendlu / iindleko zokwakha\n\nI-NHBRC iyayihlola indlu ngexesha ikhiwa. Xa ibhaliswe, indlu ifumana isiqinisekiso (warranty):\n• Iinyanga ezi-3 – iziphene zomsebenzi okanye zezixhobo\n• Iinyanga ezili-12 – ukuvuza kophahla nokufuma kodonga/phantsi\n• Iminyaka emi-5 – iziphene ezinkulu zesakhiwo',
      technical:
        '*Imibuzo yobugcisa*\nSinganceda nge:\n• I-Home Building Manual kunye neemfuno zobugcisa\n• Imibuzo ye-geotechnical (umhlaba/indawo) nobunjineli\n• Uhlolo lwendlu yakho\n• Ukubika iziphene okanye izikhalazo\n\nXa unxibelelana nathi, lungiselela: inombolo yobhaliso lwendlu, idilesi, iinkcukacha zakho kunye nemifanekiso yengxaki. Khetha *Unxibelelwano* ukubona indlela yokusifikelela.',
      contact:
        '*Unxibelelwano ne-NHBRC*\n📞 Simahla: {phone}\n🌐 {web}\n📍 Iofisi Enkulu: {address}\n🚨 Umnxeba wokuziphatha (ukukhohlakala / ukucela imali ngokungekho mthethweni): {ethics}\n\n⚠️ I-NHBRC ayikhange icele imali ngokungekho mthethweni. Bika nabani na owenzayo.',
    },
  },

  // ─────────────────────────────── SESOTHO ───────────────────────────────
  st: {
    name: 'Sesotho',
    langSet: 'Puo e behilwe ho Sesotho ✅',
    menuBody: 'Nka u thusa joang kajeno? Tobetsa *Menyu* ebe o khetha sehlooho.',
    menuFooter: 'Ngola menyu neng kapa neng',
    menuButton: 'Menyu',
    btnMenu: 'Menyu e kgolo',
    btnLanguage: 'Fetola puo',
    more: 'Na ho na le ho hong hape mo nka u thusang ka ho?',
    fallback: 'Tshwarelo, ha ke a utlwisisa. Ka kopo sebedisa *Menyu* ho kgetha sehlooho.',
    note: 'ℹ️ Ditlhokahalo le ditefo di ka fetoha. Ka kopo netefatsa ho {web}.',
    rows: {
      about: ['NHBRC ke eng?', 'Re bomang mme re etsa eng'],
      services: ['Ditshebeletso tsa rona', 'Tsohle tseo NHBRC e di etsang'],
      register: ['Ngodisa moahi', 'Ho ngodisa jwalo ka moahi wa matlo'],
      renew: ['Ntlafatsa ngodiso', 'Mokgwa wa ho ntlafatsa ngodiso'],
      enrol: ['Ngodisa ntlo e ntjha', 'Mehato le tshireletso (warranty)'],
      technical: ['Dipotso tsa theknike', 'Hlahlobo, diphoso le melawana'],
      contact: ['Ikopanye le NHBRC', 'Mohala, webosaete, diofisi'],
      language: ['Fetola puo', 'Kgetha puo e nngwe'],
    },
    answers: {
      about:
        '*NHBRC ke eng?*\nNational Home Builders Registration Council (NHBRC) ke mokgatlo wa mmuso wa Afrika Borwa o thehilweng ka Housing Consumers Protection Measures Act ya 1998 (Act 95 ya 1998). E sireletsa bareki ba matlo mme e laola indasteri ya kaho ya matlo.',
      services:
        '*Seo NHBRC e se etsang*\n• Ho ngodisa le ho ntlafatsa ngodiso ya baahi ba matlo\n• Ho ngodisa matlo a macha\n• Ho hlahloba matlo ha a ntse a hahuwa\n• Tshireletso (warranty) ya diphoso tsa sebopeho le tse ding\n• Keletso ya theknike (geotechnical le boenjiniere ba thepa)\n• Ho koetlisa baahi ba matlo\n• Ho sebetsana le dingongorego le ho rarolla likhohlano',
      register:
        '*Ngodiso ya moahi wa matlo*\nMoahi e mong le e mong o tlameha ho ngodiswa le NHBRC pele a aha ntlo.\n\n*Tse hlokahalang hangata:*\n• Kopi ya ID e netefaditsweng (le motsamaisi e mong le e mong haeba e le khamphani)\n• Ditokomane tsa ngodiso ya khamphani (haeba ho hlokahala)\n• Bopaki ba aterese\n• Bopaki ba maitemohelo / dikgetho tsa thuto\n• Dintlha tsa ho obeya lekgetho\n\n*Jwang:* Kenya kopo ka portal ya NHBRC inthaneteng kapa ofising ya Customer Care. Ha o amohelwa o tla fumana nomoro le setifikeiti sa ngodiso.',
      renew:
        '*Ntlafatsa ngodiso ya hao*\nNgodiso e sebetsa dikgwedi tse 12. E ntlafatse pele e fela — moahi ya nang le ngodiso e felletseng a ka se ngodise matlo a macha.\n\n*Mehato:*\n1. Kena ka portal ya NHBRC (kapa etela ofisi)\n2. Ntlafatsa dintlha le ditokomane\n3. Lefa tjhelete ya ho ntlafatsa\n4. Jarolla setifikeiti se ntlafaditsweng',
      enrol:
        '*Ngodisa ntlo e ntjha*\nNtlo e nngwe le e nngwe e ntjha e tlameha ho ngodiswa le NHBRC bonyane matsatsi a 15 pele kaho e qala. Ke moahi ya ngodisitsweng feela ya ka ngodisang ntlo.\n\n*Tse hlokahalang hangata:*\n• Nomoro ya ngodiso ya moahi\n• Dipolane tsa kaho tse dumelletsweng\n• Bopaki ba bong ba thepa\n• Boleng ba ntlo / ditjeo tsa kaho\n\nNHBRC e hlahloba ntlo ha e ntse e hahuwa. Ha e ngodisitswe, ntlo e fumana tshireletso (warranty):\n• Dikgwedi tse 3 – diphoso tsa mosebetsi kapa thepa\n• Dikgwedi tse 12 – ho dutla ha marulelo le mongobo maboteng le fatshe\n• Dilemo tse 5 – diphoso tse kgolo tsa sebopeho',
      technical:
        '*Dipotso tsa theknike*\nRe ka u thusa ka:\n• Home Building Manual le ditlhokahalo tsa theknike\n• Dipotso tsa geotechnical (mobu/sebaka) le boenjiniere\n• Tlhahlobo ya ntlo ya hao\n• Ho tlaleha diphoso kapa dingongorego\n\nHa o ikopanya le rona, lokisa: nomoro ya ngodiso ya ntlo, aterese, dintlha tsa hao le difoto tsa bothata. Kgetha *Ikopanye le NHBRC* ho bona hore o ka re fihlella jwang.',
      contact:
        '*Ikopanye le NHBRC*\n📞 Mahala: {phone}\n🌐 {web}\n📍 Ofisi e Kgolo: {address}\n🚨 Mohala wa boitshwaro (ho kopa tjhelete ka sephiri): {ethics}\n\n⚠️ NHBRC ha e kopa tjhelete ka sephiri le kamehla. Tlaleha mang kapa mang ya e kopang.',
    },
  },
};

// Merge the extra strings (province contact flow + status check) into each language.
import { EXTRA } from './content-extra.js';
for (const code of LANG_ORDER) {
  const { rows, ...rest } = EXTRA[code];
  Object.assign(LANGS[code], rest);
  Object.assign(LANGS[code].rows, rows);
}
