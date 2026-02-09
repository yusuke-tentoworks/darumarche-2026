document.addEventListener('DOMContentLoaded', () => {
    console.log('Daruma Marche 2026 LP Loaded');

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示されたら監視を終了
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const spNav = document.querySelector('.sp-nav');
    const spNavLinks = document.querySelectorAll('.sp-nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        spNav.classList.toggle('active');
    });

    spNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            spNav.classList.remove('active');
        });
    });
});
