import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Bug, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { t, language } = useLanguage();

  const formUrl = "https://forms.gle/TgwzmaFosrBJ5WsN8";

  const handleReportBug = () => {
    const message =
      language === "uk"
        ? "Дякуємо за повідомлення про помилку!"
        : "Thank you for reporting the bug!";
    toast.success(message);
    window.open(formUrl, "_blank", "noopener,noreferrer");
    return false;
  };

  const handleSuggestChange = () => {
    const message =
      language === "uk"
        ? "Дякуємо за вашу пропозицію!"
        : "Thank you for your suggestion!";
    toast.success(message);
    window.open(formUrl, "_blank", "noopener,noreferrer");
    return false;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToDonation = () => {
    const donateSection = document.getElementById("donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full z-50 sticky top-0 transition-all duration-500 mobile-safe-area ${
        scrolled
          ? "backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-border/40 shadow-saas-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6">
        {/* Left Section - Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Report Bug Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReportBug}
            className="h-10 w-10 sm:h-11 sm:w-auto sm:px-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={t("reportBugButton")}
          >
            <Bug className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" />
            <span className="hidden sm:inline text-sm font-medium">
              {t("reportBugButton")}
            </span>
          </Button>

          {/* Suggest Change Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSuggestChange}
            className="h-10 w-10 sm:h-11 sm:w-auto sm:px-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={t("suggestChangeButton")}
          >
            <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" />
            <span className="hidden sm:inline text-sm font-medium">
              {t("suggestChangeButton")}
            </span>
          </Button>
        </div>

        {/* Right Section - CTA + Toggles */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Primary CTA Button */}
          <Button
            onClick={scrollToDonation}
            className="hidden md:inline-flex h-11 px-6 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-secondary hover:shadow-glow-primary transition-all duration-300 hover:scale-105 text-white"
          >
            {t("heroButton") || "Get Started"}
          </Button>

          {/* Language Toggle */}
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-muted hover:scale-105">
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <div className="h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-muted hover:scale-105">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
