// 공용 상수와 페이지 틀. 책임자·문의처·시행일은 여기 한 곳에서만 고친다.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

export const SERVICE_NAME = 'AICA SOFT';
// 개인정보처리자는 사업자 상호, AICA SOFT 는 서비스명(2026-10-10 결정)
export const CONTACT = { company: '더퍼스트타이탄', service: SERVICE_NAME, officer: '김광옥', email: 'hsindevelop@gmail.com' };
export const EFFECTIVE_DATE = '2026-10-09';

// GitHub Pages 프로젝트 사이트 주소의 경로(저장소 이름). 404.html 의 홈 링크에만 쓴다.
export const SITE_BASE = '/aicasoft-policy/';

// 앱 이름은 각 저장소 main 브랜치 app.config.ts 의 name.
export const APPS = [
  { slug: 'danamtok', name: '다남겨톡', desc: '지워진 메신저 알림을 이 기기에 남겨 두는 앱' },
  { slug: 'bow108', name: '108배·염주', desc: '108배와 염주 횟수를 세는 앱' },
  { slug: 'bokbulbok', name: '복불복 모음', desc: '이름 뽑기·사다리 같은 복불복 게임 모음' },
  { slug: 'scoreboard', name: '스포츠 점수판', desc: '탁구·배드민턴 등 점수를 기록하는 앱' },
  { slug: 'lifecalc', name: '사회생활 계산기', desc: '월급 실수령·퇴직금·연차·대출 상환 등 직장인 생활 계산기 8종' },
  { slug: 'jumprope', name: '콩콩 줄넘기', desc: '타이밍 맞춰 줄넘기를 넘는 캐주얼 게임' },
  { slug: 'blastline', name: '폭파 한 줄', desc: '한 줄을 폭파시키는 퍼즐 게임' },
  { slug: 'kwangpick', name: '쾅픽', desc: '두 선택지 중 하나를 AI가 한 줄로 골라 주는 앱' },
];

// 출시 전에 lifecalc 로 통합돼 앱이 나오지 않은 옛 폴더. 이미 공개된 주소가 404가 되지 않도록 안내 페이지만 둔다.
export const RETIRED = [
  { slug: 'carloan', name: '자동차 할부' },
  { slug: 'salarycalc', name: '직장인 계산기' },
];

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** 본문 HTML을 받아 완성된 페이지 문자열을 돌려준다. cssPath: 이 페이지에서 본 style.css 상대 경로 */
export function page({ title, heading, sub, body, cssPath, inlineCss = '' }) {
  const css = inlineCss ? `<style>${inlineCss}</style>` : `<link rel="stylesheet" href="${cssPath}">`;
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>${esc(title)}</title>
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
<footer><p>더퍼스트타이탄 (서비스명 AICA SOFT)</p></footer>
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
export function contactHtml(labels = {}) {
  const L = { company: '개인정보처리자', officer: '개인정보 보호책임자', email: '문의 이메일', ...labels };
  return `<dl class="contact">
<dt>${esc(L.company)}</dt><dd>${esc(CONTACT.company)} (서비스명 ${esc(CONTACT.service)})</dd>
<dt>${esc(L.officer)}</dt><dd>${esc(CONTACT.officer)}</dd>
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
