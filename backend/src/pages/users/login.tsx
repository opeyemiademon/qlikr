import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import Preloader from '../../components/preloader'
import Forgot from './forgot_password'
import axios from 'axios'
import Cookies from 'js-cookie'
import {ServerUrl, config, Token, ImagesUrl, multipartConfig} from '../../components/includes'

const Login =()=> {

  //axios.defaults.withCredentials = true
   const [user, setUser] = useState({
    user_login:'',
		user_pass:'',
		remember:'false',
		dateTime:new Date().toISOString().slice(0,19)
    })
    const [errors, setErrors] = useState({
    user_login:'',
		user_pass:'',
        errorMessage:''
    });


const [passwordOpen , setPasswordOpen] = useState(false)
const [loading, setLoading] = useState(false);
const closePassword =()=>setPasswordOpen(!passwordOpen)


 const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{	
        let {name, value} = event.target;		
       setUser({...user, [name] : value });
       setErrors({...errors, [name]:''});
    }

            
     const submit =(event: FormEvent<HTMLButtonElement>)=>{ 
        event.preventDefault();
         var errormessage = [];
        
			let msg ='This field is required';

 

  if(!user.user_pass){
			setErrors({...errors, user_pass:msg})
			errormessage.push(msg);
		} 

if(!user.user_login){
			setErrors({...errors, user_login:msg})
			errormessage.push(msg);
		} 

	 if (errormessage.length <=0) {
       setLoading(true) 


 var fd = {    
    user_login:user.user_login,
		user_pass:user.user_pass,
}

    let url = ServerUrl+'/login_controller.php?tablename=tbl_users';
		axios.post(url, fd, config)
		.then((response:any) =>{


		 	if(response.data.type ==='success'){
			
			//1000 * 60 * SESSION_IDEL_MINUTES
      
		 var inFivehours = Date.now() + 119 * 300 * 1000;
			var inFiveHoursMinusOne = Date.now() + 118 * 300 * 1000;
			  var inFivHour = new Date(new Date().getTime() + 119 * 300 * 1000);
			  
			  localStorage.setItem('_qlikrexpt', inFivehours.toString())
				localStorage.setItem('_qlikrbfexpt', inFiveHoursMinusOne.toString())

			Cookies.set('qlikrcd', response.data.code, {expires: inFivHour})
		Cookies.set('qlikrtk', response.data.jwt,  {expires: inFivHour }) 
			var queryString = new URLSearchParams(window.location.search).get("ref")
           
      if(queryString!==null){
                window.open(queryString, '_self')
            }else{
                window.open('/create_post', '_self')
            }   
			
			}else if (response.data.type ==='error'){
      setErrors({...errors, errorMessage: response.data.message})
			}else{
			setErrors({...errors, errorMessage: response.data.message})
			}   
      
      
		})
		.catch((error)=>{
      setErrors({...errors, errorMessage: error.message})
		}).finally(()=>{
      setLoading(false) 
    })    
	}

}


useEffect(()=>{  
   if(Token!==undefined){
 window.open('/create_post', '_self')
  } 

},[]);

  return (


    <div className="main-wrapper">
     <Preloader />


      <div className="row auth-wrapper gx-0">

        <div className="col-lg-4 col-xl-3 bg-dark auth-box-2 on-sidebar">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="row justify-content-center text-center">
              <div className="col-md-7 col-lg-12 col-xl-9">
                <div>
                  <span className="db"><img  src={ImagesUrl+"/logo.png"} alt="logo" style={{ height:'80px', width:'80px' }} /></span>
                </div>
              {/*   <h2 className="text-white mt-4 fw-light">
                  <span className="font-weight-medium"> Qlikr</span> 
                </h2> */}
                <p className="op-5 text-white fs-4 mt-4">You'll need to provide a valid email address or username and password to access your account.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="
            col-lg-8 col-xl-9
            d-flex
            align-items-center
            justify-content-center
          ">
          <div className="row justify-content-center w-100 mt-4 mt-lg-0">
            <div className="col-lg-6 col-xl-3 col-md-7">
            
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

           {!passwordOpen ?  <div className="card" >
            


                <div className="card-body">
                  <h2>Qlikr Admin</h2>
                  <p className="text-muted fs-4">
                    Login with your credentials
                  </p>

                  <form className="form-horizontal mt-4 pt-4"  role={'presentation'}>


                    <div className="form-floating mb-3">
            <input type="text"  name="user_login"  autoComplete='off' id="text-email" role={'presentation'} className={errors.user_login ? 'form-control is-invalid' : 'form-control'}  value={user.user_login}  onChange={handleChange} />

                      <label htmlFor="text-email">Email or Username</label>
                     <div className="invalid-feedback">{errors.user_login}</div>
                    </div>


                    <div className="form-floating mb-3">

                       <input type="password"  name="user_pass" autoComplete='off' id="text-password" role={'presentation'} className={errors.user_pass ? 'form-control is-invalid' : 'form-control'}   value={user.user_pass}  onChange={handleChange}  />
                      <label htmlFor="text-password">Password</label>
                      <div className="invalid-feedback">{errors.user_pass}</div>
                    </div>


                    <div className="d-flex align-items-center mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="r-me1"  />
                        <label className="form-check-label" htmlFor="r-me1">
                          Remember me
                        </label>
                      </div>
                      <div className="ms-auto">
                        <a href="#!" onClick={closePassword} className="fw-bold">Forgot Password?</a>
                      </div>
                    </div>


                    <div className="d-flex align-items-stretch button-group mt-4 pt-2">
                    {loading?  <button type="button" className="btn btn-info btn-lg px-4" disabled >
                      <i className="fa fa-arrows-rotate fa-spin"></i>   ...please wait
                      </button>:
  <button type="button" className="btn btn-info btn-lg px-4" onClick={submit}>
                        Sign in
                      </button>}
                    </div>
                  </form>
                </div>
              </div>:

            <Forgot closePassword={closePassword} />}




            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login