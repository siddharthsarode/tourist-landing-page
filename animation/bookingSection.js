export const bookingSection = () => {
    gsap.from("#booking-container .title", {
        x: 100,
        opacity: 0,
        duration: .5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#booking-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from("#booking-container .booking-heading", {
        y: -100,
        opacity: 0,
        duration: .9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#booking-container .booking-heading",
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from("#booking-container p", {
        x: -100,
        opacity: 0,
        ease: "power3.out",
        stagger: .5,
        scrollTrigger: {
            trigger: "#booking-container p",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from("#booking-container .form-h1", {
        y: 100,
        x: 100,
        rotate: 360,
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#booking-container .form-h1",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from("#booking-container form", {
        x: -300,
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#booking-container .form-h1",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })
}