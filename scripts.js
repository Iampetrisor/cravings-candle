document.addEventListener('DOMContentLoaded', function () {
    // Adăugăm funcționalitate pentru scroll smooth la secțiuni
    const scrollLinks = document.querySelectorAll('.btn-scroll');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Verificăm dacă toate imaginile sunt încărcate pentru a preveni erorile
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});
