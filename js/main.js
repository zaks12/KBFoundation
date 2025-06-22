document.addEventListener('DOMContentLoaded', () => {
    console.log('Your NGO website is ready!');
});
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slides img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Show the first slide and start the slideshow
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
