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

test('a returning greeting offers a localized topic guide', async () => {
  const from = 'test:returning-greeting';
  resetSession(from);
  await handleMessage(from, { id: 'lang_en' });

  const replies = await handleMessage(from, { text: 'Hello!' });

  assert.match(replies[0].body, /I can help with NHBRC registration/);
  assert.equal(replies[1].type, 'list');
  assert.equal(replies[1].rows.length, 9);
  assert.ok(replies[1].rows.some((row) => row.id === 'topic_status'));
});

test('help opens a topic guide and selected topics return their existing answers', async () => {
  const from = 'test:help-guide';
  resetSession(from);
  await handleMessage(from, { id: 'lang_en' });

  const guide = await handleMessage(from, { text: 'help' });
  assert.equal(guide[0].type, 'list');
  assert.ok(guide[0].rows.some((row) => row.id === 'topic_enrol'));

  const answer = await handleMessage(from, { id: 'topic_enrol' });
  assert.match(answer[0].body, /Enrol a new home/);

  const mainMenu = await handleMessage(from, { text: 'menu' });
  assert.ok(mainMenu[0].rows.some((row) => row.id === 'topic_help'));
  assert.equal(mainMenu[0].rows.length, 10);
});

test('common questions route to useful topics and complaint answers offer contact', async () => {
  const from = 'test:common-questions';
  resetSession(from);
  await handleMessage(from, { id: 'lang_en' });

  const builder = await handleMessage(from, { text: 'What documents do I need to register as a builder?' });
  assert.match(builder[0].body, /Home builder registration/);

  const duration = await handleMessage(from, { text: 'How long is my registration valid?' });
  assert.match(duration[0].body, /Registration is valid for 12 months/);

  const enrolment = await handleMessage(from, { text: 'How many days before I start building?' });
  assert.match(enrolment[0].body, /at least 15 days before construction starts/);

  const complaint = await handleMessage(from, { text: 'How do I report a defect?' });
  assert.match(complaint[0].body, /Technical enquiries/);
  assert.ok(complaint[1].buttons.some((button) => button.id === 'topic_contact'));
});

test('fee questions avoid stale amounts and link users to current NHBRC help', async () => {
  const from = 'test:fees';
  resetSession(from);
  await handleMessage(from, { id: 'lang_en' });

  const replies = await handleMessage(from, { text: 'How much are the registration fees?' });
  assert.match(replies[0].body, /may change/);
  assert.match(replies[0].body, /nhbrc\.org\.za/i);
  assert.ok(replies[1].buttons.some((button) => button.id === 'topic_contact'));
});

test('help topic titles and choices fit every supported language', async () => {
  const languages = ['en', 'zu', 've', 'nso', 'xh', 'st'];

  for (const language of languages) {
    const from = `test:help-${language}`;
    resetSession(from);
    const menu = await handleMessage(from, { id: `lang_${language}` });
    assert.ok(menu[1].rows.some((row) => row.id === 'topic_help'));

    const guide = await handleMessage(from, { id: 'topic_help' });
    assert.equal(guide[0].type, 'list');
    assert.ok(guide[0].rows.length <= 10);
    assert.ok(guide[0].body.length > 0);
    assert.ok(guide[0].button.length <= 20);
    for (const row of guide[0].rows) {
      assert.ok(row.title.length <= 24, `${language} row title is too long: ${row.title}`);
      assert.ok(row.description.length <= 72, `${language} row description is too long: ${row.description}`);
    }
  }
});
