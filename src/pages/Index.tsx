import AboutSection from "@/components/AboutSection";
import DonationOptions from "@/components/DonationOptions";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Stars from "@/components/Stars";
import WhySupportSection from "@/components/WhySupportSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <DonationOptions />
          <WhySupportSection />
          <section id="feedback" className="py-16 sm:py-24 border-t border-border/70">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
              <Stars />
              <FeedbackSection />
            </div>
          </section>
          <AboutSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
