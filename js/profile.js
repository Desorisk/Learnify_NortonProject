// js/profile.js

if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = './login.html';
}

document.getElementById('profileName').textContent = localStorage.getItem('userName') || 'User';
document.getElementById('profileEmail').textContent = localStorage.getItem('userEmail') || '';
document.getElementById('profileAvatar').src = localStorage.getItem('userAvatar') || './public/default-avatar.png';