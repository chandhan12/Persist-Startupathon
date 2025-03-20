import { motion } from "framer-motion";

const VideoCarousel = () => {
  const video = "https://www.youtube.com/embed/pn_HoowYNTQ?si=HslG5hI4xqWCwtw_";

  return (
    <div className="flex my-25 justify-center mt-[128px">
      <div className="relative w-[1400px] h-[400px] p-2 gap-[63px]  text-white flex items-center justify-center overflow-hidden">
        {/* Left Side - Text (Increased Width) */}
        <div className="w-[563px] h-[383px]  flex items-center justify-center p-4">
          <div className="p-2 w-[563px] h-[299] ">
            <h2
            style={{fontFamily:"Bricolage Grotesque"}}
            className="text-white text-[44px] font-[700] leading-[125%]    mx-1 md:m-2">
              Work Smart, Win Big: Pro
              Tips from Swapnil 
              Sharma, CTO of Ovadrive <br />
              <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
                (A Startupathon <br /> Success)
              </span>
              <br />
            </h2>
          </div>
        </div>

        {/* Right - Main Video */}
        <div className="w-[664px] h-[383px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] p-[2px] rounded-[10px]">
        <div className="h-full w-full ">
        <iframe
          className="w-full h-full rounded-[10px] shadow-lg"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
        </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;






