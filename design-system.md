# 밥떡한끼 디자인 시스템 가이드

**프로젝트**: 밥버거-떡볶이 세트 브랜드 슬라이드 프레젠테이션  
**타깃**: 현대적이고 임팩트 있는 프레젠테이션  
**폰트**: Pretendard  
**제작일**: 2025년 6월 29일  
**화면 비율**: 16:9  
**핵심 가치**: 세련됨, 모던함, 시각적 임팩트

---

## 🎨 컬러 시스템

### 메인 컬러 팔레트

```css
/* Core Purple Palette */
--primary-purple: #673AB7;      /* Deep Purple - 메인 타이틀 */
--secondary-purple: #9C27B0;    /* Light Purple - 섹션 구분 */
--accent-purple: #B388FF;       /* Soft Purple - 링크, 강조 */
--tertiary-indigo: #3F51B5;     /* Indigo - 서브 요소 */

/* Background & Glass */
--background-black: #000000;    /* 메인 배경 */
--background-dark: #1a1a1a;     /* 다크 배경 */
--glass-bg: rgba(30, 30, 30, 0.6);        /* 글래스 배경 */
--glass-border: rgba(255, 255, 255, 0.15); /* 글래스 테두리 */

/* Text Palette */
--text-primary: #FFFFFF;        /* 메인 텍스트 */
--text-secondary: #CCCCCC;      /* 서브 텍스트 */
--text-light: #E0E0E0;          /* 연한 텍스트 */
--neutral-white: #ffffff;       /* 순백색 */
--border-light: rgba(255, 255, 255, 0.2);  /* 테두리 */
```

### 그라데이션 조합 3가지

#### 1️⃣ 메인 타이틀용 - 강력한 임팩트

```css
background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 2️⃣ 서브 텍스트용 - 부드러운 강조

```css
background: linear-gradient(90deg, var(--text-primary) 0%, var(--accent-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 3️⃣ 박스 및 카드용 - 세련된 배경

```css
background: linear-gradient(120deg, var(--tertiary-indigo) 0%, var(--primary-purple) 100%);
box-shadow: 0 8px 30px rgba(103, 58, 183, 0.3);
```

---

## ✍️ 타이포그래피 시스템

### 폰트 패밀리
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 텍스트 계층 구조

#### 레벨 1: H1 - 메인 타이틀 (4.5rem / 72px)
*예: "소자본 창업시장의 현실"*

```css
font-size: 4.5rem;
font-weight: 800; /* ExtraBold */
line-height: 1.1;
background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: -0.025em;
```

#### 레벨 2: H2 - 섹션 타이틀 (2.5rem / 40px)
*예: "8,000만원 초기투자 분석"*

```css
font-size: 2.5rem;
font-weight: 700; /* Bold */
color: var(--text-primary);
line-height: 1.2;
margin-bottom: var(--space-md);
```

#### 레벨 3: H3 - 서브 타이틀 (1.5rem / 24px)
*예: "월 매출 6,000만원 시나리오"*

```css
font-size: 1.5rem;
font-weight: 600; /* SemiBold */
background: linear-gradient(90deg, var(--text-primary) 0%, var(--accent-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 1.3;
```

#### 레벨 4: Body - 본문 텍스트 (1.125rem / 18px)
*예: "1억원 내외 소자본 창업은 치킨, 카페 등 포화 업종만 선택 가능..."*

```css
font-size: 1.125rem;
font-weight: 400; /* Regular */
line-height: 1.6;
color: var(--text-secondary);
```

#### 레벨 5: 핵심 수치 - 임팩트 텍스트 (3.5rem / 56px)
*예: "8,000만원", "월 1,300만원"*

```css
font-size: 3.5rem;
font-weight: 900; /* Black */
color: var(--accent-purple);
line-height: 1;
text-shadow: 0 0 10px rgba(179, 136, 255, 0.4);
```

#### 레벨 6: 캡션 - 보조 정보 (0.875rem / 14px)
*예: "출처: 중소벤처기업부 2024년 창업통계"*

```css
font-size: 0.875rem;
font-weight: 400; /* Regular */
color: var(--text-light);
line-height: 1.4;
```

---

## 💎 레이아웃 & 구조 시스템

### 슬라이드 기본 구조

```css
.slide {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--background-black) 0%, var(--background-dark) 100%);
  padding: 4rem 5rem; /* 64px 80px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
}

.slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-purple);
}
```

### 글래스모피즘 (Glassmorphism)

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  padding: 2rem;
}
```

### 데이터 테이블

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 1rem;
}

.data-table th {
  background: var(--primary-navy);
  color: var(--neutral-white);
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
}

.data-table td {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-light);
  color: var(--primary-gray);
}

.data-table .highlight-number {
  color: var(--accent-orange);
  font-weight: 700;
  font-size: 1.125rem;
}
```

### 간격 시스템 (Spacing)

```css
:root {
  --space-xs: 0.5rem;   /* 8px - 미세 조정 */
  --space-sm: 1rem;     /* 16px - 요소 간 기본 간격 */
  --space-md: 2rem;     /* 32px - 섹션 간 간격 */
  --space-lg: 3rem;     /* 48px - 대분류 간격 */
  --space-xl: 4rem;     /* 64px - 슬라이드 패딩 */
  --space-2xl: 6rem;    /* 96px - 페이지 구분 */
}
```

---

## 📊 차트 & 인포그래픽 스타일

### 바 차트 (매출/비용 비교용)

```css
.bar-chart {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 300px;
  padding: 2rem 0;
}

.bar {
  flex: 1;
  background: linear-gradient(to top, var(--tertiary-indigo), var(--primary-purple));
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.3s ease;
}

.bar.highlight {
  background: linear-gradient(to top, var(--accent-purple), var(--secondary-purple));
}

.bar-label {
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  color: var(--text-secondary);
  font-size: 0.875rem;
}
```

### 파이 차트 색상 팔레트

```css
.pie-chart-colors {
  --pie-primary: var(--primary-purple);
  --pie-secondary: var(--secondary-purple);
  --pie-tertiary: var(--accent-purple);
  --pie-accent: var(--tertiary-indigo);
  --pie-neutral: var(--text-secondary);
}
```

### 플로우차트 (사업 계획용)

```css
.flow-step {
  background: var(--neutral-white);
  border: 2px solid var(--primary-navy);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  text-align: center;
  position: relative;
  min-width: 200px;
}

.flow-step::after {
  content: '→';
  position: absolute;
  right: -3rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--accent-orange);
  font-weight: bold;
}

.flow-step:last-child::after {
  display: none;
}

.flow-step.highlight {
  background: var(--soft-orange);
  border-color: var(--accent-orange);
}
```

---

## 🎮 인터랙션 & 애니메이션

### 전환 효과 (절제된 비즈니스 스타일)

```css
.slide-enter-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transform: translateY(0);
  opacity: 1;
}

.slide-enter {
  transform: translateY(20px);
  opacity: 0;
}
```

### 호버 효과 (세련된 인터랙션)

```css
.interactive-element:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 25px rgba(103, 58, 183, 0.5);
  transition: all 0.2s ease;
}

.cta-button {
  background: var(--accent-purple);
  color: var(--background-black);
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: var(--secondary-purple);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(156, 39, 176, 0.3);
}
```

### 수치 카운트 애니메이션

```css
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.count-number {
  animation: countUp 0.8s ease-out;
  animation-fill-mode: both;
}
```

---

## 💾 컴포넌트 라이브러리

### 1. 슬라이드 컴포넌트 기본 구조

```javascript
// Slide.jsx - 기본 슬라이드 템플릿
const Slide = ({ title, subtitle, children, slideNumber }) => {
  return (
    <section className="slide slide-enter-active">
      <div className="slide-header">
        <h1 className="h1-title">{title}</h1>
        {subtitle && <h3 className="h3-subtitle">{subtitle}</h3>}
      </div>
      <div className="slide-content">
        {children}
      </div>
      <div className="slide-footer">
        <span className="slide-number">{slideNumber}</span>
      </div>
    </section>
  );
};
```

### 2. 통계 카드 컴포넌트

```javascript
// StatsCard.jsx - 핵심 수치 표시용
const StatsCard = ({ number, unit, description, trend }) => {
  return (
    <div className="info-card stats-card">
      <div className="stats-number">
        <span className="count-number">{number}</span>
        <span className="stats-unit">{unit}</span>
      </div>
      <p className="stats-description">{description}</p>
      {trend && (
        <div className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
          {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  );
};
```

### 3. 비교 표 컴포넌트

```javascript
// ComparisonTable.jsx - 경쟁사/가격 비교용
const ComparisonTable = ({ data, highlightColumn }) => {
  return (
    <table className="data-table comparison-table">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className={index === highlightColumn ? 'highlight' : ''}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={cellIndex === highlightColumn ? 'highlight-number' : ''}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

---

## ✅ 창업 프레젠테이션 특화 체크리스트

### 제작 전 - 타깃 분석
- [ ] **신뢰성**: 30-50대가 믿을 만한 전문적인 디자인인가?
- [ ] **가독성**: 복잡한 수치와 데이터를 명확히 전달하는가?
- [ ] **현실감**: 과장된 표현 없이 현실적인 톤을 유지하는가?

### 제작 중 - 콘텐츠 구성
- [ ] **핵심 수치**: 투자금, 매출, 수익률이 시각적으로 강조되었는가?
- [ ] **비교 분석**: 경쟁사 대비 우위점이 표와 차트로 명확한가?
- [ ] **리스크**: 위험 요소도 투명하게 제시했는가?
- [ ] **실행 계획**: 구체적인 단계별 로드맵이 있는가?

### 색상 사용 검증
- [ ] **네이비**: 신뢰감을 주는 메인 정보에 사용
- [ ] **그레이**: 보조 정보와 설명에 사용  
- [ ] **오렌지**: 핵심 수치와 수익성 관련 내용에만 사용
- [ ] **과도한 색상**: 3가지 메인 컬러 외 과도한 색상 사용 금지

### 완료 후 - 최종 점검
- [ ] **일관성**: 모든 슬라이드에서 디자인 시스템이 일관되게 적용되었는가?
- [ ] **접근성**: 색약자도 정보를 구분할 수 있는가?
- [ ] **출력 대응**: 흑백 출력 시에도 정보 전달이 가능한가?
- [ ] **모바일**: 태블릿/모바일에서도 가독성이 확보되는가?

### 프레젠테이션 특화 점검
- [ ] **임팩트**: 첫 슬라이드에서 문제 상황을 강력히 어필하는가?
- [ ] **솔루션**: 밥떡한끼만의 차별점이 명확히 드러나는가?
- [ ] **신뢰도**: 모든 수치에 출처와 근거가 명시되어 있는가?
- [ ] **실행력**: 구체적이고 달성 가능한 계획이 제시되었는가?
- [ ] **CTA**: 마지막 슬라이드에서 명확한 행동 유도가 있는가?

---

## 📱 반응형 대응

### 태블릿 (768px 이상)
```css
@media (min-width: 768px) and (max-width: 1024px) {
  .slide {
    padding: 3rem 4rem;
  }
  
  .h1-title {
    font-size: 3.5rem;
  }
  
  .stats-number {
    font-size: 2.5rem;
  }
}
```

### 모바일 (767px 이하)
```css
@media (max-width: 767px) {
  .slide {
    padding: 2rem;
  }
  
  .h1-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .data-table {
    font-size: 0.875rem;
  }
  
  .bar-chart {
    height: 200px;
  }
}
```

---

## 🚀 성능 최적화

### 웹폰트 최적화
```css
@font-face {
  font-family: 'Pretendard';
  font-display: swap;
  /* 필요한 웨이트만 로드: 400, 600, 700, 800, 900 */
}
```

### 이미지 최적화
- **차트/그래프**: SVG 형식 우선 사용
- **사진**: WebP 형식, 적절한 압축률 적용
- **아이콘**: 가능한 CSS로 구현, 필요시 SVG 스프라이트

---

**💡 핵심 원칙**: "현대적이고 세련된 보라색 계열의 다크 테마로, 인상적이고 감각적인 슬라이드 프레젠테이션을 제작한다"
