document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
        }, 1000); // Correspond à la durée de la transition (1 seconde)
    }, 5000); // Durée du splash screen en millisecondes (ici 3 secondes)
});
