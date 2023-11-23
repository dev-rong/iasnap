import React from "react";

const PlaceholderImage = () => {
  const Item = () => {
    return (
      <div>
        <div className='bg-gray w-full h-[500px] mx-auto min-w-[260px] max-w-[335px]'></div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-gray w-[40px] h-[30px] rounded-lg"></div>
            <div className="bg-gray w-[40px] h-[20px]"></div>
          </div>
          <div className="bg-gray w-[100px] h-[20px]"></div>
        </div>
      </div>
    );
  };

  return (
    <div className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse"}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default PlaceholderImage;