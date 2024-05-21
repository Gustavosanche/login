const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

// Sample user data
const users = [
  { username: 'user1', password: 'senha' },
];

function checkUserLogin(username, password) {
  return users.some(user => user.username === username && user.password === password);
}

function displayErrorMessage(message) {
  message.textContent = 'Usuario ou senha incorretos tente novamente.';
}

function clearErrorMessage() {
  message.textContent = '';
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (checkUserLogin(username, password)) {
    window.location.href = 'index.html';
  } else {
    displayErrorMessage(message);
    setTimeout(clearErrorMessage, 3000);
  }
});