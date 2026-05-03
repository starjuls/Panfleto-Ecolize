function scrollReveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            element.classList.add("active");
        }
    });
}

// Ativa ao rolar e ao carregar a página
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);