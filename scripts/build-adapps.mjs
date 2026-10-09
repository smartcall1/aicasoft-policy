// 광고 앱 5개 방침 페이지 생성: 공통 템플릿 + 앱별 값.
// 앱별 값은 각 저장소(D:\App_develop\<slug>, main 브랜치) 코드로 확인한 내용이다. 근거는 README 의 "확인 근거" 참고.
import { APPS, EFFECTIVE_DATE, CONTACT, esc, page, write, sectionsHtml, contactHtml, effectiveSub } from './lib.mjs';

// stored: 기기 localStorage 에만 저장하는 항목(앱마다 다름). null 이면 입력값을 저장하지 않는 앱.
// action: 이용 통계의 core_action 이 세는 동작(앱마다 다름)
const DETAIL = {
  bow108: {
    purpose: '108배와 염주 횟수를 세고, 날짜별 기록을 보여 줘요.',
    stored: ['이어하기용 진행 중 수행 1건(센 횟수, 목표 횟수, 경과 시간)과 사용자가 고른 설정', '날짜별 수행 기록(그날 센 횟수, 소요 시간, 목표를 채운 횟수)'],
    device: '화면 켜짐 유지와 진동 기능을 쓰지만 이 기능들이 개인정보를 모으지는 않아요.',
    action: '한 번의 수행을 마쳤는지',
  },
  bokbulbok: {
    purpose: '이름 뽑기, 사다리 같은 복불복 게임을 하고, 저장한 이름 목록을 다시 불러와요.',
    stored: ['사용자가 입력한 이름 그룹, 참가자 이름, 메뉴 후보'],
    note: '참가자 이름은 사용자가 직접 적은 글자 그대로 이 기기에만 저장돼요. 다른 사람의 이름을 적었더라도 외부로 보내지 않아요.',
    action: '복불복 한 판을 끝냈는지',
  },
  scoreboard: {
    purpose: '탁구, 배드민턴 같은 경기의 점수를 기록하고 지난 경기 결과를 보여 줘요.',
    stored: ['진행 중인 경기의 점수와 사용자가 적은 두 팀(선수) 이름', '지난 경기 기록(최근 30건: 팀 이름, 세트 점수, 승자, 시각)'],
    device: '화면 켜짐 유지와 화면 방향 고정 기능을 쓰지만 이 기능들이 개인정보를 모으지는 않아요.',
    note: '팀(선수) 이름은 사용자가 직접 적은 글자 그대로 이 기기에만 저장돼요.',
    action: '경기를 끝냈는지',
  },
  carloan: {
    purpose: '자동차 할부 월 납입액을 계산해요.',
    stored: ['마지막으로 입력한 계산 값(차량 가격, 선수금 또는 선수금 비율, 할부 개월 수, 금리)'],
    action: '계산을 실행했는지',
  },
  salarycalc: {
    purpose: '월급과 세금 같은 직장인 돈 계산을 해 줘요.',
    stored: null,
    action: '어떤 계산 기능을 썼는지',
  },
};

function sectionsFor(app) {
  const d = DETAIL[app.slug];
  const storedItems = d.stored
    ? [`${d.stored.join(', ')}: 이 기기(localStorage)에만 저장해요. 회사 서버가 없어서 어디로도 보내지 않아요.`]
    : ['계산에 입력한 값은 저장하지 않아요. 화면에서 계산하는 동안만 쓰이고 앱을 닫으면 사라져요. 회사 서버도 없어서 어디로도 보내지 않아요.'];
  if (d.note) storedItems.push(d.note);
  storedItems.push('화면 모드(밝게·어둡게·기기 설정 따라가기) 선택: 이 기기에만 저장해요.');
  if (d.device) storedItems.push(d.device);

  return [
    {
      title: '1. 개인정보의 처리 목적',
      items: [
        d.purpose,
        '무료로 쓸 수 있도록 광고를 보여 줘요.',
        '앱을 얼마나 쓰는지 통계를 내서 앱을 고치는 데 써요. 이 통계는 광고 동의 절차에서 광고 요청이 허용된 경우에만 보내요.',
        '위 목적 밖으로는 쓰지 않아요.',
      ],
    },
    {
      title: '2. 처리하는 개인정보 항목과 저장 위치',
      items: [
        ...storedItems,
        '광고 ID, 기기 정보, 광고 노출 정보: 광고(Google AdMob)를 위해 Google LLC가 수집해요. 앱에 입력한 내용은 보내지 않아요.',
        `이용 통계(Google Firebase Analytics): 앱 열기, 앱 사용 횟수, 핵심 기능 사용 여부(${d.action})를 보내요. 이름이나 입력한 내용은 담지 않아요. 앱 인스턴스 ID 같은 기기 식별 정보는 Google이 함께 수집해요. 광고 동의(UMP) 절차에서 광고 요청이 허용된 뒤에만 켜져요. 허용되지 않거나 동의 정보를 받지 못하면 보내지 않고, 그때까지 모아 둔 이벤트는 버려요.`,
        '광고 동의(UMP): 유럽 경제 지역 등 동의가 필요한 곳에서는 앱을 열 때 Google의 동의 창이 떠요. 동의 상태는 Google의 광고 SDK가 관리해요.',
        '앱이 쓰는 권한은 인터넷 연결이에요. 광고를 받아 오려고 필요해요. 로그인이나 회원 가입은 없고, 이 앱에는 결제 기능도 없어요.',
      ],
    },
    {
      title: '3. 개인정보의 보유 및 이용 기간',
      items: [
        d.stored
          ? '이 기기에 저장된 기록은 사용자가 지우거나 앱을 삭제할 때까지 보관해요. 정해진 기간이 지나면 자동으로 지우는 기능은 없어요.'
          : '입력값을 저장하지 않으므로 보관하는 기록이 없어요.',
        '광고 정보와 이용 통계는 Google의 정책에 따라 Google이 보관해요.',
      ],
    },
    {
      title: '4. 개인정보의 파기 절차 및 방법',
      items: [
        d.stored
          ? '앱을 삭제하면 기기에 저장된 기록이 함께 지워져요. 휴대폰 설정 > 앱 > 이 앱 > 저장공간에서 데이터를 지워도 돼요. 별도로 모아 두는 사본은 없어요.'
          : '저장된 입력값이 없어서 따로 파기할 것이 없어요. 화면 모드 선택은 앱을 삭제하면 함께 지워져요.',
        'Google이 가진 정보는 아래 6번에 적은 방법으로 직접 확인하고 지울 수 있어요.',
      ],
    },
    {
      title: '5. 개인정보의 제3자 제공 및 처리 위탁',
      items: [
        '회사는 사용자의 기록을 제3자에게 제공하거나 처리를 맡기지 않아요. 기록이 회사에 오지 않기 때문이에요.',
        '광고와 이용 통계는 Google LLC(미국)의 Google AdMob, Google Firebase Analytics를 이용해요. 광고 ID와 기기 정보, 광고 노출 정보, 이용 통계가 Google LLC로 전송돼요.',
        '이용 목적은 광고 게재와 이용 통계이고, 보유·이용 기간은 Google LLC의 정책을 따라요.',
      ],
    },
    {
      title: '6. 정보주체의 권리와 행사 방법',
      items: [
        '사용자는 언제든 이 기기에 저장된 자기 기록을 앱에서 보고 지울 수 있어요. 앱을 삭제해도 모두 지워져요.',
        '광고 개인 설정은 휴대폰 설정 > Google > 광고에서 바꾸거나 광고 ID를 지울 수 있어요.',
        '동의가 필요한 지역에서는 앱의 개인정보 옵션에서 광고 동의를 다시 바꿀 수 있어요. 바꾼 내용은 다음에 앱을 열 때 반영돼요.',
        'Google이 가진 정보는 휴대폰 설정 > Google, 또는 Google 계정에서 확인하고 지울 수 있어요.',
        '그 밖의 요청은 아래 개인정보 보호책임자에게 보내 주세요.',
      ],
    },
    { title: '7. 개인정보 보호책임자', html: contactHtml() },
    {
      title: '8. 처리방침의 변경',
      items: ['이 방침이 바뀌면 바뀐 내용을 시행일과 함께 이 페이지에 게시해요.'],
    },
  ];
}

for (const app of APPS.filter((a) => a.slug !== 'danamtok')) {
  const intro = `${CONTACT.company}(이하 "회사")는 ${app.name}을(를) 제공하면서 개인정보 보호법 제30조에 따라 아래와 같이 개인정보 처리방침을 정해 공개해요.`;
  const body = `<p>${esc(intro)}</p>
${sectionsHtml(sectionsFor(app))}
<p class="back"><a href="../">다른 앱 방침 보기</a></p>`;
  write(
    `${app.slug}/index.html`,
    page({ title: `${app.name} 개인정보처리방침`, heading: `${app.name} 개인정보처리방침`, sub: effectiveSub(EFFECTIVE_DATE), body, cssPath: '../style.css' }),
  );
}
