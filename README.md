# AICA SOFT 개인정보처리방침 사이트

GitHub Pages용 정적 사이트. 외부 리소스·스크립트·추적 없음. 한국어.

## 재생성

Node 22.18 이상 필요(개발은 24.11). 의존성 없음.

```
node scripts/build-danamtok.mjs <privacy.ts 경로>   # 다남겨톡: 앱의 privacy.ts 를 import 해서 생성
node scripts/build-adapps.mjs                       # 광고 앱 5개(108배·복불복·점수판·자동차 할부·직장인 계산기)
node scripts/build-index.mjs                        # index.html, 404.html
node scripts/check.mjs                              # lang/charset/viewport/링크 점검
```

- 다남겨톡 문구는 다남겨톡 앱의 `app/src/content/privacy.ts` 의 `PRIVACY_COPY`·`PRIVACY_EFFECTIVE_DATE` 를 그대로 읽는다(경로는 필수: 인자 또는 환경변수 `DANAMTOK_PRIVACY_TS`). 앱 문구가 바뀌면 `build-danamtok.mjs` 만 다시 돌리면 된다. Node 22.18 미만이면 `node --experimental-strip-types scripts/build-danamtok.mjs`.
- 책임자·문의처·시행일·앱 목록은 `scripts/lib.mjs` 한 곳(`CONTACT`, `EFFECTIVE_DATE`, `APPS`). 앱의 `PRIVACY_CONTACT` 와 다르면 생성 시 경고한다.
- 광고 앱 공통 문구와 앱별 차이(저장 항목 등)는 `scripts/build-adapps.mjs`.
- 생성된 html 은 커밋한다(Pages가 그대로 서빙).

## GitHub Pages 설정

Settings > Pages > Source: Deploy from a branch > Branch: `main` / Folder: `/ (root)`.
저장소 이름이 `aicasoft-policy` 가 아니면 `scripts/lib.mjs` 의 `SITE_BASE` 를 `/<저장소이름>/` 으로 바꾸고 `build-index.mjs` 를 다시 돌린다(404.html 의 홈 링크용). 나머지 링크는 모두 상대 경로다.

## 광고 앱 데이터 흐름 확인 근거 (각 저장소 main)

공통(각 앱 저장소 main): `android/app/src/main/AndroidManifest.xml` 직접 선언 권한은 INTERNET 뿐, `firebase_analytics_collection_enabled=false`(40~43행 부근) / `src/ads/consent.ts` UMP, 동의 정보 실패 시 광고 요청 안 함 / `src/main.tsx:52` `analytics.decide(ads.consent.canRequestAds)` / `src/analytics/analytics.ts:19-49` 결정 전 이벤트 보류, 거부 시 폐기 / `app.config.ts` `removeAds.enabled:false`(결제 없음), `main.tsx:40` 광고 제거 결제 조회 수단 없음 / 서버 호출 코드(fetch 등) 없음.
앱별 저장: bow108 `src/bow/progress.ts:5-6`, `records.ts:14` / bokbulbok `src/store/data.ts:5` / scoreboard `src/store/storage.ts:4-5` / carloan `src/calc/form.ts:14` / salarycalc 는 `theme` 외 저장 없음.

권한은 각 앱 `<slug>-appid` 작업본의 debug 병합 매니페스트(`android/app/build/intermediates/merged_manifest/debug/processDebugMainManifest/AndroidManifest.xml`) 기준이다. 5개 앱이 같고 bow108만 VIBRATE가 더 있다. 5개 모두 `allowBackup="true"`. 아동 대상 태그: `main.tsx:48` `childDirected = (audience==='child')`, 5개 앱 모두 audience 'general' 이라 false, `maxAdContentRating: 'ParentalGuidance'`.
Google 역할 서술(AdMob은 제3자 제공, Firebase Analytics는 처리 위탁)은 Google 문서(AdMob·Firebase의 데이터 수집 안내, policies.google.com/technologies/partner-sites)를 근거로 한 해석이라 법무 확인이 필요하다.
