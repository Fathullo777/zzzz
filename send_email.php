<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'fathullorasulov198@gmail.com';
    $subject = 'Новое сообщение от ' . $name;
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";

    if (mail($to, $subject, $body)) {
        echo 'Сообщение отправлено!';
    } else {
        echo 'Ошибка при отправке сообщения.';
    }
}
?>
