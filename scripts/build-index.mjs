// 앱 목록(index.html)과 404.html 생성
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { APPS, EFFECTIVE_DATE, ROOT, SITE_BASE, esc, page, write, effectiveSub } from './lib.mjs';

const list = APPS.map(
  (a) => `<li><a href="${a.slug}/">${esc(a.name)} 개인정보처리방침</a><span>${esc(a.desc)}</span></li>`,
).join('\n');
write(
  'index.html',
  page({
    title: 'AICA SOFT 개인정보처리방침',
    heading: 'AICA SOFT 개인정보처리방침',
    sub: effectiveSub(EFFECTIVE_DATE),
    body: `<p>AICA SOFT 앱의 개인정보처리방침을 앱별로 모아 두었어요. 보고 싶은 앱을 골라 주세요.</p>\n<ul class="apps">\n${list}\n</ul>`,
    cssPath: 'style.css',
  }),
);

// 404 는 어떤 깊이의 주소에서도 열리므로 스타일을 안에 넣고, 홈 링크는 SITE_BASE 절대 경로를 쓴다
write(
  '404.html',
  page({
    title: '페이지를 찾을 수 없어요',
    heading: '페이지를 찾을 수 없어요',
    sub: '',
    body: `<p>주소가 잘못되었거나 옮겨진 페이지예요.</p>\n<p><a href="${SITE_BASE}">AICA SOFT 개인정보처리방침 목록으로 가기</a></p>`,
    inlineCss: readFileSync(join(ROOT, 'style.css'), 'utf8'),
  }),
);
