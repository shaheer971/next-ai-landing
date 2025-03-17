import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
}

export function RotatingText({ 
  texts, 
  interval = 2000, 
  className,
  textClassName 
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % texts.length);
  }, [texts.length]);

  useEffect(() => {
    const intervalId = setInterval(next, interval);
    return () => clearInterval(intervalId);
  }, [next, interval]);

  return (
    <div className={`relative h-[1.2em] ${className || ""}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className={`absolute w-full ${textClassName || ""}`}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 30, 
            stiffness: 400,
            opacity: { duration: 0.2 }
          }}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
