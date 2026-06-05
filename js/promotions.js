/**캐시 삭제   https://purge.jsdelivr.net/gh/wiawisjin/wiawis-assets/js/promotions.js


 * ============================================
 * WIAWIS 프로모션 관리 스크립트
 * ============================================
 * 
 * [프로모션 페이지 사용법]
 * div#promo-page 삽입 후 이 스크립트 호출
 * → 히어로 + 카테고리 아코디언 + 전체 프로모션 렌더링
 * 
 * [모델 페이지 사용법]
 * div#promo-voucher-xp2, div#promo-installment 등 삽입 후 이 스크립트 호출
 * → 선택한 프로모션만 렌더링
 * 
 * [endDate 설정]
 * - "YYYY-MM-DD" 형식 (예: "2024-12-31")
 * - 해당 날짜 23:59:59 지나면 자동으로 안보임
 * - null = 상시 노출
 * 
 * [startDate 설정]
 * - "YYYY-MM-DD" 형식 (예: "2026-06-15")
 * - 해당 날짜 전까지는 자동으로 안보임 (미공개 상태)
 * - "2099-12-31" = 사실상 영구 미공개
 * 
 * [이미지]
 * - 이미지 경로가 없거나 로드 실패 시 자동으로 placeholder 표시
 * 
 * [링크]
 * <!-- 페이지 내 이동을 위해서는 어드민에서 <p id="제품명"></p>본제품명 이 카테고리 안에 들어가야 정상 작동함 -->
 * <a href="https://wiawis.com/bikes/kr/2/1/category.do#WAWS_2" class="wiawis-promo-model-btn">WAWS 2</a>
 * 
 * 
 * [문단]
 * <ul calss="wiawis-promo-list"></ul>안에 감싸져있어야함
 * 색상 지정을 위해서는 <span class="text-red"> 으로 감싸져있어야함
 * 
 * ============================================
 */


/* ============================================
 * 개별 프로모션 데이터
 * ============================================ */
const WIAWIS_PROMOS = {


  /* ==========================================
   * SUMMER PERFORMANCE FESTA - 27.5 MTB
   * 사용: <div id="promo-summer-mtb"></div>
   * ========================================== */
  "summer-mtb": {
    startDate: "2025-12-31",  // 미공개 상태
    endDate: "2026-07-30",
    category: "summer",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202606156193535UCcKKCoUIi.jpg" alt="27.5 MTB 라인업" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">27.5인치 MTB 라인업 특별 할인</span>
          <span class="wiawis-promo-desc">여름 시즌 한정, 짜릿한 오프로드 모험을 위한 특별 할인!</span>
          <span class="wiawis-promo-period">기간: 6월 1일 ~ 7월 30일</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li><b>헥시온-G</b> : 경량 레이싱에 최적화된 고성능 MTB</li>
            <li><b>볼티오 나노</b> : 민첩한 조작감과 뛰어난 반응성</li>
            <li><b>볼티오</b> : 안정적인 주행감과 강력한 내구성</li>
            <li><b>티에라</b> : 편안한 지오메트리로 장거리 라이딩에 적합</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>최대 <b class="text-red">179만원 할인!</b></li>
          </ul>

          <span class="wiawis-promo-section">27.5인치 MTB의 장점</span>
          <ul class="wiawis-promo-list">
            <li><b>최적의 컨트롤과 민첩성</b> : 27.5인치 휠은 다양한 지형에서 뛰어난 조향성과 반응성을 제공하여 다이내믹한 라이딩을 가능하게 합니다.</li>
            <li><b>위아위스 카본 기술</b> : 위아위스만의 독자적인 카본 기술이 적용되어 뛰어난 내구성과 퍼포먼스를 자랑하며, 거친 환경에서도 라이더에게 안정감을 선사합니다.</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>재고 한정으로 조기 종료될 수 있습니다.</li>
              <li>자세한 사항은 가까운 대리점에 문의 바랍니다.</li>
            </ul>
          </div>

          <span class="wiawis-promo-section">대상 모델 보러가기</span>
          <div>
            <a href="https://wiawis.com/bikes/kr/3/165/category.do" class="wiawis-promo-model-btn" target="_blank" rel="noopener noreferrer">대상모델 보러가기</a>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * SUMMER PERFORMANCE FESTA - 로드
   * 사용: <div id="promo-summer-road"></div>
   * ========================================== */
  "summer-road": {
    startDate: "2025-12-31",  // 미공개 상태
    endDate: "2026-07-30",
    category: "summer",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202606156191950FTn88eQB4v.png" alt="WAWS 스페셜 에디션" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">WAWS-PRO 2 & WAWS 2 스페셜 에디션</span>
          <span class="wiawis-promo-desc">SRAM FORCE & RIVAL & ARC1100, 최고의 조합으로 완성된 궁극의 로드 사이클!</span>
          <span class="wiawis-promo-period">기간 한정</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li><b>WAWS-PRO 2</b> : SRAM FORCE & DT SWISS ARC 1100</li>
            <li><b>WAWS 2</b> : SRAM RIVAL & DT SWISS ARC 1100</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>최대 <b class="text-red">200만원 할인!</b></li>
          </ul>

          <span class="wiawis-promo-section">스페셜 에디션 특징</span>
          <ul class="wiawis-promo-list">
            <li><b>최고의 기술 집약</b> : 위아위스 그래핀 나노카본(WINACT-G2) 프레임의 경량성, 강성, 진동흡수력과 스램 구동계의 정교함, ARC1100 휠셋의 에어로 성능이 완벽한 조화를 이룹니다.</li>
            <li><b>압도적인 가성비</b> : 최상급 부품 구성에도 불구하고, 오직 이번 프로모션에서만 누릴 수 있는 특별한 가격으로 최고의 로드 사이클을 소유할 기회입니다.</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>재고 한정으로 조기 종료될 수 있습니다.</li>
              <li>자세한 사항은 가까운 대리점에 문의 바랍니다.</li>
            </ul>
          </div>
          <span class="wiawis-promo-section">대상 모델 보러가기</span>
          <div>
            <a href="https://wiawis.com/bikes/kr/3/200/category.do?dataId=263" class="wiawis-promo-model-btn" target="_blank" rel="noopener noreferrer">대상모델 보러가기</a>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * PERFORMANCE CHALLENGE
   * 사용: <div id="promo-challenge"></div>
   * ========================================== */
  "challenge": {
    startDate: "2025-06-01",
    endDate: "2026-08-30",
    category: "challenge",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202606152192305hKhup34cQY.png" alt="PERFORMANCE CHALLENGE" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">PERFORMANCE CHALLENGE</span>
          <span class="wiawis-promo-desc">위아위스로 PR 갱신 인증하고, 선물 받아가자!</span>
          <span class="wiawis-promo-period">기간: 6월 1일 ~ 8월 30일 (2개월간)</span>

          <span class="wiawis-promo-section">참여 대상</span>
          <ul class="wiawis-promo-list">
            <li>현행 WIAWIS 제품 보유자</li>
            <li>타 브랜드 경험자 한정</li>
            <li>위아위스 내 업그레이드도 OK</li>
            <li>시승차도 참여 OK</li>
          </ul>

          <span class="wiawis-promo-section">챌린지 조건</span>
          <ul class="wiawis-promo-list">
            <li>스트라바(STRAVA)에서 본인의 PR(개인 기록)을 갱신하세요</li>
            <li>구간 무관, 본인 기록 갱신이면 OK</li>
          </ul>

          <span class="wiawis-promo-section">참여 절차</span>
          <ul class="wiawis-promo-list">
            <li><b>STEP 1.</b> 스트라바에서 PR 갱신</li>
            <li><b>STEP 2.</b> PR 인증 스크린샷이 포함된 온라인 후기 작성</li>
            <li><b>STEP 3.</b> 이벤트 페이지에서 후기 URL 접수</li>
            <li><b>STEP 4.</b> 이벤트 종료 후 경품 발송</li>
          </ul>

          <span class="wiawis-promo-section">챌린지 경품</span>
          <ul class="wiawis-promo-list">
            <li><b class="text-red">최우수 후기 (1명)</b> : CARRMATO CXT-R50 WAVY 휠셋</li>
            <li><b>우수 후기 (10명)</b> : WIAWIS 셋트 (투어링백팩·팔토시·양말·물통)</li>
            <li><b>PR 인증 전원</b> : WIAWIS 450CC 물통</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>후기에는 스트라바 PR 갱신 내역 스크린샷이 반드시 포함되어야 합니다.</li>
              <li>자전거 기변 후 새롭게 갱신한 PR 기록만 인정됩니다.</li>
              <li>작성해주신 후기는 검토 후 승인된 건에 한해 이벤트 페이지에 게시됩니다.</li>
              <li>우수 후기 선정 결과는 이벤트 종료 후 개별 안내드릴 예정입니다.</li>
              <li>허위 작성 또는 타인의 후기를 도용한 경우 당첨 취소 및 경품 회수가 진행될 수 있습니다.</li>
              <li>최우수 후기 당첨 시 경품 수령에 따른 제세공과금이 발생할 수 있습니다.</li>
            </ul>
          </div>

          <span class="wiawis-promo-section">참여하기</span>
          <div>
            <a href="https://pr-challenge.wiawisjin-31e.workers.dev/" class="wiawis-promo-model-btn" target="_blank">챌린지 참여하기</a>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * 무이자 할부 (전 모델)
   * 사용: <div id="promo-card"></div>
   * ========================================== */
  "card": {
    endDate: null,
    category: "all",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/2026123651639437fasRyYNAV.png" alt="무이자 할부" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">6 / 12 / 24개월 무이자 할부</span>
          <span class="wiawis-promo-desc">전국 위아위스 대리점에서 위아위스 자전거 구매 시 무이자 할부를 제공합니다.</span>
          <span class="wiawis-promo-period">상시 진행</span>

          <span class="wiawis-promo-section">대상</span>
          <ul class="wiawis-promo-list">
            <li>위아위스 자전거를 구매하는 고객</li>
          </ul>

          <span class="wiawis-promo-section">제휴 카드</span>
          <ul class="wiawis-promo-list">
            <li>6 / 12개월 무이자 할부 : KB국민카드, 삼성카드, 현대카드</li>
            <li>6 / 12 / 24개월 무이자 할부 : 하나카드</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>24개월 무이자 할부는 하나카드만 진행됩니다.</li>
              <li>본 행사는 제휴사 사정에 의해 사전 고지 없이 변경, 조기 종료될 수 있습니다.</li>
              <li>자세한 사항은 위아위스 대리점에 문의 바랍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * XX1 프로모션
   * 사용: <div id="promo-xx1"></div>
   * ========================================== */
  "xx1": {
    endDate: null,
    category: "xx1",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202510282174533tvcJSMRvQH.png" alt="콕핏 업그레이드" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">2026년 붉은 말 프로모션</span>
          <span class="wiawis-promo-desc">붉은 말의 새해의 시작! 최대 30% 할인으로 완벽한 시작!</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <div>
          <ul class="wiawis-promo-list">
          <li><b>FORCE eTap AXS</b></li>
          <li>WAWS-PRO 2 F</li>
          <li>RADICAL-PRO F</li>
          <li>RADICAL-M F</li>
          <li>RADICAL-M F CARRMATO ENT CARBON</li>
          <BR>
          <li><b>RIVAL eTap AXS</b></li>
          <li>WAWS 2 V</li>
          <li>WAWS 2 V CARRMATO ENT</li>
          <BR>
          <li><b>XX1 AXS</b></li>
          <li>HEXION-PRO R AXS</li>
          <li>ELNATH-PRO R AXS</li>
          <li>ELNATH R AXS</li>
          <li>HEXION-G R AXS</li>
          <BR>
          <li><b>XX1</b></li>
          <li>HEXION-PRO R</li>
          <li>ELNATH-PRO R</li>
          <li>ELNATH R</li>
          </ul>
          </div>
          <span class="wiawis-promo-section">대상 모델 보러가기</span>
          <div>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#SRAM_FORCE_D2" class="wiawis-promo-model-btn">FORCE eTap AXS</a>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#SRAM_RIVAL_D1" class="wiawis-promo-model-btn">RIVAL eTap AXS</a>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1_AXS" class="wiawis-promo-model-btn">XX1 AXS</a>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1" class="wiawis-promo-model-btn">XX1</a>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * 롯데카드 (링크형)
   * 사용: <div id="promo-lotte"></div>
   * ========================================== */
  "lotte": {
    startDate: "2025-01-01",
    endDate: "2026-06-30",
    category: "all",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202612365122029REeyhGBeN5.jpg" alt="무이자 할부" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">12 / 24개월 무이자 할부 & 10만원 캐시백</span>
          <span class="wiawis-promo-desc">무이자 할부로 결제하고 10만원 캐시백 받아가자</span>
          <span class="wiawis-promo-period">~ 6월 30일</span>
          <br>

          <span class="wiawis-promo-section">상세 내용 보러가기</span>
          <div>
          <ul class="wiawis-promo-list">
          <li>아래의 링크를 눌러 자세한 내용을 확인하세요</li>
          <li>* 대상 내용을 확인바랍니다.(신규 혹은 6개월 이상 롯데카드 이력이 없을 경우만 해당)</li>
          <li>* 대상 카드를 반드시 발급 받아야합니다.</li>
          </ul>
          <br>
          <a href="https://wiawis.com/bikes/kr/view.do?idx=42" class="wiawis-promo-model-btn">상세내용 보기</a>
          </div>
        </div>
      </div>
    `
  }


};


/* ============================================
 * 카테고리 그룹 정의
 * ============================================ */
const WIAWIS_CATEGORIES = {

  /* ------ SUMMER PERFORMANCE FESTA ------ */
  "summer": {
    title: "SUMMER PERFORMANCE FESTA",
    sub: "여름, 최고의 퍼포먼스를 경험하라!",
    promos: ["summer-mtb", "summer-road", "challenge"]
  },

  /* ------ PERFORMANCE CHALLENGE ------ */
  "challenge": {
    title: "PERFORMANCE CHALLENGE",
    sub: "위아위스로 PR 갱신 인증하고, 선물 받아가자!",
    promos: ["challenge"]
  },

  /* ------ SRAM / XX1 할인 ------ */
  "xx1": {
    title: "WELCOME 2026!",
    sub: "2026년을 맞아 드리는 특별한 혜택",
    promos: ["xx1"]
  },

  /* ------ 전 모델 대상 ------ */
  "all": {
    title: "전 모델 대상",
    sub: "위아위스 전 모델 구매 고객 대상",
    promos: ["card", "lotte"]
  }

};


/* ============================================
 * 히어로 섹션
 * ============================================ */
const WIAWIS_HERO = `
  <div class="wiawis-promo-hero">
    <h1>WIAWIS 프로모션</h1>
    <p>위아위스가 제안하는 다양한 프로모션 혜택을 확인해보세요.</p>
  </div>
`;


/* ============================================
 * 스타일 (좌우 이미지 버전 + 카테고리 아코디언)
 * ============================================ */
const WIAWIS_PROMO_STYLES = `
<style>
/* 개별 호출 시 좌우 번갈아 */
.wiawis-promo-group > div:nth-child(even) .wiawis-promo-item {
  direction: rtl !important;
}
.wiawis-promo-group > div:nth-child(even) .wiawis-promo-item > * {
  direction: ltr !important;
}

/* 상위 CSS 리셋 - 브라우저 호환성 개선 */
.wiawis-promo-wrap {
  display: block !important;
  box-sizing: border-box !important;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  background: #fff;
  color: #0a0a0a;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

.wiawis-promo-item {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  box-sizing: border-box !important;
  border-bottom: 1px solid #e5e5e5;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  line-height: 1.7;
  color: #0a0a0a;
}

.wiawis-promo-item:last-child {
  border-bottom: none;
}

/* 취소선 스타일 복원 */
.wiawis-promo-item strike,
.wiawis-promo-item s,
.wiawis-promo-item del {
  text-decoration: line-through !important;
}

/* 히어로 */
.wiawis-promo-hero {
  display: block !important;
  background: #0a0a0a;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
}

.wiawis-promo-hero h1 {
  display: block !important;
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.wiawis-promo-hero p {
  display: block !important;
  font-size: 17px;
  color: #a3a3a3;
  max-width: 500px;
  margin: 0 auto;
}

/* 카테고리 아코디언 */
.wiawis-promo-category {
  display: block !important;
  border-bottom: 1px solid #e5e5e5;
}

.wiawis-promo-category:last-child {
  border-bottom: none;
}

.wiawis-promo-category summary {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  cursor: pointer;
  list-style: none;
  background: #222;
  color: #fff;
}

.wiawis-promo-category summary::-webkit-details-marker {
  display: none;
}

.wiawis-promo-category-title {
  display: block !important;
  font-size: 22px;
  font-weight: 700;
}

.wiawis-promo-category-sub {
  display: block !important;
  font-size: 14px;
  color: #a3a3a3;
  margin-top: 4px;
}

.wiawis-promo-category-arrow {
  display: block !important;
  font-size: 14px;
  color: #a3a3a3;
  transition: transform 0.3s;
}

.wiawis-promo-category[open] .wiawis-promo-category-arrow {
  transform: rotate(180deg);
}

.wiawis-promo-category-body {
  display: block !important;
  background: #fff;
}

/* 짝수번째 좌우 반전 */
.wiawis-promo-category-body .wiawis-promo-item:nth-child(even) {
  direction: rtl;
}

.wiawis-promo-category-body .wiawis-promo-item:nth-child(even) > * {
  direction: ltr;
}

.wiawis-promo-image {
  display: block !important;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;
}

.wiawis-promo-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Placeholder (테두리 프레임) */
.wiawis-promo-placeholder {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  min-height: 400px;
  background: #0a0a0a;
  position: relative;
}

.wiawis-promo-placeholder::before {
  content: '';
  position: absolute;
  top: 24px;
  left: 24px;
  right: 24px;
  bottom: 24px;
  border: 1px solid #222;
}

.wiawis-promo-placeholder img {
  position: static !important;
  height: 38px;
  width: auto;
  filter: brightness(0) invert(1);
  object-fit: contain;
}

.wiawis-promo-placeholder span {
  font-size: 13px;
  color: #555;
  letter-spacing: 4px;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
}

.wiawis-promo-content {
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  padding: 40px 48px;
  background: #fff;
}

.wiawis-promo-title {
  display: block !important;
  font-size: 28px;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 10px;
}

.wiawis-promo-desc {
  display: block !important;
  font-size: 16px;
  color: #525252;
  margin-bottom: 20px;
}

.wiawis-promo-period {
  display: inline-block !important;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 8px 14px;
  background: #0a0a0a;
  margin-bottom: 24px;
  align-self: flex-start;
}

.wiawis-promo-section {
  display: block !important;
  font-size: 14px;
  font-weight: 600;
  color: #0a0a0a;
  margin-top: 20px;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e5e5;
}

.wiawis-promo-item .text-red {
  color: #e53935 !important;
}

.wiawis-promo-list {
  display: block !important;
  list-style: none;
  margin: 0;
  padding: 0;
}

.wiawis-promo-list li {
  display: block !important;
  font-size: 15px;
  color: #262626;
  padding: 5px 0 5px 14px;
  position: relative;
}

.wiawis-promo-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  font-weight: 400;
}

.wiawis-promo-notice {
  display: block !important;
  margin-top: 24px;
  padding: 16px;
  background: #f5f5f5;
}

.wiawis-promo-notice-title {
  display: block !important;
  font-size: 13px;
  font-weight: 600;
  color: #999;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wiawis-promo-notice li {
  font-size: 13px;
  color: #737373;
  padding: 3px 0 3px 14px;
}

/* b, strong 태그 스타일 */
.wiawis-promo-item b,
.wiawis-promo-item strong {
  font-weight: 700 !important;
}

/* 모델 버튼 링크 */
.wiawis-promo-model-btn {
  display: inline-block !important;
  font-size: 13px;
  color: #0a0a0a;
  padding: 8px 14px;
  background: #fff;
  border: 1px solid #0a0a0a;
  text-decoration: none;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.wiawis-promo-model-btn:hover {
  background: #0a0a0a;
  color: #fff;
}

/* 링크형 */
.wiawis-promo-link {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  min-height: 300px;
  text-decoration: none;
  color: #0a0a0a;
  cursor: pointer;
  border-bottom: 1px solid #e5e5e5;
  transition: opacity 0.2s;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
}

.wiawis-promo-link:last-child {
  border-bottom: none;
}

.wiawis-promo-link:hover {
  opacity: 0.85;
}

.wiawis-promo-link .wiawis-promo-content {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.wiawis-promo-link .wiawis-promo-title {
  margin-bottom: 6px;
}

.wiawis-promo-link .wiawis-promo-desc {
  margin-bottom: 0;
}

.wiawis-promo-arrow {
  display: block !important;
  font-size: 32px;
  color: #ccc;
  margin-left: 20px;
}

.wiawis-promo-link .wiawis-promo-placeholder {
  min-height: 300px;
}

/* 반응형 */
@media (max-width: 900px) {
  .wiawis-promo-item,
  .wiawis-promo-link {
    grid-template-columns: 1fr !important;
  }

  .wiawis-promo-category-body .wiawis-promo-item:nth-child(even) {
    direction: ltr;
  }

  .wiawis-promo-image {
    min-height: 250px;
  }

  .wiawis-promo-placeholder {
    min-height: 250px;
  }

  .wiawis-promo-content {
    padding: 32px 24px;
  }

  .wiawis-promo-link .wiawis-promo-image {
    min-height: 200px;
  }

  .wiawis-promo-link .wiawis-promo-placeholder {
    min-height: 200px;
  }

  .wiawis-promo-category summary {
    padding: 20px 24px;
  }
}

@media (max-width: 600px) {
  .wiawis-promo-hero {
    padding: 60px 20px;
  }

  .wiawis-promo-hero h1 {
    font-size: 32px;
  }

  .wiawis-promo-title {
    font-size: 22px;
  }

  .wiawis-promo-content {
    padding: 28px 20px;
  }

  .wiawis-promo-image {
    min-height: 200px;
  }

  .wiawis-promo-placeholder {
    min-height: 200px;
  }

  .wiawis-promo-placeholder::before {
    top: 16px;
    left: 16px;
    right: 16px;
    bottom: 16px;
  }

  .wiawis-promo-category summary {
    padding: 20px;
  }

  .wiawis-promo-category-title {
    font-size: 18px;
  }
}
</style>
`;


/* ============================================
 * 날짜 체크 함수
 * ============================================ */
function isPromoActive(startDate, endDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (startDate) {
    const start = new Date(startDate + "T00:00:00");
    if (today < start) return false;
  }
  
  if (endDate) {
    const end = new Date(endDate + "T23:59:59");
    if (today > end) return false;
  }
  
  return true;
}


/* ============================================
 * 프로모션 페이지 렌더링 (전체)
 * ============================================ */
function renderPromoPage() {
  const pageEl = document.getElementById("promo-page");
  if (!pageEl) return;

  let html = '<div class="wiawis-promo-wrap">';
  html += WIAWIS_HERO;

  Object.keys(WIAWIS_CATEGORIES).forEach(function(catKey) {
    const cat = WIAWIS_CATEGORIES[catKey];
    
    const activePromos = cat.promos.filter(function(promoKey) {
      const promo = WIAWIS_PROMOS[promoKey];
      return promo && isPromoActive(promo.startDate, promo.endDate);
    });

    if (activePromos.length > 0) {
      html += `
        <details class="wiawis-promo-category" open>
          <summary>
            <div>
              <span class="wiawis-promo-category-title">${cat.title}</span>
              <span class="wiawis-promo-category-sub">${cat.sub}</span>
            </div>
            <span class="wiawis-promo-category-arrow">▼</span>
          </summary>
          <div class="wiawis-promo-category-body">
      `;

      activePromos.forEach(function(promoKey) {
        html += WIAWIS_PROMOS[promoKey].html;
      });

      html += `
          </div>
        </details>
      `;
    }
  });

  html += '</div>';
  pageEl.innerHTML = html;
}


/* ============================================
 * 개별 프로모션 렌더링 (모델 페이지용)
 * - 등록된 프로모션 렌더링
 * - 등록되지 않은 promo-xxx div 자동 제거
 * ============================================ */
function renderIndividualPromos() {
  // 등록된 프로모션 처리
  Object.keys(WIAWIS_PROMOS).forEach(function(key) {
    const el = document.getElementById("promo-" + key);
    if (el) {
      const promo = WIAWIS_PROMOS[key];
      if (isPromoActive(promo.startDate, promo.endDate)) {
        el.innerHTML = promo.html;
      } else {
        el.remove();
      }
    }
  });

  // 등록되지 않은 promo-xxx div 자동 제거
  document.querySelectorAll('[id^="promo-"]').forEach(function(el) {
    const key = el.id.replace('promo-', '');
    // promo-page는 제외 (전체 페이지용)
    if (key !== 'page' && !WIAWIS_PROMOS[key]) {
      el.remove();
    }
  });
}


/* ============================================
 * 메인 렌더링 함수
 * ============================================ */
function renderPromos() {
  if (!document.getElementById('wiawis-promo-styles')) {
    const styleDiv = document.createElement('div');
    styleDiv.id = 'wiawis-promo-styles';
    styleDiv.innerHTML = WIAWIS_PROMO_STYLES;
    document.body.appendChild(styleDiv);
  }

  renderPromoPage();
  renderIndividualPromos();
}


/* ============================================
 * 실행
 * ============================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPromos);
} else {
  renderPromos();
}
