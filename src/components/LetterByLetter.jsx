import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Explore', 'Lead', 'Innovate'];

function LetterByLetter() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => {
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  const wordVariants = {
    enter: { 
      opacity: 0,
      y: 20
    },
    center: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const letterVariants = {
    enter: (i) => ({
      x: 20,
      y: 20,
      opacity: 0,
      transition: {
        delay: (currentWord.length - 1 - i) * 0.03,
      }
    }),
    center: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: (currentWord.length - 1 - i) * 0.03,
        duration: 0.2,
        ease: "easeOut"
      }
    }),
    exit: (i) => ({
      x: -20,
      y: -20,
      opacity: 0,
      transition: {
        delay: (currentWord.length - 1 - i) * 0.03,
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  return (
    <motion.div
      className="h-[76px] w-auto bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-lg flex items-center pb-2 justify-center px-2 "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWord}
          variants={wordVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="flex"
        >
          {currentWord.split('').map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{fontFamily:"Bricolage Grotesque"}}
              className="inline-block text-white  leading-[125%] text-[64px] font-[700]"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default LetterByLetter;