import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Bug, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t, language } = useLanguage(); // Отримайте функцію t і поточну мову
  
  const formUrl = "https://forms.gle/TgwzmaFosrBJ5WsN8";
  
  const handleReportBug = () => {
    // Переклад повідомлення в залежності від мови
    const message = language === 'uk'
      ? "Дякуємо за повідомлення про помилку!"
      : "Thank you for reporting the bug!";
    toast.success(message);
    // Відкриття форми більше не потрібне тут, бо тепер використовуємо посилання
  };
  
  const handleSuggestChange = () => {
    // Переклад повідомлення в залежності від мови
    const message = language === 'uk'
      ? "Дякуємо за вашу пропозицію!"
      : "Thank you for your suggestion!";
    toast.success(message);
    // Відкриття форми більше не потрібне тут, бо тепер використовуємо посилання
  };
  
  return (
    <header className="w-full z-50 py-3 px-4 bg-background border-b border-border/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a 
            href={formUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={handleReportBug}
              className="gap-2"
            >
              <Bug className="h-4 w-4" />
              <span className="hidden sm:inline">{t('reportBugButton')}</span>
            </Button>
          </a>
          
          <a 
            href={formUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={handleSuggestChange}
              className="gap-2"
            >
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">{t('suggestChangeButton')}</span>
            </Button>
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;