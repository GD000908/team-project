import React, { useState } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Footer from '../../components/Footer';

import './style.css';
import './profile.css';
import './applycard.css';
import './jop_card.css';

function Mypage() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);

  return (
    <>
      <Header />
      <MenuBar />
    
      <main>
        {/* 메인 전체 */}
        <div id="main">
          {/* 프로필 */}
          <div className="mypage-profile container">
            <div className="profile-header">
              <div style={{ borderRadius: "100%", backgroundColor: "#fff", width: "70px", height: "70px", marginRight: "20px" }}>
                <img src="/myimage/프로필1.png" alt="프로필" className="profile-img" />
              </div>
              <div className="profile-info">
                <div className="name-row">
                  <span className="user-name">홍길동</span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                  <span className="match-status">매칭</span>
                </div>
                <p className="sub-info">신입 ｜ oo대학교</p>
                <button className="edit-btn1" onClick={() => setIsProfileEditOpen(true)}>✏️</button>
              </div>
            </div>

            <div className="profile-box">
              <div className="box-header">희망 조건</div>
              <div className="box-content">
                <div className="info-group">
                  <label>직군 · 직무</label>
                  <span>웹 · SW 기획 외 4개</span>
                </div>
                <div className="info-group">
                  <label>근무 지역</label>
                  <span>서울특별시 외 1개</span>
                </div>
                <div className="info-group">
                  <label>연봉</label>
                  <span>2,500만원 이상</span>
                </div>
                <div className="info-group">
                  <label>기타 희망사항</label>
                  <span>-</span>
                </div>
              </div>
              <button className="edit-btn" onClick={() => setIsEditOpen(true)}>✏️</button>
            </div>
          </div>

          {/* 지원 현황 */}
          <div className="wrapper container">
            <div className="status-card">
              <div className="status-title">지원 현황</div>
              <div className="status-list">
                <div className="status-item"><div className="count">0</div><div className="label">지원 완료</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">서류 합격</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">최종 합격</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">불합격</div></div>
              </div>
            </div>

            <div className="status-card">
              <div className="status-title">나의 활동 요약</div>
              <div className="status-list">
                <div className="status-item"><div className="count">0</div><div className="label">작성한 이력서</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">완성한 자소서</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">북마크한 기업</div></div>
                <div className="status-item"><div className="count">0</div><div className="label">다가오는 마감 일정</div></div>
              </div>
            </div>
          </div>

          {/* 주목할 정보 */}
          <p className="card-title container">현재 주목 해야 할 정보</p>
          <section className="highlight-cards container">
            <a href="#" className="highlight-card" style={{ backgroundImage: "url('/myimage/ai.png')" }}>
              <div className="card-text">
                <h3>오픈AI, GPT-4.1 모델군 발표</h3>
                <p>코딩 및 복잡한 작업 성능 높여</p>
              </div>
            </a>
            <a href="#" className="highlight-card" style={{ backgroundImage: "url('/myimage/머스트.png')" }}>
              <div className="card-text">
                <h3>데이지크 상반기 채용</h3>
                <p>dasique와 함께할 당신을 기다립니다</p>
              </div>
            </a>
            <a href="#" className="highlight-card" style={{ backgroundImage: "url('/myimage/클럼엘.png')" }}>
              <div className="card-text">
                <h3>글로벌로 가는 중인데요,</h3>
                <p>자리 하나 남았어요</p>
              </div>
            </a>
          </section>

          {/* 추천 포지션 */}
          <div className="card-title container">
            <p>합격 가능성 높은 포지션</p>
          </div>
          <section className="job-cards container">
            <a href="#" className="job-card">
              <div>
                <div className="thumbnail-wrapper">
                  <img src="/myimage/머스트.png" className="job-thumbnail" alt="머스트" />
                  <span className="reward-badge">합격보상금 100만원</span>
                </div>
                <h3 className="job-title">[신입] 백엔드/서버 개발자</h3>
                <p className="job-company">머스트핀테크</p>
              </div>
            </a>

            <a href="#" className="job-card">
              <div>
                <div className="thumbnail-wrapper">
                  <img src="/myimage/카카오.png" className="job-thumbnail" alt="카카오" />
                  <span className="reward-badge">합격보상금 100만원</span>
                </div>
                <h3 className="job-title">[신입] 시스템 엔지니어</h3>
                <p className="job-company">카카오 증권</p>
              </div>
            </a>

            <a href="#" className="job-card">
              <div>
                <div className="thumbnail-wrapper">
                  <img src="/myimage/아이언메이스.png" className="job-thumbnail" alt="아이언메이스" />
                  <span className="reward-badge">합격보상금 100만원</span>
                </div>
                <h3 className="job-title">[신입] 게임 서버 개발자</h3>
                <p className="job-company">아이언메이스</p>
              </div>
            </a>
          </section>
        </div>

        {/* 패널들 */}
        <div className={`edit-panel ${isEditOpen ? 'active' : ''}`}>
          <div className="edit-content">
            <div className="edit-main">
              <h1><p>희망 조건을 확인해주세요.</p></h1>
              <h2><p>희망 조건</p></h2>
              <table className="edit-table">
                <tbody>
                  <tr><th>직군 · 직무</th><td><input type="text" placeholder="웹 · SW 기획 외 4개" /></td></tr>
                  <tr><th>근무 지역</th><td><input type="text" placeholder="서울시 강남구" /></td></tr>
                  <tr><th>연봉</th><td><input type="text" placeholder="3000만원" /></td></tr>
                  <tr><th>기타 희망사항</th><td><textarea rows="5" style={{ resize: "none" }} placeholder="기타 희망사항을 입력해주세요."></textarea></td></tr>
                </tbody>
              </table>
              <div className="btn-group">
                <button className="cancel-btn" onClick={() => setIsEditOpen(false)}>취소</button>
                <button className="save-btn">저장</button>
              </div>
            </div>
          </div>
        </div>

        <div className={`profile-edit-panel ${isProfileEditOpen ? 'active' : ''}`}>
          <div className="profile-edit-content">
            <div className="profile-edit-main">
              <h1 className="panel-title">기본 정보를 확인해 주세요.</h1>
              <p className="panel-subtitle">이름, 경력 유무, 최종학력을 입력해주세요.</p>
              <div className="profile-image-section">
                <div className="profile-image-wrapper">
                  <img src="/myimage/default-profile.png" alt="기본 프로필" />
                  <button className="camera-icon">📷</button>
                </div>
              </div>
              <table className="profile-edit-table">
                <tbody>
                  <tr><th>이름</th><td><input type="text" placeholder="홍길동" /></td></tr>
                  <tr><th>경력</th><td><input type="text" placeholder="경력/신입" /></td></tr>
                  <tr><th>학력</th><td><input type="email" placeholder="최종학력 입력" /></td></tr>
                </tbody>
              </table>
              <div className="button-bottom">
                <button className="btn-wide gray" onClick={() => setIsProfileEditOpen(false)}>취소</button>
                <button className="btn-wide blue">저장</button>
              </div>
            </div>
          </div>
        </div>

        {/* 알림/로그아웃 패널 */}
        <div id="notification-panel" className="popup-panel" style={{ display: showAlarm ? 'block' : 'none' }}>
          <div className="popup-content">
            <p>🔔 새로운 알림이 없습니다.</p>
          </div>
        </div>

        <div id="user-panel" className="popup-panel" style={{ display: showUserPanel ? 'block' : 'none' }}>
          <div className="popup-content">
            <button className="logout-action">로그아웃</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Mypage;
