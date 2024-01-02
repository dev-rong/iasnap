interface ScrollToTopProps {
    isVisible: boolean;
}
const ScrollToTop = ({isVisible}: ScrollToTopProps) => {
   
  const scrollToTop = () => {
    isVisible && window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <button
      aria-label="최상단으로 가기"
      className={`fixed z-[9999] bottom-4 right-4 md:right-8 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="rgba(215,172,154,1)" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;