<?php

	// $user = 'root';
	// $password = 'root';
	// $db = 'comments';
  // $host = 'localhost';
  $user = 'alansmit79';
$password = 'Adil_210900';
$db = 'alansmit79';
$host = 'localhost';
$port = 5432;
  
  $charset = 'utf8md4';


	$dsn = 'mysql:host='.$host.';dbname='.$db;
	$pdo = new PDO($dsn, $user, $password);