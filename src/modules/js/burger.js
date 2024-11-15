const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

const toggleMenu = (isOpen) => {
    mobileMenu.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
};

burgerOpen.addEventListener('click', () => toggleMenu(true));
burgerClose.addEventListener('click', () => toggleMenu(false));

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(false);
    });
});