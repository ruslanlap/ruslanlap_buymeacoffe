import { useTheme } from "next-themes";

const BackgroundElements = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Warm sunrise gradient circle at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[180px] -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(247,147,30,0.15) 0%, rgba(255,107,53,0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(247,147,30,0.08) 0%, rgba(255,107,53,0.05) 50%, transparent 70%)'
        }}
      />

      {/* Warm coral gradient circle at bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[150px] -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)'
        }}
      />

      {/* Teal accent gradient circle on the left */}
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(0,78,137,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0,78,137,0.06) 0%, transparent 70%)'
        }}
      />

      {/* Warm mesh gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,107,53,0.3) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Dark/light background */}
      <div className="absolute inset-0 bg-background -z-30" />
    </div>
  );
};

export default BackgroundElements;
