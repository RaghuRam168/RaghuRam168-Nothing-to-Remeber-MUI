import React from 'react'
import './LoginPage.css'
import LoginForm from '../../components/Login/LoginForm'
const LoginPage = () => {
  return (
    <div className='login-page-container'>
         <div className='left-container'>
            <div> 
              <h1>We missed u so much</h1>
             <p>Want to see your expeneses</p>
             </div>
         </div>
         <div className='right-container'>
              <LoginForm/>
         </div>
    </div>
  )
}

export default LoginPage;