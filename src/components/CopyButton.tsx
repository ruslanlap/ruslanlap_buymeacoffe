import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface CopyButtonProps {
  value: string;
  displayValue?: string;
}

const CopyButton = ({ value, displayValue }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success("Скопійовано!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Помилка копіювання");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto border-2 backdrop-blur-sm"
      style={{
        borderColor: 'rgba(255,107,53,0.4)',
        background: 'rgba(255,107,53,0.1)',
        color: '#FF6B35'
      }}
      aria-label="Копіювати"
    >
      <span className="font-medium tracking-wide truncate">
        {displayValue || value}
      </span>
      {copied ? (
        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
      ) : (
        <Copy className="h-4 w-4 flex-shrink-0" style={{ color: '#FF6B35' }} />
      )}
    </motion.button>
  );
};

export default CopyButton;
