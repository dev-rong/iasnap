"use client";
import { Carousel } from "react-responsive-carousel";
import { easeIn, motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { ImageInterface } from "../../types/types";
import { useState } from "react";
interface ImageProps {
  data: ImageInterface[];
}

const Images: React.FC<ImageProps> = ({data}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  const cdn="https://zvehuwjiyiiyexcxaail.supabase.co/storage/v1/object/public/image"; 
  const variants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        ease: easeIn,
        duration: 0.8,
      }
    }
  };

  return(
    <div className='w-full h-full'>
      {data?.length > 0 && <p className="mb-4 text-sm">결과: {data?.length}건</p>}
      <ul className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"}>
        {
          data.map(({id, sources, ceremony, directory, region, subregion, venue}) => (
            <motion.li  
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }} 
              variants={variants} 
              key={id}
              className='w-full h-full mx-auto min-w-[260px] max-w-[335px] flex flex-col relative mb-4'>          
              <div>
                <span className='absolute left-1 top-1 z-10 text-sm font-extrabold p-1 rounded-lg'
                  style={{color:"white",border:"2px solid white",textShadow:"0 0 5px #AEAEAE"}}
                >
                  {ceremony}
                </span>
                <Carousel
                  className="relative overflow-hidden"
                  showThumbs={false}
                  infiniteLoop
                  preventMovementUntilSwipeScrollTolerance={true}
                  swipeScrollTolerance={50}
                >
                  {sources?.split(",").map(source => (
                    <Image
                      key={id}
                      alt='이아 스냅 포트폴리오 예시'
                      src={`${cdn}/${directory}/${source}`}
                      priority={true}
                      fill={true}
                      style={{
                        objectFit:"cover",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${isLoading
                        ? "opacity-0"
                        : "opacity-100"} transition-opacity ease-in-out duration-1000 w-full h-auto`}
                      onLoad={() => setLoading(false)}
                    />
                  ))}
                </Carousel>
              </div>                
              <div className='text-sm md:text-base mt-4'>
                <span className='inline-block p-1 rounded-lg border-[1px] mb-1'>{region}</span>
                <span> </span>
                <span>{subregion}</span><br/>
                <span className={`${ceremony==="본식"? "bg-pink" : "bg-beige"} opacity-80`}>{venue}</span>
              </div>          
            </motion.li>
          ))  
        }     
      </ul>

    </div>
  );
};

export default Images;