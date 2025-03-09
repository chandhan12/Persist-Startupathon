import { useState } from "react";
import { motion } from "framer-motion";

const VideoCarousel = () => {
  const videos = [
    "https://www.youtube.com/embed/NxLdl4ijrN0?si=AztvLfiYvVqOc0zN", // Main video
    "https://www.youtube.com/embed/qaeHKoq_CLM?si=IGgv9PdJXvc2kozV"  // Swappable video
  ];

  const [activeVideos, setActiveVideos] = useState(videos);
  const [isSwapped, setIsSwapped] = useState(false); // Track swapped state

  const swapVideos = () => {
    setActiveVideos(([first, second]) => [second, first]);
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="flex">
    <div className="relative w-[1400px] h-[400px] p-2  text-white flex items-center overflow-hidden">
      {/* Left Side - Text (Increased Width) */}
      <div className="w-[725px] h-[383px] flex items-center justify-center p-4">
        <div>
          <h2 className="text-2xl font-bold">Work Smart, Win Big</h2>
          <p className="mt-2 text-lg">Pro Tips from Swapnil Sharma, CTO of Ovadrive</p>
          <p className="mt-1 text-purple-400">(A Startupathon Success)</p>
        </div>
      </div>

      {/* Middle - Main Video (Increased Width) */}
      <motion.div
        className="absolute left-[48%] w-[725px] h-[383px] flex items-center justify-center border border-purple-600 rounded-xl"
        key={activeVideos[0]}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        layout
      >
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src={activeVideos[0]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Right - Clickable Swappable Video (Ensuring Persistent Opacity) */}
     
    </div>
     <motion.div
     className={`absolute right-0 w-[5%] h-[52%] flex items-center border border-purple-600 rounded-xl transition-opacity duration-300 ${
       isSwapped ? "opacity-60" : "opacity-20"
     } hover:opacity-60`}
     key={activeVideos[1]}
     initial={{ x: 50, scale: 0.9 }}
     animate={{ x: 0, scale: 1 }}
     exit={{ x: 50, scale: 0.9 }}
     transition={{ duration: 0.8 }}
     layout
   >
     <div className="w-full h-full overflow-hidden relative">
       <iframe
         className="w-full h-full rounded-lg shadow-md"
         src={activeVideos[1]}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
       ></iframe>
       {/* Clickable Overlay */}
       <div
         className="absolute inset-0 bg-transparent cursor-pointer"
         onClick={swapVideos}
       ></div>
     </div>
   </motion.div>
   </div>
  );
};

export default VideoCarousel;
