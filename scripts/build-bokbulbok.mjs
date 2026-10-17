// 복불복 모음(bokbulbok) 방침 페이지 생성. 한 주소(/bokbulbok/)에 앱이 지원하는 5개 언어(ko·en·ja·es·pt-BR)를 함께 둔다.
// 본문은 앱 안 방침과 같다: 앱 저장소(bokbulbok-appid) src/screens/legalCopy.ts 를
//   npx vite-node scripts/export-legal.ts <이 저장소>/scripts/data/bokbulbok-legal.json
// 으로 내보낸 JSON 을 읽는다. 앱 문구가 바뀌면 JSON 을 다시 내보내고 이 스크립트를 돌린다.
// 기준 코드: bokbulbok-appid docs/privacy-full-1017 (AdMob 배너·전면만 사용. 분석 SDK·결제(꺼짐)·서버·계정 없음, 권한은 병합 매니페스트 9개)
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { CONTACT, ROOT, esc, page, write } from './lib.mjs';

const data = JSON.parse(readFileSync(join(ROOT, 'scripts', 'data', 'bokbulbok-legal.json'), 'utf8'));
const ORDER = ['en', 'ja', 'es', 'pt-BR', 'ko'];
const NAV = { en: 'English', ja: '日本語', es: 'Español', 'pt-BR': 'Português', ko: '한국어' };
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
  '<p class="back"><a href="../">Back to the policy list / 他のアプリの方針 / 다른 앱 방침 보기</a></p>',
].join('\n');

write(
  'bokbulbok/index.html',
  page({
    title: 'Quick Picks (복불복 모음) Privacy Policy',
    heading: 'Quick Picks / 복불복 모음 / ランダム抽選 / Decisiones Rápidas / Decisões Rápidas',
    sub: `Privacy policy / 개인정보처리방침 / プライバシーポリシー / Política de privacidad / Política de Privacidade<br>Effective ${esc(data.effective)}`,
    body,
    cssPath: '../style.css',
    lang: 'en',
    footer: `The First Titan (${CONTACT.service})`,
  }),
);
