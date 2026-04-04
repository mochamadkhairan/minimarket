document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById('mobile-menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if(navMenu.classList.contains('active')){
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Menutup menu saat link diklik
    document.querySelectorAll('nav ul a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // --- Scroll Animation Reveal ---
    const sections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: hentikan observasi setelah elemen muncul
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Trigger awal untuk elemen yang sudah di layar
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});