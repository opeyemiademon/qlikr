
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { config, ImagesUrl, multipartConfig, ServerUrl, Token } from '../../components/includes'
import axios from 'axios';
import { SuccessModal } from '../../components/notify';

const AddUser =()=> {
const [loading, setLoading] = useState(false);

const [photo, setPhoto] = useState("")
   const [user, setUser] = useState({
	 
        user_login:'',
		user_pass:'',
		user_email:'',
        display_name:'',
        user_url:'',
        displayImage:'',
        description:'',
		dateTime:new Date().toISOString().slice(0,19)
    })
    const [errors, setErrors] = useState({
        user_login:'',
		user_pass:'',
		user_email:'',
        display_name:'',
        errorMessage:''
    });

    const  handleFile = function(fieldName:any){
        return function(newValue:any){                 
       readURL(newValue);
       }
      } 
   


    const readURL = (input:any)=>{
       
        let displayMessage = '';

        const PreviewImage = input.target.name;
		const inputElement = document.getElementById('photo') as HTMLInputElement
		const fileName = inputElement.value

        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

        if (extFile==="jpg" || extFile==="jpeg" || extFile==="png" || extFile==="JPG" || extFile==="JPEG" || extFile==="PNG" ){
            //TO DO    
            
             var FileSize = input.target.files[0].size / 1024 / 1024; // in MB
        if (FileSize > 0.5) {
            displayMessage = ' File uploaded is larger than maximum size Allow (500 Kb).';
			inputElement.value = '';
        } else {
            if (input.target.files && input.target.files[0]) { //Check if input has files.
                var reader = new FileReader();//Initialize FileReader.
                reader.onload = function (e:any) {
                    
                //Check if input has files.
                let Id = Math.random().toString(36).substr(2, 9)
                 let fileUrl = user.user_login+'_'+Id+'.png'

                 setUser({...user, user_url:fileUrl, displayImage:e.target.result})
              setPhoto(input.target.files[0])
                }
                reader.readAsDataURL(input.target.files[0]);
                
            }
        }
    }else{
        displayMessage = 'Only JPEG|PNG|JPG  file format are allowed with maximum of 500 Kb'
		inputElement.value = '';
    }   

    if(displayMessage.length > 0){
        setErrors({...errors, errorMessage:displayMessage})
      }
        
    } 


    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{		
        let {name, value} = event.target;	
        setUser({...user, [name] : value });
       setErrors({...errors, [name]:''});
    }

    const ValidateExistenceUserlogin=()=>{
            if(user.user_login!==''){              
                var fdl = {      
                    data:user.user_login
                }
                let url = ServerUrl+'/existence_controller/tbl_users/user_login';
                axios.post(url, fdl, config).then(response=>{
                    if(response.data===true){
                        setErrors({...errors, user_login:user.user_login+' already choosen'})
                        setUser({...user, user_login:''});
                    }
              })
            }
        }


const ValidateExistenceEmail=()=>{
            if(user.user_email!==''){              
                var fdl = {      
                    data:user.user_email
                }
                let url = ServerUrl+'/existence_controller/tbl_users/user_email';
                axios.post(url, fdl, config).then(response=>{
                    if(response.data===true){
                        setErrors({...errors, user_email:user.user_email+' already register'})
                        setUser({...user, user_email:''});
                    }
              })
            }
        }

    const submit =(event: FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        var errormessage = [];
			let msg ='This field is required';
      let email = user.user_email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);


   

        if(user.user_pass.length <6){
            let pass ='Please enter minimum of 6 characters';
            setErrors({...errors, user_pass:pass})
			errormessage.push(pass);
        }

              if(!user.user_pass){
			setErrors({...errors, user_pass:msg})
			errormessage.push(msg);
		    } 


             if(!user.display_name){
			setErrors({...errors, display_name:msg})
			errormessage.push(msg);
		    } 

 if(!email){
            let email ='Please enter valid email address';
            setErrors({...errors, user_email:email})
			errormessage.push(email);
        }

        if(!user.user_email){
			setErrors({...errors, user_email:msg})
			errormessage.push(msg);
		} 


            if(!user.user_login){
			setErrors({...errors, user_login:msg})
			errormessage.push(msg);
		} 


            if (errormessage.length ===0) {
       setLoading(true)    

       const fd = new FormData();
 Object.entries(user).forEach(([key, value]) => {
                fd.append(key, value);
            }); 

       if(photo){
    fd.append('image', photo, user.user_url); 
       }     
    fd.append('user_code', 'u'+Math.random().toString(36).slice(2,9));

    fd.append('jwt', String(Token)); 
 let url = ServerUrl+'/save_controller/tbl_users';
      axios.post(url, fd, multipartConfig)
      .then(response =>{
        console.log(response.data)
        if(response.data.type === 'success'){
          
                document.getElementById('closeModal')?.click();
                SuccessModal()

                window.location.reload()
                  } else{
         setErrors({...errors, errorMessage: response.data})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
                setLoading(false)
                 document.getElementById('closeModal')?.click();
                 const inputElement = document.getElementById('photo') as HTMLInputElement
                inputElement.value = ''
                setUser({
                 user_login:'',
		user_pass:'',
		user_email:'',
        display_name:'',
        user_url:'',
        displayImage:'',
        description:'',
		dateTime:new Date().toISOString().slice(0,19)
                })
              })   
        } 
    }
  return (

    

<div className="modal fade" id="createmodel" tabIndex={1} aria-labelledby="createModalLabel"  aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <div className="modal-header d-flex align-items-center">
                  <h5 className="modal-title" id="createModalLabel">
                    <i className="fa fa-edit"></i> Add New User
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

 {errors.errorMessage?   <div className=" alert customize-alert alert-dismissible alert-light-danger
                      text-danger fade  show remove-close-icon " role="alert">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className='fa fa-trash text-danger'></i>
                    </button>

                    <div className=" d-flex  align-items-center  font-weight-medium
                        me-3 me-md-0
                      ">
                      <i className='fa fa-circle-info'></i>{errors.errorMessage}
                    </div>
                  </div>:''}



                  <div className="input-group  mb-3">
                    <button type="button" className="btn btn-info"><i className="fa fa-user text-white"></i>
                    </button>
                      <input type="text" onBlur={ValidateExistenceUserlogin} name="user_login" placeholder="Enter Username Here" autoComplete='off' id="text-email" role={'presentation'} className={errors.user_login ? 'form-control is-invalid' : 'form-control '}  value={user.user_login}  onChange={handleChange} />

                      <div className="invalid-feedback">{errors.user_login}</div>
                  </div>

<div className="input-group mb-3">
                    <button type="button" className="btn btn-info"><i className="fa fa-at text-white"></i>
                    </button>
                    
                       <input type="text" onBlur={ValidateExistenceEmail}  name="user_email" placeholder="Enter Email Here" autoComplete='off'  role={'presentation'} className={errors.user_email ? 'form-control is-invalid' : 'form-control '}  value={user.user_email}  onChange={handleChange} />
                      <div className="invalid-feedback">{errors.user_email}</div>
                  </div>


                  <div className="input-group mb-3">
                    <button type="button" className="btn btn-info"><i className="fa fa-key text-white"></i>
                    </button>

  <input type="password"  name="user_pass" placeholder="Enter password Here" autoComplete='off'  role={'presentation'} className={errors.user_pass ? 'form-control is-invalid' : 'form-control '}  value={user.user_pass}  onChange={handleChange} />
                      <div className="invalid-feedback">{errors.user_pass}</div>

                  </div>


 <div className="input-group mb-3">
                    <button type="button" className="btn btn-info"><i className="fa fa-dashboard text-white"></i>
                    </button>

  <input type="text"  name="display_name" placeholder="Enter display name Here" autoComplete='off'  role={'presentation'} className={errors.display_name ? 'form-control is-invalid' : 'form-control '}  value={user.display_name}  onChange={handleChange} />
                      <div className="invalid-feedback">{errors.display_name}</div>

                  </div>



            <div className="input-group mb-3">
            <button type="button" className="btn btn-info">
                <i className="fa fa-file text-white"></i>
            </button>
            <div className="custom-file">
                <input type="file" className="form-control" onChange={handleFile('photo')} accept="image/*" name="photo" id="photo"  />
            </div>
            </div>


                    <div className=" mb-3">
                       
                        <img id="viewPassport2" className="img-fluid" width="100" height="100" 
			onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =ImagesUrl+'/no.jpg'}} src={user.displayImage} alt="preview" /> 

                  </div>


                </div>
                <div className="modal-footer">
                  <button type="button" id="closeModal" className="
                      btn btn-light-danger
                      text-danger
                      font-weight-medium
                      rounded-pill
                      px-4
                    " data-bs-dismiss="modal">
                    Close
                  </button>
                {loading?  <button type="button"  className="btn btn-success rounded-pill px-4" disabled>
                   <i className="fa fa-arrows-rotate fa-spin"></i> ... pleasee wait
                  </button>:

                  <button type="button" onClick={submit} className="btn btn-success rounded-pill px-4">
                    Save
                  </button>}

                </div>
              </form>
            </div>
          </div>
        </div>
  )
}

export default AddUser