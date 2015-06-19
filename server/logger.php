<?php
$message = "[ChameleonJS]";
$message .= " Browser: " . @$_POST['browser'];
$message .= " Message: " . @$_POST['message'];
$message .= " File: " . @$_POST['file'];
$message .= " Line: " . @$_POST['line'];
$message .= " Column: " . @$_POST['column'];
$message .= " Error: " . @$_POST['error'];

syslog(LOG_WARNING, $message);$