import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center p-0.5 rounded-lg bg-muted border border-border"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 rounded-md font-mono text-xs font-medium transition-colors ${
          language === "en"
            ? "bg-card text-foreground shadow-studio-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("uk")}
        aria-pressed={language === "uk"}
        className={`px-2 py-1 rounded-md font-mono text-xs font-medium transition-colors ${
          language === "uk"
            ? "bg-card text-foreground shadow-studio-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        UA
      </button>
    </div>
  );
}
