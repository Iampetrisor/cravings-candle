document.addEventListener('DOMContentLoaded', function () {
    // Lazy loading pentru imagini
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // Buton Scroll to Top
    const scrollToTopButton = document.getElementById('scrollToTop');
    
    window.onscroll = function () {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Carousel control pentru desktop
    let currentItem = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    function rotateCarousel(direction) {
        if (direction === 'next') {
            currentItem = (currentItem + 1) % totalItems;
        } else if (direction === 'prev') {
            currentItem = (currentItem - 1 + totalItems) % totalItems;
        }
        carouselItems.forEach((item, index) => {
            item.style.transform = `translateX(${(index - currentItem) * 100}%)`;
        });
    }

    document.querySelectorAll('.next').forEach(btn => {
        btn.addEventListener('click', () => rotateCarousel('next'));
    });

    document.querySelectorAll('.prev').forEach(btn => {
        btn.addEventListener('click', () => rotateCarousel('prev'));
    });

    // Suport pentru swipe pe mobil
    let startX;
    document.querySelectorAll('.carousel').forEach(carousel => {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        carousel.addEventListener('touchmove', (e) => {
            const touchX = e.touches[0].clientX;
            if (touchX - startX > 50) {
                rotateCarousel('prev');
            } else if (touchX - startX < -50) {
                rotateCarousel('next');
            }
        });
    });
});
