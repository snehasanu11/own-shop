import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot1'>
            <div className='foot1c1'>
                <h4>Ready to get started?</h4>
                <h4>Talk to us today</h4>
            </div>
            <div className='foot1c1'>
                <button>
                    <NavLink to='/Contact'>Get Started</NavLink>
                </button>
            </div>
        </div>
        <div className='footer1'>
            <div className='grid1'>
                <h5>Sneha Store</h5>
                <p>uniqueness and quality is a major of our store</p>

                
            </div>
            <div className='grid2'>
                <h5>Subscribe to get important updates</h5>
                <form action='#' method='post'>
                 <input className='Email' type='email'placeholder='enter email'
                 name='email'/> <br/> 
                 <br/>
                 <input type='submit' value='submit' className='btn '/> 
                </form>
            </div>
            <div className='grid3'>
                <h5>Follow us</h5>
                <FaYoutube />
                <FaInstagram />
            </div>
            <div className='grid4'>
                <h5>call us</h5>
                +90123456789
            </div>
            
      

      </div>
      <hr/>
      <div className='footer2'>
        <div className='footer2c1'>
            @{new Date().getFullYear()} Sneha's Store. All rights reserved.
        </div>
        <div className='footer2c2'>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer