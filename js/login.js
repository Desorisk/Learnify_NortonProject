// js/login.js

if (localStorage.getItem('isLoggedIn') === 'true') {
  window.location.href = './index.html';
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const matchedUser = users.find(u => u.email === email && u.password === password);

  if (matchedUser) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', `${matchedUser.firstName} ${matchedUser.lastName}`);
    localStorage.setItem('userEmail', matchedUser.email);
    localStorage.setItem('userAvatar', matchedUser.avatar);
    window.location.href = './index.html';
  } else {
    alert('Invalid email or password');
  }
});