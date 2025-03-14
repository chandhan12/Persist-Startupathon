import React from "react";
import parallelogram2 from "../assets/parallelogram2.png";
import Icosahedron from "../assets/Icosahedron.png";
import NeonCard3 from "./Ui/NeonCard3";
import NeonCard2 from "./Ui/NeonCard2";
import warmhole2 from '../assets/warmhole2.svg'

const FellowshipCard = () => {
  return (
    <div className="flex flex-col items-center relative my-15">
      {/* Top Image */}
      <img 
        src={Icosahedron} 
        alt="image" 
        className="w-[161px] h-[161px] absolute -top-3 z-20"
      />
      
      {/* Neon Card (Behind Parallelogram) */}
      <div className="absolute translate-y-40 right-5 bottom-0 z-0">
        <NeonCard3 />
        <NeonCard2/>
      </div>
      <div className="absolute -translate-y-20 rotate-[180deg] -left-30 bottom-0 z-[-1]">
        <NeonCard3 />
      </div>
      <div className="absolute  rotate-[180deg] -left-30 bottom-0 z-[-1]">
        <NeonCard2 />
      </div>

      {/* Parallelogram Card (Above Neon Card) */}
      <div 
        className="relative w-[1200px] h-[380px] flex flex-col rounded-xl items-center pt-24 overflow-hidden my-20 shadow-lg backdrop-brightness-150 z-10" 
        style={{ backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover" }}
      >
        <h2 className='text-4xl text-white font-semibold'>Got an Idea of Your Own? Let's</h2>
        <h2 className='text-4xl text-white font-semibold'>Make It Happen!</h2>
        <div className="w-[587px] h-[72px] m-3">
          <p className="text-neutral-200 text-md text-center">
            We are always on the lookout for visionary founders with groundbreaking startup ideas.
            If you're ready to turn your vision into reality, apply below for our Fellowship 
            program and take the first step towards success.
          </p>
        </div>
        <button className="bg-white mt-8 w-[223px] h-[42px] text-purple-600 rounded-xl font-semibold cursor-pointer">Apply for Fellowship 🚀</button>
      </div>
      <div className="absolute right-0 w-[400px] h-[400px] top-0">
        <img src={warmhole2} alt="warmhole" className="w-[580px] h-[485px]  " />
      </div>
    </div>
  );
};

export default FellowshipCard;
