import React from 'react'
import { GoArrowRight } from "react-icons/go";
function SpecialOffer() {
  return (
    <div className='container w-full md:flex mx-auto px-4 py-8'>
      <div className='md:mt-44 md:w-1/2 md:text-left'>
        <div> <span className='text-red-500 text-4xl font-semibold'>Special</span> <span className='text-4xl font-bold'> Offer</span></div>
        <p className='mt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart. </p> <br />
        <p>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='mt-10 flex gap-4'>
            <button className='bg-red-500 flex hover:bg-red-700 text-white py-2 px-4 rounded-3xl mt-8'>Shop Now <GoArrowRight className='ml-2 mt-1 bg-white text-red-500  rounded-full'/></button>
            <button className='bg-white text-black hover:bg-blue-300 border-2 border-zinc-700 py-2 px-4 rounded-3xl mt-8 ml-5'>Learn More</button>
        </div>
      </div>
      <div className=" gird mt-10 grid-cols-3">
      <div className='flex gap-4'>
        <div className='shadow-3xl rounded-2xl overflow-hidden' >
            <img src="https://avatars.mds.yandex.net/i?id=8a84f9f22e75f868de13030181ed4456c4f756aa-5848876-images-thumbs&n=13" alt="1" />
      </div>
      <div className='shadow-3xl rounded-2xl overflow-hidden'>
        <img src="https://avatars.mds.yandex.net/i?id=152c2cac1d2735d120ba78b26febb639328841eb3cb7bd92-12752373-images-thumbs&n=13" alt="2" />
      </div></div>
      <div className='mt-4 shadow-3xl rounded-2xl overflow-hidden' style={{height:"300px",width:"555px"}} >
        <img src="https://avatars.mds.yandex.net/i?id=3570dd9e05fb0f65d96c6914be320031_l-5234286-images-thumbs&n=13" alt="3" />
      </div>
    </div>
    </div>
  )
}

export default SpecialOffer
