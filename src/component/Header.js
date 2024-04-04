import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
   <div id='header'>
    <Link><img src='log.png' alt='shop logo' height='70px'width='160px' id='logo'/></Link>
   <Nav/>
   </div>
  )
}

export default Header