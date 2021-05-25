<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = now PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setlanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

$mail->setForm('titimoshuk.anastasiya@gmail.com', 'Гости');
$mail->addAddress('aleksandr.pryadko@gmail.com');
$mail->Subject = 'Приглашение на свадьбу';

$persone = 'Конечно буду!';
if($_POST['persone'] == 'willNot'){
    $persone = 'К сожалению, я не смогу';
}else if($_POST['persone'] == 'willAlone'){
    $persone = 'Буду одна/один';
}else if($_POST['persone'] == 'willNotAlone'){
     $persone = 'Буду с парой/детьми';
}

$body = '<h1>Ответ на приглашение</h1>';
$body.='<p><strong>Имя и фамилия:</strong> '.$_POST['username'].'</p>';
$body.= '<p><strong>Сщщбщение:</strong> '.$_POST['feedback'].'</p>';
$body.='<p><strong>Колычество персон:</strong> '.$persone.'</p>';

if(!~$mail->send()){
    $message = 'Ошибка';
}else{
    $message = 'Ответ отправлен!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>