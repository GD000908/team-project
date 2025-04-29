import React, { useRef, useEffect } from 'react';
import Header1 from '../../components/Header1';
import Footer from '../../components/Footer';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


import './Calendar.css'; // 너가 만든 캘린더 CSS만 import



function CalendarPage() {
    const calendarRef = useRef(null);

    useEffect(() => {
        const companies = document.querySelectorAll('.company');
        let hoverSource = null;

        companies.forEach(div => {
            div.addEventListener('mouseenter', function () {
                const calendarApi = calendarRef.current.getApi();

                calendarApi.gotoDate(this.dataset.start);

                hoverSource = calendarApi.addEventSource({
                    events: [{
                        title: this.dataset.title,
                        start: this.dataset.start,
                        end: this.dataset.end,
                    }],
                    display: 'background',
                    backgroundColor: '#c5e1a5',
                });
            });

            div.addEventListener('mouseleave', function () {
                if (hoverSource) {
                    hoverSource.remove();
                    hoverSource = null;
                }
            });
        });
    }, []);

    return (
        <>
            <Header1 />

            <main className="Calendar-container">
                {/* 북마크 리스트 */}
                <div id="bookmark-list">
                    <div className="company" data-title="삼성전자" data-start="2024-04-28" data-end="2024-05-10">
                        삼성전자 : 2024-04-28 ~ 2024-05-10
                    </div>
                    <div className="company" data-title="현대자동차" data-start="2024-05-02" data-end="2024-05-14">
                        현대자동차 : 2024-05-02 ~ 2024-05-14
                    </div>
                    <div className="company" data-title="카카오" data-start="2024-05-01" data-end="2024-05-12">
                        카카오 : 2024-05-01 ~ 2024-05-12
                    </div>
                    <button id="add-bookmark" className="add-button">+ 회사 추가</button>
                </div>

                {/* 캘린더 */ }
                    < div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale="ko"
                    ref={calendarRef}
                />
            </div>

        </main >

            <Footer />
    </>
  );
}

export default CalendarPage;
