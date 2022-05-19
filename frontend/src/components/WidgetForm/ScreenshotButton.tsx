import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import html2canvas from "html2canvas";
import Loading from "../Loading";

interface screeshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}
const ScreenshotButton = (Props: screeshotButtonProps) => {
  const [isScreenshot, setIsScreenshot] = useState(false);

  const handleScreenshot = async () => {
    setIsScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64img = canvas.toDataURL("image/png");

    Props.onScreenshotTook(base64img);

    setIsScreenshot(false);
  };

  if (Props.screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => Props.onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${Props.screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      className="p-2 bg-zinc-800 text-zinc-100 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      type="button"
      onClick={handleScreenshot}
    >
      {isScreenshot == true ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};

export default ScreenshotButton;
