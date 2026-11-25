import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface CopyButtonProps {
  value: string;
}

const CopyButton = ({ value }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(t("copiedToast"));

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error(t("copyErrorToast"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? t("copiedBtn") : t("copyBtn")}
      className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-foreground text-xs font-medium transition-colors shrink-0"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-500" />
          <span>{t("copiedBtn")}</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          <span>{t("copyBtn")}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
