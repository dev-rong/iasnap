import React from "react";
import getImages from "@/lib/getImages";
import PageContent from "@/components/PageContent";
import { ImageInterface } from "../../types/types";
export const revalidate =  31536000;

export default async function Home() {
  const response = await getImages();
  let images: ImageInterface[] = [];
  let error: string | undefined;

  if (Array.isArray(response)) {
    images = response;
  } else {
    error = response.error;
  }
  return (
    <div className={"w-full md:max-w-5xl mx-auto flex min-h-screen flex-col items-center"}>
      <div className='w-full font-frank text-title'>
        <h1 className='relative uppercase text-center md:h-32 max-sm:text-4xl sm:max-md:text-6xl md:text-9xl'>
            ia snap
        </h1>
        <span className="sr-only">이아 스냅</span>
        <p className='relative text-center max-sm:text-sm'>
          <span className="inline-block absolute md:w-1/5 max-md:w-1/6 h-[2px] bg-title left-0 top-1/2"></span>
          <span className='inline-block uppercase'>what a beautful</span>
          <span className="inline-block absolute md:w-1/5 max-md:w-1/6 h-[2px] bg-title right-0 top-1/2"></span>
        </p>
      </div>
      <PageContent images={images} error={error}/>
    </div>
  );
}

