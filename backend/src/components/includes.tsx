
import Cookies from 'js-cookie'


export const appUrl = 'https://admin.qlikr.net';
export const FrontUrl = 'https://qlikr.net';
export const SiteLink = 'https://qlikr.net';

/* 
export const ServerUrl = 'http://192.168.64.3/piky/qlikr/controller';
export const ImagesUrl ='http://192.168.64.3/piky/qlikr/images';  */ 


export const ServerUrl = 'https://admin.qlikr.net/controller';
export const ImagesUrl ='https://admin.qlikr.net/images'; 


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