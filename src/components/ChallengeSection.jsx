import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import axios from "axios";
import { motion } from "framer-motion";
import spheres from "../assets/Spheres1.png";
import NeonCard2 from "./Ui/NeonCard2";
import NeonCard3 from "./Ui/NeonCard3";

const ChallengeSection = () => {
  const [challenges, setChallenges] = useState([]);
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await axios.get(
          "https://persiststartupathon-admin.onrender.com/api/admin/challenges"
        );
        const allChallenges = res.data.challenges;
        const filteredChallenges = allChallenges.filter(
          (eachChallenge) => eachChallenge.status === true
        );
        setChallenges(filteredChallenges);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchChallenges();
  }, []);

  // Limit displayed challenges initially
  const visibleChallenges = showAll
    ? challenges
    : challenges.slice(0, mobileScreen ? 4 : 6); // Show 4 on mobile, 6 on desktop

  return (
    <div id="challenge" className="relative mt-5">
      {/* Top-right floating spheres image */}
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        transition: {
          y: { duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
          opacity: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="absolute top-0 right-0 -translate-y-30">
        <img src={spheres} className="h-72 w-96" alt="Decorative spheres" />
      </motion.div>
      <div  className="absolute top-80 right-4 translate-y-30">
        <NeonCard2/>
        <NeonCard3 />
      </div>
      <div  className="absolute top-10 right-120 ">
        <NeonCard2/>
        <NeonCard3 />
      </div>

      {/* Heading Section */}
      <motion.div className="flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl md:text-5xl text-center font-sans font-semibold mx-1 md:m-2">
          Ongoing Startupathon{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
            Challenges
          </span>{" "}
        </h2>

        <div className="md:w-2/3 w-auto m-2">
          <p className="text-white text-center text-sm md:text-lg m-5">
            Start your journey - tackle live challenges, earn equity, and lead
            the future. Compete with top innovators, solve real-world <br />
            problems, and unlock exclusive rewards as you build the next big
            thing.
          </p>
        </div>
      </motion.div>

      {/* Challenges Grid */}
      <div className="flex justify-center items-center">
      <motion.div
        animate={{ height: showAll ? "auto" : "1200px" }} // Dynamic height animation
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 m-3 lg:mx-20 items-center justify-center overflow-hidden"
      >
        {visibleChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            image={challenge.image}
            title={challenge.title}
            funding={challenge.funding}
            description={challenge.description}
            deadline={challenge.deadline}
          />
        ))}
      </motion.div>
      </div>

      {/* Bottom Gradient Shadow with "See More" Button */}
      {!showAll && challenges.length > (mobileScreen ? 4 : 6) && (
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent to-black flex justify-center items-end pb-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white font-medium text-md border cursor-pointer h-[56px] w-[157px] border-neutral-400 bg-gradient-to-b from-transparent to-[#1f1f1f] px-4 py-2 rounded-lg transition-all duration-300"
          >
            {showAll ? "See Less" : "See More 🚀"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeSection;
