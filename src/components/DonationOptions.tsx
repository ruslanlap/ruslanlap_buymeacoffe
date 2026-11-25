import { ArrowUpRight, CreditCard, QrCode } from "lucide-react";
import CopyButton from "./CopyButton";
import { useLanguage } from "@/contexts/LanguageContext";
import qrCodeImage from "../img/monobank-qr-code.webp";

const MONOBANK_JAR_URL = "https://send.monobank.ua/jar/ARJZzebAyX";
const CARD_RAW = "4441111122838976";
const CARD_DISPLAY = "4441 1111 2283 8976";

const DonationOptions = () => {
  const { t } = useLanguage();

  const tiers = [t("tier1"), t("tier2"), t("tier3")];

  return (
    <section
      id="donate"
      className="py-16 sm:py-24 border-t border-border/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-12 space-y-3">
          <p className="font-mono text-xs tracking-wider text-primary uppercase">
            {t("donateKicker")}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {t("donateTitle")}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t("donateSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Primary Monobank Jar + Direct Card Transfer */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  <CreditCard className="w-3.5 h-3.5" />
                  {t("monoBadge")}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  UAH / USD / EUR
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                {t("monobankTitle")}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("monobankDesc")}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {tiers.map((tier) => (
                  <a
                    key={tier}
                    href={MONOBANK_JAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-muted text-xs font-medium text-foreground transition-colors"
                  >
                    {tier}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href={MONOBANK_JAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 px-5 rounded-xl bg-primary text-primary-foreground font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
              >
                <span>{t("supportViaMonobank")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="rounded-xl border border-border bg-muted/40 p-3.5 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-1">
                    {t("cardLabel")}
                  </p>
                  <p className="font-mono-tabular text-sm sm:text-base font-medium tracking-wider text-foreground select-all">
                    {CARD_DISPLAY}
                  </p>
                </div>
                <CopyButton value={CARD_RAW} />
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col items-center justify-between text-center gap-4">
            <div className="w-full flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-foreground font-medium font-sans text-sm">
                <QrCode className="w-4 h-4 text-primary" />
                {t("scanToDonate")}
              </span>
              <a
                href={MONOBANK_JAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <span>{t("openJarLink")}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={MONOBANK_JAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-[260px] rounded-xl overflow-hidden border border-border bg-[#7c529e] transition-transform duration-200 hover:-translate-y-0.5"
              aria-label={t("scanToDonate")}
            >
              <img
                src={qrCodeImage}
                alt="QR Code for Monobank Jar"
                className="w-full aspect-[4/3] object-cover object-top"
              />
            </a>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("qrCodeDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationOptions;
