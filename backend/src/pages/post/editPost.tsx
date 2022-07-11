import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import Breadcomb from '../../components/breadcomb'
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';
import Select from 'react-select'
import { useSelector } from 'react-redux'
 import QuillText from 'react-quill'
import 'react-quill/dist/quill.snow.css' 
import { selectStyles, ServerUrl, config, ImagesUrl, Token } from '../../components/includes'
import axios from 'axios'
import { closeModal, LoadingModal, SuccessModal, WarningModal } from '../../components/notify'
import { useParams} from 'react-router'
import { Link } from 'react-router-dom';
import { getTime } from '../../components/globalFunction';

const EditPost=()=> {

    let params = useParams()
const category = useSelector((state:any) => state.rootReducer.category);
const users = useSelector((state:any) => state.rootReducer.users);

const [photo, setPhoto] = useState({
  image:'',
  displayImage:'',
  fileUrl:''
})

  const [content, setContent] = useState([] as any);
	const [loading, setLoading] = useState({
        isDatafetching:false,
        isLoading:false
    });


 const fetchPost =  ()=>{
        var sql ="Select  ID, post_author, post_date, post_content, post_title, post_excerpt, post_status, comment_status,  post_image, post_modified, post_category, post_slug, code, post_type, comment_count, approveComment, relatedCategory, quote, subtitle, view_count from tbl_posts where code ='"+params.code+"'";

 var fd = {    
    sql:sql
}

let url = ServerUrl+'/fetchSqlQuery'
setLoading({...loading, isDatafetching:true})
 axios.post(url, fd, config)
      .then(response =>{

			if(response.data.length!==0 && Array.isArray(response.data)){
             setContent(response.data)
            }else{
         setErrors({...errors, errorMessage: response.data})
                  } 
    })
       .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
setLoading({...loading, isDatafetching:false})
                 }) 
                }



	const [perPage, setPerPage] = useState(20);

  let [page, setPage] = useState(1);
  const PER_PAGE = Number(perPage);

  const dataList = UsePagination(category, PER_PAGE);

   const handleChangeCat = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };
 
 const [errors, setErrors] = useState({
       post_title:'',
       post_content:'',
        post_author:'',
       post_category:'',
       displayImage:'',
       errorMessage:''
    })

const handleChangeDescription =(data:any)=>{


  const app =[...content]
		   app[0].post_content = data;
        setContent(app);
        setErrors({...errors, post_content:''});
	}

    const handleChangeArea = (event:ChangeEvent<HTMLTextAreaElement>) =>{	
       let {name, value} = event.target;	
        const app =[...content]
		   app[0][name] = value;
        setContent(app);
    }

  const handleAllowComment = (event:ChangeEvent<HTMLInputElement>) =>{		

   let {name, value} = event.target;
     const app =[...content] 
		  
     value=value==="open"?"closed":"open"
        app[0][name] = value;
        setContent(app);
        
    }

     

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{	
      
       let {name, value} = event.target;
        const app =[...content] 
		   app[0][name] = value;
        setContent(app);
       setErrors({...errors, [name]:''});
    }


     const handleSelect = (option:any, action:any)=>{
        const app =[...content] 
		  app[0][action.name] = option.value;
    setContent(app);
        setErrors({...errors, [action.name]:''})
         }

const getCategory=(code:string)=>{
    const result = category.filter((item:any)=>item.code===code);
  const answer = result.length!==0?result[0].name:''
  return  answer
}

const getUser=(code:string)=>{
    const result = users.filter((item:any)=>item.user_code===code);
  const answer = result.length!==0?result[0].display_name:''
  return  answer
}

    const submit =(event: FormEvent<HTMLButtonElement>, status:string)=>{
        event.preventDefault();
        var errormessage = [];
        let errorLog =errors
			let msg ='This field is required';

let post = content[0];
     

    if(!post.post_category){
            errorLog.post_category=msg
			errormessage.push(msg);
		} 


    if(!post.post_author){
             errorLog.post_author=msg
			errormessage.push(msg);
		} 


    if(!post.post_content){
            errorLog.post_content=msg
			errormessage.push(msg);
		}  
/* 
if(!post.post_image){
    let img ="Please select image"
            errorLog.displayImage=msg
			errormessage.push(img);
		}  */

       if(!post.post_title){
            errorLog.post_title=msg
			errormessage.push(msg);
		} 

            if (errormessage.length <=0) {
       setLoading({...loading, isLoading:true})    

            const fd = new FormData();
        Object.entries(post).forEach(([key, value]) => {
                fd.append(key, String(value));
            }); 

       if(photo.image){
    fd.append('image', photo.image, photo.fileUrl); 
     fd.append('fileUrl', photo.fileUrl); 
       } else{

        fd.append('fileUrl', post.post_image); 
       } 
       
     fd.append('status', status);
     fd.append('jwt', String(Token));
 let url = ServerUrl+'/update_controller/tbl_edit_post';
      axios.post(url, fd, config)
      .then(response =>{
        if(response.data.type === 'success'){

          SuccessModal()
          fetchPost()
                  } else{
         setErrors({...errors, errorMessage: response.data.message})

        window.scrollTo({top:0, left:0, behavior:'smooth'})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              })   
        }else{
            setErrors(errorLog)
        } 
    }




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
        if (FileSize > 2) {
            displayMessage = ' File uploaded is larger than maximum size Allow (2 mb).';
			inputElement.value = '';
        } else {
            if (input.target.files && input.target.files[0]) { //Check if input has files.
                var reader = new FileReader();//Initialize FileReader.
                reader.onload = function (e:any) {
                    
                //Check if input has files.
                let fileUrl = Math.random().toString(36).slice(2,9)+'.png';
                
              setPhoto({image:input.target.files[0], displayImage:e.target.result, fileUrl:fileUrl})
                   setErrors({...errors, displayImage:'', errorMessage:''});
                }
                reader.readAsDataURL(input.target.files[0]);
                
            }
        }
    }else{
        displayMessage = 'Only JPEG|PNG|JPG  file format are allowed with maximum of 2 mb'
		inputElement.value = '';
    }   

    if(displayMessage.length > 0){
        setErrors({...errors, errorMessage:displayMessage})
      }
        
    } 

const Pagination = () => {
         
const pageSize = perPage;
const totalCount = category.length
const siblingCount = 1
const currentPage = page

  const paginationRange = usePaginated({ currentPage,  totalCount, siblingCount,  pageSize });

  if (currentPage === 0 ) {
    return null;
  }
  
  let lastPage =  paginationRange&&paginationRange[paginationRange.length - 1];
  return (
  <nav className="" aria-label="Page navigation sample">
    <ul  className="pagination"  >
      <li className={currentPage === 1 ? ' page-item disabled' : 'page-item'} >
       <a className="page-link" href="#!" onClick={() =>handleChangeCat(page - 1)}><i className="fa-solid fa-arrow-left"></i> </a>
      </li>
      {paginationRange&&paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index}>
           <a className="page-link" href="#!" >&#8230;</a>
          </li>
        }
        return (
          <li className={pageNumber === currentPage?' page-item  active':'page-item '} key={index}>
            <a className="page-link" href="#!" onClick={() =>handleChangeCat(pageNumber)} >{pageNumber}</a>
            
          </li>
        );
      })}

  <li  className={currentPage === lastPage  ? ' page-item disabled' : 'page-item'}>
  <a className="page-link" href="#!" onClick={() =>handleChangeCat(page + 1)} aria-label="Next"><i className="fa-solid fa-arrow-right"></i></a>
      </li>

    </ul> </nav>
  );

      }




 const handleCheckOne =(e:ChangeEvent<HTMLInputElement>)=>{  

		let {name, value} = e.target

		const newCategory = [...category];
		const otherCategory = newCategory.filter(item=>item.code!==name)
		let item = newCategory.filter(item=>item.code===name)


		const status = value ==='false'?'true':'false'
		item[0].status = status
		const currentCategory = item.concat(otherCategory)
	   //setCategory(currentCategory.sort((a, b) =>(a.name > b.name) ? 1 : -1))
			
				  }




     const handleRemoveImage = (path:string, ID:number)=>{  
                  LoadingModal()
                let url = ServerUrl+'/update_controller/remove_image_post'

  var fd = {    
    path:path,
    ID:ID,
    jwt:Token
}
      axios.post(url, fd, config)
               .then(response =>{
                if(response.data.type ==='success'){
               
                    SuccessModal()
                    
      const app =[...content] 
            app[0].post_image = ''
          setContent(app);

                       } else{

            setErrors({...errors, errorMessage:response.data.message})
                       }   
               })
               .catch((error)=>{
                   setErrors({...errors, errorMessage:error.message})
               }).finally(()=>{
                 closeModal()
               })
        }



useEffect(()=>{
  fetchPost()
}, [])

const handleDelete = (code:number)=>{  
            setLoading({...loading,  isLoading: true}) 

               let close =   document.getElementById('btnWarningDialog-'+code)
                  close?.click();
                  LoadingModal()
                let url = ServerUrl+'/delete_controller/tbl_posts'

 const fd = new FormData();

 fd.append("ID", 'ID')
 fd.append("data", String(code))
 fd.append("jwt", String(Token)) 

      axios.post(url, fd, config)
               .then(response =>{
                if(response.data.type ==='success'){

                 closeModal()
                    SuccessModal()
                    window.open('/view_posts', '_self')
                       } else{

            setErrors({...errors, errorMessage:response.data.message})
                       }   
               })
               .catch((error)=>{
                   setErrors({...errors, errorMessage:error.message})
               })
        }


  return (

 <>
      <Breadcomb title="Edit Post" > 
      
<Link to={`/create_post`} className="btn btn-outline-info">  Create New</Link>
      
      </Breadcomb>
    <div className="container-fluid page-content">
         
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


   {loading.isDatafetching?<div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>: 
       content.map((post:any, index:number)=>   <div className="row" key={index}>
            
            <div className="col-lg-9">
              <div className="card">
                 <WarningModal message="This is very dangerous, you shouldn't do it! are you really really sure.?" handleAction={()=>handleDelete(post.ID)} mID={post.ID} /> 

                 <div className="card-body">

    <div className="form-group">
                 <label className="mb-1 " ><b>Edit Title: </b></label>
            <input type="text" placeholder='Post title here' name="post_title"  className={errors.post_title ? 'form-control is-invalid' : 'form-control'}  value={post.post_title} onChange={handleChange}  />
            <div className="invalid-feedback">{errors.post_title}</div>
                
          </div>

          <div className="form-group mt-3 mb-3 ">
  <input id="photo"  onChange={handleFile('photo')} className="d-none" name="photo" type="file" accept="image/*" />              

  <label  htmlFor="photo" title="Change Cover" className='btn btn-outline-primary'> <i className="fa fa-photo-film"></i>    Add Media </label>

&nbsp;
{photo.displayImage?
 <img id="viewPassport2" className="img-fluid" width="50" height="50" 
			onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =ImagesUrl+'/no.jpg'}} src={photo.displayImage} alt="preview" /> :''}

 <div className="text-danger">{errors.displayImage}</div>
              </div>


<div className="table-responsive">
           <QuillText 
               
               value={post.post_content} onChange={handleChangeDescription} style={{height: '280px'}}/> 
          
                
  <div className="text-danger">{errors.post_content}</div>
          </div>
		

<div className="form-group">
            <label className="mb-3 mt-4" ><b>Excerpt: </b></label>

            <textarea className="form-control" name="post_excerpt" onChange={handleChangeArea} rows={3} value={post.post_excerpt}>{post.post_excerpt}</textarea>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">Excerpts are optional hand-crafted summaries of your content that can be used in your website
                  </h6>
          </div>



<div className="form-group">
                 <label className="mb-1 " ><b>Author: </b></label>

<Select options={
                             users&&users.map((list:any, idx:number)=> {
                                return {key:idx, value: list.user_code, label: list.display_name, username:list.user_login}
                              })} 
                          
onChange={handleSelect}  name="post_author" className={errors.post_author? 'form-control is-invalid' : ''}  value={{value:post.post_author, label:getUser(post.post_author)}}  styles={selectStyles}  /> 

                   <div className="invalid-feedback">{errors.post_author}</div>
                  <h6 className="card-subtitle lh-base mb-3 mt-1">Categories can have a hierarchy. You might have a cayegory under another category.
                  </h6>


          </div>



 <div className="form-group">
                 <label className="mb-1 " ><b>Slug: </b></label>
            <input type="text" name="post_slug" disabled  className='form-control'  value={post.post_slug}  onChange={handleChange} />
          
                  <h6 className="card-subtitle lh-base mb-3 mt-1">The “slug” is the URL-friendly version of the name. If empty, the system will generate one automatically.
                  </h6>

          </div>


<div className="form-group">
                 <label className="mb-1 " ><b>Parent Category: </b></label>

<Select options={
                             category&&category.map((list:any, idx:number)=> {
                                return {key:idx, value: list.code, label: list.name}
                              })} 
                          
onChange={handleSelect}  name="post_category" className={errors.post_category? 'form-control is-invalid' : ''}   value={{value:post.post_category, label:getCategory(post.post_category)}}  styles={selectStyles}  /> 

                   <div className="invalid-feedback">{errors.post_category}</div>
                  <h6 className="card-subtitle lh-base mb-3 mt-1">Category this post belong to.
                  </h6>

          </div>

<div className="form-group">
            <label className="mb-3 mt-2" ><b>Subtitle: </b></label>

            <textarea className="form-control" name="subtitle" onChange={handleChangeArea} rows={3} value={post.subtitle}>{post.subtitle}</textarea>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">This text will appear under the title (optional)
                  </h6>
          </div>


 <div className="form-group">
                 <label className="mb-1 " ><b>Quote on blocks: </b></label>
            <input type="text" name="quote"  className='form-control' value={post.quote}  onChange={handleChange} />
         
                  <h6 className="card-subtitle lh-base mb-3 mt-1">Show a quote (only when this article shows up in blocks that support quote and only on blocks that are on one column)
                  </h6>
          </div>


                </div>
              </div>
            </div>
            
              <div className="col-lg-3">

              <div className="card">
                   <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Discussion</h4>
                  </div>
                </div>

                <div className="card-body">
                  <div className=" pull-center">
                   <div className="form-check form-check-inline">
                        <input className="
                            form-check-input
                            success
                            check-outline
                            outline-success
                          " type="checkbox" id="success2-outline-check" value={post.comment_status} onChange={handleAllowComment} name="comment_status" checked={post.comment_status==="open"?true:false} />
                        <label className="form-check-label" htmlFor="success2-outline-check">Allow comments</label>
                      </div>



                       <div className="form-check form-check-inline mt-1">
                        <input className="
                            form-check-input
                            success
                            check-outline
                            outline-success
                          " type="checkbox" id="success2-outline-check" value={post.approveComment} name="approveComment" onChange={handleAllowComment} checked={post.approveComment==="open"?true:false} />
                        <label className="form-check-label" htmlFor="success2-outline-check">Approve comment</label>
                      </div>

                  </div>
                </div>
              </div>

                <div className="card">
                   <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Image Uploaded</h4>
                  </div>
                </div>

                <div className="card-body">
                  <div className=" pull-center">
                                      
 <img id="viewPassport2" className="img-fluid mb-2" width="200" height="200" 
			onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =ImagesUrl+'/no.jpg'}} src={ImagesUrl+"/post/"+post.post_image} alt="preview" /> <br/>

                  {post.post_image!==""?  <a href="#"  onClick={()=>handleRemoveImage("post/"+post.post_image, post.ID)} className='text-danger'><i className="fa fa-trash"></i>   Remove Image</a>:''}
                  </div>
                </div>
              </div>

               <div className="card">
                   <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Publish</h4>
                  </div>
                </div>

                <div className="card-body">
                  <div className=" pull-centers">
<p> <i className="fa-solid fa-check-double"></i> Status: <b>{post.post_status}</b></p>

{post.post_status==="Published"?
<p> <i className="fa-solid fa-clock"></i> Publish on: { new Date(post.post_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: '2-digit' })}  at {getTime(post.post_date.slice(11,19))}</p>:


<p> <i className="fa-solid fa-clock"></i> Drafted on: { new Date(post.post_modified).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: '2-digit' })}  at {getTime(post.post_modified.slice(11,19))}</p>}



                    <button type="button" onClick={(e)=>submit(e,"Draft")} className="btn  btn-outline-primary mb-3 mr-2 " >
                Save As  Draft
                    </button>

                    <hr/>
                       <div className="row "> 
                       <div style={{ display:'flex', justifyContent:'space-between' }}>   
 <button type='button'  data-bs-toggle="modal" data-bs-target={`#warningdialog-${post.ID}`} className='btn btn-danger '> <i className="fa fa-trash"></i> </button> 

                    <button type="button" onClick={(e)=>submit(e,"Published")} className="btn btn-info " >
               <i className="fa-solid fa-share-from-square"></i>   Publish 
                    </button>
                    </div>  
             </div> 
                  </div>
                </div>
              </div>


  <div className="card w-100">
                   <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Related Category</h4>
                  </div>
                </div>

                <div className="card-body ">
                  
<div className="table-responsive"  style={{ maxHeight:'700px' }}>
                 <table className="table table-hover customize-table mb-10">
                <thead className='table-light'>
                  <tr>
                    <th scope="col" >#</th>
                    <th scope="col" >Name</th>
                  </tr>
                </thead>
                <tbody>



                  {category&&dataList.currentData().map((item:any, index:number)=>{
                    return (
                    <tr key={index}  >
                        <td >  <input className="
                            form-check-input
                            success
                            check-outline
                            outline-success
                          " type="checkbox" id={item.code}  name={item.code}  checked={item.status==='false'?false:true} value={item.status} onChange={(e)=>handleCheckOne(e)} /></td>
                        
                    <td >{item.name}
                    </td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>
              <Pagination />
              </div>
                </div>
              </div>
            </div>
            
          </div>)}
        </div>
</>



  )
}

export default EditPost