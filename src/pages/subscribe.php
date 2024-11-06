<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо адресу електронної пошти з форми
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Перевіряємо, чи адреса електронної пошти валідна
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "your_email@example.com"; // Ваша адреса електронної пошти
        $subject = "New Subscription";
        $message = "New subscriber: " . $email;
        $headers = "From: noreply@example.com"; // Ваша адреса електронної пошти

        // Надсилаємо електронний лист
        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for subscribing!";
        } else {
            echo "There was an error sending the email.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request.";
}
?>
