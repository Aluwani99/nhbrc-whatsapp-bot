# NHBRC WhatsApp Chatbot (Node.js + React + Meta Cloud API)

A multilingual WhatsApp assistant for the NHBRC. Say **hi** → pick a language → use the menu.

**Languages:** English, isiZulu, Tshivenḓa, Sepedi, isiXhosa, Sesotho
**Topics:** What is NHBRC · Services · Builder registration · Renewal · Home enrolment & warranty · Technical enquiries · **Contact by province (9 provinces + head office)** · **Certificate status check**

## Structure
```
server/   Node.js (Express): Meta webhook, bot logic, message sender, simulator API
client/   React (Vite): in-browser WhatsApp-style tester (no WhatsApp number needed)
```
The same bot logic (`server/src/bot.js`) serves both the real WhatsApp webhook and the tester.

## 1. Try it locally (no Meta account needed)
```bash
cd server && npm install && cp .env.example .env && npm run dev
# new terminal
cd client && npm install && npm run dev      # open http://localhost:5173 and type "hi"
```

## 2. Connect to WhatsApp (Meta Cloud API)
1. Go to developers.facebook.com → **Create App** → type *Business* → add the **WhatsApp** product.
2. WhatsApp → **API Setup**: copy the **Phone number ID** → `PHONE_NUMBER_ID` in `.env`.
3. Create a **permanent token**: Business Settings → Users → *System Users* → add one → assign your app → generate a token with `whatsapp_business_messaging` and `whatsapp_business_management` → `WHATSAPP_TOKEN`.
4. Meta App → Settings → Basic: copy **App Secret** → `APP_SECRET` (the server uses it to reject fake webhook calls).
5. Expose your server over HTTPS (for testing: `ngrok http 3001`; for production: deploy to Azure App Service / any HTTPS host).
6. WhatsApp → **Configuration** → Webhook: Callback URL `https://YOUR-URL/webhook`, Verify token = your `VERIFY_TOKEN`. Click verify, then **subscribe to `messages`**.
7. Add your own number as a test recipient and send "hi".

To go live you need a verified Meta Business account and your own WhatsApp number (the test number is for development only).

## Before going live – checklist
- [ ] **Have native speakers / the NHBRC review all translations** in `server/src/content.js` (Tshivenḓa especially).
- [ ] Confirm every fact, contact number, and requirement against www.nhbrc.org.za (fees and requirements change; the bot deliberately quotes no fees).
- [ ] Replace in-memory sessions (`bot.js`) with Redis or a database.
- [ ] Add a human hand-off (e.g. forward to an NHBRC agent inbox) and a POPIA privacy notice/consent message.
- [ ] Optional: add an AI/NLP layer for free-text questions; today typed text uses simple keyword matching.

## Editing content
Everything users see lives in `server/src/content.js`. To add a language, copy one block, translate it, and add its code to `LANG_ORDER` (and an alias in `bot.js`).
WhatsApp limits to respect: list row title 24 chars, row description 72, buttons 20, max 10 list rows, max 3 reply buttons.

## Contact by province
`server/src/offices.js` holds every office (address + phone) per province. Edit that file to correct or add offices.
- Data comes from NHBRC's published regional list; it is undated, so **have NHBRC confirm every entry**.
- **Office hours are a placeholder** (`NHBRC_HOURS` in `.env`, default `Mon–Fri 08:00–16:30`). Set the real hours, or add `hours: '...'` to a single office to override.

## Status check (is my certificate expired?)
Users tap *Check my status* (under Registration and Renewal, or from the menu), type their NHBRC registration number, and get **valid / expired / suspended** with the date.
- `STATUS_PROVIDER=mock` (default) uses fake test numbers: `1234567` valid · `7654321` expired · `5555555` suspended · anything else = not found.
- `STATUS_PROVIDER=http` calls a real service. Set `STATUS_API_URL` and `STATUS_API_KEY`. The bot expects:
  `GET {STATUS_API_URL}?registrationNumber=XXXX` → `200 {"name":"...","status":"valid|expired|suspended","expiryDate":"YYYY-MM-DD"}` (or `404` if not found). If `status` is missing, it is worked out from `expiryDate`.
- **You need an official data source from the NHBRC** (an API or database view of the registration list). Don't scrape the website. Check with NHBRC about data sharing and POPIA before going live.

## Publish the prototype (GitHub Pages)
The hosted prototype runs the bot **inside the browser** (demo mode), so it needs no server. Only the browser tester is hosted – the real WhatsApp bot (`server/`) is separate and needs a Node host.

1. Create an empty repository on github.com (e.g. `nhbrc-whatsapp-bot`). **Do not tick "Add README".**
2. In the project folder run:
   ```bash
   git init
   git add .
   git commit -m "NHBRC bot prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/nhbrc-whatsapp-bot.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy prototype to GitHub Pages" to turn green (about 1–2 minutes).
5. Your link: `https://YOUR-USERNAME.github.io/nhbrc-whatsapp-bot/`. Every `git push` to `main` updates it.

Notes: never commit `.env` (it is already in `.gitignore`). GitHub Pages on a *private* repo needs a paid GitHub plan; on a free account the repo must be public.
To test the demo build locally: `cd client && VITE_DEMO=true npm run build && npx vite preview`.
