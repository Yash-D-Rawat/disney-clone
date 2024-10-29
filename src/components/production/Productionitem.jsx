import React from 'react';

function Productionitem({ image, video }) {
  return (
    <div className='mb-5 md:mb-0 relative border-[2px] rounded-lg border-gray-600 cursor-pointer hover:scale-105 transition-all duration-200 ease-in shadow-[0_10px_25px_#05060A] hover:shadow-[0_15px_30px_#05060A]'>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-50'
      ></video>
      <img src={image} alt="" className='rounded-md w-full' />
    </div>
  );
}

export default Productionitem;
