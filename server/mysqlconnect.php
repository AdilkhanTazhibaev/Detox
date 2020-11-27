<?php

	// $user = 'root';
	// $password = 'root';
	// $db = 'comments';
  // $host = 'localhost';
  $host = 'remotemysql.com';
  $user = '1EPfYEIuvC';
	$password = 'uDrSpceULg';
	$db = '1EPfYEIuvC';
  
  $charset = 'utf8md4';


	$dsn = 'mysql:host='.$host.';dbname='.$db;
	$pdo = new PDO($dsn, $user, $password);
?>