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
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
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

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    handleHeaderScroll();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.get('email') || !validateEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('eventDate')) {
        errors.push('Please select an event date');
    }
    
    if (!formData.get('eventType')) {
        errors.push('Please select an event type');
    }
    
    return errors;
}

// Enhanced form submission with validation
function handleFormSubmitWithValidation(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showToast('Please fix the following errors: ' + errors.join(', '));
        return;
    }
    
    // If validation passes, proceed with submission
    handleFormSubmit(event);
}

// Update the form event listener
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.removeEventListener('submit', handleFormSubmit);
        contactForm.addEventListener('submit', handleFormSubmitWithValidation);
    }
});

// Loading state for form submission
function setFormLoading(isLoading) {
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    
    if (isLoading) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        formInputs.forEach(input => input.disabled = true);
    } else {
        submitButton.textContent = 'Send Inquiry';
        submitButton.disabled = false;
        formInputs.forEach(input => input.disabled = false);
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Analytics event:', eventName, properties);
    // In a real application, you would send this to your analytics service
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        trackEvent('button_click', {
            button_text: e.target.textContent,
            button_class: e.target.className
        });
    }
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In a real application, you might want to send this to an error tracking service
});

// Service worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}