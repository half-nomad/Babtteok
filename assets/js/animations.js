/* =============================================================================
   Animations JS - 밥떡한끼 추가 애니메이션 제어
   ============================================================================= */

// 추가 애니메이션 함수들 (필요시 확장)
class AnimationController {
    constructor() {
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }
    
    init() {
        console.log('애니메이션 컨트롤러 초기화');
        
        // 사용자 설정에 따른 애니메이션 조정
        if (this.isReducedMotion) {
            this.disableAnimations();
        }
    }
    
    disableAnimations() {
        // 접근성을 위한 애니메이션 비활성화
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// 전역 애니메이션 컨트롤러 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
});
