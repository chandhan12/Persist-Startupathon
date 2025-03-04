import React, { useState } from "react";
import { Link } from "react-scroll";

const CustomBtn2 = (props) => {
  const { path, logo, text } = props;
  const [rotateY, setRotateY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setRotateY(x < width / 2 ? -20 : 20);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setRotateY(0);
  };

  return (
    <div className="flex items-center justify-center animate-fade-up perspective-[1000px] animate-duration-[600ms] animate-delay-[50ms]">
      <Link to={path} duration={600} smooth={true}>
        <div
          className={`relative w-auto max-w-sm rounded-lg p-[1px] ease-in-out cursor-pointer transition-all duration-400`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateY(${rotateY}deg) translateY(-6px)`,
            background: hovered
              ? "conic-gradient(from var(--border-angle), black 80%, yellow 50%, yellow 90%, black 100%)"
              : "black",
            animation: hovered ? "border-rotate 2s linear infinite" : "none",
          }}
        >
          <div className="p-3 rounded-lg bg-purple-800 w-auto flex justify-center items-center cursor-pointer transition-all duration-300">
            <span className="text-white font-semibold text-md">{text}</span>
           
          </div>
        </div>
      </Link>

      <style>
        {`
          @property --border-angle {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
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

export default CustomBtn2;
