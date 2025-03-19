import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import step1icon from '../assets/step1icon.svg'
import step2icon from '../assets/step2icon.svg'
import step3icon from '../assets/step3icon.svg'
import revwarmhole from '../assets/revwarmhole.svg'
import { FileText, Send, Users, MessageSquare, CheckCircle, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import NeonCard4 from "../components/Ui/NeonCard4";
import NeonCard5 from "../components/Ui/NeonCard5";

const steps = [
  {
    title: "Find a Challenge That Fits You",
    description: "Browse through challenges on our website and carefully browse through them and select the one that aligns with your skills and interests.",
    icon: step1icon
  },
  {
    title: "Accept the Startupathon Challenge",
    description: "Once you've found a challenge, click on the \"Accept Startupathon Challenge\" button on the project page. This will take you to our dedicated Telegram bot, where you'll get all the details about the challenge",
    icon: step2icon
  },
  {
    title: "Join Our Telegram",
    description: "After joining the Telegram bot, you'll receive instructions and guidance for the challenge. This will be your main communication hub throughout the process.",
    icon: step3icon
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

const HowToWin = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const swiperRef = useRef(null);
    // Create refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext();
        }
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex items-center gap-10 justify-center p-4 mt-20">
        <div className="w-full max-w-7xl relative">
            <div className="h-[350px] w-[418px] -top-[20px] -left-[240px] opacity-[50%] absolute">
                <img src={revwarmhole} alt="" className="h-[350px] w-[418px]" />
            </div>
            <div className="top-60 -left-[240px] opacity-[60%] absolute">
                <NeonCard5/>
            </div>
            <div className="top-0 right-0 opacity-[60%] translate-x-20 absolute">
                <NeonCard5/>
            </div>
            <div className="top-180 right-0 opacity-[60%] absolute">
                <NeonCard5/>
            </div>
           <div className="flex justify-center">
           <div className="w-[934px] h-[293px] flex flex-col gap-6 items-center">
                <div className="w-[816px] h-[125px]">
                <h2 style={{fontFamily:"Bricolage Grotesque"}}
                className="text-white  text-[48px] font-[700] leading-[125%] text-center">
                  How the Startupathon <span className="bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-transparent bg-clip-text">
                  Hiring Process
                    </span> Works
                </h2>
                </div>
               <div className="w-[770px] h-[56px]">
               <p style={{fontFamily:"Inter"}}
               className="text-[16px] text-[#EDEDED] text-center leading-[150%] font-[500]">
               At Startupathon, we make it easy for aspiring leaders to apply and get involved in challenges. Our hiring process helps you showcase your skills, build your potential, lead, and succeed as a founder.
               </p>
               </div>
               <div className="flex justify-center gap-[15px] items-center">
                <button ref={prevRef} className="bg-violet-50 w-[46px] h-[46px] text-center rounded-full p-2 text-black text-[50px]  transition-colors">
                  <ChevronLeft size={33} />
                </button>
                <div  style={{fontFamily:"Bricolage Grotesque"}}
                className=" w-[120px] h-auto font-[700] text-[40px]  flex gap-2 justify-center items-center rounded-full z-10 text-[#F2EFFB] ">
                  Step <p>{activeIndex + 1}</p>
                </div>
                <button ref={nextRef} className="bg-violet-50 w-[46px] h-[46px] text-center rounded-full p-2 text-black text-[50px]  transition-colors">
                  <ChevronRight size={33} />
                </button>
               </div>
            </div>
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
              prevEl: prevRef.current,
              nextEl: nextRef.current,
              
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
            onBeforeInit={(swiper) => {
              // Assign refs to Swiper navigation after component mounts
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiperRef.current=swiper
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                   
                    <div
                    className={`rounded-2xl p-6 h-[500px] w-[530px]   border border-[#906CFF]
                      flex flex-col items-center justify-between transition-all duration-300
                      bg-gradient-to-t from-[#1D1D1D] to-[#1C1C1C]
                      ${isActive ? "scale-102  " : "opacity-90 scale-100"}`}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-[155px] h-[164px] mb-2 text-violet-500">
                       <img src={step.icon} alt="icon" className="w-[155px] h-[164px] " />
                      </div>
                      <h3 style={{fontFamily:"Inter"}}
                      className="text-[32px] font-[500] leading-[150%]  m-5 text-white text-center">
                        {step.title}
                      </h3>
                      <p style={{fontFamily:"Inter"}}
                      className="text-center text-[16px] font-[350] leading-[150%] m-2 text-[#FFFFFF]">
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
        `}</style>
      </div>
    );
}

export default HowToWin;