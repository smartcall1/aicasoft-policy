// 반려견 호각(dogwhistle) 방침. 근거: 앱 src/screens/PrivacyScreen.tsx, docs/DATA_SAFETY.md, STORE_LISTING.md, 병합 매니페스트(release), app.config.ts(removeAds.enabled=true, rewarded 꺼짐).
import { buildPolicy } from './policy13.mjs';
import { IAP } from './iap-text.mjs';

buildPolicy({
  slug: 'dogwhistle', nameKo: '반려견 호각', nameEn: 'Dog Whistle', titleEn: 'Dog Whistle', effective: '2026-10-25',
  purposeKo: ['1~22kHz 호각 소리를 내고, 직접 만든 훈련 신호를 저장해 다시 쓸 수 있게 해요.'],
  purposeEn: ['To play whistle tones from 1 to 22 kHz and let you save and reuse training signals you create.'],
  storedKo: '내가 만든 훈련 신호(이름, 주파수, 길이, 횟수)와 설정(화면 모드, 언어, 효과음·진동, 소리 출력 선택 같은 값)은 이 기기에만 저장해요. 회사 서버가 없어서 어디로도 보내지 않아요. 마이크를 쓰지 않고, 소리는 기기 안에서 만들어요.',
  storedEn: 'The training signals you create (name, frequency, length, repeat count) and settings (display mode, language, sound and vibration, audio output choice, and similar values) are stored only on this device. We have no server, so none of it is sent anywhere. The App does not use the microphone; sounds are generated on your device.',
  adsKo: '광고는 배너와 전면 광고로 나와요.', adsEn: 'Ads include banner and interstitial ads.',
  perms: ['INTERNET', 'NETWORK', 'ADID', 'ADSERVICES', 'WAKE', 'BILLING', 'DYN'],
  permIntroKo: '모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않아요. 마이크, 녹음, 위치, 연락처, 사진, 카메라 권한은 쓰지 않아요.',
  permIntroEn: 'All are granted at install time, so no prompt appears. The App does not use microphone, recording, location, contacts, photos or camera permissions.',
  deleteKo: '기기에 저장된 신호와 설정은 앱을 삭제하거나 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요. 내 신호는 앱 안에서 하나씩 지울 수도 있어요.',
  deleteEn: 'Signals and settings on your device can be erased by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data. You can also delete your signals one by one inside the App.',
  safeKo: '앱이 쓰는 권한은 광고와 결제에 필요한 것으로 줄였어요.', safeEn: 'The permissions the App uses are limited to what ads and payment need.',
  iap: IAP,
});
