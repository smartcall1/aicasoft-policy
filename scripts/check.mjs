// 모든 html 점검: lang="ko", meta charset, viewport, 외부 리소스 없음, 내부 링크 깨짐 0
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';
import { ROOT, SITE_BASE, APPS, RETIRED } from './lib.mjs';

const htmls = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    if (n === '.git' || n === 'node_modules') continue;
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.html')) htmls.push(p);
  }
})(ROOT);

const errs = [];
const expected = ['index.html', '404.html', ...APPS.map((a) => `${a.slug}/index.html`), ...RETIRED.map((a) => `${a.slug}/index.html`)];
for (const e of expected) if (!existsSync(join(ROOT, e))) errs.push(`없음: ${e}`);

for (const f of htmls) {
  const rel = relative(ROOT, f).replace(/\\/g, '/');
  const s = readFileSync(f, 'utf8');
  const noStyle = s.replace(/<style>[\s\S]*?<\/style>/, '');
  if (!/<html lang="ko">/.test(s)) errs.push(`${rel}: <html lang="ko"> 없음`);
  if (!/<meta charset="utf-8">/i.test(s)) errs.push(`${rel}: meta charset 없음`);
  if (!/<meta name="viewport" content="[^"]*width=device-width/.test(s)) errs.push(`${rel}: viewport 없음`);
  if (/<script|<iframe|https?:\/\//i.test(noStyle)) errs.push(`${rel}: 스크립트 또는 외부 URL 포함`);
  if (!/<footer><p>더퍼스트타이탄 \(서비스명 AICA SOFT\)<\/p><\/footer>/.test(s)) errs.push(`${rel}: 맨 아래 더퍼스트타이탄(서비스명 AICA SOFT) 없음`);
  for (const m of s.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (u.startsWith('mailto:')) continue;
    let target;
    if (u.startsWith(SITE_BASE)) target = join(ROOT, u.slice(SITE_BASE.length));
    else if (/^[a-z]+:|^\//.test(u)) {
      errs.push(`${rel}: 허용 안 되는 링크 ${u}`);
      continue;
    } else target = resolve(dirname(f), u.split('#')[0]);
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
    if (!existsSync(target)) errs.push(`${rel}: 깨진 링크 ${u}`);
  }
}
console.log(`html ${htmls.length}개 점검`);
if (errs.length) {
  console.error(errs.join('\n'));
  process.exit(1);
}
console.log('통과: lang/charset/viewport/푸터/외부 리소스 없음/내부 링크 깨짐 0');
