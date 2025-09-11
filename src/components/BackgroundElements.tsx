import { useTheme } from "next-themes";

const BackgroundElements = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Main gradient circle */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] ${isDark ? "bg-purple-500/10" : "bg-purple-500/5"} rounded-full blur-[150px] -z-10`}
      />

      {/* Additional gradient circle at bottom */}
      <div
        className={`absolute bottom-0 right-0 w-[600px] h-[600px] ${isDark ? "bg-purple-600/10" : "bg-purple-600/5"} rounded-full blur-[120px] -z-10`}
      />

      {/* Accent gradient circle on the left */}
      <div
        className={`absolute top-1/3 left-0 w-[400px] h-[400px] ${isDark ? "bg-accent/10" : "bg-accent/5"} rounded-full blur-[100px] -z-10`}
      />

      {/* Subtle texture overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Dark/light background */}
      <div className="absolute inset-0 bg-background -z-30" />
    </div>
  );
};

export default BackgroundElements;
