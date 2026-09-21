// 모바일 메뉴 열고 닫기
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// 메뉴 클릭 시 모바일 메뉴 닫기
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// 푸터에 현재 연도 표시
document.getElementById("year").textContent = new Date().getFullYear();
