

const dev = process.env.NODE_ENV !== 'production'


export const serverUrl = 'https://admin.qlikr.net/controller';
export const imagesUrl ='https://admin.qlikr.net/images';  





export const Token = '';
export const siteUrl = 'https://qlikr.net';

export const config = {
    headers: { 
        'content-type': 'application/json','Authorization':`Bearer ${Token}`
    }
} 