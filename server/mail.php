<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $day = $_POST['day'];

  $my_email = "alan.smit.79@bk.ru";
  $subject = "=?utf-8?B?".base64_encode("Новое Сообщение")."?=";
  $headers = "From: $name\r\nReaply-to: $name\r\nContent-type: text/html; charset=utf-8\r\n";
  $mess = "Name: $name\r\nPhone: $phone\r\n День: $day";

  mail($my_email, $subject, $mess, $headers);
?>