const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    speed: 300,
    spaceBetween: 24,
    slideToClickedSlide: true, // Дозволяє клікати на слайди для переміщення
    loopedSlides: 5, // Кількість слайдів для зациклення
    watchSlidesProgress: true, // Слідкуємо за прогресом слайдів
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});