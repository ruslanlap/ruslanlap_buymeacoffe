import { CreditCard, Landmark } from "lucide-react";
import { useEffect, useRef } from "react";
import CopyButton from "./CopyButton";
import GlassmorphicCard from "./GlassmorphicCard";
import { useLanguage } from "@/contexts/LanguageContext";
import qrCodeImage from "../img/monobank-qr-code.jpg";

const DonationOptions = () => {
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
      id="donate"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 relative"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-purple-500/10 rounded-full mb-4 reveal">
            {t('donationOptionsTitle')}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6 reveal">
            <span className="text-gradient">{t('donationOptionsTitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            {t('donationOptionsSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <GlassmorphicCard className="reveal reveal-delay-1">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400 self-center sm:self-start">
                <Landmark className="h-7 w-7" />
              </div>
              
              <div className="space-y-4 w-full">
                <h3 className="text-xl font-semibold text-center sm:text-left">{t('monobankTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('monobankDesc')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a 
                    href="https://send.monobank.ua/jar/ARJZzebAyX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 px-4 py-2 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto"
                  >
                    {t('supportViaMonobank')}
                  </a>
                  
                  <CopyButton 
                    value="4441111122838976" 
                    displayValue="4441 1111 2283 8976" 
                  />
                </div>
              </div>
            </div>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="reveal reveal-delay-2">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-full text-purple-400 self-center sm:self-start">
                <CreditCard className="h-7 w-7" />
              </div>
              
              <div className="space-y-4 w-full">
                <h3 className="text-xl font-semibold text-center sm:text-left">{t('paypalTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('paypalDesc')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a 
                    href="mailto:lapin@ucu.edu.ua" 
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 px-4 py-2 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto"
                  >
                    {t('supportViaPaypal')}
                  </a>
                  
                  <CopyButton 
                    value="lapin@ucu.edu.ua" 
                  />
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        <div className="mt-8 text-center reveal reveal-delay-3">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            {t('scanToDonate')}
          </h3>
          <img
            src={qrCodeImage}
            alt="QR Code for Monobank Donation"
            className="rounded-lg shadow-lg border border-purple-500/20"
          />
          <p className="text-muted-foreground mt-2">
            {t('qrCodeDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;