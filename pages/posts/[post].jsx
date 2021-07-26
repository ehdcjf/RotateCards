import BlogLayout from "../../conponents/BlogLayout"
import {useRouter} from 'next/router'
import Head from 'next/head'

const Post = () => { 
  const router = useRouter();
  const {post} = router.query; 

  return (
    <>

    <Head>
      <title>Post</title>
    </Head>

    <BlogLayout>
      {post} hello POST
    </BlogLayout>

    </>
  )
}

export default Post








