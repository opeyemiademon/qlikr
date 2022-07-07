

const dev = process.env.NODE_ENV !== 'production'

export const serverUrl = 'http://192.168.64.3/piky/qlikr/controller';
export const imagesUrl ='https://app.bsnsports.com.ng/images';  





export const Token = '';
export const siteUrl = 'http://localhost:3000';

export const config = {
    headers: { 
        'content-type': 'application/json','Authorization':`Bearer ${Token}`
    }
} 