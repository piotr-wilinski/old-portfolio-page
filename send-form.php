<?php

header("content-type: application/json; charset=utf-8");
$name = isset($_POST['name']) ? $_POST['name'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$topic = isset($_POST['topic']) ? $_POST['topic'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";
$regulation = isset($_POST['regulation']) ? $_POST['regulation'] : "";

if ($name && $email && $phone && $topic && $message && $regulation) {

  $toEmail = "kontakt@prbros.pl";

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: kontakt@prbros.pl";

  $subject = "Wiadomość z formularza kontaktowego\n";

  $messageBody = "
    <html>
    <head>
      <meta charset=\"utf-8\">
    </head>
    <style type 'text/css'>
      body { font-family: sans-serif; color: #222; padding: 20px; }
      div { margin-bottom: 10px; font-size: 14px }
      .msg-title { margin-to: 30px; }
    </style>
    <body>
      <div><strong>Imię:</strong> $name</div>
      <div><strong>Email:</strong> $email</div>
      <div><strong>Numer telefonu:</strong> $phone</div>
      <div><strong>Temat wiadomości:</strong> $topic</div>
      <div class=\"msg-title\"> <strong>Wiadomość:</strong></div>
      <div>$message</div>
    </body>
    </html>";

  if(mail($toEmail, $subject, $messageBody, null, "-fkontakt@prbros.pl")) {
    $json = array("status" => 1, "msg" => "<p class='status-ok'>Wiadomość wysłana</p>");
  }
  else {
    $json = array("status" => 0, "msg" => "<p class='status-err'>Wystąpił problem z wysłaniem wiadomości</p>");
  }
}

else {
  $json = array("status" => 0, "msg" => "<p class='status-err'>Proszę uzupełnić wszystkie pola!</p>");
}

echo json_encode($json);
exit;

?>