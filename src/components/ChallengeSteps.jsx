import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { FileText, Send, Users, MessageSquare, CheckCircle, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const steps = [
  {
    title: "Find a Challenge That Fits You",
    description: "Browse through challenges on our website and carefully browse through them and select the one that aligns with your skills and interests.",
    icon: FileText
  },
  {
    title: "Accept the Startupathon Challenge",
    description: "Once you've found a challenge, click on the \"Accept Startupathon Challenge\" button on the project page. This will take you to our dedicated Telegram bot, where you'll get all the details about the challenge",
    icon: Send
  },
  {
    title: "Join Our Telegram",
    description: "After joining the Telegram bot, you'll receive instructions and guidance for the challenge. This will be your main communication hub throughout the process.",
    icon: Users
  },
  {
    title: "Connect with the Project Lead",
    description: "Each challenge has a dedicated project leader. The bot will allow you to connect directly with them to ask any questions, clarify doubts, and share updates on your progress. It's your space to engage and collaborate.",
    icon: MessageSquare
  },
  {
    title: "Submit Your Work",
    description: "Once you've completed the challenge, submit your work directly via the Telegram bot. The project lead will review your submission, provide feedback, and suggest improvements to ensure your submission is on the right track.",
    icon: CheckCircle
  },
  {
    title: "Ace the Challenge and Become the Project Leader",
    description: "After the review, the candidate with the best and fastest submission will be offered the role as the project lead. Other participants will receive a Certificate of Participation as recognition for their efforts and skills.",
    icon: Trophy
  }
];

const ChallengeSteps = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex items-center gap-10 justify-center p-8">
      <div className="w-full max-w-7xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-2 rounded-full z-10 font-semibold">
          Step {activeIndex + 1} of {steps.length}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
          <button className="swiper-button-prev bg-violet-500 rounded-full p-2 text-white hover:bg-violet-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
          <button className="swiper-button-next bg-violet-500 rounded-full p-2 text-white hover:bg-violet-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
        <Swiper
          effect="coverflow"
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={1}
          initialSlide={1}
          loop={true}
          speed={800}
          followFinger={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
          }}
          modules={[Pagination, EffectCoverflow, Navigation]}
          className="mySwiper mt-12"
          spaceBetween={120} 
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1.8
            },
            1024: {
              slidesPerView: 2.2
            }
          }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`rounded-2xl p-6 h-[320px] border-2 border-violet-500 
                    flex flex-col items-center justify-between transition-all duration-300
                    bg-gradient-to-t from-[#1c1c1c] to-[#3c3c3c]
                    ${isActive ? "scale-102 shadow-xl" : "opacity-90 scale-100"}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 mb-6 text-violet-500">
                      {React.createElement(step.icon, { size: 64 })}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white text-center">
                      {step.title}
                    </h3>
                    <p className="text-center text-md text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Scoped Styles */}
      <style jsx>{`
        .swiper {
          padding: 50px 0;
        }

        .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #4c1d95;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #8b5cf6;
        }

        .swiper-button-prev,
        .swiper-button-next {
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ChallengeSteps;
