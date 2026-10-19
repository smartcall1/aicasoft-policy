// 스포츠 점수판(slug scoreboard) 방침 페이지 생성. 한 주소에 영어(위)·한국어(아래)를 함께 둔다.
// 기준: scoreboard-appid main 86b67dc src/copy/privacy.ts(ko/en), src/consent/transferNotice.ts(ko), transferNoticeEn.ts(en), app.config.ts(operatorName, serviceName, privacyOfficer, contactEmail, privacyPolicyUrl)
// 문구는 앱 안 방침 화면과 같다. (예전에는 build-adapps.mjs 가 한국어 상세판을 만들었으나 앱 방침과 맞추려고 이 스크립트로 옮겼다.)
import { esc, page, write } from './lib.mjs';

const APP_EN = 'Sports Scoreboard';
const APP_KO = '스포츠 점수판';
const EFFECTIVE = '2026-10-17';
const SERVICE = 'AICA SOFT';
const EMAIL = 'hsindevelop@gmail.com';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/scoreboard/';
const GOOGLE = 'https://policies.google.com/privacy';
const RECIPIENT_ADDR = 'Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA)';

const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, inner) => `<section>\n<h2>${esc(title)}</h2>\n${inner}\n</section>`;
const dl = (items) => `<dl class="contact">\n${items.map(([l, v]) => `<dt>${esc(l)}</dt><dd>${esc(v)}</dd>`).join('\n')}\n</dl>`;

const en = {
  title: 'Privacy policy',
  intro: `${APP_EN} ("the app") does not directly collect personal information such as your name or contact details, and does not store it on a server. The player names and scores you enter are processed only on your device.`,
  adsHead: '1. Advertising (Google AdMob)',
  ads: 'The app is free and shows ads from Google AdMob. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP address), app interactions, and diagnostic data. Users in the European Economic Area (EEA) and the UK are asked for consent on first launch and can change it anytime under "Ad privacy options" in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If consent is declined or cannot be confirmed, the app does not request ads.',
  transferHead: 'Overseas transfer of personal information',
  transferIntro: 'For advertising, the information below is transferred overseas (to Google LLC in the United States), by purpose. To refuse, reset or delete your advertising ID in your device settings, or uninstall the app.',
  transferName: 'Advertising (Google AdMob)',
  transferItems: [
    ['Items transferred', 'Advertising ID, IP address, device information (model, operating system, language, etc.), ad impression and click logs (what you enter in the app is not transferred)'],
    ['Country, timing and method', 'United States (data may be moved to other countries where Google has servers). Sent over an encrypted network each time an ad is requested while you use the app'],
    ['Recipient', `${RECIPIENT_ADDR}. Google privacy inquiries: ${GOOGLE}. App-related inquiries: the privacy officer (${EMAIL})`],
    ['Purpose and retention period', "Showing ads, measuring ad performance, preventing invalid clicks. Retention follows Google's retention policy"],
    ['How to refuse and the effect', 'You can reset or delete your advertising ID or turn off personalized ads in your device settings, and nothing is sent once you uninstall the app. Users in the European Economic Area (EEA) and the UK are asked for ad consent on first launch and can change it under "Ad privacy options" in Settings. If you refuse, you can still use all app features; ads may not appear, or non-personalized ads may appear.'],
  ],
  localHead: 'Information stored on your device',
  local: 'The app stores the match in progress (player names and scores), recent match history, counters (names and values), and your appearance, language, vibration and sound settings only on your device. Nothing is sent to a server. This data is removed when you use "Discard" or "Clear history" on Home, "Delete" on the Counter screen (when there are two or more counters), or when you uninstall the app. The last remaining counter cannot be deleted, so its name and value are removed when you change them or uninstall the app.',
  permsHead: 'Permissions the app uses',
  permsIntro:
    'These are the Android permissions merged into the app. All are granted at install time, so no prompt appears. The app does not use location, contacts, photos, microphone or camera permissions.',
  perms: [
    'Internet (INTERNET): needed to load ads.',
    'View network state (ACCESS_NETWORK_STATE): checks whether you are online to decide whether to load ads.',
    'Vibration (VIBRATE): a short vibration when you add a point. You can turn it off in the app settings.',
    'Advertising ID (AD_ID, ACCESS_ADSERVICES_AD_ID): reads your device advertising ID to serve and measure ads. You can delete or reset it in your device settings.',
    'Android ad services (ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS): lets the ads SDK use ad measurement and interest topics.',
    'Keep awake and background work (WAKE_LOCK, FOREGROUND_SERVICE): SDK permissions that keep the device awake until the ads SDK finishes its work.',
    'App-internal protection (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION): stops other apps from listening to signals inside the app.',
  ],
  retentionHead: 'Retention and deletion',
  retention: "The match in progress, history, counters and settings that the app stores on your device are removed when you delete them yourself or uninstall the app. Advertising data sent to Google follows Google's retention policy. Nothing is sent once you uninstall the app (you can also cut the link for ads by resetting or deleting your advertising ID in your device settings). To request deletion of data already sent, contact us using the details below.",
  rightsHead: 'Requests to view, correct or delete',
  rights: (email) => [
    'You can view and delete the records stored on your device in the app, and uninstalling the app removes them all. Ad settings can be changed in your device settings > Google > Ads or under "Ad privacy options" in the app Settings. Information held by Google can be viewed and deleted in your Google account.',
    `To request access to, correction of, deletion of, or a halt to processing of your personal information, contact ${email}. We act without delay after confirming it is you, and tell you the result or the reason we cannot act within 10 days at the latest. We hold none of your records, so there is very little we can view or delete for you.`,
  ],
  ageHead: 'Age',
  age: 'The app is not directed at children under 14 and does not knowingly collect information from children.',
  iapHead: '2. In-app purchases',
  iap: 'Purchases to remove ads are processed by Google Play. The app does not receive your payment details.',
  thirdHead: 'Third-party privacy policies',
  third: `Google Privacy Policy: ${GOOGLE}`,
  contactHead: 'Contact',
  operator: `Operator: The First Titan (service name: ${SERVICE})`,
  officer: 'Privacy officer and contact: The First Titan',
  publicUrl: `Public URL: ${PUBLIC_URL}`,
};

const ko = {
  title: '개인정보처리방침',
  intro: `${APP_KO}(이하 "앱")은 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에서 입력한 선수 이름과 점수는 기기 안에서만 처리돼요.`,
  adsHead: '1. 광고(Google AdMob)',
  ads: '앱은 무료 제공을 위해 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자에게는 처음 실행할 때 동의를 구하며, 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있어요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수도 있어요. 동의를 거부하거나 확인에 실패하면 앱은 광고를 요청하지 않아요.',
  transferHead: '개인정보의 국외 이전',
  transferIntro: '광고를 위해 아래 정보가 목적별로 국외(미국 Google LLC)로 이전돼요. 거부하려면 기기 설정에서 광고 ID를 재설정·삭제하거나 앱을 삭제하면 돼요.',
  transferName: '광고(Google AdMob)',
  transferItems: [
    ['이전되는 항목', '광고 ID, IP 주소, 기기 정보(기종·운영체제·언어 등), 광고 노출·클릭 기록 (앱에 입력한 내용은 이전하지 않아요)'],
    ['이전 국가·시기·방법', '미국(Google 서버가 있는 다른 나라로 옮겨질 수 있어요). 앱을 쓰는 동안 광고를 요청할 때마다 암호화된 네트워크로 전송'],
    ['이전받는 자', `${RECIPIENT_ADDR}. Google 개인정보 문의: ${GOOGLE}. 앱 관련 문의는 개인정보 보호책임자(${EMAIL})`],
    ['이용 목적·보유 기간', '광고 표시, 광고 성과 측정, 부정 클릭 방지. 보유 기간은 Google의 보관 정책을 따라요'],
    ['거부 방법과 효과', "기기 설정에서 광고 ID를 재설정·삭제하거나 맞춤 광고를 끌 수 있고, 앱을 삭제하면 더 이상 보내지 않아요. 유럽경제지역(EEA)·영국 사용자는 처음 실행할 때 광고 동의를 묻고 설정의 '광고 개인정보 옵션'에서 바꿀 수 있어요. 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 뜨지 않거나 맞춤이 아닌 일반 광고가 뜰 수 있어요."],
  ],
  localHead: '기기 안에 저장되는 정보',
  local: '진행 중인 경기(선수 이름·점수), 최근 경기 전적, 카운터(이름·값), 화면 모드·언어·진동·효과음 설정을 기기 안에만 저장해요. 서버 전송은 없으며, 홈의 "지우기"·"기록 지우기", 카운터 화면의 "지우기"(카운터가 둘 이상일 때)나 앱 삭제 시 함께 지워져요. 마지막 카운터는 지울 수 없어서 이름·값을 바꾸거나 앱을 삭제하면 지워져요.',
  permsHead: '앱이 쓰는 권한',
  permsIntro:
    '아래는 앱에 합쳐지는 안드로이드 권한이에요. 모두 설치할 때 한꺼번에 허용돼서 따로 묻는 창은 뜨지 않아요. 위치·연락처·사진·마이크·카메라 권한은 쓰지 않아요.',
  perms: [
    '인터넷(INTERNET): 광고를 받아 오는 데 필요해요.',
    '네트워크 상태 보기(ACCESS_NETWORK_STATE): 인터넷 연결 여부를 확인해 광고를 불러올지 정해요.',
    '진동(VIBRATE): 점수를 올릴 때 짧게 진동해요. 앱 설정에서 끌 수 있어요.',
    '광고 ID 사용(AD_ID, ACCESS_ADSERVICES_AD_ID): 광고 제공과 측정을 위해 기기의 광고 ID를 읽어요. 기기 설정에서 삭제·재설정할 수 있어요.',
    '안드로이드 광고 서비스(ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS): 광고 SDK가 광고 측정과 관심 주제 기능을 쓸 수 있게 하는 권한이에요.',
    '절전 방지와 백그라운드 작업(WAKE_LOCK, FOREGROUND_SERVICE): 광고 SDK가 작업을 마칠 때까지 기기가 잠들지 않게 하는 SDK용 권한이에요.',
    '앱 내부 보호용 권한(DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION): 앱 안의 신호를 다른 앱이 엿보지 못하게 해요.',
  ],
  retentionHead: '보관 기간과 삭제',
  retention: '앱이 기기에 저장하는 진행 중 경기·전적·카운터·설정값은 직접 지우거나 앱을 삭제하면 함께 지워져요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따라요. 앱을 삭제하면 더 이상 보내지 않아요(광고는 기기 설정의 광고 ID 재설정·삭제로도 연결을 끊을 수 있어요). 이미 보낸 데이터의 삭제 요청은 아래 문의처로 보내 주세요.',
  rightsHead: '열람·정정·삭제 요청',
  rights: (email) => [
    '기기에 저장된 기록은 앱에서 직접 보고 지울 수 있고, 앱을 삭제해도 모두 지워져요. 광고 설정은 기기 설정 > Google > 광고나 앱 설정의 "광고 개인정보 옵션"에서 바꿀 수 있어요. Google이 가진 정보는 Google 계정에서 확인하고 지울 수 있어요.',
    `개인정보 열람·정정·삭제·처리 정지 요청은 ${email}로 보내 주세요. 본인 확인 뒤 지체 없이 처리하고, 늦어도 10일 안에 처리 결과나 처리하지 못하는 사유를 알려 드려요. 회사는 사용자의 기록을 갖고 있지 않아서 회사가 열람·삭제해 드릴 정보는 거의 없어요.`,
  ],
  ageHead: '이용 연령',
  age: '앱은 만 14세 미만 어린이를 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않아요.',
  iapHead: '2. 인앱 결제',
  iap: '광고 제거 구매는 Google Play가 처리하며, 앱은 결제 수단 정보를 받지 않아요.',
  thirdHead: '제3자 처리방침',
  third: `Google 개인정보처리방침: ${GOOGLE}`,
  contactHead: '문의',
  operator: `개인정보처리자: 더퍼스트타이탄 (서비스명 ${SERVICE})`,
  officer: '개인정보 보호 담당: 더퍼스트타이탄',
  publicUrl: `공개 주소: ${PUBLIC_URL}`,
};

const block = (id, lang, t) =>
  `<div id="${id}" lang="${lang}">\n<h2 class="lang-title">${esc(t.title)}</h2>\n` +
  [
    p(t.intro),
    sec(t.adsHead, p(t.ads)),
    sec(t.transferHead, [p(t.transferIntro), `<h3>${esc(t.transferName)}</h3>\n${dl(t.transferItems)}`].join('\n')),
    sec(t.localHead, p(t.local)),
    sec(t.permsHead, [p(t.permsIntro), `<ul>\n${t.perms.map((x) => `<li>${esc(x)}</li>`).join('\n')}\n</ul>`].join('\n')),
    sec(t.retentionHead, p(t.retention)),
    sec(t.rightsHead, t.rights(EMAIL).map(p).join('\n')),
    sec(t.ageHead, p(t.age)),
    sec(t.iapHead, p(t.iap)),
    sec(t.thirdHead, p(t.third)),
    sec(t.contactHead, [p(t.operator), p(t.officer), `<p><a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p>`, p(t.publicUrl)].join('\n')),
  ].join('\n') +
  '\n</div>';

const body = [`<p><a href="#en">English</a> | <a href="#ko">한국어</a></p>`, block('en', 'en', en), '<hr>', block('ko', 'ko', ko)].join('\n');

write(
  'scoreboard/index.html',
  page({ title: `${APP_EN} Privacy Policy`, heading: `${APP_EN} Privacy Policy / ${APP_KO} 개인정보처리방침`, sub: `Effective date ${EFFECTIVE} / 시행일 ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: `The First Titan (${SERVICE})` }),
);
