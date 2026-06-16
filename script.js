document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("a, .card");

    links.forEach(el => {
        el.addEventListener("click", (e) => {

            const href = el.getAttribute("href");

            if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

});