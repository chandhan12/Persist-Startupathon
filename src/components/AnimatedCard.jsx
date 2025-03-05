import { motion } from 'framer-motion';
import React from 'react';

export function AnimatedCard({ children, className = '', index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0],
        transition: {
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
          opacity: { duration: 0.8, ease: "easeOut" }
        }
      }}
      whileHover={{ 
        scale: 1.02,
        rotate: [0, -1, 1, -1, 0],
        transition: { duration: 0.2 }
      }}
      className={`rounded-2xl bg-white/10 backdrop-blur-lg  border-purple-600 border p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
