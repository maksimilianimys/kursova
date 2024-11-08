const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 300,
    initialSlide: 2, // Встановлюємо третій слайд (індекс 2) як активний за замовчуванням
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            // Додаємо клас "active" до відповідного зображення при ініціалізації
            const images = document.querySelectorAll('.slide-image');
            images[this.realIndex].classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            // Оновлюємо активне зображення після завершення переходу
            // Видаляємо клас "active" з усіх зображень
            document.querySelectorAll('.slide-image').forEach((img) => {
                img.classList.remove('active');
            });

            // Отримуємо індекс активного слайда
            const activeIndex = this.realIndex;

            // Додаємо клас "active" до відповідного зображення
            const images = document.querySelectorAll('.slide-image');
            if (images[activeIndex]) {
                images[activeIndex].classList.add('active');
            }
        },
    },
});

// Додаємо події "click" для зображень
document.querySelectorAll('.slide-image').forEach((img, index) => {
    img.addEventListener('click', () => {
        // Перемикаємося на відповідний слайд за індексом
        swiper.slideToLoop(index, 300); // 300 - це швидкість анімації

        // Видаляємо клас "active" з усіх зображень
        document.querySelectorAll('.slide-image').forEach((img) => {
            img.classList.remove('active');
        });

        // Додаємо клас "active" до натиснутого зображення
        img.classList.add('active');
    });
});