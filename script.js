document.addEventListener("DOMContentLoaded", () => {
    // Create GSAP Timeline for sequential entrance
    const tl = gsap.timeline();

    // 1. Laser line shoots in from the left to the center
    tl.to(".intro-line", {
        width: "50%",
        duration: 0.9,
        ease: "power3.in"
    })
    // Retract line into the exact horizontal center
    .to(".intro-line", {
        width: "0%",
        left: "50%",
        duration: 0.5,
        ease: "power3.out"
    })
    
    // 2. Reveal the logo container implicitly
    .set(".logo-container", { opacity: 1 })
    
    // 3. Draw the House SVG sequentially
    .to(".roof-path", { 
        strokeDashoffset: 0, 
        duration: 0.8, 
        ease: "power2.inOut" 
    })
    .to(".chimney-path", { 
        strokeDashoffset: 0, 
        duration: 0.4, 
        ease: "power2.inOut" 
    }, "-=0.4")
    .to(".base-path", { 
        strokeDashoffset: 0, 
        duration: 0.6, 
        ease: "power2.inOut" 
    }, "-=0.3")
    .to(".door-path", { 
        strokeDashoffset: 0, 
        duration: 0.4, 
        ease: "power1.inOut" 
    }, "-=0.2")

    // 4. Letters "B" and "K" slide up dramatically
    .to(".letter", { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "back.out(2)" 
    }, "-=0.1")

    // 5. "CONSTRUCTION" word slowly slides up
    .to(".word", { 
        y: 0, 
        opacity: 1, 
        duration: 0.9, 
        ease: "power3.out" 
    }, "-=0.5")

    // 6. Push the entire intro screen up and away out of the viewport
    .to(".intro-screen", {
        yPercent: -100,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.6,
        onStart: () => {
            // Un-hide the main background
            document.querySelector(".main-content").style.opacity = "1";
        },
        onComplete: () => {
            document.body.style.overflow = "auto";
            document.querySelector('.intro-screen').style.display = 'none'; // Cleanup
        }
    })

    // 7. Orchestrate Main Homepage Entrance seamlessly
    .fromTo(".header", 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
    )
    .fromTo(".hero-badge", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.5"
    )
    .fromTo(".hero-content h2", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" }, 
        "-=0.6"
    )
    .fromTo(".hero-content p", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.7"
    )
    .fromTo(".cta-btn", 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }, 
        "-=0.5"
    );
});
