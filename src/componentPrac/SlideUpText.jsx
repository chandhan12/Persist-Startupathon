import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SlideUpText = ({ text, delayStart = 0, onComplete, newColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center text-[48px] font-[700]">
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: delayStart + (wordIndex * 0.5) + (index * 0.03), // Stagger effect for each letter
                ease: "easeOut",
              }}
              className={`inline-block will-change-transform ${
                newColor === "purple" || word === "Success"
                  ? "bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text"
                  : "text-[#F1F1F1]"
              }`}
              onAnimationComplete={
                wordIndex === text.split(" ").length - 1 && index === word.length - 1
                  ? onComplete
                  : undefined
              } // Call onComplete after the last letter animates
            >
              {letter}
            </motion.span>
          ))}
          &nbsp; {/* Preserve spaces */}
        </span>
      ))}
    </div>
  );
};

const SlideUpTextWrapper = () => {
  const [isFirstDone, setIsFirstDone] = useState(false);

  return (
    <div className="p-2 text-center">
      <SlideUpText
        text="Startupathon Success Comes With"
        newColor="white"
        onComplete={() => setIsFirstDone(true)}
      />
      {isFirstDone && (
        <SlideUpText
          text="Extraordinary Rewards"
          newColor="purple"
          delayStart={0}
        />
      )}
    </div>
  );
};

export default SlideUpTextWrapper;
