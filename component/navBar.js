const show_Navbar = `
<nav class="navbar">
  <div class="logo">
    <div class="logo-icon"><svg class="icon" viewBox="0 0 24 24"><path d="M22 9 12 5 2 9l10 4 10-4Z"/><path d="M6 10.6V16c0 1 2.7 3 6 3s6-2 6-3v-5.4"/><path d="M22 9v6"/></svg></div>
    <span class="logo-text">Edura</span>
  </div>

  <ul class="nav-menu">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">Course</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
  </ul>

  <div class="nav-right">
    <div class="search-box">
      <svg class="icon" viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" placeholder="Search" aria-label="Search">
    </div>
    <button class="login-btn">Log in</button>

    <button class="menu-toggle" aria-label="Open menu" onclick="openDrawer()">
      <svg class="icon" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</nav>

<!-- Off-canvas drawer -->
<div class="offcanvas-backdrop" id="backdrop" onclick="closeDrawer()"></div>
<aside class="offcanvas-drawer" id="drawer">
  <div class="offcanvas-header">
    <div class="logo">
      <div class="logo-icon"><svg class="icon" viewBox="0 0 24 24"><path d="M22 9 12 5 2 9l10 4 10-4Z"/><path d="M6 10.6V16c0 1 2.7 3 6 3s6-2 6-3v-5.4"/><path d="M22 9v6"/></svg></div>
      <span class="logo-text">Edura</span>
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
      <li><a href="#" class="active"><svg class="icon" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7"/><path d="M9 22V12h6v10"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>Home</a></li>
      <li><a href="#"><svg class="icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>Course</a></li>
      <li><a href="#"><svg class="icon" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>Blog</a></li>
      <li><a href="#"><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>About</a></li>
    </ul>
  </div>

  <div class="offcanvas-footer">
    <button class="offcanvas-login-btn">Log in</button>
  </div>
</aside>
`
document.getElementById("navigetion_bar").innerHTML=show_Navbar;

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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });