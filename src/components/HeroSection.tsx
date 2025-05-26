import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import logoHero from "../img/icon384.png";
import { motion } from "framer-motion";

interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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
  }, []);

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
    <div className="relative">
      <div className="flex justify-center mt-16 sm:mt-20 md:mt-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-400/10 rounded-full blur-2xl animate-[ping_3s_ease-in-out_infinite]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-purple-600/15 rounded-full blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="logo-wrapper"
        >
          <img
            src={logoHero}
            alt={t("logoAlt") || "Logo"}
            className="h-48 sm:h-56 md:h-64 lg:h-80 relative z-10 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </motion.div>
      </div>

      <section
        ref={sectionRef}
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-0 pb-6 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px] -z-10"
        />

        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8 md:mt-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-block text-purple-400 font-medium text-xs sm:text-sm tracking-wide px-3 py-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full reveal reveal-delay-1 text-overline backdrop-blur-sm"
          >
            {t("withLove")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-display reveal reveal-delay-1"
          >
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              {t("heroTitle")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-body-sm sm:text-body md:text-body-lg text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2 break-words"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="pt-3 sm:pt-4 md:pt-6 reveal reveal-delay-3"
          >
            <button
              onClick={scrollToDonationSection}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-white hover:scale-105"
              aria-label={t("heroButton")}
            >
              {t("heroButton")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
          >
            <button
              onClick={scrollToNextSection}
              className="text-purple-400 hover:text-purple-500 transition-colors duration-300 relative touch-target group"
              aria-label={t("scrollDown") || "Scroll down"}
            >
              <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-professionalArrow group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {children}
      </section>

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
