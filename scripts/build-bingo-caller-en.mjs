// Bingo Caller Voice(slug bingo-caller) 영어 방침 페이지 생성.
// 기준: bingo-caller app.config.ts (name, operatorName, serviceName, contactEmail, privacyPolicyUrl, audience),
//       src/consent/transferNotice.ts, src/screens/PrivacyScreen.tsx, docs/DATA_SAFETY_EN.md, docs/SPEC.md (TTS 결정)
// 사업자명·책임자는 다른 영어 방침과 같은 표기를 쓴다.
import { esc, page, write } from './lib.mjs';

const APP = 'Bingo Caller Voice';
const EFFECTIVE = '2026-10-12';
const OPERATOR = 'The First Titan';
const SERVICE = 'AICA SOFT';
const OFFICER = 'KIM KWANGOK';
const EMAIL = 'hsindevelop@gmail.com';
const PUBLIC_URL = 'https://smartcall1.github.io/aicasoft-policy/bingo-caller/';
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

const body = [
  p(`${APP} ("the app") has no server and no account system. The developer does not collect or store personal information such as your name or contact details. Your game state (bingo settings, called numbers, and call history) is stored only on your device (local storage) and is never sent to us. Google processes the advertising ID, approximate location, and other data described below to serve ads.`),
  sec('Advertising (Google AdMob)', p(`The app is free, supported by banner and interstitial ads from Google AdMob. To serve ads, Google may collect and use your advertising ID, device information, approximate location (based on IP address), app interactions, and diagnostic data. Users in the European Economic Area (EEA) and the UK are asked for consent on first launch and can change it anytime under "Ad privacy options" in Settings. You can also reset your advertising ID or turn off personalized ads in your device settings. If consent is declined or cannot be confirmed, the app does not request ads.`)),
  sec(
    'Voice (text-to-speech)',
    p("The app calls out bingo numbers using the text-to-speech engine installed on your phone. The app does not use the microphone and does not record any audio. Depending on the engine and its settings on your device (for example, Google Text-to-Speech), some voices may be generated over the network by that engine's provider. That is handled by the engine under its own settings and privacy policy, not by the app, and the app does not send the spoken text to us."),
  ),
  sec(
    'International data transfers',
    [
      p('For advertising, the information below is sent to Google LLC in the United States. To opt out, reset or delete your advertising ID in your device settings, or uninstall the app.'),
      `<h3>Advertising (Google AdMob)</h3>\n<dl class="contact">\n${transferItems.map(([l, v]) => dl(l, v)).join('\n')}\n</dl>`,
    ].join('\n'),
  ),
  sec('Retention and deletion', p("Game state and settings the app stores on your device are deleted when you uninstall the app. Advertising data sent to Google is kept under Google's retention policies. Once the app is uninstalled, nothing more is sent (you can also cut the link for ads by resetting or deleting your advertising ID in device settings). To request deletion of data already sent, contact us using the details below.")),
  sec('Age', p('The app is intended for users aged 18 and over and is not directed to children. We do not knowingly collect information from children.')),
  sec('Third-party privacy policies', p(`Google Privacy Policy: ${GOOGLE_PRIVACY}`)),
  sec('Your rights', p('You can ask to view or delete your data by emailing the contact address below. You can withdraw ad consent under "Ad privacy options" in Settings, or by resetting or deleting your advertising ID in your device settings.')),
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
  'bingo-caller/index.html',
  page({ title: `${APP} Privacy Policy`, heading: `${APP} Privacy Policy`, sub: `Effective date ${EFFECTIVE}`, body, cssPath: '../style.css', lang: 'en', footer: `${OPERATOR} (${SERVICE})` }),
);
