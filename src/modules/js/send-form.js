const emailJSScript = document.createElement('script');
emailJSScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(emailJSScript);

emailJSScript.onload = function () {
    emailjs.init({
        publicKey: "jRJMh1CnjIQRXJPWu",
    });
};

function sendEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Введіть правильну пошту';
        return;
    }

    errorMessage.style.display = 'none';

    let params = {
        email: email
    };

    emailjs.send("service_b7n53x9", "template_46avs6p", params)
        .then(function (response) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
        })
        .catch(function (error) {
            console.log("Помилка при відправленні:", error);
        });
}