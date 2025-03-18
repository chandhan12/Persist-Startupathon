import { useState } from "react";
import { motion } from "framer-motion";

const VideoCarousel = () => {
  const videos = [
     // Main video
    "https://www.youtube.com/embed/pn_HoowYNTQ?si=HslG5hI4xqWCwtw_" ,
    "https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=a859384c-c000-4971-99c6-6e66db5662ab" // Swappable video
  ];

  const [activeVideos, setActiveVideos] = useState(videos);
  const [isSwapped, setIsSwapped] = useState(false); // Track swapped state

  const swapVideos = () => {
    setActiveVideos(([first, second]) => [second, first]);
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="flex my-25">
    <div className="relative w-[1400px] h-[400px] p-2  text-white flex items-center overflow-hidden">
      {/* Left Side - Text (Increased Width) */}
      <div className="w-[725px] h-[383px] flex items-center justify-center p-4">
        <div className="p-2">
        <h2 className="text-white text-2xl md:text-[40px] font-sans font-semibold mx-1 md:m-2">
      Work Smart, Win Big: Pro <br />
      Tips from Swapnil <br />
      Sharma, CTO of Ovadrive <br />{" "}
      <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
        (A Startupathon <br/>
        Success)
      </span>{" "}
     
      <br />
    </h2>
  
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
    <div className="flex items-center">
     <motion.div
     className={`absolute right-0 w-[5%] h-[50%] flex items-center border border-purple-600 rounded-xl transition-opacity duration-300 ${
       isSwapped ? "opacity-60" : "opacity-40"
     } hover:opacity-60`}
     key={activeVideos[1]}
     initial={{ x: 50, scale: 0.9 }}
     animate={{ x: 0, scale: 1 }}
     exit={{ x: 50, scale: 0.9 }}
     transition={{ duration: 0.8 }}
     layout
   >
     <div className="w-full h-full  overflow-hidden relative">
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
   </div>
  );
};

export default VideoCarousel;
