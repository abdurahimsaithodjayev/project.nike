import React from 'react'
import { FcLike } from "react-icons/fc";
import  {ExProducts}  from './PopularProductsData'
import "./ProductsStyle.css"
function Products() {
  return (
    <div className="container mt-32 w-full mx-auto px-4 py-8" id='products'>
      <div className="font-medium text-4xl "><span>Our</span> <span className='text-red-500'>Popular</span> <span>Products</span></div>
      <p className="mt-5">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      <div className="mt-10 grid grid-cols-2 gap-24  md:flex md:gap-4  justify-center">
        {ExProducts.map((product) => (
          <div key={product.id} className=" mt-10">
            <div className=" gap-2">
              <div className="w-44 h-44 imagebg rounded-2xl  overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-auto" />
              </div>
              <div className="w-32">
                <div className="flex mt-10 gap-2"><FcLike /> <span>(4.5)</span> </div>
                <h2 className="text-2xl font-normal">{product.name}</h2>
                <p className="text-lg text-red-400 font-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
