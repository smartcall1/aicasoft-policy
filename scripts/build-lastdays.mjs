// Lastmark(slug lastdays) 방침 페이지 생성. 영어 기본 앱이라 한 주소에 영어(위)·한국어(아래)를 함께 둔다.
// 기준: lm-privacy-en 커밋 4c89809 src/i18n/privacy.ts(ko/en 22키), src/consent/transferNotice.ts(ko 국외 이전 항목), app.config.ts(name, operatorName(En), serviceName, privacyOfficer(En), contactEmail, privacyPolicyUrl)
// 문구는 앱 안 방침 화면과 같다. 지역별 권리 절은 결정 대기라 넣지 않는다.
import { esc, page, write } from './lib.mjs';

const APP = 'Lastmark';
const EFFECTIVE = '2026-10-17';
const SERVICE = 'AICA SOFT';
const EMAIL = 'hsindevelop@gmail.com';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/lastdays/';
const GOOGLE = 'https://policies.google.com/privacy';

const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, inner) => `<section>\n<h2>${esc(title)}</h2>\n${inner}\n</section>`;
const dl = (items) => `<dl class="contact">\n${items.map(([l, v]) => `<dt>${esc(l)}</dt><dd>${esc(v)}</dd>`).join('\n')}\n</dl>`;

const en = {
  title: 'Privacy policy',
  intro: `${APP} (“the app”) does not collect personal information such as your name or contact details, and does not store anything on a server. What you enter in the app is processed only on your device.`,
  adsHead: 'Ads (Google AdMob)',
  ads: 'The app shows Google AdMob ads so it can be offered for free. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP address), app interactions, and diagnostic information. Users in the European Economic Area (EEA) and the UK are asked for consent the first time they open the app, and can change it at any time under “Ad privacy choices” in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If you decline consent, or consent cannot be checked, the app does not request ads.',
  transferHead: 'Transfer of personal information abroad',
  transferIntro: 'For ads, the information below is transferred abroad, to Google LLC in the United States. To refuse, reset or delete your advertising ID in your device settings, or uninstall the app.',
  transferName: 'Ads (Google AdMob)',
  transferItems: [
    ['Information transferred', 'Advertising ID, IP address, device information (model, operating system, language, etc.), ad impressions and clicks. What you enter in the app is not transferred.'],
    ['Country, timing and method', 'United States (it may be moved to other countries where Google has servers). Sent over an encrypted network each time an ad is requested while you use the app.'],
    ['Recipient', `Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google privacy inquiries: ${GOOGLE}. For questions about the app, contact the privacy officer (${EMAIL}).`],
    ['Purpose and retention', 'Showing ads, measuring ad performance, and preventing invalid clicks. Retention follows Google’s retention policy.'],
    ['How to refuse, and what happens', 'You can reset or delete your advertising ID or turn off personalized ads in your device settings, and uninstalling the app stops all sending. Users in the EEA and the UK are asked for ad consent the first time they open the app and can change it under “Ad privacy choices” in Settings. If you refuse, every feature of the app still works; you may see no ads, or non-personalized ads.'],
  ],
  retentionHead: 'Retention and deletion',
  retention: 'Data the app stores on your device is deleted when you uninstall the app. On devices with Android auto backup turned on, your items and settings may be included in your Google account backup, and a backup file you create is saved to the location you choose. Ad data sent to Google follows Google’s retention policy. Once the app is uninstalled, nothing more is sent (you can also cut the link for ads by resetting or deleting your advertising ID in your device settings). To ask for deletion of data already sent, contact us below.',
  permHead: 'App permissions',
  permIntro: 'The app uses the permissions below. It asks for no permission that needs your approval (no location, camera, microphone, contacts, storage or other dangerous permissions).',
  permItems: [
    ['INTERNET', 'Requests ads.'],
    ['AD_ID (advertising ID)', 'The ads SDK reads your advertising ID. You can reset or delete it in your device settings.'],
    ['RECEIVE_BOOT_COMPLETED', 'Refreshes the home-screen widgets again after a reboot.'],
    ['ACCESS_NETWORK_STATE, ACCESS_ADSERVICES_AD_ID / ATTRIBUTION / TOPICS, WAKE_LOCK, FOREGROUND_SERVICE', 'Added by the ads SDK and libraries (checking network state, Android ad services, running background work).'],
  ],
  ageHead: 'Age',
  age: 'The app is not directed at children under 14 and does not knowingly collect information from children.',
  thirdPartyHead: 'Third-party policies',
  thirdParty: `Google Privacy Policy: ${GOOGLE}`,
  contactHead: 'Contact',
  rightsRequest: 'To request access to, correction of, or deletion of your personal information, use the contact details below. We handle requests without delay, within 10 days.',
  operator: `Data controller: The First Titan (service name: ${SERVICE})`,
  officer: 'Privacy officer and contact: KIM KWANGOK',
  publicUrl: `Web version: ${PUBLIC_URL}`,
};

const ko = {
  title: '개인정보처리방침',
  intro: `며칠 지났지(${APP}, 이하 "앱")는 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에서 입력한 값은 기기 안에서만 처리돼요.`,
  adsHead: '광고(Google AdMob)',
  ads: '앱은 무료 제공을 위해 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자에게는 처음 실행할 때 동의를 구하며, 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있어요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수도 있어요. 동의를 거부하거나 확인에 실패하면 앱은 광고를 요청하지 않아요.',
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
  retention: '앱이 기기에 저장하는 설정값은 앱을 삭제하면 함께 지워져요. Android 자동 백업이 켜진 기기에서는 앱의 항목·설정이 사용자의 Google 계정 백업에 포함될 수 있고, 사용자가 만든 백업 파일은 사용자가 고른 위치에 저장돼요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따라요. 앱을 삭제하면 더 이상 보내지 않아요(광고는 기기 설정의 광고 ID 재설정·삭제로도 연결을 끊을 수 있어요). 이미 보낸 데이터의 삭제 요청은 아래 문의처로 보내 주세요.',
  permHead: '앱 권한',
  permIntro: '앱은 아래 권한을 사용해요. 사용자에게 허락을 따로 묻는 권한(위치·카메라·마이크·연락처·저장소 등 위험 권한)은 없어요.',
  permItems: [
    ['INTERNET', '광고를 요청해요.'],
    ['AD_ID(광고 ID)', '광고 SDK가 광고 ID를 읽어요. 기기 설정에서 재설정·삭제할 수 있어요.'],
    ['RECEIVE_BOOT_COMPLETED', '재부팅한 뒤 홈 화면 위젯을 다시 갱신해요.'],
    ['ACCESS_NETWORK_STATE, ACCESS_ADSERVICES_AD_ID·ATTRIBUTION·TOPICS, WAKE_LOCK, FOREGROUND_SERVICE', '광고 SDK와 라이브러리가 추가하는 권한이에요(네트워크 상태 확인, 안드로이드 광고 서비스, 작업 실행 보조).'],
  ],
  ageHead: '이용 연령',
  age: '앱은 만 14세 미만 어린이를 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않아요.',
  thirdPartyHead: '제3자 처리방침',
  thirdParty: `Google 개인정보처리방침: ${GOOGLE}`,
  contactHead: '문의',
  rightsRequest: '개인정보 열람·정정·삭제 요청은 아래 연락처로 보내 주세요. 요청은 지체 없이(10일 이내) 처리해요.',
  operator: `개인정보처리자: 더퍼스트타이탄 (서비스명 ${SERVICE})`,
  officer: '개인정보 보호책임자·문의 담당: 김광옥',
  publicUrl: `공개 주소: ${PUBLIC_URL}`,
};

const block = (id, lang, t) =>
  `<div id="${id}" lang="${lang}">\n<h2 class="lang-title">${esc(t.title)}</h2>\n` +
  [
    p(t.intro),
    sec(t.adsHead, p(t.ads)),
    sec(t.transferHead, [p(t.transferIntro), `<h3>${esc(t.transferName)}</h3>\n${dl(t.transferItems)}`].join('\n')),
    sec(t.retentionHead, p(t.retention)),
    sec(t.permHead, [p(t.permIntro), dl(t.permItems)].join('\n')),
    sec(t.ageHead, p(t.age)),
    sec(t.thirdPartyHead, p(t.thirdParty)),
    sec(t.contactHead, [p(t.rightsRequest), p(t.operator), p(t.officer), `<p><a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p>`, p(t.publicUrl)].join('\n')),
  ].join('\n') +
  '\n</div>';

const body = [
  `<p><a href="#en">English</a> | <a href="#ko">한국어</a></p>`,
  block('en', 'en', en),
  '<hr>',
  block('ko', 'ko', ko),
].join('\n');

write(
  'lastdays/index.html',
  page({ title: `${APP} Privacy Policy`, heading: `${APP} Privacy Policy / 개인정보처리방침`, sub: `Effective date ${EFFECTIVE} / 시행일 ${EFFECTIVE}`, body, cssPath: 
'../style.css', lang: 'en', footer: `The First Titan (${SERVICE})` }),
);
