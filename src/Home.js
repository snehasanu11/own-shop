import React from 'react'
import Service from './component/Service'
import Trust from './Trust'


const Home = () => {
  return (
    <div>
    <div className='homep'>
      <div className='homec1'>
        <p>Welcome To</p>
        <h3>Sneha Store</h3>
        <p>Our business is about technologies.<br/>yes,but it also about operations and customer<br/> relationships.</p>
        <button>shop now</button>
      </div>
      
      <div className='homec2'>
        <img src="home.jpg" alt="home img" height="200px" width="300px"/>
      </div>
      <div className='homec3'></div>
    </div>
    <Service/>
    <Trust/>
    </div>
  )
}

export default Home