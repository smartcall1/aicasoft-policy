// 오프라인 만세력(manseryeok) 방침. 앱 PrivacyScreen.tsx(ko·en)와 transferNotice.ts의 문장만 공개한다.
// 광고 제거 인앱 결제는 꺼져 있어(app.config removeAds.enabled=false) 구매·환불 절을 두지 않는다(charcount·lastdays와 같은 처리).
import { CONTACT, EFFECTIVE_DATE, esc, page, write } from './lib.mjs';

const EFFECTIVE = '2026-10-25';
const url = 'https://smartcall1.github.io/aicasoft-policy/manseryeok/';
const p = (text) => `<p>${esc(text)}</p>`;
const section = (title, content) => `<section><h2>${esc(title)}</h2>${content}</section>`;
const table = (rows) => `<dl class="contact">${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('\n')}</dl>`;
const contact = (op, officer, label) => section(label, `${p(op)}${p(officer)}<p><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></p><p>${esc(url)}</p>`);
const ko = [
  p('오프라인 만세력(이하 "앱")은 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에서 입력한 값은 기기 안에서만 처리돼요.'),
  p('입력한 생년월일시·이름은 이 기기에만 저장되고 서버·광고로 보내지 않아요. 지우려면 저장 목록에서 삭제하거나 앱을 삭제하면 돼요.'),
  section('광고(Google AdMob)', p('앱은 무료 제공을 위해 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자에게는 처음 실행할 때 동의를 구하며, 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있어요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수도 있어요. 동의를 거부하거나 확인에 실패하면 앱은 광고를 요청하지 않아요.')),
  section('개인정보의 국외 이전', `${p('광고를 위해 아래 정보가 목적별로 국외(미국 Google LLC)로 이전돼요. 거부하려면 기기 설정에서 광고 ID를 재설정·삭제하거나 앱을 삭제하면 돼요.')}<h3>광고(Google AdMob)</h3>${table([
    ['이전되는 항목', '광고 ID, IP 주소, 기기 정보(기종·운영체제·언어 등), 광고 노출·클릭 기록 (앱에 입력한 내용은 이전하지 않아요)'],
    ['이전 국가·시기·방법', '미국(Google 서버가 있는 다른 나라로 옮겨질 수 있어요). 앱을 쓰는 동안 광고를 요청할 때마다 암호화된 네트워크로 전송'],
    ['이전받는 자', 'Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google 개인정보 문의: https://policies.google.com/privacy. 앱 관련 문의는 개인정보 보호책임자(hsindevelop@gmail.com)'],
    ['이용 목적·보유 기간', '광고 표시, 광고 성과 측정, 부정 클릭 방지. 보유 기간은 Google의 보관 정책을 따라요'],
    ['거부 방법과 효과', "기기 설정에서 광고 ID를 재설정·삭제하거나 맞춤 광고를 끌 수 있고, 앱을 삭제하면 더 이상 보내지 않아요. 유럽경제지역(EEA)·영국 사용자는 처음 실행할 때 광고 동의를 묻고 설정의 '광고 개인정보 옵션'에서 바꿀 수 있어요. 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 뜨지 않거나 맞춤이 아닌 일반 광고가 뜰 수 있어요."],
  ])}`),
  section('보관 기간과 삭제', p('앱이 기기에 저장하는 생년월일시·이름과 설정값은 앱을 삭제하면 함께 지워져요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따라요. 앱을 삭제하면 더 이상 보내지 않아요(광고는 기기 설정의 광고 ID 재설정·삭제로도 연결을 끊을 수 있어요). 입력 중 초안은 이 기기에 최대 1시간 보관한 뒤 삭제해요. 이미 보낸 데이터의 삭제 요청은 아래 문의처로 보내 주세요.')),
  section('이용 연령', p('앱은 만 14세 미만 어린이를 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않아요.')),
  section('제3자 처리방침', p('Google 개인정보처리방침: https://policies.google.com/privacy')),
  contact('개인정보처리자: 더퍼스트타이탄 (서비스명 AICA SOFT)', '개인정보 보호책임자·문의 담당: 더퍼스트타이탄 개인정보 담당', '문의'),
].join('\n');

const en = [
  p('오프라인 만세력 (the "App") does not directly collect personal information such as your name or contact details and has no server. What you enter is processed on your device only.'),
  p('The birth date/time and name you enter are stored only on this device and are not sent to a server or to ads. To erase them, delete the entry from your saved list or uninstall the App.'),
  section('Ads (Google AdMob)', p('The App shows Google AdMob ads. Google may collect your advertising ID, device information, approximate location (from IP address), ad interactions and diagnostics. Users in the EEA and UK are asked for consent on first launch and can change it in Settings under "Ad privacy choices". You can reset your advertising ID or turn off personalized ads in your device settings. If consent is declined or cannot be confirmed, the App does not request ads.')),
  section('Transfer abroad', p("For ads, the advertising ID, IP address, device information and ad impression/click records are sent to Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA, and possibly other countries where Google operates servers) over encrypted connections each time an ad is requested, for ad delivery, measurement and fraud prevention. Retention follows Google's policy. To stop this, reset or delete your advertising ID, or uninstall the App. Declining does not affect the App's features, but ads may not appear or non-personalized ads may be shown.")),
  section('Storage and deletion', p('Settings stored on your device are deleted when you uninstall the App. A draft you are typing is kept on this device for up to 1 hour and then deleted. Data already sent to Google can be requested for deletion via the contact below.')),
  section('Age', p("The App is not directed to children under 14 and does not knowingly collect children's information.")),
  section('Third-party policy', p('Google Privacy Policy: https://policies.google.com/privacy')),
  contact('Operator: The First Titan (service: AICA SOFT)', 'Privacy Officer, The First Titan', 'Contact'),
].join('\n');

const body = `<p><a href="#en">English</a> | <a href="#ko">한국어</a></p><div id="en" lang="en"><h2 class="lang-title">Privacy policy</h2>${en}</div><hr><div id="ko" lang="ko"><h2 class="lang-title">개인정보처리방침</h2>${ko}</div><p class="back"><a href="../">목록으로</a></p>`;
write('manseryeok/index.html', page({ title: 'Offline Manseryeok Privacy Policy', heading: '오프라인 만세력 / Offline Manseryeok Privacy Policy', sub: `Effective date ${EFFECTIVE} / 시행일 ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: 'The First Titan (AICA SOFT)' }));
