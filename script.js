// Sidebar toggle
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => {
  sidebar.classList.toggle("active");
};

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  themeBtn.classList.toggle("fa-sun");
};
