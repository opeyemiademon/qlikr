
import Cookies from 'js-cookie'



export const FrontUrl = 'https://bsnsports.com.ng';
export const SiteLink = 'https://bsnsports.com.ng';


export const ServerUrl = 'http://192.168.64.3/piky/qlikr/controller';
export const ImagesUrl ='http://192.168.64.3/piky/qlikr/images';  


/* 
 export const ServerUrl = 'https://app.bsnsports.com.ng/controller';
export const ImagesUrl = 'https://app.bsnsports.com.ng/images'; */ 



export const Code = Cookies.get('qlickrcd');
export const Token = Cookies.get('qlickrtk');



export const config = {
    headers: {
        'content-type': 'application/json', 'Authorization': `Bearer ${Token}`
    }
}

export const multipartConfig = {
    headers: { 'content-type': 'multipart/form-data', 'Authorization': `Bearer ${Token}` }

}

export const selectStyles = { menu: (styles: any) => ({ ...styles, zIndex: 999 }) };