import React, { useContext } from 'react'
import Home from './Home'

const About = () => {
 
  return (
    <div>
    <div className='about'>
      <div className='about1'>
        <h3>About Us</h3>
      </div>
      <div className='about2'>
      <div> < img src='shopp.png' alt='img' title='sandwitch' height='300px' width='300px' /></div> 
        <div  className='vision'>
          <h1>OUR VISION</h1>
         <p>At shopping, we don’t just make shopping. We make people happy.<br/> shop was built on the belief that  shopping should be special,<br/> and we carry that belief into everything we do.<br/> With more than 15 years of experience under our belts,<br/> we understand how to best serve our customers<br/> through tried and true service principles:<br/> We create customers we’re proud to serve and deliver it fast, with a smile.</p>
         <button className='btn'>know more</button>
      </div>
      </div>
    </div>
      
      
    
    </div>
  )
}

export default About