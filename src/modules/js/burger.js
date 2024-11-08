const burgerOpen = document.getElementById('burger-open');
const burgerClose = document.getElementById('burger-close');
const mobileMenu = document.getElementById('mobile-menu');

burgerOpen.addEventListener('click', () => {
    mobileMenu.classList.add('is-open'); // Додаємо клас для анімації
    document.body.classList.add('no-scroll'); // Блокуємо прокрутку
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open'); // Забираємо клас для анімації
    document.body.classList.remove('no-scroll'); // Дозволяємо прокрутку
});