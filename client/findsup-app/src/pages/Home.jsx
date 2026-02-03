import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import bgheader from '../files/bgheader.mp4';

const Home = () => {

  useEffect(() => {
    document.title = "Get Started";
  }, [])

  return (
    <div className='home'>
      {/************ * Navigation ************/}
      <section className='navigation'>
        <h1>FINDSup</h1>
        <Link className='btn-getstarted' to={'/signin'}>Get Started</Link>
      </section>
      {/************ * Header ************/}
      <header>
        <video autoPlay loop muted className="videobg">
          <source src={bgheader} type="video/mp4" />
        </video>
      </header>
      {/************ * Main ************/}
      <main>
        <h1>Why you should choose FINDSup?</h1>
        <h3>We are changing the culture of doing business and are all aimed at growing our business. let's bring for your local business to our local consumers by easier, faster, efficient and trusted.</h3>
        {/* Readon Features */}
        <section className='reason-features'>
          <div className="feature">
            <h2>Trusted Local Suppliers</h2>
            <p>Connect with verified local suppliers to ensure quality and reliability for your business needs.</p>
          </div>
          <div className="feature">
            <h2>Trusted Quality Guarantees</h2>
            <p>All suppliers are checked and all products are quality assured.</p>
          </div>
          <div className="feature">
            <h2>Trusted Network</h2>
            <p>Connecting with well-know and over 5,000 local trusted  suppliers.</p>
          </div>
        </section>
        <hr/>
        {/* How it Works */}
        <section className='howitworks'>
          <h1>How It Works</h1>
          <h3>Getting started with FINDSup is easy and straightforward. Follow these simple steps to connect with local suppliers and buyers.</h3>
          {/* Steps */}
          <div className='steps'>
            <div className='step'>
            <h2>1. Sign Up</h2>
            <p>Create your free account on FINDSup to access our platform.</p>
          </div>
          <div className='step'>
            <h2>2. Create Profile</h2>
            <p>Complete your business profile to attract potential suppliers and buyers.</p>
          </div>
          <div className='step'>
            <h2>3. Browse Listings</h2>
            <p>Explore local suppliers and buyers based on your business needs.</p>
          </div>
          <div className='step'>
            <h2>4. Connect & Negotiate</h2>
            <p>Reach out to suppliers or buyers, negotiate terms, and finalize deals.</p>
          </div>
          </div>
        </section>
        <hr />
        {/* Become Supplier and fill the form details */}
        <form>
          {/* formheader */}
          <section className="formheader">
            <h1>Ready to grow your Business?</h1>
            <h2>Join us in thousands of local businesses to make it save your time and money here in FINDSup.</h2>
          </section>
          {/* formcontent */}
          <section className="formcontent">
            <h2>Get Started Today</h2>
            <div className='businessname'>
              <label htmlFor="">Business Name</label>
              <input type="text" placeholder="Business Name"/>
            </div>
            <div className='yourname'>
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Your Name"/>
            </div>
            <div className='emailaddress'>
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="Email Address"/>
            </div>
            <div className='phonenumber'>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Phone Number"/>
            </div>
            <button type="submit">Send Inquiry Now</button>
          </section>
        </form>
      </main>
      <footer>
        <p>© 2026 FINDSup. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home

