// FairTip(slug tipsplit) 영어 방침 페이지 생성. 문구는 앱 안 방침 화면과 같다.
// 기준: tipsplit-ui feat/ui src/screens/PrivacyScreen.tsx, src/consent/transferNotice.ts, app.config.ts (name, operatorName, serviceName, privacyOfficer, contactEmail, privacyPolicyUrl)
// 사업자명·책임자는 앱 config 값(한국어) 그대로 쓴다.
import { esc, page, write } from './lib.mjs';

const APP = 'FairTip';
const EFFECTIVE = '2026-10-17';
const OPERATOR = 'The First Titan (더퍼스트타이탄)';
const SERVICE = 'AICA SOFT';
const OFFICER = 'KIM KWANGOK (김광옥)';
const EMAIL = 'hsindevelop@gmail.com';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/tipsplit/';
const GOOGLE_PRIVACY = 'https://policies.google.com/privacy';

const p = (t) => `<p>${esc(t)}</p>`;
const sec = (title, inner) => `<section>\n<h2>${esc(title)}</h2>\n${inner}\n</section>`;
const dl = (label, value) => `<dt>${esc(label)}</dt><dd>${esc(value)}</dd>`;

const transferItems = [
  ['Items transferred', 'Advertising ID, IP address, device information (model, operating system, language, etc.), ad impression and click logs (what you enter in the app is not transferred)'],
  ['Country, timing, and method', 'United States (may be moved to other countries where Google has servers). Sent over an encrypted network each time an ad is requested while you use the app'],
  ['Recipient', `Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). Google privacy inquiries: ${GOOGLE_PRIVACY}. For app-related inquiries, contact the privacy contact (${EMAIL})`],
  ['Purpose and retention', "Ad display, ad performance measurement, invalid click prevention. Retention follows Google's retention policies"],
  ['How to opt out, and what happens', "You can reset or delete your advertising ID or turn off personalized ads in your device settings, and uninstalling the app stops all transfers. Users in the European Economic Area (EEA) and the UK are asked for ad consent on first launch and can change it under 'Ad privacy options' in Settings. If you opt out, the app still works the same; you may see no ads or non-personalized ads."],
];

const permissions = [
  'Internet (INTERNET): needed to load ads.',
  'View network state (ACCESS_NETWORK_STATE): checks whether you are online to decide whether to load ads.',
  'Keep awake (WAKE_LOCK): lets the ads SDK finish its work while the device is active.',
  'Foreground service (FOREGROUND_SERVICE): declared by a library the app includes (the ads SDK); the app itself does not run a background service.',
  'Advertising ID (AD_ID, ACCESS_ADSERVICES_AD_ID): reads your device advertising ID to serve and measure ads. You can delete or reset it in your device settings.',
  'Android ad services (ACCESS_ADSERVICES_ATTRIBUTION, ACCESS_ADSERVICES_TOPICS): lets the ads SDK use ad measurement and interest topics.',
  'App-internal protection (DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION): stops other apps from listening to signals inside the app. This is declared by the app itself.',
];

const body = [
  p(`${APP} ("the app") does not collect personal information such as your name or contact details, and does not store it on a server. What you enter in the app is processed only on your device.`),
  sec('Advertising (Google AdMob)', p(`The app is free, supported by ads from Google AdMob. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP address), app interactions, and diagnostic data. Users in the European Economic Area (EEA) and the UK are asked for consent on first launch and can change it anytime under "Ad privacy options" in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If consent is declined or cannot be confirmed, the app does not request ads.`)),
  sec(
    'International data transfers',
    [
      p('For advertising, the information below is sent to Google LLC in the United States. To opt out, reset or delete your advertising ID in your device settings, or uninstall the app.'),
      `<h3>Advertising (Google AdMob)</h3>\n<dl class="contact">\n${transferItems.map(([l, v]) => dl(l, v)).join('\n')}\n</dl>`,
    ].join('\n'),
  ),
  sec('Permissions the app uses', [
    p('These are the Android permissions merged into the app (checked in the merged manifest of the build). All are granted at install time, so no prompt appears. The app does not use location, contacts, photos, microphone, camera, storage, or notification permissions.'),
    `<ul>\n${permissions.map((t) => `<li>${esc(t)}</li>`).join('\n')}\n</ul>`,
  ].join('\n')),
  sec('Backup', p('The app turns off Android backup (allowBackup is false in the merged manifest). Settings stored on your device are not copied to Google cloud backup or to a new phone through device transfer, and you start fresh after reinstalling or moving to a new phone.')),
  sec('Retention and deletion', p("Settings the app stores on your device are deleted when you uninstall the app. Advertising data sent to Google is kept under Google's retention policies. Once the app is uninstalled, nothing more is sent (you can also cut the link for ads by resetting or deleting your advertising ID in device settings). To request deletion of data already sent, contact us using the details below.")),
  sec('Age', p('The app is not directed to children under 13, and we do not knowingly collect information from children.')),
  sec('Third-party privacy policies', p(`Google Privacy Policy: ${GOOGLE_PRIVACY}`)),
  sec('Your rights', p('You can ask to view or delete your data by emailing the contact address below. You can withdraw ad consent under "Ad privacy options" in Settings, or by resetting or deleting your advertising ID in your device settings.')),
  sec('Requests: access, correction, deletion (10 days)', p(`To request access to, correction of, deletion of, or a halt to processing of your personal information, email ${EMAIL}. We act without delay after confirming it is you, and tell you the result, or the reason we cannot act, within 10 days at the latest. We hold none of your records, so there is very little we can view or delete for you. Information held by Google can be viewed and deleted in your Google account.`)),
  sec('Changes to this policy', p('We will update this page and the effective date when this policy changes.')),
  sec(
    'Contact',
    [
      p(`Operator: ${OPERATOR} (service name: ${SERVICE})`),
      p('The operator is a business located in the Republic of Korea.'),
      p(`Privacy contact: ${OFFICER}`),
      `<p><a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></p>`,
      p(`Public URL: ${PUBLIC_URL}`),
    ].join('\n'),
  ),
].join('\n');

write(
  'tipsplit/index.html',
  page({ title: `${APP} Privacy Policy`, heading: `${APP} Privacy Policy`, sub: `Effective date ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: `The First Titan (${SERVICE})` }),
);
