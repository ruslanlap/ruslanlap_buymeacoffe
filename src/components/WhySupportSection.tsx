// WhySupportSection.tsx - Optimized
import { Heart, LightbulbIcon, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import TiltSpotlightCard from "@/components/TiltSpotlightCard";

interface SupportReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SupportReason = ({
  icon,
  title,
  description,
  delay,
}: SupportReasonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/8 to-primary/8 rounded-3xl blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <TiltSpotlightCard className="relative h-full p-8 bg-background/60 backdrop-blur-md border border-border/50 rounded-3xl hover:border-primary/30 hover:shadow-saas-lg transition-all duration-500 group-hover:bg-background/70"
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="flex flex-col items-center text-center space-y-5">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="p-5 bg-gradient-to-br from-primary/15 via-secondary/15 to-primary/15 rounded-2xl text-primary group-hover:from-primary/25 group-hover:via-secondary/25 group-hover:to-primary/25 group-hover:shadow-glow-primary transition-all duration-500"
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
            {description}
          </p>
        </div>
      </TiltSpotlightCard>
    </motion.div>
  );
};

const WhySupportSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  return (
    <section
      id="why-support"
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-32 px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold tracking-widest px-5 py-2.5 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full mb-6 backdrop-blur-md border border-primary/20 text-xs sm:text-sm uppercase shadow-saas"
          >
            {t("whySupportTitle")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              {t("whySupportTitle")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t("whySupportSubtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <SupportReason
            icon={<Rocket className="h-8 w-8" />}
            title={t("reasonProjectDevelopment")}
            description={t("reasonProjectDevelopmentDesc")}
            delay={0.8}
          />

          <SupportReason
            icon={<LightbulbIcon className="h-8 w-8" />}
            title={t("reasonContentCreation")}
            description={t("reasonContentCreationDesc")}
            delay={1}
          />

          <SupportReason
            icon={<Heart className="h-8 w-8" />}
            title={t("reasonCreativitySupport")}
            description={t("reasonCreativitySupportDesc")}
            delay={1.2}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySupportSection;
