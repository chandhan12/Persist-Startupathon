import React, { useEffect, useRef } from "react";
import CustomBtn from "./ui(old)/CustomBtn";
import { motion, useAnimation, useInView } from "framer-motion";

const LoomVid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" }); // Starts earlier
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 }); // Fade in from left
    } else {
      controls.start({ opacity: 0, x: -60 }); // Fade out to left (less delay)
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Loom Video */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -60 }} // Adjusted for faster entry
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }} // Faster transition
        className="w-full mx-2 mb-2 mt-0 h-84 md:h-96 md:w-4/7"
      >
        <iframe
          src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?sid=dbe496d7-733b-4b11-95df-748e10acf52f"
          frameBorder="0"
          allowFullScreen
          className="top-0 left-0 w-full h-84 md:h-96 rounded-lg border-purple-600 border animate-fade-up animate-duration-[400ms] animate-delay-[30ms] animate-ease-linear"
        ></iframe>
      </motion.div>

      {/* Buttons */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -60 }} // Faster appearance
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Minimal delay
        className="flex md:flex-row flex-col gap-10 mt-4"
      >
        <CustomBtn
          path="challenge"
          text="Ongoing Startupathon"
          logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png"
        />
        <CustomBtn
          path="guide"
          text="Startupathon Guide"
          logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png"
        />
        <CustomBtn
          path="completers"
          text="Past Startupathons"
          logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png"
        />
        <CustomBtn
          path="founders"
          text="Mentor Network"
          logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png"
        />
      </motion.div>
    </div>
  );
};

export default LoomVid;
