
import Hero from '../components/hero' 
import Content from '../components/Content'
import Footer from '../components/Footer'

import Head from 'next/head'


export default function Home() {
  return (
    <>
       <Head>
        <title>At Mahek salon</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Hero />
      <Content />
      <Footer />
      


    </>
  )
}