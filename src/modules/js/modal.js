(() => {
    const refs = {
        openModalBtns: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    };

    let firstFocusableElement;
    let lastFocusableElement;

    setFocusableElements(false);

    refs.openModalBtns.forEach(button => {
        button.addEventListener("click", () => {
            toggleModal();
            setFocusableElements(true);
            firstFocusableElement.focus();
        });
    });

    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.modal.addEventListener("click", (event) => {
        if (event.target === refs.modal) {
            toggleModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (refs.modal.classList.contains("is-hidden")) return;

        if (event.key === "Escape") {
            toggleModal();
        } else if (event.key === "Tab") {
            handleTabFocus(event);
        }
    });

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");

        if (refs.modal.classList.contains("is-hidden")) {
            setFocusableElements(false);
        } else {
            firstFocusableElement.focus();
        }
    }

    function setFocusableElements(enable) {
        const focusableContent = refs.modal.querySelectorAll(refs.focusableElements);
        firstFocusableElement = focusableContent[0];
        lastFocusableElement = focusableContent[focusableContent.length - 1];

        if (enable) {
            focusableContent.forEach(element => {
                element.removeAttribute('tabindex');
            });
        } else {
            focusableContent.forEach(element => {
                element.setAttribute('tabindex', '-1');
            });
        }
    }

    function handleTabFocus(event) {
        if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
})();

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

const daySelect = document.getElementById('day_select');
const hourSelect = document.getElementById('hour_select');

const weekdayHours = [
    {value: "11", text: "11:00"},
    {value: "12", text: "12:00"},
    {value: "13", text: "13:00"},
    {value: "14", text: "14:00"},
    {value: "15", text: "15:00"},
    {value: "16", text: "16:00"},
    {value: "17", text: "17:00"},
    {value: "18", text: "18:00"},
    {value: "19", text: "19:00"},
    {value: "20", text: "20:00"},
    {value: "21", text: "21:00"},
];

const weekendHours = [
    {value: "14", text: "14:00"},
    {value: "15", text: "15:00"},
    {value: "16", text: "16:00"},
    {value: "17", text: "17:00"},
    {value: "18", text: "18:00"},
    {value: "19", text: "19:00"},
    {value: "20", text: "20:00"},
];

function updateHours() {
    const selectedDay = daySelect.value;

    hourSelect.innerHTML = '<option value="" disabled selected>Select hour</option>';

    const hours = (selectedDay === 'saturday' || selectedDay === 'sunday') ? weekendHours : weekdayHours;

    hours.forEach(hour => {
        const option = document.createElement('option');
        option.value = hour.value;
        option.textContent = hour.text;
        hourSelect.appendChild(option);
    });
}

daySelect.addEventListener('change', updateHours);

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

function closeModal() {
    document.querySelector('.backdrop').classList.add('is-hidden');
}

document.querySelector('.backdrop').addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});