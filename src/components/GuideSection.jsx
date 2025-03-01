import React, { useEffect, useRef, useState } from 'react';
import { Play, Home } from 'lucide-react';

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
//min-h-[200vh]
  return (
    <div ref={guideRef} className="relative   text-white">

        <h2>Found an idea that matches you</h2>
     
      <div className="absolute left-0 ml-4 md:ml-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700">
        
        <div 
          className="absolute w-0.5 bg-purple-500 transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>
        
       
        <div 
          className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full ${activeSection === 0 ? 'bg-purple-600' : 'bg-gray-800'} transition-all duration-300`}
          style={{ top: '10%' }}
        >
          <Play className="text-white" size={20} />
        </div>
        
        <div 
          className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full ${activeSection === 1 ? 'bg-purple-600' : 'bg-gray-800'} transition-all duration-300`}
          style={{ top: '30%' }}
        >
          <Home className="text-white" size={20} />
        </div>

       
      </div>

     
      <section className="min-h-96 flex items-center">
        <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-6 text-purple-400">Dive into the Challenge Details</h2>
            <h3 className="text-4xl font-bold mb-8">Video</h3>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-purple-900/30 p-12 rounded-lg">
              <p className="text-2xl mb-6">It all starts here!</p>
              <p className="text-lg mb-8">
                Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.
              </p>
              <div className="bg-yellow-400/10 p-4 rounded-lg">
                <p className="text-lg">
                  <span className="text-yellow-400 font-bold">💡 Pro Tip:</span> Pay attention—it's more than just instructions. It's your roadmap to success!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-96 flex items-center">
        <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-8 text-purple-400">Build, Submit & Shine</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-purple-900/30 p-12 rounded-lg">
              <p className="text-lg">
                Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default GuideSection;
