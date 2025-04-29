import { Link } from 'react-router-dom'; // 맨 위에 추가

function MenuBar() {
  return (
    <div className="menu-bar">
      <Link to="/mypageMain" className="menu-item">
        <div className="emoji">🧑‍💻</div>
        <span>MyPage</span>
      </Link>

      <div className="menu-item">
        <div className="emoji">📄</div>
        <span>이력서 관리</span>
      </div>

      <Link to="/junyoung" className="menu-item">
        <div className="emoji">✍️</div>
        <span>자기소개서</span>
      </Link>

      {/* 여기! 공고 캘린더 */}
      <Link to="/calendar" className="menu-item">
        <div className="emoji">🗓️</div>
        <span>공고 캘린더</span>
      </Link>

      <div className="menu-item">
        <div className="emoji">💬</div>
        <span>커뮤니티</span>
      </div>
    </div>
  );
}

export default MenuBar;
