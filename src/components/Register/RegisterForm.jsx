import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './RegisterForm.css'
import user from './user-solid.svg'
const RegisterForm = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const submitHandler = (event) =>{
        event.preventDefault();
    }

    const onInputHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const newdata = { ...data, [name]:value };
        setData(newdata);
    }

  return (

    <form className='register-form-container' onSubmit={submitHandler}>
        <h1>Register</h1>
        <img src={user} alt="Profile" className='profile-img' />
        <label htmlFor='name-input' className='label-style'>Full Name : </label>
        <input type='text' id='name-input' className='input-style' name='name'  onChange={onInputHandler} value={data.name}/>
        <label htmlFor='email-input' className='label-style'>Email : </label>
        <input type='email' id='email-input' className='input-style' name='email'  onChange={onInputHandler} value={data.email}/>
        <label htmlFor='password-input' className='label-style'>Password : </label>
        <input type='password' id='password-input' className='input-style' name='password' value={data.password} onChange={onInputHandler} />
        <button type='submit' className='login-btn'>Register</button>
        <p>Already Registered ?  <Link to='/Login' name='login' style={{textDecoration:"none" , color:"#2187EC"}} >Login </Link>here</p>
    </form>
  )
}

export default RegisterForm;