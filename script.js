// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation menu toggle for mobile (optional, but recommended)
const navToggle = document.createElement('button');
navToggle.innerHTML = '☰';
navToggle.classList.add('md:hidden', 'fixed', 'top-4', 'right-4', 'z-40', 'bg-brand-primary', 'text-white', 'p-2', 'rounded');

navToggle.addEventListener('click', () => {
    const navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('hidden');
});

document.body.appendChild(navToggle);

// Add responsive class to nav content
const navContent = document.querySelector('.nav-content');
navContent.classList.add('hidden', 'md:block', 'w-full', 'md:w-auto');

// Simple form validation (if you add a contact form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
