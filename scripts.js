document.addEventListener('DOMContentLoaded', function() {
    let currentItem = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');

    function rotateCarousel() {
        carouselItems.forEach((item, index) => {
            const angle = (index - currentItem) * 45;
            if (index === currentItem) {
                item.style.transform = `translateZ(300px)`;
                item.style.opacity = '1';
                item.style.filter = 'none';
            } else {
                item.style.transform = `rotateY(${angle}deg) translateZ(200px)`;
                item.style.opacity = '0.7';
                item.style.filter = 'blur(2px)';
            }
        });
    }

    // Rotate every 2.5 seconds
    setInterval(() => {
        currentItem = (currentItem + 1) % carouselItems.length;
        rotateCarousel();
    }, 2500);
});
