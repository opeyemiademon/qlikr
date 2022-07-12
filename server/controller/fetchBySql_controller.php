<?php
require 'connection.php';

if( isset($_POST['sql'])){ 
  $sql = $_POST['sql'];
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