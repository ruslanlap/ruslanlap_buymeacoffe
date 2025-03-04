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
    const message = language === 'uk'
      ? "Дякуємо за повідомлення про помилку!"
      : "Thank you for reporting the bug!";
    toast.success(message);
    window.open(formUrl, '_blank', 'noopener,noreferrer');
    return false;
  };
  
  const handleSuggestChange = () => {
    const message = language === 'uk'
      ? "Дякуємо за вашу пропозицію!"
      : "Thank you for your suggestion!";
    toast.success(message);
    window.open(formUrl, '_blank', 'noopener,noreferrer');
    return false;
  };
  
  return (
    <header className="w-full z-50 py-2 sm:py-3 px-3 sm:px-4 bg-background/95 backdrop-blur-sm border-b border-border/30 mobile-safe-area sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Ліва частина з кнопками */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReportBug}
            className="h-9 w-9 sm:h-10 sm:w-auto sm:px-3 rounded-full sm:rounded-lg transition-all duration-200 active:scale-95 touch-manipulation"
            aria-label={t('reportBugButton')}
          >
            <Bug className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline text-xs sm:text-sm">{t('reportBugButton')}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSuggestChange}
            className="h-9 w-9 sm:h-10 sm:w-auto sm:px-3 rounded-full  transition-all duration-200 active:scale-95 "
            aria-label={t('suggestChangeButton')}
          >
            <Lightbulb className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline text-xs sm:text-sm">{t('suggestChangeButton')}</span>
          </Button>
        </div>
        
        {/* Права частина з перемикачами теми та мови */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center">
            <LanguageToggle />
          </div>
          
          <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;