// Beatset 한국어 방침(beatset/ko/). 사실 기준: beatset/index.html(영문), beatset 앱 src/ads, src/consent/transferNotice.ts
import { esc, page, write, CONTACT } from './lib.mjs';

const EFFECTIVE = '2026-10-12';
const li = (t) => `<li>${esc(t)}</li>`;
const sec = (title, items) => `<section>\n<h2>${esc(title)}</h2>\n<ul>\n${items.map(li).join('\n')}\n</ul>\n</section>`;

const body = [
  `<p>${esc(`${CONTACT.company}(서비스명 ${CONTACT.service}, 이하 "회사")은 Beatset(비트셋, 이하 "앱")을 제공하면서 개인정보 보호법 제30조에 따라 아래와 같이 개인정보 처리방침을 정해 공개합니다.`)}</p>`,
  sec('1. 개인정보의 처리 목적', [
    '앱에는 회원가입과 로그인이 없고 회사 서버도 없습니다. 회사는 이용자의 개인정보를 직접 수집하거나 서버에 저장하지 않습니다.',
    '앱에 입력한 내용은 이용자의 기기 안에서만 처리됩니다.',
    '앱은 무료이며 Google AdMob 광고(배너, 전면)로 운영합니다. 광고를 보여 주기 위해 Google이 아래 항목을 처리합니다.',
  ]),
  sec('2. 처리하는 개인정보 항목', [
    '회사가 수집하는 항목: 없음.',
    '광고 제공을 위해 Google(AdMob)이 처리하는 항목: 광고 ID, IP 주소(이를 바탕으로 한 대략적인 위치), 앱 이용 중 광고 상호작용(노출·클릭 기록), 기기 정보(기종, 운영체제, 언어 등), 진단 정보.',
    '기기에만 저장하는 것: 앱 설정과 이용 내용. 회사 서버로 보내지 않으며 앱을 삭제하면 함께 지워집니다.',
    '유럽경제지역(EEA)과 영국 이용자에게는 첫 실행 때 광고 동의를 묻고(Google UMP), 설정의 "광고 개인정보 옵션"에서 언제든 바꿀 수 있습니다. 동의하지 않았거나 동의 여부를 확인하지 못하면 앱은 광고를 요청하지 않습니다.',
  ]),
  sec('3. 개인정보의 보유 및 이용 기간', [
    '기기에 저장된 설정은 앱을 삭제할 때까지 보관하고, 삭제하면 함께 지워집니다.',
    'Google에 전송된 광고 관련 정보는 Google의 보유 정책에 따라 Google이 보관합니다. 회사는 이 정보를 가지고 있지 않습니다.',
  ]),
  sec('4. 개인정보의 파기 절차 및 방법', [
    '앱을 삭제하면 기기에 저장된 정보가 지워지고 더 이상 전송되지 않습니다.',
    '휴대폰 설정에서 광고 ID를 초기화하거나 삭제하면 광고와의 연결을 끊을 수 있습니다.',
    '이미 Google에 전송된 정보의 삭제는 Google 개인정보처리방침(https://policies.google.com/privacy)에 따라 Google에 요청하거나, 아래 개인정보 보호책임자에게 문의해 주십시오.',
  ]),
  sec('5. 개인정보의 제3자 제공 및 처리 위탁', [
    '회사는 개인정보를 판매하거나 직접 제공하지 않습니다.',
    '광고(Google LLC, AdMob): 광고 제공과 성과 측정, 부정 클릭 방지를 위해 위 광고 관련 항목을 Google이 자기 책임으로 처리합니다. 이용 목적은 같고, 보유 기간은 Google의 정책을 따릅니다.',
  ]),
  `<section>
<h2>6. 개인정보의 국외 이전</h2>
<p>광고를 위해 아래 정보가 Google LLC로 전송됩니다.</p>
<dl class="contact">
<dt>이전받는 자</dt><dd>Google LLC (1600 Amphitheatre Parkway, Mountain View, California 94043, USA). 문의: https://policies.google.com/privacy</dd>
<dt>이전되는 국가</dt><dd>미국 등 Google 서버가 있는 나라. 정확한 국가는 확인하지 못했습니다.</dd>
<dt>이전 항목</dt><dd>광고 ID, IP 주소, 기기 정보(기종, 운영체제, 언어 등), 광고 노출·클릭 기록 (앱에 입력한 내용은 전송되지 않습니다)</dd>
<dt>이전 시기와 방법</dt><dd>앱을 쓰는 동안 광고를 요청할 때마다 암호화된 네트워크로 전송됩니다.</dd>
<dt>이전 목적</dt><dd>광고 표시, 광고 성과 측정, 부정 클릭 방지</dd>
<dt>보유 및 이용 기간</dt><dd>Google의 보유 정책에 따릅니다.</dd>
<dt>거부 방법과 결과</dt><dd>휴대폰 설정에서 광고 ID를 초기화·삭제하거나 맞춤 광고를 끌 수 있고, 앱을 삭제하면 전송이 모두 멈춥니다. EEA·영국 이용자는 첫 실행 때 묻는 광고 동의를 거부하거나 설정의 "광고 개인정보 옵션"에서 바꿀 수 있습니다. 거부해도 앱 기능은 그대로 쓸 수 있고, 광고가 보이지 않거나 맞춤이 아닌 광고가 보일 수 있습니다.</dd>
</dl>
</section>`,
  sec('7. 만 14세 미만 아동', [
    '이 앱은 만 14세 미만 아동을 대상으로 하지 않으며, 만 14세 미만 아동의 개인정보를 알면서 수집하지 않습니다.',
    '만 14세 미만 아동의 정보가 모인 것을 알게 되면 아래 개인정보 보호책임자에게 알려 주십시오. 회사가 가진 정보라면 지체 없이 지웁니다.',
  ]),
  sec('8. 정보주체의 권리와 행사 방법', [
    '열람, 정정, 삭제, 처리 정지 요청은 이메일(' + CONTACT.email + ')로 보내 주십시오. 본인 확인 후 지체 없이 처리하고, 늦어도 10일 안에 처리 결과나 처리하지 못하는 사유를 알려 드립니다. 회사가 보유한 개인정보가 없는 경우에는 그 사실을 알려 드립니다.',
    '광고 동의는 설정의 "광고 개인정보 옵션"에서 철회할 수 있고, 휴대폰 설정에서 광고 ID를 초기화하거나 삭제할 수도 있습니다.',
  ]),
  sec('9. 처리방침의 변경', ['이 방침이 바뀌면 바뀐 내용을 시행일과 함께 이 페이지에 게시합니다.']),
  `<section>
<h2>10. 개인정보 보호책임자</h2>
<dl class="contact">
<dt>개인정보처리자</dt><dd>${esc(CONTACT.company)} (서비스명 ${esc(CONTACT.service)})</dd>
<dt>개인정보 보호책임자</dt><dd>${esc(CONTACT.officer)}</dd>
<dt>문의 이메일</dt><dd><a href="mailto:${esc(CONTACT.email)}">${esc(CONTACT.email)}</a></dd>
</dl>
</section>`,
  '<p class="back"><a href="../">English version</a> · <a href="../../">다른 앱 방침 보기</a></p>',
].join('\n');

write('beatset/ko/index.html', page({ title: 'Beatset(비트셋) 개인정보처리방침', heading: 'Beatset(비트셋) 개인정보처리방침', sub: `시행일 ${EFFECTIVE}`, body, cssPath: '../../style.css' }));
