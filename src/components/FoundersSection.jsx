import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HoverEffect } from './HoverEffect';
import { motion } from 'framer-motion';

const FoundersSection = () => {
  const [founders, setFounders] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchFounders = async () => {
      try {
        const response = await axios.get(
          `https://persiststartupathon-admin.onrender.com/api/admin/founders?page=${page}&limit=6`
        );
        if (isMounted) {
          setFounders((prev) =>
            page === 1 ? response.data.founders : [...prev, ...response.data.founders]
          );
        }
        setHasMore(response.data.hasMore);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchFounders();

    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: false }}
      id="founders"
    >
      <h2 className="text-2xl text-center text-wrap md:text-3xl m-1 p-1 font-semibold text-white">
        By getting accepted, you unlock access to our elite founder network.
      </h2>
      <p className="text-slate-300 text-xl font-normal text-center text-wrap">
        Join Persist and gain access to our 400+ millionaire and billionaire startup network.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 m-4 lg:ml-12">
        <HoverEffect items={founders} />
      </div>
      {hasMore && (
        <div
          onClick={() => setPage((prev) => prev + 1)}
          className="hover:text-purple-800 text-white text-center text-lg cursor-pointer"
        >
          Show More
        </div>
      )}
    </motion.div>
  );
};

export default FoundersSection;
