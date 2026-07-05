/* ================= IAES JavaScript ================= */

/* Smooth Scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* WhatsApp Button Click Feedback */
document.querySelectorAll('.btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log("Opening WhatsApp…");
    });
});

/* ================= NAVBAR SHOW ON SCROLL ================= */

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        navbar.style.top = "0px"; // show navbar
    } else {
        navbar.style.top = "-80px"; // hide navbar
    }
});

/* ================= LOGO MOVEMENT ON SCROLL ================= */

const heroLogo = document.querySelector('.hero-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        heroLogo.classList.add('logo-scrolled');
    } else {
        heroLogo.classList.remove('logo-scrolled');
    }
});

/* ================= SLIDE-IN SECTION ANIMATIONS ================= */

const slideElements = document.querySelectorAll('.slide-left, .slide-right, .slide-up');

const slideInOnScroll = () => {
    slideElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', slideInOnScroll);
window.addEventListener('load', slideInOnScroll);

/* ================= INITIAL LOG ================= */

console.log("IAES Website Loaded Successfully.");
