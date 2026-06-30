// js/signup.js

const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');
let uploadedAvatar = null;

avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    uploadedAvatar = event.target.result; // base64 string
    avatarPreview.src = uploadedAvatar;
  };
  reader.readAsDataURL(file);
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const existing = users.find(u => u.email === email);
  if (existing) {
    alert('An account with this email already exists.');
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    avatar: uploadedAvatar || './public/default-avatar.png'
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // auto-login after signup
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userName', `${firstName} ${lastName}`);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userAvatar', newUser.avatar);

  window.location.href = './index.html';
});