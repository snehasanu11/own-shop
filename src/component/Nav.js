import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Nav = () => {
  const[showNav,setShowNav]=useState(false)
 const handleClick=()=>{
  setShowNav(!showNav)
 }
  
  return (
    <div >
      
      <ul className={`navlinks ${showNav && 'active'}`}>
       <li><Link to='/'className='links' id='navl'>Home</Link></li>
       <li> <Link to='/About' className='links'id='navl'>About</Link></li>
       <li><Link to='/Product' className='links'id='navl'>Product</Link></li>
       <li><Link to='/Contact'className='links'id='navl'>Contact</Link></li>
       <li><Link to='/Cart'className='links'id='navl'><FaCartShopping role="button" />
       <span className='cartv'>10</span></Link></li>
       
        </ul>
        <button className='menu' onClick={handleClick}>menu</button>
    </div>
  )
}

export default Nav