import React from 'react'
import {useState} from 'react'
import { Link ,useNavigate  } from 'react-router-dom'

import './LoginForm.css'
const LoginForm = () => {

    const navigate  = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:""
    })

    const submitHandler = (event) =>{
        event.preventDefault();
        navigate('/merchant')
    }

    const onInputHandler = (event) =>{
        const email = event.target.name;
        const password = event.target.value;
        const newdata = { ...data, [email]: password };
        setData(newdata);
    }

  return (

    <form className='login-form-container' onSubmit={submitHandler}>
        <h1>Login</h1>
        <label htmlFor='email-input' className='label-style'>Email : </label>
        <input type='email' id='email-input' className='input-style' name='email'  onChange={onInputHandler} value={data.email}/>
        <label htmlFor='password-input' className='label-style'>Password : </label>
        <input type='password' id='password-input' className='input-style' name='password' value={data.password} onChange={onInputHandler} />
        <button type='submit' className='login-btn'>Login</button>
        <p>Not a member ?  <Link to='/register' name='register' style={{textDecoration:"none" , color:"#2187EC"}} >Register </Link>here</p>
    </form>
  )
}

export default LoginForm