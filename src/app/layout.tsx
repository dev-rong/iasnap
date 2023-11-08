import "./globals.css";
import type { Metadata } from "next";
import { Frank_Ruhl_Libre} from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
export const revalidate = 0;

const frank = Frank_Ruhl_Libre({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-frank"
});

const gmarketSans = localFont({
  src: [
    {
      path: "./fonts/GmarketSansMedium.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GmarketSansBold.otf",
      weight: "900",
      style: "normal",
    },
  ]
});

export const metadata: Metadata = {
  title: "이아스냅 갤러리 | IA SNAP",
  description: "아름다운 순간을 기록하는 아이폰 스냅, 이토록 아름다운, 이아스냅",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <Suspense fallback={<Loading/>}>
        <body className={`${frank.variable} ${gmarketSans.className} bg-background w-full md:max-w-5xl mx-auto`}>
          <Header/>
          <main className='flex flex-col px-2 min-h-screen'>{children}</main>
          <Footer/>
        </body> 
      </Suspense>
    </html>
  );
}
