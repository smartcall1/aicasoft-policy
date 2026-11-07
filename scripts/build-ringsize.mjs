// 반지 호수 재기(ringsize) 방침 페이지 생성. 한 주소(/ringsize/)에 ko·en 2개 언어를 함께 둔다.
// 본문은 scripts/data/ringsize-legal.json(손으로 관리). 앱에는 방침 본문 화면이 없고 설정에서 이 주소로 연결만 한다.
// 기준 코드: ringsize main 59b520e. 광고 SDK·결제 라이브러리 없음(package.json·build.gradle), 권한 INTERNET 하나, 서버 호출 코드 없음, 기록은 기기 localStorage 4칸(rs.calibration·rs.settings·rs.onboarding.seen·rs.adsRemoved), allowBackup=false. 광고·결제가 붙으면 이 문서를 먼저 고친다
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { CONTACT, ROOT, esc, page, write } from './lib.mjs';

const data = JSON.parse(readFileSync(join(ROOT, 'scripts', 'data', 'ringsize-legal.json'), 'utf8'));
const ORDER = ['ko', 'en'];
const NAV = { ko: '한국어', en: 'English' };
if (JSON.stringify([...ORDER].sort()) !== JSON.stringify([...data.langs].sort())) throw new Error(`언어 목록 불일치: ${data.langs}`);
if (data.email !== CONTACT.email) throw new Error('문의 메일이 lib.mjs CONTACT 와 다릅니다');

const p = (t) => `<p>${esc(t)}</p>`;
const ul = (items) => `<ul>\n${items.map((i) => `<li>${esc(i)}</li>`).join('\n')}\n</ul>`;
const dl = (items) => `<dl class="contact">\n${items.map((i) => `<dt>${esc(i.label)}</dt><dd>${esc(i.value)}</dd>`).join('\n')}\n</dl>`;

const block = (d) => {
  const secs = d.sections.map((s, i) => {
    const parts = [];
    for (const t of s.ps ?? []) parts.push(p(t));
    if (s.list) parts.push(ul(s.list));
    if (s.transfer) parts.push(`<h3>${esc(d.transferName)}</h3>\n${dl(d.transferItems)}`);
    if (s.contact)
      parts.push(
        p(d.operatorLine),
        p(d.officerLine),
        `<p><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></p>`,
        p(`${d.publicUrlLabel}: ${data.publicUrl}`),
        p(`${d.effectiveLabel}: ${data.effective}`),
      );
    return `<section>\n<h2>${i + 1}. ${esc(s.h)}</h2>\n${parts.join('\n')}\n</section>`;
  });
  return `<div id="${d.lang}" lang="${d.lang}">\n<h2 class="lang-title">${esc(d.title)}</h2>\n${p(d.intro)}\n${secs.join('\n')}\n</div>`;
};

const body = [
  `<p>${ORDER.map((l) => `<a href="#${l}">${NAV[l]}</a>`).join(' | ')}</p>`,
  ORDER.map((l) => block(data.docs[l])).join('\n<hr>\n'),
  '<p class="back"><a href="../">Back to the policy list / 다른 앱 방침 보기</a></p>',
].join('\n');

write(
  'ringsize/index.html',
  page({
    title: 'Ring Size Check (반지 호수 재기) Privacy Policy',
    heading: 'Ring Size Check / 반지 호수 재기',
    sub: `Privacy policy / 개인정보처리방침<br>Effective ${esc(data.effective)}`,
    body,
    cssPath: '../style.css',
    lang: 'en',
    footer: `The First Titan (${CONTACT.service})`,
  }),
);
