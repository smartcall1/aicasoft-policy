// 다남겨톡 방침 페이지 생성. 앱의 privacy.ts 를 직접 import 한다(별도 파싱 없음).
// 필요: Node 22.18+ (TypeScript 타입 제거 기본 지원; 그 아래면 `node --experimental-strip-types` 로 실행).
// 사용: node scripts/build-danamtok.mjs [privacy.ts 경로]
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { CONTACT, esc, page, write, sectionsHtml, contactHtml, effectiveSub } from './lib.mjs';

const SRC = resolve(process.argv[2] ?? process.env.DANAMTOK_PRIVACY_TS ?? 'D:/Codes/ssum_analyzer-panel/app/src/content/privacy.ts');

let mod;
try {
  mod = await import(pathToFileURL(SRC).href);
} catch (e) {
  console.error(`privacy.ts 를 불러오지 못했어요: ${SRC}\n${e.message}\nNode ${process.version} — 22.18 미만이면 --experimental-strip-types 를 붙여 실행하세요.`);
  process.exit(1);
}
const { PRIVACY_COPY: C, PRIVACY_CONTACT: PC, PRIVACY_EFFECTIVE_DATE: DATE } = mod;
if (!C?.sections?.length || !DATE) {
  console.error('privacy.ts 에서 PRIVACY_COPY.sections 또는 PRIVACY_EFFECTIVE_DATE 를 찾지 못했어요.');
  process.exit(1);
}
for (const k of ['company', 'officer', 'email']) {
  if (PC?.[k] !== CONTACT[k]) console.warn(`경고: 앱의 PRIVACY_CONTACT.${k}(${PC?.[k]}) 와 scripts/lib.mjs 의 CONTACT.${k}(${CONTACT[k]}) 가 달라요. 사이트는 lib.mjs 값을 써요.`);
}

// items 가 비어 있는 절은 책임자 표로 채운다(앱 화면과 같은 규칙)
const sections = C.sections.map((s) =>
  s.items.length === 0 ? { title: s.title, html: contactHtml({ company: C.companyLabel, officer: C.officerLabel, email: C.emailLabel }) } : s,
);
const body = `<p>${esc(C.intro)}</p>
${sectionsHtml(sections)}
<section>
<h2>${esc(C.contactTitle)}</h2>
<p>${esc(C.contact)}</p>
</section>
<p class="back"><a href="../">다른 앱 방침 보기</a></p>`;

write(
  'danamtok/index.html',
  page({ title: '다남겨톡 개인정보처리방침', heading: '다남겨톡 개인정보처리방침', sub: effectiveSub(DATE), body, cssPath: '../style.css' }),
);
