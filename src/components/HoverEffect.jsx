import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={item._id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-yellow-200 dark:bg-yellow-200/[0.5] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <img src={item.profilePic} alt={item.name} className="h-44 w-44 rounded-xl mx-auto" />
            <CardTitle>{item.name}</CardTitle>
            <p className="text-gray-300 text-sm font-medium">{item.position}</p>
            <CardDescription>{item.highlights}</CardDescription>
            <p>{items.bio}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl h-full w-96 p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}
    >
      <div className="relative z-50">
        <div className="p-4 text-center">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return <h4 className={`text-zinc-100 font-bold tracking-wide mt-4 text-lg ${className}`}>{children}</h4>;
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={`mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
};
