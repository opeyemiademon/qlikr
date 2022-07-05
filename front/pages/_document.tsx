import { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head />

  <Script async type="text/javascript" src="../styles/assets/js/jquery.min.js" strategy="beforeInteractive" />
  <Script async type="text/javascript" src="../styles/assets/js/jquery.cookie.js" strategy="beforeInteractive" />
  <Script async type="text/javascript" src="../styles/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
  <Script async type="text/javascript" src="../styles/assets/js/flickity.min.js" strategy="beforeInteractive" />
  <Script async type="text/javascript" src="../styles/assets/js/owl.carousel.min.js" strategy="beforeInteractive" />
  <Script async type="text/javascript" src="../styles/assets/js/script.js" strategy="beforeInteractive" />

      <body className="main-home button-color" color-code="">
        <Main />
        <NextScript />
      </body>


    </Html>
  )
}