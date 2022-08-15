<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('###', 'Заказ на скин');
$mail->addAddress('###');
$mail->Subject = 'Заказ на скин';

$body = "<h1>Заявка с сайта!</h1>";

if (trim(!empty($_POST['name']))){
    $body.='<p>Имя: '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p>E-mail пользователя: '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p>Сообщение пользователя: '.$_POST['message'].'</p>';
}

if(!empty($_FILES['image']['tmp_name'])){
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];

    if(copy($_FILES['image']['tmp_name'], $filePath)){
        $fileAttach = $filePath;
        $body .= '<h4>Скин пользователя</h4>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

if (!$mail->send()){
    $message = 'Ошибка';
} else {
    $message = "Данные успешно отправлены!";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>