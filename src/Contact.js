import React from 'react'


const Contact = () => {
  return (
    <div>
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30634475504!2d77.63299766499131!3d12.83800042876982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709545157930!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     <div className='Form'> 
      <form action='https://formspree.io/f/xbjnynra'method='Post'>
        <input type='text'className='text'
         placeholder='username'
         name='username'
         /><br/><br/>
        <input type='email' className='Email'
        name='email'
        placeholder='email'/><br/><br/>
        <textarea type='textarea'rows='4' className='textarea'/><br/><br/>
        <input type='submit' value='submit' className='btn'/>
      </form>
      </div>
    </div>
  )
}

export default Contact