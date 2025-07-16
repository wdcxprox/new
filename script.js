// AOS Animation Library initialisieren
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    delay: 100
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect mit glassmorphism
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(33, 150, 243, 0.2)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(33, 150, 243, 0.1)';
    }
});

// Wassertropfen-Cursor-Effekt
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.02) { // 2% Chance für Wassertropfen
        createWaterDroplet(e.clientX, e.clientY);
    }
});

function createWaterDroplet(x, y) {
    const droplet = document.createElement('div');
    droplet.className = 'water-droplet';
    droplet.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, rgba(33, 150, 243, 0.8) 0%, rgba(33, 150, 243, 0.3) 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: dropletFall 2s ease-out forwards;
        transform: translate(-50%, -50%);
    `;
    
    document.body.appendChild(droplet);
    
    setTimeout(() => {
        droplet.remove();
    }, 2000);
}

// Hinzufügen der CSS-Animation für Wassertropfen
const dropletStyle = document.createElement('style');
dropletStyle.textContent = `
    @keyframes dropletFall {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(100px) scale(0.3);
        }
    }
`;
document.head.appendChild(dropletStyle);

// Service-Kacheln Hover-Effekt
document.querySelectorAll('.service-tile').forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.style.transform = 'translateY(-15px) scale(1.05)';
        tile.style.boxShadow = '0 12px 40px rgba(21, 101, 192, 0.4)';
        
        const icon = tile.querySelector('.tile-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    });
    
    tile.addEventListener('mouseleave', () => {
        tile.style.transform = 'translateY(-10px) scale(1.05)';
        tile.style.boxShadow = '0 8px 32px rgba(33, 150, 243, 0.3)';
        
        const icon = tile.querySelector('.tile-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Service-Karten erweiterte Animationen
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.animation = 'none';
            icon.style.transform = 'rotateY(360deg) scale(1.1)';
        }
        
        // Wasser-Wellen-Effekt
        createWaveEffect(card);
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            icon.style.transform = 'rotateY(0deg) scale(1)';
        }
    });
});

function createWaveEffect(element) {
    const wave = document.createElement('div');
    wave.className = 'wave-effect';
    wave.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: waveExpand 0.8s ease-out forwards;
        pointer-events: none;
    `;
    
    element.appendChild(wave);
    
    setTimeout(() => {
        wave.remove();
    }, 800);
}

// Wellen-Animations-CSS
const waveStyle = document.createElement('style');
waveStyle.textContent = `
    @keyframes waveExpand {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(waveStyle);

// Erweiterte Parallax-Effekte
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax für Wassertropfen
    const waterParticles = document.querySelector('.water-particles');
    if (waterParticles) {
        waterParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Parallax für Blasen
    document.querySelectorAll('.bubble').forEach((bubble, index) => {
        const speed = (index + 1) * 0.1;
        bubble.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax für schwebende Kacheln
    document.querySelectorAll('.service-tile').forEach((tile, index) => {
        const speed = 0.05 + (index * 0.02);
        tile.style.transform = `translateY(${-scrolled * speed}px)`;
    });
});

// Erweiterte Cube-Rotation mit Maus-Interaktion
const cube = document.querySelector('.rotating-cube-large');
if (cube) {
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;
    
    cube.addEventListener('mouseenter', () => {
        isHovered = true;
        cube.style.animationPlayState = 'paused';
    });
    
    cube.addEventListener('mouseleave', () => {
        isHovered = false;
        cube.style.animationPlayState = 'running';
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
    
    cube.addEventListener('mousemove', (e) => {
        if (isHovered) {
            const rect = cube.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
            
            const rotateX = mouseY * 20;
            const rotateY = mouseX * 20;
            
            cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
}

// Wasserkugel-Interaktion
const waterSphere = document.querySelector('.water-sphere');
if (waterSphere) {
    waterSphere.addEventListener('click', () => {
        waterSphere.style.animation = 'none';
        waterSphere.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            waterSphere.style.animation = 'float 6s ease-in-out infinite';
            waterSphere.style.transform = 'scale(1)';
        }, 300);
        
        // Wasser-Spritzer-Effekt
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createWaterSplash(waterSphere);
            }, i * 50);
        }
    });
}

function createWaterSplash(element) {
    const splash = document.createElement('div');
    splash.className = 'water-splash';
    
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;
    
    splash.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, rgba(33, 150, 243, 0.8) 0%, rgba(33, 150, 243, 0.3) 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: splashFly 1s ease-out forwards;
        transform: translate(-50%, -50%);
    `;
    
    splash.style.setProperty('--endX', `${endX - centerX}px`);
    splash.style.setProperty('--endY', `${endY - centerY}px`);
    
    document.body.appendChild(splash);
    
    setTimeout(() => {
        splash.remove();
    }, 1000);
}

// Splash-Animations-CSS
const splashStyle = document.createElement('style');
splashStyle.textContent = `
    @keyframes splashFly {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(var(--endX), var(--endY)) scale(0.3);
        }
    }
`;
document.head.appendChild(splashStyle);

// Standort-Karten Animation
document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', () => {
        const locationName = card.querySelector('h3').textContent;
        showLocationModal(locationName);
    });
});

function showLocationModal(location) {
    const modal = document.createElement('div');
    modal.className = 'location-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Standort ${location}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Wir sind in ${location} und Umgebung für Sie da!</p>
                <p>Kontaktieren Sie uns für eine kostenlose Beratung.</p>
                <div class="modal-actions">
                    <a href="tel:+41445551234" class="btn btn-primary">
                        <i class="fas fa-phone"></i> Anrufen
                    </a>
                    <a href="kontakt.html" class="btn btn-secondary">
                        <i class="fas fa-envelope"></i> Kontakt
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: modalFadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // Modal schließen
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.style.animation = 'modalFadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Modal bei Klick außerhalb schließen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
}

// Modal-Animations-CSS
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes modalFadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
    
    .modal-content {
        background: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 12px 40px rgba(21, 101, 192, 0.4);
        animation: modalSlideIn 0.3s ease-out;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(33, 150, 243, 0.1);
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(33, 150, 243, 0.1);
        color: var(--primary-color);
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        justify-content: center;
    }
    
    @keyframes modalSlideIn {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(modalStyle);

// Wasserfakten-Karten Animation
document.querySelectorAll('.fact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.fact-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.fact-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Smooth Scroll für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer für erweiterte Scroll-Animationen
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Spezielle Animationen für verschiedene Elemente
            if (entry.target.classList.contains('service-card')) {
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0) rotateX(0deg)';
                }, 300);
            }
            
            if (entry.target.classList.contains('fact-card')) {
                entry.target.style.animation = 'factCardPulse 0.8s ease-out';
            }
        }
    });
}, observerOptions);

// Beobachte Elemente für Animationen
document.querySelectorAll('.service-card, .fact-card, .location-card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Zusätzliche Animationen CSS
const additionalAnimations = document.createElement('style');
additionalAnimations.textContent = `
    @keyframes factCardPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(additionalAnimations);

// Tastatur-Navigation für Barrierefreiheit
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Schließe Mobile-Menü
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        
        // Schließe Modals
        document.querySelectorAll('.location-modal').forEach(modal => {
            modal.remove();
        });
    }
});

// Loading-Animation entfernen
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Starte Cube-Animation nach dem Laden
    const cube = document.querySelector('.rotating-cube-large');
    if (cube) {
        cube.style.animation = 'rotateCube 15s infinite linear';
    }
});

// Performance-Optimierung: Throttle für Scroll-Events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Anwenden des Throttling auf Scroll-Events
const throttledScrollHandler = throttle(() => {
    const scrolled = window.pageYOffset;
    
    // Navbar-Effekt
    const navbar = document.querySelector('.navbar');
    if (scrolled > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
    
    // Parallax-Effekte
    const waterParticles = document.querySelector('.water-particles');
    if (waterParticles) {
        waterParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    document.querySelectorAll('.bubble').forEach((bubble, index) => {
        const speed = (index + 1) * 0.1;
        bubble.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Initialisierung nach DOM-Load
document.addEventListener('DOMContentLoaded', () => {
    console.log('BS Hydro Cleaning Website geladen - Schweizer Edition');
    
    // Füge Wasser-Cursor-Effekt hinzu
    document.body.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'8\' fill=\'%2303a9f4\' opacity=\'0.3\'/%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'4\' fill=\'%232196f3\'/%3E%3C/svg%3E"), auto';
    
    // Starte Wasserpartikel-Animation
    animateWaterParticles();
});

// Wasserpartikel-Animation
function animateWaterParticles() {
    const particles = document.querySelector('.water-particles');
    if (particles) {
        setInterval(() => {
            particles.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`;
        }, 100);
    }
}

// Service-Performance-Monitoring
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