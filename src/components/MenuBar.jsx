import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <div className="menu-bar">
      <Link to="/mypageMain" className="menu-item">
        <div className="emoji">🧑‍💻</div>
        <span>MyPage</span>
      </Link>

      <Link to="/resume" className="menu-item">
        <div className="emoji">📄</div>
        <span>이력서 관리</span>
      </Link>

      <Link to="/junyoung" className="menu-item">
        <div className="emoji">✍️</div>
        <span>자기소개서</span>
      </Link>

      <Link to="/calendar" className="menu-item">
        <div className="emoji">🗓️</div>
        <span>공고 캘린더</span>
      </Link>

      {/* 커뮤니티는 아직 페이지 없으면 그냥 Link 없이 남겨도 됨 */}
      <div className="menu-item">
        <div className="emoji">💬</div>
        <span>커뮤니티</span>
      </div>
    </div>
  );
}

export default MenuBar;
