
const panel = document.getElementById("editPanel");
const content = panel.querySelector(".edit-content");
const cancelBtn = document.querySelector(".cancel-btn");

// 에딧 버튼에 대한 기능들. 프로필 편집 부분.
// 열기
document.querySelector(".edit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    panel.classList.add("active");
});

// 닫기 (배경 클릭 시)
document.addEventListener("click", function (e) {
    const clickedOutside = !content.contains(e.target) && !e.target.closest(".edit-btn");
    if (panel.classList.contains("active") && clickedOutside) {
        closePanel();
    }
});

// 닫기 버튼 클릭 시
cancelBtn.addEventListener("click", function () {
    closePanel();
});

// 닫기 동작 함수
function closePanel() {
    content.style.transform = "translateX(100%)";
    setTimeout(() => {
        panel.classList.remove("active");
        content.style.transform = "";
    }, 400);
}


// 사진들어가는 프로필 편집 버튼에 대한 js
// 프로필 편집 패널 요소
const profilePanel = document.getElementById("profileEditPanel");
const profileContent = profilePanel.querySelector(".profile-edit-content");
const cancelBtnProfile = document.querySelector(".btn-wide.gray");


// 열기 - 프로필 수정 버튼
document.querySelector(".edit-btn1").addEventListener("click", function (e) {
  e.preventDefault();
  profilePanel.classList.add("active");
});

// 닫기 - 배경 클릭 시
document.addEventListener("click", function (e) {
  const clickedOutsideProfile = !profileContent.contains(e.target) && !e.target.closest(".edit-btn1");
  if (profilePanel.classList.contains("active") && clickedOutsideProfile) {
    closeProfilePanel();
  }
});


// 닫기 버튼 클릭 시 - 프로필 패널
cancelBtnProfile.addEventListener("click", function () {
  closeProfilePanel();
});
// 닫기 버튼 클릭 시

// 닫기 동작 함수
function closeProfilePanel() {
  profileContent.style.transform = "translateX(100%)";
  setTimeout(() => {
    profilePanel.classList.remove("active");
    profileContent.style.transform = "";
  }, 400);
}



