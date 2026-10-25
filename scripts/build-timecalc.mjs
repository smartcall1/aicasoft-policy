// 시간 계산기(timecalc) 방침. 근거: 앱 src/screens/PrivacyScreen.tsx·src/consent/privacySections.tsx, docs/DATA_SAFETY.md, SPEC.md(R9·R10), 병합 매니페스트(release), app.config.ts(removeAds.enabled=true, rewarded 꺼짐).
import { buildPolicy } from './policy13.mjs';
import { IAP } from './iap-text.mjs';

buildPolicy({
  slug: 'timecalc', nameKo: '시간 계산기', nameEn: 'Time Calculator', titleEn: 'Time Calculator', effective: '2026-10-25',
  purposeKo: ['시:분:초 더하기·빼기와 시각 차이를 계산하고, 계산 기록을 다시 불러올 수 있게 해요.'],
  purposeEn: ['To add and subtract hours, minutes and seconds and work out time differences, and let you reload past calculations.'],
  storedKo: '계산 기록(식, 결과, 종류, 시각 — 최근 100개)과 설정(화면 모드, 키 소리, 진동, 시급, 금액 보이기, 마지막에 쓴 탭)은 이 기기에만 저장해요. 회사 서버가 없어서 어디로도 보내지 않아요. 마이크·카메라·위치·연락처 권한은 쓰지 않아요.',
  storedEn: 'Calculation history (expression, result, type and time, latest 100) and settings (display mode, key sound, vibration, hourly wage, show amounts, last-used tab) are stored only on this device. We have no server, so none of it is sent anywhere. The App does not use microphone, camera, location or contacts permissions.',
  adsKo: '광고는 배너와 전면 광고로 나와요.', adsEn: 'Ads include banner and interstitial ads.',
  perms: ['INTERNET', 'NETWORK', ['진동(VIBRATE)', 'Vibration (VIBRATE)', '키를 누를 때 진동으로 알려 줘요. 설정에서 켜고 끌 수 있고 기본은 꺼져 있어요.', 'gives key-press vibration feedback. You can turn it on or off in Settings; it is off by default.'], 'ADID', 'ADSERVICES', 'WAKE', 'BILLING', 'DYN'],
  permIntroKo: '모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않아요. 위치, 연락처, 사진, 마이크, 카메라 권한은 쓰지 않아요.',
  permIntroEn: 'All are granted at install time, so no prompt appears. The App does not use location, contacts, photos, microphone or camera permissions.',
  deleteKo: '기기에 저장된 기록과 설정은 앱 안의 기록 화면에서 지우거나(밀어서 삭제, 모두 지우기), 앱을 삭제하거나, 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요.',
  deleteEn: 'Records and settings on your device can be erased on the History screen in the App (swipe to delete, clear all), by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data.',
  safeKo: '앱이 쓰는 권한은 광고와 결제에 필요한 것으로 줄였어요.', safeEn: 'The permissions the App uses are limited to what ads and payment need.',
  iap: IAP,
});
