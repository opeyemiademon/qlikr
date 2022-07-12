<?php
require 'authentication.php';
$message = null;

if(isset($_GET['tablename']) && getToken($_POST['jwt'])==true && isset($_POST['ID'])){
	$ID = $_POST['ID'];
	$data = $_POST['data'];
	$table = $_GET['tablename'];

if(deleterow($table, $ID, $data)==true){
    $message = json_encode(['message' => 'Record successfully Deleted', 'type' => 'success' ]);
    echo $message;	
}

} 



//////////////////////////////////////////////////////Global function to delete row start here
function deleterow($table, $ID, $data){
		
	try{
		global $con;
	$sql ="DELETE from `{$table}` where `{$ID}` =:uniqueid";
	$query = $con->prepare($sql);
	$result = $query->execute(['uniqueid'=> $data]);
		 if($result){
			
		return true;
		}
			else{
				return false;
			}
			$con = null;
			}catch (PDOException $e){
	 $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
	 LogError($e->getMessage());
				$message = json_encode(['message' => 'Error: '.$log]);		
	
}	
}
//////////////////////////////////////////////////////Global function to delete row end here

?>