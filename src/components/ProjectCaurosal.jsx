import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProjectCard } from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import NeonCard2 from "./Ui/NeonCard2";
import NeonCard3 from "./Ui/NeonCard3";
import fulldonut from '../assets/fulldonut.svg'

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  const animationConfig = (direction) => ({
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: { repeat: Infinity, duration: 30, ease: "linear" },
  });

  useEffect(() => {
    controlsRow1.start(animationConfig("left"));
    controlsRow2.start(animationConfig("right"));
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://persiststartupathon-admin.onrender.com/api/admin/completers"
        );
        setProjects(response.data.completers || []);
        setError(null);
      } catch (error) {
        setError("Failed to load projects");
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleMouseEnter = (controls) => {
    controls.stop(); // Pauses animation
  };

  const handleMouseLeave = (controls, direction) => {
    controls.start(animationConfig(direction)); // Resumes animation
  };

  const currentProjects = projects.length > 0 ? projects : "";
  const midpoint = Math.ceil(currentProjects.length / 2);
  const row1 = currentProjects.slice(0, midpoint);
  const row2 = currentProjects.slice(midpoint);
  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <div className="relative mt-50">
      <div className="absolute left-[-226px] top-0 -translate-y-40">
        <img src={fulldonut} alt="donut" className="w-[412px] h-[288px] opacity-[50%]" />
      </div>
      <div className="flex flex-col items-center gap-5 justify-center mb-5">
        <h2 className="text-white text-2xl md:text-5xl font-sans font-semibold mx-1 md:m-2">
          <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
            Completed
          </span>{" "}
          Startupathon challenges 🏆
        </h2>
        <p className="text-white text-[16px] font-[500] text-center  ">People like you have conquered Startupathon challenges and are now leading thriving startups. Their journey started here <br />
        <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text text-center">are you next?</span> </p>
      </div>

      <div className="absolute top-60 bottom-8 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-50 bottom-8 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="relative flex flex-col items-center justify-center p-8">
        <div className="w-full overflow-hidden z-0 relative mt-10">
          <motion.div
            className="flex space-x-4"
            animate={controlsRow1}
            onMouseEnter={() => handleMouseEnter(controlsRow1)}
            onMouseLeave={() => handleMouseLeave(controlsRow1, "left")}
          >
            {duplicatedRow1.map((project, index) => (
              <ProjectCard
                key={`${project._id}-${index}`}
                project={project}
                isLoading={isLoading}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-6"
            animate={controlsRow2}
            onMouseEnter={() => handleMouseEnter(controlsRow2)}
            onMouseLeave={() => handleMouseLeave(controlsRow2, "right")}
          >
            {duplicatedRow2.map((project, index) => (
              <ProjectCard
                key={`${project._id}-${index}`}
                project={project}
                isLoading={isLoading}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div>
        <div className="absolute top-0 left-0 z-20 opacity-[60%]">
          <NeonCard2 />
        </div>
        <div className="absolute top-0 left-6 -translate-y-50 z-20 opacity-[60%]">
          <NeonCard3 />
        </div>
        <div className="absolute top-0 right-6 z-20 opacity-[60%]">
          <NeonCard3 />
        </div>
        <div className="absolute bottom-0 translate-y-40 left-0 z-20 opacity-[60%]">
          <NeonCard3 />
        </div>
        <div className="absolute bottom-0 translate-y-40 right-6 z-20 opacity-[60%]">
          <NeonCard2 />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
