// components/navBar.js

function getNavRightHTML() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName') || 'User';
  const userEmail = localStorage.getItem('userEmail') || '';
  const userAvatar = localStorage.getItem('userAvatar') || './public/default-avatar.png';

  if (isLoggedIn) {
    return `
      <div class="profile-menu">
        <button class="profile-btn" onclick="toggleProfileMenu()">
          <img src="${userAvatar}" alt="profile" class="profile-avatar">
        </button>
        <div class="profile-dropdown" id="profileDropdown">
          <button class="profile-dropdown-close" onclick="toggleProfileMenu()">✖</button>
          <img src="${userAvatar}" alt="profile" class="profile-dropdown-avatar" id="dropdownAvatarImg">
          <h3 class="profile-dropdown-name">${userName}</h3>
          <p class="profile-dropdown-email">${userEmail}</p>

          <label class="profile-change-photo-btn">
            Change photo
            <input type="file" id="avatarFileInput" accept="image/*" hidden>
          </label>

          <button class="profile-dropdown-logout" onclick="logout()">Log out</button>
        </div>
      </div>`;
  } else {
    return `<button class="login-btn" onclick="window.location.href='./login.html'">Log in</button>`;
  }
}

const show_Navbar = `
<nav class="navbar">
  <div class="logo">
    <div class="logo-icon"><img src="./public/Leanify logo white bg.png" alt="logo"></div>
    <span class="logo-text">Leanify Education</span>
  </div>

  <ul class="nav-menu">
    <li><a href="./index.html" class="active">Home</a></li>
    <li><a href="./course_list.html">Course</a></li>
    <li><a href="./blog.html">Blog</a></li>
    <li><a href="./about_us.html">About</a></li>
  </ul>

  <div class="nav-right">
    <div class="search-box">
      <svg class="icon" viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" placeholder="Search" aria-label="Search">
    </div>
    ${getNavRightHTML()}
    <button class="menu-toggle" aria-label="Open menu" onclick="openDrawer()">
      <svg class="icon" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</nav>

<div class="offcanvas-backdrop" id="backdrop" onclick="closeDrawer()"></div>
<aside class="offcanvas-drawer" id="drawer">
  <div class="offcanvas-header">
    <div class="logo">
      <div class="logo-icon"><img src="./public/Leanify logo (1).png" alt="logo"></div>
      <span class="logo-text">Leanify Education</span>
    </div>
    <button class="offcanvas-close" aria-label="Close menu" onclick="closeDrawer()">
      <svg class="icon" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>

  <div class="offcanvas-body">
    <div class="offcanvas-search">
      <svg class="icon" viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" placeholder="Search" aria-label="Search">
    </div>

    <ul class="offcanvas-menu">
      <li><a href="./index.html" class="active"><svg class="icon" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7"/><path d="M9 22V12h6v10"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>Home</a></li>
      <li><a href="./course_list.html"><svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>Course</a></li>
      <li><a href="./blog.html"><svg class="icon" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>Blog</a></li>
      <li><a href="./about_us.html"><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>About</a></li>
    </ul>
  </div>

  <div class="offcanvas-footer">
    ${localStorage.getItem('isLoggedIn') === 'true'
      ? `<button class="offcanvas-login-btn" onclick="logout()">Log out</button>`
      : `<button class="offcanvas-login-btn" onclick="window.location.href='./login.html'">Log in</button>`}
  </div>
</aside>
`;

document.getElementById("navigetion_bar").innerHTML = show_Navbar;

const backdrop = document.getElementById('backdrop');
const drawer = document.getElementById('drawer');

function openDrawer() {
  backdrop.classList.add('open');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  backdrop.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

function toggleProfileMenu() {
  document.getElementById('profileDropdown').classList.toggle('open');
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  window.location.reload();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

document.addEventListener('click', (e) => {
  const menu = document.querySelector('.profile-menu');
  if (menu && !menu.contains(e.target)) {
    document.getElementById('profileDropdown')?.classList.remove('open');
  }
});

// Handle profile photo change
document.addEventListener('change', function (e) {
  if (e.target && e.target.id === 'avatarFileInput') {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const newAvatar = event.target.result;
      localStorage.setItem('userAvatar', newAvatar);
      location.reload();
    };
    reader.readAsDataURL(file);
  }
});