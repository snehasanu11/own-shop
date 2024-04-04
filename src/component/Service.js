import React from 'react'
import { FaTruck } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Service = () => {
  return (
    <div className='servicep'>
        <div className='service1'>
        <FaTruck className='s1' />
        <p>Super Fast and Free Delivery</p>

        </div>
        <div className='service2'>
        <div className='servicec1'>
        <MdOutlineSecurity  className='s2'/>
        <p>Non-Contact shipping</p>
        </div>
        <div className='servicec2'>
        <FaMoneyBillTransfer className='s2'/>
        <p>Money-Back Guaranteed</p>
        </div>
        </div>
        <div className='service3'>
        <FaLock  className='s1' />
        <p>Super Secure Payment System</p>

        </div>
    </div>
  )
}

export default Service