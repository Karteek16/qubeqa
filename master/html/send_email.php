<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form fields
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email destination and headers
    $to = "kartiisony16@gmail.com"; // Replace with your actual email
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for reaching out! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
