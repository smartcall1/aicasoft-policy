// 앱 목록(index.html)과 404.html 생성
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { APPS, EFFECTIVE_DATE, ROOT, SITE_BASE, esc, page, write, effectiveSub } from './lib.mjs';

const list = APPS.map(
  (a) => `<li><a href="${a.slug}/">${esc(a.name)} ${a.en ? 'Privacy Policy (English)' : '개인정보처리방침'}</a><span>${esc(a.desc)}</span></li>`,
).join('\n');
write(
  'index.html',
  page({
    title: 'AICA SOFT 개인정보처리방침',
    heading: 'AICA SOFT 개인정보처리방침',
    sub: effectiveSub(EFFECTIVE_DATE),
    // Search Console 소유권 확인(Play 조직 웹사이트 인증, 10-20) — 지우면 인증이 풀린다
    headExtra: '<meta name="google-site-verification" content="3RZf5WDPSfhaTnvxHpZYqitwda8e6wwiwWSabBIN5VM" />\n',
    body: `<section class="about">
<p>AICA SOFT는 더퍼스트타이탄(The First Titan)이 운영하는 모바일 앱 서비스입니다. 생활 계산기·측정 도구·보드게임 같은 작은 Android 앱을 만듭니다.</p>
<p>문의: <a href="mailto:hsindevelop@gmail.com">hsindevelop@gmail.com</a></p>
</section>
<p>AICA SOFT 앱의 개인정보처리방침을 앱별로 모아 두었습니다. 보고 싶은 앱을 골라 주십시오.</p>\n<ul class="apps">\n${list}\n</ul>`,
    cssPath: 'style.css',
  }),
);

// 404 는 어떤 깊이의 주소에서도 열리므로 스타일을 안에 넣고, 홈 링크는 SITE_BASE 절대 경로를 쓴다
write(
  '404.html',
  page({
    title: '페이지를 찾을 수 없습니다',
    heading: '페이지를 찾을 수 없습니다',
    sub: '',
    body: `<p>주소가 잘못되었거나 옮겨진 페이지입니다.</p>\n<p><a href="${SITE_BASE}">AICA SOFT 개인정보처리방침 목록으로 가기</a></p>`,
    inlineCss: readFileSync(join(ROOT, 'style.css'), 'utf8'),
  }),
);
