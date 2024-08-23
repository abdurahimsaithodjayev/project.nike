import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import ExampleBox from './ExampleBox';
function HeaderBox() {
  return (
    <div className="container xl:flex  w-full mx-auto px-4 py-8" id='home'>
    <div >
    <div className='mt-20 p-4 text-red-500'><p>Our Summer collections</p></div>
        <div className='text-left p-6  mt-10 font-bold text-7xl'>
      <h2>The New Arrival</h2>
      <div className='mt-3'><span className='text-red-500'>Nike</span> <span>Shoes</span></div>
    </div>
    <div className='text-left p-6 mt-2 '>
        <p>Discover stylish Nike arrivals, quality<br></br> comfort, and innovation for your active life.</p>
    </div>
    <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-3xl mt-2">Shop Now <FaCircleArrowRight /></button>
    <div className='flex justify-left gap-10 mt-10'>
        <div>
            <h2 className='text-3xl font-bold'>1k+</h2>
            <p>Brands</p>
        </div>
        <div>
            <h2 className='text-3xl font-bold'>500+</h2>
            <p>Shops</p>
        </div>
        <div>
            <h2 className='text-3xl font-bold'>250k+</h2>
            <p>Customers</p>
        </div>
    </div>
    </div>
    <div>
      <ExampleBox />
    </div>
    </div>
  )
}

export default HeaderBox
