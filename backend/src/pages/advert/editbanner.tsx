
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Breadcomb from "../../components/breadcomb";
import { config, ImagesUrl, multipartConfig, ServerUrl, Token } from "../../components/includes";
import axios from "axios";
import { useParams } from 'react-router'
import { closeModal, LoadingModal, SuccessModal, WarningModal } from "../../components/notify";
import { Link } from "react-router-dom";

const EditBanners = () => {
  let params = useParams()

  const [content, setContent] = useState([] as any);
  const [loading, setLoading] = useState({
    isDatafetching: false,
    isLoading: false
  });

  const [errors, setErrors] = useState({
    errorMessage: '',
    url: '',
    expiryDate: '',
    displayImage: '',
    order:''
  });

  const [banner, setBanner] = useState({
    code: 'b' + Math.random().toString(36).substr(2, 9),
    url: '',
    imageUrl: '',
    expiryDate: '',
    order: 1
  })


  const [photo, setPhoto] = useState({
    image: '',
    displayImage: '',
    fileUrl: ''
  })



  const handleRemoveImage = (path: string, ID: number) => {
    LoadingModal()
    let url = ServerUrl + '/remove_image_post'

    var fd = {
      path: path,
      ID: ID
    }
    axios.post(url, fd, config)
      .then(response => {
        if (response.data.type === 'success') {

          SuccessModal()

          const app = [...content]
          app[0].post_image = ''
          setContent(app);

        } else {

          setErrors({ ...errors, errorMessage: response.data.message })
        }
      })
      .catch((error) => {
        setErrors({ ...errors, errorMessage: error.message })
      }).finally(() => {
        closeModal()
      })
  }


  /* 
  const handleDeleteWithImage =(imageLink)=>{
    let close =   document.getElementById('btnWarningDialog-delAll')
    close.click();
     
  
    setNotice({...notice, 
      isLoading: true}) 
  
    const fd = new FormData();
    fd.append('ID', 'code')
    fd.append('data', params.code)
    fd.append('imagelink', '../images/banner/'+imageLink)
    fd.append("jwt", Token);
  let url = ServerUrl+'/deleteSingleWithImage_controller.php?tablename=tbl_banner';
      axios.post(url, fd, config)
      .then(response =>{
       if(response.data.type ==='success'){
        Alerts('Saved!', 'success', response.data.message)
        window.open('/cms/slider', '_self')
          } else{
        Alerts('Error!', 'danger', response.data)
          }   
      })
      .catch((error)=>{
      Alerts('Error!', 'danger', error.message)
      }).finally(()=>{
        setNotice({...notice, 
          isLoading: false
        })
      }) 
  } */





  const fetchBanner = () => {
    var sql = "Select ID, code, title, isActive, bannerList, layoutUrl, description from tbl_banner where code = '" + params.code + "'";

    var fd = {
      sql: sql
    }

    let url = ServerUrl + '/fetchSqlQuery'
    setLoading({ ...loading, isDatafetching: true })
    axios.post(url, fd, config)
      .then(response => {
        if (response.data.length !== 0 && Array.isArray(response.data)) {
          setContent(response.data)

        } else {
          setErrors({ ...errors, errorMessage: response.data })
        }
      })
      .catch((error) => {
        setErrors({ ...errors, errorMessage: error.message })
      }).finally(() => {
        setLoading({ ...loading, isDatafetching: false })
      })

  }


 const handleChangeArea = (event:ChangeEvent<HTMLTextAreaElement>) =>{	
       let {name, value} = event.target;	
        setBanner({...banner, [name] : value });
         setErrors({...errors, [name]:''})
    }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setBanner({ ...banner, [name]: value })
    setErrors({ ...errors, [name]: '' });
  }


  const handleFile = function (fieldName: any) {
    return function (newValue: any) {
      readURL(newValue);
    }
  }



  const readURL = (input: any) => {

    let displayMessage = '';

    const PreviewImage = input.target.name;
    const inputElement = document.getElementById('photo') as HTMLInputElement
    const fileName = inputElement.value

    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png" || extFile === "JPG" || extFile === "JPEG" || extFile === "PNG") {
      //TO DO    

      var FileSize = input.target.files[0].size / 1024 / 1024; // in MB
      if (FileSize > 0.7) {
        displayMessage = ' File uploaded is larger than maximum size Allow (700 kb).';
        inputElement.value = '';
      } else {
        if (input.target.files && input.target.files[0]) { //Check if input has files.
          var reader = new FileReader();//Initialize FileReader.
          reader.onload = function (e: any) {

            //Check if input has files.
            let Id = Math.random().toString(36).substr(2, 9)
            let fileUrl = Id + '.png'

            setBanner({...banner, imageUrl:fileUrl})
            setPhoto({...photo, displayImage:e.target.result, image:input.target.files[0]})
            setErrors({...errors, displayImage:''})
           
          }
          reader.readAsDataURL(input.target.files[0]);

        }
      }
    } else {
      displayMessage = 'Only JPEG|PNG|JPG  file format are allowed with maximum of 700 kb'
      inputElement.value = '';
    }

    if (displayMessage.length > 0) {
      setErrors({ ...errors, errorMessage: displayMessage })
    }

  }



  
  const handleSaveAdvert =(event: FormEvent<HTMLButtonElement>)=>{
    event.preventDefault();
        var errormessage = [];
        let errorLog =errors
			let msg ='This field is required';

if(!photo.displayImage){
    let img ="Please select image"
            errorLog.displayImage=img
			errormessage.push(img);
		}  

 if(!banner.expiryDate){
            errorLog.expiryDate=msg
			errormessage.push(msg);
		}  

      if(!banner.url){
            errorLog.url=msg
			errormessage.push(msg);
		}   
    
          

  if (errormessage.length <=0) {
       setLoading({...loading, isLoading:true})    

       const newContent = [...content] 
    const options = JSON.parse(newContent[0].bannerList);
    newContent[0].bannerList = JSON.stringify(options.concat(banner))


          const fd = new FormData();
          fd.append("imageUrl", banner.imageUrl)
      fd.append("image", photo.image)
      fd.append("bannerList", newContent[0].bannerList)
      fd.append("code", String(params.code))
      fd.append("jwt", String(Token))

 let url = ServerUrl+'/update_controller/tbl_update_banner';
      axios.post(url, fd, multipartConfig)
      .then(response =>{
        if(response.data.type === 'success'){
          SuccessModal()
          fetchBanner()
                  } else{
         setErrors({...errors, errorMessage: response.data.message})
                   
        window.scrollTo({top:0, left:0, behavior:'smooth'})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
              fetchBanner()
                setBanner({
                  code: 'b' + Math.random().toString(36).substr(2, 9),
                  url: '',
                  imageUrl: '',
                  expiryDate: '',
                  order: 1
                })
                   const inputElement = document.getElementById('photo') as HTMLInputElement
                inputElement.value = ''
                setPhoto({
                  image: '',
    displayImage: '',
    fileUrl: ''
                })
                setLoading({...loading, isLoading:false})  

              })  
        }else{
            setErrors(errorLog)
        } 


      }





  const handleUpdate =(bannerList:string, imageUrl:string)=>{
   
       setLoading({...loading, isLoading:true})    


 var fd = {    
  bannerList:bannerList,
  code:params.code,
  imageUrl:imageUrl,
  jwt:Token
}


 let url = ServerUrl+'/update_controller/tbl_delete_banner';
      axios.post(url, fd, config)
      .then(response =>{
        if(response.data.type === 'success'){
          SuccessModal()
                  } else{
         setErrors({...errors, errorMessage: response.data.message})
                   
        window.scrollTo({top:0, left:0, behavior:'smooth'})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
                setLoading({...loading, isLoading:false})  
                fetchBanner()
              })  
      }


  const handleRemovePhoto =(code:string, imageUrl:string)=>{
       
         let close =   document.getElementById('btnWarningDialog-'+code)
          close?.click();
      	
      const newContent = [...content] 
      const newImageList = JSON.parse(newContent[0].bannerList);
      const otherImageList = newImageList.filter((list:any)=>list.code!==code)
      newContent[0].bannerList = JSON.stringify(otherImageList)
      handleUpdate(newContent[0].bannerList, imageUrl)
      } 
   
  

  useEffect(() => {
    fetchBanner()
  }, [])


  return (
    <>
      <Breadcomb title="Advert" />
      {content && content.map((data: any, id: number) =>
        <div key={id} className="container-fluid page-content">

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">

                  <section className="col-sm-12">

                    <Link to={`/banners`} className=" btn btn-warning">  <i className="fa fa-arrow-left"></i> Return
                    </Link>

                  </section>
                </div>

              </div>

            </div>

          </div>



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

          <div className="row  ">
            <div className="col-md-12">
              <div className="card">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0"> <i className="fa fa-info-circle text-info"></i> Banner Info</h4>
                  </div>
                </div>

                <div className="card-body">

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Banner Title:</label>

                        <div className="col-md-8">
                          <p className="form-control-static">{data.title}</p>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Banner Layout:</label>

                        <div className="col-md-8">
                          <img src={ImagesUrl + "/advert/" + data.layoutUrl}
                            onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/no.jpg' }} className="img-fluid rounded" width="100" height="100" />
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Description:</label>

                        <div className="col-md-8">
                          <p className="form-control-static">{data.description}</p>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Is Active:</label>

                        <div className="col-md-8">
                          <span className={`badge   ${data.isActive === 'Yes' ? 'text-success bg-light-success' : 'text-danger bg-light-danger'} font-weight-medium`}>{data.isActive}</span>
                        </div>
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>






          <div className="row  ">
            <div className="col-md-12">
              <div className="card">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0"> <i className="fa fa-info-circle text-info"></i> Add New Advert</h4>
                  </div>
                </div>
<form >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Banner Link:</label>

                        <div className="col-md-8">

                           <textarea className={errors.url ? 'form-control is-invalid' : 'form-control'} placeholder="Type redirect link here or #! if there is none" name="url" onChange={handleChangeArea} rows={3} value={banner.url}>{banner.url}</textarea>
                          <div className="invalid-feedback">{errors.url}</div>
                        </div>
                      </div>

                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Expiry Date:</label>

                        <div className="col-md-8">
                          <input type="date"  name="expiryDate" className={errors.expiryDate ? 'form-control is-invalid' : 'form-control'} value={banner.expiryDate} onChange={handleChange} />
                          <div className="invalid-feedback">{errors.expiryDate}</div>
                        </div>
                      </div>

                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Display Order:</label>

                        <div className="col-md-8">

                          <input type="number"  min={1} name="order" className={errors.order ? 'form-control is-invalid' : 'form-control'} value={banner.order} onChange={handleChange} />
<div className="invalid-feedback">{errors.order}</div>
                        </div>
                      </div>

                      <div className="form-group row py-3">
                        <label className="
                                control-label
                                text-end
                                col-md-4
                                font-weight-medium
                              ">Image:</label>

                        <div className="col-md-8">


                          <input id="photo" onChange={handleFile('photo')} className="d-none" name="photo" type="file" accept="image/*" />

                          <label htmlFor="photo" title="Change Cover" className='btn btn-outline-primary'> <i className="fa fa-photo-film"></i>    Upload Image</label>

                          &nbsp;

                          <div className="text-danger">{errors.displayImage}</div>



                        </div>
                      </div>
                      <div className="col-sm-4">
                            
                              {loading.isLoading? <button type="button" className="btn btn-outline-info mb-3" disabled >
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait...
                    </button>:  <button type="button" onClick={handleSaveAdvert} className="btn btn-outline-inverse "  ><i className="fa fa-save"></i> Save Advert</button>}
                          </div>
                    </div>

                  


<div className="col-md-6">
  
  
                          {photo.displayImage ?
                            <img id="viewPassport2" className="img-fluid" width="500" height="300"
                              onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/no.jpg' }} src={photo.displayImage} alt="preview" /> : ''}
  </div>
</div>

                 



                </div></form>
              </div>
            </div>


          </div>




          <div className="row  ">

          <div className="col-md-12">
              <div className="card ">
               <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0"> <i className="fa fa-info-circle text-info"></i> Banner List</h4>
                  </div>
                </div>

                <div className="card-body">
                          <div className="table-responsive">

                            <table className="table table-hover customize-table mb-10">
                              <thead className='table-light'>
                                <tr>
                                  <th scope="col" >Picture</th>
                                  <th scope="col" >Link</th>
                                  <th scope="col" >Order</th>
                                   <th scope="col" >Expiry Date</th>

                                  <th scope="col" >Action</th>
                                </tr>
                              </thead>
                              <tbody>

                                {content &&JSON.parse(data.bannerList).map((item: any, index: number) => {
                                  return (
                                    <tr role="row" key={index}>
                                      <td>
                                        <img src={ImagesUrl + "/advert/" + item.imageUrl}
                                          onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = ImagesUrl + '/no.jpg' }} className="img-fluid rounded" width="100" height="100" />
                                      </td>
                                      <td>{item.url}</td>

                                     
<td>{item.order}</td>

<td>{item.expiryDate}</td>
 
                                      <td>
                                    
                 <WarningModal message="This is very dangerous, you shouldn't do it! are you really really sure.?" handleAction={()=>handleRemovePhoto(item.code, item.imageUrl)} mID={item.code} />  

 <button type='button' data-bs-toggle="modal" data-bs-target={`#warningdialog-${item.code}`} className='btn btn-danger '> <i className="fa fa-trash"></i> Remove </button>


                                      </td>


                                    </tr>

                                  )
                                })}
                              </tbody>

                            </table>
                          </div>
                           </div>
                      </div>
                      </div>
                    </div>

        </div>)}

    </>
  );
};

export default EditBanners
