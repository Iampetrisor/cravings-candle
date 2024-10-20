document.addEventListener('DOMContentLoaded', function () {
    // Lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // Loader animation
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.display = 'none';
    });

    // Scroll to Top Button
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

    // Carousel functionality
    let currentItem = 0;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    const indicators = document.querySelectorAll('.indicator');

    function rotateCarousel(direction) {
        if (direction === 'next') {
            currentItem = (currentItem + 1) % totalItems;
        } else if (direction === 'prev') {
            currentItem = (currentItem - 1 + totalItems) % totalItems;
        }

        carouselItems.forEach((item, index) => {
            const angle = (index - currentItem) * 45;
            item.style.transform = `rotateY(${angle}deg) translateZ(200px)`;
            item.style.opacity = index === currentItem ? '1' : '0.5';
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentItem);
        });
    }

    document.querySelector('.next').addEventListener('click', () => rotateCarousel('next'));
    document.querySelector('.prev').addEventListener('click', () => rotateCarousel('prev'));
});
