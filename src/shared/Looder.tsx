

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const bgColor = isDarkMode ? "bg-gray-200" : "bg-gray-600";
  const borderColor = isDarkMode ? "border-b-gray-200 border-t-gray-200" : "border-b-gray-600 border-t-gray-600";

  // Honeycomb positions and delays
  const honeycombs = [
    { delay: 0, left: "-28px", top: "0" },
    { delay: 0.1, left: "-14px", top: "22px" },
    { delay: 0.2, left: "14px", top: "22px" },
    { delay: 0.3, left: "28px", top: "0" },
    { delay: 0.4, left: "14px", top: "-22px" },
    { delay: 0.5, left: "-14px", top: "-22px" },
    { delay: 0.6, left: "0", top: "0" }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative h-6 w-6">
        {honeycombs.map((honeycomb, index) => (
          <motion.div
            key={index}
            className={`absolute h-3 w-6 mt-1.5 ${bgColor}`}
            style={{
              left: honeycomb.left,
              top: honeycomb.top
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              transition: {
                duration: 2.1,
                repeat: Infinity,
                repeatDelay: 0,
                delay: honeycomb.delay,
                ease: "easeInOut"
              }
            }}
          >
            {/* Top triangle */}
            <div className={`absolute -top-1.5 left-0 right-0 border-l-[12px] border-r-[12px] border-b-[6px] border-l-transparent border-r-transparent ${borderColor.split(' ')[0]}`} />
            {/* Bottom triangle */}
            <div className={`absolute -bottom-1.5 left-0 right-0 border-l-[12px] border-r-[12px] border-t-[6px] border-l-transparent border-r-transparent ${borderColor.split(' ')[1]}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader;