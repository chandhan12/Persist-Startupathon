import React, { useState, useEffect } from "react";
import { Play, Home, ArrowUp, Star } from "lucide-react";

const iconPositions = [
  { icon: Play, sectionIndex: 0 },
  { icon: Star, sectionIndex: 1 },
  { icon: Home, sectionIndex: 2 },
  { icon: ArrowUp, sectionIndex: 3 },
];

const ScrollTracker = ({ parentRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parentRef.current) return;

      const scrollTop = window.scrollY;
      const sectionTop = parentRef.current.offsetTop;
      const sectionHeight = parentRef.current.clientHeight;
      const scrollHeight = sectionHeight - window.innerHeight;

      if (scrollTop < sectionTop || scrollTop > sectionTop + sectionHeight) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(Math.min((scrollTop - sectionTop) / scrollHeight, 1));

      const sections = parentRef.current.querySelectorAll("section");
      let activeIndex = null;
      const scrollPosition = scrollTop + window.innerHeight / 4;

      sections.forEach((section, index) => {
        if (
          section.offsetTop + sectionTop <= scrollPosition &&
          section.offsetTop + sectionTop + section.offsetHeight > scrollPosition
        ) {
          activeIndex = index;
        }
      });

      setActiveSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parentRef]);

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700 flex flex-col items-center">
      {iconPositions.map((item, index) => {
        const relatedSection = parentRef.current
          ? parentRef.current.querySelectorAll("section")[item.sectionIndex]
          : null;
        const sectionOffset = relatedSection
          ? relatedSection.offsetTop + relatedSection.offsetHeight / 2 - 24
          : 0;

        return (
          <div
            key={index}
            className={`absolute w-12 h-12 flex items-center justify-center rounded-full translate-x-6 transition-all duration-300 z-10 shadow-lg ${
              activeSection === item.sectionIndex ? "bg-purple-600" : "bg-gray-800"
            }`}
            style={{
              top: `${sectionOffset}px`,
              transform: "translateX(-50%)",
              marginTop: "-24px",
            }}
          >
            <item.icon className="text-white" size={20} />
          </div>
        );
      })}
      <div
        className="absolute w-0.5 bg-white transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      ></div>
    </div>
  );
};

export default ScrollTracker;
