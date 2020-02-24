<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once('phpmailer/PHPMailerAutoload.php');

const COOKIE = "cdyvfugbhinjahuirgfuae";


$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$text = json_decode(file_get_contents('php://input'), true);
if(isset($text["text"])){
    $text = $text["text"];
}else{
    http_response_code(400);
    exit(400);
}

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'survey@xyzz.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '3W4bDsRn'; // Ваш пароль от почты с которой будут отправляться письма
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('survey@xyzz.ru'); // от кого будет уходить письмо?
$mail->addAddress('nik_mak@bk.ru');     // Кому будет уходить письмо
$mail->addAddress('timger98@gmail.com');     // Кому будет уходить письмо
$mail->addAddress('zakaz.aplana@gmail.com');     // Кому будет уходить письмо
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Результат голосования "Лучшая авиакомпания 2019"';
$mail->Body    = $text;
$mail->AltBody = '';
if(!isset($_COOKIE[COOKIE])){
    if(!$mail->send()) {
        http_response_code(500);
    }else{
        setcookie(COOKIE, true);
    }
}else{
    http_response_code(403);
}
echo $_SERVER['REMOTE_ADDR'];
?>