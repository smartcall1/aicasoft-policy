// 퍼센토(percentcalc) 방침. 앱 PrivacyScreen.tsx와 transferNotice.ts의 사실만 공개한다.
import { CONTACT, EFFECTIVE_DATE, esc, page, write } from './lib.mjs';

const EFFECTIVE = '2026-10-23'; // 광고 제거 인앱 결제 구역 추가
const url = 'https://smartcall1.github.io/aicasoft-policy/percentcalc/';
const p = (text) => `<p>${esc(text)}</p>`;
const section = (title, content) => `<section><h2>${esc(title)}</h2>${content}</section>`;
const table = (rows) => `<dl class="contact">${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('\n')}</dl>`;
const contact = (op, officer, label) => section(label, `${p(op)}${p(officer)}<p><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></p><p>${esc(url)}</p>`);
const ko = [
  p('퍼센토(이하 "앱")는 이름이나 연락처 같은 개인정보를 직접 수집하거나 서버에 저장하지 않아요. 앱에 입력한 값과 계산 기록은 기기 안에서만 처리돼요.'),
  section('광고(Google AdMob)', p('앱은 Google AdMob 광고를 표시해요. 광고 제공 과정에서 Google이 광고 ID, 기기 정보, 대략적인 위치(IP 기반), 앱 상호작용, 진단 정보를 수집·이용할 수 있어요. 유럽경제지역(EEA)·영국 사용자는 처음 실행할 때 동의를 묻고 설정의 "광고 개인정보 옵션"에서 바꿀 수 있어요. 기기 설정에서 광고 ID를 재설정하거나 맞춤 광고를 끌 수 있어요. 동의를 거부하거나 확인하지 못하면 앱은 광고를 요청하지 않아요.')),
  section('개인정보의 국외 이전', `${p('광고 제공을 위해 정보가 미국의 Google LLC로 이전돼요. 앱에 입력한 내용은 이전하지 않아요.')}${table([
    ['이전되는 항목', '광고 ID, IP 주소, 기기 정보(기종·운영체제·언어 등), 광고 노출·클릭 기록'],
    ['이전 국가·시기·방법', '미국(Google 서버가 있는 다른 나라로 옮겨질 수 있어요). 광고를 요청할 때마다 암호화된 네트워크로 전송해요.'],
    ['이전받는 자', 'Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA)'],
    ['이용 목적·보유 기간', '광고 제공, 성과 측정, 부정 클릭 방지. Google의 보관 정책을 따라요.'],
    ['거부 방법과 효과', '기기 설정에서 광고 ID를 재설정·삭제하거나 맞춤 광고를 끌 수 있어요. 앱을 삭제하면 전송이 멈춰요. EEA·영국에서는 첫 실행 때 동의를 묻고 설정에서 바꿀 수 있어요. 거부해도 앱 기능은 그대로지만 광고가 표시되지 않거나 맞춤이 아닌 광고가 표시될 수 있어요.'],
  ])}`),
  section('보관 기간과 삭제', p('계산 기록, 설정, 마지막 입력은 기기에 저장되며 앱에서 기록을 지우거나 앱을 삭제하면 삭제돼요. Google로 전송된 광고 데이터는 Google의 보관 정책을 따라요. 앱을 삭제하거나 광고 ID를 재설정·삭제하면 광고 전송을 멈출 수 있어요. 이미 전송된 데이터의 삭제는 아래 문의처로 요청해 주세요.')),
  section('이용 연령', p('앱은 만 14세 미만 어린이를 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않아요.')),
  section('인앱 결제', p('광고 제거는 1회 구매예요. 구매는 Google Play가 처리하고 구매 내역도 Google Play가 보관해요. 앱은 구매 여부만 Google Play에 확인하며 결제 수단 등 결제 정보를 수집·저장하지 않아요. 별도 서버가 없고, 소유 여부만 기기에 최대 7일 캐시로 저장해요.')),
  section('제3자 처리방침', p('Google 개인정보처리방침: https://policies.google.com/privacy')),
  contact('개인정보처리자: 더퍼스트타이탄 (서비스명 AICA SOFT)', '개인정보 보호책임자·문의 담당: 더퍼스트타이탄 개인정보 담당', '문의'),
].join('\n');

const en = [
  p('Percento (the "App") does not directly collect personal information such as your name or contact details, and has no server. What you enter and your calculation history are processed on your device only.'),
  section('Ads (Google AdMob)', p('The App shows Google AdMob ads. Google may collect and use your advertising ID, device information, approximate location (based on IP), app interactions, and diagnostics to serve ads. Users in the EEA and UK are asked for consent on first launch and can change it in Settings under "Ad privacy choices". You can reset your advertising ID or turn off personalized ads in device settings. If consent is declined or cannot be confirmed, the App does not request ads.')),
  section('Transfer of personal information abroad', `${p('For ads, information is transferred to Google LLC in the United States. What you enter in the App is not transferred.')}${table([
    ['Items transferred', 'Advertising ID, IP address, device information (model, operating system, language, etc.), ad impression and click records'],
    ['Country, timing and method', 'United States (it may be moved to other countries where Google has servers). Sent over an encrypted network each time an ad is requested.'],
    ['Recipient', 'Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA)'],
    ['Purpose and retention', "Serving ads, measuring performance, and preventing invalid clicks. Google's retention policy applies."],
    ['How to refuse and effect', 'Reset or delete your advertising ID or turn off personalized ads in device settings. Uninstalling the App stops transfers. EEA and UK users are asked for consent on first launch and can change it in Settings. Refusal does not limit App features, but ads may not appear or may be non-personalized.'],
  ])}`),
  section('Retention and deletion', p('Calculation history, settings, and your last input are stored on your device and deleted when you clear history in the App or uninstall it. Ad data sent to Google follows Google’s retention policy. You can stop ad transfers by uninstalling the App or resetting or deleting your advertising ID. To request deletion of data already sent, contact us below.')),
  section('Age', p('The App is not directed to children under 14 and does not knowingly collect children’s information.')),
  section('In-app purchase', p('Removing ads is a one-time purchase. Google Play processes the purchase and keeps the purchase history. The App only asks Google Play whether you own it, and does not collect or store payment information. There is no separate server, and only whether you own it is cached on your device for up to 7 days.')),
  section('Third-party policy', p('Google Privacy Policy: https://policies.google.com/privacy')),
  contact(`Operator: The First Titan (service: ${CONTACT.service})`, 'Privacy Officer, The First Titan', 'Contact'),
].join('\n');

const body = `<p><a href="#en">English</a> | <a href="#ko">한국어</a></p><div id="en" lang="en"><h2 class="lang-title">Privacy policy</h2>${en}</div><hr><div id="ko" lang="ko"><h2 class="lang-title">개인정보처리방침</h2>${ko}</div><p class="back"><a href="../">목록으로</a></p>`;
write('percentcalc/index.html', page({ title: 'Percento Privacy Policy', heading: 'Percento / 퍼센토 개인정보처리방침', sub: `Effective date ${EFFECTIVE} / 시행일 ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: 'The First Titan (AICA SOFT)' }));
