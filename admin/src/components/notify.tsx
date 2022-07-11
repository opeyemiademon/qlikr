//@ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { ImagesUrl } from './includes'
 

export const  LoadingModal =()=>{
  // use warning, error, success, info, and question as icon
  // use 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end' as position
  Swal.fire({
    width: 500,
    imageUrl: ImagesUrl+"/loading.gif",
    imageHeight:200,
  imageAlt: 'A tall image',
    allowOutsideClick:false,
    allowEscapeKey:false,
    allowEnterKey:false,
    showConfirmButton:false,
    isDismissed: true,
    confirmButtonText:'OK',
    title: 'Loading, Please wait...',
  })
  
} 

export const closeModal =()=>{
  Swal.close()
}

export const  ErrorModal =(title:string, text:string)=>{
  
  Swal.fire({
    icon: 'error',
    width: 500,
    allowOutsideClick:true,
    allowEscapeKey:true,
    allowEnterKey:true,
    showConfirmButton:true,
    confirmButtonColor: '#3085d6',
    confirmButtonText:'Retry',
    title: title,
    text: text
  })
  
} 


export const SuccessModal =()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your data has been saved',
    showConfirmButton: false,
    timer: 2000
  })
}


export const ErrorDisplay =(title:string)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: title,
    showConfirmButton: false,
    timer: 2000
  })
}



export const WarningModal = (props:{mID?:string, message?:string, handleAction?:()=>void})=>{
  return      <div className="modal fade " id={`warningdialog-${props.mID}`} tabIndex={-1} role="dialog">
      <div className="modal-dialog " role="document">
          <div className="modal-content ">
              
              <div className="modal-body">
                <div className="text-center">
                <i className='fa fa-warning fa-2x'></i>
                  <h5>Hold On!</h5>
                <p>{props.message}</p>
              </div></div>
              <div className="modal-footer">
                
                  <button type="button"  id={`btnWarningDialog-${props.mID}`} className="btn btn-inverse waves-effect " data-bs-dismiss="modal">No, Thanks</button>
                  <button type="button" onClick={props.handleAction} className="btn btn-warning waves-effect">Yes I Am</button>
              </div>
          </div>
      </div>
  </div>
} 

