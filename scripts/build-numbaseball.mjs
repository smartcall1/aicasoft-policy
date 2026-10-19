// 숫자야구(numbaseball) 방침 페이지 생성. 한 주소(/numbaseball/)에 영어·일본어·한국어를 함께 둔다.
// 내용은 앱 코드(src/screens/PrivacyScreen.tsx, legalCopy.ts, src/game/storage.ts)에서 확인한 사실만 쓴다.
// 기준 코드: numbaseball main + docs/privacy-perms-1017 (AdMob 배너·전면만 사용. 분석 SDK·결제(광고 제거는 꺼짐)·서버·계정 없음)
// 권한은 병합 매니페스트(processDebugManifest) 기준 9개. VIBRATE 는 선언돼 있지 않아 적지 않는다.
import { CONTACT, esc, page, write, sectionsHtml, contactHtml, APPS } from './lib.mjs';

const EFFECTIVE = '2026-10-17';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/numbaseball/';
const GOOGLE = 'https://policies.google.com/privacy';
const ADDR = 'Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA)';
const CONSENT_REOPEN = '앱 설정 > "광고 개인정보 옵션"';
const number = (sections) => sections.map((s, i) => ({ ...s, title: `${i + 1}. ${s.title}` }));

const sections = number([
  {
    title: '개인정보의 처리 목적',
    items: [
      '숫자야구 게임과 반응속도 테스트를 하고, 지난 기록을 보여 줍니다.',
      '무료로 쓸 수 있도록 광고(배너·전면)를 보여 줍니다.',
      '위 목적 밖으로는 쓰지 않습니다.',
    ],
  },
  {
    title: '처리하는 개인정보 항목과 저장 위치',
    items: [
      '게임 기록(최근 200건), 반응속도 기록(최근 50건), 사용자가 고른 게임 설정(자릿수·힌트 등), 화면 모드(밝게·어둡게·기기 설정 따라가기) 선택: 이 기기(localStorage)에만 저장합니다. 회사 서버가 없어서 어디로도 보내지 않습니다.',
      '광고 ID, 기기 정보, 광고 노출 정보: 광고(Google AdMob)를 위해 Google LLC가 수집합니다. 게임 기록과 설정은 보내지 않습니다.',
      '광고 동의(UMP): 유럽 경제 지역·영국 등 동의가 필요한 곳에서는 앱을 열 때 Google의 동의 창이 뜹니다. 동의 상태는 Google의 광고 SDK가 관리합니다. 동의를 거부하거나 확인하지 못하면 앱은 광고를 요청하지 않습니다.',
      '로그인이나 회원 가입은 없고, 이 앱에는 결제 기능도 없습니다. 별도의 이용 통계 서비스(Firebase 등)도 쓰지 않습니다.',
    ],
  },
  {
    title: '앱이 쓰는 권한',
    items: [
      '아래는 앱을 만들 때 합쳐지는 안드로이드 권한 목록입니다. 모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않습니다. 위치, 연락처, 사진, 마이크, 카메라 권한은 쓰지 않습니다.',
      '인터넷(INTERNET): 광고를 받아 오는 데 필요합니다.',
      '네트워크 상태 보기(ACCESS_NETWORK_STATE): 인터넷이 연결돼 있는지 확인해서 광고를 불러올지 정합니다.',
      '광고 ID 사용(AD_ID, ACCESS_ADSERVICES_AD_ID): 광고 제공과 측정을 위해 기기의 광고 ID를 읽습니다. 휴대폰 설정에서 삭제하거나 재설정할 수 있습니다.',
      '안드로이드 광고 서비스(ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS): 광고 SDK가 기기의 광고 측정과 관심 주제 기능을 쓸 수 있게 하는 권한입니다.',
      '절전 방지와 백그라운드 작업(WAKE_LOCK, FOREGROUND_SERVICE): 광고 SDK가 작업을 마칠 때까지 기기가 잠들지 않게 하는 SDK용 권한입니다.',
      '앱 내부 보호용 권한(DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION): 앱 안의 신호를 다른 앱이 엿보지 못하게 하는 권한입니다.',
    ],
  },
  {
    title: '개인정보의 보유 및 이용 기간',
    items: [
      '이 기기에 저장된 기록과 설정은 사용자가 지우거나 앱을 삭제할 때까지 보관합니다. 게임 기록은 최근 200건, 반응속도 기록은 최근 50건까지만 보관합니다.',
      '광고 정보는 Google의 정책에 따라 Google이 보관합니다.',
      '이 앱은 안드로이드 자동 백업을 꺼 두었습니다. 저장된 기록은 Google 계정 등으로 백업되지 않고, 앱을 삭제하면 함께 지워집니다.',
    ],
  },
  {
    title: '개인정보의 파기 절차 및 방법',
    items: [
      '게임 기록과 반응속도 기록은 앱 설정의 "기록 지우기"로 지울 수 있습니다. 게임 설정과 화면 모드는 남습니다.',
      '앱을 삭제하면 기기에 저장된 기록이 모두 지워집니다. 휴대폰 설정 > 앱 > 스리볼 > 저장공간에서 데이터를 지워도 됩니다. 별도로 모아 두는 사본은 없습니다.',
      'Google이 가진 정보는 "정보주체의 권리와 행사 방법" 절에 적은 방법으로 직접 확인하고 지울 수 있습니다.',
    ],
  },
  {
    title: '개인정보의 제3자 제공 및 처리 위탁',
    items: [
      '회사는 사용자의 기록을 제3자에게 제공하거나 처리를 맡기지 않습니다. 기록이 회사에 오지 않기 때문입니다.',
      '광고(Google AdMob): Google LLC가 광고 제공과 측정뿐 아니라 부정 사용 방지 같은 Google 자신의 목적으로도 쓰기 때문에, 회사가 맡긴 처리가 아니라 Google LLC에 대한 제3자 제공으로 봅니다. 광고 ID와 기기 정보, 광고 노출 정보가 전송됩니다.',
      '이용 목적은 광고 게재와 측정이고, 보유·이용 기간은 Google LLC의 정책을 따릅니다.',
    ],
  },
  {
    title: '개인정보의 국외 이전',
    items: [
      '이전받는 자: Google LLC (Google AdMob 운영)',
      '이전되는 국가: 미국 (Google의 서버가 있는 나라로 옮겨질 수 있습니다)',
      '이전 항목: 광고 ID, 기기 정보(기종·운영체제 버전·언어 등), 네트워크 통신에 따른 IP 주소, 광고 노출·클릭 정보. 게임 기록과 설정은 이전하지 않습니다.',
      '이전 시기와 방법: 앱을 쓰는 동안 광고를 불러오거나 보여 줄 때마다 인터넷으로 전송됩니다.',
      '이전 목적: 광고 게재와 측정.',
      '보유 및 이용 기간: Google LLC의 정책을 따릅니다.',
      `거부 방법: 동의 창이 뜨는 지역에서는 광고 동의를 거부하면 광고 요청이 시작되지 않고, 나중에 ${CONSENT_REOPEN}에서 다시 바꿀 수 있습니다. 그 밖의 지역에서는 휴대폰 설정 > Google > 광고에서 광고 ID를 삭제하거나 맞춤 광고를 끌 수 있습니다. 앱을 삭제하면 전송이 모두 멈춥니다.`,
      '거부했을 때의 결과: 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 뜨지 않거나 맞춤이 아닌 일반 광고가 뜰 수 있습니다.',
      '문의: 아래 개인정보 보호책임자에게 보내 주십시오. Google LLC의 처리는 Google 개인정보처리방침(policies.google.com)에서 볼 수 있습니다.',
    ],
  },
  {
    title: '이용 연령과 아동',
    items: [
      '이 앱은 만 13세 미만 아동을 대상으로 하지 않으며, 어린이 정보를 의도적으로 수집하지 않습니다. 어린이 전용 앱이 아니고, 광고 요청에 아동 대상 처리 태그를 켜지 않습니다.',
      '앱은 나이·이름·연락처를 묻지 않습니다. 기기 식별자와 광고 ID는 광고를 제공하는 목적으로 자동 처리됩니다.',
      `만 14세 미만 아동의 법정대리인은 ${CONTACT.email}로 열람·삭제 등을 요청할 수 있습니다. 회사는 계정과 서버가 없어 직접 보관하는 정보가 없고, Google로 보낸 광고 데이터는 "개인정보의 파기 절차 및 방법"과 "정보주체의 권리와 행사 방법"에 적은 방법을 따릅니다.`,
      '광고는 보호자 지도(PG) 등급 이하로 제한합니다.',
      '맞춤 광고는 광고 동의 절차(동의가 필요한 지역)와 사용자의 Google 광고 설정에 따라 정해집니다.',
    ],
  },
  {
    title: '자동으로 수집되는 정보(광고 ID)',
    items: [
      '광고 ID: 안드로이드 기기의 광고용 식별 번호입니다. 광고 SDK가 앱 설치 때 합쳐진 권한(AD_ID)으로 읽습니다.',
      '광고 ID 거부 방법: 휴대폰 설정 > Google > 광고에서 광고 ID를 삭제하거나 재설정할 수 있습니다.',
    ],
  },
  {
    title: '개인정보의 안전성 확보 조치',
    items: [
      '회사는 사용자의 기록을 받는 서버와 계정이 없어서 회사 쪽에서 볼 수 없습니다. 기록은 사용자의 기기 안에만 있습니다.',
      '앱이 쓰는 권한은 광고에 필요한 것으로 줄였습니다.',
      '개인정보를 다루는 사람은 개인정보 보호책임자 한 명으로 한정합니다.',
      '광고 데이터의 보안은 Google LLC가 자체 기준으로 관리합니다.',
    ],
  },
  {
    title: '정보주체의 권리와 행사 방법',
    items: [
      '사용자는 언제든 이 기기에 저장된 게임·반응속도 기록을 앱에서 보고 설정의 "기록 지우기"로 지울 수 있습니다. 앱을 삭제하거나 휴대폰 설정 > 앱 > 스리볼 > 저장공간 > 데이터 삭제로도 지워집니다.',
      '광고 개인 설정은 휴대폰 설정 > Google > 광고에서 바꾸거나 광고 ID를 지울 수 있습니다.',
      `동의가 필요한 지역에서는 앱을 열 때 뜨는 Google 동의 창에서 광고 동의를 정하고, ${CONSENT_REOPEN}에서 언제든 다시 바꿀 수 있습니다(광고 개인정보 설정).`,
      'Google이 가진 정보는 휴대폰 설정 > Google, 또는 Google 계정에서 확인하고 지울 수 있습니다.',
      `열람, 정정, 삭제, 처리 정지 요청은 이메일(${CONTACT.email})로 보내 주십시오. 요청하신 분이 본인인지 확인한 뒤 지체 없이 처리하고, 늦어도 10일 안에 처리 결과나 처리하지 못하는 사유를 알려 드립니다.`,
      '회사는 사용자의 기록을 갖고 있지 않아서 회사가 열람하거나 지워 드릴 수 있는 정보가 거의 없습니다. 기기 안의 기록은 위 방법으로 직접 지워 주십시오.',
    ],
  },
  { title: '개인정보 보호책임자', html: contactHtml() },
  { title: '처리방침의 변경', items: ['이 방침이 바뀌면 바뀐 내용을 시행일과 함께 이 페이지에 게시합니다.'] },
]);

const app = APPS.find((a) => a.slug === 'numbaseball');
const intro = `${CONTACT.company}(서비스명 ${CONTACT.service}, 이하 "회사")은 ${app.name}을 제공하면서 개인정보 보호법 제30조에 따라 아래와 같이 개인정보 처리방침을 정해 공개합니다.`;

const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, inner) => `<section>\n<h2>${esc(title)}</h2>\n${inner}\n</section>`;
const ul = (items) => `<ul>\n${items.map((i) => `<li>${esc(i)}</li>`).join('\n')}\n</ul>`;
const dl = (items) => `<dl class="contact">\n${items.map(([l, v]) => `<dt>${esc(l)}</dt><dd>${esc(v)}</dd>`).join('\n')}\n</dl>`;

const en = {
  title: 'Privacy policy',
  intro: 'Bulls & Cows (the "App") does not directly collect personal information such as your name or contact details, and does not store it on a server. What you enter in the App is processed only on your device.',
  adsHead: 'Ads and information collected',
  ads: 'The App is free and shows Google AdMob ads. While serving ads, Google may collect and use your advertising ID, device information, approximate location (based on IP), app interactions and diagnostics. Users in the European Economic Area (EEA) and the UK are asked for consent on first launch and can change it any time under "Ad Privacy Options" in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If you decline consent or consent cannot be checked, the App does not request ads.',
  transferHead: 'Transfer of personal information abroad',
  transferIntro: 'For ads, the information below is transferred abroad (to Google LLC in the United States) by purpose. To opt out, reset or delete your advertising ID in your device settings, or uninstall the App.',
  transferName: 'Ads (Google AdMob)',
  transferItems: [
    ['Items transferred', 'Advertising ID, IP address, device information (model, OS, language, etc.), ad impression and click records (what you enter in the App is not transferred)'],
    ['Country, timing and method', 'United States (may be moved on to other countries where Google has servers). Sent over an encrypted network each time an ad is requested while you use the App'],
    ['Recipient', `${ADDR}. Google privacy inquiries: ${GOOGLE}. For app-related inquiries, contact the privacy officer (${CONTACT.email})`],
    ['Purpose and retention', "Showing ads, measuring ad performance and preventing invalid clicks. Retention follows Google's retention policy"],
    ['How to refuse and its effect', 'You can reset or delete your advertising ID or turn off personalized ads in your device settings, and uninstalling the App stops all sending. EEA and UK users are asked for ad consent on first launch and can change it under "Ad Privacy Options" in Settings. If you refuse, the App still works as usual, but ads may not appear or non-personalized ads may appear.'],
  ],
  localHead: 'Information stored on your device',
  local: 'The App stores your game records (latest 200), reaction-time records (latest 50), the game settings you choose (digits, hints, etc.), and your appearance, language, vibration and sound settings only on your device. Nothing is sent to a server. Android automatic backup is turned off, so these are not backed up to your Google account.',
  permsHead: 'Permissions the app uses',
  permsIntro: 'These are the Android permissions merged into the App. All are granted at install time, so no prompt appears. The App does not use location, contacts, photos, microphone or camera permissions.',
  perms: [
    'Internet (INTERNET): needed to load ads.',
    'View network state (ACCESS_NETWORK_STATE): checks whether you are online to decide whether to load ads.',
    'Advertising ID (AD_ID, ACCESS_ADSERVICES_AD_ID): reads your device advertising ID to serve and measure ads. You can delete or reset it in your device settings.',
    'Android ad services (ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS): lets the ads SDK use ad measurement and interest topics.',
    'Keep awake and background work (WAKE_LOCK, FOREGROUND_SERVICE): SDK permissions that keep the device awake until the ads SDK finishes its work.',
    'App-internal protection (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION): stops other apps from listening to signals inside the App.',
  ],
  retentionHead: 'Retention and deletion',
  retention: "Settings and records the App stores on your device are deleted when you uninstall it. Ad data sent to Google follows Google's retention policy. Once you uninstall the App, nothing more is sent (you can also cut the link for ads by resetting or deleting the advertising ID in your device settings). To request deletion of data already sent, contact us below.",
  rightsHead: 'Requests to view, correct or delete',
  rights: [
    'You can view the game and reaction-time records stored on your device in the App and delete them with "Clear Records" in Settings. Uninstalling the App removes them all. Ad settings can be changed in your device settings > Google > Ads or under "Ad Privacy Options" in the App Settings. Information held by Google can be viewed and deleted in your Google account.',
    `To request access to, correction of, deletion of, or a halt to processing of your personal information, contact ${CONTACT.email}. We act without delay after confirming it is you, and tell you the result or the reason we cannot act within 10 days at the latest. We hold none of your records, so there is very little we can view or delete for you.`,
  ],
  ageHead: 'Age',
  age: [
    'The App is not directed to children under 13 and does not knowingly collect information from children.',
    'The App does not ask for your age, name or contact details. Device identifiers and the advertising ID are processed automatically to serve ads.',
    `A legal guardian of a child under 14 can request access or deletion at ${CONTACT.email}. The App has no accounts or servers, so it holds no information itself. Ad data sent to Google follows the method in "Retention and deletion" above.`,
  ],
  thirdHead: 'Third-party policies',
  third: `Google Privacy Policy: ${GOOGLE}`,
  contactHead: 'Contact',
  operator: `Data controller: The First Titan (service name: ${CONTACT.service})`,
  officer: 'Privacy officer and contact: The First Titan',
  publicUrl: `Public URL: ${PUBLIC_URL}`,
};

const ja = {
  title: 'プライバシーポリシー',
  intro: 'ヒット&ブロー（以下「本アプリ」）は、お名前や連絡先などの個人情報を直接収集せず、サーバーにも保存しません。アプリに入力した内容は端末内でのみ処理されます。',
  adsHead: '広告の配信と収集される情報',
  ads: '本アプリは無料で提供するため、Google AdMobの広告を表示します。広告の配信中に、Googleが広告ID、端末情報、おおよその位置（IPアドレスに基づく）、アプリ内の操作、診断情報を収集・利用することがあります。欧州経済領域（EEA）・英国のユーザーには初回起動時に同意をお尋ねし、設定の「広告のプライバシー設定」からいつでも変更できます。端末の設定で広告IDのリセットやパーソナライズ広告の停止もできます。同意しない場合や確認できない場合、本アプリは広告をリクエストしません。',
  transferHead: '個人情報の国外移転',
  transferIntro: '広告のため、以下の情報が目的ごとに国外（米国のGoogle LLC）へ移転されます。拒否するには、端末の設定で広告IDをリセット・削除するか、アプリを削除してください。',
  transferName: '広告（Google AdMob）',
  transferItems: [
    ['移転される項目', '広告ID、IPアドレス、端末情報（機種・OS・言語など）、広告の表示・クリック履歴（アプリに入力した内容は移転しません）'],
    ['移転先の国・時期・方法', '米国（Googleのサーバーがある他の国へ移されることがあります）。アプリの使用中、広告をリクエストするたびに暗号化された通信で送信'],
    ['移転を受ける者', `${ADDR}。Googleへのお問い合わせ：${GOOGLE}。アプリに関するお問い合わせは個人情報保護責任者（${CONTACT.email}）まで`],
    ['利用目的・保有期間', '広告の表示、広告効果の測定、不正クリックの防止。保有期間はGoogleの保管ポリシーに従います'],
    ['拒否の方法と影響', '端末の設定で広告IDのリセット・削除やパーソナライズ広告の停止ができ、アプリを削除すると送信は止まります。EEA・英国のユーザーは初回起動時に広告の同意をお尋ねし、設定の「広告のプライバシー設定」で変更できます。拒否してもアプリの機能はそのまま使えますが、広告が表示されない、またはパーソナライズされていない広告が表示されることがあります。'],
  ],
  localHead: '端末内に保存される情報',
  local: '本アプリは、ゲームの記録（直近200件）、反応速度の記録（直近50件）、選んだゲーム設定（桁数・ヒントなど）、画面モード・言語・振動・効果音の設定を、端末内にのみ保存します。サーバーへは送信しません。Androidの自動バックアップは無効にしているため、Googleアカウントなどにはバックアップされません。',
  permsHead: 'アプリが使う権限',
  permsIntro: '以下は本アプリに含まれるAndroidの権限です。すべてインストール時にまとめて許可されるため、確認画面は表示されません。位置情報・連絡先・写真・マイク・カメラの権限は使いません。',
  perms: [
    'インターネット（INTERNET）：広告の取得に必要です。',
    'ネットワーク状態の確認（ACCESS_NETWORK_STATE）：接続状況を確認し、広告を読み込むかどうかを決めます。',
    '広告IDの利用（AD_ID、ACCESS_ADSERVICES_AD_ID）：広告の配信と測定のため、端末の広告IDを読み取ります。端末の設定で削除・リセットできます。',
    'Android広告サービス（ACCESS_ADSERVICES_ATTRIBUTION、ACCESS_ADSERVICES_TOPICS）：広告SDKが広告測定と関心トピックの機能を使えるようにする権限です。',
    'スリープ防止とバックグラウンド処理（WAKE_LOCK、FOREGROUND_SERVICE）：広告SDKが処理を終えるまで端末をスリープさせないSDK用の権限です。',
    'アプリ内部の保護用権限（DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION）：アプリ内の信号を他のアプリが盗み見できないようにします。',
  ],
  retentionHead: '保管期間と削除',
  retention: 'アプリが端末に保存する設定値や記録は、アプリを削除すると一緒に消えます。Googleに送信された広告データはGoogleの保管ポリシーに従います。アプリを削除すると、それ以上は送信されません（広告は端末設定の広告IDのリセット・削除でも連携を断てます）。すでに送信したデータの削除をご希望の場合は、下記までご連絡ください。',
  rightsHead: '閲覧・訂正・削除の請求',
  rights: [
    '端末に保存されたゲーム・反応速度の記録は、アプリで直接確認でき、設定の「記録を消去」で消せます。アプリを削除してもすべて消えます。広告の設定は、端末の設定 > Google > 広告、またはアプリ設定の「広告のプライバシー設定」で変更できます。Googleが保有する情報は、Googleアカウントで確認・削除できます。',
    `個人情報の閲覧・訂正・削除・処理停止のご請求は ${CONTACT.email} までご連絡ください。本人確認のうえ遅滞なく対応し、遅くとも10日以内に対応結果または対応できない理由をお知らせします。当社はお客様の記録を保有していないため、当社が閲覧・削除できる情報はほとんどありません。`,
  ],
  ageHead: '利用年齢',
  age: [
    '本アプリは13歳未満のお子様を対象としておらず、お子様の情報を意図的に収集することはありません。',
    '本アプリは年齢・氏名・連絡先をお尋ねしません。端末識別子と広告IDは、広告配信のために自動的に処理されます。',
    `14歳未満のお子様の法定代理人は ${CONTACT.email} に閲覧・削除などを依頼できます。本アプリにはアカウントもサーバーもなく、直接保管している情報はありません。Googleに送信した広告データは、上記「保管期間と削除」の方法に従います。`,
  ],
  thirdHead: '第三者のポリシー',
  third: `Google プライバシーポリシー：${GOOGLE}`,
  contactHead: 'お問い合わせ',
  operator: `個人情報取扱事業者：The First Titan（サービス名：${CONTACT.service}）`,
  officer: '個人情報保護責任者・お問い合わせ担当：The First Titan',
  publicUrl: `公開URL：${PUBLIC_URL}`,
};

const block = (id, lang, t) =>
  `<div id="${id}" lang="${lang}">\n<h2 class="lang-title">${esc(t.title)}</h2>\n` +
  [
    p(t.intro),
    sec(t.adsHead, p(t.ads)),
    sec(t.transferHead, [p(t.transferIntro), `<h3>${esc(t.transferName)}</h3>\n${dl(t.transferItems)}`].join('\n')),
    sec(t.localHead, p(t.local)),
    sec(t.permsHead, [p(t.permsIntro), ul(t.perms)].join('\n')),
    sec(t.retentionHead, p(t.retention)),
    sec(t.rightsHead, t.rights.map(p).join('\n')),
    sec(t.ageHead, t.age.map(p).join('\n')),
    sec(t.thirdHead, p(t.third)),
    sec(t.contactHead, [p(t.operator), p(t.officer), `<p><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></p>`, p(t.publicUrl)].join('\n')),
  ].join('\n') +
  '\n</div>';

const koBlock = `<div id="ko" lang="ko">\n<h2 class="lang-title">개인정보처리방침</h2>\n<p>${esc(intro)}</p>\n${sectionsHtml(sections)}\n</div>`;
const body = [
  '<p><a href="#en">English</a> | <a href="#ja">日本語</a> | <a href="#ko">한국어</a></p>',
  block('en', 'en', en),
  '<hr>',
  block('ja', 'ja', ja),
  '<hr>',
  koBlock,
  '<p class="back"><a href="../">Back to the policy list / 他のアプリの方針 / 다른 앱 방침 보기</a></p>',
].join('\n');
write(
  'numbaseball/index.html',
  page({
    title: 'Bulls & Cows Privacy Policy',
    heading: 'Bulls & Cows Privacy Policy / ヒット&ブロー プライバシーポリシー / 스리볼 개인정보처리방침',
    sub: `Effective date ${EFFECTIVE} / 施行日 ${EFFECTIVE} / 시행일 ${EFFECTIVE}`,
    body,
    cssPath: '../style.css',
    lang: 'en',
    footer: `The First Titan (${CONTACT.service})`,
  }),
);
