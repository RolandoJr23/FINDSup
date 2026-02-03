import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Verify = () => {

  const {token} = useParams();
  const [status, setStatus] = useState("Verifying...")
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async() => {
      try {
        const res = await axios.post('http://localhost:3000/user/verify', {},{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        if(res.data.success){
          setStatus('✅ Email Verified Successfully.')
          setTimeout(() => {
            navigate('/signin')
          }, 2000)
        }else{
          setStatus('❌ Verification Failed. Please try again...')
        }
      } catch(error) {
        console.log(error);
        setStatus('❌ Invalid or Expired Token.')
      }
    }
    verifyEmail()
  }, [token, navigate])

  return (
    <div className='verify'>
      <div className='contain-elem-verify'>
        <h2>{status}</h2>
      </div>
    </div>
  )
}

export default Verify;
