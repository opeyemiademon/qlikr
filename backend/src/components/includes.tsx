
import Cookies from 'js-cookie'


export const appUrl = 'http://localhost:3000';
export const FrontUrl = 'http://192.168.64.3/piky/qlikr';
export const SiteLink = 'http://192.168.64.3/piky/qlikr';


export const ServerUrl = 'http://192.168.64.3/piky/qlikr/controller';
export const ImagesUrl ='http://192.168.64.3/piky/qlikr/images';  




export const Code = Cookies.get('qlikrcd');
export const Token = Cookies.get('qlikrtk');



export const config = {
    headers: {
        'content-type': 'application/json', 'Authorization': `Bearer ${Token}`
    }
}

export const multipartConfig = {
    headers: { 'content-type': 'multipart/form-data', 'Authorization': `Bearer ${Token}` }

}

export const selectStyles = { menu: (styles: any) => ({ ...styles, zIndex: 999 }) };