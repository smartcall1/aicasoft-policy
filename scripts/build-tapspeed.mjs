// 탭 속도 측정(tapspeed) 방침. 근거: 앱 docs/DATA_SAFETY.md(§3 저장, §4 권한 8건), SPEC.md(R10·R11), app.config.ts(removeAds.enabled=false, rewarded 꺼짐), 병합 매니페스트(release). 앱 안 방침 화면은 없고 설정에서 이 주소를 연다.
import { buildPolicy } from './policy13.mjs';

buildPolicy({
  slug: 'tapspeed', nameKo: '탭 속도 측정', nameEn: 'CPS Test', titleEn: 'CPS Test', effective: '2026-10-25',
  purposeKo: ['초당 탭 수(CPS)를 재고, 모드별 최고 기록과 최근 기록을 보여 줘요.'],
  purposeEn: ['To measure taps per second (CPS) and show your best and recent results for each mode.'],
  storedKo: '측정 기록(모드별 최고 기록과 최근 50회: 탭 수, CPS 등)과 설정(화면 모드, 효과음, 진동, 터치 표시, 마지막에 쓴 모드)은 이 기기에만 저장해요. 회사 서버가 없어서 어디로도 보내지 않아요. 계정·로그인·랭킹도 없어요.',
  storedEn: 'Measurement records (best result per mode and the latest 50 runs: tap count, CPS, etc.) and settings (display mode, sound effects, vibration, touch display, last-used mode) are stored only on this device. We have no server, so none of it is sent anywhere. There are no accounts, logins or rankings.',
  adsKo: '광고는 배너와 전면 광고로 나오며, 측정 화면에는 나오지 않아요.', adsEn: 'Ads include banner and interstitial ads, and none appear on the measuring screen.',
  perms: ['INTERNET', ['진동(VIBRATE)', 'Vibration (VIBRATE)', '설정에서 진동을 켠 경우 탭할 때 진동으로 알려 줘요. 기본은 꺼져 있어요.', 'gives tap vibration feedback when you turn vibration on in Settings; it is off by default.'], 'NETWORK', 'ADID', 'ADSERVICES', 'DYN'],
  permIntroKo: '모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않아요. 위치, 연락처, 사진, 마이크, 카메라 권한은 쓰지 않아요.',
  permIntroEn: 'All are granted at install time, so no prompt appears. The App does not use location, contacts, photos, microphone or camera permissions.',
  deleteKo: '기기에 저장된 기록은 앱의 기록 화면에서 모두 지우거나(확인 뒤 삭제), 앱을 삭제하거나, 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요.',
  deleteEn: 'Records on your device can be cleared on the History screen in the App (after a confirmation), by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data.',
  safeKo: '앱이 쓰는 권한은 광고와 진동에 필요한 것으로 줄였어요.', safeEn: 'The permissions the App uses are limited to what ads and vibration need.',
  iap: null,
});
