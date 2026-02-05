import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

import './style.modules.css';

const Signup = () => {

  useEffect(() => {
    document.title = "Sign Up";
  }, [])

  const [values, setValues] = useState({
    username: '',
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
        const response = await axios.post('http://localhost:3000/user/signup', values)
        if(response.status === 201){
            setValues({ username: '', email: '', password: '' })
            navigate('/signin')
            toast.success(response.data.message)
        }
      } catch(err) {
        if(err.response?.data?.message?.includes('Duplicate entry')){
          alert('Username or email already exists. Please try another.')
        } else {
          alert(err.response?.data?.message || err.message)
        }
      }
  }

  return (
    <div className='signup'>
      <section className='message'></section>
      <form onSubmit={handleSubmit}>
        <div className='contain-element'>
          <h1>FINDSup</h1>
          <h3>I'm excited to help you grow your business, but before we start, can you sign?</h3>
          <button type='submit' className='btn-signup-google'>Sign Up with Google</button>
          <span className='signupwith'>Or Sign up with</span>
          <div className='username'>
            <label htmlFor="username">Username</label>
            <input type='text' name='username' placeholder='Enter your username' value={values.username} onChange={handleChange} autoComplete='off' />
          </div>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='Enter your email' value={values.email} onChange={handleChange} autoComplete='off' />
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' placeholder='Enter your password' value={values.password} onChange={handleChange} autoComplete='off' />
          </div>
          <button type='submit'>Sign Up</button>
          <p>I have already account. Please click to
            <span><Link to='/signin' className='linktosignin'>Sign In</Link></span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signup
