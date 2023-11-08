"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Partners = () => {
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


  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      animate="show"
      className="py-4 md:px-4 md:py-12 relative">
      <motion.div variants={items} className="flex gap-4 items-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-title font-black">이아스냅 제휴업체</h2>
        <h3 className="text-lg md:text-4xl font-black text-background bg-title p-1">5% 할인</h3>
      </motion.div>
        
      <motion.div variants={items} className="mt-3 mb-5">
        <a
          className="block mb-4"
          href="https://www.instagram.com/rose_cake_house_official/"
          target="_blank" rel="noopener noreferrer"
          title="로즈의 케이크 하우스 인스타그램 계정 링크"
        >
          <Image
            width={36}
            height={36}
            style={{minWidth:"24px", minHeight:"24px", maxWidth:"36px", maxHeight:"36px"}}
            className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] inline-block mr-3"
            alt="인스타그램 아이콘"
            src={"/instagram-icon.png"}
          />
          <p className="text-sm sm:text-base md:text-xl inline-block underline decoration-[5px] decoration-[#d7ac9a91]">@rose_cake_house_official</p>
        </a>

        <a
          className="block"
          href="https://m.blog.naver.com/PostList.naver?blogId=rosecakehouse"
          target="_blank" rel="noopener noreferrer"
          title="로즈의 케이크 하우스 네이버 블로그 링크"
        >
          <Image
            width={36}
            height={36}
            style={{minWidth:"24px", minHeight:"24px", maxWidth:"36px", maxHeight:"36px"}}
            className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] inline-block mr-3"
            alt="네이버 블로그 아이콘"
            src={"/naver-blog-icon.png"}
          />
          <p className="text-sm sm:text-base md:text-xl inline-block underline decoration-[5px] decoration-[#d7ac9a91]">@rosecakehouse</p>
        </a>
      </motion.div>

      <motion.div variants={items} className="max-lg:w-full max-lg:mx-auto max-lg:max-w-[600px] max-lg:min-h-full lg:block">
        <div className="relative lg:max-w-[530px]">
          <Image
            width={600}
            height={800}
            style={{height:"auto"}}
            className="w-full h-full lg:w-[530px]"
            priority
            alt="로즈의 케이크 하우스 프로모션 이미지"
            src={"/rose-main.svg"}
          />
          <span className="sr-only">이아스냅의 제휴 업체 로즈의 케이크 하우스에서는 답례품, 상견례 선물, 첫 인사 선물, 명절 선물, 기념일 케이크를 주문받습니다.
                            5% 할인은 최초 1회 주문 시에만 적용되며 2주 전까지 예약해주셔야 합니다.
          </span>
        </div>
      </motion.div>
               
      <motion.div variants={items} className="absolute right-0 top-[20px] hidden lg:block">
        <div className="cake relative">
          <Image
            width={450}
            height={450}
            style={{padding:"1.5rem", aspectRatio:"1/1"}}
            priority
            alt="로즈의 케이크 하우스 예시 케이크"
            src={"/rose-cake.png"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="450"
            viewBox="0 0 450 450"
            className="absolute left-0 top-0 w-full"
          >
            <defs>
              <path id="circlePath" d="M 225, 225 m -225, 0 a 225,225 0 0,0 450,0 a 225,225 0 0,0 -450,0" />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use href="#circlePath" fill="none" />
              <text aria-hidden="true" fill="#D7AC9A" className="text-base font-bold">
                <textPath href="#circlePath">
                IA SNAP  X  Rose&apos;s Cake House X IA SNAP  
                X  Rose&apos;s Cake House X IA SNAP  
                X  Rose&apos;s Cake House X IA SNAP  
                X  Rose&apos;s Cake House X IA SNAP 
                X  Rose&apos;s Cake House X</textPath>
              </text>
            </g>
          </svg>
        </div>
           
      </motion.div>
      <motion.div variants={items} className="absolute right-[30px] top-[510px] hidden lg:block">
        <Image
          width={400}
          height={450}
          style={{width:"400px", height:"450px"}}
          priority
          alt="로즈의 케이크 하우스 예시 상품"
          src={"/rose-gift.png"}
        />
      </motion.div>
         
         
    </motion.div>
  );
};
export default Partners;