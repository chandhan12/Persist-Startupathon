import WaterDropGrid from "./ui/WaterDropGrid";
import {motion} from 'framer-motion'

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen flex flex-col items-center  mt-12 text-white overflow-hidden">
            <div className="absolute inset-0  ">
                <WaterDropGrid />
            </div>
            
            <div className="flex justify-center relative mt-44 -translate-y-40 ">
            <img
                className="h-56 md:h-80 w-full md:w-4/5 grayscale opacity-80"
                src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png"
                alt=""
            />


            <div className="absolute inset-0 w-full md:w-4/5"></div>


            <div className="absolute h-14 bottom-0 w-full md:w-4/5 bg-[#0a0112] rounded-lg opacity-95 text-white text-center p-3"></div>
        </div>


            
                <div className="relative z-10 text-center flex flex-col items-center -translate-y-40 ">
                <motion.h2
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-bold text-5xl md:text-8xl bg-gradient-to-r from-purple-700 to-white bg-clip-text text-transparent animate-gradient"
              >
                Startupathon
              </motion.h2>


              <motion.h2
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} 
                className="text-2xl text-center md:text-3xl m-1 p-1 font-semibold"
              >
        Your Chance to Build, Lead, and Succeed as a Founder
      </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -80 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8, ease: "easeOut" }} 
                  className=""
                >
                  <p className="text-md mt-8 text-slate-200">Embrace the challenge, push your limits, and turn your ideas into reality <br />Because greatness begins outside your comfort zone!</p>
                </motion.div>
                
                
                
               
            </div>
            
        </div>
    );
};

export default HeroSection;
