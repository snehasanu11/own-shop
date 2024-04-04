import React from 'react'
import { PiAmazonLogo } from "react-icons/pi";
import { PiAppleLogo } from "react-icons/pi";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiTwitterLogoLight } from "react-icons/pi";

const Trust = () => {
  return (
    <div className='Trustp'>
     <div> <h6>Trusted By 1000+ companies</h6></div>
     <div className='logop'>
     <div className='logo1'><PiAmazonLogo /></div>
     <div className='logo1'><PiAppleLogo /></div>
     <div className='logo1'><PiFigmaLogoDuotone /></div>
     <div className='logo1'><PiLinkedinLogoFill /></div>
     <div className='logo1'><PiTwitterLogoLight /></div>

     </div>
      </div>
  )
}

export default Trust