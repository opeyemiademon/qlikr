<?php

include 'authentication.php';
require_once('compress_image.php');
    




if(isset($_GET['tablename'])  && $_GET['tablename'] =='remove_image_post'){

    $json_str = file_get_contents('php://input');
    $json_obj = json_decode($json_str, true);
    
    
            if(getToken($json_obj['jwt'])==true){
        try{

           
            $code	= 	$json_obj['ID'];

           
            $table = 'tbl_posts';

            $imageUrl = "../images/".$json_obj['path'];
           

            if(is_file( $imageUrl)&& file_exists( $imageUrl)){
               unlink($imageUrl);

            } 
            
      

            $info = array("post_image"=>"", "uniqueid"=>$code);

            $fields = array("post_image"=> ":post_image");	
      

            if(Updatedata($table, $fields, $info, 'ID')==true){  
                $message = json_encode(['message' => 'Image removed', 'type' => 'success' ]);	   
                }else{
                    $message = json_encode(['message' => 'Unable to remove image', 'type' => 'error' ]);	
                }	
        
        }
            catch (PDOException $e){
                
                LogError($e->getMessage());	
                $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
            }
    
         }else{
            $message = json_encode(['message' => 'The request was empty', 'type' => 'error']);
        } 
        echo $message;
    }





if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_count_view'){

    if(isset($_GET['tablename'])){
        try{
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);
          
            $code	= 	$json_obj['post_slug'];

            global $con;
            $query2 = $con->prepare("UPDATE tbl_posts set view_count = view_count + 1 where post_slug =:code ");
        
            $query2->execute(['code'=>$code]);

        }
            catch (PDOException $e){
                
                $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
            }
    
         }
    }







    if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_delete_banner'){
        
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);


        if(getToken($json_obj['jwt'])==true){
            try{
    
               
                $bannerList = 	$json_obj['bannerList'];
                $code	= 	$json_obj['code'];
    
               
                $table = 'tbl_banner';

                $imageUrl = "../images/advert/".$json_obj['imageUrl'];
               
    
                if(is_file( $imageUrl)&& file_exists( $imageUrl)){
                   unlink($imageUrl);
    
                } 
                
                $info = array("bannerList"=>$bannerList, "uniqueid"=>$code);
    
                $fields = array("bannerList"=> ":bannerList");	
          
    
                if(Updatedata($table, $fields, $info, 'code')==true){  
                    $message = json_encode(['message' => 'Advert successfully updated', 'type' => 'success' ]);	   
                    }else{
                        $message = json_encode(['message' => 'Unable to update banner', 'type' => 'error' ]);	
                    }	
            
            }
                catch (PDOException $e){
                    
                    LogError($e->getMessage());	
                    $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
                }
        
             }else{
                $message = json_encode(['message' => 'The request was empty', 'type' => 'error']);
            } 
            echo $message;
        }
    



        

    if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_update_banner'){
        

        if(getToken($_POST['jwt'])==true){
            try{
    
               

                $bannerList = 	$_POST['bannerList'];
                $code	= 	$_POST['code'];

                $table = 'tbl_banner';


                $imageUrl= $_POST['imageUrl'];
       
    
                if(isset($_FILES['image']) && !empty($_FILES['image']['tmp_name'])){
                   
                    $folder =  "../images/advert/".basename($imageUrl);
                    compressImage($_FILES['image']['tmp_name'],$folder,60);
    
                } 
                
          
    
                $info = array("bannerList"=>$bannerList, "uniqueid"=>$code);
                $fields = array("bannerList"=> ":bannerList");	
          
    
    
    
                if(Updatedata($table, $fields, $info, 'code')==true){  
                    $message = json_encode(['message' => 'Advert successfully updated', 'type' => 'success' ]);	   
                    }else{
                        $message = json_encode(['message' => 'Unable to update banner', 'type' => 'error' ]);	
                    }	
            
            }
                catch (PDOException $e){
                    
                    LogError($e->getMessage());	
                    $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
                }
        
             }else{
                $message = json_encode(['message' => 'The request was empty', 'type' => 'error']);
            } 
            echo $message;
        }
    




if(isset($_GET['tablename'])  && $_GET['tablename'] =='tbl_edit_post'){

    if(getToken($_POST['jwt'])==true){
        try{

           
            $subtitle	= 	$_POST['subtitle'];
            $quote	= 	$_POST['quote'];

            $relatedCategory	= 	$_POST['relatedCategory'];

            $approveComment = 	$_POST['approveComment'];
            $code	= 	$_POST['code'];




            $post_category	= 	$_POST['post_category'];
            $allowComment = $_POST['comment_status'];
           
           
            $post_status	= 	$_POST['post_status'];
            $post_excerpt = 	$_POST['post_excerpt'];
            $post_title	= 	$_POST['post_title'];
            $post_content	= 	$_POST['post_content'];
            $todayTime	= 	date('Y-m-d H:m:s');
            $post_author	= 	$_POST['post_author'];

            $table = 'tbl_posts';
            $imageUrl= $_POST['fileUrl'];


            $imageDir =date('Y'). "/".date('M')."/".date('d')."/";

            if(isset($_FILES['image']) && !empty($_FILES['image']['tmp_name'])){
               
                $pdir = "../images/post/".$imageDir;
                if(!is_dir($pdir)){
                        mkdir($pdir, 0755);
                }

                    $imageId = uniqid().'.png';
                $imageUrl = $imageDir.$imageId;

               
                $folder = "../images/post/".$imageDir.basename($imageId);
                compressImage($_FILES['image']['tmp_name'],$folder,60);

            } 
            
      

            $info = array("post_author"=>$post_author, "post_content"=> $post_content, "post_title"=>$post_title, "post_excerpt"=> $post_excerpt, "post_status"=> $post_status, "comment_status"=> $allowComment, "post_image"=> $imageUrl,  "post_modified"=> $todayTime, "post_category"=> $post_category,   "approveComment"=> $approveComment,  "relatedCategory"=> $relatedCategory, "quote"=> $quote, "subtitle"=> $subtitle, "uniqueid"=>$code);

            $fields = array("post_author"=> ":post_author", "post_content"=> ":post_content", "post_title"=> ":post_title", "post_excerpt"=> ":post_excerpt", "post_status"=> ":post_status", "comment_status"=> ":comment_status", "post_image"=> ":post_image", "post_modified"=> ":post_modified", "post_category"=> ":post_category", "approveComment"=> ":approveComment", "relatedCategory"=> ":relatedCategory", "quote"=> ":quote", "subtitle"=> ":subtitle");	
      




            if(Updatedata($table, $fields, $info, 'code')==true){  
                $message = json_encode(['message' => 'Post successfully updated', 'type' => 'success' ]);	   
                }else{
                    $message = json_encode(['message' => 'Unable to update post', 'type' => 'error' ]);	
                }	
        
        }
            catch (PDOException $e){
                
                LogError($e->getMessage());	
                $message = json_encode(['message' => $e->getMessage(), 'type' => 'error']);
            }
    
         }else{
            $message = json_encode(['message' => 'The request was empty', 'type' => 'error']);
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
    
    echo $e->getMessage();	
    LogError($e->getMessage());		
} 
}


//////////////////////////////////////////////// Global function to check if record exist with many clause start here 
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
//$con = null;	

}

catch (PDOException $e){
    
    echo $e->getMessage();	
    LogError($e->getMessage());			
}
}	

?>