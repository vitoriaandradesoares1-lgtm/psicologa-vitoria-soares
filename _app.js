import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>\n        <link rel="icon" href="/favicon.svg" />\n        <link rel="preconnect" href="https://fonts.googleapis.com">\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
        <title>Psicóloga Vitória A. Soares | Terapia Cognitivo-Comportamental</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
