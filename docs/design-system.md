# 밥떡한끼 브랜드 디자인 시스템 가이드

**프로젝트**: 밥떡한끼 브랜드 슬라이드 프레젠테이션  
**폰트**: Pretendard  
**제작일**: 2025년 6월 29일  
**화면 비율**: 16:9  
**타깃**: 30-50대 예비창업주  

## 🎨 컬러 시스템

### 기본 컬러 팔레트

```css
/* Core Palette */
--primary-purple: #673AB7;    /* Deep Purple */
--secondary-purple: #9C27B0;  /* Light Purple */
--accent-purple: #B388FF;     /* Soft Purple */
--tertiary-indigo: #3F51B5;   /* Indigo */

/* Background & Glass */
--background-black: #000000;
--background-dark: #1a1a1a;
--glass-bg: rgba(30, 30, 30, 0.6);
--glass-border: rgba(255, 255, 255, 0.15);

/* Text Palette */
--text-primary: #FFFFFF;      /* White */
--text-secondary: #CCCCCC;    /* Gray */
--text-light: #E0E0E0;        /* Light Gray */
```

### 그라데이션 조합 3가지

#### 1️⃣ 메인 타이틀용 그라데이션
```css
background: linear-gradient(135deg, var(--primary-purple) 0%, var(--secondary-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 2️⃣ 서브 텍스트용 그라데이션
```css
background: linear-gradient(90deg, var(--text-primary) 0%, var(--accent-purple) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### 3️⃣ 강조 박스 및 UI용 그라데이션
```css
background: linear-gradient(120deg, var(--tertiary-indigo) 0%, var(--primary-purple) 100%);
box-shadow: 0 8px 30px rgba(103, 58, 183, 0.3);
```

## ✍️ 타이포그래피 시스템

### 폰트 패밀리
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 텍스트 계층 구조

#### 레벨 1: H1 - 메인 타이틀 (4rem / 64px)
```css
font-size: 4rem;
font-weight: 900; /* Black */
line-height: 1.2;
/* 메인 타이틀용 그라데이션 적용 */
```

#### 레벨 2: H2 - 섹션 타이틀 (2.5rem / 40px)
```css
font-size: 2.5rem;
font-weight: 700; /* Bold */
color: var(--text-primary);
```

#### 레벨 3: H3 - 서브 타이틀 (1.5rem / 24px)
```css
font-size: 1.5rem;
font-weight: 600; /* SemiBold */
/* 서브 텍스트용 그라데이션 적용 */
```

#### 레벨 4: Body - 본문 텍스트 (1.125rem / 18px)
```css
font-size: 1.125rem;
font-weight: 400; /* Regular */
line-height: 1.7;
color: var(--text-secondary);
```

#### 레벨 5: Emphasize - 핵심 수치/키워드 (2rem / 32px)
```css
font-size: 2rem;
font-weight: 700; /* Bold */
color: var(--accent-purple);
text-shadow: 0 0 10px rgba(179, 136, 255, 0.4);
```

## 💎 레이아웃 & 이펙트 시스템

### 슬라이드 기본 구조
```css
.slide {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--background-black) 0%, var(--background-dark) 100%);
  padding: 4rem; /* 64px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
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

### 간격 시스템 (Spacing)
```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 2rem;     /* 32px */
  --space-lg: 4rem;     /* 64px */
  --space-xl: 6rem;     /* 96px */
}
```

## 🎮 인터랙션 & 애니메이션

### 전환 (Transition)
```css
.slide-enter-active {
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
```

### 호버 (Hover)
```css
.interactive-element:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 25px rgba(103, 58, 183, 0.5);
}
```

## 📱 30-50대 타깃 특화 디자인 요소

### 신뢰감 강화 요소
- **컬러**: 차분한 네이비 + 전문적인 그레이
- **타이포그래피**: 명확하고 읽기 쉬운 폰트 크기
- **레이아웃**: 정보 전달 우선, 군더더기 없는 구성

### 가독성 최적화
- **최소 폰트 크기**: 18px (1.125rem)
- **충분한 여백**: 각 요소 간 최소 16px 간격
- **명확한 계층구조**: H1 > H2 > H3 > Body 순서 준수

## 💾 결과물 형식 가이드

### 바닐라 JS 컴포넌트 구조
```javascript
// 예시: Slide 클래스
class Slide {
  constructor(element) {
    this.element = element;
    this.init();
  }
  
  init() {
    this.element.classList.add('slide', 'slide-enter-active');
  }
}
```

### SVG 활용 방안
- **차트 및 다이어그램**: 데이터 시각화용 SVG
- **아이콘**: 브랜드 일관성을 위한 커스텀 아이콘
- **로고**: 확장 가능한 벡터 로고

## ✅ 브랜드 디자인 체크리스트

### 제작 전
- [ ] 30-50대 예비창업주 관점에서 신뢰할 수 있는가?
- [ ] 투자 제안서로서 전문성이 느껴지는가?

### 제작 중  
- [ ] 네이비-그레이-오렌지 컬러 팔레트를 일관되게 사용하는가?
- [ ] 핵심 수치와 데이터가 명확하게 강조되는가?
- [ ] 충분한 여백으로 깔끔한 인상을 주는가?

### 완료 후
- [ ] 모든 슬라이드가 브랜드 아이덴티티를 일관되게 표현하는가?
- [ ] 모바일에서도 가독성이 확보되는가?
- [ ] 창업 관련 전문성과 신뢰감이 전달되는가?

---

**핵심 브랜드 메시지**: "검증된 안정성 + 차별화된 기회"  
**디자인 철학**: 신뢰할 수 있는 전문성과 명확한 정보 전달
