import CustomButton from "./Ui/CustomButton";
import Thorus2 from "../assets/Thorus2.png";
import Helix from "../assets/Helix.png";
import { motion } from "framer-motion";
import NeonCard from "./Ui/NeonCard";

const HeroSection = () => {
  return (
    <>
      {/* Floating Image at the Top */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: [0, -15, 0],
          transition: {
            y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="absolute top-12 md:top-10 left-0"
      >
        <img src={Thorus2} alt="Floating Top Element" className="h-28 w-28 md:w-32 md:h-48" />
      </motion.div>

        <div className="absolute top-28 right-7 ">
        <NeonCard />
        </div>
      <div className="flex relative justify-center flex-col items-center mt-28  mx-1 md:mx-0">
        <div className="relative bg-[#362c32] h-auto w-auto md:w-[1400px] md:h-[550px] pb-12 md:pb-1 flex flex-col items-center pt-15 md:pt-28 rounded-4xl border border-purple-600">
      
          <div className="absolute top-0 w-full h-28 bg-gradient-to-b from-black/40 to-transparent rounded-t-4xl"></div>

         
          <h2 className="text-white text-3xl md:text-6xl font-sans font-semibold mx-1 md:m-2">
            Your Chance to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
              Build, Lead,
            </span>{" "}
            <br />
          </h2>
          <h2 className="text-white text-3xl md:text-6xl font-sans font-semibold m-1 md:m-2">
            and{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
              Succeed
            </span>{" "}
            as a Founder
          </h2>
          <div className="md:w-2/3 w-auto m-2">
            <p className="text-white text-center text-sm md:text-lg">
              Join a thriving community of innovators and leaders. Whether you're launching your startup or scaling
              your vision, Creatthion empowers you with tools, resources, and connections to turn ideas into reality.
            </p>
          </div>
          <div className="m-2">
            <CustomButton text="Start your Journey" icon="🚀" height={10} path="challenge" />
          </div>

         
        </div>
        <div className="bg-white rounded-3xl h-56 w-64 md:h-[450px] md:w-[900px] relative -translate-y-10 md:-translate-y-30">
          
        <iframe
          src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?sid=dbe496d7-733b-4b11-95df-748e10acf52f"
          frameBorder="0"
          allowFullScreen
          className="top-0 left-0 w-full h-full md:h-full rounded-3xl border-purple-600 border animate-fade-up animate-duration-[400ms] animate-delay-[30ms] animate-ease-linear"
        ></iframe>
           </div>
       

       
        <div className="">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
            transition: {
              y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              opacity: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="absolute top-52 right-0 md:right-1 -translate-y-1 md:translate-y-30"
        >
          <img src={Helix} className="md:h-80 h-48" alt="Floating Bottom Element" />
        </motion.div>
        </div>
       
      </div>
    </>
  );
};

export default HeroSection;
