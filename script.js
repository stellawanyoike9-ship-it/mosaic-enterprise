const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    if(window.scrollY > lastScroll && window.scrollY > 100){
        header.style.top = "-160px"; // Hide
    }else{
        header.style.top = "0"; // Show
    }

    lastScroll = window.scrollY;

});

/* WELCOME ANIMATION */

const welcome = document.querySelector(".welcome");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            document.querySelector(".welcome-image").classList.add("show");

            document.querySelector(".welcome-text").classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});


if (welcome) {
    observer.observe(welcome);
}
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show-menu");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

}



/* ABOUT ANIMATION */

const about = document.querySelector(".about-page");

if (about) {

    const aboutImage = document.querySelector(".about-image");
    const aboutText = document.querySelector(".about-text");

    const aboutObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                aboutImage.classList.add("show");
                aboutText.classList.add("show");

            }

        });

    }, {
        threshold:0.2
    });

    aboutObserver.observe(about);

}