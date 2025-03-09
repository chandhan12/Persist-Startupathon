import React from "react";

const NeonCard = () => {
  return (
   
      <div className="relative p-8 -rotate-[30deg] h-44  rounded-xl   w-80 text-center  ">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0   rounded-xl bg-gradient-to-r bg-transparent  to-pink-500  opacity-15 blur-xl"></div>

      </div>
  )
};

export default NeonCard;
