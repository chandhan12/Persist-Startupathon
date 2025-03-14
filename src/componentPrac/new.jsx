import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
// import image5 from "../assets/image5.png"; // Add an image for Placement step

const steps = [
  { id: 1, title: "Evaluation", text: "We begin by getting to know your goals and the kind of people you will need to make them a reality.", svg: image1 },
  { id: 2, title: "Candidate Search", text: "We conduct a comprehensive search and only choose individuals who share your objectives.", svg: image2 },
  { id: 3, title: "Screening", text: "Every candidate undergoes a detailed screening process. We prioritize quality above quantity.", svg: image3 },
  { id: 4, title: "Interview", text: "We handle interviews to ensure the candidates we present are not just skilled, but also the right fit for your team.", svg: image4 },
  { id: 5, title: "Placement", text: "Only the best make it through. We place candidates who are ready to contribute and grow with your business.", svg: "hey" },
];

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

  return (
    <div className="flex gap-12 mt-12 relative w-full md:flex">
      {/* Left: SVG Display Section */}
      <div className="relative w-1/2">
        <div className="sticky top-32 flex gap-2">
          <div className="flex items-center justify-center border-2 border-red-300 rounded-3xl w-full h-[600px]">
            <motion.img
              key={steps[activeStep - 1].svg.toString()} // Fix key issue
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={steps[activeStep - 1].svg}
              alt={steps[activeStep - 1].title}
              className="object-contain h-full w-[500px]"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="h-[150px] flex flex-col justify-between">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="w-2 rounded-full"
                initial={{ backgroundColor: "rgb(228, 226, 223)" }}
                animate={{
                  backgroundColor: activeStep === step.id ? "rgb(226, 156, 158)" : "rgb(228, 226, 223)",
                  height: activeStep === step.id ? "25%" : "8px",
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Steps */}
      <div className="w-1/2 flex-1 py-16 space-y-44">
        {steps.map((step) => {
          const ref = useInView({ triggerOnce: false, threshold: 0.5 });

          return (
            <motion.div
              key={step.id}
              ref={ref.ref}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={ref.inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => {
                setTimeout(() => {
                  setActiveStep(step.id);
                }, 300);
              }}
              className={`space-y-4 step-item ${activeStep === step.id ? "text-white/100 scale-105 transition-all duration-500 ease-in-out " : "text-white/20 scale-95 transition-all duration-500 ease-in-out"}`}
            >
              <div
                className={`border-2 w-fit text-sm font-bold rounded-3xl px-3 py-2 ${
                  activeStep === step.id
                    ? "text-red-900 bg-red-100 border-red-50"
                    : "text-black/10 bg-white border-black/10"
                }`}
              >
                {step.id.toString().padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-lg">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
