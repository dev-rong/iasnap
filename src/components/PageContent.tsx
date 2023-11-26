"use client";
import React, {useEffect, useState} from "react";
import FontFaceObserver from "fontfaceobserver";
import { Theme, ImageInterface } from "../../types/types";
import toast, { Toaster } from "react-hot-toast";
import PlaceholderTop from "./PlaceholderTop";
import PlaceholderImage from "./PlaceholderImage";
import Search from "./Search";
import Select from "./Select";
import Images from "./Images";
import Themes from "./Themes";
import dynamic from "next/dynamic";
const NotFound = dynamic(() => import("./NotFound"), { ssr: false });
interface ImageProps {
  images?: ImageInterface[];
  error?: string;
}

const PageContent: React.FC<ImageProps> = ({images, error}) => {
  const [imageState, setImageState] = useState<ImageInterface[] | []>(images || []);
  const [searchKeywords, setSearchKeywords] = useState<string>("");
  const [trimmedKeywords, setTrimmedKeywords] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);
  const themes: Theme[] = [
    {id:1, ceremony:"리허설", name:"스튜디오 스냅"}, 
    {id:2, ceremony:"리허설", name:"가봉 스냅"}, 
    {id:3, ceremony:"본식", name:"밝은 홀"}, 
    {id:4, ceremony:"본식", name:"어두운 홀"}
  ];

  useEffect(() => {
    const font = new FontFaceObserver("GmarketSansMedium");
    font.load(null, 10000).then(function () {
      setIsFontLoaded(true);
    });
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => { 
    if(error){
      toast.custom(
        (t) => (
          <div 
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } flex h-auto items-center gap-2 p-[10px] rounded-md max-w-[270px] md:max-w-[400px]`}
            style={{backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}
          >
            <p className="text-sm md:text-base">{error}</p>
            <button
              aria-label="닫기" 
              className="rounded-full w-[20px] h-[20px] p-4 flex justify-center items-center select-none" 
              style={{backgroundColor: "red", color: "white"}}
              onClick={() => toast.dismiss(t.id)}>
              X
            </button>
          </div>
        ),
        {
          duration: 5000
        }
      );}
  },[error]);
  
  useEffect(() => {
    const filteredImages = images?.filter(({ region, subregion, venue }) => 
      region.trim().split(" ").join("").includes(trimmedKeywords) || 
      subregion.trim().split(" ").join("").includes(trimmedKeywords) ||
      venue.trim().split(" ").join("").includes(trimmedKeywords));
    if(filteredImages && filteredImages.length > 0) {
      setImageState(filteredImages);
    } else {
      setImageState([]);
    }
  }, [trimmedKeywords, images]);
  
  const searchInputHandler = (keywords:string) => {
    setSearchKeywords(keywords);
  };
  
  const searchSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTrimmedKeywords(searchKeywords.trim().split(" ").join(""));
  };
   
  const themesClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(e.currentTarget.value === "전체") {
      setImageState(images || []);
    }  
    else {
      const filteredImages = images?.filter(({ theme }) => theme === e.currentTarget.value);
      setImageState(filteredImages || []);
    }
  };
        
  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value === "전체") {
      setImageState(images || []);
    }  
    else {
      const filteredImages = images?.filter(({ ceremony }) => ceremony === e.target.value);
      setImageState(filteredImages || []);      
    }
  };
        
  const scrollToTop = () => {
    isVisible && window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
          
  return (
    <>
      <Toaster />
      {isFontLoaded? <>
        <Search
          searchKeywords={searchKeywords}
          searchInputHandler={searchInputHandler}
          searchSubmitHandler={searchSubmitHandler}
        />
        <div 
          className="z-10 w-full text-sm flex flex-row items-center"
        >
          <Select selectChangeHandler={selectChangeHandler}/>
          <Themes data={themes} themesClickHandler={themesClickHandler}/>
        </div>
      </> : <PlaceholderTop/>}
      {isFontLoaded? (imageState.length > 0 && <Images data={imageState}/>): <PlaceholderImage/>}
      {trimmedKeywords.length > 0 && imageState.length === 0 && <NotFound/>}
      <button
        aria-label="최상단으로 가기"
        className={`fixed z-[9999] bottom-4 right-4 md:right-8 rounded-full p-2 outline-none transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="rgba(215,172,154,1)" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>
      </button>
    </> 
  );
};

export default PageContent;