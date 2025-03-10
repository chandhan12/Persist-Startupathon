import axios from "axios";
import React, { useRef, useState } from "react";
import parallelogram2 from "../assets/parallelogram2.png";
import Helixrev from "../assets/Helixrev.png";
import { motion } from "framer-motion";

const SubscribeSection = () => {
  const [subscribed, setSubscribed] = useState(false);
  const emailRef = useRef("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      return;
    }

    const name = email.split("@")[0];

    await axios.post("https://persiststartupathon-admin.onrender.com/api/admin/subscribers", {
      name,
      email,
    });

    setSubscribed(true);
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Floating Background Image */}
      <div className="absolute   right-0 bottom-0 ">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: [0, -15, 0],
          transition: {
            y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.8, ease: "easeOut" },
          },
        }}
        
      >
        <img src={Helixrev} alt="Floating Element" className="h-28 w-28 md:w-[432px] md:h-[432px]" />
      </motion.div>
      </div>

      {/* Main Card */}
      <div className="relative">
        <div
          className="w-[1200px] h-[380px] flex flex-col rounded-xl items-center pt-24 overflow-hidden my-20 backdrop-brightness-150"
          style={{
            backgroundImage: `url(${parallelogram2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-4xl text-white font-semibold">Got an Idea of Your Own? Let's</h2>
          <h2 className="text-4xl text-white font-semibold">Make It Happen!</h2>
          <div className="w-[587px] h-[72px] m-3">
            <p className="text-neutral-200 text-md text-center">
              We are always on the lookout for visionary founders with groundbreaking startup ideas.
              If you're ready to turn your vision into reality, apply below for our Fellowship program
              and take the first step towards success.
            </p>
          </div>
          <button className="bg-white mt-8 w-[223px] h-[42px] text-purple-600 rounded-xl font-semibold cursor-pointer">
            Apply for Fellowship 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
