"use client";
import { useState, TouchEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface BeforeAfterSliderProps {
  imgSrc: string;
}

const BeforeAfterSlider = ({ imgSrc }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const items = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <motion.div  variants={items}
      initial="hidden"
      animate="show" className="imageSlider relative max-w-[600px] mx-auto lg:mr-12
      lg:before:w-[30px] lg:before:h-[2px] lg:before:block lg:before:absolute lg:before:left-[-30px] lg:before:top-[180px]
      lg:after:w-[30px] lg:after:h-[2px] lg:after:block lg:after:absolute lg:after:right-[-30px] lg:after:bottom-[303px]
      second" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full m-auto overflow-hidden select-none labelImage afterImage"
        onTouchMove={handleTouchMove}
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
          className='min-w-[250px] min-h-[600px] md:min-w-[600px] md:min-h-[800px] pointer-events-none'
          width={600}
          height={800}
          style={{width:"auto", height:"auto"}}
          alt="보정 후"
          priority         
          src={`/after${imgSrc}_censored.webp`}
        />
        <div
          className="absolute top-0 left-0 max-w-[600px] m-auto overflow-hidden select-none labelImage beforeImage"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            className='min-w-[250px] min-h-[600px] md:min-w-[600px] md:min-h-[800px] pointer-events-none'
            width={600}
            height={800}
            style={{width:"auto", height:"auto"}}
            priority
            alt="보정 전"
            src={`/before${imgSrc}_censored.webp`}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-[3px] cursor-ew-resize"
          style={{
            backgroundColor: "white",
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="relative rounded-full h-9 w-9 -left-4 top-[calc(50%-5px)]"
            style={{backgroundColor: "white"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="currentColor" style={{position:"absolute", left:"9px", top:"12px"}}>
              <path d="M12.121 4.703V.488c0-.302.384-.454.609-.24l4.42 4.214a.33.33 0 0 1 0 .481l-4.42 4.214c-.225.215-.609.063-.609-.24V4.703z"></path>
              <path d="M5.879 4.703V.488c0-.302-.384-.454-.609-.24L.85 4.462a.33.33 0 0 0 0 .481l4.42 4.214c.225.215.609.063.609-.24V4.703z"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default BeforeAfterSlider;