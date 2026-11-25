import { ArrowUpRight, Bug, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FEEDBACK_FORM_URL = "https://forms.gle/TYdupLT2yAHLWg4k7";

const FeedbackSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      tag: t("reportBugTag"),
      icon: <Bug className="w-4 h-4 text-destructive" />,
      title: t("reportBugTitle"),
      description: t("reportBugDesc"),
      buttonText: t("reportBugButton"),
    },
    {
      tag: t("suggestChangeTag"),
      icon: <Lightbulb className="w-4 h-4 text-accent" />,
      title: t("suggestChangeTitle"),
      description: t("suggestChangeDesc"),
      buttonText: t("suggestChangeButton"),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {cards.map((card) => (
        <div
          key={card.tag}
          className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                {card.tag}
              </span>
              <div className="w-9 h-9 rounded-lg border border-border bg-muted/50 flex items-center justify-center">
                {card.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {card.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>

          <div>
            <a
              href={FEEDBACK_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-border bg-background hover:bg-muted text-foreground text-sm font-medium transition-colors"
            >
              <span>{card.buttonText}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackSection;
