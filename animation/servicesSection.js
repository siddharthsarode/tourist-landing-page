export const serviceAnimation = () => {
    gsap.from(".section-title", {
        opacity: 0,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#services",
            start: "top 85%",
        }
    })

    gsap.from(".service-heading", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        x: 100,
        scrollTrigger: {
            trigger: "#services .service-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from(".service-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".service-item-container",
            start: "top 80%",
            toggleActions: "play none none none", // Controls animation behavior
        },
    });
}