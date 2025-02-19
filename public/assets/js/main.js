let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Calculate the correct slide index
    currentSlide = (n + slides.length) % slides.length;
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(0);

// Auto-advance slides every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);