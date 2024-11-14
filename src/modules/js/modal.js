(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();

const daySelect = document.getElementById('day-select');
const hourSelect = document.getElementById('hour-select');

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

    hourSelect.innerHTML = '<option value="" disabled selected>Виберіть годину</option>';

    const hours = (selectedDay === 'saturday' || selectedDay === 'sunday') ? weekendHours : weekdayHours;

    hours.forEach(hour => {
        const option = document.createElement('option');
        option.value = hour.value;
        option.textContent = hour.text;
        hourSelect.appendChild(option);
    });
}

daySelect.addEventListener('change', updateHours);