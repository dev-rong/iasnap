import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-screen min-h-screen fixed top-0 left-0 flex justify-center items-center'>
      <Image
        alt='이아스냅 로고'
        src={"/logo-loading.webp"}
        priority
        width={200}
        height={200}
      />
    </div>
  );
};

export default Loading;