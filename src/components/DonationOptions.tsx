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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <TiltSpotlightCard className="relative p-6 bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full text-purple-400 self-center sm:self-start group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300"
          >
            {icon}
          </motion.div>

          <div className="space-y-4 w-full">
            <h3 className="text-xl font-semibold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              {title}
            </h3>
            <p className="text-muted-foreground">{description}</p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="gradient-border rounded-lg w-full sm:w-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gb-inner inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 w-full sm:w-auto text-white"
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
        className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent"
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
            className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full mb-4 backdrop-blur-sm"
          >
            {t("donationOptionsTitle")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
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
          className="mt-8 text-center"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            {t("scanToDonate")}
          </h3>
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <img
              src={qrCodeImage}
              alt="QR Code for Monobank Donation"
              className="rounded-lg shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            />
          </motion.div>
          <p className="text-muted-foreground mt-2">{t("qrCodeDescription")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationOptions;
