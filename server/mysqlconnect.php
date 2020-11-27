<?php

	// $user = 'root';
	// $password = 'root';
	// $db = 'comments';
  // $host = 'localhost';
  
  $user = 'DiUCEJlRqH';
	$password = 'egVwr7gwWj';
	$db = 'DiUCEJlRqH';
  $host = 'remotemysql.com';
  $charset = 'utf8md4';


	$dsn = "mysql:host=.$host.;dbname=.$db;charset=$charset";
	$pdo = new PDO($dsn, $user, $password);
?>