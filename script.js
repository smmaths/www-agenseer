// Define the application link
const app_link = "http://localhost:3000";

// Update all "Get Started" and "Try AgenSeer Free" buttons
document.addEventListener('DOMContentLoaded', function() {
    // Update navigation "Get Started" button
    const navGetStarted = document.querySelector('.nav-links .cta-button');
    if (navGetStarted) {
        navGetStarted.href = app_link;
    }

    // Update hero section "Try AgenSeer Free" button
    const heroTryFree = document.querySelector('.hero .cta-button');
    if (heroTryFree) {
        heroTryFree.href = app_link;
    }

    // Update pricing section "Get Started" buttons
    const pricingButtons = document.querySelectorAll('.pricing-card .cta-button');
    pricingButtons.forEach(button => {
        if (!button.textContent.includes('Contact Sales')) {
            button.href = app_link;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Height of the navbar plus some padding
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll-based header styling
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
}); 