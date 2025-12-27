// script.js

// 1. Initialisation des icônes Lucide
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// 2. Gestion du Menu Mobile (Burger)
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.createElement('button');
    mobileBtn.classList.add('mobile-menu-btn');
    mobileBtn.innerHTML = '<i data-lucide="menu"></i>';

    // Insérer le bouton burger s'il n'existe pas dans le HTML
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    // On crée un conteneur pour le menu mobile
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu-overlay');

    // Logique d'insertion (Uniquement si écran petit, géré par CSS, mais on prépare le DOM)
    if (navContainer) {
        // Ajout du bouton burger visuel
        navContainer.insertBefore(mobileBtn, navActions);

        // Clonage des liens pour le mobile
        mobileMenu.innerHTML = `
            <div class="mobile-nav-content">
                <button class="close-menu"><i data-lucide="x"></i></button>
                ${navLinks.innerHTML}
                <div class="mobile-actions">
                    ${navActions.innerHTML}
                </div>
            </div>
        `;
        document.body.appendChild(mobileMenu);
        lucide.createIcons(); // Rafraichir les icones du menu mobile
    }

    // Events
    const closeBtn = mobileMenu.querySelector('.close-menu');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Fermer le menu si on clique sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

// 3. Scroll Reveal Animation (L'Effet Wahou)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // On joue l'anim une seule fois
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // On cible tous les éléments qu'on veut animer
    const elementsToAnimate = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .solution-card, .metric-card-clinical');

    elementsToAnimate.forEach((el, index) => {
        // Petit délai en cascade pour les grilles (effet domino)
        if (el.classList.contains('solution-card')) {
            el.style.transitionDelay = `${index * 100}ms`;
        }
        observer.observe(el);
    });
});
