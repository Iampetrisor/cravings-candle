document.addEventListener('DOMContentLoaded', function() {
    let currentItem = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    // Rotate Carousel
    function rotateCarousel(direction) {
        if (direction === 'next') {
            currentItem = (currentItem + 1) % totalItems;
        } else if (direction === 'prev') {
            currentItem = (currentItem - 1 + totalItems) % totalItems;
        }

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

    // Add event listeners for controls
    document.querySelector('.next').addEventListener('click', () => rotateCarousel('next'));
    document.querySelector('.prev').addEventListener('click', () => rotateCarousel('prev'));

    // Handle touch/swipe events
    let startX;
    const carouselContainer = document.querySelector('.carousel-container');

    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - startX;

        if (deltaX > 50) {
            rotateCarousel('prev');
            startX = touchX;  // Reset to avoid multiple swipes in one move
        } else if (deltaX < -50) {
            rotateCarousel('next');
            startX = touchX;  // Reset to avoid multiple swipes in one move
        }
    });
});
