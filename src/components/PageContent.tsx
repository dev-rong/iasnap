"use client";
import React, {useEffect, useState} from "react";
import { Theme, ImageInterface } from "../../types/types";
import Themes from "./Themes";
import Images from "./Images";
import Search from "./Search";
import Select from "./Select";
import NotFound from "./NotFound";
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
interface ImageProps {
  images?: ImageInterface[];
  error?: string;
}

const PageContent: React.FC<ImageProps> = ({images, error}) => {
  const [imageState, setImageState] = useState<ImageInterface[] | []>(images || []);
  const [searchKeywords, setSearchKeywords] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const themes: Theme[] = [
    {id:1, ceremony:"리허설", name:"스튜디오 스냅"}, 
    {id:2, ceremony:"리허설", name:"가봉 스냅"}, 
    {id:3, ceremony:"본식", name:"밝은 홀"}, 
    {id:4, ceremony:"본식", name:"어두운 홀"}
  ];

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
              className="rounded-full w-[20px] h-[20px] p-4 flex justify-center items-center select-none" 
              style={{backgroundColor: "red", color: "white"}}
              onClick={() => toast.dismiss(t.id)}>X</button>
          </div>
        ),
        {
          duration: 5000
        }
      );}
  },[error]);
  
  const searchInputHandler = (keywords:string) => {
    setSearchKeywords(keywords);
  };
  const searchSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const trimmedKeywords = searchKeywords.split(" ").join("");
    const filteredImages = images?.filter(({ region, subregion, venue }) => 
      region.trim().split(" ").join("").includes(trimmedKeywords) || 
        subregion.trim().split(" ").join("").includes(trimmedKeywords) ||
        venue.trim().split(" ").join("").includes(trimmedKeywords));
    if(filteredImages && filteredImages.length > 0) {
      setImageState(filteredImages);
    } else {
      setImageState([]);
    }
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

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
        
  const scrollToTop = () => {
    isVisible &&
              window.scrollTo({
                top: 0,
                behavior: "auto",
              });
  };
          
  return (
    <React.Fragment>
      <Toaster />
      <Search 
        searchKeywords={searchKeywords}
        searchInputHandler={searchInputHandler}
        searchSubmitHandler={searchSubmitHandler}
      />
      <div className={"z-10 w-full text-sm flex flex-row items-center"}>
        <Select selectChangeHandler={selectChangeHandler}/>
        <Themes data={themes} themesClickHandler={themesClickHandler}/>
      </div>
      {imageState.length > 0 ? <Images data={imageState}/> : <NotFound/>}
      <button
        className={`fixed z-[9999] bottom-4 right-4 md:right-8 rounded-full p-2 outline-none transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill className="w-[48px] h-[48px] text-brown"/>
      </button>
    </React.Fragment> 
  );
};

export default PageContent;