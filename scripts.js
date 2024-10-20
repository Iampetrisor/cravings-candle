document.addEventListener('DOMContentLoaded', function () {
    // Lazy loading pentru imagini
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    let imagesLoaded = 0;

    // Ascundere loader când toate imaginile sunt încărcate
    const hideLoader = () => {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
    };

    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
            imagesLoaded++;
            if (imagesLoaded === lazyImages.length) {
                hideLoader(); // Ascunde loader-ul când toate imaginile sunt încărcate
            }
        });

        img.addEventListener('error', () => {
            // În caz de eroare la încărcarea imaginii, ascunde loader-ul
            imagesLoaded++;
            if (imagesLoaded === lazyImages.length) {
                hideLoader();
            }
        });
    });

    // Asigură-te că loader-ul se ascunde și dacă imaginile nu sunt lazy
    window.addEventListener('load', () => {
        hideLoader();  // Ascunde loader-ul când pagina este complet încărcată
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
