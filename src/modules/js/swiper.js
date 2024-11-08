// Функція для автоматичного прокручування до активного елементу
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
            const images = document.querySelectorAll('.slide-image');
            images[this.realIndex].classList.add('active');
            images[this.realIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center', // Центрування по вертикалі
                inline: 'center', // Центрування по горизонталі
            });
        },
        slideChangeTransitionEnd: function () {
            document.querySelectorAll('.slide-image').forEach((img) => {
                img.classList.remove('active');
            });

            const activeIndex = this.realIndex;
            const images = document.querySelectorAll('.slide-image');
            if (images[activeIndex]) {
                images[activeIndex].classList.add('active');
                images[activeIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center', // Центрування по вертикалі
                    inline: 'center', // Центрування по горизонталі
                });
            }
        },
    },
});

// Додаємо події "click" для зображень
document.querySelectorAll('.slide-image').forEach((img, index) => {
    img.addEventListener('click', () => {
        swiper.slideToLoop(index, 300); // 300 - це швидкість анімації

        // Видаляємо клас "active" з усіх зображень
        document.querySelectorAll('.slide-image').forEach((img) => {
            img.classList.remove('active');
        });

        // Додаємо клас "active" до натиснутого зображення
        img.classList.add('active');

        // Прокручуємо до активного елемента плавно
        img.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Центрування по вертикалі
            inline: 'center', // Центрування по горизонталі
        });
    });
});
