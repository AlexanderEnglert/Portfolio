<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit();
}
$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['name'], $data['email'], $data['message'])) {
    http_response_code(400);
    exit();
}
$name = htmlspecialchars(trim($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($data['message']));
$to = "aenglertymail23@gmail.com";
$subject = "Neue Nachricht von $name";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
$emailBody = "Name: $name\nE-Mail: $email\nNachricht:\n$message";
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
} else {
    http_response_code(500);
}


