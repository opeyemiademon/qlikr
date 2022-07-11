import React, { useEffect } from 'react'
 import Cookies from 'js-cookie'
const LogOut =()=> {

const clearCookies=()=>{
	Cookies.remove('qlikrcd')
	Cookies.remove('qlikrtk')
  localStorage.setItem('_qlikrexpt', Date.now().toString())
  localStorage.setItem('_qlikrbfexpt', Date.now().toString())
} 

 useEffect(()=>{  
  clearCookies()
  window.open('/', '_self')
},[]); 

  return (
    <div>logOut</div>
  )
}

export default LogOut