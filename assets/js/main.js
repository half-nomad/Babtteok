/* =============================================================================
   Main JS - 밥떡한끼 메인 애플리케이션
   ============================================================================= */

// 메인 애플리케이션 클래스
class BabtteokApp {
    constructor() {
        this.isLoaded = false;
        this.init();
    }
    
    init() {
        console.log('밥떡한끼 앱 초기화 시작');
        
        // 로딩 스크린 처리
        this.handleLoadingScreen();
        
        // 페이지 완전 로드 후 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }
    
    handleLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        
        if (loadingScreen) {
            // 즉시 로딩 스크린 숨김 (개발 중에는 빠르게)
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 300);
            }, 100); // 매우 빠른 로딩
        }
    }
    
    onDOMReady() {
        console.log('DOM 준비 완료');
        
        // 키보드 접근성 개선
        this.setupAccessibility();
        
        // 성능 모니터링
        this.setupPerformanceMonitoring();
        
        this.isLoaded = true;
        console.log('밥떡한끼 앱 초기화 완료');
    }
    
    setupAccessibility() {
        // 키보드 포커스 표시 개선
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    setupPerformanceMonitoring() {
        // 성능 측정 (개발용)
        if (performance && performance.mark) {
            performance.mark('app-loaded');
            
            // 페이지 로드 시간 측정
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`페이지 로드 시간: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
            });
        }
    }
}

// 앱 초기화
window.addEventListener('load', () => {
    window.babtteokApp = new BabtteokApp();
});

// 에러 처리
window.addEventListener('error', (e) => {
    console.error('앱 에러:', e.error);
});

// 디버그 모드 (개발용)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.DEBUG = true;
    console.log('🔧 디버그 모드 활성화');
}
