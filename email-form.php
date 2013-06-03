<?php
$to = "amandabutterworth@gmail.com";
$email = $_REQUEST['email'] ;
$first = $_REQUEST['first'] ;
$last = $_REQUEST['last'] ;
$subject = "P&P message from: $first $last";
$message = $_REQUEST['message'] ;
$headers = "noreply@pixelsandpancakes.com";
$body = "From: $first $last \n\n Email: $email \n\n Message: $message";
$sent = mail($to, $subject, $body, $headers) ;
if($sent)
{echo "Your message was sent successfully. Please hit your browser's back button to return to the website.";}
else
{echo "Sorry, there has been an error. Please hit your browser's back button to try submitting the form again.";}
?>