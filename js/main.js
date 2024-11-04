import { heroAnimation } from "../animation/heroSection.js";
import { aboutAnimation } from "../animation/aboutSection.js";
import { serviceAnimation } from "../animation/servicesSection.js";
import { destinationAnimation } from "../animation/destinationSection.js";
import { packageAnimation } from "../animation/packageSection.js";
import { bookingSection } from "../animation/bookingSection.js";

window.addEventListener("DOMContentLoaded", () => {
    heroAnimation();
    aboutAnimation();
    serviceAnimation();
    destinationAnimation();
    packageAnimation();
    bookingSection();

    gsap.from(".back-to-top", {
        bottom: "3%",
        repeat: -1,
        ease: "bounce.out",
        duration: 3,
    })
});

