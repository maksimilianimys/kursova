const initialSlideIndex = window.innerWidth <= 499 ? 0 : 2;

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 300,
    initialSlide: initialSlideIndex,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            const images = document.querySelectorAll('.slide-image');
            images[this.realIndex].classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            document.querySelectorAll('.slide-image').forEach((img) => {
                img.classList.remove('active');
            });

            const activeIndex = this.realIndex;
            const images = document.querySelectorAll('.slide-image');
            if (images[activeIndex]) {
                images[activeIndex].classList.add('active');
                centerActiveImage(images[activeIndex]);
            }
        },
    },
});

function centerActiveImage(activeImage) {
    const container = document.querySelector('.images');
    const containerRect = container.getBoundingClientRect();
    const imageRect = activeImage.getBoundingClientRect();

    const offset = imageRect.left - containerRect.left + (imageRect.width / 2) - (containerRect.width / 2);

    container.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.slide-image').forEach((img, index) => {
    img.addEventListener('click', () => {
        swiper.slideToLoop(index, 300);
        setActiveImage(img);
    });

    img.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            swiper.slideToLoop(index, 300);
            setActiveImage(img);
        }
    });
});

function setActiveImage(activeImage) {
    document.querySelectorAll('.slide-image').forEach((img) => {
        img.classList.remove('active');
    });

    activeImage.classList.add('active');
}