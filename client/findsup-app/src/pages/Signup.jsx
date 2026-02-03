import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './style.modules.css';

const Signup = () => {

  useEffect(() => {
      document.title = "Sign Up";
    }, [])

  // const [isLoading, setIsLoading] = useState(false);

    const [formData, setformData] = useState({
      username: '',
      email: '',
      password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
      const {name, value} = e.target;
      setformData((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      console.log(formData)
      try {
        const res = await axios.post('http://localhost:3000/user/signup', formData)
        if(res.status === 200 || res.status === 201){
          setformData({username: '', email: '', password: ''})
          navigate('/verify')
        }
      } catch (error) {
        if(error.res?.data?.message?.includes('Duplicate entry')){
          alert('Username or email already exists. Please try another.')
        } else {
          alert(error.res?.data?.message || error.message)
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
              <input type='text' name='username' placeholder='Enter your username' value={formData.username} onChange={handleChange} autoComplete='off'/>
          </div>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' placeholder='Enter your email' value={formData.email} onChange={handleChange}  autoComplete='off'/>
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange}  autoComplete='off'/>
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
