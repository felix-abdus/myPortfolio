document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Effect
    const words = ["Full-Stack Developer", "Electrical Engineer", "Automation Enthusiast", "Lifelong Learner"];
    let i = 0;
    let timer;
    const speed = 100;
    const eraseSpeed = 50;
    const delayBetweenWords = 2000;
    const typewriterElement = document.getElementById('typewriter');

    function typingEffect() {
        let word = words[i].split("");
        let loopTyping = function() {
            if (word.length > 0) {
                typewriterElement.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, delayBetweenWords);
                return false;
            }
            timer = setTimeout(loopTyping, speed);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        let loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                typewriterElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                typingEffect();
                return false;
            }
            timer = setTimeout(loopDeleting, eraseSpeed);
        };
        loopDeleting();
    }

    // Start typewriter effect
    typingEffect();


    // 2. Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 3. Navbar background on scroll
    const navbar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(6, 8, 13, 0.9)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(11, 15, 25, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });
});
