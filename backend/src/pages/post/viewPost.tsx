import React, { useState, useEffect, ChangeEvent } from 'react'
import { config, FrontUrl, ImagesUrl, multipartConfig, ServerUrl, Token } from '../../components/includes';
import Template from '../../components/template'
import axios from 'axios';
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';

import { useSelector } from 'react-redux'
import Breadcomb from '../../components/breadcomb';
import { Link } from 'react-router-dom';
import { closeModal, LoadingModal, SuccessModal, WarningModal } from '../../components/notify';

const Posts =()=> {
  
	const [totalPost, setTotalPost] = useState([] as any);
  //axios.defaults.withCredentials = true
  const [content, setContent] = useState([] as any);

	const [loading, setLoading] = useState({
        isDatafetching:false,
        isLoading:false
    });

	const [perPage, setPerPage] = useState(50);

  const [page, setPage] = useState(0);
  const PER_PAGE = Number(perPage);

  const count = Math.ceil(content.length / PER_PAGE);
  const dataList = UsePagination(content, PER_PAGE);

   const handleChange = (num:number) => {
    setPage(num);
    dataList.jump(num);
  };
 
   const [errors, setErrors] = useState({
        errorMessage:''
    });

 const handleChangeSelect =(event:ChangeEvent<HTMLSelectElement>)=>{
			const {name, value} =event.target
      setPerPage(Number(value))
      fetchPost(page, Number(value))
		  }


          const [search, setSearch]=useState({
              month:'',
              category:{label:'', value:''},
              filterText:''

          })



const [filterText, setFilterText] = useState('');

	const filteredItems = content.filter(
		(item:any) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

  const nextPage = (num:number)=>{
    setPage(num)
    fetchPost(num, perPage)
    }


const Pagination = () => {
         
const pageSize = perPage;
const totalCount = totalPost;
const siblingCount = 1
const currentPage = page

  const paginationRange = usePaginated({ currentPage,  totalCount, siblingCount,  pageSize });

  
  let lastPage =  paginationRange&&paginationRange[paginationRange.length - 1];
  return (
  <nav className="" aria-label="Page navigation sample">
    <ul  className="pagination"  >
      <li className={currentPage === 1 ? ' page-item disabled' : 'page-item'} >
       <a className="page-link" href="#!" onClick={() =>nextPage(page - 1)}>Previous</a>
      </li>
      {paginationRange&&paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index}>
           <a className="page-link" href="#!" >&#8230;</a>
          </li>
        }
        return (
          <li className={pageNumber === currentPage?' page-item  active':'page-item '}  key={index}>
            <a className="page-link" href="#!" onClick={() =>nextPage(pageNumber)} >{pageNumber}</a>
            
          </li>
        );
      })}

  <li  className={currentPage === lastPage  ? ' page-item disabled' : 'page-item'}>
  <a className="page-link" href="#!" onClick={() =>nextPage(page + 1)} aria-label="Next">Next</a>
      </li>

    </ul> </nav>
  );

      }


      const onChange = ()=>{}
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
      axios.post(url, fd, multipartConfig)
               .then(response =>{
                if(response.data.type ==='success'){

                 closeModal()
                    SuccessModal()
                    
                       } else{

            setErrors({...errors, errorMessage:response.data.message})
                       }   
               })
               .catch((error)=>{
                   setErrors({...errors, errorMessage:error.message})
               }).finally(()=>{
              fetchPost(0, perPage)
                   setLoading({...loading, isLoading: false
                   })
               }) 
        }

       

          const fetchTotal =  async()=>{

            var sql ="Select count(p.ID) as total  from tbl_posts p, tbl_category c where c.code=p.post_category "
        
          
          var fd = {    
          sql:sql
          }
        
          
          let url = ServerUrl+'/carelessfetch'
          await axios.post(url, fd, config)
              .then(response =>{
        
              if(response.data.length!==0 && Array.isArray(response.data)){
                setTotalPost(response.data[0].total)
                    }else{
                setTotalPost(6)
                          } 
            })
          
                }

 const fetchPost =  (offset:number, perPag:number)=>{
        var sql ="Select  p.ID, p.code, p.post_title, p.post_author, p.post_status, p.view_count, p.post_date, p.post_category, p.quote, p.post_slug, p.relatedCategory, p.post_modified, u.display_name, c.name, 'false' as status from tbl_posts p, tbl_users u, tbl_category c where u.user_code = p.post_author and c.code=p.post_category "


       if(search.category.value!==''){
        sql = sql + " and p.post_category ="+search.category.value
       }

       if(search.month!==''){
        sql = sql + " and cast(p.post_date as date) ="+search.month
       }

sql = sql + " order by p.ID DESC LIMIT "+perPag+" offset "+offset;
 var fd = {    
    sql:sql
}

let url = ServerUrl+'/fetchSqlQuery'
setLoading({...loading, isDatafetching:true})
 axios.post(url, fd, config)
      .then(response =>{
			if(response.data.length!==0 && Array.isArray(response.data)){
             setContent(response.data.sort((a, b) =>(a.ID > b.ID) ? -1 : 1))

            }else{
              setContent([])
         setErrors({...errors, errorMessage: response.data})
                  } 
    })
       .catch((error)=>{
                 setErrors({...errors, errorMessage:error.message})
              }).finally(()=>{

setLoading({...loading, isDatafetching:false})
                 }) 

                }

useEffect(()=>{
  fetchTotal()
  fetchPost(page, perPage)
}, [])

  return (

    <>
    
         <Breadcomb title="Posts" >

<Link to={`/create_post`} className="btn btn-outline-info">  Create New</Link>
             </Breadcomb>


      <div className="container-fluid page-content">
            <div className="row">
           

            <div className="col-lg-12 align-items-stretch">
              <div className="card w-100">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>


                    <h4 className="card-title mb-0">Action buttons here</h4>




                  </div>
                </div>
                <div className="card-body">

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

<div className="table-responsive ">

   {loading.isDatafetching?<div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>:  

             <table className="table table-hover customize-table mb-10">
                <thead className='table-light'>
                  <tr>
                       <th scope="col" >#</th>
                         <th scope="col" >Title</th>
                    <th scope="col" >Author</th>
                    <th scope="col" >Category</th>
                    <th scope="col" >Quote</th>
                     <th scope="col" >Date</th>
                     <th scope="col" >Views</th>
                  </tr>
                </thead>
                <tbody>



                  {content&&content.map((item:any, index:number)=>{
                    return (
                    <tr key={index} className={index%2===0?'visible even':'visible odd'} >

                        <td>
 <div className="form-check form-check-inline">
                        <input className="
                            form-check-input
                           info
                            check-outline
                            outline-info
                          " type="checkbox" id="success2-outline-check" value={item.status} onChange={onChange}  name={item.code} checked={item.status==="true"?true:false} />
                      </div>


                        </td>
                    <td >
                      
                      <WarningModal message="This is very dangerous, you shouldn't do it! are you really really sure.?" handleAction={()=>handleDelete(item.ID)} mID={item.ID} /> 


                     <Link to={`/post/edit/`+item.code} className="text-info">  <strong > {item.post_title}</strong></Link>
  
     <div className="flex  hide">
    
    <Link to={`/post/edit/`+item.code} >  <strong > Edit</strong></Link>


     | <a href="#!"  data-bs-toggle="modal" data-bs-target={`#warningdialog-${item.ID}`} className='text-danger'> Delete </a> | <a href={FrontUrl+"/post/"+item.post_slug} target="_blank"> View </a>
    </div> 
                    
                    </td>
                    <td >
                    
                     <Link to={`/users/edit/`+item.post_author} className="text-info">{item.display_name}</Link>
                    </td>
                    <td >
                     <Link to={`/category/edit/`+item.post_category} className="text-info">{item.name}</Link>
                    </td>
                    <td >{item.quote===""?"-":item.quote}</td>
                    <td >{item.post_status}</td>
                    <td >{item.view_count}</td>
                  </tr>
                    )
                  })}
                </tbody>
                  <tfoot  className='table-light'>
                  <tr>
                     <th scope="col" >#</th>

                    <th scope="col" >Title</th>
                    <th scope="col" >Author</th>
                    <th scope="col" >Category</th>
                    <th scope="col" >Quote</th>
                     <th scope="col" >Date</th>
                     <th scope="col" >Views</th>
                  </tr>
                </tfoot>
              </table>}


<div className="" style={{ display:'flex', justifyContent:'space-between' }}>
  <select className="mr-2 " style={{ height:'40px' }} name="perPage" onChange={handleChangeSelect} value={perPage}>
  <option value='50'>  50 </option>
              <option value='100'>  100 </option>
              <option value='500'>  500 </option>
              <option value='1000'>  1000 </option>
              <option value='5000'>  5000 </option>
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

export default Posts