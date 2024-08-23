import React from 'react'
import './FooterStyle.css'
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
function Footer() {
  return (
    <div className="footer md:flex text-white hover:cursor-pointer bg-black mx-auto px-4 py-8" id='footer'>
      <div className='text-left p-2 w-72 text-xl'>
        <h2 className='text-3xl font-bold'>Nike</h2>
        <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex gap-4 mt-10">
            <span className='text-2xl text-black bg-white rounded-full'><TiSocialFacebook /></span><span className='text-2xl text-black bg-white rounded-full'><FaTwitter /></span><span className='text-2xl text-black bg-white rounded-full'><AiFillInstagram /></span>
            </div>      
      </div>
      <div className="flex hoverstyle gap-20 md:mt-0 mt-24">
        <div className='grid  gap-2 p-2'>
            <h2 className='text-3xl mb-8 font-bold'>Products</h2>
            <p>Air Force 1</p>
            <p>Air Jordan</p>
            <p>Air Max</p>
            <p>Air Max 90</p>
            <p>Air Max 95</p>
            <p>Air Max 97</p>
            <p>Air Max 270</p>
            <p>Air Max 720</p>
            <p>Air Max 720</p>
        </div>
        <div className='grid gap-2  p-2'>
            <h2 className='text-3xl mb-8 font-bold'>Help</h2>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Gift Cards</p>
            <p>Size Guide</p>
        </div>
        <div className='p-2'>
            <h2 className='text-3xl  mb-12 font-bold'>Get in Touch</h2>
            <p>costomer@nike.com</p><br />
            <p>1-800-123-4567</p>
            <p>800-123-4567</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
