import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    title: "Competitive Salary",
  },
  {
    id: 2,
    image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    title: "≥ $10,000 USD in Company Funding",
  },
  {
    id: 3,
    image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    title: "≥ 10% Founder Equity",
  },
  {
    id: 4,
    image: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    title: "≥ $100,000 USD AWS Credits",
  },
  {
    id:5,
    image:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    title:"$1,000 OpenAI Credits"
  },
  {
    id:6,
    image:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
    title:"$120,000 USD IBM Cloud Credits"

  },
  {
    id:7,
    image:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
    title:"$2,500 Twilio Credits",

  },
  {
    id:8,
    image:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
    title:"$2,000 Airtable Credits"
    }
];

function RewardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + cards.length) % cards.length);
  };

  return (
    <>
      <motion.h2
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: false }}
      className='text-2xl text-center md:text-3xl mt-5 translate-y-25 p-1 font-semibold text-white '>
        Startupathon Success Comes with Extraordinary Rewards
      </motion.h2>

      <motion.div
       initial={{ opacity: 0, x: -100 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.6, delay: 0.3 }}
       viewport={{ once: false }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="relative w-full max-w-4xl h-[400px] border-black rounded-2xl ">
          <div className="absolute inset-0 backdrop-blur-3xl bg-purple-300/10 rounded-2xl pointer-events-none" />

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-white cursor-pointer" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-white cursor-pointer" />
          </button>

          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute w-full h-full flex justify-center items-center"
              >
               
                <motion.div className="absolute w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl opacity-80 blur-xs -translate-x-80">
                  <img src={cards[(currentIndex - 1 + cards.length) % cards.length].image} alt="Previous" className="w-50 h-50 object-cover" />
                  <p className="text-center text-white mt-2">{cards[(currentIndex - 1 + cards.length) % cards.length].title}</p>
                </motion.div>

               
                <motion.div className="w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full flex flex-col items-center">
                    <img src={cards[currentIndex].image} alt={cards[currentIndex].title} className="w-30 h-30 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-400/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-2"
                      >
                        {cards[currentIndex].title}
                      </motion.h2>
                    </div>
                  </div>
                </motion.div>

                
                <motion.div className="absolute w-[220px] h-[280px] rounded-xl overflow-hidden shadow-2xl opacity-80 blur-xs translate-x-80">
                  <img src={cards[(currentIndex + 1) % cards.length].image} alt="Next" className="w-50 h-50 object-cover" />
                  <p className="text-center text-white mt-2">{cards[(currentIndex + 1) % cards.length].title}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default RewardsCarousel;
