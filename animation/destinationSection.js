export const destinationAnimation = () => {
    gsap.from(".destination-title", {
        opacity: 0,
        duration: .8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".destination",
            start: "top 85%",
        }
    })

    gsap.from(".destination-heading", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        x: 100,
        scrollTrigger: {
            trigger: ".destination .destination-heading",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#desti-img-container",
            scroller: "body",
            start: "top 60%",
            end: "top 0%",
            toggleActions: "play none none reverse",
        }
    });
    tl.from("#desti-img1", {
        scale: 1.5,
        opacity: 0,
        duration: .8,
        ease: "power3.out",
    })

    tl.from("#desti-img4", {
        x: 100,
        opacity: 0,
        duration: .7,
        ease: "power3.out",
    })

    tl.from("#desti-img2", {
        x: -100,
        opacity: 0,
        duration: .5,
        ease: "power3.out",
    })

    tl.from("#desti-img3", {
        y: 100,
        duration: .5,
        opacity: 0,
        ease: "power3.out",
    })


}