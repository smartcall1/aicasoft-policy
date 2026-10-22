// 공용 상수와 페이지 틀. 책임자·문의처·시행일은 여기 한 곳에서만 고친다.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const SERVICE_NAME = 'AICA SOFT';
// 개인정보처리자는 사업자 상호, AICA SOFT 는 서비스명(2026-10-10 결정)
export const CONTACT = { company: '더퍼스트타이탄', service: SERVICE_NAME, officer: '더퍼스트타이탄 개인정보 보호 담당', email: 'hsindevelop@gmail.com' };
export const EFFECTIVE_DATE = '2026-10-09';

// GitHub Pages 프로젝트 사이트 주소의 경로(저장소 이름). 404.html 의 홈 링크에만 쓴다.
export const SITE_BASE = '/aicasoft-policy/';

// 앱 이름은 각 저장소 main 브랜치 app.config.ts 의 name.
export const APPS = [
  { slug: 'danamtok', name: '다남겨톡', desc: '지워진 메신저 알림을 이 기기에 남겨 두는 앱' },
  { slug: 'bow108', name: '108배·염주', desc: '108배와 염주 횟수를 세는 앱' },
  { slug: 'bokbulbok', name: '복불복 모음 (Quick Picks)', desc: 'English / 日本語 / Español / Português / 한국어 privacy policy', en: true },
  { slug: 'scoreboard', name: '스포츠 점수판 (Sports Scoreboard)', desc: 'English / 한국어 privacy policy', en: true },
  { slug: 'lifecalc', name: '사회생활 계산기', desc: '월급 실수령·퇴직금·연차·대출 상환 등 직장인 생활 계산기 11종' },
  { slug: 'blastline', name: '폭파 한 줄 (Blast Line)', desc: 'English / 한국어 privacy policy', en: true },
  { slug: 'kwangpick', name: '쾅픽', desc: '두 선택지 중 하나를 AI가 한 줄로 골라 주는 앱' },
  { slug: 'alba-pay', name: '월급마중', desc: '알바 근무를 기록해 월급과 주휴수당을 계산하는 앱' },
  { slug: 'aero', name: 'AERO VOYAGE(에어로 보이지)', desc: '항공편 실시간 추적과 시차 적응을 돕는 비행 동반 앱' },
  { slug: 'kids-chess', name: '꼬마체스', desc: '아이가 체스를 배우고 노는 앱' },
  { slug: 'name-demo', name: '이름마중', desc: '사주를 보고 아기 이름 후보를 풀이해 주는 앱' },
  { slug: 'olhaejeom', name: '이어닷(YearDot)', desc: '올해가 얼마나 지났는지 점으로 그려 잠금화면을 매일 바꿔 주는 앱' },
  { slug: 'subway-escape', name: '지하철 탈출', desc: '열차를 탭해 탈출시키는 퍼즐 게임' },
  { slug: 'numbaseball', name: '스리볼 (Bulls & Cows)', desc: 'English / 日本語 / 한국어 privacy policy', en: true },
  { slug: 'dotsboxes', name: '점잇기 박스 (Dots & Boxes)', desc: 'English / 한국어 privacy policy', en: true },
  // 영어 방침 페이지(앱 config 의 privacyPolicyUrl 이 .../tipsplit/). 앱 이름은 app.config.ts 의 name.
  { slug: 'tipsplit', name: 'FairTip', desc: 'English privacy policy', en: true },
  { slug: 'beatset', name: 'Beatset', desc: 'English privacy policy', en: true },
  { slug: 'bingo-caller', name: 'Bingo Caller Voice', desc: 'English privacy policy', en: true },
  // 앱 config 의 privacyPolicyUrl 이 .../lastdays/ (앱 이름 Lastmark). 영어·한국어를 한 페이지에 함께 둔다.
  { slug: 'lastdays', name: 'Lastmark', desc: 'English / 한국어 privacy policy', en: true },
  // 앱 config 의 privacyPolicyUrl 이 .../charcount/ (앱 이름 글자수 세기 / Char Count). 영어·한국어를 한 페이지에 함께 둔다.
  { slug: 'charcount', name: 'Char Count (글자수 세기)', desc: 'English / 한국어 privacy policy', en: true },
  { slug: 'percentcalc', name: '퍼센토', desc: 'English / 한국어 privacy policy', en: true },
  { slug: 'noisemeter', name: 'dB 줄자', desc: 'English / 한국어 privacy policy', en: true },
  { slug: 'classicboard', name: '클래식 보드게임', desc: 'English / 한국어 privacy policy', en: true },
];

// 출시 전에 lifecalc 로 통합돼 앱이 나오지 않은 옛 폴더. 이미 공개된 주소가 404가 되지 않도록 안내 페이지만 둔다.
export const RETIRED = [
  { slug: 'carloan', name: '자동차 할부' },
  { slug: 'salarycalc', name: '직장인 계산기' },
];

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 본문 HTML을 받아 완성된 페이지 문자열을 돌려준다. cssPath: 이 페이지에서 본 style.css 상대 경로 */
export function page({ title, heading, sub, body, cssPath, inlineCss = '', lang = 'ko', footer = '더퍼스트타이탄 (서비스명 AICA SOFT)', headExtra = '' }) {
  const css = inlineCss ? `<style>${inlineCss}</style>` : `<link rel="stylesheet" href="${cssPath}">`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
${headExtra}<title>${esc(title)}</title>
${css}
</head>
<body>
<header>
<h1>${esc(heading)}</h1>
${sub ? `<p class="sub">${sub}</p>` : ''}
</header>
<main>
${body}
</main>
<footer><p>${esc(footer)}</p></footer>
</body>
</html>
`;
}

export function write(rel, text) {
  const p = join(ROOT, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, text, 'utf8');
  console.log('작성:', rel);
}

/** 책임자 표 (정의 목록) */
export function contactHtml(labels = {}, withRep = false) {
  const L = { company: '개인정보처리자', officer: '개인정보 보호책임자', email: '문의 이메일', ...labels };
  return `<dl class="contact">
<dt>${esc(L.company)}</dt><dd>${esc(CONTACT.company)} (서비스명 ${esc(CONTACT.service)})</dd>
${withRep ? `<dt>대표자</dt><dd>KIM KWANGOK</dd>
` : ''}<dt>${esc(L.officer)}</dt><dd>${esc(CONTACT.officer)}</dd>
<dt>${esc(L.email)}</dt><dd><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></dd>
</dl>`;
}

export function sectionsHtml(sections) {
  return sections
    .map(
      (s) => `<section>
<h2>${esc(s.title)}</h2>
${s.html ?? `<ul>\n${s.items.map((i) => `<li>${esc(i)}</li>`).join('\n')}\n</ul>`}
</section>`,
    )
    .join('\n');
}

export const effectiveSub = (date) => `시행일 ${esc(date)}`;
