import { CreditCard, Landmark } from "lucide-react";
import { useRef } from "react";
import CopyButton from "./CopyButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import TiltSpotlightCard from "@/components/TiltSpotlightCard";
import qrCodeImage from "../img/monobank-qr-code.webp";

const DonationCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonUrl,
  copyValue,
  copyDisplayValue,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  copyValue: string;
  copyDisplayValue?: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(247,147,30,0.15) 100%)'
        }}
      />
      <TiltSpotlightCard className="relative p-8 bg-background/80 backdrop-blur-sm border-2 rounded-3xl transition-all duration-300"
        style={{
          borderColor: 'rgba(255,107,53,0.2)'
        }}
      >
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-5 rounded-2xl self-center sm:self-start transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(247,147,30,0.25) 100%)',
              color: '#FF6B35'
            }}
          >
            {icon}
          </motion.div>

          <div className="space-y-4 w-full">
            <h3
              className="text-2xl font-bold text-center sm:text-left"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(120deg, #FF6B35 0%, #F7931E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <div className="gradient-border rounded-xl w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gb-inner inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto text-white shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                  }}
                >
                  {buttonText}
                </motion.a>
              </div>

              <CopyButton value={copyValue} displayValue={copyDisplayValue} />
            </div>
          </div>
        </div>
      </TiltSpotlightCard>
    </motion.div>
  );
};

const DonationOptions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  return (
    <section
      id="donate"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,107,53,0.05) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block font-semibold tracking-wider px-4 py-2 rounded-full mb-4 backdrop-blur-sm border-2 uppercase text-sm"
            style={{
              color: '#FF6B35',
              background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(247,147,30,0.15) 100%)',
              borderColor: 'rgba(255,107,53,0.3)'
            }}
          >
            {t("donationOptionsTitle")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="text-gradient">
              {t("donationOptionsTitle")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t("donationOptionsSubtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <DonationCard
            icon={<Landmark className="h-7 w-7" />}
            title={t("monobankTitle")}
            description={t("monobankDesc")}
            buttonText={t("supportViaMonobank")}
            buttonUrl="https://send.monobank.ua/jar/ARJZzebAyX"
            copyValue="4441111122838976"
            copyDisplayValue="4441 1111 2283 8976"
            delay={0.8}
          />

          <DonationCard
            icon={<CreditCard className="h-7 w-7" />}
            title={t("paypalTitle")}
            description={t("paypalDesc")}
            buttonText={t("supportViaPaypal")}
            buttonUrl="mailto:lapin@ucu.edu.ua"
            copyValue="lapin@ucu.edu.ua"
            delay={1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#FF6B35'
            }}
          >
            {t("scanToDonate")}
          </h3>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="inline-block"
          >
            <img
              src={qrCodeImage}
              alt="QR Code for Monobank Donation"
              className="rounded-2xl shadow-2xl border-2 transition-all duration-300"
              style={{
                borderColor: 'rgba(255,107,53,0.3)'
              }}
            />
          </motion.div>
          <p className="text-muted-foreground mt-4 text-base">{t("qrCodeDescription")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationOptions;
