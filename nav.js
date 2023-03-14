const primaryNav = document.querySelector('.pn-flex');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);

    }
});

const header = document.querySelector("header");
window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", window.scrollY > 20);

})