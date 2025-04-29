import React from 'react';
import Header1 from '../../components/Header1'; // 메뉴 있는 헤더
import Footer from '../../components/Footer';
import './resume.css'; // CSS 파일 import


function Resume() {
    return (
        <>
            <Header1 />

            <form className="resume-form">
                <div className="form-group">
                    <label>이름</label>
                    <input type="text" placeholder="홍길동" />
                </div>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" placeholder="example@email.com" />
                </div>

                <div className="form-group">
                    <label>전화번호</label>
                    <input type="tel" placeholder="010-1234-5678" />
                </div>

                <div className="form-group">
                    <label>학력</label>
                    <input type="text" placeholder="세종대학교 전자정보통신공학과" />
                </div>

                <div className="form-group">
                    <label>경력</label>
                    <textarea placeholder="예: 삼성전자 인턴 - 2024.07~2024.08" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-button">제출</button>
            </form>


            <Footer />
        </>
    );
}

export default Resume;
