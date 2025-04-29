import React from 'react';
import Header1 from '../../components/Header1';

import Footer from '../../components/Footer';
import './Mypage-main.css';
 // CSS도 함께 적용

function MypageMain() {
  return (
    <>
      <Header1 />

      <main className="main-container">
        {/* 메인 타이틀 */}
        <div className="main-title">
          <h2>매칭 프로필</h2>
          <p style={{ color: 'gray' }}>나의 커리어와 스펙을 정리해 보여주는 공간입니다.</p>
        </div>

        {/* 매칭 프로필 구분박스 */}
        <div className="profile-shortcut-card">
          <div className="profile-text">
            <h3>클릭 한 번이면, 매칭 프로필 입력 끝!</h3>
            <p>내 프로필 내보내기 &gt;</p>
          </div>
          <div className="profile-image">
            <img src="/myimage/이력서.png" alt="프로필 이미지" />
          </div>
        </div>

        {/* 프로필 기본 정보 */}
        <div className="profile-section">
          <div className="user-info">
            <img src="/myimage/프로필1.png" alt="프로필 이미지" />
            <div className="user-details">
              <div><strong>박건도</strong> <span className="required">필수</span></div>
              <div>2000.09.08 ｜ 010-9590-9918 ｜ nagundo@naver.com</div>
            </div>
            <button className="edit-button">✏️</button>
          </div>
        </div>

        {/* 셀프 브랜딩 */}
        <div className="profile-section">
          <div className="section-title">
            👤 셀프 브랜딩 <span className="required">필수</span>
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">간단한 문장과 사진으로 나를 소개하세요.</div>
        </div>

        {/* 학력 */}
        <div className="profile-section">
          <div className="section-title">
            🎓 학력 <span className="required">필수</span>
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">학력정보를 적어주세요.</div>
          <div className="experience-item">
            <h4>효양고등학교</h4>
            <p>📅 2016.03 ~ 2019.02</p>
            <p>고등학교</p>
          </div>
        </div>

        {/* 경력 */}
        <div className="profile-section">
          <div className="section-title">
            💼 경력
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">직장, 인턴십, 아르바이트 등의 업무 경험을 적어주세요.</div>
        </div>

        {/* 프로젝트 */}
        <div className="profile-section">
          <div className="section-title">
            📁 프로젝트
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">참여했던 개인/팀 프로젝트를 적어주세요.</div>
        </div>

        {/* 지식/기술 */}
        <div className="profile-section">
          <div className="section-title">
            🛠️ 지식 · 기술
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">자격증, 공인 어학시험, 툴, 개발스택 등을 적어주세요.</div>
        </div>

        {/* 경험 */}
        <div className="profile-section">
          <div className="section-title">
            📌 경험
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">대내외 활동, 해외 경험, 봉사 경험 등을 적어주세요.</div>
          <div className="experience-item">
            <div className="tag">봉사 활동</div>
            <h4>자원봉사센터</h4>
            <p>📅 2022.09 ~ 2023.11</p>
            <p>매주 토요일마다 지역봉사 활동진행</p>
          </div>
        </div>

        {/* 수상내역 */}
        <div className="profile-section">
          <div className="section-title">
            💎 수상내역
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">수상명, 수상연도 등을 적어주세요.</div>
        </div>

        {/* 병역 및 우대 */}
        <div className="profile-section">
          <div className="section-title">
            🪖 병역 · 취업 우대
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">병역, 취업 우대사항을 적어주세요.</div>
        </div>

        {/* 첨부자료 */}
        <div className="profile-section">
          <div className="section-title">
            📎 첨부자료
            <button className="edit-button">✏️</button>
          </div>
          <div className="section-sub">포트폴리오, 경력기술서, URL 등을 첨부해주세요.</div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MypageMain;
