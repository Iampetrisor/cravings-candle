document.addEventListener('DOMContentLoaded', function () {
    // Scroll smooth către secțiuni
    const scrollLinks = document.querySelectorAll('.btn-scroll');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
