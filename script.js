const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");
const roleEl = document.getElementById("role-text");
const backToTop = document.querySelector(".back-to-top");

const roles = [
    "Web Developer",
    "UI/UX Designer",
    "AI Integrator",
    "Problem Solver",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function onScroll() {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 24);
    }
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const open = navMenu.classList.toggle("open");
        navToggle.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealElements.forEach((el) => revealObserver.observe(el));

function typeRole() {
    if (!roleEl) return;

    const current = roles[roleIndex];

    if (!isDeleting) {
        roleEl.textContent = current.slice(0, charIndex + 1);
        charIndex += 1;

        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeRole, 2200);
            return;
        }
    } else {
        roleEl.textContent = current.slice(0, charIndex - 1);
        charIndex -= 1;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, isDeleting ? 45 : 85);
}

if (!prefersReducedMotion && roleEl) {
    typeRole();
} else if (roleEl) {
    roleEl.textContent = roles[0];
    const cursor = document.querySelector(".role-cursor");
    if (cursor) cursor.style.display = "none";
}

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    });
}

function initParallax() {
    if (prefersReducedMotion) return;

    const layers = document.querySelectorAll(".gradient-bg, .float-layer");
    if (!layers.length) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener(
        "mousemove",
        (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            targetX = (e.clientX - cx) / cx;
            targetY = (e.clientY - cy) / cy;
        },
        { passive: true }
    );

    function tick() {
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        const moveX = currentX * 18;
        const moveY = currentY * 18;

        layers.forEach((layer) => {
            layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        requestAnimationFrame(tick);
    }

    tick();
}

initParallax();
