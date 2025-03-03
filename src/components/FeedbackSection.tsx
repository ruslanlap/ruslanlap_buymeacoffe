
import { Bug, Lightbulb } from "lucide-react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GlassmorphicCard from "./GlassmorphicCard";
import { useLanguage } from "@/contexts/LanguageContext";

const FeedbackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const bugFormUrl = "https://forms.google.com/"; // Replace with your actual Google Form URL
  const suggestionFormUrl = "https://forms.google.com/"; // Replace with your actual Google Form URL
  
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
      id="feedback"
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassmorphicCard className="reveal">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-4 bg-red-500/20 rounded-full text-red-400">
                <Bug className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">{t('reportBugTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('reportBugDesc')}</p>
              <Button 
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => window.open(bugFormUrl, '_blank')}
              >
                {t('reportBugButton')}
              </Button>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="reveal reveal-delay-1">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <div className="p-4 bg-amber-500/20 rounded-full text-amber-400">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold">{t('suggestChangeTitle')}</h3>
              <p className="text-muted-foreground mb-4">{t('suggestChangeDesc')}</p>
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => window.open(suggestionFormUrl, '_blank')}
              >
                {t('suggestChangeButton')}
              </Button>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
