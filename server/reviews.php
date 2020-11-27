<?php
	
	
		require_once './mysqlconnect.php';
		$sql = 'SELECT * FROM `comment`';
		$query = $pdo->query($sql);

		
		
		while ($row = $query->fetchAll(PDO:: FETCH_ASSOC)) {
			
			 
			echo json_encode($row);
		};
		
	?>
	
