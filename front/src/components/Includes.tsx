

const dev = process.env.NODE_ENV !== 'production'

export const serverUrl = 'http://192.168.64.3/bsnsport/controller';
export const imagesUrl ='http://192.168.64.3/piky/qlikr/images';  





export const Token = '';
export const siteUrl = 'https://bsnsports.com.ng';

export const config = {
    headers: { 
        'content-type': 'application/json','Authorization':`Bearer ${Token}`
    }
} 