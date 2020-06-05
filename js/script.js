const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

const fadeOutTime = 500;
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    });
});

function fadeScreenOut(newUrl)
{
    document.body.className = "fade-screen-out";
    setTimeout(() => { window.location.href = newUrl }, fadeOutTime);
}