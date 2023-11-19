"use-client";
import React from "react";

interface SelectProps {
  selectChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({selectChangeHandler}) => {
  const eventOptions = ["전체", "리허설", "본식"];
  return (
    <>
      <label htmlFor="ceremonies" className="sr-only">형식 선택</label>
      <select 
        id="ceremonies"
        name="ceremonies"
        className='p-2 mr-4 font-gmarketM'
        onChange={(e)=>selectChangeHandler(e)}>
        {eventOptions.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>   
    </>    
  );
};

export default Select;