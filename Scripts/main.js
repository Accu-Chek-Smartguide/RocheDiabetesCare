document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // Match this duration to the fadeOut animation duration
    }, 3000); // Adjust the timeout as needed (3000ms = 3 seconds)
});
