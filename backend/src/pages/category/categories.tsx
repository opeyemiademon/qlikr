import React, { useState, useEffect, ChangeEvent } from 'react'
import { config, FrontUrl, ImagesUrl, ServerUrl, Token } from '../../components/includes';
import Template from '../../components/template'
import AddNewCategory from './addnew'
import axios from 'axios';
import UsePagination from '../../components/pageNumber';
import { usePaginated, DOTS } from '../../components/usePagination';

import { useSelector } from 'react-redux'
import Breadcomb from '../../components/breadcomb';

const Categories =()=> {
  
  //const [content, setContent] = useState([] as any);

const content = useSelector((state:any) => state.rootReducer.category);

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




  return (

    <>
    
         <Breadcomb title="Category" />
      <div className="container-fluid page-content">
            <div className="row">
            <AddNewCategory />


            <div className="col-lg-7 align-items-stretch">
              <div className="card w-100">
                <div className="
                    d-flex
                    border-bottom
                    title-part-padding
                    align-items-center
                  ">
                  <div>
                    <h4 className="card-title mb-0">All Categories</h4>
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
                    <th scope="col" >Slug</th>
                  </tr>
                </thead>
                <tbody>



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
                  })}
                </tbody>
                  <tfoot  className='table-light'>
                  <tr>
                    <th scope="col" >Name</th>
                    <th scope="col" >Description</th>
                    <th scope="col" >Slug</th>
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

export default Categories