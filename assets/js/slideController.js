/* =============================================================================
   Slide Controller - 밥떡한끼 슬라이드 메인 컨트롤러
   ============================================================================= */

class SlideController {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 7;
        this.isTransitioning = false;
        this.autoAdvance = false;
        this.autoAdvanceInterval = null;
        
        // DOM 요소들
        this.slideContainer = document.getElementById('slide-container');
        this.slides = document.querySelectorAll('.slide');
        this.progressFill = document.getElementById('progress-fill');
        this.currentSlideDisplay = document.getElementById('current-slide');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.keyboardHelp = document.getElementById('keyboard-help');
        
        // 초기화
        this.init();
    }
    
    init() {
        console.log('슬라이드 컨트롤러 초기화 시작');
        
        // 이벤트 리스너 등록
        this.setupEventListeners();
        
        // 초기 슬라이드 설정
        this.goToSlide(1, false, false);
        this.updateProgress();
        
        // 키보드 도움말 자동 숨김
        setTimeout(() => {
            if (this.keyboardHelp) {
                this.keyboardHelp.style.opacity = '0';
                setTimeout(() => {
                    this.keyboardHelp.style.display = 'none';
                }, 500);
            }
        }, 3000);
        
        console.log('슬라이드 컨트롤러 초기화 완료');
    }
    
    setupEventListeners() {
        // 네비게이션 버튼
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // 키보드 이벤트
        document.addEventListener('keydown', (e) => {
            if (this.isTransitioning) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides);
                    break;
                case 'Escape':
                    this.toggleFullscreen();
                    break;
            }
        });
        
        // 터치 제스처 (모바일)
        let touchStartX = 0;
        let touchStartY = 0;
        
        this.slideContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        });
        
        this.slideContainer.addEventListener('touchend', (e) => {
            if (this.isTransitioning) return;
            
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaX = touchStartX - touchEndX;
            const deltaY = touchStartY - touchEndY;
            
            // 수평 스와이프가 수직보다 클 때만 처리
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
        
        // 브라우저 뒤로가기/앞으로가기
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.slide) {
                this.goToSlide(e.state.slide, false);
            }
        });
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1, true);
        }
    }
    
    goToSlide(slideNumber, isReverse = false, updateHistory = true) {
        if (slideNumber < 1 || slideNumber > this.totalSlides || this.isTransitioning) {
            return;
        }
        
        if (slideNumber === this.currentSlide) {
            return;
        }
        
        this.isTransitioning = true;
        
        const currentSlideElement = document.getElementById(`slide-${this.currentSlide}`);
        const nextSlideElement = document.getElementById(`slide-${slideNumber}`);
        
        if (!currentSlideElement || !nextSlideElement) {
            console.error('슬라이드 요소를 찾을 수 없습니다');
            this.isTransitioning = false;
            return;
        }
        
        // 현재 슬라이드 숨김
        this.hideSlide(currentSlideElement, isReverse);
        
        // 다음 슬라이드 표시
        setTimeout(() => {
            this.showSlide(nextSlideElement, isReverse);
            this.currentSlide = slideNumber;
            this.updateProgress();
            this.updateNavigation();
            
            // 히스토리 업데이트
            if (updateHistory) {
                history.pushState(
                    { slide: slideNumber }, 
                    `슬라이드 ${slideNumber}`, 
                    `#slide-${slideNumber}`
                );
            }
            
            // 전환 완료
            setTimeout(() => {
                this.isTransitioning = false;
                this.onSlideChanged(slideNumber);
            }, 800);
        }, 100);
    }
    
    showSlide(slideElement, isReverse = false) {
        // 모든 슬라이드 비활성화
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'entering', 'entering-reverse');
        });
        
        // 새 슬라이드 활성화
        slideElement.classList.add('active');
        slideElement.classList.add(isReverse ? 'entering-reverse' : 'entering');
        
        // 애니메이션 클래스 제거
        setTimeout(() => {
            slideElement.classList.remove('entering', 'entering-reverse');
        }, 800);
    }
    
    hideSlide(slideElement, isReverse = false) {
        slideElement.classList.add(isReverse ? 'exiting-reverse' : 'exiting');
        slideElement.classList.remove('active');
        
        // 애니메이션 클래스 제거
        setTimeout(() => {
            slideElement.classList.remove('exiting', 'exiting-reverse');
        }, 800);
    }
    
    updateProgress() {
        const progress = (this.currentSlide / this.totalSlides) * 100;
        
        if (this.progressFill) {
            this.progressFill.style.width = `${progress}%`;
        }
        
        if (this.currentSlideDisplay) {
            this.currentSlideDisplay.textContent = this.currentSlide;
        }
    }
    
    updateNavigation() {
        // 이전 버튼 상태
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 1;
            this.prevBtn.style.opacity = this.currentSlide === 1 ? '0.5' : '1';
        }
        
        // 다음 버튼 상태
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides;
            this.nextBtn.style.opacity = this.currentSlide === this.totalSlides ? '0.5' : '1';
        }
    }
    
    onSlideChanged(slideNumber) {
        console.log(`슬라이드 ${slideNumber}로 변경됨`);
        
        // 특정 슬라이드별 특수 효과
        switch(slideNumber) {
            case 1:
                this.animateStatistics();
                break;
            case 2:
                this.animateSolutionCards();
                break;
            case 7:
                this.animateThankYou();
                break;
        }
        
        // 사용자 분석 (필요시)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'slide_view', {
                'slide_number': slideNumber,
                'slide_title': this.getSlideTitle(slideNumber)
            });
        }
    }
    
    animateStatistics() {
        const statNumbers = document.querySelectorAll('#slide-1 .stat-number');
        
        statNumbers.forEach((statNumber, index) => {
            const targetNumber = parseInt(statNumber.textContent.replace(/[^0-9]/g, ''));
            
            setTimeout(() => {
                this.countUpAnimation(statNumber, targetNumber);
            }, index * 200);
        });
    }
    
    countUpAnimation(element, target) {
        const duration = 2000;
        const startTime = performance.now();
        const startValue = 0;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutQuart 이징 함수
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
            
            // 숫자 포맷팅
            const suffix = element.textContent.includes('%') ? '%' : 
                          element.textContent.includes('억') ? '억' : 
                          element.textContent.includes('만') ? '만' : '';
            
            element.textContent = currentValue.toLocaleString() + suffix;
            element.classList.add('counting');
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.classList.remove('counting');
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    animateSolutionCards() {
        const cards = document.querySelectorAll('#slide-2 .highlight-card, #slide-2 .feature-card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animationDelay = '0s';
                card.classList.add('animated');
            }, index * 150);
        });
    }
    
    animateThankYou() {
        const title = document.querySelector('#slide-7 h1');
        if (title) {
            title.classList.add('typing-effect');
        }
    }
    
    getSlideTitle(slideNumber) {
        const titles = [
            '문제 정의/현황 분석',
            '솔루션/아이디어 제시', 
            '타겟/시장 분석',
            '실행 계획/프로세스',
            '결과/성과 예측',
            '제안/Call to Action',
            '감사 인사'
        ];
        
        return titles[slideNumber - 1] || `슬라이드 ${slideNumber}`;
    }
    
    // 자동 진행 기능
    startAutoAdvance(interval = 5000) {
        this.autoAdvance = true;
        this.autoAdvanceInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.stopAutoAdvance();
            }
        }, interval);
    }
    
    stopAutoAdvance() {
        this.autoAdvance = false;
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }
    
    // 전체화면 토글
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
    
    // 슬라이드 정보 반환
    getCurrentSlideInfo() {
        return {
            current: this.currentSlide,
            total: this.totalSlides,
            title: this.getSlideTitle(this.currentSlide),
            progress: (this.currentSlide / this.totalSlides) * 100
        };
    }
    
    // 에러 처리
    handleError(error) {
        console.error('슬라이드 컨트롤러 에러:', error);
        
        // 사용자에게 에러 표시 (선택적)
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = '슬라이드 로딩 중 오류가 발생했습니다.';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4757;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 500;
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

/* =============================================================================
   초기화 및 전역 접근
   ============================================================================= */

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.slideController = new SlideController();
        console.log('슬라이드 시스템이 성공적으로 초기화되었습니다.');
    } catch (error) {
        console.error('슬라이드 초기화 실패:', error);
    }
});

// 페이지 새로고침 시 슬라이드 위치 복원
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
        const slideNumber = parseInt(hash.replace('#slide-', ''));
        if (slideNumber >= 1 && slideNumber <= 7) {
            setTimeout(() => {
                window.slideController?.goToSlide(slideNumber, false, false);
            }, 100);
        }
    }
});

// 브라우저 호환성 확인
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
        return setTimeout(callback, 1000 / 60);
    };
}

// 성능 모니터링 (개발용)
if (performance && performance.mark) {
    performance.mark('slide-controller-loaded');
}