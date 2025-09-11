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

  return (
    <header
      className={`w-full z-50 sticky top-0 transition-all duration-300 mobile-safe-area ${
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-border/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 sm:py-3 px-3 sm:px-4">
        {/* Left Section - Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Report Bug Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReportBug}
            className="h-10 w-10 sm:h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={t("reportBugButton")}
          >
            <Bug className="h-5 w-5 sm:mr-2" />
            <span className="hidden sm:inline text-sm font-medium">
              {t("reportBugButton")}
            </span>
          </Button>

          {/* Suggest Change Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSuggestChange}
            className="h-10 w-10 sm:h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={t("suggestChangeButton")}
          >
            <Lightbulb className="h-5 w-5 sm:mr-2" />
            <span className="hidden sm:inline text-sm font-medium">
              {t("suggestChangeButton")}
            </span>
          </Button>
        </div>

        {/* Right Section - Toggles */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Toggle */}
          <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
