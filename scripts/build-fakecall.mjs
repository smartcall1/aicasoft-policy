// 가짜 수신 전화(fakecall) 방침. 근거: 앱 src/screens/PrivacyScreen.tsx, docs/PLAY_DECLARATIONS.md(§1 전체화면 인텐트·§2 정확 알람·§4 알림), DATA_SAFETY.md, SPEC.md, 병합 매니페스트(release), app.config.ts(removeAds.enabled=true, rewarded 꺼짐).
import { buildPolicy } from './policy13.mjs';
import { IAP } from './iap-text.mjs';

buildPolicy({
  slug: 'fakecall', nameKo: '가짜 수신 전화', nameEn: 'Scheduled Fake Call', titleEn: 'Scheduled Fake Call', effective: '2026-10-25',
  purposeKo: ['내가 정한 시각에 가짜 수신 전화 화면을 띄워 주고, 예약을 저장해 두었다가 다시 쓸 수 있게 해요.'],
  purposeEn: ['To show a simulated incoming-call screen at the time you set, and to keep your reservations so you can reuse them.'],
  storedKo: '예약한 표시 이름·번호·시각과 설정(화면 모드, 효과음, 수신 방식)은 이 기기에만 저장해요. 알람이 울릴 때 쓰도록 같은 예약 내용의 사본을 기기 안 앱 저장소에도 둬요. 회사 서버가 없어서 어디로도 보내지 않아요. 앱은 실제 전화를 걸지 않고 통화·연락처·위치 권한을 요청하지 않아요.',
  storedEn: "The display names, numbers and times you schedule, and settings (display mode, sound effects, ring style), are stored only on this device. A copy of the same reservations is also kept in the App's on-device storage so the alarm can fire. We have no server, so none of it is sent anywhere. The App places no real calls and never asks for phone, contacts or location permissions.",
  adsKo: '광고는 배너와 전면 광고로 나와요.', adsEn: 'Ads include banner and interstitial ads.',
  perms: [
    'INTERNET', 'NETWORK',
    ['알림(POST_NOTIFICATIONS)', 'Notifications (POST_NOTIFICATIONS)', '예약한 시각에 수신 화면을 띄우는 데에만 써요. 안드로이드 13 이상에서는 설명 화면 뒤에 허용 여부를 물어요. 거부해도 예약은 만들 수 있지만 울리지 않아요.', 'used only to show the call screen at the time you set. On Android 13 and later it asks after an explanation screen. If you decline, you can still create reservations but they will not ring.'],
    ['전체 화면 알림(USE_FULL_SCREEN_INTENT)', 'Full-screen notification (USE_FULL_SCREEN_INTENT)', '잠금 화면에서도 수신 화면이 화면 가득 뜨게 해요. 안드로이드 14 이상에서는 설정에서 직접 허용해야 쓰이고, 허용하지 않으면 알림으로만 받아요.', 'lets the call screen fill the screen even on the lock screen. On Android 14 and later you must allow it in Settings; if you do not, you only get a notification.'],
    ['정확한 알람(SCHEDULE_EXACT_ALARM)', 'Exact alarms (SCHEDULE_EXACT_ALARM)', '정한 시각에 맞춰 수신 화면을 띄우는 데 써요. 허용하지 않으면 몇 분 늦을 수 있는 방식으로 대신 예약해요.', 'used to show the call screen at the exact time you set. If you do not allow it, the App schedules in a way that may be a few minutes late.'],
    ['부팅 완료 수신(RECEIVE_BOOT_COMPLETED)', 'Receive boot completed (RECEIVE_BOOT_COMPLETED)', '기기를 다시 켠 뒤에도 예약해 둔 알람을 복구하는 데 써요.', 'used to restore your scheduled alarms after the device restarts.'],
    ['진동(VIBRATE)', 'Vibration (VIBRATE)', '전화가 올 때 진동으로 알려 줘요.', 'vibrates when the simulated call arrives.'],
    ['절전 방지와 백그라운드 작업(WAKE_LOCK, FOREGROUND_SERVICE)', 'Keep awake and background work (WAKE_LOCK, FOREGROUND_SERVICE)', '광고 SDK 같은 라이브러리가 작업을 마칠 때까지 기기가 잠들지 않게 하는 라이브러리용 권한이에요.', 'library permissions that keep the device awake until a library such as the ad SDK finishes its work.'],
    'ADID', 'ADSERVICES', 'BILLING', 'DYN',
  ],
  permIntroKo: '알림·전체 화면 알림·정확한 알람은 예약 기능에 필요한 권한이고, 나머지는 광고·결제·라이브러리용이에요. 전화 상태, 통화 걸기, 연락처, 위치, 마이크, 카메라 권한은 요청하지 않아요.',
  permIntroEn: 'Notifications, full-screen notification and exact alarms are needed for the reservation feature; the rest are for ads, payment and libraries. The App does not request phone state, calling, contacts, location, microphone or camera permissions.',
  deleteKo: '기기에 저장된 예약과 설정은 앱 안에서 예약을 지우거나, 앱을 삭제하거나, 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요.',
  deleteEn: 'Reservations and settings on your device can be erased by deleting reservations inside the App, by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data.',
  safeKo: '앱이 쓰는 권한은 예약 알람과 광고·결제에 필요한 것으로 줄였어요. 실제 전화를 걸거나 통화 내용에 접근하지 않아요.', safeEn: 'The permissions the App uses are limited to what reservation alarms, ads and payment need. It does not place real calls or access call content.',
  iap: IAP,
});
