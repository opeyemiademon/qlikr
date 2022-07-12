<?php
include 'connection.php';


if(isset($_GET['onlineID'])&&  isset($_GET['password'])){
   $onlineID = $_GET['onlineID'];

checkstatus();
}



//function to change status	
function checkstatus(){

	try{
		global $con;

	$query = $con->prepare("Select  code , fullname from  tbl_customers where onlineID =:onlineID and password=:password limit 1");
	 $query->execute(['onlineID'=>$_GET['onlineID'], 'password'=>$_GET['password']]);

	if ($rows = $query->fetch(PDO::FETCH_ASSOC)){
//86400 = 1 day, 3600 = 1hour
		setcookie('rbk', $rows['code'], time() + (7200 * 30), '/');
        echo json_encode($rows);
	}else{ 
		 echo json_encode(['code' => '']);
	}
	$con = null;	
}

catch (PDOException $e){
	$log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
	echo $log;	
}
}
?>