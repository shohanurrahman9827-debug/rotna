function goToSurprise() {
    window.location.href = 'surprise.html';
}

function goBack() {
    window.location.href = 'index.html';
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeSection = document.getElementById('envelopeSection');
    const animationContainer = document.getElementById('animationContainer');
    const letterContainer = document.getElementById('letterContainer');
    
    // Hide envelope
    envelopeSection.style.display = 'none';
    
    // Start animations
    createCatsAnimation();
    createConfettiAnimation();
    
    // Show letter after animation
    setTimeout(() => {
        animationContainer.style.display = 'none';
        letterContainer.style.display = 'flex';
    }, 3500);
}

function createCatsAnimation() {
    const catsContainer = document.getElementById('catsContainer');
    const catEmojis = ['🐱', '🐈', '😸', '😺', '😻', '🙀', '😿', '😾'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const cat = document.createElement('div');
            cat.className = 'cat';
            cat.textContent = catEmojis[Math.floor(Math.random() * catEmojis.length)];
            cat.style.left = Math.random() * 100 + '%';
            cat.style.animationDelay = Math.random() * 0.5 + 's';
            cat.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            catsContainer.appendChild(cat);
            
            // Remove cat after animation
            setTimeout(() => {
                if (cat.parentNode) {
                    cat.parentNode.removeChild(cat);
                }
            }, 4000);
        }, i * 200);
    }
}

function createConfettiAnimation() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '⭐', '💖', '💝', '🎈', '🎂', '🌸', '🌺', '🌷'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 4000);
        }, i * 150);
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add floating tulips periodically
    setInterval(createFloatingTulip, 8000);
    
    // Add hover effects to photos
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});

function createFloatingTulip() {
    const tulip = document.createElement('div');
    tulip.className = 'floating-tulip';
    tulip.textContent = '🌷';
    tulip.style.position = 'fixed';
    tulip.style.fontSize = '2rem';
    tulip.style.left = Math.random() * 100 + '%';
    tulip.style.top = '100%';
    tulip.style.zIndex = '50';
    tulip.style.pointerEvents = 'none';
    tulip.style.animation = 'floatUp 6s linear forwards';
    
    document.body.appendChild(tulip);
    
    setTimeout(() => {
        if (tulip.parentNode) {
            tulip.parentNode.removeChild(tulip);
        }
    }, 6000);
}

// Add CSS for floating tulip animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);