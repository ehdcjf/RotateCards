import Router from "next/router"
import styled from './FormLayout.module.css'

const FormLayout = ({children})=> { 
  return  ( 
  <>
    {children}
    <button onClick = {()=>Router.back()}>뒤로가기</button>
  <div className={styled.footer}>
    copyright &copy; all reserved
  </div>
</>
  )
}

export default FormLayout