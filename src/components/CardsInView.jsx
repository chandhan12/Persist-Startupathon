"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";

const steps = [
  {
    id: 1,
    title: "Build, Submit & Shine",
    text: "Create a prototype and submit it with a Loom video. No complex code, just your best ideas.",
    svg: image1,
  },
  {
    id: 2,
    title: "Dive into the Challenge Details Video",
    text: "Watch a video revealing your startup task. Get inspired, align with our vision, and start strong.",
    svg: image2,
  },
  {
    id: 3,
    title: "Get Feedback, Level Up!",
    text: "We review in three days. If you shine, you're in! If not, refine and submit again.",
    svg: image3,
  },
  {
    id: 4,
    title: "Claim Your Crown",
    text: "Win the challenge to lead the project with equity, ownership, and great rewards.",
    svg: image4,
  },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const [activatedSteps, setActivatedSteps] = useState(new Set([1])); // Ensure the first step is fully visible

  return (
    <div className="flex gap-[80px] mt-12 relative w-full md:flex">
      {/* Left: SVG Display Section */}
      <div className="relative w-1/2">
        <div className="sticky top-32 ml-[235px] flex gap-2">
          <div className="p-[1px] bg-gradient-to-b from-[#D1AFFF] rounded-3xl to-[#906CFF]">
            <div className="flex items-center justify-center bg-[#0A0A0A] rounded-3xl w-[484px] h-[484px]">
              <motion.img
                key={steps[activeStep - 1].svg.toString()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={steps[activeStep - 1].svg}
                alt={steps[activeStep - 1].title}
                className="object-contain h-[484px] w-[484px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Steps */}
      <div className="w-1/2 flex-1">
        {steps.map((step) => {
          const { ref, inView } = useInView({
            threshold: 0.7,
          });

          useEffect(() => {
            if (inView) {
              setActivatedSteps((prev) => new Set([...prev, step.id]));
              setActiveStep(step.id); // Update left-side image dynamically
            }
          }, [inView]);

          return (
            <motion.div
              key={step.id}
              ref={ref}
              initial={{ opacity: step.id === 1 ? 1 : 0.2 }} // Ensure first step is fully visible
              animate={{ opacity: activatedSteps.has(step.id) ? 1 : 0.2 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 step-item transition-all duration-100 h-[437px] w-[623px]"
            >
              <div className="h-[94px] w-[94px]">
                <p
                  className={`text-[74px] font-bold ${
                    activatedSteps.has(step.id)
                      ? "bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text"
                      : "text-white opacity-[50%]"
                  }`}
                >
                  {step.id.toString().padStart(2, "0")}
                </p>
              </div>
              <h3
               style={{fontFamily:"Bricolage Grotesque"}}
                className={`leading-[120%] font-[700] text-[40px] ${
                  activatedSteps.has(step.id) ? "text-white" : "text-white/20"
                }`}
              >
                {step.title}
              </h3>
              <div className="w-[623px] h-[140px]">
                <p 
                  style={{fontFamily:"Inter"}}
                  className={`text-[33px] font-[400] leading-[150%] ${
                    activatedSteps.has(step.id) ? "text-white" : "text-white/20 text-lg"
                  }`}
                >
                  {step.text}
                </p>
              </div>
              <p className="text-[16px] font-[500] text-[#4EB400] m-2">
                💡 Stay ahead: Submit on time or early to show your dedication!
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
