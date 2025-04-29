import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Mypage from './pages/Mypage/Mypage';
import MypageMain from './pages/MypageMain/MypageMain';
import CalendarPage from './pages/Calendar/Calendar';
import Resume from './pages/Resume/resume'; // ✅ 추가해야 함

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/mypageMain" element={<MypageMain />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
