<?php
include 'authentication.php';
require_once('compress_image.php');


if(isset($_POST['senderEmail'])  && $_GET['tablename'] =='tbl_new_comment'){

                     
    if(isset($_POST['jwt'])){	
try{			

    
            $senderName	= 	$_POST['senderName'];
            $senderEmail = $_POST['senderEmail'];
            $message = 	$_POST['message'];
            $postID	= 	$_POST['postID'];
            $code	= 	date('ymdsis');
            $commentParent	= 	$_POST['commentParent'];
            $comment_date = $_POST['comment_date'];
            $table = 'tbl_comments';

$column = array('comment_post_ID', 'comment_author', 'comment_author_email', 'comment_author_IP', 'comment_date', 'comment_content',	'comment_approved',	'comment_agent', 'comment_type', 'comment_parent', 'user_id', 'code');

 $data = array(':comment_post_ID', ':comment_author', ':comment_author_email', ':comment_author_IP', ':comment_date', ':comment_content',	':comment_approved', ':comment_agent', ':comment_type', ':comment_parent', ':user_id', ':code');

 $values = array("comment_post_ID"=>$postID, "comment_author"=> $senderName, "comment_author_email"=> $senderEmail, "comment_author_IP"=>$PublicIP, "comment_date"=> $comment_date, "comment_content"=> $message, "comment_approved"=> 1, "comment_agent"=> $browser.' - '.$device,  "comment_type"=> 'comment', "comment_parent"=>$commentParent, "user_id"=>'', "code"=>$code);


        if(Insertdata($table, $column, $data, $values)){

        $message = json_encode(['message' => 'Your comment has been posted', 'type' => 'success']);
        }   
        
            }
        catch (PDOException $e){
            $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
           // LogError($e->getMessage());	
            $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
        }
     }else{
            $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
        }  
         
        echo $message;
    
    }



if( $_GET['tablename'] =='tbl_category'){
    
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);
             
    if(getToken($json_obj['jwt'])==true){	
try{			

    
            $todayTime	= 	date('Y-m-d');
            $parent	= 	$json_obj['parent'];
            $code	= 	$json_obj['code'];
            $name	= $json_obj['name'];
            $slug	= 	$json_obj['slug'];
            $avatar	= 	$json_obj['avatar'];
            $description	= 	$json_obj['description'];

            $table = 'tbl_category';


$column = array('code', 'parent', 'name', 'slug', 'avatar', 'description');		  
 $data = array(':code', ':parent', ':name', ':slug', ':avatar', ':description');

 $values = array("code"=>$code, "parent"=>$parent, "name"=>$name, "slug"=>$slug, "avatar"=>$avatar, "description"=> $description);


        if(Insertdata($table, $column, $data, $values)){

        $message = json_encode(['message' => 'Category successfully added', 'type' => 'success']);
        }   
        
            }
        catch (PDOException $e){
            $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
           // LogError($e->getMessage());	
            $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
        }
     }else{
            $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
        }  
         
        echo $message;
    
    }

  
if( $_GET['tablename'] =='tbl_subscriber'){
             
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

     if(isset($json_obj['email'])){	
 try{			
 
     
             $todayTime	= 	date('Y-m-d');
             $email	= $json_obj['email'];	//$_POST['email'];
 
             $table = 'tbl_subscriber';
 
 
 $column = array('email', 'dateCreate');		  
  $data = array(':email', ':dateCreate');
 
  $values = array("email"=>$email, "dateCreate"=> $todayTime);
 
 
         if(Insertdata($table, $column, $data, $values)){
 
         $message = json_encode(['message' => 'You have successfully subscribed', 'type' => 'success']);
         }   
         
             }
         catch (PDOException $e){
             $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
            // LogError($e->getMessage());	
             $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
         }
      }else{
             $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
         }  
          
         echo $message;
     
     }
 
 


if(isset($_POST['user_code'])  && $_GET['tablename'] =='tbl_users'){

                     
    if(getToken($_POST['jwt'])==true){	
try{			

    

            $description	= 	$_POST['description'];
            $display_name = $_POST['display_name'];
           
           
            $user_email = 	$_POST['user_email'];
            $user_code	= 	$_POST['user_code'];
            $user_pass	= 	password_hash($_POST['user_pass'], PASSWORD_DEFAULT);
            $todayTime	= 	date('Y-m-d H:m:s');
            $user_login	= 	$_POST['user_login'];

            $table = 'tbl_users';

            $imageUrl= '';


            if(isset($_FILES['image']) && !empty($_FILES['image']['tmp_name'])){
               
               

                $imageUrl = uniqid().'.png';

               
                $folder = "../images/users/".basename($imageUrl);
                compressImage($_FILES['image']['tmp_name'],$folder,60);

            } 


$column = array('user_login', 'user_pass', 'user_code', 'user_email', 'user_url', 'user_registered', 'user_status', 'display_name', 'description');		  
 $data = array(':user_login', ':user_pass', ':user_code', ':user_email', ':user_url', ':user_registered', ':user_status', ':display_name', ':description');



 $values = array("user_login"=>$user_login, "user_pass"=> $user_pass, "user_code"=> $user_code, "user_email"=>$user_email, "user_url"=>  $imageUrl, "user_registered"=> $todayTime, "user_status"=> 'active', "display_name"=> $display_name,  "description"=> $description);


        if(Insertdata($table, $column, $data, $values)){

        $message = json_encode(['message' => 'User account successfully created', 'type' => 'success']);
        }   
        
            }
        catch (PDOException $e){
            $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
           // LogError($e->getMessage());	
            $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
        }
     }else{
            $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
        }  
         
        echo $message;
    
    }









    if(isset($_POST['code'])  && $_GET['tablename'] =='tbl_new_post'){

      
     
                         
         if(getToken($_POST['jwt'])==true){		
    try{			

        
                $subtitle	= 	$_POST['subtitle'];
                $quote	= 	$_POST['quote'];

                $relatedCategory	= 	$_POST['relatedCategory'];

                $approveComment = 	$_POST['approveComment'];
                $code	= 	$_POST['code'];

                $slug	= 	$_POST['slug'];



                $post_category	= 	$_POST['post_category'];
                $allowComment = $_POST['allowComment'];
               
               
                $post_status	= 	$_POST['publish'];
                $post_excerpt = 	$_POST['excerpt'];
                $post_title	= 	$_POST['title'];
                $post_content	= 	$_POST['fullDescription'];
                $todayTime	= 	date('Y-m-d H:m:s');
                $post_author	= 	$_POST['post_author'];

                $table = 'tbl_posts';
   
                $imageUrl= '';
   

                $imageDir =date('Y'). "/".date('M')."/".date('d')."/";
                if(isset($_FILES['image']) && !empty($_FILES['image']['tmp_name'])){

                   
                    $pdir = "../images/post/".$imageDir;
                    if(!is_dir($pdir)){
                        mkdir($pdir, 0755, true);
                    }

                    $imageUrl = uniqid().'.png';

                   
                    $folder = "../images/post/".$imageDir.basename($imageUrl);
                    compressImage($_FILES['image']['tmp_name'],$folder,60);

                } 



    $column = array('post_author', 'post_date', 'post_content', 'post_title', 'post_excerpt', 'post_status', 'comment_status',  'post_image', 'post_modified', 'post_category', 'post_slug', 'code', 'post_type', 'comment_count', 'approveComment', 'relatedCategory', 'quote', 'subtitle', 'view_count');		  

     $data = array(':post_author', ':post_date', ':post_content', ':post_title', ':post_excerpt', ':post_status', ':comment_status',  ':post_image', ':post_modified', ':post_category', ':post_slug', ':code', ':post_type', ':comment_count', ':approveComment', ':relatedCategory', ':quote', ':subtitle', ':view_count');
    
     $values = array("post_author"=>$post_author, "post_date"=> $todayTime, "post_content"=> $post_content, "post_title"=>$post_title, "post_excerpt"=> $post_excerpt, "post_status"=> $post_status, "comment_status"=> $allowComment, "post_image"=> $imageDir.$imageUrl,  "post_modified"=> '0000-00-00 00:00:00', "post_category"=> $post_category, "post_slug"=> $slug,  "code"=> $code,  "post_type"=> 'post',  "comment_count"=> 0,  "approveComment"=> $approveComment,  "relatedCategory"=> $relatedCategory, "quote"=> $quote, "subtitle"=> $subtitle, "view_count"=> 0);


            if(Insertdata($table, $column, $data, $values)){

            $message = json_encode(['message' => 'Post successfully published', 'type' => 'success']);
            }   
            
                }
            catch (PDOException $e){
                $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
               // LogError($e->getMessage());	
                $message = json_encode(['message' => 'Error: '.$log, 'type' => 'error']);
            }
         }else{
                $message = json_encode(['message' => 'Some required field are empty', 'type' => 'error']);
            }  
             
            echo $message;
        
        }







        function Insertdata($table, $column, $data, $info){	
            global $con;
            $fields = implode('`, `', $column);
            $values = implode(",", $data);
            try{
            $sql = "INSERT INTO `{$table}` (`{$fields}`) VALUES ({$values})";
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
            $log = date('Y-m-d H:m:s').' '.$_SERVER['REQUEST_URI'].' '.$e->getMessage(). "\r\n";
            echo $log;
            LogError($e->getMessage());		
        } 
        }


function LogError($message){
	global $link;
		$jsonString = file_get_contents('errorlog.json');
	$data = json_decode($jsonString, true);
		$new_data = array('dateCreate' => date('Y-m-d H:m:s a'), 'url' => $link, "message"=>$message, "order"=>count($data)+1);	
		array_push($data, $new_data);
		file_put_contents('errorlog.json', json_encode($data));
	}

?>