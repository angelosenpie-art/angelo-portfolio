// Gaming Portfolio - Interactive JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 243, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat-item, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Typing Effect for Subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = 'Full Stack Developer';
        const cursorSpan = subtitle.querySelector('.cursor-blink');
        subtitle.textContent = '';
        
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < text.length) {
                subtitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                // Add cursor back after typing is done
                if (cursorSpan) {
                    subtitle.appendChild(cursorSpan);
                }
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeWriter, 1000);
    }

    // Glitch Effect Enhancement
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            const random = Math.random();
            if (random > 0.95) {
                glitchElement.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00f3ff,
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00ff
                `;
                setTimeout(() => {
                    glitchElement.style.textShadow = `
                        0 0 10px var(--primary-color),
                        0 0 20px var(--primary-color),
                        0 0 30px var(--primary-color)
                    `;
                }, 50);
            }
        }, 100);
    }

    // Particle Background Effect
    function createParticles() {
        const heroBg = document.querySelector('.hero-bg');
        if (!heroBg) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: ${Math.random() > 0.5 ? '#00f3ff' : '#ff00ff'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
                opacity: ${Math.random() * 0.5 + 0.2};
            `;
            heroBg.appendChild(particle);
        }
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-40px) translateX(-10px);
            }
            75% {
                transform: translateY(-20px) translateX(10px);
            }
        }
    `;
    document.head.appendChild(style);
    
    createParticles();

    // Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : stat.textContent.includes('%') ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : stat.textContent.includes('%') ? '%' : '');
                }
            };

            updateCounter();
        });
    };

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Form Submission Handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && subject && message) {
                // Show success message
                showNotification('Message sent successfully! 🎮', 'success');
                
                // Reset form
                contactForm.reset();
                
                // In a real application, you would send this data to a server
                console.log('Form Data:', { name, email, subject, message });
            } else {
                showNotification('Please fill in all fields! ⚠️', 'error');
            }
        });
    }

    // Notification System
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#00ff88' : '#ff0055'};
            color: #0a0e27;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // Project Card Tilt Effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Skill Card Hover Effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Console Easter Egg
    console.log('%c👾 Welcome to Angelo\'s Portfolio! 🎮', 'color: #00f3ff; font-size: 20px; font-weight: bold;');
    console.log('%cLooking for something? Check out the source code on GitHub!', 'color: #ff00ff; font-size: 14px;');

    // Cursor Trail Effect (Optional)
    let cursorTrail = [];
    document.addEventListener('mousemove', function(e) {
        if (cursorTrail.length > 5) {
            const oldTrail = cursorTrail.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }

        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            z-index: 9999;
            animation: trailFade 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        cursorTrail.push(trail);
    });

    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(trailStyle);

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: var(--bg-dark);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(0, 243, 255, 0.3);
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'all';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 5px 30px rgba(0, 243, 255, 0.6)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 20px rgba(0, 243, 255, 0.3)';
    });

    console.log('🎮 Portfolio loaded successfully!');
});

