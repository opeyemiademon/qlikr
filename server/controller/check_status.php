<?php
include 'connection.php';


if(isset($_GET['onlineID'])){
   $onlineID = $_GET['onlineID'];

checkstatus();
}



//function to change status	
function checkstatus(){

	try{
		global $con;

	$query = $con->prepare("Select  password from  tbl_customers where onlineID =:onlineID limit 1");
	 $query->execute(['onlineID'=>$_GET['onlineID']]);

	if ($rows = $query->fetch(PDO::FETCH_ASSOC)){
	echo 'success';		
	}else{ 
		echo 'false';
	}
	$con = null;	
}

catch (PDOException $e){
	$log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
	echo $log;	
}
}
?>