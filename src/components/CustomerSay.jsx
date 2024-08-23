import React from 'react'
import { FaStar } from "react-icons/fa";
function CustomerSay() {
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto  bg-gray-100">
        <div className="mt-20"><span className='text-4xl font-semibold'>What Our</span> <span className='text-red-500 text-4xl font-semibold'>Customers</span> <span className='text-4xl font-bold'>Say?</span></div>
        <p className="mt-4 px-20 text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="md:flex">
        <div className="mt-10 flex flex-col justify-center items-center gap-4">
            <img className="mt-10 rounded-full w-20" src="https://nike-store-app-omega.vercel.app/assets/customer1-68e0c3c8.jpeg" alt="" />
            <p className="mt-4 px-20 text-center">I had an amazing experience shopping at Nike Store! The quality of the products is exceptional, and the prices are very reasonable. The staff was friendly and helpful, and the delivery was fast. I would definitely recommend Nike Store to anyone looking for high-quality products at a great price.</p>
            <span className="flex gap-2"><FaStar  className='text-red-500'/>(4.5)</span>
            <h2 className='font-bold text-2xl'>Morich Brown</h2>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center gap-4">
            <img className="mt-10 rounded-full w-20" src="https://nike-store-app-omega.vercel.app/assets/customer2-b505f82b.svg" alt="" />
            <p className="mt-4 px-20 text-center">I had an amazing experience shopping at Nike Store! The quality of the products is exceptional, and the prices are very reasonable. The staff was friendly and helpful, and the delivery was fast. I would definitely recommend Nike Store to anyone looking for high-quality products at a great price.</p>
            <span className="flex gap-2"><FaStar  className='text-red-500'/>(4.5)</span>
           < h2 className='font-bold text-2xl'>Lota Mongeskar</h2>
        </div>
        </div>
    </div>
  )
}

export default CustomerSay
