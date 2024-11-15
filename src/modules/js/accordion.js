const accordionItems = document.querySelectorAll('.container-accordion');

accordionItems.forEach(item => {
    item.addEventListener('click', function () {
        toggleAccordion(item);
    });

    item.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            toggleAccordion(item);
        }
    });
});

function toggleAccordion(item) {
    accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.content').style.maxHeight = '0';
        }
    });

    item.classList.toggle('active');

    const content = item.querySelector('.content');

    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = '0';
    }
}