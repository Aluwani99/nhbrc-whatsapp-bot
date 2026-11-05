import test from 'node:test';
import assert from 'node:assert/strict';
import { handleMessage, resetSession } from '../src/bot.js';

const chooseLanguage = (from, selection) => handleMessage(from, selection);

test('a substantive first message is answered after typed language selection', async () => {
  const from = 'test:typed-language';
  resetSession(from);

  const prompt = await handleMessage(from, { text: 'I need to renew my registration' });
  assert.equal(prompt[0].type, 'list');
  assert.equal(prompt[0].rows[0].id, 'lang_en');

  const replies = await chooseLanguage(from, { text: 'English' });
  assert.match(replies[0].body, /Language set to English/);
  assert.match(replies[1].body, /Renew your registration/);

  const next = await handleMessage(from, { text: 'menu' });
  assert.equal(next.length, 1);
  assert.match(next[0].body, /How can I help you today/);
});

test('a substantive first message is answered after interactive language selection', async () => {
  const from = 'test:interactive-language';
  resetSession(from);

  const prompt = await handleMessage(from, { text: 'I want to enrol a new home' });
  assert.equal(prompt[0].type, 'list');

  const replies = await chooseLanguage(from, { id: 'lang_en' });
  assert.match(replies[0].body, /Language set to English/);
  assert.match(replies[1].body, /Enrol a new home/);
});

test('a greeting-only first message shows language choices without a queued answer', async () => {
  const from = 'test:greeting';
  resetSession(from);

  const prompt = await handleMessage(from, { text: 'Hi!' });
  assert.equal(prompt[0].type, 'list');

  const replies = await chooseLanguage(from, { id: 'lang_en' });
  assert.equal(replies.length, 2);
  assert.match(replies[0].body, /Language set to English/);
  assert.match(replies[1].body, /How can I help you today/);
});

test('a greeting followed by a question preserves the substantive message', async () => {
  const from = 'test:greeting-with-question';
  resetSession(from);

  const prompt = await handleMessage(from, { text: 'Hi, I want to renew my registration' });
  assert.equal(prompt[0].type, 'list');

  const replies = await chooseLanguage(from, { text: 'English' });
  assert.match(replies[1].body, /Renew your registration/);
});
