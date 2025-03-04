import React, { useState } from "react";
import { Link } from "react-scroll";

const CustomBtn = (props) => {
    const {path,logo,text,deg} = props
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setRotateY(x < width / 2 ? -25 : 25); 
  };

  const handleMouseLeave = () => {
    setRotateY(0); 
  };

  return (
    <div className="flex items-center justify-center animate-fade-up perspective-[1000px] animate-duration-[600ms] animate-delay-[50ms] animate-ease-linear">
        <Link to={path}  duration={600} smooth={true} >
      <div
        className="w-auto max-w-sm rounded-lg p-[1px]  cursor-pointer transition-all duration-400"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateY(${rotateY}deg) translateY(-6px)`,
          background: "conic-gradient(from var(--border-angle), black 80%, yellow 50%, yellow 90%, black 100%)",
          animation: "border-rotate 3s linear infinite",
        }}
      >
        <div className="p-3 rounded-lg bg-purple-800 w-auto justify-center items-center cursor-pointer flex  ">
        <span className=" text-white font-semibold text-md ">{text}</span>
        <img className="h-6 w-6 m-2" src={logo} alt="" />    
            </div> 
      </div>
      </Link>

      <style>
        {`
          @property --border-angle {
            syntax: "<angle>";
            inherits: false;
            initial-value: 10deg;
          }

          @keyframes border-rotate {
            to {
              --border-angle: 360deg;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomBtn;
