"use client";
import React, {useEffect, useState} from "react";
import { observeFontLoad, showToast } from "@/lib/utils";
import { ImageInterface } from "../../types/types";
import { Toaster } from "react-hot-toast";
import PlaceholderTop from "./PlaceholderTop";
import PlaceholderImage from "./PlaceholderImage";
import Search from "./Search";
import Select from "./Select";
import Images from "./Images";
import Themes from "./Themes";
import dynamic from "next/dynamic";
import ScrollToTop from "./ScrollToTop";
const NotFound = dynamic(() => import("./NotFound"), { ssr: false });
interface ImageProps {
  images: ImageInterface[] | [];
  error?: string;
}

const Gallery: React.FC<ImageProps> = ({images, error}) => {
  const [imageState, setImageState] = useState<ImageInterface[] | []>(images || []);
  const [searchKeywords, setSearchKeywords] = useState<string>("");
  const [trimmedKeywords, setTrimmedKeywords] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFontLoaded, setIsFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    observeFontLoad({fontName: "GmarketSansMedium", loadTime: 10000, setIsFontLoaded});
  }, []);

  useEffect(() => {
    if (error) {
      showToast({error, durationTime: 5000});
    }
  }, [error]);

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
          <Themes themesClickHandler={themesClickHandler}/>
        </div>
      </> : <PlaceholderTop/>}
      {isFontLoaded? (imageState.length > 0 && <Images data={imageState}/>): <PlaceholderImage/>}
      {trimmedKeywords.length > 0 && imageState.length === 0 && <NotFound/>}
      <ScrollToTop isVisible={isVisible} />
    </> 
  );
};

export default Gallery;