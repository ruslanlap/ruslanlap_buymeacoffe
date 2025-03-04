import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import logoHero from "../img/icon384.png";

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-purple-400/10 rounded-full blur-2xl animate-[ping_3s_ease-in-out_infinite]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-purple-600/15 rounded-full blur-xl" />

        <div className="logo-wrapper">
          <img
            src={logoHero}
            alt={t("logoAlt") || "Logo"}
            className="h-48 sm:h-56 md:h-64 lg:h-80 relative z-10 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
            loading="eager"
          />
        </div>
      </div>

      <style>{`
        @keyframes arrowPulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
            filter: drop-shadow(0 0 3px rgba(168, 85, 247, 0.4));
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
            filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.8));
          }
        }

        @keyframes arrowBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(12px);
          }
          60% {
            transform: translateY(5px);
          }
        }

        @keyframes arrowFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }

        .pulsing-arrow {
          animation: arrowPulse 2s ease-in-out infinite;
          color: #a78bfa;
        }

        .arrow-bounce {
          animation: arrowBounce 2s ease infinite;
        }

        .arrow-float {
          animation: arrowFloat 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .pulsing-arrow, .arrow-bounce, .arrow-float {
            animation: none;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-0 pb-6 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />

        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 mt-6 sm:mt-8 md:mt-10">
          <span className="inline-block text-purple-400 font-medium text-xs sm:text-sm tracking-wide px-3 py-1 bg-purple-500/10 rounded-full reveal reveal-delay-1 text-overline">
            {t("withLove")}
          </span>

          <h1 className="text-display reveal reveal-delay-1">
            <span className="text-gradient">{t("heroTitle")}</span>
          </h1>

          <p className="text-body-sm sm:text-body md:text-body-lg text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2 break-words">
            {t("heroSubtitle")}
          </p>

          <div className="pt-3 sm:pt-4 md:pt-6 reveal reveal-delay-3">
            <button
              onClick={scrollToDonationSection}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-accent hover:bg-accent/80 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl purple-glow text-button"
              aria-label={t("heroButton")}
            >
              {t("heroButton")}
            </button>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
            <button
              onClick={scrollToNextSection}
              className="text-purple-400 hover:text-purple-500 transition-colors duration-300 relative touch-target"
              aria-label={t("scrollDown") || "Scroll down"}
            >
              <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-bounce" />
            </button>
          </div>
        </div>

        {children}
      </section>

      <style>{`
        @keyframes pulse-glow {
          0% {
            filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.7));
          }
          100% {
            filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.3));
          }
        }

        :global(.animate-bounce) {
          animation: bounce 1s infinite;
          animation: pulse-glow 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
          }
          50% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
