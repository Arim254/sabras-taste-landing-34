// Mobile menu functionality
let mobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileNav.classList.add('active');
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.backgroundColor = 'transparent';
    } else {
        mobileNav.classList.remove('active');
        hamburger.style.transform = 'rotate(0deg)';
        hamburger.style.backgroundColor = 'var(--foreground)';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenuOpen = false;
    mobileNav.classList.remove('active');
    hamburger.style.transform = 'rotate(0deg)';
    hamburger.style.backgroundColor = 'var(--foreground)';
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        eventDate: formData.get('eventDate'),
        eventType: formData.get('eventType'),
        message: formData.get('message')
    };
    
    // Show success toast
    showToast('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to your server
    console.log('Form submission:', data);
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Fade-in animation on scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Header background on scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.style.backgroundColor = 'rgba(241, 234, 226, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--card)';
        header.style.backdropFilter = 'none';
    }
}

// Gallery image modal (simple implementation)
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const overlay = item.querySelector('.gallery-overlay p');
            
            // Simple alert for demonstration - in a real app you'd use a proper modal
            alert(`Viewing: ${overlay.textContent}`);
        });
    });
}

// Initialize fade-in elements
function initializeFadeElements() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}

// WhatsApp link functionality
function initializeWhatsApp() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = '1234567890'; // Replace with actual number
            const message = encodeURIComponent('Hi! I\'m interested in your catering services.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });
}

// Intersection Observer for better performance
function initializeIntersectionObserver() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        window.addEventListener('scroll', handleScrollAnimations);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeFadeElements();
    initializeIntersectionObserver();
    initializeGallery();
    initializeWhatsApp();
    
    // Scroll events
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        if (!('IntersectionObserver' in window)) {
            handleScrollAnimations();
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.header');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenuOpen && !header.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle escape key for mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});