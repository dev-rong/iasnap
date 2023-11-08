"use client";
import {useState} from "react";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollDirection from "@/lib/useScrollDirection";
import Image from "next/image";
import { useMediaQuery } from "@/lib/useMediaQuery";

const links = [
  { href: "/", text: "Gallery"},
  { href: "/compare", text: "Before & After" },
  { href: "/partners", text: "Partners" }
];


const Header = () => {
  const path = usePathname();
  const [zoom, setZoom] = useState(true);
  const scrollDirection = useScrollDirection();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest < 1) {
      setZoom(true);
    } else {
      setZoom(false);
    }
  });

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <header className={`bg-background opacity-90 z-[9999] sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} 
              min-h-[48px] w-full md:max-w-5xl flex justify-between items-center pr-4 xl:pr-0 transition-all duration-500`}>
      <Link href="/">
        <motion.div
          variants={{
            top: {width: isDesktop? "96px" : "64px", height: isDesktop? "96px" : "64px"},
            down: {width: "48px", height: "48px"}
          }}
          animate={zoom? "top" : "down"}
          transition={{duration: 0.35, ease: "easeInOut"}}
          className={"relative flex items-center min-h-[48px]"}
        >
          <Image
            fill={true}
            sizes="(min-width: 768px) 64px"
            style={{
              objectFit:"contain"
            }}
            src={"/logo.png"}
            alt="이아스냅 로고"
            className='cursor-pointer'
          />
          <span className="sr-only">홈으로 가기</span>
        </motion.div>
      </Link>
      <nav className='w-full max-w-[15rem] md:max-w-[30rem] inline-flex items-center'>
        <ul className='w-full flex justify-between text-sm md:text-2xl text-title font-sans font-semibold'>
          {links.map(link => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`${link.href === path? "underline decoration-[title] decoration-2 underline-offset-8 font-black" : ""} ${link.href === "/"? "hidden md:inline":""} hover:underline hover:decoration-[title] hover:decoration-2 hover:underline-offset-8 hover:font-black`}
              >
                {link.text}
              </Link>
            </li>
          ))} 
        </ul>
      </nav>
    </header>
  );
};

export default Header;