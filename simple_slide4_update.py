import os

project_path = r"C:\Users\mokka\Claude-project\Babtteok"
file_path = os.path.join(project_path, "index.html")

try:
    # 파일 읽기
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 슬라이드 4 시작과 끝 마커 찾기
    start_marker = '        <section id="slide-4" class="slide" data-slide="4">'
    end_marker = '        <!-- 슬라이드 5: 결과/성과 예측 -->'
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    if start_idx == -1 or end_idx == -1:
        print("ERROR: 슬라이드 4 마커를 찾을 수 없습니다.")
        exit(1)
    
    # 백업 생성
    backup_path = os.path.join(project_path, f"index_backup_slide4.html")
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # 새로운 슬라이드 4 내용
    new_slide4 = '''        <section id="slide-4" class="slide" data-slide="4">
            <div class="slide-content">
                <header class="slide-header">
                    <h1 class="slide-title">창업 지원 시스템</h1>
                    <p class="slide-subtitle">체계적 지원으로 성공까지 함께</p>
                </header>
                
                <div class="execution-plan">
                    <!-- 본부 지원 시스템 -->
                    <div class="support-system">
                        <h2 class="section-title">본부 지원 시스템</h2>
                        <div class="support-flow">
                            <div class="support-step" data-step="1">
                                <div class="support-icon">📍</div>
                                <h3>입지 컨설팅</h3>
                                <p>상권 분석 및 최적 입지 선정</p>
                                <ul>
                                    <li>유동인구 분석</li>
                                    <li>경쟁사 현황 조사</li>
                                    <li>임대료 협상 지원</li>
                                </ul>
                            </div>
                            <div class="support-arrow">→</div>
                            <div class="support-step" data-step="2">
                                <div class="support-icon">🎨</div>
                                <h3>인테리어 설계</h3>
                                <p>브랜드 아이덴티티 적용 설계</p>
                                <ul>
                                    <li>3D 도면 제작</li>
                                    <li>시공업체 연결</li>
                                    <li>품질 관리 지원</li>
                                </ul>
                            </div>
                            <div class="support-arrow">→</div>
                            <div class="support-step" data-step="3">
                                <div class="support-icon">📚</div>
                                <h3>운영 교육</h3>
                                <p>실무 중심 체계적 교육</p>
                                <ul>
                                    <li>메뉴 조리법 교육</li>
                                    <li>매장 운영 매뉴얼</li>
                                    <li>마케팅 전략 공유</li>
                                </ul>
                            </div>
                            <div class="support-arrow">→</div>
                            <div class="support-step" data-step="4">
                                <div class="support-icon">📈</div>
                                <h3>지속 지원</h3>
                                <p>오픈 후 안정적 성장 지원</p>
                                <ul>
                                    <li>매출 분석 및 컨설팅</li>
                                    <li>신메뉴 개발 지원</li>
                                    <li>온라인 마케팅 지원</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 수익률 시뮬레이션 -->
                    <div class="revenue-simulation">
                        <h2 class="section-title">수익률 시뮬레이션</h2>
                        <div class="simulation-container">
                            <div class="simulation-controls">
                                <div class="input-group">
                                    <label>월 평균 매출</label>
                                    <select id="monthly-sales">
                                        <option value="4000">4,000만원</option>
                                        <option value="5000">5,000만원</option>
                                        <option value="6000" selected>6,000만원</option>
                                        <option value="7000">7,000만원</option>
                                        <option value="8000">8,000만원</option>
                                    </select>
                                </div>
                                <div class="input-group">
                                    <label>운영 기간</label>
                                    <select id="operation-period">
                                        <option value="1">1년</option>
                                        <option value="2">2년</option>
                                        <option value="3" selected>3년</option>
                                        <option value="5">5년</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="simulation-results">
                                <div class="result-item">
                                    <h3>월 순익</h3>
                                    <p class="result-value" id="monthly-profit">1,300만원</p>
                                    <span class="result-detail">순익률 21.7%</span>
                                </div>
                                <div class="result-item">
                                    <h3>연간 순익</h3>
                                    <p class="result-value" id="annual-profit">1억 5,600만원</p>
                                    <span class="result-detail">투자금 대비 195%</span>
                                </div>
                                <div class="result-item highlight">
                                    <h3>투자 회수 기간</h3>
                                    <p class="result-value" id="roi-period">1년 8개월</p>
                                    <span class="result-detail">업계 평균 3년 대비 단축</span>
                                </div>
                                <div class="result-item">
                                    <h3>누적 수익</h3>
                                    <p class="result-value" id="cumulative-profit">4억 6,800만원</p>
                                    <span class="result-detail">3년 운영 기준</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="profit-chart">
                            <canvas id="profitChart" width="800" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        '''
    
    # 내용 교체
    new_content = content[:start_idx] + new_slide4 + content[end_idx:]
    
    # 파일 저장
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("SUCCESS: 슬라이드 4 축소 완료!")
    
except Exception as e:
    print(f"ERROR: {e}")
