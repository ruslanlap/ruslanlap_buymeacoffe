import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import logoHero from "../img/icon384.png";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useAnimation } from "framer-motion";

interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const controls = useAnimation();

  // Enhanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals?.forEach((reveal) => observer.unobserve(reveal));
    };
  }, [controls]);

  // Enhanced mouse parallax with more responsive spring physics
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 25, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 200, damping: 25, mass: 0.2 });

  // Multi-layered parallax transforms for depth
  const layer1X = useTransform(sx, [-0.5, 0.5], [-35, 35]);
  const layer1Y = useTransform(sy, [-0.5, 0.5], [-35, 35]);
  const layer2X = useTransform(sx, [-0.5, 0.5], [-20, 20]);
  const layer2Y = useTransform(sy, [-0.5, 0.5], [-20, 20]);
  const layer3X = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const layer3Y = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const logoX = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const logoY = useTransform(sy, [-0.5, 0.5], [-5, 5]);

  // Scroll-based transforms for parallax scrolling
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const nx = (e.clientX / innerWidth - 0.5) * 0.8; // Reduced sensitivity
    const ny = (e.clientY / innerHeight - 0.5) * 0.8;
    mx.set(nx);
    my.set(ny);
  };

  // Reset parallax on mouse leave
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("why-support");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDonationSection = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden" 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Enhanced parallax background layers */}
      <motion.div 
        className="flex justify-center mt-16 sm:mt-20 md:mt-24 relative"
        style={{ y: backgroundY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] bg-gradient-to-r from-purple-500/8 via-pink-500/12 to-purple-500/8 rounded-full blur-3xl"
          style={{ 
            x: layer1X, 
            y: layer1Y,
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 120
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] bg-gradient-to-r from-purple-400/12 via-pink-400/16 to-purple-400/12 rounded-full blur-2xl"
          style={{ 
            x: layer2X, 
            y: layer2Y,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 140
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-gradient-to-r from-purple-600/20 via-pink-600/25 to-purple-600/20 rounded-full blur-xl"
          style={{ 
            x: layer3X, 
            y: layer3Y,
            rotate: useTransform(scrollYProgress, [0, 1], [0, -30])
          }}
        />

        {/* Enhanced logo with better animations */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          className="logo-wrapper relative z-20"
          style={{ 
            x: logoX, 
            y: logoY,
            scale: logoScale
          }}
          whileHover={{ 
            scale: 1.05,
            rotateZ: [0, -1, 1, -1, 0],
            transition: { 
              duration: 0.4,
              rotateZ: { duration: 0.5, ease: "easeInOut" }
            }
          }}
        >
          <motion.img
            src={logoHero}
            alt={t("logoAlt") || "Logo"}
            className="h-48 sm:h-56 md:h-64 lg:h-80 relative z-10 drop-shadow-[0_0_25px_rgba(192,132,252,0.6)]"
            loading="eager"
            whileHover={{
              filter: [
                "drop-shadow(0 0 25px rgba(192,132,252,0.6))",
                "drop-shadow(0 0 40px rgba(192,132,252,0.8))",
                "drop-shadow(0 0 25px rgba(192,132,252,0.6))"
              ],
              transition: { duration: 0.3 }
            }}
          />
          
          {/* Floating particles around logo */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                style={{
                  left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 120}px`,
                  top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 120}px`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.section
        ref={sectionRef}
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-0 pb-6 relative"
        style={{ y: contentY }}
      >
        {/* Enhanced ambient lighting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 360
          }}
          transition={{
            opacity: { duration: 1.2, delay: 0.8, ease: "easeOut" },
            scale: { duration: 1.2, delay: 0.8, ease: "easeOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-conic from-purple-500/15 via-pink-500/20 to-purple-500/15 rounded-full blur-[150px] -z-10"
        />

        <motion.div 
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8 md:mt-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 20 
                }
              }
            }}
            className="inline-block text-purple-400 font-medium text-xs sm:text-sm tracking-wide px-4 py-2 bg-gradient-to-r from-purple-500/15 via-pink-500/20 to-purple-500/15 rounded-full reveal reveal-delay-1 text-overline backdrop-blur-md border border-purple-400/20 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
              transition: { duration: 0.2 }
            }}
          >
            {t("withLove")}
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 25 
                }
              }
            }}
            className="text-display reveal reveal-delay-1"
          >
            <motion.span 
              className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              {t("heroTitle")}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 25 
                }
              }
            }}
            className="text-body-sm sm:text-body md:text-body-lg text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2 break-words leading-relaxed"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 140, 
                  damping: 20 
                }
              }
            }}
            className="pt-3 sm:pt-4 md:pt-6 reveal reveal-delay-3"
          >
            <motion.div 
              className="gradient-border inline-block rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={scrollToDonationSection}
                className="gb-inner inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 px-6 md:px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl text-white relative overflow-hidden"
                aria-label={t("heroButton")}
                whileHover={{
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                  scale: 1.03
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">{t("heroButton")}</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.2 }
              }
            }}
            className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
          >
            <motion.button
              onClick={scrollToNextSection}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 relative touch-target group"
              aria-label={t("scrollDown") || "Scroll down"}
              whileHover={{ 
                scale: 1.1,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md"
              />
              <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 relative z-10 drop-shadow-lg" />
            </motion.button>
          </motion.div>
        </motion.div>

        {children}
      </motion.section>

      <style>{`
        @keyframes professionalArrow {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 3px rgba(168,85,247,0.4));
          }
          50% {
            transform: translateY(-8px) scale(1.05);
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(168,85,247,0.5));
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
            filter: drop-shadow(0 0 3px rgba(168,85,247,0.4));
          }
        }
        .animate-professionalArrow {
          animation: professionalArrow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
