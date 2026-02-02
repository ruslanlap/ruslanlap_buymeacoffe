import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-16 sm:py-20 px-4 border-t border-border/30 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl sm:text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            {t("footerThankYou")}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("footerDescription")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} {t("footerRights")}
          </p>

          <div className="flex items-center gap-2 text-sm order-1 md:order-2">
            <span className="text-muted-foreground">{t("footerCreatedWith")}</span>
            <Heart className="h-4 w-4 text-primary mx-1 animate-pulse" />
            <a
              href="https://github.com/ruslanlap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-all duration-300 underline underline-offset-2 font-semibold hover:scale-105 inline-block"
            >
              {t("footerBy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
