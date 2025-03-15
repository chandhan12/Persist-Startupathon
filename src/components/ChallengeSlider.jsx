import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: "/w1.svg",
    title: "Find a Challenge That Fits You",
    description:
      "Browse through challenges on our website and select the one that aligns with your skills and interests.",
  },
  {
    img: "/w2.svg",
    title: "Accept the Startupathon Challenge",
    description:
      "Click on 'Accept Startupathon Challenge' to get details via our Telegram bot.",
  },
  {
    img: "/w3.svg",
    title: "Join Our Telegram",
    description:
      "After joining the bot, you'll receive instructions and guidance for the challenge.",
  },
  {
    img: "/w4.svg",
    title: "Connect with the Project Lead",
    description:
      "Each challenge has a dedicated project leader for guidance and collaboration.",
  },
  {
    img: "/w5.svg",
    title: "Submit Your Work",
    description:
      "Submit your challenge via Telegram. The project lead will review your submission and give feedback.",
  },
  {
    img: "/w6.svg",
    title: "Ace the Challenge & Become the Project Leader",
    description:
      "Best and fastest submission wins the project lead role. Others receive a certificate of participation.",
  },
];

export default function ChallengeSlider() {
  return (
    <div className="w-full px-4">
      <h2 className="text-center text-white text-2xl font-semibold mb-6">
        Step 2 🚀
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true} // Infinite loop
        navigation
        pagination={{ clickable: true }}
        grabCursor={true} // Improves swipe experience
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-[442px] rounded-xl p-6 h-[320px] border border-violet-500 flex flex-col items-center justify-between transition-all duration-300 bg-gradient-to-t from-[#1c1c1c] to-[#3c3c3c] shadow-lg"
          >
            <img src={slide.img} alt={slide.title} className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold text-white text-center">
              {slide.title}
            </h3>
            <p className="text-sm text-gray-300 text-center">
              {slide.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
