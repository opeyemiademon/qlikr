<?php
require 'connection.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

if( isset($json_obj['sql'])){ 

 $sql = $json_obj['sql'];
  display_record($sql);
}

 function display_record($sql){
    try{
        global $con;
$result_array = array();
$query = $con->prepare($sql);
    $query->execute(); 
     while ($rows = $query->fetch(PDO::FETCH_ASSOC)){ 
            array_push($result_array, $rows);    
            }
       
     $ans=   mb_convert_encoding($result_array, 'UTF-8', 'UTF-8');
     echo json_encode($ans);
     } catch(PDOException $e){
        LogError($e->getMessage());		
    }
} 
    

?>