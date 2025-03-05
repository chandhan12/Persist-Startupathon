import React from "react";
import { motion } from "framer-motion";
import CustomBtn2 from "./CustomBtn2";

const ConicDiv = () => {
  return (
    <motion.div
      className="flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div
        className="p-8 text-white font-bold text-xl rounded-lg shadow-lg h-auto w-3/4 cursor-pointer transition-all duration-500 relative"
        style={{
          minHeight: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "conic-gradient(from var(--wave-angle), rgba(138, 43, 226, 0.3) 20%, rgba(255, 255, 255, 0.3) 40%, rgba(138, 43, 226, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%)",
          animation: "wave-motion 4s infinite linear",
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold">
            Got an idea of your own?
          </h1>
          <h2 className="text-slate-200 text-lg mt-4 font-semibold">
            We are always on the lookout for visionaries with great startup
            ideas, ready to become successful founders. If that’s you, apply
            below for our Fellowship program.
          </h2>

          <div className="mt-6">
            <CustomBtn2 text="Apply For Fellowship" path="challenge" />
          </div>
        </div>
      </div>

      <style>
        {`
          @property --wave-angle {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
          }

          @keyframes wave-motion {
            0% {
              --wave-angle: 0deg;
            }
            50% {
              --wave-angle: 180deg;
            }
            100% {
              --wave-angle: 360deg;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default ConicDiv;
