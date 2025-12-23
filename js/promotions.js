/**
 * ============================================
 * WIAWIS 프로모션 관리 스크립트
 * ============================================
 * 
 * [프로모션 페이지 사용법]
 * <div id="promo-page"></div>
 * <script src="promotions.js"></script>
 * → 히어로 + 카테고리 아코디언 + 전체 프로모션 렌더링
 * 
 * [모델 페이지 사용법]
 * <div id="promo-voucher-xp2"></div>
 * <div id="promo-installment"></div>
 * <script src="promotions.js"></script>
 * → 선택한 프로모션만 렌더링
 * 
 * [endDate 설정]
 * - "YYYY-MM-DD" 형식 (예: "2024-12-31")
 * - 해당 날짜 23:59:59 지나면 자동으로 안보임
 * - null = 상시 노출
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
    endDate: "2024-12-31",  // 종료일
    category: "radical",    // 카테고리 그룹
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/voucher-xp2.jpg" alt="바우처 프로모션">
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">바우처 증정 프로모션</span>
          <span class="wiawis-promo-desc">100만원 바우처로 내가 필요한 것만, 완벽한 프로 구성으로!</span>
          <span class="wiawis-promo-period">기간: ~12월 31일까지</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO XP 2 전 모델</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO XP 2 전 모델 : 100만원 바우처 제공</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>사용은 구매한 대리점에서만 가능합니다.</li>
              <li>사용기한은 구매일로부터 1개월입니다.</li>
              <li>본 바우처는 용품 및 제품구매, 정비비용 등으로 사용 가능합니다.</li>
              <li>타인에게 양도 및 재판매는 금지됩니다.</li>
              <li>본 바우처는 부분 환불 등 현금으로 환불되지 않습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },


  /* ==========================================
   * 바우처 50만원 (RADICAL-PRO 2)
   * 사용: <div id="promo-voucher-pro2"></div>
   * ========================================== */
  "voucher-pro2": {
    endDate: "2024-12-31",  // 종료일
    category: "radical",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/voucher-pro2.jpg" alt="바우처 프로모션">
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">바우처 증정 프로모션</span>
          <span class="wiawis-promo-desc">50만원 바우처로 내가 필요한 것만, 완벽한 프로 구성으로!</span>
          <span class="wiawis-promo-period">기간: ~12월 31일까지</span>

          <span class="wiawis-promo-section">대상 모델</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO 2 전 모델</li>
          </ul>

          <span class="wiawis-promo-section">구매 혜택</span>
          <ul class="wiawis-promo-list">
            <li>RADICAL-PRO 2 전 모델 : 50만원 바우처 제공</li>
          </ul>

          <div class="wiawis-promo-notice">
            <span class="wiawis-promo-notice-title">유의 사항</span>
            <ul class="wiawis-promo-list">
              <li>사용은 구매한 대리점에서만 가능합니다.</li>
              <li>사용기한은 구매일로부터 1개월입니다.</li>
              <li>본 바우처는 용품 및 제품구매, 정비비용 등으로 사용 가능합니다.</li>
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
    endDate: "2024-12-31",  // 종료일
    category: "radical",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/race.jpg" alt="대회 참가권">
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">후원 대회 참가권 증정</span>
          <span class="wiawis-promo-desc">위아위스와 함께하는 타이틀 대회 참가권을 증정합니다.</span>
          <span class="wiawis-promo-period">기간: ~12월 31일까지</span>

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
            <li>그란폰도: 고성공룡나라, 홍천, 정읍내장산, 문경새재, 섬섬여수</li>
            <li>MTB 대회: 상주 MTB 대회</li>
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
  "installment": {
    endDate: null,  // 상시 노출
    category: "all",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/installment.jpg" alt="무이자 할부">
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
   * 콕핏 & 싯포스트 업그레이드 (전 모델)
   * 사용: <div id="promo-upgrade"></div>
   * ========================================== */
  "upgrade": {
    endDate: null,  // 상시 노출
    category: "all",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/upgrade.jpg" alt="콕핏 업그레이드">
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">콕핏 & 싯포스트 업그레이드</span>
          <span class="wiawis-promo-desc">카르마토 콕핏과 싯포스트로 라이딩 퍼포먼스를 한 단계 높여보세요.</span>
          <span class="wiawis-promo-period">상시 진행</span>

          <span class="wiawis-promo-section">업그레이드 항목</span>
          <ul class="wiawis-promo-list">
            <li>카르마토 핸들바 업그레이드</li>
            <li>카르마토 스템 업그레이드</li>
            <li>카르마토 싯포스트 업그레이드</li>
          </ul>
        </div>
      </div>
    `
  },


  /* ==========================================
   * Falling for Ride 캠페인
   * 사용: <div id="promo-falling"></div>
   * ========================================== */
  "falling": {
    endDate: "2025-03-31",  // 종료일
    category: "campaign",
    html: `
      <div class="wiawis-promo-item">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/falling.jpg" alt="Falling for Ride">
        </div>
        <div class="wiawis-promo-content">
          <span class="wiawis-promo-title">Falling for Ride</span>
          <span class="wiawis-promo-desc">위아위스와 함께하는 특별한 라이딩 캠페인. (이름 변경 예정)</span>
          <span class="wiawis-promo-period">진행 중</span>

          <span class="wiawis-promo-section">캠페인 내용</span>
          <ul class="wiawis-promo-list">
            <li>캠페인 상세 내용이 여기에 들어갑니다.</li>
            <li>필요한 만큼 내용을 추가하면 됩니다.</li>
          </ul>
        </div>
      </div>
    `
  },


  /* ==========================================
   * 롯데카드 (링크형)
   * 사용: <div id="promo-lotte"></div>
   * ========================================== */
  "lotte": {
    endDate: "2025-01-31",  // 종료일
    category: "campaign",
    html: `
      <a href="롯데카드링크주소" class="wiawis-promo-link" target="_blank">
        <div class="wiawis-promo-image">
          <img src="/upload/프로모션/lotte.jpg" alt="롯데카드">
        </div>
        <div class="wiawis-promo-content">
          <div>
            <span class="wiawis-promo-title">롯데카드 특별 혜택</span>
            <span class="wiawis-promo-desc">롯데카드와 함께하는 특별 프로모션 (기간 한정)</span>
          </div>
          <span class="wiawis-promo-arrow">→</span>
        </div>
      </a>
    `
  }


};


/* ============================================
 * 카테고리 그룹 정의
 * ============================================ */
const WIAWIS_CATEGORIES = {

  /* ------ RADICAL 시리즈 ------ */
  "radical": {
    title: "RADICAL-PRO XP2 / PRO2 프로모션",
    sub: "래디칼 프로 시리즈 구매 고객 대상",
    promos: ["voucher-xp2", "voucher-pro2", "race"]  // 포함할 프로모션 ID
  },

  /* ------ 전 모델 대상 ------ */
  "all": {
    title: "전 모델 대상",
    sub: "위아위스 전 모델 구매 고객 대상",
    promos: ["installment", "upgrade"]
  },

  /* ------ 캠페인 & 제휴 ------ */
  "campaign": {
    title: "캠페인 & 제휴",
    sub: "특별 캠페인 및 제휴 프로모션",
    promos: ["falling", "lotte"]
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
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.wiawis-promo-hero p {
  display: block;
  font-size: 16px;
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
  background: #0a0a0a;
  color: #fff;
}

.wiawis-promo-category summary::-webkit-details-marker {
  display: none;
}

.wiawis-promo-category-title {
  display: block;
  font-size: 20px;
  font-weight: 700;
}

.wiawis-promo-category-sub {
  display: block;
  font-size: 13px;
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
  min-height: 400px;
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
  background: #f0f0f0;
  overflow: hidden;
}

.wiawis-promo-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-size: 24px;
  font-weight: 700;
  color: #0a0a0a;
  margin-bottom: 10px;
}

.wiawis-promo-desc {
  display: block;
  font-size: 15px;
  color: #525252;
  margin-bottom: 20px;
}

.wiawis-promo-period {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  padding: 8px 14px;
  background: #0a0a0a;
  margin-bottom: 24px;
  align-self: flex-start;
}

.wiawis-promo-section {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #0a0a0a;
  margin-top: 20px;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e5e5e5;
}

.wiawis-promo-list {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}

.wiawis-promo-list li {
  display: block;
  font-size: 14px;
  color: #262626;
  padding: 5px 0 5px 14px;
  position: relative;
}

.wiawis-promo-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  font-weight: bold;
}

.wiawis-promo-notice {
  display: block;
  margin-top: 24px;
  padding: 16px;
  background: #f5f5f5;
}

.wiawis-promo-notice-title {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #999;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wiawis-promo-notice li {
  font-size: 12px;
  color: #737373;
  padding: 3px 0 3px 14px;
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

  .wiawis-promo-content {
    padding: 32px 24px;
  }

  .wiawis-promo-link .wiawis-promo-image {
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
    font-size: 28px;
  }

  .wiawis-promo-title {
    font-size: 20px;
  }

  .wiawis-promo-content {
    padding: 28px 20px;
  }

  .wiawis-promo-image {
    min-height: 200px;
  }

  .wiawis-promo-category summary {
    padding: 20px;
  }

  .wiawis-promo-category-title {
    font-size: 17px;
  }
}
</style>
`;


/* ============================================
 * 날짜 체크 함수
 * ============================================ */
function isPromoActive(endDate) {
  if (!endDate) return true;  // null이면 상시
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const end = new Date(endDate + "T23:59:59");
  
  return today <= end;
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
      return promo && isPromoActive(promo.endDate);
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
      if (isPromoActive(promo.endDate)) {
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
