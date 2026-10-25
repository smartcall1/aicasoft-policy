// 13+ 표준 방침 틀(dotsboxes 방침과 같은 13개 절). 앱별 사실은 build-<slug>.mjs 가 넘긴다.
import { CONTACT, esc, page, write } from './lib.mjs';

const GOOGLE = 'https://policies.google.com/privacy';
const li = (items) => `<ul>\n${items.map((t) => `<li>${esc(t)}</li>`).join('\n')}\n</ul>`;
const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, body) => `<section>\n<h2>${esc(title)}</h2>\n${body}\n</section>`;
const dl = (rows) => `<dl class="contact">\n${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('\n')}\n</dl>`;

// 권한 설명. 앱이 병합 매니페스트에 실제로 가진 것만 키로 골라 쓴다. [ko 이름, en 이름, ko 설명, en 설명]
export const PERM = {
  INTERNET: ['인터넷(INTERNET)', 'Internet (INTERNET)', '광고를 받아 오는 데 필요해요.', 'needed to receive ads.'],
  NETWORK: ['네트워크 상태 보기(ACCESS_NETWORK_STATE)', 'View network state (ACCESS_NETWORK_STATE)', '인터넷이 연결돼 있는지 확인해서 광고를 불러올지 정해요.', 'checks whether you are online to decide whether to load ads.'],
  ADID: ['광고 ID 사용(AD_ID, ACCESS_ADSERVICES_AD_ID)', 'Advertising ID (AD_ID, ACCESS_ADSERVICES_AD_ID)', '광고 제공과 측정을 위해 기기의 광고 ID를 읽어요. 휴대폰 설정에서 삭제하거나 재설정할 수 있어요.', 'reads your device advertising ID to serve and measure ads. You can delete or reset it in your phone settings.'],
  ADSERVICES: ['안드로이드 광고 서비스(ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS)', 'Android ad services (ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS)', '광고 SDK가 기기의 광고 측정과 관심 주제 기능을 쓸 수 있게 하는 권한이에요.', 'lets the ad SDK use the device ad measurement and interest topics features.'],
  WAKE: ['절전 방지(WAKE_LOCK)', 'Keep awake (WAKE_LOCK)', '광고 SDK 같은 라이브러리가 작업을 마칠 때까지 기기가 잠들지 않게 하는 권한이에요.', 'keeps the device awake until a library such as the ad SDK finishes its work.'],
  DYN: ['앱 내부 보호용 권한(DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION)', 'In-app protection (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION)', '앱 안의 신호를 다른 앱이 엿보지 못하게 하는 권한이에요.', 'stops other apps from listening to signals inside the App.'],
  BILLING: ['결제(com.android.vending.BILLING)', 'Billing (com.android.vending.BILLING)', '광고 제거 1회 구매를 Google Play로 결제하는 데 필요해요.', 'needed to pay for the one-time remove-ads purchase through Google Play.'],
};

export function buildPolicy(c) {
  const { slug, nameKo, nameEn, titleEn, effective } = c;
  const url = `https://smartcall1.github.io/aicasoft-policy/${slug}/`;
  const entries = c.perms.map((x) => (typeof x === 'string' ? PERM[x] : x));
  // 권한 개수는 항목 이름 괄호 안의 권한 이름을 센 값(한 항목에 2개씩 묶인 것 포함)
  const permCount = entries.reduce((n, e) => n + (e[0].match(/\(([^)]*)\)\s*$/)?.[1].split(',').length ?? 1), 0);
  const iap = c.iap; // { ko, en } 또는 null(광고 제거 결제 꺼짐)
  const ko = [
    p(`${nameKo}(${nameEn}, 이하 "앱")은 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에서 입력한 값은 기기 안에서만 처리돼요.`),
    sec('1. 개인정보의 처리 목적', li([...c.purposeKo, '무료로 쓸 수 있도록 광고를 보여 줘요.', ...(iap ? ['광고 제거 1회 구매 여부를 확인해 광고를 끄는 데 써요.'] : []), '위 목적 밖으로는 쓰지 않아요.'])),
    sec('2. 저장하는 값', [p(c.storedKo), p(iap ? iap.ko : '로그인이나 회원 가입은 없고, 이 앱에는 결제 기능도 없어요(광고 제거 결제는 꺼져 있어요).')].join('\n')),
    sec('3. 광고(Google AdMob)', p(`앱은 무료 제공을 위해 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자에게는 처음 실행할 때 동의를 구하며, 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있어요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수도 있어요. 동의를 거부하거나 확인에 실패하면 앱은 광고를 요청하지 않아요. ${c.adsKo}`)),
    sec('4. 앱이 쓰는 권한', [p(`아래는 앱을 만들 때 합쳐지는 안드로이드 권한 목록(${permCount}개)이에요. ${c.permIntroKo}`), li(entries.map((e) => `${e[0]}: ${e[2]}`))].join('\n')),
    sec('5. 개인정보의 국외 이전', [p('광고를 위해 아래 정보가 목적별로 국외(미국 Google LLC)로 이전돼요. 거부하려면 기기 설정에서 광고 ID를 재설정·삭제하거나 앱을 삭제하면 돼요.'), '<h3>광고(Google AdMob)</h3>', dl([
      ['이전되는 항목', '광고 ID, IP 주소, 기기 정보(기종·운영체제·언어 등), 광고 노출·클릭 기록 (앱에 입력한 내용은 이전하지 않아요)'],
      ['이전 국가·시기·방법', '미국(Google 서버가 있는 다른 나라로 옮겨질 수 있어요). 앱을 쓰는 동안 광고를 요청할 때마다 암호화된 네트워크로 전송'],
      ['이전받는 자', `Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google 개인정보 문의: ${GOOGLE}. 앱 관련 문의는 개인정보 보호책임자(${CONTACT.email})`],
      ['이용 목적·보유 기간', '광고 표시, 광고 성과 측정, 부정 클릭 방지. 보유 기간은 Google의 보관 정책을 따라요'],
      ['거부 방법과 효과', "기기 설정에서 광고 ID를 재설정·삭제하거나 맞춤 광고를 끌 수 있고, 앱을 삭제하면 더 이상 보내지 않아요. 유럽경제지역(EEA)·영국 사용자는 처음 실행할 때 광고 동의를 묻고 설정의 '광고 개인정보 옵션'에서 바꿀 수 있어요. 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 뜨지 않거나 맞춤이 아닌 일반 광고가 뜰 수 있어요."],
    ])].join('\n')),
    sec('6. 보관 기간과 삭제', [p('앱이 기기에 저장하는 기록은 사용자가 지우거나 앱을 삭제할 때까지 보관하며, 정해진 기간이 지나면 자동으로 지우는 기능은 없어요. 앱을 삭제하면 함께 지워져요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따르며, 앱 삭제나 기기 설정의 광고 ID 재설정·삭제로 연결을 끊을 수 있어요. 삭제 요청은 아래 문의처로 보내 주세요.'), p('이 앱은 안드로이드 자동 백업을 꺼 두었어요. 저장된 기록은 Google 계정 등으로 백업되지 않고, 앱을 삭제하면 함께 지워져요.')].join('\n')),
    sec('7. 열람·정정·삭제 요청', li([c.deleteKo, '광고 설정은 휴대폰 설정 > Google > 광고에서 바꾸거나 광고 ID를 지울 수 있어요. Google이 가진 정보는 Google 계정에서 확인하고 지울 수 있어요.', '열람, 정정, 삭제, 처리 정지 요청은 아래 이메일로 보내 주세요. 본인 확인 뒤 지체 없이 처리하고, 늦어도 10일 안에 처리 결과나 처리하지 못하는 사유를 알려 드려요.', '회사는 사용자의 기록을 갖고 있지 않아서 회사가 열람하거나 지워 드릴 수 있는 정보가 거의 없어요. 기기 안의 기록은 위 방법으로 직접 지워 주세요.'])),
    sec('8. 제3자 제공 및 처리 위탁', li(['회사는 사용자의 기록을 제3자에게 제공하거나 처리를 맡기지 않아요. 기록이 회사에 오지 않기 때문이에요.', '광고(Google AdMob): Google LLC가 광고 제공과 측정뿐 아니라 부정 사용 방지 같은 Google 자신의 목적으로도 쓰기 때문에, 회사가 맡긴 처리가 아니라 Google LLC에 대한 제3자 제공으로 봐요. 광고 ID와 기기 정보, 광고 노출 정보가 전송돼요.', '이용 목적은 광고 게재이고, 보유·이용 기간은 Google LLC의 정책을 따라요.', ...(iap ? ['광고 제거 결제는 Google Play(Google LLC)가 처리하며, 회사는 결제 수단 정보를 받지 않아요.'] : [])])),
    sec('9. 이용 연령', li(['이 앱은 만 13세 이상을 대상으로 하며 어린이 전용 앱이 아니에요. 광고 요청에 아동 대상 처리 태그를 켜지 않아요.', '회원 계정이 없고 나이나 이름, 연락처를 묻지 않아요. 다만 기기 ID와 광고 ID는 광고 제공을 위해 자동으로 처리돼요.', '광고는 전체 이용가에 가까운 보호자 지도(PG) 등급 이하로 제한해요.', '맞춤 광고는 광고 동의 절차(동의가 필요한 지역)와 사용자의 Google 광고 설정에 따라 정해져요.', `만 14세 미만 이용자의 법정대리인은 ${CONTACT.email} 으로 열람이나 삭제를 요청할 수 있어요. 아동 정보가 수집된 사실을 알게 되면 지체 없이 삭제해요.`])),
    sec('10. 안전성 확보 조치', li(['회사는 사용자의 입력 기록을 받는 서버와 계정이 없어서 회사 쪽에서 볼 수 없어요. 기록은 사용자의 기기 안에만 있어요.', c.safeKo, '개인정보를 다루는 사람은 개인정보 보호책임자 한 명으로 한정해요.', '광고 데이터의 보안은 Google LLC가 자체 기준으로 관리해요.'])),
    sec('11. 제3자 처리방침', p(`Google 개인정보처리방침: ${GOOGLE}`)),
    sec('12. 처리방침의 변경', li(['이 방침이 바뀌면 바뀐 내용을 시행일과 함께 이 페이지에 게시해요.'])),
    sec('13. 문의', [p('개인정보처리자: 더퍼스트타이탄 (서비스명 AICA SOFT)'), p('개인정보 보호 담당: 더퍼스트타이탄'), `<p><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></p>`, p(`공개 주소: ${url}`), p(`시행일: ${effective}`)].join('\n')),
  ].join('\n');

  const en = [
    p(`${nameEn} (the "App") does not directly collect personal information such as your name or contact details, and does not store it on a server. Anything you enter in the App is processed only on your device.`),
    sec('1. Purpose of processing', li([...c.purposeEn, 'To show ads so the App can be free.', ...(iap ? ['To check whether you made the one-time remove-ads purchase and turn ads off.'] : []), 'We do not use information for anything beyond these purposes.'])),
    sec('2. What the App stores', [p(c.storedEn), p(iap ? iap.en : 'There is no login or sign-up, and the App has no payment feature (the remove-ads purchase is turned off).')].join('\n')),
    sec('3. Advertising (Google AdMob)', p(`To stay free, the App shows Google AdMob ads. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP), app interactions, and diagnostics. Users in the European Economic Area (EEA) and the UK are asked for consent on first launch, and can change it any time under "Ad privacy options" in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If you decline consent or consent cannot be confirmed, the App does not request ads. ${c.adsEn}`)),
    sec('4. Permissions the App uses', [p(`Below are the ${permCount} Android permissions merged into the App when it is built. ${c.permIntroEn}`), li(entries.map((e) => `${e[1]}: ${e[3]}`))].join('\n')),
    sec('5. Transfer of personal information abroad', [p('For advertising, the information below is transferred abroad (to Google LLC in the USA), by purpose. To opt out, reset or delete your advertising ID in your device settings, or uninstall the App.'), '<h3>Advertising (Google AdMob)</h3>', dl([
      ['Information transferred', 'Advertising ID, IP address, device information (model, operating system, language, etc.), ad impression and click records (nothing you enter in the App is transferred)'],
      ['Country, timing and method', 'USA (it may be moved to other countries where Google has servers). Sent over an encrypted network each time an ad is requested while you use the App'],
      ['Recipient', `Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google privacy inquiries: ${GOOGLE}. For app-related questions, contact our privacy officer (${CONTACT.email})`],
      ['Purpose and retention', "Showing ads, measuring ad performance, preventing invalid clicks. Retention follows Google's retention policy"],
      ['How to refuse and the effect', 'You can reset or delete your advertising ID or turn off personalized ads in your device settings, and uninstalling the App stops all sending. Users in the EEA and the UK are asked for ad consent on first launch and can change it under "Ad privacy options" in Settings. If you refuse, the App still works as usual, but ads may not appear or may be non-personalized.'],
    ])].join('\n')),
    sec('6. Retention and deletion', [p("Records the App stores on your device are kept until you clear them or uninstall the App; there is no feature that deletes them automatically after a set period. They are deleted when you uninstall the App. Ad data sent to Google follows Google's retention policy; you can cut the link by uninstalling the App or by resetting or deleting your advertising ID in your device settings. Send deletion requests to the contact below."), p('The App turns off Android automatic backup. Stored records are not backed up to your Google account or elsewhere, and are deleted when you uninstall the App.')].join('\n')),
    sec('7. Access, correction and deletion requests', li([c.deleteEn, 'Ad settings can be changed, and your advertising ID deleted, in phone Settings > Google > Ads. Information Google holds can be viewed and deleted in your Google account.', 'Send requests to access, correct, delete or stop processing to the email below. After confirming it is you, we act without delay and tell you the result, or why we cannot act, within 10 days at the latest.', 'We do not hold your records, so there is almost nothing we can show or delete for you. Please clear the records on your device with the methods above.'])),
    sec('8. Provision to third parties and outsourcing', li(['We do not provide your records to third parties or outsource their processing, because your records never reach us.', 'Advertising (Google AdMob): Google LLC uses ad data not only to serve and measure ads but also for its own purposes such as preventing misuse, so this is treated as provision to a third party (Google LLC), not processing we outsourced. Your advertising ID, device information and ad impression information are sent.', "The purpose is showing ads, and retention follows Google LLC's policy.", ...(iap ? ['The remove-ads payment is processed by Google Play (Google LLC); we do not receive your payment details.'] : [])])),
    sec('9. Age', li(['The App is intended for users aged 13 and over and is not directed to children. It does not turn on the child-directed treatment tag in ad requests.', 'It does not ask for your age, name, or contact details, and there are no user accounts. However, the device ID and advertising ID are processed automatically to serve ads.', 'Ads are limited to the Parental Guidance (PG) rating or below, close to suitable for all ages.', 'Personalized ads depend on the ad consent process (in regions that require consent) and your Google ad settings.', `A legal guardian of a user under 14 may request access or deletion at ${CONTACT.email}. If we learn that a child's information has been collected, we will delete it without delay.`])),
    sec('10. Security measures', li(['We have no server or account that receives what you enter, so we cannot see it. Your records exist only on your device.', c.safeEn, 'Only one person, the privacy officer, handles personal information.', 'Security of ad data is managed by Google LLC under its own standards.'])),
    sec('11. Third-party policies', p(`Google Privacy Policy: ${GOOGLE}`)),
    sec('12. Changes to this policy', li(['If this policy changes, we post the changes on this page together with the effective date.'])),
    sec('13. Contact', [p('Operator: The First Titan (service name AICA SOFT)'), p('Privacy officer and contact: The First Titan'), `<p><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></p>`, p(`Public URL: ${url}`), p(`Effective: ${effective}`)].join('\n')),
  ].join('\n');

  const body = `<p><a href="#ko">한국어</a> | <a href="#en">English</a></p>\n<div id="ko" lang="ko">\n<h2 class="lang-title">개인정보처리방침</h2>\n${ko}\n</div>\n<hr>\n<div id="en" lang="en">\n<h2 class="lang-title">Privacy Policy</h2>\n${en}\n</div>\n<p class="back"><a href="../">Back to the policy list / 다른 앱 방침 보기</a></p>`;
  write(`${slug}/index.html`, page({ title: `${titleEn} Privacy Policy`, heading: `${titleEn} / ${nameKo}`, sub: `Privacy policy / 개인정보처리방침<br>Effective ${effective}`, body, cssPath: '../style.css', lang: 'en', footer: 'The First Titan (AICA SOFT)' }));
}
