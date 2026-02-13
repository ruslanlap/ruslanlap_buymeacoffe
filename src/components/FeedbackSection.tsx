import { Bug, Lightbulb } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const FeedbackCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  formUrl,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  formUrl: string;
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
      <div className="relative h-full p-6 bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
        style={{ WebkitBackdropFilter: 'blur(4px)' }}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`p-4 bg-gradient-to-r from-${buttonColor}-500/20 via-pink-500/20 to-${buttonColor}-500/20 rounded-full text-${buttonColor}-400 group-hover:from-${buttonColor}-500/30 group-hover:via-pink-500/30 group-hover:to-${buttonColor}-500/30 transition-all duration-300`}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button
            className={`bg-gradient-to-r from-${buttonColor}-500 via-pink-500 to-${buttonColor}-500 hover:from-${buttonColor}-600 hover:via-pink-600 hover:to-${buttonColor}-600 text-white hover:scale-105 transition-all duration-300`}
            onClick={() => window.open(formUrl, "_blank")}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const FeedbackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const bugFormUrl = "https://forms.gle/TYdupLT2yAHLWg4k7";
  const suggestionFormUrl = "https://forms.gle/TYdupLT2yAHLWg4k7";

  return (
    <section
      id="feedback"
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
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
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block text-purple-400 font-medium tracking-wide px-3 py-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full mb-4 backdrop-blur-sm"
          >
            {t("feedbackTitle")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-h1 mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              {t("feedbackTitle")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-body text-muted-foreground max-w-2xl mx-auto"
          >
            {t("feedbackSubtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeedbackCard
            icon={<Bug className="h-8 w-8" />}
            title={t("reportBugTitle")}
            description={t("reportBugDesc")}
            buttonText={t("reportBugButton")}
            buttonColor="red"
            formUrl={bugFormUrl}
            delay={0.8}
          />

          <FeedbackCard
            icon={<Lightbulb className="h-8 w-8" />}
            title={t("suggestChangeTitle")}
            description={t("suggestChangeDesc")}
            buttonText={t("suggestChangeButton")}
            buttonColor="amber"
            formUrl={suggestionFormUrl}
            delay={1}
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
