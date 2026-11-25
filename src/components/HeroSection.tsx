import { ArrowDownRight, ArrowUpRight, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoHero from "../img/icon384.png";

const FIREFOX_ADDON_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/svg-extractor-pro/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToDonate = () => {
    const el = document.getElementById("donate");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Subtle architectural vector grid masked toward edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 vector-grid vector-grid-fade"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left column: Editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/80 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{t("heroBadge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.035em] leading-[1.08] text-foreground">
              {t("heroTitle")}{" "}
              <span className="text-muted-foreground font-normal">
                {t("heroTitleMuted")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={scrollToDonate}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Coffee className="w-4 h-4" />
                <span>{t("heroPrimaryCta")}</span>
                <ArrowDownRight className="w-4 h-4 opacity-70" />
              </button>

              <a
                href={FIREFOX_ADDON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-medium transition-colors"
              >
                <span>{t("heroSecondaryCta")}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>

            <div className="pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <span>• {t("heroStat1")}</span>
              <span>• {t("heroStat2")}</span>
              <span>• {t("heroStat3")}</span>
            </div>
          </motion.div>

          {/* Right column: Vector Specimen Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-border bg-card shadow-studio overflow-visible">
              {/* Vector corner anchor handles */}
              <span aria-hidden="true" className="anchor-node absolute -top-1 -left-1" />
              <span aria-hidden="true" className="anchor-node absolute -top-1 -right-1" />
              <span aria-hidden="true" className="anchor-node absolute -bottom-1 -left-1" />
              <span aria-hidden="true" className="anchor-node absolute -bottom-1 -right-1" />

              {/* Specimen Chrome Bar */}
              <div className="px-4 py-2.5 border-b border-border bg-muted/40 rounded-t-2xl flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                <span>svg-extractor-pro.svg</span>
                <span>240 × 160 px</span>
              </div>

              {/* Specimen Vector Canvas */}
              <div className="p-6 relative vector-grid flex items-center justify-center min-h-[236px]">
                <svg
                  viewBox="0 0 240 160"
                  className="w-full max-w-[260px] h-auto overflow-visible"
                  aria-hidden="true"
                >
                  {/* Control handle lines */}
                  <line
                    x1="28"
                    y1="126"
                    x2="76"
                    y2="34"
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="212"
                    y1="34"
                    x2="164"
                    y2="126"
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.45"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Cubic Bezier Path */}
                  <path
                    d="M 28 126 C 76 34, 164 126, 212 34"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.75"
                  />

                  {/* Control Handle Circles */}
                  <circle
                    cx="76"
                    cy="34"
                    r="3"
                    fill="hsl(var(--background))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="164"
                    cy="126"
                    r="3"
                    fill="hsl(var(--background))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                  />

                  {/* Endpoint Anchor Squares */}
                  <rect
                    x="24.5"
                    y="122.5"
                    width="7"
                    height="7"
                    fill="hsl(var(--primary))"
                  />
                  <rect
                    x="208.5"
                    y="30.5"
                    width="7"
                    height="7"
                    fill="hsl(var(--primary))"
                  />

                  {/* Coordinate annotations */}
                  <text
                    x="20"
                    y="144"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="9"
                    fontFamily="var(--font-mono)"
                  >
                    (28, 126)
                  </text>
                  <text
                    x="176"
                    y="22"
                    fill="hsl(var(--muted-foreground))"
                    fontSize="9"
                    fontFamily="var(--font-mono)"
                  >
                    (212, 34)
                  </text>
                </svg>

                {/* Centered Product Mark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-2 rounded-2xl bg-card/95 border border-border shadow-studio">
                    <img
                      src={logoHero}
                      alt={t("logoAlt")}
                      className="w-16 h-16 rounded-xl"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Specimen Status Footer */}
              <div className="px-4 py-2.5 border-t border-border bg-muted/30 rounded-b-2xl flex items-center justify-between font-mono text-[11px]">
                <span className="text-muted-foreground truncate">
                  {t("specimenLabel")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-primary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t("specimenStatus")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
