window.onload = function() {
    const logo = document.getElementById('logo');
    const logoContainer = document.getElementById('logo-container');
    const whiteScreen = document.getElementById('white-screen');
    const arContainer = document.getElementById('ar-container');

    // Fade out the logo
    setTimeout(() => {
        logo.style.transition = 'opacity 5s';
        logo.style.opacity = 0;
    }, 1000);

    // Fade out the white screen
    setTimeout(() => {
        logoContainer.style.display = 'none';
        whiteScreen.style.transition = 'opacity 8s';
        whiteScreen.style.opacity = 0;
    }, 3000);

    // Show the AR container
    setTimeout(() => {
        whiteScreen.style.display = 'none';
        arContainer.style.display = 'block';
    }, 5000);
}
