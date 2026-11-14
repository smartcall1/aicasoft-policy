import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('janggi/index.html contains the required identifiers and facts', () => {
  const html = read('janggi/index.html');
  for (const s of [
    '장기',
    'Korean Chess',
    'kr.aicasoft.janggi',
    '더퍼스트타이탄',
    'support@aicasoft.app',
    'Google AdMob',
    'https://policies.google.com/privacy',
  ]) {
    assert.ok(html.includes(s), `janggi/index.html: '${s}' missing`);
  }
});

test('janggi/index.html has no template leftovers or JSX residue', () => {
  const html = read('janggi/index.html');
  for (const bad of ['{{', '}}', 'TODO', '[앱 이름]', 'className', '{name}']) {
    assert.ok(!html.includes(bad), `janggi/index.html: '${bad}' still present`);
  }
});
