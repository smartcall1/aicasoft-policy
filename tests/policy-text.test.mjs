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

test('ringsize mentions Google AdMob and drops the false no-ads claims', () => {
  const html = read('ringsize/index.html');
  assert.match(html, /Google AdMob/);
  assert.match(html, /https:\/\/policies\.google\.com\/privacy/);
  for (const bad of ['광고가 없고', '광고 SDK도 들어 있지 않아요', 'has no ads', 'does not include an ad SDK']) {
    assert.ok(!html.includes(bad), `ringsize: false claim '${bad}' still present`);
  }
});

test('salarycalc is a merged-app notice with no AdMob, Firebase or extra sections', () => {
  const html = read('salarycalc/index.html');
  assert.match(html, /사회생활 계산기로 통합/);
  assert.ok(!html.includes('AdMob'), 'salarycalc: AdMob still present');
  assert.ok(!html.includes('Firebase'), 'salarycalc: Firebase still present');
});

test('bokbulbok drops the no-analytics claims in all five languages and states Firebase Analytics', () => {
  const html = read('bokbulbok/index.html');
  for (const bad of ['No separate analytics service', '別の利用統計サービスも使用しません', '별도의 이용 통계 서비스도 쓰지 않습니다']) {
    assert.ok(!html.includes(bad), `bokbulbok: false claim '${bad}' still present`);
  }
  assert.match(html, /Firebase Analytics/);
});

test('bokbulbok, bow108, scoreboard do not claim app error collection', () => {
  for (const f of ['bokbulbok/index.html', 'bow108/index.html', 'scoreboard/index.html']) {
    const html = read(f);
    assert.ok(!html.includes('앱 오류'), `${f}: '앱 오류' still present`);
    assert.ok(!html.includes('app error'), `${f}: 'app error' still present`);
  }
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
