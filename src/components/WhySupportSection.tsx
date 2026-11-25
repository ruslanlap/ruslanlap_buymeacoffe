import { Layers, ShieldCheck, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhySupportSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      index: "01",
      tag: t("reason1Tag"),
      icon: <Terminal className="w-4 h-4" />,
      title: t("reasonProjectDevelopment"),
      description: t("reasonProjectDevelopmentDesc"),
    },
    {
      index: "02",
      tag: t("reason2Tag"),
      icon: <ShieldCheck className="w-4 h-4" />,
      title: t("reasonContentCreation"),
      description: t("reasonContentCreationDesc"),
    },
    {
      index: "03",
      tag: t("reason3Tag"),
      icon: <Layers className="w-4 h-4" />,
      title: t("reasonCreativitySupport"),
      description: t("reasonCreativitySupportDesc"),
    },
  ];

  return (
    <section
      id="why-support"
      className="py-16 sm:py-24 border-t border-border/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-12 space-y-3">
          <p className="font-mono text-xs tracking-wider text-primary uppercase">
            {t("whyKicker")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t("whySupportTitle")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t("whySupportSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-border bg-card divide-y md:divide-y-0 md:divide-x divide-border overflow-hidden">
          {items.map((item) => (
            <div key={item.index} className="p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.index} / {item.tag}
                </span>
                <div className="w-9 h-9 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-foreground">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-foreground pt-1">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySupportSection;
