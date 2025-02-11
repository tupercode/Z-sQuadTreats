
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".pastry-item, .guide-item");

    function fadeInOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});


const ctaButton = document.querySelector(".cta-button");
    
    ctaButton.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        
        const rect = ctaButton.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        
        ctaButton.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });