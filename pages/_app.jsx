import '../index.css'
import Head from 'next/head'

const App = ({Component}) => { 
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
      </Head>
      Hello~~~~~~~~~~~~~~
      <Component/>
    </>
  )
}

export default App