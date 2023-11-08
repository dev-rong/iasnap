import { cache } from "react";
import supabase from "@/app/supabase";
import {ImageInterface} from "../../types/types";
export const revalidate = 0;

const getImages = cache(async (): Promise<(ImageInterface[] | { error: string })> => {
  try {
    const query = supabase.from("images").select("*").order("order");
    // const query = supabase.from("images").select("*").range(0,1); //TODO
    const { data, error } = await query;
    if (error) {
      console.error(`Error fetching data: ${error.message}`);
      return {
        error: `${error.message} "에러가 발생했습니다.\n
        다음을 시도해 주십시오.\n
        1. 페이지 새로고침\n
        2. dev.ronggg@gmail.com으로 문의하기`
      };
    }
    if (data) {
      return data as ImageInterface[] | [];
    }
    return [];
  } catch (error: unknown) {
    console.error(`Error fetching data: ${(error as Error).message}`);
    return {
      error: `${(error as Error)?.message} 에러가 발생했습니다.\n 
      다음을 시도해 주십시오.\n
      1. 페이지 새로고침\n
      2. dev.ronggg@gmail.com으로 문의하기`
    };
  } 
});

export default getImages;