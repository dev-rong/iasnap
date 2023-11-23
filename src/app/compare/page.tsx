"use client";

import Image from "next/image";
import BeforeAfterSlider from "./component/BeforeAfterSlider";
import { useState } from "react";
import { motion } from "framer-motion";

const CompareSlider = () => {
  const [imageSrc, setImageSrc] = useState<string>("1");
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const items = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageSrcHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setImageSrc(e.currentTarget.id);
  };

  const getBeforeStyle = (id: string) => ({
    border: imageSrc===id ? "6px solid #DE9697" : "none",
    display:"inline-block",
  });

  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      animate="show"
      className='py-4 md:px-4 md:py-12'>
      <motion.h2 variants={items} className="text-xl sm:text-2xl md:text-4xl text-title title">이아스냅 보정 미리보기</motion.h2>
      <motion.p  variants={items}
        initial="hidden"
        animate="show" 
        className="text-sm sm:text-base pt-4 pb-2 leading-6 md:leading-7">
      이아스냅은 휴대폰 어플이 아닌 PC 포토샵, 라이트룸을 사용하여 더욱 세밀하고 자연스럽게 보정합니다.<br/>
      색감은 기본적으로 <span className="underline underline-offset-[5px] decoration-2 decoration-[#b06f6f61]">밝고 화사한 화이트톤, 생기 있는 피치톤</span>을 지향하고 있습니다.
      </motion.p>

      <div className="text-sm sm:text-base flex flex-col lg:flex-row w-full relative lg:pt-4">
        <div className="w-full lg:max-w-[180px] first">
          <motion.h3  variants={items}
            initial="hidden"
            animate="show" className="inline-block font-black lg:absolute lg:top-[190px] p-1 bg-title text-background mb-2 lg:mb-0">색감 보정</motion.h3>
          <motion.p  variants={items}
            initial="hidden"
            animate="show" className="lg:absolute lg:max-w-[150px] lg:top-[235px] leading-6 md:leading-7">원본 사진에서 크롭, 수직수평 맞추기, 색감 보정을 진행합니다.</motion.p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <BeforeAfterSlider imgSrc={imageSrc}/>
          <div className="w-full flex flex-col-reverse lg:flex-col lg:max-w-[180px] third">
            <motion.ul  variants={items}
              initial="hidden"
              animate="show" className="lg:flex-col inline-flex items-center gap-4 mb-4 lg:mb-0">
              <li id='1' onClick={(e)=>imageSrcHandler(e)} style={getBeforeStyle("1")}>
                <Image
                  width={80}
                  height={100}
                  className="w-[80px] h-[100px]"
                  priority
                  alt="첫 번째 보정 전 사진"
                  src={"/before1_censored.webp"}
                />
              </li>
              <li id='2' onClick={(e)=>imageSrcHandler(e)} style={getBeforeStyle("2")}>
                <Image
                  width={80}
                  height={100}
                  className="w-[80px] h-[100px]"
                  priority
                  alt="두 번째 보정 전 사진"
                  src={"/before2_censored.webp"}
                />
              </li>
            </motion.ul>
          
            <div className="w-full lg:max-w-[180px] mt-2 mb-4">
              <motion.h3  variants={items}
                initial="hidden"
                animate="show" className="inline-block font-black lg:absolute lg:bottom-[290px] p-1 bg-title text-background mb-2 lg:mb-0">디테일 인물 보정</motion.h3>
              <motion.p  variants={items}
                initial="hidden"
                animate="show" className="lg:absolute lg:max-w-[150px] lg:max-h-[190px] lg:bottom-[85px] leading-6 md:leading-7">
                색감 보정에서 인물 보정 및 디테일 보정을 추가하여 진행합니다.
                (피부톤, 바디라인, 헤어, 메이크업, 드레스&수트라인, 비율, 배경 제거, 간단한 합성 작업)
              </motion.p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>

  );
};

export default CompareSlider;