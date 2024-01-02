"use client";
import React from "react";
import { Theme } from "../../types/types";
interface ThemesProps {
  themesClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Themes:React.FC<ThemesProps> = ({themesClickHandler}) => {
  const themes: Theme[] = [
    {id:1, ceremony:"리허설", name:"스튜디오 스냅"}, 
    {id:2, ceremony:"리허설", name:"가봉 스냅"}, 
    {id:3, ceremony:"본식", name:"밝은 홀"}, 
    {id:4, ceremony:"본식", name:"어두운 홀"}
  ];
  return (
    <ul className='h-16 md:h-24 w-full max-w-5xl text-sm md:text-base flex items-center gap-[1.5rem] md:gap-6 overflow-x-scroll min-[912px]:overflow-x-auto whitespace-nowrap'>
      <li className='p-[0.3rem] md:p-2 cursor-pointer rounded-lg bg-primary'>
        <button name='themes' value={"전체"} onClick={(e)=>themesClickHandler(e)}>전체</button>
      </li>
      {themes.map((theme) => (
        <li key={theme.id} className={`${theme.ceremony==="본식"? "bg-pink" : "bg-beige"} p-[0.3rem] md:p-2 cursor-pointer rounded-lg`}>         
          <button name='themes' value={theme.name} onClick={(e) => themesClickHandler(e)}>{theme.name}</button>
        </li>
      ))}
    </ul>

  );
};

export default Themes;