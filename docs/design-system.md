# 🎨 밥떡한끼 슬라이드 제작 가이드

## 🚨 **핵심 원칙**

### ✅ **새 슬라이드 제작**
1. **새 HTML 파일 생성**
2. **공통 CSS 4개 로드** (variables.css, base.css, components.css, responsive.css)  
3. **표준 HTML 구조 사용** (아래 템플릿)
4. **폰트 크기 일관성 준수** (슬라이드 3 기준)
5. **내용만 변경**

### ❌ **금지사항**
- 새 CSS 파일 생성
- 공통 CSS 무시
- 인라인 스타일 남발
- main-impact-small 클래스 누락 ⚠️

## 📏 **폰트 크기 기준 (슬라이드 3 검증됨)**

| 요소 | 클래스 | 크기 | 용도 |
|------|--------|------|------|
| **메인 제목** | `.slide-title` | **3rem** | 슬라이드 제목 |
| **부제목** | `.slide-subtitle` | **1.5rem** | 설명 텍스트 |
| **핵심 메시지** | `.main-impact-small` | **4.2rem** | 중앙 임팩트 (필수!) |
| **설명 텍스트** | `.impact-description` | **1.25rem** | 부연 설명 |

⚠️ **중요**: `.main-impact`에 **반드시** `.main-impact-small` 클래스를 함께 사용!

---

## 📋 **표준 HTML 템플릿**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>슬라이드 X: 제목 - 밥떡한끼 프랜차이즈</title>
    
    <!-- 공통 CSS (필수) -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <main class="slide slide-enter">
        <header class="slide-header">
            <div class="slide-number">SLIDE X</div>
            <h1 class="slide-title">메인 제목</h1>
            <p class="slide-subtitle">부제목</p>
        </header>
        
        <section class="impact-section">
            <div class="main-impact main-impact-small">핵심 메시지</div>
            <p class="impact-description">설명 텍스트</p>
        </section>
        
        <section class="cards-container">
            <div class="glass-card">
                <div class="card-icon">🎯</div>
                <h3 class="card-title">카드 제목</h3>
                <p class="card-description">카드 설명</p>
            </div>
            <!-- 카드 2개 더 추가 -->
        </section>
    </main>
</body>
</html>
```

---

## 🧩 **사용 가능한 컴포넌트**

### **카드**
```html
<!-- 일반 카드 -->
<div class="glass-card">
    <div class="card-icon">🎯</div>
    <h3 class="card-title">제목<br><span class="card-highlight">강조</span></h3>
    <p class="card-description">설명</p>
</div>

<!-- 강조 카드 -->
<div class="glass-card highlight">
    <!-- 내용 동일 -->
</div>
```

### **버튼**
```html
<button class="btn-primary">주 버튼</button>
<button class="btn-secondary">보조 버튼</button>
```

### **통계**
```html
<div class="infographic-container">
    <div class="stat-item">
        <span class="stat-number">85%</span>
        <span class="stat-label">성장률</span>
    </div>
</div>
```

---

## ⚡ **체크리스트**

- [ ] 새 HTML 파일 생성
- [ ] 공통 CSS 4개 로드
- [ ] 템플릿 구조 복사
- [ ] **main-impact-small 클래스 확인** ⭐
- [ ] 폰트 크기 일관성 확인
- [ ] 내용만 수정
- [ ] 데스크톱/모바일 확인

**끝!**