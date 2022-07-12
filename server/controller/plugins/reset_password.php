<?php 
include '../connection.php';
include 'sendgrid_mail.php';

	if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_reset_password'){


		if(isset($_POST['email'])){	
		try{ 
				 $email = 	$_POST['email'];
				 global $con;
				
			$sql = "Select  email, studentName from tbl_admission_request where email =:email limit 1"; 	
			$query = $con->prepare($sql);
			$query->execute(['email'=>$email]);
			if ($rows = $query->fetch(PDO::FETCH_ASSOC)){ 
				$studentName= $rows['studentName'];

				$token	= uniqid().date("Ymdhhis");

	$query2 = $con->prepare("Insert Into tbl_reset_password (email, fullname, token, status, dateCreate) values (:email, :fullname, :token, :status, :dateCreate) ");

				$query2->execute(['email'=>$email, 'fullname'=>$fullname, 'token'=>$token, 'status'=>'active',  'dateCreate'=>date('Y-m-d')]);


				$sql3 = "Select  emailMessage, emailBcc, emailAccount, emailSubject from tbl_message_template where isEmail ='true' and isActive ='true' and templateName = 'Customer.PasswordRecovery' "; 	
				$query3 = $con->prepare($sql3);
				$query3->execute();

			if ($rs = $query3->fetch(PDO::FETCH_ASSOC)){ 
				$emailMessage = $rs['emailMessage'];
				$emailBcc = $rs['emailBcc'];
				$emailAccount = $rs['emailAccount'];


				$emailSubject = $rs['emailSubject'];
			$recoveryUrl = $websiteUrl.'/?myemail='.$email.'&mytoken='.$token.'&dateAccess='.date('Y-m-d H:m:s');

				
			$search           = array('%Customer.FullName%', '%Customer.PasswordRecoveryURL%');
			$replace          = array($fullname, $recoveryUrl);
			$replaced_message = str_replace($search, $replace, $emailMessage);
				$email_subject = str_replace('%Store.Name%', $storeName, $emailSubject);

			}
			
				//Recipients
					
					LogErrors($email.':  Request for change of password using '.$recoveryUrl);
					if(sendNewMail($emailSubject, $replaced_message, $email)) {
						
					$message = json_encode(['message' => 'New Password link has been sent to '.$email.', Kindly check email. Remember to check your junk/spam folder as well', 'type' => 'success']);
					  } else{
						LogErrors('Unable to send mail');
				$message = json_encode(['message' => 'Unable to send mail', 'type' => 'error']);
					} 

			}else{
					$message = json_encode(['message' => 'Email not found', 'type' => 'error']);
				} 
			
			}
			catch (PDOException $e){
				LogErrors($e->getMessage());	
			$message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
				}

}else{
	$message = json_encode(['message' => 'The request is empty', 'type' => 'error']);
} 
echo $message;
}



		
function LogErrors($message){
	global $link;
		$jsonString = file_get_contents('../errorlog.json');
	$data = json_decode($jsonString, true);
		$new_data = array('dateCreate' => date('Y-m-d H:m:s a'), 'url' => $link, "message"=>$message, "order"=>count($data)+1);	
		array_push($data, $new_data);
		file_put_contents('../errorlog.json', json_encode($data));
	}	
?>