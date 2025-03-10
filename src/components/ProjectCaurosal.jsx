import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProjectCard } from './ProjectCard';
import NeonCard2 from './Ui/NeonCard2';
import NeonCard3 from './Ui/NeonCard3';

const ProjectCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          'https://persiststartupathon-admin.onrender.com/api/admin/completers'
        );

        if (isMounted) {
          setProjects(response.data.completers || []);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError('Failed to load projects');
          console.error('Error fetching projects:', error);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const midpoint = Math.ceil(projects.length / 2);
  const row1 = projects.slice(0, midpoint);
  const row2 = projects.slice(midpoint);

  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  useEffect(() => {
    if (projects.length === 0) return;

    let animationFrame;
    const speed = 0.8;
    const rowWidth = row1.length * 300;

    const animate = () => {
      if (!isHovered) {
        setPosition1((prev) => (prev <= -rowWidth ? 0 : prev - speed));
        setPosition2((prev) => (prev <= -rowWidth ? 0 : prev - speed));
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, row1.length]);

  const renderRow = (rowProjects, position) => (
    <div
      className="flex transition-transform"
      style={{
        transform: `translateX(${position}px)`,
        width: `${rowProjects.length * 300}px`,
      }}
    >
      {rowProjects.map((project, index) => (
        <ProjectCard key={`${project._id}-${index}`} project={project} />
      ))}
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">Loading projects...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center mb-5">
        <h2 className="text-white text-2xl md:text-5xl font-sans font-semibold mx-1 md:m-2">
          <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
            Completed
          </span>{' '}
          Startupathon challenges 🏆
          <br />
        </h2>
      </div>
      <div className='flex justify-center'>
      <div className="md:w-3/4 w-auto m-2 flex flex-col justify-center items-center">
          <p className="text-white text-center text-sm md:text-xl m-5">
            People like you have conquered Startupathon challenges and are now leading thriving startups. Their journey started here <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text text-center  text-sm md:text-xl m-5">
                are you next?
          </span>
          </p>
          
        </div>
        </div>

      <div className="min-h-screen relative flex flex-col items-center justify-center p-8">
        {/* Neon Cards Positioned Above */}
        <div className=''>
        <div className="absolute top-0 rotate-[180deg] -translate-y-20 left-[40%] z-20">
          <NeonCard2 />
          <NeonCard3 />
        </div>
        <div className="absolute top-80 right-15 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute bottom-20 right-8 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute bottom-0 translate-y-20 right-8 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute bottom-0 left-[40%] translate-y-20 right-8 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute top-80 left-15 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute bottom-20 left-8 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        <div className="absolute  bottom-0 translate-y-20 left-8 z-20">
        <NeonCard2 />
        <NeonCard3 />
        </div>
        </div>

        {/* Project Carousel Positioned Behind */}
        <div
          className="w-full overflow-hidden z-0 relative mt-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mb-8">{renderRow(duplicatedRow1, position1)}</div>
          <div>{renderRow(duplicatedRow2, position2)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
