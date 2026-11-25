import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import firefoxIcon from "/src/img/firefox.png";

const FIREFOX_REVIEW_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/svg-extractor-pro/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";

const Stars = () => {
  const { t } = useLanguage();
  const [hoverStar, setHoverStar] = useState<number | null>(null);
  const totalStars = 5;

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs tracking-wider text-primary uppercase">
          {t("communityKicker")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          {t("communityTitle")}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {t("communitySubtitle")}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 rounded-xl border border-border bg-muted/50 flex items-center justify-center shrink-0">
            <img
              src={firefoxIcon}
              alt="Firefox"
              className="w-7 h-7 object-contain"
            />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                {t("reviewsBadge")}
              </span>
              <div
                className="inline-flex items-center gap-1"
                onMouseLeave={() => setHoverStar(null)}
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: totalStars }, (_, idx) => {
                  const activeCount = hoverStar ?? totalStars;
                  const isActive = idx < activeCount;
                  return (
                    <a
                      key={idx}
                      href={FIREFOX_REVIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoverStar(idx + 1)}
                      aria-label={`Rate ${idx + 1} stars on Firefox Add-ons`}
                      className="p-0.5 transition-transform duration-150 hover:scale-110"
                    >
                      <Star
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? "text-accent fill-accent"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
              {t("reviewsTitle")}
            </h3>

            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              {t("reviewsDescription")}
            </p>
          </div>
        </div>

        <a
          href={FIREFOX_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-border bg-muted/50 hover:bg-muted text-foreground text-sm font-medium transition-colors shrink-0"
        >
          <span>{t("leaveReview")}</span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </a>
      </div>
    </div>
  );
};

export default Stars;
