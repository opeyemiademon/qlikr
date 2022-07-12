<?php
require 'authentication.php';
$message = null;
//tablename=$1&column=$2&token=$3





if(isset($_GET['tablename'])){
    
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

    $tablename= $_GET['tablename'];
    $column = $_GET['column'];
    $data = $json_obj['data'];// $_POST['data'];
    
     $columnName = array($column);    
      $fields = array($column=>':column'); 
      $values = array('column'=>$data);
      if(Existence($columnName, $tablename,  $fields, $values)){
          echo 'true';
      }else{
          echo 'false';
      }
  } 


function Existence($column, $table,  $fields, $info) {
    global $con;
$set = '';
$x = 1;
$columns = implode('`, `', $column);
foreach($fields as $name => $value) {
    $set .= "{$name} = {$value}";
    if($x < count($fields)) {
        $set .= ' AND ';
    }
    $x++;
}

 try{
    $sql = "SELECT `{$columns}` FROM {$table}  WHERE {$set}"; 	
$query = $con->prepare($sql);
$query ->execute($info);
$result = $query->fetchColumn();	
if($result){
    return true;		
}else{ return false;}
$con = null;	

}

catch (PDOException $e){
    $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
    LogError($e->getMessage());
               $message = json_encode(['message' => 'Error: '.$log]);		
}
}	

?>