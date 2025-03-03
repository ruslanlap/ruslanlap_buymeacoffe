
import { useEffect, useRef } from "react";
import GlassmorphicCard from "./GlassmorphicCard";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-purple-500/10 rounded-full mb-4 reveal">
            {t('aboutSubtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 reveal">
            {t('aboutTitle')} <span className="text-gradient">{t('aboutSubtitle')}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 reveal reveal-delay-1">
            <div className="space-y-6">
              <p className="text-lg">
                {t('aboutParagraph1')}
              </p>
              <p className="text-muted-foreground">
                {t('aboutParagraph2')}
              </p>
              <p className="text-muted-foreground">
                {t('aboutParagraph3')}
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal reveal-delay-2">
            <GlassmorphicCard className="p-3 overflow-hidden">
              <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Творець проєкту" 
                  className="w-full h-full object-cover"
                />
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
