function scrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 150;

        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);