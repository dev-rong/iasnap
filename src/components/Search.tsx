"use-client";
import React from "react";
interface SearchProps {
  searchKeywords: string;
  searchInputHandler: (keywords:string) => void;
  searchSubmitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Search: React.FC<SearchProps> = ({searchKeywords, searchInputHandler, searchSubmitHandler}) => {
  return (
    <form 
      className="w-full justify-end mt-4">   
      <label htmlFor="default-search" 
        className="sr-only">검색
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input 
          type="search" 
          id="default-search" 
          className="block w-full p-[0.5rem] md:p-4 pl-[2rem] md:pl-10 pr-[3.5rem] md:pr-[5.5rem] text-sm text-gray-900 border border-gray-300 rounded-lg 
          focus:ring-blue-500 focus:border-blue-500" 
          placeholder="지역, 스튜디오, 예식장으로 검색" 
          value={searchKeywords}
          onChange={(e)=>searchInputHandler(e.target.value)}
          required
          aria-label="검색어 입력"
          role="searchbox"
        />
        <button
          type="submit" 
          className="text-white absolute right-[0.3rem] bottom-[0.3rem] md:right-2.5 md:bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-[0.3rem] md:px-4 md:py-2" 
          onClick={(e)=>searchSubmitHandler(e)}
          aria-label="검색 버튼"
        >
          검색
        </button>
      </div>
    </form>
  );
};
export default Search;