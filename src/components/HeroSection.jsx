import CustomButton from "./Ui/CustomButton";
import Thorus2 from "../assets/Thorus2.png";
import Helix from "../assets/Helix.png";
import { motion } from "framer-motion";
import NeonCard from "./Ui/NeonCard";
import fulldonut from '../assets/fulldonut.png'
import Wavebgnew from '../assets/Wavebgnew.png'

const HeroSection = () => {

 const caption="Join a thriving community of innovators and leaders. Whether you're launching your startup or scaling your vision, Creatthion empowers you with tools, resources, and connections to turn ideas into reality."

const   captionArr=caption.split(" ")
  console.log(captionArr)
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
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/febf/e326/9e9e4f2ff3a6ed33713ba56d8d4c9b69?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CmFclLJXdXXf0uTranZUlxaYlfFyp~No6HlMFKs8mIYsXgHKXKkHe5ptsr8TS-0toCJPcrhGMRadL4z~E3jNVrUOYR5k1r2QXHYN0-AHvo90ZHjdt8VO-w2LDuA6WGnRZ-wm96THC69ZGIAslWOmTh-jTvM-cYGaf67jvLQ1NcBKHy4p5-XkbjTIfG7bOhLrggWITi6p93ONb3W0nQuMseDDtX9WGTmTaUR-YDW83UrUI0Z4V7j6zEowcaHvxToe5fmVpWSiXdb3Q99cVO0ohSJFQCPfxhIIDfRIen1DoGTkDaqBMt6eB~2~qD5euspmWc5yq4ZVVM2ACczdvcGjMQ__')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '40px 40px',
        
          transformOrigin: 'center'
        }}
        
        className="relative   bg-[#362c32] bg-opacity-[10%]  w-[1350px] top-[178px] h-[600px] pb-12 md:pb-1 flex flex-col items-center pt-15 md:pt-28 rounded-4xl border border-purple-600">
      
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
          <div className="w-[860px] text-center m-2">
            {
              captionArr.map((item)=>{
                  return (
                    <span className="text-white hover:font-bold transition-all duration-300 ease-in-out text-center text-[18px] hover:scale-105 cursor-default">
                        {item}{" "}
            </span>
                  )
              })
            }
          </div>
          <div className="m-2">
            <CustomButton text="Start your Journey" icon="🚀" height={10} path="challenge" />
          </div>

         
        </div>

        {/**/}
        <div className="bg-white rounded-3xl h-[538px] w-[900px] translate-y-10  relative ">
          
        <iframe
          src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde?sid=dbe496d7-733b-4b11-95df-748e10acf52f"
          frameBorder="0"
          allowFullScreen
          className="top-0 left-0 w-full h-full md:h-full rounded-3xl border-purple-600 border animate-fade-up animate-duration-[400ms] animate-delay-[30ms] animate-ease-linear"
        ></iframe>
           </div>
       

       
        
       
      </div>
    </>
  );
};

export default HeroSection;
