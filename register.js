document.querySelector('.register-btn').addEventListener('click', validateForm);

function validateForm() {
    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const successMessage = document.getElementById('successMessage');

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
        isValid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If valid, display success message and log user data
    if (isValid) {
        successMessage.textContent = 'Registration successful!';

        // Store user data
        const userData = {
            fullName: name,
            email: email,
            password: password
        };

        console.log('User Data:', userData);

        // Optionally redirect to another page after successful registration
        setTimeout(() => {
            window.location.href = 'index.html'; // Change this URL as needed
        }, 2000); // Redirect after 2 seconds
    }
}
