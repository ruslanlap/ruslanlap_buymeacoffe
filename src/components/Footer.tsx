import { useLanguage } from "@/contexts/LanguageContext";
import logoIcon from "../img/icon384.png";

const GITHUB_URL = "https://github.com/ruslanlap";
const FIREFOX_ADDON_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/svg-extractor-pro/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-md">
          <div className="flex items-center gap-2">
            <img
              src={logoIcon}
              alt={t("logoAlt")}
              className="w-5 h-5 rounded ring-1 ring-border"
            />
            <span className="font-mono text-xs font-medium text-foreground">
              ruslanlap / svg-extractor-pro
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t("footerDescription")}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} {t("footerRights")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground">
          <button
            type="button"
            onClick={() => scrollTo("donate")}
            className="hover:text-foreground transition-colors"
          >
            {t("footerSupportLink")}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("feedback")}
            className="hover:text-foreground transition-colors"
          >
            {t("footerFeedbackLink")}
          </button>
          <a
            href={FIREFOX_ADDON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Firefox Add-on
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
