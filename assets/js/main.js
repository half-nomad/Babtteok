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

/* =============================================================================
   CTA 기능 함수들 (슬라이드 6)
   ============================================================================= */

// 창업 상담 신청 모달
function openConsultationForm() {
    // 간단한 상담 신청 폼 모달 생성
    const modal = document.createElement('div');
    modal.className = 'consultation-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeConsultationModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h3>창업 상담 신청</h3>
                    <button class="modal-close" onclick="closeConsultationModal()">×</button>
                </div>
                <div class="modal-body">
                    <form id="consultationForm" onsubmit="submitConsultation(event)">
                        <div class="form-group">
                            <label for="name">성함 *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">연락처 *</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="email">이메일</label>
                            <input type="email" id="email" name="email">
                        </div>
                        <div class="form-group">
                            <label for="location">희망 창업 지역</label>
                            <select id="location" name="location">
                                <option value="">선택해주세요</option>
                                <option value="서울">서울특별시</option>
                                <option value="경기">경기도</option>
                                <option value="인천">인천광역시</option>
                                <option value="부산">부산광역시</option>
                                <option value="기타">기타 지역</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="budget">창업 예산</label>
                            <select id="budget" name="budget">
                                <option value="">선택해주세요</option>
                                <option value="8000만원 이하">8,000만원 이하</option>
                                <option value="8000-1억">8,000만원 ~ 1억원</option>
                                <option value="1억-1.5억">1억원 ~ 1.5억원</option>
                                <option value="1.5억 이상">1.5억원 이상</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">문의사항</label>
                            <textarea id="message" name="message" rows="3" placeholder="궁금한 점이나 상담받고 싶은 내용을 자유롭게 적어주세요."></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn-cancel" onclick="closeConsultationModal()">취소</button>
                            <button type="submit" class="btn-submit">상담 신청하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // 모달 스타일 추가
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .consultation-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }
        .modal-content {
            position: relative;
            background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .modal-header h3 {
            color: white;
            margin: 0;
            font-size: 1.4rem;
            font-weight: 600;
        }
        .modal-close {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.7);
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            transition: color 0.3s ease;
        }
        .modal-close:hover {
            color: white;
        }
        .modal-body {
            padding: 30px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 8px;
            font-weight: 500;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #673AB7;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 0 0 3px rgba(103, 58, 183, 0.2);
        }
        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }
        .form-actions {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }
        .btn-cancel,
        .btn-submit {
            flex: 1;
            padding: 15px 25px;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-cancel {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-cancel:hover {
            background: rgba(255, 255, 255, 0.15);
            color: white;
        }
        .btn-submit {
            background: linear-gradient(135deg, #673AB7, #9C27B0);
            color: white;
            box-shadow: 0 4px 15px rgba(103, 58, 183, 0.3);
        }
        .btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(103, 58, 183, 0.4);
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    
    // 애니메이션 효과
    requestAnimationFrame(() => {
        modal.style.animation = 'fadeIn 0.3s ease';
        modal.querySelector('.modal-content').style.animation = 'slideUp 0.3s ease';
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', handleModalEscape);
}

// 상담 모달 닫기
function closeConsultationModal() {
    const modal = document.querySelector('.consultation-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            document.removeEventListener('keydown', handleModalEscape);
        }, 300);
    }
}

// ESC 키 핸들러
function handleModalEscape(e) {
    if (e.key === 'Escape') {
        closeConsultationModal();
    }
}

// 상담 신청 제출
function submitConsultation(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        location: formData.get('location'),
        budget: formData.get('budget'),
        message: formData.get('message')
    };
    
    // 실제로는 서버로 전송
    console.log('상담 신청 데이터:', data);
    
    // 성공 메시지 표시
    showSuccessMessage('상담 신청이 완료되었습니다! 영업일 기준 24시간 내에 연락드리겠습니다.');
    
    // 모달 닫기
    closeConsultationModal();
}

// 사업계획서 다운로드
function downloadBusinessPlan() {
    // 실제로는 PDF 파일 다운로드
    const link = document.createElement('a');
    link.href = '#'; // 실제 PDF 파일 경로
    link.download = '밥떡한끼_사업계획서.pdf';
    
    showSuccessMessage('사업계획서 다운로드가 시작됩니다.');
    
    // 실제 다운로드는 주석 처리 (개발 단계)
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// 성공 메시지 표시
function showSuccessMessage(message) {
    const successToast = document.createElement('div');
    successToast.className = 'success-toast';
    successToast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">✅</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    // 토스트 스타일
    const toastStyle = document.createElement('style');
    toastStyle.textContent = `
        .success-toast {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
        }
        .toast-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .toast-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
        }
        .toast-message {
            font-weight: 500;
            line-height: 1.4;
        }
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(toastStyle);
    document.body.appendChild(successToast);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        successToast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            successToast.remove();
            toastStyle.remove();
        }, 300);
    }, 3000);
}

// 카운트다운 타이머 (데모용)
function initCountdownTimer() {
    const countdownElements = {
        days: document.querySelector('.countdown-number'),
        hours: document.querySelectorAll('.countdown-number')[1],
        minutes: document.querySelectorAll('.countdown-number')[2]
    };
    
    if (!countdownElements.days) return;
    
    // 15일 후를 목표로 설정
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            
            if (countdownElements.days) countdownElements.days.textContent = String(days).padStart(2, '0');
            if (countdownElements.hours) countdownElements.hours.textContent = String(hours).padStart(2, '0');
            if (countdownElements.minutes) countdownElements.minutes.textContent = String(minutes).padStart(2, '0');
        }
    }
    
    // 매분마다 업데이트
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// 페이지 로드 시 카운트다운 초기화
document.addEventListener('DOMContentLoaded', () => {
    initCountdownTimer();
});
