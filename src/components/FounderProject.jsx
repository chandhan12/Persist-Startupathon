import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";


function FoundersProject() {
  const [founders, setFounders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
    const fetchFounders=async ()=>{
        try {
            setIsLoading(true)
            const respnose=await axios("https://persiststartupathon-admin.onrender.com/api/admin/founders")

            setFounders(respnose.data.founders)
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    fetchFounders()
},[])

useEffect(() => {
    if (founders.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [founders.length]);



const currentFounder = founders[currentIndex]


if (isLoading) {
    return (
      <div className="  flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

return (
    <div>
        <div className="flex flex-col  justify-center items-center">
        <h2 className="text-white text-2xl md:text-4xl font-sans font-semibold mx-1 md:m-2">
      
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
        Unlock Exclusive 
      </span>{" "}
      Access to Our
      <br />
    </h2>
    <h2 className="text-white text-2xl md:text-4xl font-sans font-semibold m-1 md:m-2">
      
      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
      Elite Founder Network
      </span>{" "}
     
    </h2>
    <div className="md:w-[934px] h-[56px] w-auto mt-3 mb-10">
      <p className="text-white text-center text-xs md:text-sm">
        Unlock unparlled opportunities and exculsive benefits designed to acclerate your startup journey. From funding and <br />
        equity to premium cold credits-your path to success starts here!
      </p>
    </div>
        </div>
    <div className="  flex items-center justify-center p-4 mb-50">
      <AnimatePresence mode="wait">
        {currentFounder && (
          <motion.div
            key={currentFounder?._id || currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#312d3c] border border-purple-600 rounded-xl p-6 max-w-sm w-[321px] h-[362px] shadow-xl hover:scale-102 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                src={currentFounder.profilePic}
                alt={currentFounder.name}
                className="w-[150px] h-[150px] rounded-full object-cover mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
               
            </div>

            <div className="flex flex-col">
            <div className="flex gap-2 justify-center items-center">
                    
                <h2 className="text-white text-lg font-semibold">{currentFounder.name}</h2>
                <img  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66e81ea7c52c2eb1db6a973f_ico_soc-03.svg" className="bg-blue-500 rounded-md h-5 w-5" alt="" />
                  </div>

                <div className="w-[257px] h-[40px] flex justify-center m-2">
                    <p className="text-center text-sm text-white">{currentFounder.position}</p>
                </div>
            </div>
            <button className="w-[257px] h-[40px] bg-gradient-to-b from-[#AE98E7] to-[#805ED9] rounded-xl text-white mt-5 cursor-pointer">View Details</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
}

export default FoundersProject