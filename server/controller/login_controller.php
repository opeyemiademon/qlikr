<?php
include 'connection.php';
require 'plugins/php_jwt/vendor/autoload.php';
use \Firebase\JWT\JWT;

if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_users'){

    $json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str, true);
    
    if( isset($json_obj['user_login'])){ 
    try{ 
             $user_login = 	$json_obj['user_login'];
             $password = $json_obj['user_pass'];
             global $con;
            
        $sql = "Select user_code, display_name, user_login, user_pass from tbl_users where (user_email =:user_login OR user_login =:user_login) and user_status ='Active' Limit 1"; 	
        $query = $con->prepare($sql);
        $query ->execute(['user_login'=>$user_login]);
        if ($rows = $query->fetch(PDO::FETCH_ASSOC)){ 
            $hashed_password = $rows['user_pass'];
            $code = $rows['user_code']; 
            $display_name = $rows['display_name'];
            if(password_verify($password, $hashed_password)) {
              
                $userToken = uniqid();
                $token = array(
                    "iss"=> $link,
                    "aud"=>'bsnsports',
                    "iat"=>time(),
                    "nbf"=>time(),
                    "exp"=>time()+(60*60*7),
                    "data"=>array(
                        "userToken"=>$userToken,
                        "fullname"=>$display_name )
                    );

                $jwt = JWT::encode($token, $secret_key);
                $message = json_encode(['message' => 'You have successfully login', 'code'=>$code,  "jwt" =>$jwt, "display_name"=>$display_name, 'type' => 'success']);
          
          
            }else{
                $message = json_encode(['message' => 'it looks like these are not your correct details', 'type' => 'error']);
            } 
    }else{
                $message = json_encode(['message' => 'Invalid Credentials', 'type' => 'error']);
            } 
    									
             $con = null;

        }
        catch (PDOException $e){
            LogError($e->getMessage());	
        $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
            }
    
         }else{
            $message = json_encode(['message' => 'The request is empty', 'type' => 'error']);
        } 
        echo $message;
    }

?>