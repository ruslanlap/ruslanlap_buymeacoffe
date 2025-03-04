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

interface IndexProps {
  // Якщо вам потрібні пропси, додайте їх тут (наприклад, jsx?: string | boolean)
}

const Index: React.FC<IndexProps> = () => {
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

    // Додати дебонсинг для оптимізації продуктивності
    const debouncedHandleScroll = debounce(handleScroll, 100); // Дебонсинг на 100мс
    window.addEventListener("scroll", debouncedHandleScroll);

    // Initial check
    handleScroll();

    // Краще додати мета-тег viewport у index.html або vite.config.ts
    // const meta = document.createElement('meta');
    // meta.name = 'viewport';
    // meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    // document.head.appendChild(meta);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      // document.head.removeChild(meta); // Видалено, оскільки мета-тег краще додати статично
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
        <HeroSection /> {/* Переконайтеся, що тут немає некоректних пропсів */}
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

// Допоміжна функція debounce для оптимізації обробника прокрутки
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Index;