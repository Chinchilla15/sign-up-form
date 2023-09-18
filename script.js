const passwordInput = document.getElementById('passwd');
const confirmPasswordInput = document.getElementById('passwd2');
const passwordMatchMessage = document.getElementById('passwordMatch');

function checkPasswordMatch(){
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if(password === confirmPassword){
        passwordMatchMessage.textContent = '';
        passwordInput.style.borderColor = 'var(--input-focus-color)';
        confirmPasswordInput.style.borderColor = 'var(--input-focus-color)';
    }else{
        passwordMatchMessage.textContent = "*Passwords do not match";
        passwordInput.style.borderColor = 'var(--color-error-text)';
        confirmPasswordInput.style.borderColor = 'var(--color-error-text)';
    }
}
passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);