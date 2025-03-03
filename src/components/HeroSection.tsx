import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
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

  return (
    <div className="relative">
      {/* Логотип по центру */}
      <div className="flex justify-center mt-14 md:mt-16 lg:mt-18">
        <img 
          src="src/icons/icon384.png" 
          alt="logo" 
          className="h-22 md:h-36 lg:h-40" // Адаптивна висота
        />
      </div>

      <section
        ref={sectionRef}
        className="min-h-[70vh] flex flex-col items-center justify-center px-2 pt-2 pb-2 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />
        
        <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6 mt-16 md:mt-0">
          <span className="inline-block text-purple-400 font-medium text-xs md:text-sm lg:text-base tracking-wide px-3 py-1 bg-purple-500/10 rounded-full reveal reveal-delay-1">
            З любов'ю від творця до творців
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight reveal reveal-delay-1">
            <span className="text-gradient">{t('heroTitle')}</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
            {t('heroSubtitle')}
          </p>
          
          <div className="pt-4 md:pt-6 reveal reveal-delay-3">
            <a 
              href="#donate" 
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl purple-glow"
            >
              {t('heroButton')}
            </a>
          </div>

          {/* Красива стрілка під кнопкою */}
          <button 
            onClick={scrollToNextSection}
            className="mt-8 animate-bounce text-purple-400 hover:text-purple-500 transition-colors duration-1000"
            aria-label="Прокрутити вниз"
          >
            <ArrowDown className="h-8 w-8 md:h-10 md:w-10" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;