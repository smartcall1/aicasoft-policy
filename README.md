# AICA SOFT 개인정보처리방침 사이트

GitHub Pages용 정적 사이트. 외부 리소스·스크립트·추적 없음. 한국어.

## 재생성

Node 22.18 이상 필요(개발은 24.11). 의존성 없음.

```
# (은퇴) build-danamtok.mjs: 수동 관리 - 쓰지 말 것. danamtok/index.html 을 직접 고친다
node scripts/build-adapps.mjs                       # 광고 앱 4개(108배·복불복·점수판·사회생활 계산기) + 쾅픽(서버·AI 앱이라 별도 문구) + 통합돼 안내 페이지만 둔 carloan·salarycalc
node scripts/build-apps4.mjs                       # 월급마중(alba-pay)·AERO VOYAGE(aero)·꼬마체스(kids-chess)·이름마중(name-demo). 근거 기준 커밋은 스크립트 머리 주석
node scripts/build-olhaejeom.mjs                    # 이어닷(olhaejeom). 기준 코드 yeardots-probe main 1dc5a65
node scripts/build-subway-escape.mjs               # 지하철 탈출(subway-escape). 기준 코드 subway-escape main 7a83c7f
node scripts/build-blastline.mjs                    # 폭파 한 줄(blastline) ko·en 한 URL. 앱 blastline 의 scripts/export-legal.ts 로 내보낸 scripts/data/blastline-legal.json 을 읽음
node scripts/build-percentcalc.mjs                  # 퍼센토(percentcalc) ko·en 한 URL
node scripts/build-noisemeter.mjs                   # dB 줄자(noisemeter) ko·en 한 URL
node scripts/build-classicboard.mjs                 # 클래식 보드게임(classicboard) ko·en 한 URL
node scripts/build-manseryeok.mjs                  # 오프라인 만세력(manseryeok) ko·en 한 URL. 앱 PrivacyScreen.tsx와 문장 대조
node scripts/build-dogwhistle.mjs               # 반려견 호각(dogwhistle) ko·en 한 URL. 앱 docs/DATA_SAFETY.md·병합 매니페스트와 대조
node scripts/build-fakecall.mjs               # 가짜 수신 전화(fakecall) ko·en 한 URL. 앱 docs/DATA_SAFETY.md·병합 매니페스트와 대조
node scripts/build-tapspeed.mjs               # 탭 속도 측정(tapspeed) ko·en 한 URL. 앱 docs/DATA_SAFETY.md·병합 매니페스트와 대조
node scripts/build-timecalc.mjs               # 시간 계산기(timecalc) ko·en 한 URL. 앱 docs/DATA_SAFETY.md·병합 매니페스트와 대조
node scripts/build-runpace.mjs                    # 러닝 페이스(runpace) ko·en 한 URL. 근거는 scripts/data/runpace-legal.json _source
node scripts/build-index.mjs                        # index.html, 404.html
node scripts/check.mjs                              # lang/charset/viewport/링크 점검
```

- 다남겨톡(danamtok/index.html)은 수동 관리다. `build-danamtok.mjs` 는 어느 앱 버전으로 돌려도 게시본과 달라져 은퇴했으니 쓰지 말고 html 을 직접 고친다.
- 책임자·문의처·시행일·앱 목록은 `scripts/lib.mjs` 한 곳(`CONTACT`, `EFFECTIVE_DATE`, `APPS`). 앱의 `PRIVACY_CONTACT` 와 다르면 생성 시 경고한다.
- 광고 앱 공통 문구와 앱별 차이(저장 항목 등)는 `scripts/build-adapps.mjs`.
- 생성된 html 은 커밋한다(Pages가 그대로 서빙).

## GitHub Pages 설정

Settings > Pages > Source: Deploy from a branch > Branch: `main` / Folder: `/ (root)`.
저장소 이름이 `aicasoft-policy` 가 아니면 `scripts/lib.mjs` 의 `SITE_BASE` 를 `/<저장소이름>/` 으로 바꾸고 `build-index.mjs` 를 다시 돌린다(404.html 의 홈 링크용). 나머지 링크는 모두 상대 경로다.

## 광고 앱 데이터 흐름 확인 근거 (각 저장소 main)

공통(각 앱 저장소 main): `android/app/src/main/AndroidManifest.xml` 직접 선언 권한은 INTERNET 뿐 / `src/ads/consent.ts` UMP, 동의 정보 실패 시 광고 요청 안 함 / `app.config.ts` `removeAds.enabled:false`(결제 없음), `main.tsx:40` 광고 제거 결제 조회 수단 없음 / 서버 호출 코드(fetch 등) 없음.
앱별 저장: bow108 `src/bow/progress.ts:5-6`, `records.ts:14` / bokbulbok `src/store/data.ts:5` / scoreboard `src/store/storage.ts:4-5` / lifecalc `src/calc/giftLedger.ts:7`(경조사비), `form.ts:14`·`compare.ts:5`(자동차 할부 입력·비교 3건), `theme.ts:5`, 자동 백업 꺼짐 `scripts/patch-android.mjs:51-54`. carloan·salarycalc 는 lifecalc 로 통합(안내 페이지).

권한은 각 앱 `<slug>-appid` 작업본의 debug 병합 매니페스트(`android/app/build/intermediates/merged_manifest/debug/processDebugMainManifest/AndroidManifest.xml`) 기준이다. 5개 앱이 같고 bow108만 VIBRATE가 더 있다. 5개 앱 모두 소스 `AndroidManifest.xml` 에서 `allowBackup="false"`(사장 확인 2026-10-11). 아동 대상 태그: `main.tsx:48` `childDirected = (audience==='child')`, 5개 앱 모두 audience 'general' 이라 false, `maxAdContentRating: 'ParentalGuidance'`.
Google 역할 서술(AdMob은 제3자 제공)은 Google 문서(AdMob·Firebase의 데이터 수집 안내, policies.google.com/technologies/partner-sites)를 근거로 한 해석이라 법무 확인이 필요하다.

## 쾅픽 확인 근거 (D:App_developpick-one main 0016aff)

서버 전송: `src/lib/api.ts`(x-device-id, x-metrics, A·B·상황 POST), `shared/contract.ts` LIMITS(30/30/80자), `worker/src/handler.ts`(판정·신고·IP/기기 해시·cron 정리 7/30/90일), `worker/src/gemini.ts:213-216`·`prompt.ts:109`(Gemini에는 A·B·상황만), `worker/migrations/*.sql`(저장 표), `worker/METRICS.md`(집계·보관 8~15일), `worker/wrangler.toml`(Cloudflare Worker·D1 apac). 광고: `src/lib/ads.ts`(UMP, npa:true), `ad-config.ts`. 권한·백업: `android/app/src/main/AndroidManifest.xml`(allowBackup=false)와 debug 병합 매니페스트. Firebase: 의존성·코드 없음. 결제: `src/lib/billing.ts` 운영 빌드는 unavailable. 시행일은 `build-adapps.mjs` 의 `KWANGPICK_EFFECTIVE`.
