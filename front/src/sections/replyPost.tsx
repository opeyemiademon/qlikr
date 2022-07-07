import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import Loader from '../components/loader';
import { getDateTime } from '../components/globalFunction';

const ReplyPost =({slug, postId}:{slug:any, postId:string})=> {
    const [notice, setNotice] = useState({
        isLoading : false
	});

    const [comment, setComment]= useState({

        message:'',
        senderName:'',
        senderEmail:'',
        commentParent:postId,
        saveData:'false',
        num1:'',
        num2:'',
        answer:'',
        puzzle:''
     })

   const handleReset=()=>{
    var num1 = Math.floor(Math.random() * 9)
    var num2 = Math.floor(Math.random() * 9)
    var answer = num1+num2
   
       setComment({
        message:'',
        senderName:'',
        senderEmail:'',
        commentParent:postId,
        saveData:'false',
        num1:String(num1), 
        num2:String(num2), 
        answer:answer.toString(),
        puzzle:''
       })
   }
 const [errors, setErrors] = useState({
    message:'',
        senderName:'',
        senderEmail:'',
        puzzle:'',
    errorMessage:'',
    successMessage:''
 })

     const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{		
        let {name, value} = event.target;	
        
        if(name==='saveData'){
            value = value==='true'?'false':'true'
        }
        setComment({...comment, [name] : value });
       setErrors({...errors, [name]:''});
    }

    const generatePuzzle =()=>{
        var num1 = Math.floor(Math.random() * 9)
        var num2 = Math.floor(Math.random() * 9)
        var answer = num1+num2
        setComment({...comment, num1:String(num1), num2:String(num2), answer:answer.toString()})
    
} 

const handleChangeArea = (event:ChangeEvent<HTMLTextAreaElement>) =>{	
    let {name, value} = event.target;	
    setComment({...comment, [name] : value });
    setErrors({...errors, [name]:''});
 }


    const submit =(event: FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        let formIsValid = true;
        let errorLog ={...errors}
			let msg ='This field is required';

            let email = comment.senderEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
            if(!email){
                formIsValid = false;
                errorLog.senderEmail ='Please enter valid email address';
            }


      if(!comment.senderName){ 
        formIsValid = false;
            errorLog.senderName =msg
		}  
       

        if(!comment.message){ 
            formIsValid = false;
            errorLog.message =msg
		} 
        if(!comment.puzzle){ 
            formIsValid = false;
            errorLog.puzzle=msg

            setErrors({...errors, puzzle:msg})
		}else if(Number(comment.puzzle) !== Number(comment.answer)){
            formIsValid = false;
            errorLog.puzzle ='Answer provided to puzzle is not correct';
          
        }

        if(!formIsValid){
            setErrors(errorLog)
        }
        


            if (formIsValid) {

               setNotice({...notice,  isLoading: true})     

       
            const fd = new FormData();
        Object.entries(comment).forEach(([key, value]) => {
                fd.append(key, String(value));
            }); 


    fd.append('comment_date', getDateTime());
    fd.append('jwt', 'String(Token)');
      fd.append('postID', slug.code);

 let url = serverUrl+'/save_controller/tbl_new_comment';
      axios.post(url, fd, config)
      .then(response =>{
        if(response.data.type === 'success'){
            setErrors({...errors, successMessage: response.data.message})
         
       setTimeout(()=>{
        window.location.reload()
       }, 2000)
                  } else{

                    
         setErrors({...errors, errorMessage: response.data})
                   
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
                setNotice({...notice,  isLoading: false})
                handleReset()  
              }) 
        }
    }

   
    useEffect(()=>{
        generatePuzzle();
        }, [])
  return (
    <div className="post-comments">
    <h1 className="sub-headings"> Post New Comment</h1>
    <form className="list contact-us-form" id="comment">
        <ul>
            <li className="item-content item-input">
                <div className="item-inner">
                    <div className="item-input-wrap">

                    <input type="text" id="senderName" name="senderName" placeholder="Name" className={errors.senderName ? '  formerror' : ''} value={comment.senderName} onChange={handleChange} required />

<span className="spanerror">{errors.senderName!==''?errors.senderName:''}</span>

                    </div>
                </div>
            </li>
            <li className="item-content item-input">
                <div className="item-inner">
                    <div className="item-input-wrap">
                    <input type="email" role={'presentation'}  autoComplete="off" placeholder='Email'  id="senderEmail" name="senderEmail" className={errors.senderEmail ? ' formerror' : ''} value={comment.senderEmail} onChange={handleChange} required />
                
                 <span className="spanerror">{errors.senderEmail&&errors.senderEmail}</span>
                    </div>
                </div>
            </li>
            <li className="item-content item-input">
                <div className="item-inner">
                    <div className="item-input-wrap">

                    <textarea name="message" id="message" value={comment.message} onChange={handleChangeArea} className={errors.message ? ' formerror' : ''} rows={4} cols={50} placeholder="Comment" maxLength={65525} required></textarea>

<span className="spanerror">{errors.message&& errors.message}</span>

                    </div>
                </div>
            </li>

            <li className="item-content item-input">
                <div className="item-inner">
                    <div className="item-input-wrap">

                    <input type="text" id="puzzle"   name="puzzle" role={'presentation'}  autoComplete="off" value={comment.puzzle} placeholder={comment.num1 + ' + '+ comment.num2 + '  =?' } onChange={handleChange} />
                                    <span className="spanerror">{errors.puzzle && errors.puzzle}</span>	

                    </div>
                </div>
            </li>


        </ul>
     {errors.successMessage!==''?   <div className="success-messages alert alert-success">
                <p>{errors.successMessage&& errors.successMessage}</p>
            </div>:''}

            {errors.errorMessage!==''?   <div className="success-messages alert alert-danger">
                <p>{errors.errorMessage&& errors.errorMessage}</p>
            </div>:''}


        <div className="signup form-submit">
        {notice.isLoading?<Loader />: <button type="button" onClick={submit} className="btn btn-common list-button" id="form-submit">Post Comment</button>}
        </div>
    </form>
</div>
  )
}

export default ReplyPost