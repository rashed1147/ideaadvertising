import React from 'react';

const SwatchStrip = ({ className = '' }) => {
  return (
    <div className={`swatch-strip flex h-[6px] w-full ${className}`} aria-hidden="true">
      <span className="flex-1 bg-[#E4212B] s-red"></span>
      <span className="flex-1 bg-[#FBB33C] s-yellow"></span>
      <span className="flex-1 bg-[#6FA84B] s-green"></span>
      <span className="flex-1 bg-[#FFFFFF] border-y border-gray-200 s-white"></span>
      <span className="flex-1 bg-[#141414] s-black"></span>
    </div>
  );
};

export default SwatchStrip;
