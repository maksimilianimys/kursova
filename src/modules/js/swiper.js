// Перевіряємо ширину екрана і встановлюємо індекс початкового слайду
const initialSlideIndex = window.innerWidth <= 768 ? 0 : 2;

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 300,
    initialSlide: initialSlideIndex, // Встановлюємо слайд за замовчуванням
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            const images = document.querySelectorAll('.slide-image');
            // Додаємо клас active до відповідного зображення без прокрутки
            images[this.realIndex].classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            // Оновлюємо активне зображення після завершення переходу
            document.querySelectorAll('.slide-image').forEach((img) => {
                img.classList.remove('active');
            });

            const activeIndex = this.realIndex;
            const images = document.querySelectorAll('.slide-image');
            if (images[activeIndex]) {
                images[activeIndex].classList.add('active');
                // Центруємо активне зображення без прокручування
                centerActiveImage(images[activeIndex]);
            }
        },
    },
});

// Функція для центрованого вирівнювання активного зображення
function centerActiveImage(activeImage) {
    const container = document.querySelector('.images'); // Змінити на ваш контейнер
    const containerRect = container.getBoundingClientRect();
    const imageRect = activeImage.getBoundingClientRect();

    // Обчислюємо позицію прокрутки
    const offset = imageRect.left - containerRect.left + (imageRect.width / 2) - (containerRect.width / 2);

    // Прокручуємо контейнер вручну
    container.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

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

        // Центруємо активне зображення без прокручування
        centerActiveImage(img);
    });
});
