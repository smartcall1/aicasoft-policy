import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('textscan/index.html contains the required identifiers and facts', () => {
  const html = read('textscan/index.html');
  for (const s of [
    '글자 추출',
    'Text Capture',
    'kr.aicasoft.textscan',
    '더퍼스트타이탄',
    'support@aicasoft.app',
    'Google AdMob',
    'ML Kit',
    'https://policies.google.com/privacy',
  ]) {
    assert.ok(html.includes(s), `textscan/index.html: '${s}' missing`);
  }
});

test('textscan/index.html has no template leftovers or JSX residue', () => {
  const html = read('textscan/index.html');
  for (const bad of ['{{', '}}', 'TODO', '[앱 이름]', 'className', '{name}']) {
    assert.ok(!html.includes(bad), `textscan/index.html: '${bad}' still present`);
  }
});

test('first page index.html links to textscan/', () => {
  assert.match(read('index.html'), /href="textscan\/"/);
});
