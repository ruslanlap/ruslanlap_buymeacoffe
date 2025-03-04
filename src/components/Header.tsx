import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Bug, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const Header = () => {
  const { t, language } = useLanguage();

  const formUrl = "https://forms.gle/TgwzmaFosrBJ5WsN8";

  const handleReportBug = () => {
    const message = language === "uk"
      ? "Дякуємо за повідомлення про помилку!"
      : "Thank you for reporting the bug!";
    toast.success(message);
    window.open(formUrl, "_blank", "noopener,noreferrer");
    return false;
  };

  const handleSuggestChange = () => {
    const message = language === "uk"
      ? "Дякуємо за вашу пропозицію!"
      : "Thank you for your suggestion!";
    toast.success(message);
    window.open(formUrl, "_blank", "noopener,noreferrer");
    return false;
  };

  return (
    <header className="w-full z-50 py-2 sm:py-3 px-3 sm:px-4 mobile-safe-area sticky top-0 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            <span className="hidden sm:inline text-sm font-medium">{t("reportBugButton")}</span>
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
            <span className="hidden sm:inline text-sm font-medium">{t("suggestChangeButton")}</span>
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