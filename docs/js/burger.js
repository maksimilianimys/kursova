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


// const openMenuBtn = document.querySelector('.header-navigation-bar-mobile-open-button[data-menu-button][aria-expanded="false"]'); // Кнопка відкриття меню
// const closeMenuBtn = document.querySelector('.header-navigation-bar-mobile-close-button[data-menu-button][aria-expanded="true"]'); // Кнопка закриття меню
// const mobileMenuRef = document.querySelector('[data-menu]');
// const body = document.querySelector('body');
//
// // Відкриття меню
// openMenuBtn.addEventListener('click', () => {
//     mobileMenuRef.classList.add('is-open');
//     openMenuBtn.setAttribute('aria-expanded', 'true');
//     closeMenuBtn.setAttribute('aria-expanded', 'true');
//     body.classList.add('no-scroll');
// });
//
// // Закриття меню
// closeMenuBtn.addEventListener('click', () => {
//     mobileMenuRef.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', 'false');
//     closeMenuBtn.setAttribute('aria-expanded', 'false');
//     body.classList.remove('no-scroll');
// });





