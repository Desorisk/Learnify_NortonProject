// ---- Team data + render (2-column grid) ----
  const socialIconsAbout = {
    telegram: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M21 4.5 3 11l6 2.3M21 4.5 14.7 20l-5.7-6.7M21 4.5 9 13.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6"/></svg>',
    facebook: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M13.5 21v-7h2.3l.4-3H13.5V9c0-.9.2-1.5 1.6-1.5h1.7V4.8C16.5 4.7 15.5 4.6 14.3 4.6c-2.5 0-4.3 1.5-4.3 4.3V11H7.7v3h2.3v7h3.5Z" fill="currentColor"/></svg>'
  };
 
  const teamMembersAbout = [
    { name: "Loeun Vandeth",   role: "Leader, Frontend Developer", img: "./public/page/homepage/vandeth.png", bg: "var(--green)" },
    { name: "Boeun Soama",  role: "Member, Frontend Developer",     img: "./public/page/homepage/soama.JPG", bg: "var(--green-dark)" },
    { name: "Chan Narin",role: "Member, Frontend Developer",     img: "./public/page/homepage/narin.jpg", bg: "var(--green)" },
    { name: "Moeun Senghour",     role: "Member, Frontend Developer",      img: "./public/page/homepage/senghour.jpg", bg: "var(--green-dark)" },
  ];
 
  function renderTeamAbout() {
    const grid = document.getElementById("teamGrid-about");
    grid.innerHTML = teamMembersAbout.map(m => `
      <div class="member-card-about">
        <div class="menber-avatar-about" style="background:${m.bg};">
          <img src=${m.img} alt="">
        </div>
        <h4>${m.name}</h4>
        <span class="role-about">${m.role}</span>
        <div class="social-row-about">
          <a class="social-dot-about" href="#">${socialIconsAbout.telegram}</a>
          <a class="social-dot-about" href="#">${socialIconsAbout.github}</a>
          <a class="social-dot-about" href="#">${socialIconsAbout.facebook}</a>
        </div>
      </div>
    `).join("");
  }
  renderTeamAbout();
 
  // ---- Simple light/dark theme toggle ----
  const themeToggleAbout = document.getElementById("themeToggle-about");
  themeToggleAbout.addEventListener("click", () => {
    document.querySelector(".page-about").classList.toggle("dark-mode-about");
  });