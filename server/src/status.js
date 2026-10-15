// Registration-certificate status lookup.
// Returns: { found:false }  or  { found:true, number, name?, status:'valid'|'expired'|'suspended', expiryDate:'YYYY-MM-DD' }
// Throws on service errors (the bot then shows a friendly "unavailable" message).
import { config } from './config.js';

export const cleanNumber = (s) => String(s).trim().toUpperCase().replace(/[\s-]/g, '');
export const isValidFormat = (s) => /^[A-Z0-9]{4,15}$/.test(cleanNumber(s));

const dayOffset = (days) => new Date(Date.now() + days * 864e5).toISOString().slice(0, 10);

// ---- MOCK provider: fake data for testing only ----
const SAMPLES = {
  1234567: { name: 'Sample Builders (Pty) Ltd', status: 'valid', expiryDate: dayOffset(200) },
  7654321: { name: 'Demo Construction cc', status: 'expired', expiryDate: dayOffset(-45) },
  5555555: { name: 'Test Homes (Pty) Ltd', status: 'suspended', expiryDate: dayOffset(90) },
};
const mock = (num) => (SAMPLES[num] ? { found: true, number: num, ...SAMPLES[num] } : { found: false });

// ---- HTTP provider: plug in a real service ----
// Expected: GET {STATUS_API_URL}?registrationNumber=XXXX  (Authorization: Bearer STATUS_API_KEY)
// 200 JSON: { "name": "...", "status": "valid|expired|suspended", "expiryDate": "YYYY-MM-DD" }
//   (if "status" is missing it is worked out from expiryDate)   404 = number not found
async function viaHttp(num) {
  const url = new URL(config.status.url);
  url.searchParams.set('registrationNumber', num);
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${config.status.key}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(8000),
  });
  if (res.status === 404) return { found: false };
  if (!res.ok) throw new Error(`Status service returned ${res.status}`);
  const d = await res.json();
  let status = String(d.status || '').toLowerCase();
  if (!['valid', 'expired', 'suspended'].includes(status)) {
    status = d.expiryDate && d.expiryDate < dayOffset(0) ? 'expired' : 'valid';
  }
  return { found: true, number: num, name: d.name, status, expiryDate: d.expiryDate };
}

export async function lookupRegistration(raw) {
  const num = cleanNumber(raw);
  if (config.status.provider === 'http') {
    if (!config.status.url) throw new Error('STATUS_API_URL is not set');
    return viaHttp(num);
  }
  return mock(num);
}
