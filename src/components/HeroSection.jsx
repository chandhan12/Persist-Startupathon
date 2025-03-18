import CustomButton from "./Ui/CustomButton";
import Thorus2 from "../assets/Thorus2.png";
import Helix from "../assets/Helix.png";
import { motion } from "framer-motion";
import NeonCard from "./Ui/NeonCard";
import fulldonut from '../assets/fulldonut.png'
import Wavebgnew from '../assets/Wavebgnew.png'
import bgnew from '../assets/bgnew.png'

const HeroSection = () => {

 const caption="Join a thriving community of innovators and leaders. Whether you're launching your startup or scaling your vision, Creatthion empowers you with tools, resources, and connections to turn ideas into reality."

const   captionArr=caption.split(" ")
  console.log(captionArr)
  return (
    <>
      {/* Floating Image at the Top */}
      <motion.div
       
        className="absolute w-[337px] h-[235px] top-[137px] left-[-172px] "
      >
        <img src={fulldonut} alt="Floating Top Element" className="h-[235px] w-[337px]  opacity-[50%]" />
      </motion.div>

      <div className="">
        <div
        
         
          className="absolute  top-[600px] left-[1235px] overflow-hidden"
        >
          <img src={Wavebgnew} className="w-[280px] h-[322px] opacity-[70%] " alt="Floating Bottom Element" />
        </div>
        </div>
        <div className="absolute top-28 right-7 ">
        <NeonCard />
        </div>
      <div className="flex relative justify-center flex-col items-center ">
  
    <div
        style={{
          backgroundImage: `url(${bgnew})`,
          backgroundColor:'#1d1d1d',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative w-[1350px] top-[178px] h-[600px] pb-12 md:pb-1 flex flex-col items-center pt-[64px] rounded-4xl border-2 border-[#906CFF] ">
      
          
       
          
         <h2
          style={{fontFamily: "Bricolage Grotesque"}}
          className="text-white text-[64px] font-[700] font-[Bricolage Grotesque] leading-[125%] mx-1 md:m-1">
            Your Chance to{" "}
            <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
              Build, Lead,
            </span>{" "}
            <br />
          </h2>
          <h2
          style={{fontFamily: "Bricolage Grotesque"}}
          className="text-white text-[64px] font-[700] font-[Bricolage Grotesque] leading-[125%]  m-1 md:m-1">
            and{" "}
            <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
              Succeed
            </span>{" "}
            as a Founder
          </h2>
          <div className="w-[860px] text-center m-2">
            {
              captionArr.map((item)=>{
                  return (
                    <span
                    style={{fontFamily: "Inter"}}
                    className="text-white hover:font-bold transition-all font-[500]  duration-300 ease-in-out  leading-[150%] text-[16px] hover:scale-105 cursor-default">
                        {item}{" "}
            </span>
                  )
              })
            }
          </div>
          <div className="m-2">
            <CustomButton text="Start your Journey" icon="🚀" height={'[56px]'} width={'[201px]'} path="challenge"  />
          </div>

         
         
        </div>
   

        {/**/}
        <div className=" shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_30px_rgba(139,92,246,0.2)] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-3xl p-[2px] h-[538px] w-[900px] translate-y-15  relative ">
         <div className="h-full w-full rounded-3xl bg-[#0A0A0A]">
           
        <iframe
          src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?sid=dbe496d7-733b-4b11-95df-748e10acf52f"
          frameBorder="0"
          allowFullScreen
          className="top-0 left-0 w-full h-full md:h-full rounded-3xl  "
        ></iframe>
         </div>
           </div>
       

       
        
       
      </div>
    </>
  );
};

export default HeroSection;
