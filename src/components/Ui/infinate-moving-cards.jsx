"use client";

import React, { useEffect, useRef, useState } from "react";

const InfiniteMovingCards = ({ items, speed = "fast", pauseOnHover = false }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setAnimationSpeed();
      setStart(true);
    }
  }, []);

  const setAnimationSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div ref={containerRef} className="relative max-w-7xl overflow-hidden">
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-gray-700 px-8 py-6 md:w-[450px] bg-gradient-to-b from-gray-800 to-gray-900"
          >
            <blockquote>
              <p className="text-sm text-gray-100">{item.quote}</p>
              <div className="mt-4 text-gray-400">
                <span className="block text-sm font-semibold">{item.name}</span>
                <span className="block text-xs">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;