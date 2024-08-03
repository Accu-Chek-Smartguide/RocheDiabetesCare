// script.js
document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.querySelector('.splash-screen');

    // Remove splash screen after animation
    splashScreen.addEventListener('animationend', (event) => {
        if (event.animationName === 'fadeOut') {
            splashScreen.style.display = 'none';
        }
    });
});
