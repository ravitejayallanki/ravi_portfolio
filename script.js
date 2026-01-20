/* ===============================
   SIDEBAR TOGGLE (MOBILE)
================================ */

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => {
  sidebar.classList.toggle("active");
};


/* ===============================
   THEME TOGGLE (DARK / LIGHT)
================================ */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");

  // Icon toggle
  if (document.body.classList.contains("light")) {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
  } else {
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
  }
};


/* ===============================
   PROJECT LOGIC
   - Auto enable live demo
   - GitHub link setup
   - Modal popup for live demo
   - Click tracking
================================ */

const projectCards = document.querySelectorAll(".card[data-github]");

/* Create Modal */
const modal = document.createElement("div");
modal.className = "modal";
modal.innerHTML = `<iframe loading="lazy"></iframe>`;
document.body.appendChild(modal);

/* Close modal on outside click */
modal.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.querySelector("iframe").src = "";
});

projectCards.forEach(card => {
  const liveURL = card.dataset.live;
  const githubRepo = card.dataset.github;

  const liveBtn = card.querySelector(".live-btn");
  const githubBtn = card.querySelector(".github-btn");

  /* GitHub Button Setup */
  if (githubRepo && githubBtn) {
    githubBtn.href = `https://github.com/${githubRepo}`;
    githubBtn.addEventListener("click", () => {
      console.log("GitHub clicked:", githubRepo);
    });
  }

  /* Live Demo Button Logic */
  if (!liveURL) {
    liveBtn.classList.add("disabled");
  } else {
    liveBtn.addEventListener("click", () => {
      modal.classList.add("active");
      modal.querySelector("iframe").src = liveURL;

      console.log("Live demo opened:", liveURL);
    });
  }
});


/* ===============================
   UX POLISH (OPTIONAL)
   - Close sidebar on nav click (mobile)
================================ */

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove("active");
    }
  });
});
