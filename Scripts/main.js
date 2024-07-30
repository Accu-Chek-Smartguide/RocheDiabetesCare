document.addEventListener("DOMContentLoaded", function() {
    const presentation = document.getElementById("presentation");
    const logo = document.getElementById("logo");
    const model = document.getElementById("model");

    // Fade out the logo after 3 seconds
    setTimeout(() => {
        logo.style.transition = "opacity 2s";
        logo.style.opacity = 0;

        // Hide the presentation div after the logo has faded out
        setTimeout(() => {
            presentation.style.transition = "opacity 2s";
            presentation.style.opacity = 0;

            // Display the AR scene after the presentation has faded out
            setTimeout(() => {
                presentation.style.display = "none";
                model.style.display = "block";
            }, 2000);
        }, 2000);
    }, 3000);
});
