// 오프라인 만세력(manseryeok) 방침. 근거: 앱 src/screens/PrivacyScreen.tsx(데이터 처리 서술 보존, 초안 1시간 보관 포함), app.config.ts(removeAds.enabled=false), release 병합 매니페스트(10-25 17:01) 권한 9건 1:1.
import { buildPolicy } from './policy13.mjs';

buildPolicy({
  slug: 'manseryeok', nameKo: '오프라인 만세력', nameEn: 'Offline Manseryeok', titleEn: 'Offline Manseryeok', effective: '2026-10-25',
  purposeKo: ['생년월일시로 만세력(명식)을 계산해 보여 주고, 저장한 명식을 다시 볼 수 있게 해요.'],
  purposeEn: ['To calculate and show a manseryeok chart from a birth date and time, and let you view saved charts again.'],
  storedKo: '입력한 생년월일시·이름은 이 기기에만 저장되고 서버·광고로 보내지 않아요. 지우려면 저장 목록에서 삭제하거나 앱을 삭제하면 돼요. 입력 중 초안은 이 기기에 최대 1시간 보관한 뒤 삭제해요. 회사 서버가 없어서 어디로도 보내지 않아요.',
  storedEn: 'The birth date/time and name you enter are stored only on this device and are not sent to a server or to ads. To erase them, delete the entry from your saved list or uninstall the App. A draft you are typing is kept on this device for up to 1 hour and then deleted. We have no server, so none of it is sent anywhere.',
  adsKo: '광고는 배너와 전면 광고로 나와요.', adsEn: 'Ads include banner and interstitial ads.',
  perms: [
    'INTERNET', 'NETWORK', 'ADID', 'ADSERVICES',
    ['절전 방지와 백그라운드 작업(WAKE_LOCK, FOREGROUND_SERVICE)', 'Keep awake and background work (WAKE_LOCK, FOREGROUND_SERVICE)', '광고 SDK 같은 라이브러리가 작업을 마칠 때까지 기기가 잠들지 않게 하는 라이브러리용 권한이에요.', 'library permissions that keep the device awake until a library such as the ad SDK finishes its work.'],
    'DYN',
  ],
  permIntroKo: '모두 설치할 때 한꺼번에 허용되는 권한이라 따로 묻는 창은 뜨지 않아요. 위치, 연락처, 사진, 마이크, 카메라 권한은 쓰지 않아요.',
  permIntroEn: 'All are granted at install time, so no prompt appears. The App does not use location, contacts, photos, microphone or camera permissions.',
  deleteKo: '기기에 저장된 명식과 설정은 앱의 저장 목록에서 삭제하거나, 앱을 삭제하거나, 휴대폰 설정 > 앱 > 이 앱 > 저장공간 > 데이터 삭제로 직접 지울 수 있어요.',
  deleteEn: 'Saved charts and settings on your device can be erased from the saved list in the App, by uninstalling the App, or in phone Settings > Apps > this app > Storage > Clear data.',
  safeKo: '앱이 쓰는 권한은 광고에 필요한 것으로 줄였어요.', safeEn: 'The permissions the App uses are limited to what ads need.',
  iap: null,
});
