import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      setVisible(scrollTop > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[60]"
          style={{ pointerEvents: "none" }}
        >
          <div className="h-[3px] w-full bg-transparent/30 backdrop-blur-sm"></div>
          <motion.div
            className="h-[3px] origin-left bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            style={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgress;

