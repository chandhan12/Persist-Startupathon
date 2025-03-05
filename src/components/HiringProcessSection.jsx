import React from "react";
import { motion } from "framer-motion";

const HiringProcessSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false }}
      id="howtowin"
      className="flex justify-center flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="flex flex-col items-center h-auto lg:w-3/4 w-auto lg:m-2 mx-10 p-2"
      >
        <h2 className="text-2xl text-center md:text-3xl m-1 p-1 font-semibold text-white">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
          Startupathon Success)
        </h2>
        <div className="border-purple-600 border-2 rounded-lg lg:w-3/4 w-full m-4 mx-10">
          <iframe
            className="h-110 w-full rounded-lg"
            src="https://www.youtube.com/embed/pn_HoowYNTQ?si=HslG5hI4xqWCwtw_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="flex flex-col items-center h-auto lg:w-3/4 w-auto lg:m-2 mx-10 p-2"
      >
        <h2 className="text-2xl text-center md:text-3xl m-1 p-1 font-semibold text-white">
          Work Smart, Win Big: Pro Tips from Swapnil Sharma, CTO of Ovadrive (A
          Startupathon Success)
        </h2>
        <div className="border-purple-600 border-2 rounded-lg lg:w-3/4 w-full m-4 mx-10">
          <iframe
            className="w-full h-84 md:h-110 rounded-lg border-purple-600 border"
            src="https://www.loom.com/embed/0847b9257f144fd0830a8536dfbc8e81?sid=a859384c-c000-4971-99c6-6e66db5662ab"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HiringProcessSection;