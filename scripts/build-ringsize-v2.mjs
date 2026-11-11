// 반지 사이즈(ringsize-v2, 영문 Ring Measure) 방침. 근거: 앱 src/screens/PrivacyScreen.tsx, docs/DATA_SAFETY.md, docs/PLAN.md(광고 자리), docs/REMOVE_ADS_BILLING.md, app.config.ts(appId kr.aicasoft.ringsizev2, removeAds.enabled=true), src/lib/share.ts·scripts/native/thememode/ThemeModePlugin.java(공유). 카메라·사진·마이크·위치 권한 없음. 권한 목록은 광고+결제 앱 표준 구성(병합 매니페스트는 이 작업에서 미확인).
import { buildPolicy } from './policy13.mjs';
import { IAP } from './iap-text.mjs';

buildPolicy({
  slug: 'ringsize-v2', nameKo: '반지 사이즈', nameEn: 'Ring Measure', titleEn: 'Ring Measure', effective: '2026-11-12',
  purposeKo: ['카드에 맞춰 화면 크기를 보정하고, 반지 안쪽 지름과 둘레를 mm와 나라별 호수(KR·US·UK·EU·JP)로 보여 줘요.', '내 호수 목록을 저장해 다시 볼 수 있게 해요.', '측정 결과를 글이나 이미지로 다른 앱에 공유할 수 있게 해요(사용자가 누를 때만).'],
  purposeEn: ['To calibrate your screen with a card and show the inner diameter and circumference of a ring in mm and as sizes for KR, US, UK, EU and JP.', 'To save a list of your ring sizes so you can view them again.', 'To let you share a result as text or an image with another app (only when you tap share).'],
  storedKo: '카드로 맞춘 화면 보정값, 내가 저장한 호수 목록(이름, 손, 손가락, 안쪽 지름, 저장 날짜), 저장 칸 수와 보상형 광고로 늘린 횟수, 설정(화면 모드, 표시 나라, 글자 크기, 소리), 첫 실행 안내를 봤는지 여부는 이 기기에만 저장해요. 회사 서버가 없어서 어디로도 보내지 않아요. 사진은 찍지 않고 카메라와 사진 권한도 쓰지 않아요. 공유 버튼을 누르면 결과 글과 이미지(PNG)를 기기의 공유 창으로 넘기고, 사용자가 고른 앱으로만 전달돼요. 회사는 받지 않으며, 보낸 뒤의 처리는 받는 앱의 방침을 따라요. 공유용 이미지는 앱의 임시 저장 공간(캐시)에 잠시 만들어져요.',
  storedEn: 'The screen calibration made with a card, the list of ring sizes you save (name, hand, finger, inner diameter, save date), the number of save slots and times you unlocked more with a rewarded ad, settings (display mode, country shown, text size, sound), and whether you have seen the first-launch guide are stored only on this device. We have no server, so none of it is sent anywhere. The App does not take photos and does not use the camera or photo permissions. When you tap share, the result text and an image (PNG) are handed to the device share sheet and go only to the app you choose. We do not receive them, and what happens afterward follows that app\'s policy. The image for sharing is created briefly in the App\'s temporary storage (cache).',
  adsKo: '광고는 결과 화면의 배너, 저장 뒤 전면 광고, 사용자가 직접 고르는 보상형 광고로 나오며, 측정 중과 결과가 나오기 전에는 나오지 않아요.',
  adsEn: 'Ads appear as a banner on the result screen, an interstitial after saving, and a rewarded ad you choose yourself. No ads appear while measuring or before the result is shown.',
  // 11-12 노이즈 마이너: 합쳐진 매니페스트에 FOREGROUND_SERVICE 도 있음(10개) — 이 앱만 WAKE 항목을 넓혀 씀
  perms: ['INTERNET', 'NETWORK', 'ADID', 'ADSERVICES', ['절전 방지와 백그라운드 작업(WAKE_LOCK, FOREGROUND_SERVICE)', 'Keep awake and background work (WAKE_LOCK, FOREGROUND_SERVICE)', '광고 SDK 같은 라이브러리가 작업을 마칠 때까지 기기가 잠들지 않게 하고, 짧은 작업을 백그라운드에서 끝내게 하는 권한이에요.', 'lets a library such as the ad SDK keep the device awake and finish short work in the background.'], 'BILLING', 'DYN'],
  permIntroKo: '모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않아요. 카메라, 사진, 마이크, 위치, 연락처 권한은 쓰지 않아요.',
  permIntroEn: 'All are granted at install time, so no prompt appears. The App does not use camera, photo, microphone, location or contacts permissions.',
  deleteKo: '기기에 저장된 값은 앱에서 저장한 호수를 지우거나, 앱을 삭제하거나, 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요.',
  deleteEn: 'Values stored on your device can be removed by deleting saved sizes in the App, by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data.',
  safeKo: '앱이 쓰는 권한은 광고와 결제에 필요한 것으로 줄였어요.', safeEn: 'The permissions the App uses are limited to what ads and payment need.',
  iap: IAP,
});
