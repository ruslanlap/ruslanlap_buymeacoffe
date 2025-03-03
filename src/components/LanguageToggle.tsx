
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "uk" ? "en" : "uk");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="rounded-full bg-secondary/50 px-3 py-2 hover:bg-secondary/80 text-sm font-medium"
      aria-label="Toggle language"
    >
      {language === "uk" ? "EN" : "UA"}
    </Button>
  );
}
