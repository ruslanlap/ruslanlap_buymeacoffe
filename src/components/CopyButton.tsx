import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

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
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 bg-secondary/50 hover:bg-secondary/80 px-3 py-2 rounded-lg transition-all duration-300 w-full sm:w-auto h-10"
      aria-label="Копіювати"
    >
      <span className="font-medium tracking-wide truncate">
        {displayValue || value}
      </span>
      {copied ? (
        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
      ) : (
        <Copy className="h-4 w-4 text-purple-300 flex-shrink-0" />
      )}
    </button>
  );
};

export default CopyButton;
