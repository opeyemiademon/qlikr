
import '../styles/assets/css/bootstrap.min.css'
import '../styles/assets/css/style.css'
import '../styles/assets/css/buttonstyle.css'
import '../styles/assets/css/responsive.css'
import '../styles/assets/css/flickity.min.css'
import '../styles/assets/css/owl.carousel.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import Template from '../src/components/template'

function MyApp({ Component, pageProps }: AppProps) {

  //include all your layout component here e.g header, or footer
  return (
  <>
  <Template>
  
  <Component {...pageProps} />

  </Template>


  </>
  )
}

export default MyApp
