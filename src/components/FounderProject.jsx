import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { leftIcon } from "../icons";
import linkedIcon from "../assets/linkedIcon.png";

function FoundersProject() {
  const [founders, setFounders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFounders = async () => {
      try {
        setIsLoading(true);
        const response = await axios(
          "https://persiststartupathon-admin.onrender.com/api/admin/founders"
        );
        setFounders(response.data.founders.slice(0, 6)); // Take first 6 founders
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFounders();
  }, []);

  const handleNav = (id) => {
    navigate(`/founder/${id}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-2xl md:text-[48px] font-[700] font-[Bricolage Grotesque] mx-1 md:m-1"
      >
        <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text">
          Unlock Exclusive
        </span> Access to Our
      </motion.h2>

      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-2xl md:text-[48px] font-[700] font-[Bricolage Grotesque] m-1 md:m-1"
      >
        <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text">
          Elite Founder Network
        </span>
      </motion.h2>

      {/* Description Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="md:w-[934px] h-[56px] mt-3 mb-10"
      >
        <p className="text-white text-center text-[16px] font-[500] leading-[150%]">
          By getting accepted, you gain entry into Persist, connecting with 400+ millionaire and billionaire startup leaders. Network, learn, and grow with the best in the industry.
        </p>
      </motion.div>
      
      {/* View All Link */}
      <div className="flex justify-end w-3/4">
        <div className="text-white text-right m-4 flex gap-2 cursor-pointer">
          View all {leftIcon}
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full max-w-[1368px]"
        >
          {founders.map((founder) => (
            <SwiperSlide key={founder._id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-[12px] p-[2px] px-[2px] hover:shadow-[0_0_30px_rgba(167,139,250,0.7),0_0_60px_rgba(167,139,250,0.4)] transition-all duration-300  relative h-[370px] w-[321px]"
              >
                <div className="h-full w-full rounded-[12px] bg-[#312d3c] p-6 shadow-xl text-center">
                  <img
                    src={founder.profilePic}
                    alt={founder.name}
                    className="w-[150px] h-[150px] rounded-full object-cover mx-auto mb-4"
                  />
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center w-[257px] h-[28px] gap-[8px]">
                      <h2 className="text-[#FFFFFF] text-[20px] font-[700] leading-[140%] font-[Bricolage Grotesque]">
                        {founder.name}
                      </h2>
                      <img src={linkedIcon} alt="linkedIcon" className="h-[20px] w-[20px]" />
                    </div>
                  </div>
                  <p className="text-[#FFFFFF] text-[14px] font-[400] leading-[140%] m-2">
                    {founder.position}
                  </p>
                  <button
                    onClick={() => handleNav(founder._id)}
                    className="w-[257px] h-[40px] bg-gradient-to-b absolute bottom-5 left-[30px] from-[#AE98E7] to-[#805ED9] rounded-xl text-white py-2 mt-4"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FoundersProject;
