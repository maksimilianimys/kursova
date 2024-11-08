const accordionItems = document.querySelectorAll('.container-accordion');

accordionItems.forEach(item => {
    item.addEventListener('click', function () {
        // Закриваємо всі інші елементи
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.content').style.maxHeight = '0'; // Сховати контент
            }
        });

        // Перемикаємо активність для натиснутого елемента
        this.classList.toggle('active');

        const content = this.querySelector('.content');

        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'; // Показати контент
        } else {
            content.style.maxHeight = '0'; // Сховати контент
        }
    });
});