import React, { useState, useEffect, ChangeEvent } from 'react'
import { config, FrontUrl, ImagesUrl, ServerUrl, Token, selectStyles } from '../../components/includes';
import Template from '../../components/template'
import axios from 'axios';
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';

import Select from 'react-select'
import { useSelector } from 'react-redux'
import Breadcomb from '../../components/breadcomb';

const Videos =()=> {
  
  const [content, setContent] = useState([] as any);


	const [loading, setLoading] = useState(false);
	const [perPage, setPerPage] = useState(16);

  let [page, setPage] = useState(1);
  const PER_PAGE = Number(perPage);

  const count = Math.ceil(content.length / PER_PAGE);
  const dataList = UsePagination(content, PER_PAGE);

   const handleChange = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };
 

  const allCategories = useSelector((state:any) => state.rootReducer.category);

const [category, setCategory] = useState({
  name:'',
  slug:'',
  parent:{label:'', value:''},
  description:''
})


 const [errors, setErrors] = useState({
        name:'',
        slug:'',
        errorMessage:''
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

    const handleChanges = (event:ChangeEvent<HTMLInputElement>) =>{		
      let {name, value} = event.target;	
  if(name==='slug'){
    value = value.replace(/,?[ ]/g, '-')
  }
      setCategory({...category, [name] : value });
     setErrors({...errors, [name]:''});
  }




 const handleChangeSelect =(event:ChangeEvent<HTMLSelectElement>)=>{
			const {name, value} =event.target
      setPerPage(Number(value))
		  }

const [filterText, setFilterText] = useState('');

	const filteredItems = content.filter(
		(item:any) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);



const Pagination = () => {
         
const pageSize = perPage;
const totalCount = content.length
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
       <a className="page-link" href="#!" onClick={() =>handleChange(page - 1)}>Previous</a>
      </li>
      {paginationRange&&paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index}>
           <a className="page-link" href="#!" >&#8230;</a>
          </li>
        }
        return (
          <li className={pageNumber === currentPage?' page-item  active':'page-item '} key={index} >
            <a className="page-link" href="#!" onClick={() =>handleChange(pageNumber)} >{pageNumber}</a>
            
          </li>
        );
      })}

  <li  className={currentPage === lastPage  ? ' page-item disabled' : 'page-item'}>
  <a className="page-link" href="#!" onClick={() =>handleChange(page + 1)} aria-label="Next">Next</a>
      </li>

    </ul> </nav>
  );

      }


      const fetchVideos =  async()=>{
        var sql ="Select  ID, code, videoUrl, post_slug, title, dateCreate, category from tbl_video_news order by dateCreate";

            var fd = {    
                sql:sql
            }

            let url = ServerUrl+'/fetchSqlQuery'

              const response = await axios.post(url, fd, config)

              console.log(response.data)
                  if(response.data.length!==0 && Array.isArray(response.data)){
                    setContent(response.data)

                        }
                }


    useEffect(()=>{
      fetchVideos()
    }, [])
  return (

    <>
    
         <Breadcomb title="Category" />
      <div className="container-fluid page-content">
            <div className="row">

            <div className="col-lg-5  align-items-stretch">
              <div className="card w-100">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">Add New Videos</h4>
                  </div>
                </div>

<form method="post" action="#"  >
                <div className="card-body">


<div className="form-group">
            <label className="mb-1 " ><b>Video Url: </b></label>

            <textarea className="form-control" name="description" onChange={handleChangeArea} rows={3} value={category.description}>{category.description}</textarea>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The description totally optional
                  </h6>
          </div>


         
          <div className="form-group">
                 <label className="mb-1 " ><b>Title: </b></label>
            <input type="text"  name="name"  className={errors.name ? 'form-control is-invalid' : 'form-control'}  value={category.name}  onChange={handleChanges} onBlur={handleSlug} />
            <div className="invalid-feedback">{errors.name}</div>
                  <h6 className="card-subtitle lh-base mb-3 mt-1">The name is how it appears on your site.
                  </h6>
          </div>


 <div className="form-group">
                 <label className="mb-1 " ><b>Slug: </b></label>
            <input type="text" name="slug"  className={errors.slug ? 'form-control is-invalid' : 'form-control'}  value={category.slug}  onChange={handleChanges} />
           <div className="invalid-feedback">{errors.slug}</div>

                  <h6 className="card-subtitle lh-base mb-3 mt-1">The “slug” is the URL-friendly version of the name. If empty, the system will generate one automatically.
                  </h6>
          </div>


<div className="form-group">
                 <label className="mb-1 " ><b>Category: </b></label>

<Select options={
                             allCategories&&allCategories.map((list:any, idx:number)=> {
                                return {key:idx, value: list.ID, label: list.name}
                              })} 
                          
onChange={handleSelect}  name="parent"  value={category.parent}  styles={selectStyles}  /> 

                  <h6 className="card-subtitle lh-base mb-3 mt-1">Categories can have a hierarchy. You might have a cayegory under another category.
                  </h6>
          </div>





<div className="form-group">

   {loading?
<button type="button" className="btn waves-effect waves-light btn-info" disabled >
                <i className="fa fa-arrows-rotate fa-spin"></i> Add New Video
                    </button>:
<button type="button" className="btn waves-effect waves-light btn-info" >
                      Add New Video
                    </button>}
</div>
                </div>

                </form>
              </div>
            </div>



            <div className="col-lg-7 align-items-stretch">
              <div className="card w-100">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">All Videos</h4>
                  </div>
                </div>
                <div className="card-body">

<div className="table-responsive ">
   {loading?<div id="loader" className='loader'></div>:  

             <table className="table table-hover customize-table mb-10">
                <thead className='table-light'>
                  <tr>
                    <th scope="col" >Name</th>
                    <th scope="col" >Description</th>
                  </tr>
                </thead>
                <tbody>

{/* 

                  {content&&dataList.currentData().map((item:{name:string,slug:string, description:string, count:number}, index:number)=>{
                    return (
                    <tr key={index} className='visible' >
                    <td >
                      
  <strong > <a>{item.name}</a></strong>

     <div className="flex  hide">
    <a href="#"> Edit</a> | <a href="#" className='text-danger'> Delete </a> | <a href={FrontUrl+"/"+item.slug} target="_blank"> View </a>
    </div> 
                    
                    </td>
                    <td >{item.description===''?'—':item.description}</td>
                    <td >{item.slug}</td>
                  </tr>
                    )
                  })} */}
                </tbody>
                  <tfoot  className='table-light'>
                  <tr>
                    <th scope="col" >Name</th>
                    <th scope="col" >Description</th>
                  </tr>
                </tfoot>
              </table>}


<div className="" style={{ display:'flex', justifyContent:'space-between' }}>
  <select className="mr-2 " style={{ height:'40px' }} name="perPage" onChange={handleChangeSelect} value={perPage}>
              <option value='16'>  16 </option>
              <option value='32'>  32 </option>
              <option value='64'>  64 </option>
              <option value='128'>  128 </option>
              <option value='256'>  256 </option>
			 <option value={content.length}>  All</option>
			</select>

<Pagination />

</div>
            </div>







                </div>
              </div>
            </div>
            </div>
          </div>
    </>
  )
}

export default Videos