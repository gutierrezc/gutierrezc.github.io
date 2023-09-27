const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const registerForm = document.querySelector('.form-box.register');


const loginForm = document.querySelector('.form-box.login');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    registerForm.style.transform = 'translateX(0)';
    loginForm.style.transform = 'translateX(400px)'; 
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    registerForm.style.transform = 'translateX(400px)';
    loginForm.style.transform = 'translateX(0)'; 
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
