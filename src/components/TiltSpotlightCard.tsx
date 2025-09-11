import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightOpacity?: number; // 0..1
  maxTilt?: number; // degrees
}

const TiltSpotlightCard: React.FC<TiltSpotlightCardProps> = ({
  children,
  className,
  spotlightOpacity = 0.22,
  maxTilt = 8,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on devices without hover or with reduced motion
    const hoverCapable = window.matchMedia("(hover: hover)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setEnabled(hoverCapable && !reduced);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    setCoords({ x, y });
  };

  const transform = useMemo(() => {
    if (!enabled || !isHovering)
      return "perspective(900px) rotateX(0) rotateY(0)";
    const ry = (coords.x - 0.5) * (maxTilt * 2);
    const rx = -(coords.y - 0.5) * (maxTilt * 2);
    return `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  }, [coords, enabled, isHovering, maxTilt]);

  const spotlightStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: isHovering && enabled ? 1 : 0,
    transition: "opacity 200ms ease",
    background: `radial-gradient(300px circle at ${coords.x * 100}% ${coords.y * 100}%, rgba(168,85,247,${spotlightOpacity}), transparent 45%)`,
    mixBlendMode: "screen",
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMove}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.4 }}
      className={className}
    >
      {/* Spotlight overlay */}
      <div style={spotlightStyle} />
      {children}
    </motion.div>
  );
};

export default TiltSpotlightCard;
