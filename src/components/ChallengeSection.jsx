import React, { useEffect, useState, useRef } from "react";
import ChallengeCard from "./ChallengeCard";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import spheres from "../assets/Spheres1.png";
import invertedTube from '../assets/invertedTube.svg';
import NeonCard2 from "./Ui/NeonCard2";
import NeonCard3 from "./Ui/NeonCard3";

const ChallengeSection = () => {
  const [challenges, setChallenges] = useState([]);
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);
  const [showAll, setShowAll] = useState(false);

  // Ensures hooks are always called in the same order
  const h2Ref = useRef(null);
  const challengeRefs = useRef([]);  // Store refs for all challenges

  const isInView = useInView(h2Ref, { once: true });

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

  // Assign refs to each challenge dynamically
  useEffect(() => {
    challengeRefs.current = challenges.map(() => React.createRef());
  }, [challenges]);

  const visibleChallenges = showAll
    ? challenges
    : challenges.slice(0, mobileScreen ? 6 : 12);

  return (
    <div id="challenge" className="relative mt-[128px] flex flex-col gap-[55px]">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center gap-[15px]">
        <motion.h2
          ref={h2Ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            style={{ fontFamily: "Bricolage Grotesque" }}
            className="text-white text-[48px] font-[700] leading-[125%] text-center mx-1 md:m-2"
          >
            Ongoing Startupathon{" "}
            <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
              Challenges
            </span>{" "}
          </span>
        </motion.h2>

        <div className="md:w-2/3 w-auto m-2">
          <motion.p
             initial={{ opacity: 0, y: 40 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, ease: "easeOut" }}
             style={{ fontFamily: "Inter" }}
             className="leading-[150%] text-[16px] font-[500] w-[934px] h-[56px] text-center text-white"
          >
            Start your journey - tackle live challenges, earn equity, and lead
            the future. Compete with top innovators, solve real-world <br />
            problems, and unlock exclusive rewards as you build the next big
            thing.
          </motion.p>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="flex justify-center items-center">
        <motion.div
          animate={{ height: showAll ? "auto" : "1540px" }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 m-3 lg:mx-20 items-center justify-center overflow-hidden"
        >
          {visibleChallenges.map((challenge, index) => (
            <motion.div
              key={challenge._id}
              ref={challengeRefs.current[index]}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }} // Ensures it animates only once
            >
              <ChallengeCard
                image={challenge.image}
                title={challenge.title}
                funding={challenge.funding}
                description={challenge.description}
                deadline={challenge.deadline}
                id={challenge._id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Shadow with "See More" Button */}
      {!showAll && challenges.length > (mobileScreen ? 4 : 6) && (
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-b from-transparent via-[#0A0A0A] to-[#0A0A0A] flex justify-center items-end pb-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-white font-medium text-md border cursor-pointer h-[56px] w-[157px] border-neutral-400 px-4 py-2 rounded-lg transition-all duration-300"
          >
            {showAll ? "See Less" : "See More 🚀"}
          </button>
        </div>
      )}

      {/* Decorative Elements */}
      <motion.div className="absolute top-[5px] left-[1180px] opacity-[50%]">
        <img
          src={invertedTube}
          className="h-[414px] w-[667px]"
          alt="Decorative spheres"
        />
      </motion.div>

      <div className="absolute top-80 right-4 translate-y-30">
        <NeonCard2 />
        <NeonCard3 />
      </div>

      <div className="absolute top-10 right-120">
        <NeonCard2 />
      </div>
    </div>
  );
};

export default ChallengeSection;
