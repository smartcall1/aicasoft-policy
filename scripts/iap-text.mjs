// 광고 제거 1회 구매 문구(dogwhistle·fakecall·timecalc 공통). 앱의 src/iap/entitlementCache.ts 의 7일 캐시, PrivacyScreen 의 인앱 결제 문구에 맞춘다.
export const IAP = {
  ko: '로그인이나 회원 가입은 없어요. 광고 제거는 1회 구매예요. 구매는 Google Play가 처리하고 구매 내역도 Google Play가 보관해요. 앱은 구매 여부만 Google Play에 확인하며 결제 수단 등 결제 정보를 수집·저장하지 않아요. 별도 서버가 없고, 구매 여부만 기기에 최대 7일 캐시로 저장해요.',
  en: 'There is no login or sign-up. Removing ads is a one-time purchase. Google Play processes the purchase and keeps the purchase history. The App only asks Google Play whether you own it, and does not collect or store payment information. There is no separate server, and only whether you own it is cached on your device for up to 7 days.',
};
