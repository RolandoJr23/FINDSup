import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile.jsx';
import Dropdownprofile from '../components/Dropdownprofile.jsx';

import './style.modules.css';

const SuppliesProduct = () => {

  useEffect(() => {
    document.title = "Supplies Products";
  }, [])

  const [openProfile, setOpenProfile] = useState(false);

  return ( 
    <div className='suppliesproducts'>
       {/************ * Navigation ************/}
      <nav className='nav-suppliesproducts'>
        <ul>
            <li>Categories Business</li>
            <li>About</li>
            <li>Services</li>
            <li>FAQ</li>
            <li onClick={() => setOpenProfile((prev) => !prev)}>
              <Profile />
              {
                openProfile && <Dropdownprofile/>
              }
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default SuppliesProduct
