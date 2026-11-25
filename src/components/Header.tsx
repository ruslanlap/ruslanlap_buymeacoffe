import { Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import logoIcon from "../img/icon384.png";

const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-background/85 backdrop-blur-md border-b border-border/80">
      <div className="max-w-5xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2.5 group shrink-0"
        >
          <img
            src={logoIcon}
            alt={t("logoAlt")}
            className="w-7 h-7 rounded-md ring-1 ring-border"
          />
          <span className="font-semibold text-sm tracking-tight text-foreground">
            ruslanlap
          </span>
          <span className="hidden sm:inline font-mono text-xs text-muted-foreground">
            / svg-extractor
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm text-muted-foreground"
        >
          <button
            type="button"
            onClick={() => scrollToSection("donate")}
            className="hover:text-foreground transition-colors"
          >
            {t("navSupport")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("why-support")}
            className="hover:text-foreground transition-colors"
          >
            {t("navImpact")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("feedback")}
            className="hover:text-foreground transition-colors"
          >
            {t("navCommunity")}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="hover:text-foreground transition-colors"
          >
            {t("navAbout")}
          </button>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => scrollToSection("donate")}
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Coffee className="w-3.5 h-3.5" />
            <span>{t("headerSupportBtn")}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
