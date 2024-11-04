export const aboutAnimation = () => {
    // Fade in effect for the about image
    gsap.from(".about-image .position-relative", {
        opacity: 0,
        x: -100,
        rotate: -45,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });

    // Fade in effect for about content
    gsap.from(".about-content", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });

    // Staggered animation for feature items
    gsap.from(".feature-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".feature-list",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
    });

    // Fade in effect for the "Read More" button
    gsap.from(".read-more-btn", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".read-more-btn",
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });

}