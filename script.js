document.addEventListener("DOMContentLoaded", function() {

    // --- Background Slideshow Logic ---
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Show the first slide initially
    if (totalSlides > 0) {
        slides[0].style.opacity = 1;
    }

    // --- Main Greeting Text ---
    const name = "UPASANA";
    const wishingTextElement = document.getElementById("wishing-text");
    if (wishingTextElement) {
        wishingTextElement.innerText = `On this Raksha Bandhan, may our bond of love grow stronger! Happy Rakshabandhan, Dear ${name}`;
    }

    // --- Audio Autoplay Fallback ---
    const backgroundMusic = document.getElementById("background-music");
    if (backgroundMusic) {
        // Attempt to play the audio
        let promise = backgroundMusic.play();

        if (promise !== undefined) {
            promise.catch(error => {
                // Autoplay was prevented. Show a muted icon or prompt the user to click.
                console.log("Autoplay was prevented. User interaction is required to play audio.");
                // You might want to show a play button here for the user to click
                document.body.addEventListener('click', () => {
                    backgroundMusic.play();
                }, { once: true });
            });
        }
    }
});

// --- "Thank Him" Button Functionality ---
function openWhatsApp() {
    const message = "Thank you so much for your sweet Rakhi wishes ❤️";
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');
}