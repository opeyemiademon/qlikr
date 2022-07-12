<?php 

 require_once 'sendgrid-php/sendgrid-php.php';

use SendGrid\Mail\Mail;

function sendMultipleMail($subject, $body_message, $tos){
$email = new Mail();
$email->setFrom("do_not_reply@kayus.com.ng", "KAYUS.COM.NG");
/*  $tos = [
    "test+test1@example.com" => "Example User1",
    "test+test2@example.com" => "Example User2",
    "test+test3@example.com" => "Example User3"
]; */
$email->addTos($tos); 

//$email->addTo($mail, '');
$email->setSubject($subject);
//$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(  "text/html", $body_message);

$sendgrid = new \SendGrid('API-KEY');

try {
    $response = $sendgrid->send($email);
    if($response->statusCode()==='202'){
        return true;
    }else{
        return false;
    }
   // return $response->statusCode() . "\n";
    //print_r($response->headers());
    //print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
} 

}

?>