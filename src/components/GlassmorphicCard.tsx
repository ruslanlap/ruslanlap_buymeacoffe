import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassmorphicCard = ({
  children,
  className,
  hoverEffect = true,
}: GlassmorphicCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "glass-card-hover",
        className
      )}
    >
      {/* Внутрішній градієнтний ефект */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

      {/* Блискуча верхня межа */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Вміст картки */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassmorphicCard;
