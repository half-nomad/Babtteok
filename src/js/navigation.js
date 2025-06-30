/* ========== SLIDE NAVIGATION JAVASCRIPT ========== */
/* 모든 슬라이드에서 사용할 공통 네비게이션 시스템 */

class SlideNavigation {
    constructor() {
        // 슬라이드 네비게이션 맵
        this.slideMap = {
            'index.html': { prev: null, next: 'src/slide-title.html', current: -1, title: 'Home' },
            'src/slide-title.html': { prev: '../index.html', next: 'slide-01.html', current: 0, title: 'Brand Intro' },
            'src/slide-01.html': { prev: 'slide-title.html', next: 'slide-02.html', current: 1, title: 'Problem Analysis' },
            'src/slide-02.html': { prev: 'slide-01.html', next: 'slide-03.html', current: 2, title: 'Solution' },
            'src/slide-03.html': { prev: 'slide-02.html', next: 'slide-04.html', current: 3, title: 'Market Analysis' },
            'src/slide-04.html': { prev: 'slide-03.html', next: 'slide-05.html', current: 4, title: 'Market Data' },
            'src/slide-05.html': { prev: 'slide-04.html', next: 'slide-06.html', current: 5, title: 'Execution Plan' },
            'src/slide-06.html': { prev: 'slide-05.html', next: 'slide-07.html', current: 6, title: 'Profitability' },
            'src/slide-07.html': { prev: 'slide-06.html', next: '../index.html', current: 7, title: 'Call to Action' }
        };
        
        this.totalSlides = 8; // 0~7 (제목 포함)
        this.currentSlide = this.getCurrentSlideIndex();
        this.visitedSlides = this.loadVisitedSlides();
        
        this.init();
    }
    
    init() {
        this.createNavigationHTML();
        this.setupEventListeners();
        this.updateProgress();
        this.markCurrentSlideAsVisited();
    }
    
    getCurrentSlideIndex() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        // 현재 경로에 따라 슬라이드 맵에서 찾기
        for (const [key, value] of Object.entries(this.slideMap)) {
            if (key.includes(currentFile) || currentFile.includes(key.split('/').pop())) {
                return value.current;
            }
        }
        return 0; // 기본값
    }
    
    createNavigationHTML() {
        // 네비게이션 HTML 생성
        const navHTML = `
            <nav class="slide-navigation">
                <button class="nav-btn nav-prev" id="navPrev">
                    <span class="nav-icon left">←</span>
                    <span class="nav-text">이전</span>
                </button>
                
                <div class="nav-progress">
                    <div class="progress-dots" id="progressDots"></div>
                    <span class="progress-text" id="progressText">0/8</span>
                </div>
                
                <button class="nav-btn nav-next" id="navNext">
                    <span class="nav-text">다음</span>
                    <span class="nav-icon right">→</span>
                </button>
            </nav>
            
            <div class="keyboard-hints">
                <span class="hint-key">←</span> <span class="hint-key">→</span> 이동 
                <span class="hint-key">Home</span> 메인 
                <span class="hint-key">Esc</span> 종료
            </div>
        `;
        
        // 네비게이션을 body에 추가
        document.body.insertAdjacentHTML('beforeend', navHTML);
        
        // Home 버튼 추가
        const homeBtn = document.createElement('button');
        homeBtn.className = 'nav-btn nav-home';
        homeBtn.innerHTML = '<span class="nav-icon">🏠</span><span class="nav-text">Home</span>';
        homeBtn.addEventListener('click', () => this.goHome());
        
        const navProgress = document.querySelector('.nav-progress');
        navProgress.parentNode.insertBefore(homeBtn, navProgress);
        
        this.createProgressDots();
    }
    
    createProgressDots() {
        const dotsContainer = document.getElementById('progressDots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'progress-dot';
            dot.setAttribute('data-slide', i);
            
            if (i === this.currentSlide) {
                dot.classList.add('active');
            }
            if (this.visitedSlides.has(i)) {
                dot.classList.add('completed');
            }
            
            dotsContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
        // 네비게이션 버튼 이벤트
        document.getElementById('navPrev').addEventListener('click', () => this.goToPrevSlide());
        document.getElementById('navNext').addEventListener('click', () => this.goToNextSlide());
        
        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.goToPrevSlide();
                    break;
                case 'ArrowRight':
                case ' ':
                    e.preventDefault();
                    this.goToNextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goHome();
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.goHome();
                    break;
                case 'Enter':
                    e.preventDefault();
                    this.goToNextSlide();
                    break;
            }
        });
        
        // 진행률 점 클릭 이벤트
        document.querySelectorAll('.progress-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // 터치 제스처 (모바일)
        this.setupTouchGestures();
    }
    
    setupTouchGestures() {
        let startX = 0;
        let startY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // 최소 스와이프 거리
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // 왼쪽으로 스와이프 - 다음 슬라이드
                    this.goToNextSlide();
                } else {
                    // 오른쪽으로 스와이프 - 이전 슬라이드
                    this.goToPrevSlide();
                }
            }
            
            startX = 0;
            startY = 0;
        });
    }
    
    goToPrevSlide() {
        const currentPath = this.getCurrentSlideFile();
        const prevPath = this.slideMap[currentPath]?.prev;
        
        if (prevPath) {
            this.navigateToSlide(prevPath);
        }
    }
    
    goToNextSlide() {
        const currentPath = this.getCurrentSlideFile();
        const nextPath = this.slideMap[currentPath]?.next;
        
        if (nextPath) {
            this.navigateToSlide(nextPath);
        }
    }
    
    goToSlide(slideIndex) {
        // 슬라이드 인덱스로 이동
        const targetSlide = Object.entries(this.slideMap).find(([key, value]) => value.current === slideIndex);
        if (targetSlide) {
            this.navigateToSlide(targetSlide[0]);
        }
    }
    
    goHome() {
        this.navigateToSlide('../index.html');
    }
    
    getCurrentSlideFile() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop() || 'index.html';
        
        // 현재 파일에 맞는 키 찾기
        for (const key of Object.keys(this.slideMap)) {
            if (key.includes(currentFile) || currentFile.includes(key.split('/').pop())) {
                return key;
            }
        }
        return 'index.html';
    }
    
    navigateToSlide(slidePath) {
        // 방문한 슬라이드 저장
        this.visitedSlides.add(this.currentSlide);
        this.saveVisitedSlides();
        
        // 슬라이드 이동
        window.location.href = slidePath;
    }
    
    updateProgress() {
        const progressText = document.getElementById('progressText');
        const prevBtn = document.getElementById('navPrev');
        const nextBtn = document.getElementById('navNext');
        
        if (progressText) {
            progressText.textContent = `${this.currentSlide + 1}/${this.totalSlides}`;
        }
        
        // 버튼 상태 업데이트
        const currentPath = this.getCurrentSlideFile();
        const canGoPrev = this.slideMap[currentPath]?.prev !== null;
        const canGoNext = this.slideMap[currentPath]?.next !== null;
        
        if (prevBtn) {
            prevBtn.classList.toggle('disabled', !canGoPrev);
        }
        if (nextBtn) {
            nextBtn.classList.toggle('disabled', !canGoNext);
        }
        
        // Home 버튼 텍스트 업데이트
        const homeBtn = document.querySelector('.nav-home .nav-text');
        if (homeBtn && this.currentSlide === -1) {
            homeBtn.textContent = 'Start';
        }
    }
    
    markCurrentSlideAsVisited() {
        this.visitedSlides.add(this.currentSlide);
        this.saveVisitedSlides();
    }
    
    loadVisitedSlides() {
        try {
            const saved = localStorage.getItem('babtteok-visited-slides');
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (e) {
            return new Set();
        }
    }
    
    saveVisitedSlides() {
        try {
            localStorage.setItem('babtteok-visited-slides', JSON.stringify([...this.visitedSlides]));
        } catch (e) {
            console.log('Could not save progress');
        }
    }
}

// 네비게이션 자동 초기화
document.addEventListener('DOMContentLoaded', () => {
    // CSS 파일 자동 로드
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = window.location.pathname.includes('src/') ? 'css/navigation.css' : 'src/css/navigation.css';
    document.head.appendChild(cssLink);
    
    // 네비게이션 초기화
    new SlideNavigation();
});

// 전역 네비게이션 함수 (디버깅용)
window.slideNav = {
    goNext: () => document.getElementById('navNext').click(),
    goPrev: () => document.getElementById('navPrev').click(),
    goHome: () => document.querySelector('.nav-home').click(),
    goToSlide: (index) => document.querySelector(`[data-slide="${index}"]`).click()
};