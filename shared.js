(function () {
    const path = window.location.pathname.split("/").pop() || "index.html";
    const page = path === "" ? "index.html" : path;

    const navItems = [
        { href: "index.html", label: "Home", file: "index.html" },
        { href: "about.html", label: "About", file: "about.html" },
        { href: "skills.html", label: "Skills", file: "skills.html" },
        { href: "experience.html", label: "Experience", file: "experience.html" },
        { href: "projects.html", label: "Projects", file: "projects.html" },
        { href: "contact.html", label: "Contact", file: "contact.html" },
    ];

    const ambientHTML = `
    <div class="noise" aria-hidden="true"></div>
    <div class="gradient-bg" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
        <div class="orb orb-5"></div>
    </div>
    <div class="float-layer" aria-hidden="true">
        <span class="float-icon fi-1">{ }</span>
        <span class="float-icon fi-2">&lt;/&gt;</span>
        <span class="float-icon fi-3">◆</span>
        <span class="float-icon fi-4">✦</span>
        <span class="float-icon fi-5">◎</span>
        <span class="float-icon fi-6">▲</span>
        <span class="float-shape fs-1"></span>
        <span class="float-shape fs-2"></span>
        <span class="float-shape fs-3"></span>
        <span class="float-dot fd-1"></span>
        <span class="float-dot fd-2"></span>
        <span class="float-dot fd-3"></span>
        <span class="float-dot fd-4"></span>
        <span class="float-dot fd-5"></span>
        <span class="float-dot fd-6"></span>
    </div>
    `;

    const navLinks = navItems
        .map(
            (item) =>
                `<li><a href="${item.href}" class="${item.file === page ? "active" : ""}">${item.label}</a></li>`
        )
        .join("");

    const footerLinks = navItems
        .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
        .join("");

    const headerHTML = `
    <header class="site-header">
        <nav class="navbar" aria-label="Main">
            <a href="index.html" class="logo">Sana<span>.</span></a>
            <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
            <ul id="nav-menu" class="nav-links">${navLinks}</ul>
        </nav>
    </header>
    `;

    const year = new Date().getFullYear();

    const footerHTML = `
    <footer class="site-footer">
        <div class="footer-glow" aria-hidden="true"></div>
        <p class="footer-watermark" aria-hidden="true">SANA</p>
        <div class="footer-inner">
            <div class="footer-brand">
                <a href="index.html" class="footer-logo">Sana Mamnoon</a>
                <p class="footer-tagline">MCA @ AMU · Web · UI/UX · AI</p>
                <p class="footer-location">Aligarh, Uttar Pradesh</p>
            </div>
            <div class="footer-col">
                <h4>Explore</h4>
                <ul class="footer-links">${footerLinks}</ul>
            </div>
            <div class="footer-col">
                <h4>Connect</h4>
                <ul class="footer-links footer-connect">
                    <li><a href="mailto:gm5311@myamu.ac.in">gm5311@myamu.ac.in</a></li>
                    <li><a href="tel:+918090214901">(+91) 8090214901</a></li>
                    <li><a href="https://github.com/Sana5311" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/sana-mamnoon-51255726a" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
            <div class="footer-col footer-cta-col">
                <h4>Let's talk</h4>
                <p>Open to internships and software roles.</p>
                <a href="contact.html" class="btn btn-primary btn-sm">Contact me</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© ${year} Sana Mamnoon. Crafted with care.</p>
            <button type="button" class="back-to-top" aria-label="Back to top">
                <span>Top</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML("afterbegin", ambientHTML);

    const headerSlot = document.getElementById("site-header");
    if (headerSlot) {
        headerSlot.outerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML("afterbegin", headerHTML);
    }

    const footerSlot = document.getElementById("site-footer");
    if (footerSlot) {
        footerSlot.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML("beforeend", footerHTML);
    }
})();
