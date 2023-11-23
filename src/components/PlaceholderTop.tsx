import React from "react";

const PlaceholderTop = () => {
  return (
    <div className="w-full flex flex-col mt-4 animate-pulse">
      <div className="bg-gray h-[38px] md:h-[54px] rounded-lg"></div>
      <div className="flex items-center gap-6 h-16 md:h-24">
        <div className="bg-gray w-[73px] h-[30px] md:h-[40px]"></div>
        <div className="bg-gray w-[37px] md:w-[47px] h-[30px] md:h-[40px] rounded-lg"></div>
        <div className="bg-gray w-[94px] md:w-[113px] h-[30px] md:h-[40px] rounded-lg"></div>
        <div className="bg-gray w-[68px] md:w-[82px] h-[30px] md:h-[40px] rounded-lg"></div>
        <div className="bg-gray w-0 md:w-[67px] h-[30px] md:h-[40px] rounded-lg"></div>
        <div className="bg-gray w-0 md:w-[82px] h-[30px] md:h-[40px] rounded-lg"></div>
      </div>
    </div>
  );
};

export default PlaceholderTop;