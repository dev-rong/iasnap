import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className='w-full h-[200px] md:max-w-5xl flex items-center justify-between px-4 xl:px-0'>
      <Link href="/">
        <Image
          src={"/logo-footer.png"} 
          alt="이아스냅 로고"
          width={200}
          height={200}
          className="cursor-pointer w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
        />
        <span className="sr-only">홈으로 가기</span>
      </Link>
      <div className="flex flex-col gap-3">
        <div className="flex gap-6 justify-end">
          <a
            href="https://www.instagram.com/_ia_snap/"
            target="_blank" rel="noopener noreferrer"
            title="이아스냅 인스타그램 계정"
          >
            <Image
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]"
              width={24}
              height={24}
              style={{maxWidth:"36px", maxHeight:"36px"}}
              priority
              alt="인스타그램 아이콘"
              src={"/instagram-icon.png"}
            />
          </a>
          <a
            href="https://m.blog.naver.com/PostList.naver?blogId=ia_studio"
            target="_blank" rel="noopener noreferrer"
            title="이아스냅 네이버 블로그"
          >
            <Image
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]"
              width={24}
              height={24}
              style={{maxWidth:"36px", maxHeight:"36px"}}
              priority
              alt="네이버 블로그 아이콘"
              src={"/naver-blog-icon.png"}
            />
          </a>
          <a
            href="https://pf.kakao.com/_xkmbzxj"
            target="_blank" rel="noopener noreferrer"
            title="이아스냅 카카오톡 채널"
          >
            <Image
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]"
              width={24}
              height={24}
              style={{maxWidth:"36px", maxHeight:"36px"}}
              priority
              alt="카카오 채널 아이콘"
              src={"/kakao-icon.png"}
            />
          </a>
        </div>
        <p className="text-sm md:text-base font-sans text-brown text-right">© {year}. 이아스냅 <br></br> ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};
export default Footer;