import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

import './component.modules.css';

const Dropdownprofile = () => {

  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const logoutHandler = async () => {
      try{
        const response = await axios.post(`http://localhost:3000/user/signout`, {}, {
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        })
        if(response.status === 200){
          localStorage.clear()
          toast.success(response.data.message)
          navigate('/')
        }
      } catch(error) {
        console.log(error);
        toast.error('Logout failed. Please try again.');
      }
  }

  return (
    <div className='dropdownprofile'>
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={logoutHandler}>Logout</li>
      </ul>
    </div>
  )
}

export default Dropdownprofile;

