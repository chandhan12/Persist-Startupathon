import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const TeamMarquee = () => {
  const marqueeRef = useRef(null);
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const [teamMembers, setTeamMembers] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://persiststartupathon-admin.onrender.com/api/admin/completers"
        );
        const data = response.data.completers;

        if (Array.isArray(data) && data.length > 0) {
          setTeamMembers(data);

          const midpoint = Math.ceil(data.length / 2);
          setFirstHalf(data.slice(0, midpoint));
          setSecondHalf(data.slice(midpoint));
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    controls1.start({ x: "-100%" });
    controls2.start({ x: "0%" });
  }, []);

  if (teamMembers.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-gray-600">Loading team members...</div>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-medium text-center md:text-4xl mb-12">
        Expert Teams for Every Challenge
      </h2>

      <motion.div ref={marqueeRef} className="relative flex flex-col gap-8">
        {/* First Marquee - Left to Right */}
        <div className="relative flex overflow-hidden" style={{ minHeight: "600px" }}>
          <motion.div
            animate={controls1}
            initial={{ x: "0%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 pr-5"
            onHoverStart={() => controls1.stop()}
            onHoverEnd={() => controls1.start({ x: "-100%" })}
          >
            {[...firstHalf, ...firstHalf].map((member, index) => (
              <div key={`${member._id}-${index}`} className="flex-none px-2.5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl p-5 space-y-4 flex flex-col w-[340px] justify-between h-[550px] bg-gradient-to-br from-rose-100 to-white"
                >
                  <div className="relative mb-4 overflow-hidden rounded-3xl h-[340px] w-full">
                    <img
                      src={member.image}
                      alt={member.project}
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="text-rose-700">
                    <p className="text-lg font-bold">{member.project}</p>
                    <p className="text-sm mt-1">{member.profile} - {member.position}</p>
                    <p className="text-xs mt-2 line-clamp-2">{member.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <img
                        src={member.profilePicture}
                        alt={member.profile}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold">
                        Funding: ${member.funding.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="relative flex overflow-hidden" style={{ minHeight: "600px" }}>
          <motion.div
            animate={controls2}
            initial={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-5 pr-5"
            onHoverStart={() => controls2.stop()}
            onHoverEnd={() => controls2.start({ x: "0%" })}
          >
            {[...secondHalf, ...secondHalf].map((member, index) => (
              <div key={`${member._id}-reverse-${index}`} className="flex-none px-2.5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl p-5 space-y-4 flex flex-col w-[340px] justify-between h-[550px] bg-gradient-to-br from-blue-100 to-white"
                >
                  <div className="relative mb-4 overflow-hidden rounded-3xl h-[340px] w-full">
                    <img
                      src={member.image}
                      alt={member.project}
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="text-blue-700">
                    <p className="text-lg font-bold">{member.project}</p>
                    <p className="text-sm mt-1">{member.profile} - {member.position}</p>
                    <p className="text-xs mt-2 line-clamp-2">{member.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <img
                        src={member.profilePicture}
                        alt={member.profile}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold">
                        Funding: ${member.funding.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamMarquee;
