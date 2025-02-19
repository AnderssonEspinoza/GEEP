// Mobile menu functionality can be added here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(42, 42, 42, 0.95)';
        } else {
            nav.style.backgroundColor = '#2A2A2A';
        }
    });
});