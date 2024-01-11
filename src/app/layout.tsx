import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
import { Frank_Ruhl_Libre} from "next/font/google";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";
export const revalidate = 31536000;
const Footer = dynamic(() => import("@/components/Footer"), {ssr: false});
const frank = Frank_Ruhl_Libre({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-frank"
});

export const metadata: Metadata = {
  title: "이아스냅 | IA SNAP",
  description: "아름다운 순간을 기록하는 아이폰 스냅, 이아스냅",
  metadataBase: new URL("https://iasnap.vercel.app"),
  openGraph: {
    title: "이아스냅 | IA SNAP",
    description: "아름다운 순간을 기록하는 아이폰 스냅, 이아스냅",
    url: "https://iasnap.vercel.app",
    siteName: "이아스냅",
    images: "https://iasnap.vercel.app/opengraph-image.jpg",
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    title: "이아스냅 | IA SNAP",
    description: "아름다운 순간을 기록하는 아이폰 스냅, 이아스냅",
    images: "https://iasnap.vercel.app/twitter-image.jpg",
  } ,
  other: {
    name: "google-site-verification",
    content: "1ttWWHTrG_PEI8t58Cc4nOxNKQjxS-iprbfPb7xYEyI"
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <Suspense fallback={<Loading/>}>
        <body className={`${frank.variable} bg-background w-full md:max-w-5xl mx-auto`}>
          <Header/>
          <main className='flex flex-col px-2 min-h-screen'>{children}</main>
          <Footer/>
          <Analytics />
        </body> 
      </Suspense>
    </html>
  );
}
