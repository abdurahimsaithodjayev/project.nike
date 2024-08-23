import React from 'react'

function SingUp( ) {
  return (
    <div className="container md:flex md:gap-20 w-full mx-auto px-4 py-8">
      <div className="text-3xl mt-20 font-bold text-center">
        <span>Sing Up for</span> <span className='text-red-500'>Updates</span><span> & Newsletter</span>
      </div>
        <div className="flex justify-center border-2 rounded-full items-center text-lg p-2 md:mt-20 gap-3 mt-10">
            <input type="text" placeholder='Enter Your Email' className=' rounded-lg p-2  w-80 h-6'/>
            <button className="bg-red-500 hover:bg-red-700 text-white  w-24 h-7 rounded-3xl ">Sing Up</button>
        </div>
      </div>
    
  )
}

export default SingUp
