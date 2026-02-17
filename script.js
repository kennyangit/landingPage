// Rolagem suave para links de navegação E botões
document.addEventListener('DOMContentLoaded', function () {
    function smoothScroll(target) {
        if (target === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }

    // Para links de navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    const productButton = document.querySelector('.hero-buttons .btn-primary[href="#products"]');
    if (productButton) {
        productButton.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll('#products');
        });
    }

    // Animações de hover do produto
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});