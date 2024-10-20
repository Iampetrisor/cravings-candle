document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-container img');
    const navLinks = document.querySelectorAll('nav a');

    // Smooth scroll
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Zoom, rotate, and fade effect
    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.3) rotate(10deg)';
            image.style.opacity = '0.9';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
            image.style.opacity = '1';
        });
    });
});
