import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import UsePagination from '../components/pageNumber';
import { usePaginated, DOTS } from '../components/usePagination';
import Select from 'react-select'
import { useSelector } from 'react-redux'

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import { selectStyles, ServerUrl, config, ImagesUrl, Token, SiteLink } from '../components/includes'
import axios from 'axios'
import { SuccessModal } from '../components/notify'

const CreatePost =()=> {

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
        var errormessage = [];
        let errorLog =errors
			let msg ='This field is required';


      if(!post.slug){
           
            setErrors({...errors, slug:msg})
			errormessage.push(msg);
		}  
          

    if(post.category.value.length===0){
            setErrors({...errors, category:msg})
			errormessage.push(msg);
		} 


    if(post.author.value.length===0){
             setErrors({...errors, author:msg})
			errormessage.push(msg);
		} 


if(!post.displayImage){
    let img ="Please select image"
            setErrors({...errors, displayImage:msg})
			errormessage.push(img);
		} 

       if(!post.title){
            setErrors({...errors, title:msg})
			errormessage.push(msg);
		} 

let code = 'p'+Math.random().toString(36).slice(2,9);


            if (errormessage.length ===0) {
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
        if(response.data.type === 'success'){

          SuccessModal()
       
          window.open('https://app.bsnsports.com.ng/create_post?link='+SiteLink+"/post/"+post.slug,'_self')
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
    <div>create_post</div>
  )
}

export default CreatePost