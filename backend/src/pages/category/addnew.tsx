import React, {ChangeEvent, FormEvent, useState} from 'react'

import {ServerUrl, Token, config, selectStyles} from '../../components/includes'
import axios from 'axios'
import Select from 'react-select'

import { useSelector } from 'react-redux'
import { SuccessModal } from '../../components/notify'

const AddNewCategory=()=> {

const allCategories = useSelector((state:any) => state.rootReducer.category);
	const [loading, setLoading] = useState(false);
const [category, setCategory] = useState({
  name:'',
  slug:'',
  parent:{label:'', value:''},
  description:'',
  avatar:''
})


 const [errors, setErrors] = useState({
        name:'',
        slug:'',
        errorMessage:'',
        avatar:''
    })

    const handleSelect = (option:any, action:any)=>{
      setCategory({...category, [action.name]:option});
        setErrors({...errors, [action.name]:''})
         }

const handleChangeArea = (event:ChangeEvent<HTMLTextAreaElement>) =>{	
       let {name, value} = event.target;	
        setCategory({...category, [name] : value });
    }

 const handleSlug = (event:ChangeEvent<HTMLInputElement>) =>{		
        setCategory({...category, slug : category.name.replace(/,?[ ]/g, '-') });
       
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{		
        let {name, value} = event.target;	
    if(name==='slug'){
			value = value.replace(/,?[ ]/g, '-')
		}
        setCategory({...category, [name] : value });
       setErrors({...errors, [name]:''});
    }



    const submit =(event: FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        var errormessage = [];

       if(!category.name){
			let msg ='This field is required';
			setErrors({...errors, name:msg})
			errormessage.push(msg);
		} 

   

            if (errormessage.length <=0) {
       setLoading(true)    

       var newSlug = category.slug
        if(newSlug===''){
          newSlug = category.name.replace(/,?[ ]/g, '-')
			}



 var fd = {    
    name:category.name,
    slug:newSlug,
    avatar:category.avatar,
    parent:category.parent.value,
    description:category.description,
    code:'c'+Math.random().toString(36).slice(2,9),
    jwt:Token,
}
 let url = ServerUrl+'/save_controller/tbl_category';
      axios.post(url, fd, config)
      .then(response =>{
        if(response.data.type === 'success'){
          SuccessModal()

          setTimeout(()=>{
            window.location.reload()
          }, 200)
                  } else{
         setErrors({...errors, errorMessage: response.data.message})
                  }   
              })
              .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{
                setLoading(false)
                setCategory({
                   name:'',
                slug:'',
                parent:{label:'', value:''},
                description:'',
                avatar:''
                })
              })   
        } 
    }
  return (
       <div className="col-lg-5  align-items-stretch">
              <div className="card w-100">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Add New Category</h4>
                  </div>
                </div>

<form method="post" action="#"  >
                <div className="card-body">
         
          <div className="form-group">
                 <label className="mb-1 " ><b>Name: </b></label>
            <input type="text"  name="name"  className={errors.name ? 'form-control is-invalid' : 'form-control'}  value={category.name}  onChange={handleChange} onBlur={handleSlug} />
            <div className="invalid-feedback">{errors.name}</div>
                  <h6 className="card-subtitle lh-base mb-3 mt-1">The name is how it appears on your site.
                  </h6>
          </div>


 <div className="form-group">
                 <label className="mb-1 " ><b>Slug: </b></label>
            <input type="text" name="slug"  className={errors.slug ? 'form-control is-invalid' : 'form-control'}  value={category.slug}  onChange={handleChange} />
           <div className="invalid-feedback">{errors.slug}</div>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The “slug” is the URL-friendly version of the name. If empty, the system will generate one automatically.
                  </h6>
          </div>



          <div className="form-group">
                 <label className="mb-1 " ><b>Avatar: </b></label>
            <input type="text" name="avatar"  className={errors.avatar ? 'form-control is-invalid' : 'form-control'}  value={category.avatar}  onChange={handleChange} />
           <div className="invalid-feedback">{errors.avatar}</div>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The “avatar” is the image that appears on the category page.
                  </h6>
          </div>

<div className="form-group">
                 <label className="mb-1 " ><b>Parent Category: </b></label>

<Select options={
                             allCategories&&allCategories.map((list:any, idx:number)=> {
                                return {key:idx, value: list.ID, label: list.name}
                              })} 
                          
onChange={handleSelect}  name="parent"  value={category.parent}  styles={selectStyles}  /> 

                  <h6 className="card-subtitle lh-base mb-3 mt-1">Categories can have a hierarchy. You might have a cayegory under another category.
                  </h6>
          </div>



<div className="form-group">
            <label className="mb-1 " ><b>Description: </b></label>

            <textarea className="form-control" name="description" onChange={handleChangeArea} rows={3} value={category.description}>{category.description}</textarea>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The description totally optional
                  </h6>
          </div>


<div className="form-group">

   {loading?
<button type="button" className="btn waves-effect waves-light btn-info" disabled >
                <i className="fa fa-arrows-rotate fa-spin"></i> Add New Category
                    </button>:
<button type="button" className="btn waves-effect waves-light btn-info" onClick={submit}>
                      Add New Category
                    </button>}
</div>
                </div>

                </form>
              </div>
            </div>
  )
}

export default AddNewCategory




