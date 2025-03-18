import React from "react";
import { motion } from "framer-motion";

const HiringProcessSection = () => {
  return (
   <div className="flex justify-center">
    <div className="w-[1400px] h-[400px] flex justify-center gap-[63px] ">
    <div className="w-[664px] h-[383px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] p-[2px] rounded-[10px]">
        <div className="h-full w-full ">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=a859384c-c000-4971-99c6-6e66db5662ab"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        </div>
        </div>

        <div className="w-[563px] h-[383px]  flex items-center justify-center p-4">
          <div className="p-2 w-[563px] h-[299] ">
            <h2
            style={{fontFamily:"Bricolage Grotesque"}}
            className="text-white text-[48px] font-[700] leading-[125%]    mx-1 md:m-2">
              Our Hiring Process: Shared Through Candidate Stories <br />
              <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
                Real Experiences, Real Journeys
              </span>
              <br />
            </h2>
          </div>
        </div>

</div>
   </div>
  );
};

export default HiringProcessSection;