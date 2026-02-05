import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

import './style.modules.css';

const Signin = () => {

  useEffect(() => {
    document.title = "Sign In";
  }, [])

  const [values, setValues] = useState({
      email: '',
      password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
  }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const response = await axios.post('http://localhost:3000/user/signin', values)
        if(response.status === 200){
            setValues(response.data)
            navigate('/suppliesproducts')
            localStorage.setItem("accessToken", response.data.accessToken)
            toast.success(response.data.message)
        }
      } catch(err) {
        alert(err.response?.data?.message || err.message)
      }
  }

  return (
    <div className='signin'>
      <section className='message'></section>
      <form onSubmit={handleSubmit}>
         <div className='contain-element'>
          <h1>FINDSup</h1>
          <h3>I'm excited to help you grow your business, but before we start, can you sign?</h3>
          <button type='submit' className='btn-signin-google'>Sign In with Google</button>
          <span className='signinwith'>Or Sign in with</span>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='Enter  your email' value={values.email} onChange={handleChange} autoComplete='off'/>
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <div className='forgot-pass'><label htmlFor="">Forgot Password?</label></div>
            <input type='password' name='password' placeholder='Enter  your password' value={values.password} onChange={handleChange} autoComplete='off'/>
          </div>
          <button type='submit'>Sign In</button>
          <p>Don't have account. Please click to 
            <span><Link to='/signup' className='linktosignup'>Sign Up</Link></span>
          </p>
         </div>
      </form>
    </div>
  )
}

export default Signin;

