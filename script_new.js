// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const menuDiv = document.querySelector('nav > div');
    const menuLinks = document.querySelector('nav div div');
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
    toggleButton.className = 'md:hidden text-primary text-2xl';
    
    // Insert toggle button
    menuDiv.insertBefore(toggleButton, menuLinks);
    
    // Mobile menu functionality
    toggleButton.addEventListener('click', () => {
        menuLinks.classList.toggle('hidden');
        menuLinks.classList.toggle('flex');
        menuLinks.classList.toggle('flex-col');
        menuLinks.classList.toggle('absolute');
        menuLinks.classList.toggle('top-16');
        menuLinks.classList.toggle('left-0');
        menuLinks.classList.toggle('right-0');
        menuLinks.classList.toggle('bg-white');
        menuLinks.classList.toggle('p-4');
    });
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(section);
});
