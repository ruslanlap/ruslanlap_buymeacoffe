
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

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < window.innerHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Add touch-friendly viewport meta tag
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    document.head.appendChild(meta);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Toast notifications */}
        <Toaster position="top-center" />
        
        {/* Background elements and animation */}
        <BackgroundElements />
        <AnimatedBackground />
        
        {/* Header with language and theme toggles */}
        <Header />
        
        {/* Page content */}
        <HeroSection />
        <WhySupportSection />
        <FeedbackSection />
        <Stars />
        <DonationOptions />
       
        <AboutSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
