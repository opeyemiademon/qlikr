<?php
include 'connection.php';

if(isset($_GET['tablename'])){

if(isset($_POST['code'])){	
 try{ 
    $code = 	$_POST['code'];
    $columnField = $_POST['newValue'];
    $columnName = 	$_POST['column'];
    $table = $_GET['tablename'];
	  
     $column = array($columnName);    
      $info = array('column'=>$columnField, "uniqueid"=>$code); 
      $fields = array($columnName=>':column'); 
           
      if(Updatedata($table, $fields, $info, 'code')){	
        $message = json_encode(['message' => 'Record sucessfully updated', 'type' => 'success']);
     // return true;
       	
        }
    }
        catch (PDOException $e){
            $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
            file_put_contents('errorlog.json', $log, FILE_APPEND);	
            $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
        } 

      }else{
        $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
    }  
    echo $message;
}






    function UpdateData($table, $fields, $info, $columnName) {
		global $con;
    $set = '';
    $x = 1;

    foreach($fields as $name => $value) {
        $set .= "{$name} = {$value}";
        if($x < count($fields)) {
            $set .= ',';
        }
        $x++;
    }

    try{
		$sql = "UPDATE {$table} SET {$set} WHERE {$columnName} =:uniqueid";
	$query = $con->prepare($sql);
	$result = $query->execute($info);
	 if($result){
			return true;
			}
				else{
					return false;
				}
	$con = null;	

}

catch (PDOException $e){
   // LogError($e->getMessage());
} 
}

?>