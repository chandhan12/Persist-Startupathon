import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollTracker from "./ui(old)/ScrollTracker";

function TimeLine() {
  const timeLineRef = useRef(null);

  return (

    <>

     <motion.div
            className="flex flex-col justify-center items-center col-span-1 p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            >
         <h2 className='text-4xl text-white font-bold text-center m-4'>Found an idea that matches your Skills?</h2>
    <p className='text-lg text-center text-wrap text-slate-400'>Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.</p>
    </motion.div>
   
    <div ref={timeLineRef} className="relative min-h-[160vh]  text-white">
      <ScrollTracker parentRef={timeLineRef} />

     
      <motion.section
        className="min-h-[40vh] flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container mx-auto  grid grid-cols-2  gap-40 ">
          <motion.div
            className="flex flex-col col-span-1 justify-center items-center  p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
           
            <p className="text-4xl font-bold ml-25 text-slate-200 ">Dive into the challenge video</p>
          </motion.div>

          {/* <div className="relative flex flex-col items-center justify-center"></div> */}

          <motion.div
            className="flex flex-col col-span-1 justify-center items-center  p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
             <p className="text-2xl mb-6 text-purple-600">It all starts here!</p>
              <p className="text-lg mb-4">
                Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.
              </p>
              <div className=" p-4 rounded-lg">
                <p className="text-md">
                  <span className="text-yellow-400 font-bold">💡 Pro Tip:</span> Pay attention—it's more than just instructions. It's your roadmap to success!
                </p>
                </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="min-h-[40vh] flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container  grid grid-cols-2 gap-40">
          <motion.div
            className="flex flex-col col-span-1 justify-center items-center p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-4xl font-bold ml-25 text-slate-200 ">Build ,submit & shine</p>
          </motion.div>

   

          <motion.div
            className="flex flex-col col-span-1 justify-center items-center  p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-lg mb-4">
                
                Create a prototype that showcases your approach, then submit your work with a Loom video presentation
                 (no GitHub repo or complex code required). Your creative solution is what matters most.
              </p>
              <div className=" p-4 rounded-lg">
                <p className="text-md">
                  <span className="text-yellow-400 text-left mr-5 font-bold">💡Stay ahead:</span> Submit on time or early to show your dedication!
                </p>
                </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="min-h-[40vh] flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container grid grid-cols-2 gap-40">
          <motion.div
            className="flex flex-col justify-center col-span-1 items-center  p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
             <p className="text-4xl font-bold ml-25 text-slate-200 ">Get Feedback,Level up!</p>
          </motion.div>

         
          <motion.div
            className="flex flex-col justify-center items-center col-span-1 p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-lg mb-4">
                
                Create a prototype that showcases your approach, then submit your work with a Loom video presentation
                 (no GitHub repo or complex code required). Your creative solution is what matters most.
              </p>
              <div className=" p-4 rounded-lg">
                <p className="text-md">
                  <span className="text-yellow-400 text-left mr-5 font-bold">💡Stay ahead:</span> Submit on time or early to show your dedication!
                </p>
                </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section
        className="min-h-[40vh] flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="container  grid grid-cols-2 gap-40">
          <motion.div
            className="flex flex-col justify-center items-center col-span-1 p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-4xl font-bold ml-25 text-slate-200 ">Claim Your Crown</p>
          </motion.div>

          

          <motion.div
            className="flex flex-col col-span-1  items-center  p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}

          >
            <p className="text-2xl font-semibold mb-2 text-purple-600">Ace the challenge to become the project leader.
            </p>
             <p className="text-lg mb-4">
          Lead the Project. Ace the challenge, and take charge as BOSS. 
          Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent!
        </p>
        
          </motion.div>
        </div>
      </motion.section>
    </div>
    </>
  );
}

export default TimeLine;
