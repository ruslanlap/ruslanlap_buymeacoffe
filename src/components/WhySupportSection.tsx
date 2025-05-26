// WhySupportSection.tsx - Optimized
import { Heart, LightbulbIcon, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface SupportReasonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SupportReason = ({ icon, title, description, delay }: SupportReasonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative h-full p-6 bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full text-purple-400 group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300"
          >
            {icon}
          </motion.div>
          <h3 className="text-h3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            {title}
          </h3>
          <p className="text-body text-muted-foreground line-clamp-3 sm:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
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
      className="py-16 sm:py-20 px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full mb-4 backdrop-blur-sm"
          >
            {t('whySupportTitle')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-h1 mb-4 sm:mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              {t('whySupportTitle')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            {t('whySupportSubtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <SupportReason
            icon={<Rocket className="h-8 w-8" />}
            title={t('reasonProjectDevelopment')}
            description={t('reasonProjectDevelopmentDesc')}
            delay={0.8}
          />

          <SupportReason
            icon={<LightbulbIcon className="h-8 w-8" />}
            title={t('reasonContentCreation')}
            description={t('reasonContentCreationDesc')}
            delay={1}
          />

          <SupportReason
            icon={<Heart className="h-8 w-8" />}
            title={t('reasonCreativitySupport')}
            description={t('reasonCreativitySupportDesc')}
            delay={1.2}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySupportSection;