
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-lg font-medium mb-2">{t('footerThankYou')}</p>
          <p className="text-muted-foreground">
            {t('footerDescription')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} {t('footerRights')}
          </p>
          
          <div className="flex items-center gap-1 text-sm order-1 md:order-2">
  {t('footerCreatedWith')} <Heart className="h-4 w-4 text-purple-400 mx-1 animate-pulse" /> 
  <a 
    href="https://github.com/ruslanlap" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-purple-500 hover:text-purple-600 transition-colors underline underline-offset-2 font-medium"
  >
    {t('footerBy')}
  </a>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
