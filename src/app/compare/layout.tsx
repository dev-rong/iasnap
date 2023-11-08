import { Metadata } from "next";
import CompareSlider from "./page";

export const generateMetadata = (): Metadata => {
  return {
    title: "이아스냅 보정 미리보기 | IA SNAP",
    description: "이아스냅의 보정 전후 사진을 슬라이더로 비교해보세요."
  };
};

export default CompareSlider;