function sendEmail() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Регулярний вираз для перевірки формату email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Перевіряємо, чи підходить email під шаблон
    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Введіть правильну пошту';
        return; // Зупиняємо виконання, якщо формат неправильний
    }

    // Якщо формат правильний, ховаємо повідомлення про помилку
    errorMessage.style.display = 'none';

    // Відправляємо email через EmailJS
    let params = {
        email: email
    };

    emailjs.send("service_b7n53x9", "template_46avs6p", params)
        .then(function (response) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
        })
}