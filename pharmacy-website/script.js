// Automatically update footer year
if (document.getElementById('year')) {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Smooth scroll logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation using IntersectionObserver
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}

// Trigger animations on load
document.addEventListener('DOMContentLoaded', reveal);

// Navbar background change on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const navbar = document.querySelector('.navbar');
            if(navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
            ticking = false;
        });
        ticking = true;
    }
});

// ── LIGHTBOX ──
const images = ['assets/shop1.jpg','assets/shop2.jpg','assets/shop3.jpg'];
let current = 0;
function openLightbox(i) {
  current = i;
  document.getElementById('lb-img').src = images[i];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLightboxOutside(e) { if(e.target.id === 'lightbox') closeLightbox(); }
function shiftLightbox(dir) {
  current = (current + dir + images.length) % images.length;
  const img = document.getElementById('lb-img');
  img.style.opacity = 0;
  setTimeout(() => { img.src = images[current]; img.style.opacity = 1; }, 150);
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') shiftLightbox(1);
  if(e.key === 'ArrowLeft') shiftLightbox(-1);
});

// ── BILINGUAL TOGGLE ──
function switchLanguage(lang) {
  document.querySelectorAll('.lang-toggle span').forEach(el => el.classList.remove('active-lang'));
  document.getElementById('lang-' + lang).classList.add('active-lang');

  document.querySelectorAll('[data-en]').forEach(el => {
    if(lang === 'kn' && el.getAttribute('data-kn')) {
      el.innerHTML = el.getAttribute('data-kn');
    } else {
      el.innerHTML = el.getAttribute('data-en');
    }
  });
}

// ── MOBILE MENU ──
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if(navLinks) navLinks.classList.toggle('show-mobile');
}
// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks) navLinks.classList.remove('show-mobile');
    });
});
