import 'dotenv/config';

// Works in Node (reads .env) and in the browser demo build (no process object)
const env = typeof process !== 'undefined' ? process.env : {};

export const config = {
  port: env.PORT || 3001,
  token: env.WHATSAPP_TOKEN,
  phoneNumberId: env.PHONE_NUMBER_ID,
  verifyToken: env.VERIFY_TOKEN,
  appSecret: env.APP_SECRET,
  graphVersion: env.GRAPH_API_VERSION || 'v23.0',
  contact: {
    phone: env.NHBRC_PHONE || '0800 200 824',
    web: env.NHBRC_WEB || 'www.nhbrc.org.za',
    address: env.NHBRC_ADDRESS || '27 Leeuwkop Road, Sunninghill, Johannesburg, 2157',
    ethics: env.NHBRC_ETHICS || '0800 203 698',
    // ⚠️ Placeholder – confirm real office hours with NHBRC and set NHBRC_HOURS in .env
    hours: env.NHBRC_HOURS || 'Mon–Fri 08:00–16:30',
  },
  status: {
    provider: env.STATUS_PROVIDER || 'mock', // 'mock' (fake test data) or 'http' (real service)
    url: env.STATUS_API_URL,
    key: env.STATUS_API_KEY,
  },
};
