import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('knifethrow/index.html contains the required identifiers and facts', () => {
  const html = read('knifethrow/index.html');
  for (const s of [
    '칼 던지기',
    'Knife Throw',
    'kr.aicasoft.knifethrow',
    '더퍼스트타이탄',
    'support@aicasoft.app',
    'Google AdMob',
    'https://policies.google.com/privacy',
  ]) {
    assert.ok(html.includes(s), `knifethrow/index.html: '${s}' missing`);
  }
});

test('knifethrow/index.html has no template leftovers or JSX residue', () => {
  const html = read('knifethrow/index.html');
  for (const bad of ['{{', '}}', 'TODO', '[앱 이름]', 'className', '{name}']) {
    assert.ok(!html.includes(bad), `knifethrow/index.html: '${bad}' still present`);
  }
});
