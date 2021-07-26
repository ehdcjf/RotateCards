import Link from 'next/link'
import NavToggle from './NavToggle'

const BlogLayout = ({children}) => { 
  return  ( 
    <>
      <div className='header'>
          <h1>LLLOGGGGGGO</h1>
          <ul>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>  
            </li>
            <li>
            <Link href='/posts/post'>
                <a>Post</a>
              </Link>
            </li>
            <li>
              <Link href='/user/login'>
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href='/user/join'>
                <a>Join</a>
              </Link>
            </li>
          </ul>
      <NavToggle /> 
      </div>
      <div className='container'>
        {children}
      </div>
      <div className='footer'>
        copyright &copy; all reserved
      </div>
    </>
  )
}

export default BlogLayout