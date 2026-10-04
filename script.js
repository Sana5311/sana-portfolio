window.addEventListener("load", () => {
    console.log("Portfolio Loaded Successfully");
});

/* Smooth Reveal Animation */

const cards = document.querySelectorAll(
    ".skill-card, .project-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

/* Initial State */

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";
});