<?php

// $user = 'root';
// $password = 'root';
// $db = 'comments';
// $host = 'localhost';
$user = 'root';
$password = 'root';
$db = 'comments';
$host = 'localhost';
$port = 3306;

$charset = 'utf8md4';


$dsn = 'mysql:host=' . $host . ';dbname=' . $db;
$pdo = new PDO($dsn, $user, $password);
