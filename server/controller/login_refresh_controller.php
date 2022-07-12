<?php
include 'connection.php';
require 'plugins/php_jwt/vendor/autoload.php';
use \Firebase\JWT\JWT;


if(getToken($_POST['jwt'])==true  && $_GET['tablename'] =='tbl_refresh_login_user'){

    if(isset($_POST['code'])){	
    try{ 
            
        $userToken = uniqid();
                $token = array(
                    "iss"=> $link,
                    "aud"=>'kayus.com.ng',
                    "iat"=>time(),
                    "nbf"=>time(),
                    "exp"=>time()+(60*60),
                    "data"=>array(
                        "userToken"=>$userToken,
                        "code"=>$_POST['code']
                    )
                    );

                $jwt = JWT::encode($token, $secret_key);
        
                $message = json_encode(['message' => 'You have successfully login', 'code'=>$_POST['code'], "jwt" =>$jwt, "userToken"=>$userToken, 'type' => 'success']);
        

        }
        catch (\Firebase\JWT\ExpiredException $e){
            LogError($e->getMessage());
        $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
            }
    
         }else{
            $message = json_encode(['message' => 'The request is empty', 'type' => 'error']);
        } 
        echo $message;
    }



    function getToken($jwt){
        global $secret_key;
             try{
                 $decoded = JWT::decode($jwt, $secret_key, array('HS256'));
                 //return $decoded->data->userToken;
                 return true;
              } catch (\Firebase\JWT\ExpiredException $e){
                    LogError($e->getMessage());
             }
     }
?>