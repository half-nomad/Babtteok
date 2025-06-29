/**
 * 밥떡한끼 슬라이드 시스템
 * 바닐라 JavaScript로 구현된 프레젠테이션 시스템
 */

class BabtteokSlides {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 6;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.slideCounter = document.querySelector('.current-slide');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startAnimations();
        this.updateUI();
        
        // 키보드 네비게이션
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'Home') this.goToSlide(1);
            if (e.key === 'End') this.goToSlide(this.totalSlides);
        });
        
        // 터치 제스처 지원
        this.setupTouchGestures();
        
        console.log('밥떡한끼 슬라이드 시스템 초기화 완료');
    }
    
    setupEventListeners() {
        // 네비게이션 버튼
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // 인디케이터가 있다면 이벤트 등록
        if (this.indicators.length > 0) {
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index + 1));
            });
        }
        
        // 휠 이벤트 (부드러운 슬라이드 전환)
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            if (wheelTimeout) return;
            
            if (e.deltaY > 0) {
                this.nextSlide();
            } else if (e.deltaY < 0) {
                this.previousSlide();
            }
            
            wheelTimeout = setTimeout(() => {
                wheelTimeout = null;
            }, 1000);
        }, { passive: true });
    }
    
    setupTouchGestures() {
        let startX, startY, endX, endY;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = startY - endY;
            
            // 수평 스와이프가 수직 스와이프보다 클 때만 슬라이드 전환
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
            
            startX = startY = endX = endY = null;
        }, { passive: true });
    }
    
    goToSlide(slideNumber) {
        if (slideNumber < 1 || slideNumber > this.totalSlides) return;
        if (slideNumber === this.currentSlide) return;
        
        // 현재 슬라이드 숨기기
        this.slides[this.currentSlide - 1].classList.remove('active');
        if (this.indicators.length > 0) {
            this.indicators[this.currentSlide - 1].classList.remove('active');
        }
        
        // 새 슬라이드 표시
        this.currentSlide = slideNumber;
        this.slides[this.currentSlide - 1].classList.add('active');
        if (this.indicators.length > 0) {
            this.indicators[this.currentSlide - 1].classList.add('active');
        }
        
        this.updateUI();
        this.startAnimations();
        
        // 접근성: 스크린 리더에 변경 알림
        this.announceSlideChange();
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }
    
    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }
    
    updateUI() {
        // 슬라이드 카운터 업데이트
        if (this.slideCounter) {
            this.slideCounter.textContent = this.currentSlide.toString().padStart(2, '0');
        }
        
        // 네비게이션 버튼 상태
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 1;
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentSlide === this.totalSlides;
        }
        
        // URL 해시 업데이트 (브라우저 히스토리)
        history.replaceState(null, null, `#slide-${this.currentSlide}`);
    }
    
    startAnimations() {
        const currentSlideElement = this.slides[this.currentSlide - 1];
        
        // 차트 애니메이션 시작
        if (this.currentSlide === 1) {
            this.animateFailureChart();
            this.animateStatCards();
        } else if (this.currentSlide === 2) {
            this.animatePieChart();
            this.animateROIChart();
        }
        
        // 카드 호버 효과 강화
        this.enhanceCardAnimations(currentSlideElement);
    }
    
    animateFailureChart() {
        const bars = document.querySelectorAll('.bar-item');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'translateX(0)';
                bar.style.opacity = '1';
            }, index * 200);
        });
    }
    
    animateStatCards() {
        const cards = document.querySelectorAll('.stat-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.opacity = '1';
                
                // 숫자 카운트업 애니메이션
                const number = card.querySelector('.stat-number');
                if (number) {
                    const finalValue = number.textContent;
                    const isNegative = finalValue.includes('-');
                    const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
                    
                    if (!isNaN(numericValue)) {
                        this.countUp(number, 0, numericValue, 1000, isNegative ? '-' : '+', '%');
                    }
                }
            }, index * 300);
        });
    }
    
    animatePieChart() {
        const pieChart = document.querySelector('.pie-chart');
        if (pieChart) {
            pieChart.style.transform = 'scale(1) rotate(0deg)';
            pieChart.style.opacity = '1';
        }
        
        const legendItems = document.querySelectorAll('.legend-item');
        legendItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            }, index * 150);
        });
    }
    
    animateROIChart() {
        const monthBars = document.querySelectorAll('.month-bar');
        monthBars.forEach((bar, index) => {
            setTimeout(() => {
                const fill = bar.querySelector('.month-fill');
                if (fill && bar.dataset.value) {
                    const value = Math.abs(parseInt(bar.dataset.value));
                    const maxValue = 2800;
                    const height = (value / maxValue) * 120; // 최대 높이 120px
                    
                    fill.style.height = `${height}px`;
                }
            }, index * 200);
        });
        
        // 손익분기점 라인 애니메이션
        setTimeout(() => {
            const breakEvenLine = document.querySelector('.breakeven-line');
            if (breakEvenLine) {
                breakEvenLine.style.transform = 'translateY(-50%) scaleX(1)';
            }
        }, 1200);
    }
    
    countUp(element, start, end, duration, prefix = '', suffix = '') {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutCubic 이징 함수
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * easedProgress);
            
            element.textContent = `${prefix}${current}${suffix}`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    enhanceCardAnimations(slideElement) {
        const cards = slideElement.querySelectorAll('.problem-item, .highlight-card, .stat-card');
        
        cards.forEach((card, index) => {
            // 초기 상태 설정
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            
            // 순차적 애니메이션
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    announceSlideChange() {
        const slideTitle = this.slides[this.currentSlide - 1].querySelector('.slide-title');
        if (slideTitle) {
            // 스크린 리더용 알림
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.style.position = 'absolute';
            announcement.style.left = '-10000px';
            announcement.textContent = `슬라이드 ${this.currentSlide}: ${slideTitle.textContent}`;
            
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }
    }
    
    // 자동 재생 기능 (선택적)
    startAutoPlay(interval = 10000) {
        this.autoPlayInterval = setInterval(() => {
            if (this.currentSlide < this.totalSlides) {
                this.nextSlide();
            } else {
                this.goToSlide(1); // 첫 슬라이드로 돌아가기
            }
        }, interval);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    // 전체화면 토글
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                document.body.classList.add('fullscreen');
            });
        } else {
            document.exitFullscreen().then(() => {
                document.body.classList.remove('fullscreen');
            });
        }
    }
}

// ROI 계산기 클래스
class ROICalculator {
    constructor() {
        this.investmentInput = document.getElementById('investment-input');
        this.revenueInput = document.getElementById('revenue-input');
        this.costInput = document.getElementById('cost-input');
        this.resultDisplay = document.getElementById('roi-result');
        
        this.setupCalculator();
    }
    
    setupCalculator() {
        if (!this.investmentInput || !this.revenueInput || !this.costInput) return;
        
        // 실시간 계산을 위한 이벤트 리스너
        [this.investmentInput, this.revenueInput, this.costInput].forEach(input => {
            input.addEventListener('input', () => this.calculateROI());
        });
    }
    
    calculateROI() {
        const investment = parseInt(this.investmentInput.value) || 80000000; // 기본값 8천만원
        const monthlyRevenue = parseInt(this.revenueInput.value) || 60000000; // 기본값 6천만원
        const monthlyCost = parseInt(this.costInput.value) || 47000000; // 기본값 4천 7백만원
        
        const monthlyProfit = monthlyRevenue - monthlyCost;
        const annualProfit = monthlyProfit * 12;
        const paybackPeriod = investment / monthlyProfit;
        const roiPercent = (annualProfit / investment) * 100;
        
        this.displayResults({
            monthlyProfit,
            annualProfit,
            paybackPeriod,
            roiPercent
        });
    }
    
    displayResults(results) {
        if (!this.resultDisplay) return;
        
        this.resultDisplay.innerHTML = `
            <div class="roi-item">
                <span class="roi-label">월 순익</span>
                <span class="roi-value">${results.monthlyProfit.toLocaleString()}원</span>
            </div>
            <div class="roi-item">
                <span class="roi-label">연 순익</span>
                <span class="roi-value">${results.annualProfit.toLocaleString()}원</span>
            </div>
            <div class="roi-item">
                <span class="roi-label">투자회수</span>
                <span class="roi-value">${results.paybackPeriod.toFixed(1)}개월</span>
            </div>
            <div class="roi-item highlight">
                <span class="roi-label">연간 ROI</span>
                <span class="roi-value">${results.roiPercent.toFixed(1)}%</span>
            </div>
        `;
    }
}

// 전역 함수들 (HTML에서 직접 호출)
let slideSystem;
let roiCalculator;

function nextSlide() {
    if (slideSystem) slideSystem.nextSlide();
}

function previousSlide() {
    if (slideSystem) slideSystem.previousSlide();
}

function goToSlide(slideNumber) {
    if (slideSystem) slideSystem.goToSlide(slideNumber);
}

// 상담 신청 모달 함수
function openConsultModal() {
    const modal = document.getElementById('consult-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeConsultModal() {
    const modal = document.getElementById('consult-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    const modal = document.getElementById('consult-modal');
    if (modal && e.target === modal) {
        closeConsultModal();
    }
});

// DOM이 로드되면 슬라이드 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
    slideSystem = new BabtteokSlides();
    roiCalculator = new ROICalculator();
    
    // URL 해시가 있으면 해당 슬라이드로 이동
    const hash = window.location.hash;
    if (hash.startsWith('#slide-')) {
        const slideNumber = parseInt(hash.replace('#slide-', ''));
        if (slideNumber >= 1 && slideNumber <= 6) {
            slideSystem.goToSlide(slideNumber);
        }
    }
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeConsultModal();
        }
    });
    
    console.log('밥떡한끼 시스템 전체 초기화 완료');
});