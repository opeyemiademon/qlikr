import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ServerUrl, ImagesUrl, config, Token } from '../components/includes'


const Login =()=> {
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
            let formIsValid = true;
            let errorLog ={...errors}
          let msg ='This field is required';
    
               
          if(!user.user_login){ 
            formIsValid = false;
                errorLog.user_login =msg
           }  
           
    
            if(!user.user_pass){ 
                formIsValid = false;
                errorLog.user_pass =msg
            } 
            if(!formIsValid){
                setErrors(errorLog)
            }
            
    
    
                if (formIsValid) {  
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
                  
                  localStorage.setItem('_qlickrexpt', inFivehours.toString())
                    localStorage.setItem('_qlickrbfexpt', inFiveHoursMinusOne.toString())
    
                Cookies.set('qlickrcd', response.data.code, {expires: inFivHour})
            Cookies.set('qlickrtk', response.data.jwt,  {expires: inFivHour }) 
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
    <>
    <div className="container-xxl">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        

      {errors.errorMessage? <div className="alert alert-danger alert-dismissible" role="alert">
                    {errors.errorMessage}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>:''}


        <div className="card">
          <div className="card-body">
           
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                <img  src={ImagesUrl+"/logo.png"} alt="logo" className='img-logo' style={{ height:'50px',  width:'50px' }} />
                </span>
                <span className="app-brand-text demo text-body fw-bolder">Qlikr</span>
              </a>
            </div>
           
            <h4 className="mb-2">Welcome to Qlikr! 👋</h4>
            <p className="mb-4">You'll need to provide a valid email address or username and password to access your account.</p>

            <form id="formAuthentication" className="mb-3" action="#">
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email or Username</label>

                <input type="text"  name="user_login"  autoComplete='off' id="text-email" role={'presentation'} className={errors.user_login ? 'form-control is-invalid' : 'form-control'}  value={user.user_login}  onChange={handleChange} />

                <div className="invalid-feedback">{errors.user_login}</div>
              </div>


              <div className="mb-3 form-password-toggle">
                <div className="d-flex justify-content-between">
                  <label className="form-label" htmlFor="password">Password</label>
                  <a href="#">
                    <small>Forgot Password?</small>
                  </a>
                </div>
                <div className="input-group input-group-merge">
                 
                  <input type="password"  name="user_pass" autoComplete='off' id="text-password" placeholder="············"  role={'presentation'} className={errors.user_pass ? 'form-control is-invalid' : 'form-control'}   value={user.user_pass}  onChange={handleChange}  />
                
                  <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  <div className="invalid-feedback">{errors.user_pass}</div>
                </div>
              </div>


              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                </div>
              </div>
              <div className="mb-3">
              {loading?<button className="btn btn-primary  w-100" type="button" disabled>

<span className="spinner-border spinner-border-sm" ></span>  Loading... </button>:
                <button className="btn btn-primary d-grid w-100" type="button" onClick={submit}>Sign in</button>
                }
              </div>
            </form>

            <p className="text-center">
              <span>Dont have an account?</span>
              <a href="#">
                <span>Create one</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login