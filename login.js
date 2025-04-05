const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');
const loginForm = document.getElementById('login-form');

// Fake data for validation
const validEmail = "testexample@gmail.com";
const validPassword = "test@gmail";

// Step 1: Email and Password Validation
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === validEmail && password === validPassword) {
    // Redirect to one.html if credentials are correct
    window.location.href = "index.html";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Incorrect email or password.";
  }
});
