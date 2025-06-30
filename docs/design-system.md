# 밥떡한끼 디자인 시스템 가이드 (Modern Purple Dark Theme)

**프로젝트**: 밥버거-떡볶이 세트 브랜드 슬라이드 프레젠테이션  
**타깃**: 30-50대 예비창업주  
**폰트**: Pretendard  
**제작일**: 2025년 6월 30일  
**화면 비율**: 16:9 (웹버전) / 반응형 (모바일)  
**디자인 컨셉**: 현대적이고 세련된 보라색 다크 테마  
**핵심 가치**: 혁신성, 전문성, 미래지향적 수익성

---

## 🎨 컬러 시스템

### 메인 컬러 팔레트 (Purple Dark Theme)

```css
/* 🟣 보라색 계열 - 혁신과 전문성 */
--primary-purple: #673AB7;      /* Primary Purple - 메인 타이틀 */
--secondary-purple: #9C27B0;    /* Secondary Purple - 섹션 구분 */
--accent-purple: #B388FF;       /* Accent Purple - 강조 요소 */
--tertiary-indigo: #3F51B5;     /* Tertiary Indigo - 서브 요소 */

/* ⚫ 다크 테마 배경 */
--background-black: #000000;    /* Background Black - 메인 배경 */
--background-dark: #1a1a1a;     /* Background Dark - 다크 배경 */
--background-card: #2a2a2a;     /* Card Background - 카드 배경 */
--background-overlay: #1a1a1a99; /* Overlay Background - 오버레이 */

/* ⚪ 텍스트 색상 */
--text-primary: #FFFFFF;        /* Text Primary - 메인 텍스트 */
--text-secondary: #CCCCCC;      /* Text Secondary - 서브 텍스트 */
--text-tertiary: #999999;       /* Text Tertiary - 보조 정보 */
--text-muted: #666666;          /* Text Muted - 비활성 텍스트 */

/* 🌟 특수 효과 색상 */
--glow-purple: #673AB780;       /* Purple Glow Effect */
--glow-accent: #B388FF60;       /* Accent Glow Effect */
--border-light: #333333;        /* Border Light - 구분선 */
--border-accent: #673AB7;       /* Border Accent - 강조 테두리 */

/* 🎯 상태 표시 색상 */
--success-green: #4CAF50;       /* 성공 지표 */
--warning-amber: #FF9800;       /* 주의 요소 */
--error-red: #F44336;           /* 위험 요소 */
```

### 그라데이션 조합 4종

#### 1️⃣ 메인 타이틀용 - 혁신적 임팩트

```css
.gradient-main-title {
  background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### 2️⃣ 수치 강조용 - 미래지향적 수익성

```css
.gradient-stats-number {
  background: linear-gradient(90deg, var(--text-primary) 0%, var(--accent-purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### 3️⃣ 박스/카드용 - 글래스모피즘 효과

```css
.gradient-glass-card {
  background: linear-gradient(120deg, var(--tertiary-indigo) 0%, var(--primary-purple) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px var(--glow-purple);
}
```

#### 4️⃣ 배경 오버레이용 - 깊이감 표현

```css
.gradient-background-overlay {
  background: linear-gradient(135deg, 
    var(--background-black) 0%, 
    var(--background-dark) 50%, 
    var(--primary-purple)20 100%);
}
```

---

## ✍️ 타이포그래피 시스템

### 폰트 패밀리
```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 텍스트 계층 구조 (다크 테마 최적화)

#### 레벨 1: H1 - 메인 타이틀 (4.5rem / 72px)
*예: "혁신적 소자본 창업의 미래"*

```css
.h1-main-title {
  font-size: 4.5rem;
  font-weight: 800; /* ExtraBold */
  line-height: 1.1;
  color: var(--text-primary);
  background: linear-gradient(135deg, var(--primary-purple), var(--secondary-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.025em;
  text-shadow: 0 0 20px var(--glow-purple);
  margin-bottom: var(--space-lg);
}
```

#### 레벨 2: H2 - 섹션 타이틀 (2.5rem / 40px)
*예: "밥떡한끼 시장 분석"*

```css
.h2-section-title {
  font-size: 2.5rem;
  font-weight: 700; /* Bold */
  color: var(--accent-purple);
  line-height: 1.2;
  margin-bottom: var(--space-md);
  text-shadow: 0 0 15px var(--glow-accent);
}
```

#### 레벨 3: H3 - 서브 타이틀 (1.5rem / 24px)
*예: "월 매출 2,000만원 달성 전략"*

```css
.h3-sub-title {
  font-size: 1.5rem;
  font-weight: 600; /* SemiBold */
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: var(--space-sm);
}
```

#### 레벨 4: Body - 본문 텍스트 (1.125rem / 18px)
*예: "불황에 강한 서민 외식 브랜드로서의 경쟁력..."*

```css
.body-text {
  font-size: 1.125rem;
  font-weight: 400; /* Regular */
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--space-sm);
}
```

#### 레벨 5: 핵심 수치 - 임팩트 넘버 (3.5rem / 56px)
*예: "1억 5천만원", "월 700만원"*

```css
.impact-number {
  font-size: 3.5rem;
  font-weight: 900; /* Black */
  background: linear-gradient(90deg, var(--text-primary), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  text-shadow: 0 0 25px var(--glow-accent);
  display: inline-block;
  margin: var(--space-sm) 0;
}
```

#### 레벨 6: 캡션 - 보조 정보 (0.875rem / 14px)
*예: "출처: 중소벤처기업부 2024년 창업통계"*

```css
.caption-text {
  font-size: 0.875rem;
  font-weight: 400; /* Regular */
  color: var(--text-tertiary);
  line-height: 1.4;
  opacity: 0.8;
}
```

---

## 💎 레이아웃 & 구조 시스템 (글래스모피즘)

### 슬라이드 기본 구조

```css
.slide {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--background-black);
  background-image: 
    radial-gradient(circle at 20% 20%, var(--primary-purple)20 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--tertiary-indigo)20 0%, transparent 50%);
  padding: 4rem 5rem; /* 64px 80px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-purple), var(--accent-purple));
  box-shadow: 0 0 10px var(--glow-purple);
}

.slide::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="0.5" fill="%23ffffff" opacity="0.02"/><circle cx="75" cy="75" r="0.5" fill="%23ffffff" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}
```

### 글래스모피즘 정보 카드

```css
.glass-card {
  background: rgba(42, 42, 42, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 
    0 8px 32px rgba(103, 58, 183, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--accent-purple), 
    transparent);
  opacity: 0.6;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 16px 48px rgba(103, 58, 183, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(179, 136, 255, 0.3);
}

.glass-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.glass-card-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, var(--primary-purple), var(--secondary-purple));
  border-radius: 12px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--glow-purple);
}
```

### 현대적 데이터 테이블

```css
.modern-data-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 2rem 0;
  font-size: 1rem;
  background: rgba(42, 42, 42, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.modern-data-table th {
  background: linear-gradient(135deg, var(--primary-purple), var(--secondary-purple));
  color: var(--text-primary);
  padding: 1.5rem;
  text-align: left;
  font-weight: 600;
  position: relative;
}

.modern-data-table th::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent-purple);
  box-shadow: 0 0 8px var(--glow-accent);
}

.modern-data-table td {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-secondary);
  background: rgba(26, 26, 26, 0.8);
  transition: all 0.2s ease;
}

.modern-data-table tr:hover td {
  background: rgba(103, 58, 183, 0.1);
  color: var(--text-primary);
}

.modern-data-table .highlight-number {
  color: var(--accent-purple);
  font-weight: 700;
  font-size: 1.125rem;
  text-shadow: 0 0 8px var(--glow-accent);
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

## 📊 차트 & 인포그래픽 스타일 (네온 글로우)

### 네온 바 차트 (매출/비용 비교용)

```css
.neon-bar-chart {
  display: flex;
  align-items: end;
  gap: 1.5rem;
  height: 350px;
  padding: 2rem 0;
  background: rgba(26, 26, 26, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.neon-bar {
  flex: 1;
  background: linear-gradient(to top, 
    var(--tertiary-indigo), 
    var(--primary-purple), 
    var(--accent-purple));
  border-radius: 8px 8px 0 0;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 
    0 0 20px var(--glow-purple),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.neon-bar.highlight {
  background: linear-gradient(to top, 
    var(--accent-purple), 
    var(--text-primary));
  box-shadow: 
    0 0 30px var(--glow-accent),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.neon-bar:hover {
  filter: brightness(1.2);
  transform: translateY(-4px) scale(1.02);
}

.neon-bar-label {
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  color: var(--text-primary);
  font-size: 0.875rem;
  text-shadow: 0 0 8px var(--glow-accent);
  background: rgba(26, 26, 26, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}
```

### 글로우 파이 차트 색상 팔레트

```css
.glow-pie-chart-colors {
  --pie-primary: var(--primary-purple);
  --pie-secondary: var(--secondary-purple);
  --pie-tertiary: var(--tertiary-indigo);
  --pie-accent: var(--accent-purple);
  --pie-neutral: var(--text-secondary);
  --pie-highlight: var(--text-primary);
}

.pie-segment {
  filter: drop-shadow(0 0 8px var(--glow-purple));
  transition: all 0.3s ease;
}

.pie-segment:hover {
  filter: drop-shadow(0 0 15px var(--glow-accent));
  transform: scale(1.05);
}
```

### 미래형 플로우차트 (사업 계획용)

```css
.future-flow-step {
  background: rgba(42, 42, 42, 0.4);
  backdrop-filter: blur(15px);
  border: 2px solid var(--primary-purple);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  text-align: center;
  position: relative;
  min-width: 220px;
  box-shadow: 
    0 8px 32px rgba(103, 58, 183, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.future-flow-step::after {
  content: '→';
  position: absolute;
  right: -4rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: var(--accent-purple);
  font-weight: bold;
  text-shadow: 0 0 12px var(--glow-accent);
  animation: pulse-glow 2s infinite;
}

.future-flow-step:last-child::after {
  display: none;
}

.future-flow-step.highlight {
  background: rgba(103, 58, 183, 0.2);
  border-color: var(--accent-purple);
  box-shadow: 
    0 12px 48px rgba(179, 136, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.future-flow-step:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 16px 48px rgba(103, 58, 183, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

@keyframes pulse-glow {
  0%, 100% { 
    text-shadow: 0 0 12px var(--glow-accent); 
    opacity: 1; 
  }
  50% { 
    text-shadow: 0 0 20px var(--glow-accent), 0 0 30px var(--glow-accent); 
    opacity: 0.8; 
  }
}
```

---

## 🎮 인터랙션 & 애니메이션 (현대적 효과)

### 슬라이드 전환 효과 (매끄러운 페이드)

```css
.slide-enter-active {
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateY(0) scale(1);
  opacity: 1;
  filter: blur(0px);
}

.slide-enter {
  transform: translateY(30px) scale(0.95);
  opacity: 0;
  filter: blur(4px);
}

.slide-exit-active {
  transition: all 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19);
  transform: translateY(-20px) scale(1.05);
  opacity: 0;
  filter: blur(2px);
}
```

### 호버 효과 (글로우 인터랙션)

```css
.interactive-element {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.interactive-element:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px rgba(103, 58, 183, 0.25),
    0 0 20px var(--glow-purple);
}

.cta-button {
  background: linear-gradient(135deg, var(--primary-purple), var(--secondary-purple));
  color: var(--text-primary);
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(103, 58, 183, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent);
  transition: left 0.5s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 16px 48px rgba(103, 58, 183, 0.4),
    0 0 25px var(--glow-accent);
}

.cta-button:hover::before {
  left: 100%;
}
```

### 수치 카운트 애니메이션 (글로우 효과)

```css
@keyframes countUpGlow {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
    text-shadow: none;
  }
  50% {
    opacity: 0.8;
    text-shadow: 0 0 20px var(--glow-accent);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    text-shadow: 0 0 15px var(--glow-accent);
  }
}

.count-number {
  animation: countUpGlow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: both;
}

.count-number.delayed-1 { animation-delay: 0.2s; }
.count-number.delayed-2 { animation-delay: 0.4s; }
.count-number.delayed-3 { animation-delay: 0.6s; }
```

### 글로우 펄스 효과

```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 
      0 0 15px var(--glow-purple),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 0 30px var(--glow-accent),
      0 0 40px var(--glow-purple),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
}

.pulse-glow {
  animation: glowPulse 2s ease-in-out infinite;
}
```

### 부유 애니메이션 (Floating)

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating-element {
  animation: float 3s ease-in-out infinite;
}

.floating-element.delayed-1 { animation-delay: 0.5s; }
.floating-element.delayed-2 { animation-delay: 1s; }
```

---

## 📱 반응형 대응 (모바일 최적화)

### 태블릿 (768px ~ 1024px)
```css
@media (min-width: 768px) and (max-width: 1024px) {
  .slide {
    padding: 3rem;
    aspect-ratio: 4 / 3; /* 태블릿 비율 조정 */
  }
  
  .h1-main-title {
    font-size: 3rem;
    line-height: 1.1;
  }
  
  .impact-number {
    font-size: 2.5rem;
  }
  
  .glass-card {
    padding: 2rem;
    border-radius: 12px;
  }
  
  .neon-bar-chart {
    height: 280px;
    gap: 1rem;
  }
}
```

### 모바일 (320px ~ 767px)
```css
@media (max-width: 767px) {
  .slide {
    padding: 1.5rem;
    aspect-ratio: 9 / 16; /* 세로형 모바일 비율 */
    min-height: 100vh;
  }
  
  .h1-main-title {
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;
  }
  
  .h2-section-title {
    font-size: 1.5rem;
    text-align: center;
  }
  
  .impact-number {
    font-size: 2rem;
    text-align: center;
    display: block;
    margin: var(--space-md) 0;
  }
  
  .glass-card {
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: var(--space-md);
  }
  
  .modern-data-table {
    font-size: 0.75rem;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .modern-data-table th,
  .modern-data-table td {
    padding: 0.75rem 1rem;
  }
  
  .neon-bar-chart {
    height: 200px;
    gap: 0.5rem;
    flex-direction: column;
    align-items: stretch;
  }
  
  .neon-bar {
    height: 40px;
    width: 100%;
    border-radius: 20px;
  }
  
  .future-flow-step {
    min-width: 100%;
    margin-bottom: var(--space-md);
    padding: 1.5rem;
  }
  
  .future-flow-step::after {
    content: '↓';
    right: 50%;
    bottom: -3rem;
    top: auto;
    transform: translateX(50%);
    font-size: 2rem;
  }
  
  .cta-button {
    width: 100%;
    text-align: center;
    padding: 1rem 2rem;
  }
}
```

### 초소형 모바일 (320px 이하)
```css
@media (max-width: 320px) {
  .slide {
    padding: 1rem;
  }
  
  .h1-main-title {
    font-size: 1.75rem;
  }
  
  .glass-card {
    padding: 1rem;
  }
  
  .impact-number {
    font-size: 1.75rem;
  }
}
```

---

## 💾 컴포넌트 라이브러리 (Modern)

### 1. 현대적 슬라이드 컴포넌트

```javascript
// ModernSlide.jsx - 글래스모피즘 슬라이드 템플릿
const ModernSlide = ({ title, subtitle, children, slideNumber, theme = 'default' }) => {
  return (
    <section className={`slide slide-enter-active theme-${theme}`}>
      <div className="slide-background-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="slide-header">
        <h1 className="h1-main-title">{title}</h1>
        {subtitle && <h2 className="h2-section-title">{subtitle}</h2>}
      </div>
      
      <div className="slide-content">
        {children}
      </div>
      
      <div className="slide-footer">
        <div className="slide-progress">
          <div className="progress-bar" style={{width: `${(slideNumber / 7) * 100}%`}}></div>
        </div>
        <span className="slide-number">{slideNumber} / 7</span>
      </div>
    </section>
  );
};
```

### 2. 네온 통계 카드 컴포넌트

```javascript
// NeonStatsCard.jsx - 글로우 효과 수치 표시용
const NeonStatsCard = ({ number, unit, description, trend, icon, animated = true }) => {
  return (
    <div className={`glass-card stats-card ${animated ? 'floating-element' : ''}`}>
      <div className="stats-header">
        {icon && <div className="glass-card-icon">{icon}</div>}
        <div className="stats-trend-indicator">
          {trend && (
            <div className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
              <span className="trend-arrow">{trend > 0 ? '↗' : '↘'}</span>
              <span className="trend-value">{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="stats-number-container">
        <span className="impact-number count-number">{number}</span>
        <span className="stats-unit">{unit}</span>
      </div>
      
      <p className="stats-description body-text">{description}</p>
      
      <div className="stats-glow-effect"></div>
    </div>
  );
};
```

### 3. 미래형 비교 테이블 컴포넌트

```javascript
// FutureComparisonTable.jsx - 글래스모피즘 테이블
const FutureComparisonTable = ({ data, highlightColumn, interactive = true }) => {
  return (
    <div className="table-container">
      <table className={`modern-data-table ${interactive ? 'interactive-table' : ''}`}>
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index} className={index === highlightColumn ? 'highlight-header' : ''}>
                <span className="header-text">{header}</span>
                {index === highlightColumn && <div className="highlight-indicator"></div>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={interactive ? 'hoverable-row' : ''}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === highlightColumn ? 'highlight-number' : ''}>
                  {cellIndex === highlightColumn ? (
                    <span className="highlighted-cell">{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

---

## ✅ 현대적 프레젠테이션 특화 체크리스트

### 제작 전 - 타겟 & 컨셉 분석
- [ ] **혁신성**: 30-50대가 미래지향적으로 느낄 수 있는 현대적 디자인인가?
- [ ] **가독성**: 다크 테마에서도 모든 정보가 명확히 보이는가?
- [ ] **전문성**: 과도하지 않으면서도 세련된 글로우 효과가 적용되었는가?
- [ ] **신뢰성**: 화려함 속에서도 비즈니스 신뢰도를 유지하는가?

### 제작 중 - 다크 테마 콘텐츠 구성
- [ ] **색상 대비**: 배경과 텍스트 간 충분한 대비율 확보 (WCAG 기준)
- [ ] **글로우 밸런스**: 과도한 네온 효과 없이 적절한 강조점 유지
- [ ] **정보 계층**: 보라색 그라데이션으로 정보의 우선순위 명확화
- [ ] **인터랙션**: 호버 효과와 애니메이션이 사용자 경험을 향상시키는가?

### 보라색 다크 테마 색상 검증
- [ ] **Primary Purple (#673AB7)**: 메인 타이틀과 중요 UI 요소
- [ ] **Secondary Purple (#9C27B0)**: 섹션 구분과 서브 타이틀
- [ ] **Accent Purple (#B388FF)**: 강조 요소와 인터랙션 포인트
- [ ] **Tertiary Indigo (#3F51B5)**: 보조 요소와 차트 색상
- [ ] **다크 배경**: 블랙(#000000)과 다크그레이(#1a1a1a) 조합

### 글래스모피즘 효과 점검
- [ ] **투명도**: backdrop-filter blur 효과가 모든 브라우저에서 작동하는가?
- [ ] **테두리**: 미세한 화이트 테두리로 유리같은 느낌 연출
- [ ] **그림자**: 적절한 drop-shadow와 box-shadow 조합
- [ ] **반사광**: inset 하이라이트로 유리 표면 재현

### 반응형 대응 검증
- [ ] **16:9 (데스크톱)**: 웹 프레젠테이션 최적 비율
- [ ] **4:3 (태블릿)**: 태블릿 가로 모드 대응
- [ ] **9:16 (모바일)**: 세로 모드 모바일 최적화
- [ ] **터치 인터랙션**: 모바일에서 호버 효과 대체 방안

### 완료 후 - 최종 품질 점검
- [ ] **성능**: 글로우 효과와 블러 필터가 성능에 미치는 영향 최소화
- [ ] **접근성**: 색약자도 정보 구분 가능한 추가 시각적 단서 제공
- [ ] **일관성**: 모든 슬라이드에서 글래스모피즘 스타일 통일성 유지
- [ ] **브라우저 호환**: Safari, Chrome, Firefox, Edge에서 정상 작동 확인

### 비즈니스 프레젠테이션 특화 점검
- [ ] **첫인상**: 첫 슬라이드에서 현대적이면서도 신뢰할 수 있는 브랜드 이미지
- [ ] **데이터 시각화**: 핵심 수치들이 네온 효과로 강력하게 어필
- [ ] **프로세스 흐름**: 미래형 플로우차트로 사업 계획의 체계성 강조
- [ ] **Call to Action**: 마지막 슬라이드에서 강력한 시각적 유도 효과

---

## 🚀 성능 최적화 (다크 테마 특화)

### 웹폰트 최적화
```css
@font-face {
  font-family: 'Pretendard';
  font-display: swap;
  /* 필요한 웨이트만 로드: 400, 600, 700, 800, 900 */
  /* preload로 초기 로딩 속도 개선 */
}

/* 폰트 로딩 중 fallback */
body {
  font-family: 'Pretendard', 
               system-ui, 
               -apple-system, 
               'Segoe UI', 
               sans-serif;
}
```

### CSS 애니메이션 최적화
```css
/* GPU 가속 활용 */
.gpu-accelerated {
  transform: translateZ(0);
  will-change: transform, opacity;
}

/* 애니메이션 성능 개선 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 다크 테마 이미지 최적화
- **아이콘**: SVG 형식, 다크 테마용 색상 최적화
- **차트/그래프**: CSS/SVG로 구현하여 확장성 확보
- **배경 패턴**: CSS gradients와 pseudo-elements로 구현
- **글로우 효과**: box-shadow 대신 CSS filters 활용으로 성능 개선

---

**💜 핵심 디자인 철학**: "30-50대 예비창업주에게 신뢰와 혁신을 동시에 전달하는 현대적 보라색 다크 테마로, 미래지향적 비즈니스 가치를 시각적으로 구현한다"

**🌟 특별 강조**: 글래스모피즘과 네온 글로우 효과를 통해 프리미엄한 브랜딩을 구현하되, 과도하지 않은 절제된 아름다움으로 전문성을 유지한다.
