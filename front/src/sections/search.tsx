import React, { useEffect, useState, ChangeEvent, FormEvent, useRef } from 'react'
import axios from 'axios'
import { config, imagesUrl, serverUrl, siteUrl } from '../components/Includes';
import ReplyPost from './replyPost';
import { timeSince } from '../components/globalFunction';


const SearchIt =()=> {

    let myRef = useRef<HTMLInputElement | null>(null);
	const [search, setSearch] = useState('');

	const handleSearch =()=>{
		if(search===''){
			myRef.current?.focus()
		}else{
			
			window.location.href='/search?q='+search;
	}
	}


	const handleChangeSearch =(event:ChangeEvent<HTMLInputElement>)=>{
	setSearch(event.target.value)
	}




  return (
  
    <div className="center moon-search">
								<form action="#">
									<div className="input-group" id="search-page">
										<div className="input-group-prepend border-0">
											<button id="button-add" type="button" className="btn btn-link text-info">
												<span className="icon-search"></span>
											</button>
										</div>
										<input type="search" placeholder="Search" aria-describedby="button-addon4" ref={myRef} name='q' id="q" onChange={handleChangeSearch} value={search}  onKeyPress={(e)=>e.key ==='Enter' && handleChangeSearch}  className="form-control search-page bg-none border-0" />
									</div>
								</form>
							</div>
  )
}

export default SearchIt