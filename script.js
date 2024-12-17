    document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("div[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    navLink.classList.add("active");
                }
            });
        }, {
            threshold: 0.6 // Ajusta o quanto da seção precisa estar visível
        });

        sections.forEach(section => observer.observe(section));
    });