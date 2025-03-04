import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from 'react';
import logoHero from '../img/icon384.png';

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

    const reveals = sectionRef.current?.querySelectorAll("reveal");
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

  // Додаємо нову функцію для переходу до секції донатів
  const scrollToDonationSection = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Логотип по центру з ефектом світіння */}
      <div className="flex justify-center mt-14 md:mt-16 lg:mt-18 relative">
        {/* Зовнішній шар світіння з анімацією */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Середній шар світіння з анімацією пульсації */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-purple-400/10 rounded-full blur-2xl animate-[ping_3s_ease-in-out_infinite]" />
        
        {/* Внутрішній шар світіння, який створює базовий ефект */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-purple-600/15 rounded-full blur-xl" />
        
        <img 
          src={logoHero}
          alt="logo" 
          className="h-22 md:h-36 lg:h-40 relative z-10 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
        />
      </div>
      
      {/* CSS для анімації світіння стрілки */}
      <style>{`
        @keyframes gladeGlow {
          0% {
            filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.3));
            transform: translateY(0) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.7));
            transform: translateY(10px) scale(1.05);
          }
          100% {
            filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.3));
            transform: translateY(0) scale(1);
          }
        }
        
        .arrow-glow {
          animation: gladeGlow 2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="min-h-[70vh] flex flex-col items-center justify-center px-2 pt-2 pb-2 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6 mt-16 md:mt-0">
          <span className="inline-block text-purple-400 font-medium text-xs md:text-sm lg:text-base tracking-wide px-3 py-1 bg-purple-500/10 rounded-full reveal reveal-delay-1">
            {t('withLove')}
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight reveal reveal-delay-1">
            <span className="text-gradient">{t('heroTitle')}</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
            {t('heroSubtitle')}
          </p>
          
          <div className="pt-4 md:pt-6 reveal reveal-delay-3">
            {/* Кнопка для прокрутки до секції донатів */}
            <button 
              onClick={scrollToDonationSection}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl purple-glow"
            >
              {t('heroButton')}
            </button>
          </div>

          {/* Красива стрілка під кнопкою з ефектом світіння */}
          <button 
            onClick={scrollToNextSection}
            className="mt-8 text-purple-400 hover:text-purple-500 transition-colors duration-300 relative"
            aria-label="Прокрутити вниз"
          >
            <ArrowDown className="h-8 w-8 md:h-10 md:w-10 arrow-glow" />
          </button>
        </div>
        
        {/* Відображення дочірніх елементів, якщо вони є */}
        {children}
      </section>
    </div>
  );
};

export default HeroSection;