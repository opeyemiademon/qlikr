import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import Breadcomb from '../../components/breadcomb'
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';
import Select from 'react-select'
import { useSelector } from 'react-redux'

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import { selectStyles, ServerUrl, config, ImagesUrl, Token, SiteLink, appUrl } from '../../components/includes'
import axios from 'axios'
import { SuccessModal } from '../../components/notify'

const NewPost=()=> {

const category = useSelector((state:any) => state.rootReducer.category);
const users = useSelector((state:any) => state.rootReducer.users);
//https://quilljs.com/docs/api/#text-change

const { quill, quillRef } = useQuill();
const [photo, setPhoto] = useState("")

const [loading, setLoading] = useState(false)
const [post, setPost] = useState({
  title:'',
excerpt:'',
author:{label:'', value:''},
category:{label:'', value:''},
slug:'',
subtitle:'',
quote:'',
displayImage:'',
allowComment:'open',
approveComment:'closed',
relatedCategory:'',
publish:'Published',
post_image:''
})


	const [perPage, setPerPage] = useState(100);

  let [page, setPage] = useState(1);
  const PER_PAGE = Number(perPage);

  const dataList = UsePagination(category, PER_PAGE);

   const handleChangeCat = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };
 
const handleReset=()=>{
      
        window.scrollTo({top:0, left:0, behavior:'smooth'})
                setLoading(false)
                setPhoto('')
                const inputElement = document.getElementById('photo') as HTMLInputElement
                inputElement.value = ''
                setPost({
                            
            title:'',
            excerpt:'',
                        
            author:{label:'', value:''},
            category:{label:'', value:''},
            slug:'',
            subtitle:'',
            quote:'',
                    
            allowComment:'open',
            approveComment:'closed',
            relatedCategory:'',
            publish:"Published",
                displayImage:'',
                post_image:''
                })

}

 const [errors, setErrors] = useState({
       title:'',
       fullDescription:'',
        author:'',
       category:'',
       slug:'',
       displayImage:'',
       errorMessage:'',
       successMessage:''
    })

/* const handleChangeDescription =(data:any)=>{
		setPost({...post, fullDescription : data });
        setErrors({...errors, fullDescription:''});
	} */

    const handleChangeArea = (event:ChangeEvent<HTMLTextAreaElement>) =>{	
       let {name, value} = event.target;	
        setPost({...post, [name] : value });
    }

  const handleAllowComment = (event:ChangeEvent<HTMLInputElement>) =>{		

   let {name, value} = event.target;
     value=value==="open"?"closed":"open"
        setPost({...post, [name]: value});
    }

     

 const handleSlug = (event:ChangeEvent<HTMLInputElement>) =>{		
        setPost({...post, slug : post.title.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/,?[ ]/g, '-') });
         setErrors({...errors, slug:''})
       
    }


    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{		
        let {name, value} = event.target;	
        if(name==='slug'){
			value = value.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/,?[ ]/g, '-')
		}
        setPost({...post, [name] : value });
       setErrors({...errors, [name]:''});
    }

     const handleSelect = (option:any, action:any)=>{
      setPost({...post, [action.name]:option});
        setErrors({...errors, [action.name]:''})
         }



    const submit =(event: FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();

        let formIsValid = true;
            let errorLog ={...errors}
          let msg ='This field is required';
    
               
          if(!post.slug){ 
            formIsValid = false;
                errorLog.slug=msg
           }  
           
    
           if(post.category.value.length===0){
                formIsValid = false;
                errorLog.category =msg
            } 

            if(post.author.value.length===0){
              formIsValid = false;
                  errorLog.author=msg
             } 


             if(!post.displayImage){
              formIsValid = false;
                  errorLog.displayImage=msg
             } 

             if(!post.title){
              formIsValid = false;
                  errorLog.title=msg
             } 


            if(!formIsValid){
                setErrors(errorLog)
            }
            
    
    
      if (formIsValid) {  
        
          let code = 'p'+Math.random().toString(36).slice(2,9);

       setLoading(true)    

       var newSlug = post.slug+code
       
            const fd = new FormData();
        Object.entries(post).forEach(([key, value]) => {
                fd.append(key, String(value));
            }); 

       if(photo){
    fd.append('image', photo, post.post_image); 
       }     

       
    fd.append('code', 'p'+Math.random().toString(36).slice(2,9));
fd.append('fullDescription', String(quill?.root.innerHTML));
     fd.append('post_author', post.author.value);
      fd.append('post_category', post.category.value);
      fd.append('jwt', String(Token));


 let url = ServerUrl+'/save_controller/tbl_new_post';
      axios.post(url, fd, config)
      .then(response =>{
        console.log(response.data)
        if(response.data.type === 'success'){

          SuccessModal()
       
          window.open(appUrl+'/create_post?link='+SiteLink+"/post/"+post.slug,'_self')
                  } else{
         setErrors({...errors, errorMessage: response.data.message})
                   
        window.scrollTo({top:0, left:0, behavior:'smooth'})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
                handleReset()
                setLoading(false)  
              })
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
                let Id = Math.random().toString(36).substr(2, 9)
                 let fileUrl = Id+'.png'

                 setPost({...post, post_image:fileUrl, displayImage:e.target.result})
              setPhoto(input.target.files[0])
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
          <li className={pageNumber === currentPage?' page-item  active':'page-item '} key={index} >
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


     /*  const handleAddRelated =(event)=>{
	event.preventDefault()
	let close =   document.getElementById('closeRelated')
	close.click();

	const newContent = JSON.parse(JSON.stringify(content))
	let records = []
		var newProducts = JSON.parse(JSON.stringify(products));
		const oldRelated = JSON.parse(newContent[0].related);
        for (var i in newProducts){
            if(newProducts[i].status===true){
				records.push({ID:Math.random().toString(36).substr(2,9), code:newProducts[i].code, order:Number(oldRelated.length) +Number(i)+1})
				newProducts[i].status=false
            }
		}
	
	const relatedProduct = oldRelated.concat(records)

const allProduct =	relatedProduct.map(e=>e['code'])
	.map((e,i,final)=>final.indexOf(e)===i&&i)
	.filter(e=>relatedProduct[e])
	.map(e=>relatedProduct[e])
	newContent[0].related = JSON.stringify(allProduct)
	setContent(newContent);
		
				setStatus({...status, checkAll:false})
				setProducts(newProducts)
} 


*/


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



  const copyToClipboard =()=>{
         
    const el = document.createElement('textarea');
    el.value = errors.successMessage
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

          useEffect(()=>{
          
    
            if (typeof window !== undefined) {
              let   queryString = new URLSearchParams(window.location.search).get("link") as string
    
              setErrors({...errors, successMessage: queryString})
    
                 }
            
          }, [])
  return (

 <>
      <Breadcomb title="New Post" />
    <div className="container-fluid page-content">


 {errors.successMessage?   <div className=" alert customize-alert alert-dismissible alert-success
                      text-white fade  show remove-close-icon " role="alert">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i onClick={copyToClipboard} className='fa fa-copy text-white'></i>
                    </button>

                    <div className=" d-flex  align-items-center  font-weight-medium
                        me-3 me-md-0 
                      ">{errors.successMessage} 
                    </div>
                  </div>:''}


         
 {errors.errorMessage?   <div className=" alert customize-alert alert-dismissible alert-light-danger
                      text-danger fade  show remove-close-icon " role="alert">
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className='fa fa-trash text-white'></i>
                    </button>

                    <div className=" d-flex  align-items-center  font-weight-medium
                        me-3 me-md-0
                      ">{errors.errorMessage}
                    </div>
                  </div>:''}

          <div className="row">
            
            <div className="col-lg-9">
              <div className="card">
               
                
              <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Add a New Post</h4>
                  </div>
                </div>

                 <div className="card-body">

    <div className="form-group">
                 <label className="mb-1 " ><b>Add Title: </b></label>
            <input type="text" placeholder='Post title here' name="title"  className={errors.title ? 'form-control is-invalid' : 'form-control'}  value={post.title} onBlur={handleSlug} onChange={handleChange}  />
            <div className="invalid-feedback">{errors.title}</div>
                
          </div>

          <div className="form-group mt-3 mb-3 ">
  <input id="photo"  onChange={handleFile('photo')} className="d-none" name="photo" type="file" accept="image/*" />              

  <label  htmlFor="photo" title="Change Cover" className='btn btn-outline-primary'> <i className="fa fa-photo-film"></i>    Add Media </label>

&nbsp;
{post.displayImage?
 <img id="viewPassport2" className="img-fluid" width="50" height="50" 
			onError={(e)=>{(e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src =ImagesUrl+'/no.jpg'}} src={post.displayImage} alt="preview" /> :''}

 <div className="text-danger">{errors.displayImage}</div>
              </div>




<div className="table-responsive">


<div style={{ width: '100%', height: 250 }}>
                        <div ref={quillRef} />
                        </div>

                       
          
                
  <div className="text-danger">{errors.fullDescription}</div>
          </div>
		

<div className="form-group">
            <label className="mb-3 mt-4" ><b>Excerpt: </b></label>

            <textarea className="form-control" name="excerpt" onChange={handleChangeArea} rows={3} value={post.excerpt}>{post.excerpt}</textarea>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">Excerpts are optional hand-crafted summaries of your content that can be used in your website
                  </h6>
          </div>



<div className="form-group">
                 <label className="mb-1 " ><b>Author: </b></label>

<Select options={
                             users&&users.map((list:any, idx:number)=> {
                                return {key:idx, value: list.user_code, label: list.display_name, username:list.user_login}
                              })} 
                          
onChange={handleSelect}  name="author" className={errors.author? 'form-control is-invalid' : ''}   value={post.author}  styles={selectStyles}  /> 

                   <div className="invalid-feedback">{errors.author}</div>
                  <h6 className="card-subtitle lh-base mb-3 mt-1">Categories can have a hierarchy. You might have a cayegory under another category.
                  </h6>


          </div>



 <div className="form-group">
                 <label className="mb-1 " ><b>Slug: </b></label>
            <input type="text" name="slug"  className={errors.slug ? 'form-control is-invalid' : 'form-control'}  value={post.slug}  onChange={handleChange} />
           <div className="invalid-feedback">{errors.slug}</div>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The “slug” is the URL-friendly version of the name. If empty, the system will generate one automatically.
                  </h6>

          </div>




<div className="form-group">
                 <label className="mb-1 " ><b>Parent Category: </b></label>

<Select options={
                             category&&category.map((list:any, idx:number)=> {
                                return {key:idx, value: list.code, label: list.name}
                              })} 
                          
onChange={handleSelect}  name="category" className={errors.category? 'form-control is-invalid' : ''}   value={post.category}  styles={selectStyles}  /> 

                   <div className="invalid-feedback">{errors.category}</div>
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
                          " type="checkbox" id="success2-outline-check" value={post.allowComment} onChange={handleAllowComment} name="allowComment" checked={post.allowComment==="open"?true:false} />
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
                    <h4 className="card-title mb-0">Publish</h4>
                  </div>
                </div>

                <div className="card-body">
                  <div className=" pull-centers">

                   

                {loading? <button type="button" className="btn btn-outline-info mb-3" disabled >
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Please wait...
                    </button>:
                    
                    <button type="button" onClick={submit} className="btn  btn-info mb-3 mr-2 " >
               <i className="fa-solid fa-share-from-square"></i>   Publish 
                    </button>
                    
                       }

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


              <div className="card">
            </div>
            
          </div>
        </div>
</>



  )
}

export default NewPost