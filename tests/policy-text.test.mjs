import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');

test('bokbulbok, bow108, scoreboard mention Google Firebase', () => {
  for (const f of ['bokbulbok/index.html', 'bow108/index.html', 'scoreboard/index.html']) {
    const html = read(f);
    assert.match(html, /Firebase/, `${f}: Firebase missing`);
    assert.match(html, /https:\/\/policies\.google\.com\/privacy/, `${f}: Google policy link missing`);
  }
});

test('ringsize mentions Google AdMob', () => {
  const html = read('ringsize/index.html');
  assert.match(html, /Google AdMob/);
  assert.match(html, /https:\/\/policies\.google\.com\/privacy/);
});

test('salarycalc mentions AdMob, Firebase and support email', () => {
  const html = read('salarycalc/index.html');
  assert.match(html, /Google AdMob/);
  assert.match(html, /Firebase/);
  assert.match(html, /support@aicasoft\.app/);
});

test('beatset (en and ko) names the operator 더퍼스트타이탄', () => {
  for (const f of ['beatset/index.html', 'beatset/ko/index.html']) {
    assert.match(read(f), /더퍼스트타이탄/, `${f}: operator missing`);
  }
});

test('renamed apps use the new names and drop the old ones', () => {
  const cases = [
    ['babylog/index.html', '기저귀·수유 기록', '아기 기록'],
    ['runpace/index.html', 'Running Pace', 'Run Pace'],
    ['studytimer/index.html', '몇시간했지', '순공 타이머'],
  ];
  for (const [f, will, old] of cases) {
    const html = read(f);
    assert.ok(html.includes(will), `${f}: new name '${will}' missing`);
    assert.ok(!html.includes(old), `${f}: old name '${old}' still present`);
  }
});
