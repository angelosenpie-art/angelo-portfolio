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
            navbar.style.borderBottom = '4px solid #00ffff';
            navbar.style.boxShadow = '0 4px 0 rgba(0, 255, 255, 0.5)';
        } else {
            navbar.style.borderBottom = '4px solid #00ff00';
            navbar.style.boxShadow = '0 4px 0 rgba(0, 255, 0, 0.3)';
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
        const text = 'Web Developer';
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

    // Pixel glitch effect for retro gaming
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            const random = Math.random();
            if (random > 0.97) {
                glitchElement.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    glitchElement.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }, 200);
    }

    // Pixel stars background effect
    function createPixelStars() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        for (let i = 0; i < 30; i++) {
            const star = document.createElement('div');
            star.className = 'pixel-star';
            star.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: ${Math.random() > 0.5 ? '#00ff00' : '#00ffff'};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: pixelTwinkle ${2 + Math.random() * 3}s infinite;
                z-index: 0;
            `;
            hero.appendChild(star);
        }
    }

    // Add pixel animation CSS
    const pixelStyle = document.createElement('style');
    pixelStyle.textContent = `
        @keyframes pixelTwinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(pixelStyle);
    
    createPixelStars();

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

    // Notification System - Retro Style
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#00ff00' : '#ff00ff'};
            color: #0f0f1e;
            border-radius: 0;
            font-weight: 400;
            font-family: 'Press Start 2P', cursive;
            font-size: 0.8rem;
            z-index: 10000;
            animation: slideIn 0.2s steps(4);
            border: 4px solid #0f0f1e;
            box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.2s steps(4)';
            setTimeout(() => {
                notification.remove();
            }, 200);
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

    // Retro console message
    console.log('%c GAME START! ', 'background: #00ff00; color: #0f0f1e; font-size: 20px; font-family: monospace; padding: 10px;');
    console.log('%c▸ PLAYER: ANGELO SINDAY', 'color: #00ffff; font-size: 16px; font-family: monospace;');
    console.log('%c▸ LEVEL: PORTFOLIO v1.0', 'color: #ff00ff; font-size: 16px; font-family: monospace;');
    console.log('%c▸ PRESS START TO VIEW CODE', 'color: #00ff00; font-size: 14px; font-family: monospace;');

    // Removed cursor trail effect

    // Back to Top Button - Retro Style
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '▲';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #00ff00;
        color: #0f0f1e;
        border: 4px solid #0f0f1e;
        border-radius: 0;
        font-size: 24px;
        font-family: 'Press Start 2P', cursive;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.1s steps(2);
        z-index: 1000;
        box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
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
        this.style.background = '#00ffff';
        this.style.boxShadow = '4px 4px 0 #00ffff';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.background = '#00ff00';
        this.style.boxShadow = '4px 4px 0 rgba(0, 0, 0, 0.5)';
    });

    console.log('Portfolio loaded successfully!');
});

