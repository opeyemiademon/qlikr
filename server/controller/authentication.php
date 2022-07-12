<?php
include 'connection.php';
require 'plugins/php_jwt/vendor/autoload.php';
use \Firebase\JWT\JWT;


$websiteUrl = 'https://app.bsnsports.com.ng/';
function getToken($jwt){
   global $secret_key;
        try{
            $decoded = JWT::decode($jwt, $secret_key, array('HS256'));
            //return $decoded->data->userToken;
            return true;
         } catch (\Firebase\JWT\ExpiredException $e){
               // LogError($e->getMessage());
                echo 'Expired Token ';
                echo("<script>location.href = '$websiteUrl';</script>"); 
        }
}

?>