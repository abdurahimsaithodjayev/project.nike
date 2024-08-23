import React from 'react'
import "./AboutStyle.css"
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
function AboutUs( props) {
  return (
    <div className="container flex flex-col md:flex-row header-box gap-4 w-full mx-auto px-4 py-8" id='about'>
      <div className='flex gap-4'>
        <div className='text-left h-64 box p-6'>
      <FaCarSide  className='text-white bg-red-500  rounded-full size-8'/>
        <h2>Free Shipping</h2><br />
        <p>Enjoy seamless shopping with our complimentary shipping service.</p>
      </div>
      <div className='text-left h-64 box p-6'>
      <FaClipboardCheck className='text-white bg-red-500 rounded-full size-8' />
        <h2>Secure Payment</h2><br />
        <p>Secure payment with our secure payment solutions.</p>
      </div></div>
      <div className='text-left box md:h-64 sm:h-48 p-6'>
      <FaHandHoldingHeart  className='text-white bg-red-500 rounded-full size-8'/>
        <h2>Love to Help You</h2><br />
        <p>We are committed to helping you find the perfect pair of shoes.</p>
      </div>
    </div>
  )
}

export default AboutUs
