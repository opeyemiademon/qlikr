
import Head from 'next/head'
import { imagesUrl, siteUrl } from './Includes'
import { seoInterface } from './Interface'

const Seo =({ description, title, keywords, imageLink, siteUrl }: seoInterface )=> {
  return (
    <Head>

    <meta charSet="utf-8" />

    <meta property="og:image" content={imageLink} /> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
      <title>{title}</title>

      <meta name="description" content={description} />

    <meta  name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="400" />

    <meta property="og:url" content={siteUrl}/> 
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={"config.social.twitter"} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />


    <link rel="shortcut icon" href="/favicon.jpeg" type="image/x-icon" />
    <meta property="twitter:url" content={siteUrl}/> 
    <meta property="twitter:image" content={imageLink} /> 
    <meta name="author" content="Niyi Busari" />
    <meta property="og:publisher" content="Niyi Busari"/>

    </Head>
  )
}


export default Seo