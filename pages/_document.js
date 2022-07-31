
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head > 
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='pagebody'>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}