import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import DonationOptions from "@/components/DonationOptions";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhySupportSection from "@/components/WhySupportSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import BackgroundElements from "@/components/BackgroundElements";
import Header from "@/components/Header";
import FeedbackSection from "@/components/FeedbackSection";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "sonner";
import Stars from "@/components/Stars";
import { motion, AnimatePresence } from "framer-motion";

interface IndexProps {
  className?: string;
}

const Index: React.FC<IndexProps> = () => {
  useEffect(() => {
    // Enhanced scroll handler with performance optimizations
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      reveals.forEach((reveal) => {
        const rect = reveal.getBoundingClientRect();
        const revealTop = rect.top + scrollY;
        const revealPoint = 150;

        if (scrollY + windowHeight > revealTop + revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    // Performance-optimized debounced scroll handler
    const debouncedHandleScroll = debounce(handleScroll, 16); // 60fps
    
    // Use passive listener for better performance
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    // Initial check
    requestAnimationFrame(handleScroll);

    // Preload critical resources
    const prefetchLinks = document.querySelectorAll('link[rel="prefetch"]');
    prefetchLinks.forEach(link => {
      if (link.getAttribute('href')) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = link.getAttribute('href')!;
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);
      }
    });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen bg-background text-foreground overflow-hidden gpu-accelerated"
        >
          {/* Toast notifications with enhanced styling */}
          <Toaster 
            position="top-center" 
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)',
                color: 'var(--foreground)'
              }
            }}
          />

          
          {/* Enhanced background layers */}
          <BackgroundElements />
          <AnimatedBackground />
          
          {/* Header with smooth entrance */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Header />
          </motion.div>
          
          {/* Page content with staggered animations */}
          <motion.main
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <HeroSection />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <WhySupportSection />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <FeedbackSection />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
            >
              <Stars />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <DonationOptions />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <AboutSection />
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <Footer />
            </motion.div>
          </motion.main>
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  );
};

// Enhanced debounce function with performance optimizations
function debounce<T extends unknown[]>(func: (...args: T) => void, wait: number) {
  let timeout: NodeJS.Timeout | undefined;
  let lastArgs: T | undefined;
  let lastCallTime: number | undefined;
  let result: void;

  const invokeFunc = (time: number): void => {
    const args = lastArgs!;
    lastArgs = undefined;
    result = func(...args);
    return result;
  };

  const shouldInvoke = (time: number): boolean => {
    const timeSinceLastCall = time - (lastCallTime || 0);
    return lastCallTime === undefined || timeSinceLastCall >= wait;
  };

  return function executedFunction(...args: T): void {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastCallTime = time;

    if (isInvoking) {
      if (timeout === undefined) {
        return invokeFunc(lastCallTime);
      }
    }
    
    if (timeout === undefined) {
      timeout = setTimeout(() => {
        timeout = undefined;
        if (lastArgs !== undefined) {
          invokeFunc(lastCallTime!);
        }
      }, wait);
    }
    
    return result;
  };
}

export default Index;
