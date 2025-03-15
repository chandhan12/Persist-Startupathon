import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { leftIcon } from "../icons";

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
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
      <div className="flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-white text-2xl md:text-4xl font-sans font-semibold mx-1 md:m-2">
        <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
          Unlock Exclusive
        </span>{" "}
        Access to Our
      </h2>
      <h2 className="text-white text-2xl md:text-4xl font-sans font-semibold m-1 md:m-2">
        <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
          Elite Founder Network
        </span>
      </h2>
      <div className="md:w-[934px] h-[56px] w-auto mt-3 mb-10">
        <p className="text-white text-center text-xs md:text-sm">
          Unlock unparalleled opportunities and exclusive benefits designed to accelerate your startup journey.
        </p>
      </div>
     <div className="flex justify-end  w-3/4">
     <div className="text-white text-right m-4 flex gap-2 cursor-pointer">
          View all {leftIcon}
        </div>
     </div>
        
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
          className="w-full max-w-6xl"
        >
          {founders.map((founder) => (
            <SwiperSlide key={founder._id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#312d3c] border border-purple-600 rounded-xl p-6 shadow-xl text-center"
              >
                <img
                  src={founder.profilePic}
                  alt={founder.name}
                  className="w-[120px] h-[120px] rounded-full object-cover mx-auto mb-4"
                />
                <h2 className="text-white text-lg font-semibold">{founder.name}</h2>
                <p className="text-white text-sm my-2">{founder.position}</p>
                <button
                  onClick={() => handleNav(founder._id)}
                  className="w-full bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-xl text-white py-2 mt-4"
                >
                  View Details
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </div>
  );
}

export default FoundersProject;
