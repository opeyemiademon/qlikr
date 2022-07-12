<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


date_default_timezone_set('Africa/Lagos');  
$date_time =date('Y-m-d h:m:s a'); 

$secret_key = 'qlikr_db'; 



 
$websiteUrl = 'http://localhost:3000';

$currency  = '₦';

$websiteUrl = 'https://qlikr.com';

$host ='localhost';
$dbname ='qlikr_db';
$user ='root';
$pass ='';   


$hostServer  = $_SERVER['HTTP_HOST'];
$uri   = 'qlikr'; 
$server= 'http://'.$hostServer.'/'.$uri;

$link =  "http://" . $_SERVER['HTTP_HOST'] .  $_SERVER['REQUEST_URI']; 

try{
	$con = new PDO("mysql:host=$host; dbname=$dbname", $user, $pass);
	$con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
}catch(PDOException $e){
	LogErr($e->getMessage());
} 

		
function LogErr($message){
	global $link;
		$jsonString = file_get_contents('errorlog.json');
	$data = json_decode($jsonString, true);
		$new_data = array('dateCreate' => date('Y-m-d H:m:s a'), 'url' => $link, "message"=>$message, "order"=>count($data)+1);	
		array_push($data, $new_data);
		file_put_contents('errorlog.json', json_encode($data));
	}

$device = get_device_name($_SERVER['HTTP_USER_AGENT']);
$browser = get_browser_name($_SERVER['HTTP_USER_AGENT']);

	$PublicIP = get_client_ip();
// use this to get client location http://www.geoplugin.net/php.gp?ip=
function get_browser_name($user_agent){
	if (strpos($user_agent, 'Opera') || strpos($user_agent, 'OPR/')) return 'Opera';
	elseif (strpos($user_agent, 'Edge')) return 'Edge';
	elseif (strpos($user_agent, 'Chrome')) return 'Google Chrome';
	elseif (strpos($user_agent, 'Safari')) return 'Safari';
	elseif (strpos($user_agent, 'Firefox')) return 'Moxila Firefox';
	elseif (strpos($user_agent, 'MSIE') || strpos($user_agent, 'Trident/7')) return 'Internet Explorer';
	return 'Other';
}
function get_device_name($user_agent){
	if (strpos($user_agent, 'windows')) return 'Windows OS';
	elseif (strpos($user_agent, 'Macintosh')) return 'Mac OS';
	elseif (strpos($user_agent, 'mac_powerpc')) return 'Mac OS';
	elseif (strpos($user_agent, 'linux')) return 'Linux';
	elseif (strpos($user_agent, 'ubuntu')) return 'Ubuntu';
	elseif (strpos($user_agent, 'webos')) return 'Mobile';
	elseif (strpos($user_agent, 'iphone')) return 'Iphone';
	elseif (strpos($user_agent, 'ipad')) return 'Ipad';
	elseif (strpos($user_agent, 'win')) return 'Windows';
	elseif (strpos($user_agent, 'Blackberry')) return 'Blackberry';
	elseif (strpos($user_agent, 'Android')) return 'Android';
	return 'Other';
}
	
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
} 
	
				

?>