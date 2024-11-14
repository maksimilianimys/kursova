const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const mobileMenu = document.getElementById('mobile-menu');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
});