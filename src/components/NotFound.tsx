import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className='relative h-[400px] md:h-[500px] w-full flex flex-col lg:flex-row justify-center items-center'>
      <Image
        alt='이아스냅 로고'
        src={"/logo-notfound.webp"}
        priority
        width={300}
        height={300}
        className='absolute z-0'
      />
      <h2 className='absolute z-10 text-base md:text-2xl text-title'>
        죄송합니다.<br></br>일치하는 결과가 없습니다.
      </h2>
    </div>

  );
};

export default NotFound;