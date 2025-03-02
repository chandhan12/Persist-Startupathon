import React, { useEffect, useRef, useState } from 'react';
import { Play, Home, CheckCircle, Trophy } from 'lucide-react';

const GuideSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const guideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!guideRef.current) return;

      const guideElement = guideRef.current;
      const { top, height } = guideElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (top + height > 0 && top < viewportHeight) {
        const progress = Math.min(Math.max((viewportHeight - top) / height, 0), 1);
        setScrollProgress(progress);
      }

      const sections = guideElement.querySelectorAll('section');
      const scrollPosition = window.scrollY + viewportHeight / 3;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop + guideElement.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <h2 className='text-4xl text-white font-bold text-center m-4'>Found an idea that matches your Skills?</h2>
    <p className='text-lg text-center text-wrap text-slate-400'>Here’s a simple guide on how the Startupathon process works once you find a project idea that suits your skills.</p>
   
    <div ref={guideRef} id="guide" className="relative  text-white">
      
      <div className="absolute left-3.5 ml-4 md:ml-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white">
        <div 
          className="absolute w-0.5 bg-purple-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>

        {[Play, Home, CheckCircle, Trophy].map((Icon, index) => (
          <div 
            key={index}
            className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full ${activeSection === index ? 'bg-purple-600' : 'bg-purple-600'} transition-all duration-900`}
            style={{ top: `${10 + index * 25}%` }}
          >
            <Icon className="text-white" size={20} />
          </div>
        ))}
      </div>
     
     <div className='ml-15'>
      <section className="min-h-56 flex items-center">
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center mt-5 pl-15">
            <h2 className="text-3xl font-bold mb-4 text-slate-200">Dive into the Challenge Details</h2>
            <h3 className="text-3xl font-bold mb-8 text-slate-200">Video</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className=" pl-15 rounded-lg">
              <p className="text-2xl mb-6 text-purple-600">It all starts here!</p>
              <p className="text-lg mb-4">
                Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.
              </p>
              <div className=" p-4 rounded-lg">
                <p className="text-md">
                  <span className="text-yellow-400 font-bold">💡 Pro Tip:</span> Pay attention—it's more than just instructions. It's your roadmap to success!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-56 flex items-center">
        <div className=" mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center pl-15">
            <h2 className="text-3xl font-bold mb-4 text-slate-200">Build, Submit & Shine</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className=" pl-15  rounded-lg">
              <p className="text-md">
                Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    </div>
    </>
  );
};

export default GuideSection;
