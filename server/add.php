<?php
 
require_once './mysqlconnect.php';
$name = $_POST['name'];
$text = $_POST['text'];

$sql = 'INSERT INTO comment(name, text) VALUES (:name, :text)';
$query = $pdo->prepare($sql);
$query->execute(['name'=>$name, 'text'=>$text]);


?>