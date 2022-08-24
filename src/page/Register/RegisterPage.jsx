import React from 'react'
import './RegisterPage.css'
import RegisterForm from '../../components/Register/RegisterForm'
const RegisterPage = () => {
  return (
    <div className='register-page-container'>
         <div className='register-left-container'>
            <div>
             <h1>Tiered of Noting the information about customers...</h1>
             <p>You came to a right place ✌️✌️</p>
             </div>
         </div>
         <div className='register-right-container'>
              <RegisterForm/>
         </div>
    </div>
    //</div>
  )
}

export default RegisterPage;