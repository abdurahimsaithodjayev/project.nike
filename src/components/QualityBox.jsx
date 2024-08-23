import React from 'react'
import "./QualityStyle.css"
function QualityBox() {
  return (
    <div className="container w-full md:flex mx-auto px-4 py-8">
    <div>
    <div><span className='text-4xl font-bold'>We provide You</span> <span className='text-red-500 font-semibold text-5xl'>Super Quality</span> <br /> 
      <span className='text-5xl font-semibold'>Shoes</span></div>
      <div className='mt-8'>
        <p>
        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p><br />
        <p>Our dedication to detail and excellence ensures your satisfaction</p>
      </div>
      <button className="bg-red-500  hover:bg-red-700 text-white py-2 px-4 rounded-3xl mt-8">View details</button>
    </div>
      <div className='mt-10 quality-box rounded-3xl shadow-2xl '>
     <img  src="https://i.pinimg.com/originals/23/3d/68/233d688728ce75ad38549bcb63a44485.png" alt="shoes" />
      </div>
    </div>
  )
}

export default QualityBox
