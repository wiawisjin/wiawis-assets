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
 * [이미지]
 * - 이미지 경로가 없거나 로드 실패 시 자동으로 placeholder 표시
 * 
 * [링크]
 * <!-- 페이지 내 이동을 위해서는 어드민에서 <p id="제품명"></p>본제품명 이 카테고리 안에 들어가야 정상 작동함 --!>
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
   * 바우처 100만원 (RADICAL-PRO XP2)
   * 사용: <div id="promo-voucher-xp2"></div>
   * ========================================== */
  "voucher-xp2": {
    endDate: "2026-01-30",  // 종료일
    category: "radical",    // 카테고리 그룹
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/2025102821756320aWj7aGlcv.png" alt="바우처 프로모션" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">바우처 증정 프로모션</span>
          <span class="wiawis-promo-desc"><b>100만원 / 50만원 바우처</b>로 내가 필요한 것만, 완벽한 프로 구성으로!</span>
          <span class="wiawis-promo-period">기간: ~ 26년 1월 30일까지</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO XP 2 전 모델</li>
            <li>RADICAL-PRO 2 전 모델</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO XP 2 전 모델 : 100만원 바우처 제공</li>
            <li>RADICAL-PRO 2 전 모델 : 50만원 바우처 제공</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li><b>사용은 구매한 대리점에서만 가능합니다.</b></li>
              <li>사용기한은 구매일로부터 1개월입니다.</li>
              <li>본 바우처는 대리점에서 용품 및 제품구매, 정비비용 등으로 사용 가능합니다.</li>
              <li>타인에게 양도 및 재판매는 금지됩니다.</li>
              <li>본 바우처는 부분 환불 등 현금으로 환불되지 않습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },




  /* ==========================================
   * 후원 대회 참가권
   * 사용: <div id="promo-race"></div>
   * ========================================== */
  "race": {
    endDate: "2026-12-31",  // 종료일
    category: "radical",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202612365161548socb7neIY9.jpg" alt="대회 참가권" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">후원 대회 참가권 증정</span>
          <span class="wiawis-promo-desc">최대 42만원 혜택! 위아위스와 함께하는 타이틀 대회 참가권을 증정합니다.</span>
          <span class="wiawis-promo-period">기간: ~1월 30일까지</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO XP 2 전 모델</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>위아위스와 함께하는 타이틀 대회 참가권 증정!</li>
          </ul>

          <span class="wiawis-promo-section">대상 대회</span>
          <ul class="wiawis-promo-list">
            <li>그란폰도 : 고성공룡나라, 홍천, 정읍내장산, 문경새재, 섬섬여수</li>
            <li>MTB 대회 : 상주 MTB 대회</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>대회 리스트는 미정으로 변경될 수 있습니다.</li>
              <li>대회 참가권 외에 기념품 및 시상, 경품은 제외됩니다.</li>
              <li>대회 3주 전까지 구매 대리점에 접수 완료하여야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * 무이자 할부 (전 모델)
   * 사용: <div id="promo-installment"></div>
   * ========================================== */
  "card": {
    endDate: null,  // 상시 노출
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
   * ELNATH 콕핏 & 싯포스트 프로모션
   * 사용: <div id="promo-elnath"></div>
   * ========================================== */
  "elnath": {
    endDate: null,  // 상시 노출
    category: "elnath",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/editor/202612365140400Gk2yrgpxnA.jpg" alt="콕핏 업그레이드" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">ELNATH 콕핏 & 싯포스트 프로모션</span>
          <span class="wiawis-promo-desc">78만원의 카르마토 콕핏과 싯포스트로 라이딩 퍼포먼스를 한 단계 높여보세요.</span>

          <span class="wiawis-promo-section">업그레이드 혜택</span>
          <ul class="wiawis-promo-list">
          <li><b>RITCHEY COMP ALLOY -> 카르마토 카본 컴포넌트</b></li>
            <li>HB-MTB : 230,000원</li>
            <li>ST-2 : 230,000원</li>
            <li>SP-316 : 320,000원</li>
          </ul><br>
          
          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li><b>ELNATH 전 모델</b></li>
          </ul>
        </div>
      </div>
    `
  },
  
  /* ==========================================
   * radical-m wheel upgrade 프로모션
   * 사용: <div id="promo-xx1"></div>
   * ========================================== */
  "radicalmwheel": {
    endDate: null,  // 상시 노출
    category: "radical-m",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="https://wiawis.com/upload/detail/202508237175727cZZKNzaEls.png" alt="콕핏 업그레이드" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="wiawis-promo-placeholder">
            <img src="https://wiawis.com/upload/editor/202512344152326xiqlB4h2ov.png" alt="WIAWIS">
            <span>PROMOTION</span>
          </div>
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">카본 휠셋 업그레이드 프로모션</span>
          <span class="wiawis-promo-desc">붉은 말의 새해의 시작! 카르마토 카본 휠셋으로 완벽한 스타트!</span>

          <span class="wiawis-promo-section">업그레이드 혜택</span>
          <ul class="wiawis-promo-list">
            <li>휠셋 업그레이드 시 <span class="text-red"><b>50% 금액으로!</b></span></li>
            <li>FULCRUM RACING 800 휠셋을 CARRMATO CXT-R50 ENT 혹은 CXT-R40 ENT로 업그레이드 시, <span class="text-red"><b>35만원에 업그레이드 적용</b></span></li>
          </ul>
          <span class="wiawis-promo-section">대상 모델</span>
          <div>
          <ul class="wiawis-promo-list">
          <b><span class="text-red">FULCRUM RACING 800 휠셋을 사용하는 모델</span></b>
          <BR>
          <li><b>WAWS 2</b></li>
          <li>RIVAL AXS E1</li>
          <li>RIVAL AXS D1</li>
          <li>105 Di2</li>
          <BR>
          <li><b>RADICAL-M</b></li>
          <li>RIVAL AXS E1</li>
          <li>RIVAL AXS D1</li>
          <li>105 Di2</li>
          <li>105</li>
          </ul>
          </div>
          <span class="wiawis-promo-section">대상모델 바로가기</span>
          <div>
          <!-- 페이지 내 이동을 위해서는 <p id="제품명"></p>본제품명 이 카테고리 안에 들어가야 정상 작동함 --!>
          <a href="https://wiawis.com/bikes/kr/2/1/category.do#WAWS_2" class="wiawis-promo-model-btn">WAWS 2</a>
          <a href="https://wiawis.com/bikes/kr/3/11/category.do?dataId=230" class="wiawis-promo-model-btn">RADICAL-M</a>
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
    endDate: null,  // 상시 노출
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
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1_AXS" class="wiawis-promo-model-btn">FORCE eTap AXS</a>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1" class="wiawis-promo-model-btn">RIVAL eTap AXS</a>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * Falling for Ride 캠페인
   * 사용: <div id="promo-falling"></div>
   * ========================================== */
  "falling": {
    endDate: "2026-03-31",  // 종료일
    category: "campaign",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/upgrade.jpg" alt="콕핏 업그레이드" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
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
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1_AXS" class="wiawis-promo-model-btn">FORCE eTap AXS</a>
          <a href="https://wiawis.com/bikes/kr/2/5/category.do#XX1" class="wiawis-promo-model-btn">RIVAL eTap AXS</a>
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
    startDate: "2025-01-01", //시작일
    endDate: "2026-03-31",  // 종료일
    category: "lotte",
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
          <span class="wiawis-promo-period">~ 3월 31일</span>
          <br>
          

          <span class="wiawis-promo-section">상세 내용 보러가기</span>
          <div>
          <!-- 페이지 내 이동을 위해서는 <p id="제품명"></p>본제품명 이 카테고리 안에 들어가야 정상 작동함 --!>
          <ul class="wiawis-promo-list">
          <li>아래의 링크를 눌러 자세한 내용을 확인하세요</li></ul>
          <br><br>
          <a href="https://wiawis.com/bikes/kr/view.do?idx=42" class="wiawis-promo-model-btn">상세내용 보기</a>
          </div>
        </div>
      </div>
    `
  }


};


/* ============================================
 * 카테고리 그룹 정의
 * 카테고리 채로 변경시 순서 변경됨
 * ============================================ */
const WIAWIS_CATEGORIES = {

  /* ------ RADICAL 시리즈 ------ */
  "radical-pro-xp": {
    title: "RADICAL-PRO XP2 / PRO2 프로모션",
    sub: "래디칼 프로 시리즈 구매 고객 대상",
    promos: ["voucher-xp2", "race"]  // 포함할 프로모션 ID
  },

  /* ------ 엘나스 ------ */
  "elnath": {
    title: "ELNATH 콕핏 & 싯포스트 프로모션",
    sub: "카본 핸들바, 스템, 싯포스트 무상 업그레이드!",
    promos: ["elnath"]
  },

  /* ------ 전 모델 대상 ------ */
  "xx1": {
    title: "WELCOME 2026!",
    sub: "2026년을 맞아 드리는 특별한 혜택",
    promos: ["radicalmwheel", "xx1"]
  },
  
  
  /* ------ 전 모델 대상 ------ */
  "all": {
    title: "전 모델 대상",
    sub: "위아위스 전 모델 구매 고객 대상",
    promos: ["card", "lotte"]
  },



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
  direction: rtl;
}
.wiawis-promo-group > div:nth-child(even) .wiawis-promo-item > * {
  direction: ltr;
}

/* 상위 CSS 리셋 */
.wiawis-promo-wrap,
.wiawis-promo-wrap *,
.wiawis-promo-item,
.wiawis-promo-item *,
.wiawis-promo-link,
.wiawis-promo-link * {
  all: unset;
  display: revert;
  box-sizing: border-box;
}

.wiawis-promo-wrap {
  display: block;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  background: #fff;
  color: #0a0a0a;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* 히어로 */
.wiawis-promo-hero {
  display: block;
  background: #0a0a0a;
  color: #fff;
  padding: 80px 20px;
  text-align: center;
}

.wiawis-promo-hero h1 {
  display: block;
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.wiawis-promo-hero p {
  display: block;
  font-size: 17px;
  color: #a3a3a3;
  max-width: 500px;
  margin: 0 auto;
}

/* 카테고리 아코디언 */
.wiawis-promo-category {
  display: block;
  border-bottom: 1px solid #e5e5e5;
}

.wiawis-promo-category:last-child {
  border-bottom: none;
}

.wiawis-promo-category summary {
  display: flex;
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
  display: block;
  font-size: 22px;
  font-weight: 700;
}

.wiawis-promo-category-sub {
  display: block;
  font-size: 14px;
  color: #a3a3a3;
  margin-top: 4px;
}

.wiawis-promo-category-arrow {
  display: block;
  font-size: 14px;
  color: #a3a3a3;
  transition: transform 0.3s;
}

.wiawis-promo-category[open] .wiawis-promo-category-arrow {
  transform: rotate(180deg);
}

.wiawis-promo-category-body {
  display: block;
  background: #fff;
}

/* 프로모션 아이템 (좌우 배치) */
.wiawis-promo-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e5e5e5;
  font-family: 'Noto Sans KR', -apple-system, sans-serif;
  line-height: 1.7;
  color: #0a0a0a;
}

.wiawis-promo-item:last-child {
  border-bottom: none;
}

/* 짝수번째 좌우 반전 */
.wiawis-promo-category-body .wiawis-promo-item:nth-child(even) {
  direction: rtl;
}

.wiawis-promo-category-body .wiawis-promo-item:nth-child(even) > * {
  direction: ltr;
}

.wiawis-promo-image {
  display: block;
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

/* placeholder 로고 이미지 (기존 유지) */
.wiawis-promo-placeholder img {
  position: static;
  height: 38px;
  width: auto;
  filter: brightness(0) invert(1);
  object-fit: contain;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 48px;
  background: #fff;
}

.wiawis-promo-title {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 10px;
}

.wiawis-promo-desc {
  display: block;
  font-size: 16px;
  color: #525252;
  margin-bottom: 20px;
}

.wiawis-promo-period {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 8px 14px;
  background: #0a0a0a;
  margin-bottom: 24px;
  align-self: flex-start;
}

.wiawis-promo-section {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0a0a0a;
  margin-top: 20px;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e5e5;
}

.wiawis-promo-item .text-red {
  color: #e53935;
}


.wiawis-promo-list {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}

.wiawis-promo-list li {
  display: block;
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
  display: block;
  margin-top: 24px;
  padding: 16px;
  background: #f5f5f5;
}

.wiawis-promo-notice-title {
  display: block;
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
  font-weight: 700;
}

/* 모델 버튼 링크 */
.wiawis-promo-model-btn {
  display: inline-block;
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
  display: grid;
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
  display: block;
  font-size: 32px;
  color: #ccc;
  margin-left: 20px;
}

/* 링크형 placeholder */
.wiawis-promo-link .wiawis-promo-placeholder {
  min-height: 300px;
}

/* 반응형 */
@media (max-width: 900px) {
  .wiawis-promo-item,
  .wiawis-promo-link {
    grid-template-columns: 1fr;
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
 * startDate: 시작일 (없으면 바로 노출)
 * endDate: 종료일 (없으면 상시 노출)
 * ============================================ */
function isPromoActive(startDate, endDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  // 시작일 체크
  if (startDate) {
    const start = new Date(startDate + "T00:00:00");
    if (today < start) return false;  // 아직 시작 안 함
  }
  
  // 종료일 체크
  if (endDate) {
    const end = new Date(endDate + "T23:59:59");
    if (today > end) return false;  // 이미 종료
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

  // 카테고리별로 렌더링
  Object.keys(WIAWIS_CATEGORIES).forEach(function(catKey) {
    const cat = WIAWIS_CATEGORIES[catKey];
    
    // 해당 카테고리의 활성 프로모션 필터링
    const activePromos = cat.promos.filter(function(promoKey) {
      const promo = WIAWIS_PROMOS[promoKey];
      return promo && isPromoActive(promo.startDate, promo.endDate);
    });

    // 활성 프로모션이 있을 때만 카테고리 표시
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
 * ============================================ */
function renderIndividualPromos() {
  Object.keys(WIAWIS_PROMOS).forEach(function(key) {
    const el = document.getElementById("promo-" + key);
    if (el) {
      const promo = WIAWIS_PROMOS[key];
      if (isPromoActive(promo.startDate, promo.endDate)) {
        el.innerHTML = promo.html;
      } else {
        el.innerHTML = '';  // 기간 지나면 빈 값
      }
    }
  });
}


/* ============================================
 * 메인 렌더링 함수
 * ============================================ */
function renderPromos() {
  // 스타일 한 번만 삽입
  if (!document.getElementById('wiawis-promo-styles')) {
    const styleDiv = document.createElement('div');
    styleDiv.id = 'wiawis-promo-styles';
    styleDiv.innerHTML = WIAWIS_PROMO_STYLES;
    document.body.appendChild(styleDiv);
  }

  // 프로모션 페이지 렌더링
  renderPromoPage();

  // 개별 프로모션 렌더링
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
