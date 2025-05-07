// 로그아웃 알람 패널 js
const alarmBtn = document.querySelector('.alarm-button');
const logoutBtn = document.querySelector('.logout-button');
const notificationPanel = document.getElementById('notification-panel');
const userPanel = document.getElementById('user-panel');

alarmBtn.addEventListener('click', () => {
  notificationPanel.style.display = (notificationPanel.style.display === 'none') ? 'block' : 'none';
  userPanel.style.display = 'none'; // 다른 패널 끔
});

logoutBtn.addEventListener('click', () => {
  userPanel.style.display = (userPanel.style.display === 'none') ? 'block' : 'none';
  notificationPanel.style.display = 'none'; // 다른 패널 끔
});

// 바깥 클릭 시 닫기
document.addEventListener('click', (e) => {
  if (!alarmBtn.contains(e.target) && !notificationPanel.contains(e.target)) {
    notificationPanel.style.display = 'none';
  }
  if (!logoutBtn.contains(e.target) && !userPanel.contains(e.target)) {
    userPanel.style.display = 'none';
  }
});
