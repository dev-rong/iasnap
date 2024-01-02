import FontFaceObserver from "fontfaceobserver";
import toast from "react-hot-toast";

interface FontObserverProps {
    fontName: string;
    loadTime: number;
    setIsFontLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToastProps {
    error: string;
    durationTime: number;
  }

export const observeFontLoad = ({ fontName, loadTime, setIsFontLoaded }: FontObserverProps) => {
  const font = new FontFaceObserver(fontName);
  font.load(null, loadTime).then(() => {
    setIsFontLoaded(true);
  });
};
  
export const showToast = ({error, durationTime}: ToastProps) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } flex h-auto items-center gap-2 p-[10px] rounded-md max-w-[270px] md:max-w-[400px]`}
        style={{ backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
      >
        <p className="text-sm md:text-base">{error}</p>
        <button
          aria-label="닫기"
          className="rounded-full w-[20px] h-[20px] p-4 flex justify-center items-center select-none"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => toast.dismiss(t.id)}
        >
            X
        </button>
      </div>
    ),
    {
      duration: durationTime,
    }
  );
};