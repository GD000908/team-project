import React from 'react';
import { Link } from 'react-router-dom'; // ✅ 추가

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo-box">
            {/* 여기 수정! */}
            <span className="logo">
              <Link to="/" className="logo">Init.</Link>
            </span>
          </div>

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
