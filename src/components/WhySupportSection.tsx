
import { Heart, LightbulbIcon, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import GlassmorphicCard from "./GlassmorphicCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface SupportReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delayClass: string;
}

const SupportReason = ({ icon, title, description, delayClass }: SupportReasonProps) => {
  return (
    <GlassmorphicCard className={`h-full reveal ${delayClass}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-purple-500/20 rounded-full text-purple-400">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </GlassmorphicCard>
  );
};

const WhySupportSection = () => {
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
      id="why-support"
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-purple-500/10 rounded-full mb-4 reveal">
            {t('whySupportTitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 reveal">
            {t('whySupportTitle')} <span className="text-gradient">{t('whySupportTitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            {t('whySupportSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <SupportReason
            icon={<Rocket className="h-8 w-8" />}
            title={t('reasonProjectDevelopment')}
            description={t('reasonProjectDevelopmentDesc')}
            delayClass="reveal-delay-1"
          />
          
          <SupportReason
            icon={<LightbulbIcon className="h-8 w-8" />}
            title={t('reasonContentCreation')}
            description={t('reasonContentCreationDesc')}
            delayClass="reveal-delay-2"
          />
          
          <SupportReason
            icon={<Heart className="h-8 w-8" />}
            title={t('reasonCreativitySupport')}
            description={t('reasonCreativitySupportDesc')}
            delayClass="reveal-delay-3"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySupportSection;
