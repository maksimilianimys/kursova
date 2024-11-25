const emailJSScript = document.createElement('script');
emailJSScript.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(emailJSScript);

emailJSScript.onload = function () {
    emailjs.init({
        publicKey: "CYS4fZl9dGJyoih_3",
    });
};

function sendEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const subscribeButton = document.getElementById('subscribe-button');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        subscribeButton.innerText = 'Invalid email';
        subscribeButton.style.color = 'red';
        subscribeButton.style.backgroundColor = 'lightgray';

        setTimeout(() => {
            subscribeButton.innerText = 'SUBSCRIBE';
            subscribeButton.style.color = '';
            subscribeButton.style.backgroundColor = '';
        }, 3000);

        return;
    }

    subscribeButton.innerText = 'Registration';
    subscribeButton.style.color = '';
    subscribeButton.style.backgroundColor = '';

    let params = {
        email: email
    };

    emailjs.send("service_2b3g6ks", "template_kfbjctl", params)
        .then(function (response) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
        })
        .catch(function (error) {
            console.log("Помилка при відправленні:", error);
        });
}

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/

function sendModalEmail(event) {
    event.preventDefault();
    const modal_name = document.getElementById('modal_name').value;
    const day_select = document.getElementById('day_select').value;
    const hour_select = document.getElementById('hour_select').value;
    const modal_email = document.getElementById('modal_email').value;
    const modal_comment = document.getElementById('modal_comment').value;
    const submitButton = document.getElementById('submit-button');

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(modal_email)) {
        submitButton.innerText = 'Invalid email, try again';
        submitButton.style.color = 'red';
        submitButton.style.backgroundColor = 'lightgray';

        setTimeout(() => {
            submitButton.innerText = 'REGISTRATION';
            submitButton.style.color = '';
            submitButton.style.backgroundColor = '';
        }, 3000);

        return;
    }

    submitButton.innerText = 'Registration';
    submitButton.style.color = '';
    submitButton.style.backgroundColor = '';

    let params = {
        modal_name: modal_name,
        day_select: day_select,
        hour_select: hour_select,
        modal_email: modal_email,
        modal_comment: modal_comment
    };

    emailjs.send("service_2b3g6ks", "template_cuqp6k7", params)
        .then(function (response) {
            document.getElementById('modal-window-form').style.display = 'none';
            document.getElementById('modal-window-overlay').style.display = 'block';

            setTimeout(() => {
                closeModal();
            }, 5000);
        })
        .catch(function (error) {
            console.log("Помилка при відправленні:", error);
        });
}