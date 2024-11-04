export const packageAnimation = () => {
    gsap.from(".package-title", {
        opacity: 0,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#package-heads",
            start: "top 85%",
        }
    })

    gsap.from(".package-heading", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        x: 100,
        scrollTrigger: {
            trigger: "#package-heads h1",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })

    gsap.from(".package-item", {
        opacity: 0,
        y: 50,
        ease: "power3.out",
        stagger: .5,
        scrollTrigger: {
            trigger: "#package-item-container",
            start: "top 70%",
        }
    })

    gsap.from(".package-item-body h3", {
        opacity: 0,
        x: -50,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".package-item-body",
            start: "top 85%",
        }
    })


    gsap.from(".package-item-body .fa-star", {
        opacity: 0,
        scale: 1.5,
        stagger: .1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".package-item-body .fa-star",
            start: "top 85%",
        }
    })

    gsap.from(".package-item-body p", {
        opacity: 0,
        x: -50,
        stagger: .2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".package-item-body p",
            start: "top 85%",
        }
    })

    gsap.from(".package-item-body a", {
        opacity: 0,
        delay: .5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".package-item-body p",
            start: "top 85%",
            // toggleActions: "play none none reverse",
        }
    })
}