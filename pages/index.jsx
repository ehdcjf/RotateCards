import BlogLayout from "../conponents/BlogLayout"
import Head from 'next/head'

const Index = () => { 
  return ( 
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <BlogLayout>
      Hello NEXT
      <div>
        <img src="/arger.jpg" /> 
      </div>
    </BlogLayout>
    </>
    
  )
}

export default Index