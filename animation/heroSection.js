export const heroAnimation = () => {
    console.log("Hero animation");

    gsap.from(".logo", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power1.out",
    })

    gsap.from(".navbar-link", {
        y: -20,
        opacity: 0,
        stagger: .2,
        ease: "power1.out",
    })

    gsap.from("nav #my-btn", {
        top: 30,
        opacity: 0,
        duration: 1,
    })

    gsap.from(".hero-heading", {
        scale: 3,
        opacity: 0,
        duration: .9,
        ease: "power1.out",
    })

    gsap.from(".hero-para", {
        opacity: 0,
        y: 30,
        delay: .5,
        duration: .8,
        ease: "power1.out",
    })

    gsap.from(".hero-search", {
        opacity: 0,
        x: -200,
        delay: .2,
        duration: .8,
        ease: "power1.out",
    })
}