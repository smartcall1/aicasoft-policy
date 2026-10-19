// 글자수 세기(Char Count, slug charcount) 방침 페이지 생성. 한 주소에 영어(위)·한국어(아래)를 함께 둔다.
// 기준: charcount main c0d3ad3 src/screens/PrivacyScreen.tsx(PrivacyKo/PrivacyEn), src/consent/transferNotice.ts, app.config.ts(removeAds.enabled=false 이므로 인앱 결제 절 없음)
// 문구는 앱 안 방침 화면과 같다.
import { esc, page, write } from './lib.mjs';

const EFFECTIVE = '2026-10-18';
const SERVICE = 'AICA SOFT';
const EMAIL = 'hsindevelop@gmail.com';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/charcount/';
const GOOGLE = 'https://policies.google.com/privacy';

const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, inner) => `<section>\n<h2>${esc(title)}</h2>\n${inner}\n</section>`;
const dl = (items) => `<dl class="contact">\n${items.map(([l, v]) => `<dt>${esc(l)}</dt><dd>${esc(v)}</dd>`).join('\n')}\n</dl>`;

const en = {
  title: 'Privacy policy',
  intro: 'Char Count ("the app") does not collect personal information such as your name or contact details, and does not store anything on a server. The text you type is saved only on this device (auto-save) and is never sent anywhere.',
  storedHead: 'What is stored on this device',
  stored: ['Your text, your goal, and settings such as appearance, language and sound. Uninstalling the app or tapping "Clear" removes them.', 'The app reads the clipboard only when you tap the Paste button, to put that text into the input box; it does not store the clipboard separately or send it anywhere.'],
  adsHead: 'Ads (Google AdMob)',
  ads: 'The app shows Google AdMob ads to stay free. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP), app interactions and diagnostics. Users in the EEA and UK are asked for consent on first launch and can change it anytime under "Ad privacy options" in Settings (this item appears in Settings only where consent management is required, such as the EEA and UK). You can also reset your advertising ID or turn off personalized ads in your device settings. If you decline or consent cannot be confirmed, the app does not request ads.',
  transferHead: 'Transfers outside your country',
  transfer: ['For ads, the data above is sent to Google LLC in the United States (and may be moved to other countries where Google has servers), each time an ad is requested, over an encrypted connection. Text you type is never included. Google keeps it under its own retention policy. To stop, reset or delete your advertising ID or uninstall the app; the app keeps working either way.'],
  retentionHead: 'Retention and deletion',
  retention: ["Text and settings stored on the device are deleted when you uninstall the app. Ad data sent to Google follows Google's retention policy. To request deletion of data already sent, contact us below.", 'To request access to, correction of, deletion of, or suspension of processing of your personal information, email us at the contact below. We handle requests without delay, within 10 days.'],
  ageHead: 'Children',
  age: 'The app is not directed at children under 14 and does not knowingly collect information from children.',
  thirdPartyHead: 'Third-party policy',
  thirdParty: `Google Privacy Policy: ${GOOGLE}`,
  contactHead: 'Contact',
  operator: `Data controller: The First Titan (service name: ${SERVICE})`,
  officer: 'Privacy officer and contact: The First Titan',
  publicUrl: `Public page: ${PUBLIC_URL}`,
};

const ko = {
  title: '개인정보처리방침',
  intro: '글자수 세기(이하 "앱")는 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에 입력한 글은 이 기기 안에만 저장되고(자동 저장), 어디로도 보내지 않아요.',
  storedHead: '기기에 저장하는 것',
  stored: ['입력한 글, 목표, 화면 모드·언어·소리 같은 설정. 앱을 삭제하거나 "지우기"를 누르면 지워져요.', '붙여넣기 버튼을 누를 때만 클립보드의 글을 읽어 입력칸에 넣으며, 클립보드 내용을 따로 저장하거나 밖으로 보내지 않아요.'],
  adsHead: '광고(Google AdMob)',
  ads: '앱은 무료 제공을 위해 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자에게는 처음 실행할 때 동의를 구하며, 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있어요(이 항목은 해당 지역에서 동의 관리가 필요한 경우에만 설정에 표시돼요). 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수도 있어요. 동의를 거부하거나 확인에 실패하면 앱은 광고를 요청하지 않아요.',
  transferHead: '개인정보의 국외 이전',
  transferIntro: '광고를 위해 아래 정보가 목적별로 국외(미국 Google LLC)로 이전돼요. 거부하려면 기기 설정에서 광고 ID를 재설정·삭제하거나 앱을 삭제하면 돼요.',
  transferName: '광고(Google AdMob)',
  transferItems: [
    ['이전되는 항목', '광고 ID, IP 주소, 기기 정보(기종·운영체제·언어 등), 광고 노출·클릭 기록 (앱에 입력한 내용은 이전하지 않아요)'],
    ['이전 국가·시기·방법', '미국(Google 서버가 있는 다른 나라로 옮겨질 수 있어요). 앱을 쓰는 동안 광고를 요청할 때마다 암호화된 네트워크로 전송'],
    ['이전받는 자', `Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google 개인정보 문의: ${GOOGLE}. 앱 관련 문의는 개인정보 보호책임자(${EMAIL})`],
    ['이용 목적·보유 기간', '광고 표시, 광고 성과 측정, 부정 클릭 방지. 보유 기간은 Google의 보관 정책을 따라요'],
    ['거부 방법과 효과', "기기 설정에서 광고 ID를 재설정·삭제하거나 맞춤 광고를 끌 수 있고, 앱을 삭제하면 더 이상 보내지 않아요. 유럽경제지역(EEA)·영국 사용자는 처음 실행할 때 광고 동의를 묻고 설정의 '광고 개인정보 옵션'에서 바꿀 수 있어요. 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 뜨지 않거나 맞춤이 아닌 일반 광고가 뜰 수 있어요."],
  ],
  retentionHead: '보관 기간과 삭제',
  retention: ['앱이 기기에 저장하는 글과 설정값은 앱을 삭제하면 함께 지워져요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따라요. 앱을 삭제하면 더 이상 보내지 않아요. 이미 보낸 데이터의 삭제 요청은 아래 문의처로 보내 주세요.', '개인정보 열람·정정·삭제(처리정지 포함) 요청은 아래 연락처로 이메일을 보내 주세요. 요청은 지체 없이(10일 이내) 처리해요.'],
  ageHead: '이용 연령',
  age: '앱은 만 14세 미만 어린이를 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않아요.',
  thirdPartyHead: '제3자 처리방침',
  thirdParty: `Google 개인정보처리방침: ${GOOGLE}`,
  contactHead: '문의',
  operator: `개인정보처리자: 더퍼스트타이탄 (서비스명 ${SERVICE})`,
  officer: '개인정보 보호 담당: 더퍼스트타이탄',
  publicUrl: `공개 주소: ${PUBLIC_URL}`,
};

const contact = (t) => sec(t.contactHead, [p(t.operator), p(t.officer), `<p><a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p>`, p(t.publicUrl)].join('\n'));

const block = (id, lang, t, transfer) =>
  `<div id="${id}" lang="${lang}">\n<h2 class="lang-title">${esc(t.title)}</h2>\n` +
  [
    p(t.intro),
    sec(t.storedHead, t.stored.map(p).join('\n')),
    sec(t.adsHead, p(t.ads)),
    sec(t.transferHead, transfer),
    sec(t.retentionHead, t.retention.map(p).join('\n')),
    sec(t.ageHead, p(t.age)),
    sec(t.thirdPartyHead, p(t.thirdParty)),
    contact(t),
  ].join('\n') +
  '\n</div>';

const body = [
  `<p><a href="#en">English</a> | <a href="#ko">한국어</a></p>`,
  block('en', 'en', en, en.transfer.map(p).join('\n')),
  '<hr>',
  block('ko', 'ko', ko, [p(ko.transferIntro), `<h3>${esc(ko.transferName)}</h3>\n${dl(ko.transferItems)}`].join('\n')),
].join('\n');

write(
  'charcount/index.html',
  page({ title: 'Char Count Privacy Policy', heading: 'Char Count Privacy Policy / 개인정보처리방침', sub: `Effective date ${EFFECTIVE} / 시행일 ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: `The First Titan (${SERVICE})` }),
);
