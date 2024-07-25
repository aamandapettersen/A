document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.add("hidden");
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove("hidden");
    }
}
