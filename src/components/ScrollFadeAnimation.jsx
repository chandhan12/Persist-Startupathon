import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ScrollFadeAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 }); // Fade in from left
    } else {
      controls.start({ opacity: 0, x: -80 }); // Fade out to left
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -80 }} // Initially hidden to the left
      animate={controls} // Controlled animation
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 bg-gray-900 text-white rounded-lg shadow-lg"
    >
      <p className="text-md mt-8 text-slate-200">
        Embrace the challenge, push your limits, and turn your ideas into reality. <br />
        Because greatness begins outside your comfort zone!
      </p>
    </motion.div>
  );
};

export default ScrollFadeAnimation;
