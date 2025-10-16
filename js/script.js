// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    // Check for saved preference or system preference
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        console.log('Dark mode toggled:', html.classList.contains('dark')); // Debug log
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing dark mode...'); // Debug log
    initDarkMode();
});

// Scroll animations
class ScrollAnimator {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        $$('.animate-on-scroll').forEach(el => observer.observe(el));
    }
}

// Form handling
class FormHandler {
    constructor() {
        this.form = $('#contactForm');
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        
        try {
            // Here you would typically send the data to a server
            this.showSuccess(name, email);
            event.target.reset();
        } catch (error) {
            this.showError();
        }
    }

    showSuccess(name, email) {
        alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    }

    showError() {
        alert('Sorry, there was an error sending your message. Please try again later.');
    }
}

// Navigation
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const target = $(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ScrollAnimator();
    new FormHandler();
    new Navigation();
});
