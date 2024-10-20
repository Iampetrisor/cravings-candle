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
        loader.style.display = 'none';  // Ascunde loader-ul după încărcare
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
});
