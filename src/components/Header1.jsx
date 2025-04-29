import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* 왼쪽: 로고 */}
          <div className="logo-box">
            <Link to="/" className="logo">Init.</Link>
          </div>

          {/* 가운데: 메뉴 */}
          <nav className="nav-menu">
            <Link to="/mypageMain" className="nav-item">Mypage</Link>
            <Link to="/" className="nav-item">이력서</Link>
            <Link to="/" className="nav-item">자기소개서</Link>
            <Link to="/calendar" className="nav-item">캘린더</Link>
            <Link to="/community" className="nav-item">커뮤니티</Link>
          </nav>

          {/* 오른쪽: 알림/유저 */}
          <div className="navbar-right">
            <button className="alarm-button">🔔</button>
            <button className="logout-button">👤</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
