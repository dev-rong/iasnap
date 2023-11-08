import { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "이아스냅 | IA SNAP",
    short_name: "이아스냅",
    description: "아름다운 순간을 기록하는 아이폰 스냅, 이토록 아름다운, 이아스냅",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EB",
    theme_color: "#FAF6EB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}