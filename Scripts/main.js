document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            // Trigger the animation start event after splash screen is hidden
            const animatedModel = document.querySelector('.animated-model');
            animatedModel.emit('model-loaded');
        }, 1000); // Correspond à la durée de la transition (1 seconde)
    }, 3000); // Durée du splash screen en millisecondes (ici 3 secondes)
});
