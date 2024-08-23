import React, { useState } from 'react';
import "./exampleStyle.css";
function ExampleBox() {
  const [bgClass, setBgClass] = useState('bgfon-1');
  const handleClick = (newBgClass) => {
    setBgClass(newBgClass); 
  };

  return (
    <div className="container w-full mx-auto px-4 py-8">
      <div className={` w-full md:w-screen md:h-screen  sm:w-full  h-96 rounded-3xl    mt-20 ${bgClass}`}>
      <div 
        onClick={() => handleClick("bgfon-1")} 
        className="box1 bgfon rounded-2xl overflow-hidden w-32 h-24 cursor-pointer"
      >
        <img 
          src="https://i.pinimg.com/originals/23/3d/68/233d688728ce75ad38549bcb63a44485.png" 
          alt="Image 1" 
        />
      </div>

      <div 
        onClick={() => handleClick("bgfon-2")} 
        className="box2 bgfon rounded-2xl overflow-hidden w-32 h-24 cursor-pointer"
      >
        <img 
          src="https://static.tildacdn.com/tild3730-6230-4538-b431-363237353036/159252861_w640_h640_.jpg" 
          alt="Nike" 
        />
      </div>
      <div 
        onClick={() => handleClick("bgfon-3")} 
        className="box3 bgfon rounded-2xl overflow-hidden w-32 h-24 cursor-pointer"
      >
        <img 
          src="http://jordansdaily.com/wp-content/uploads/2016/09/jordan-1-white-green-3.png" 
          alt="Shoes" 
        />
      </div>
    </div>
    </div>
  );
}

export default ExampleBox;
