import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const GITHUB_URL = "https://github.com/ruslanlap";
const FIREFOX_ADDON_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/svg-extractor-pro/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";
const MONOBANK_JAR_URL = "https://send.monobank.ua/jar/ARJZzebAyX";

const AboutSection = () => {
  const { t } = useLanguage();

  const specs = [
    { label: t("specProjectLabel"), value: t("specProjectValue") },
    { label: t("specPlatformLabel"), value: t("specPlatformValue") },
    { label: t("specModelLabel"), value: t("specModelValue") },
    { label: t("specAuthorLabel"), value: t("specAuthorValue") },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-t border-border/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-wider text-primary uppercase">
                {t("aboutKicker")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                {t("aboutTitle")}
              </h2>
              <p className="text-base text-muted-foreground font-medium">
                {t("aboutSubtitle")}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              <p className="text-foreground/90">{t("aboutParagraph1")}</p>
              <p>{t("aboutParagraph2")}</p>
              <p>{t("aboutParagraph3")}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t("githubProfileBtn")}</span>
              </a>

              <a
                href={FIREFOX_ADDON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-medium transition-colors"
              >
                <span>{t("firefoxAddonBtn")}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Maker & Project Spec Sheet */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border bg-card overflow-visible">
              <span aria-hidden="true" className="anchor-node absolute -top-1 -left-1" />
              <span aria-hidden="true" className="anchor-node absolute -top-1 -right-1" />
              <span aria-hidden="true" className="anchor-node absolute -bottom-1 -left-1" />
              <span aria-hidden="true" className="anchor-node absolute -bottom-1 -right-1" />

              <div className="px-5 py-3 border-b border-border bg-muted/40 rounded-t-2xl font-mono text-[11px] text-muted-foreground flex items-center justify-between">
                <span>PROJECT DOSSIER</span>
                <span>v2.0</span>
              </div>

              <dl className="divide-y divide-border font-mono text-xs">
                {specs.map((row) => (
                  <div
                    key={row.label}
                    className="px-5 py-3.5 flex items-center justify-between gap-4"
                  >
                    <dt className="text-muted-foreground shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-foreground text-right truncate">
                      {row.value}
                    </dd>
                  </div>
                ))}
                <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground shrink-0">
                    {t("specJarLabel")}
                  </dt>
                  <dd className="text-right truncate">
                    <a
                      href={MONOBANK_JAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>send.monobank.ua</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
