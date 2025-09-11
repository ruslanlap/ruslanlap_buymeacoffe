import { useEffect, useRef, useCallback } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Enhanced rendering settings for performance
    ctx.globalCompositeOperation = "multiply";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Initial size
    resizeCanvas();
    
    // Handle resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    window.addEventListener("resize", handleResize);

    // Create particles with performance optimization
    const particleCount = Math.min(40, Math.max(20, Math.floor(window.innerWidth / 40)));
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(canvas));
    }

    // Enhanced animation loop with better performance
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - timeRef.current;
      timeRef.current = currentTime;
      
      // Clear with fade effect for trailing
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(deltaTime);
        particle.draw(ctx, currentTime);
      });

      // Draw enhanced connections
      drawConnections(particlesRef.current, ctx, currentTime);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen min-w-screen min-h-screen z-0 opacity-25 mix-blend-soft-light"
      style={{ pointerEvents: "none" }}
    />
  );
};

// Enhanced Particle class with better performance and visuals
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  canvas: HTMLCanvasElement;
  baseColor: string;
  pulse: number;
  pulseSpeed: number;
  trail: Array<{x: number, y: number, alpha: number}>;
  maxTrail: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 2;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = (Math.random() - 0.5) * 0.8;
    
    // More varied colors
    const colors = [
      'rgba(139, 92, 246,', // purple-500
      'rgba(168, 85, 247,', // purple-400
      'rgba(192, 132, 252,', // purple-300
      'rgba(236, 72, 153,', // pink-500
    ];
    this.baseColor = colors[Math.floor(Math.random() * colors.length)];
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.trail = [];
    this.maxTrail = 8;
  }

  update(deltaTime: number = 16) {
    // Store previous position for trail
    this.trail.unshift({
      x: this.x,
      y: this.y,
      alpha: 1
    });
    
    if (this.trail.length > this.maxTrail) {
      this.trail.pop();
    }
    
    // Update trail alpha
    this.trail.forEach((point, index) => {
      point.alpha = 1 - (index / this.maxTrail);
    });

    // Movement with time-based animation
    const speed = deltaTime / 16;
    this.x += this.speedX * speed;
    this.y += this.speedY * speed;
    this.pulse += this.pulseSpeed * speed;

    // Enhanced boundary bouncing with slight randomness
    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX = -this.speedX * (0.95 + Math.random() * 0.1);
      this.x = Math.max(0, Math.min(this.canvas.width, this.x));
    }

    if (this.y > this.canvas.height || this.y < 0) {
      this.speedY = -this.speedY * (0.95 + Math.random() * 0.1);
      this.y = Math.max(0, Math.min(this.canvas.height, this.y));
    }
  }

  draw(ctx: CanvasRenderingContext2D, currentTime: number) {
    const pulseSize = this.size + Math.sin(this.pulse) * 0.5;
    const alpha = 0.6 + Math.sin(this.pulse) * 0.3;
    
    // Draw trail
    this.trail.forEach((point, index) => {
      if (index === 0) return; // Skip current position
      
      const trailSize = pulseSize * point.alpha * 0.7;
      const trailAlpha = alpha * point.alpha * 0.5;
      
      ctx.fillStyle = `${this.baseColor} ${trailAlpha})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw main particle with glow effect
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize * 2);
    gradient.addColorStop(0, `${this.baseColor} ${alpha})`);
    gradient.addColorStop(0.7, `${this.baseColor} ${alpha * 0.3})`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw core particle
    ctx.fillStyle = `${this.baseColor} ${alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Enhanced connections with better performance and visuals
function drawConnections(particles: Particle[], ctx: CanvasRenderingContext2D, currentTime: number) {
  const maxDistance = 180;
  const connections: Array<{a: Particle, b: Particle, distance: number}> = [];
  
  // First pass: find all valid connections
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        connections.push({
          a: particles[a],
          b: particles[b],
          distance
        });
      }
    }
  }
  
  // Sort by distance (draw closest connections first)
  connections.sort((a, b) => a.distance - b.distance);
  
  // Draw connections with enhanced visuals
  connections.slice(0, 15).forEach(({ a, b, distance }) => {
    const opacity = 0.15 * (1 - distance / maxDistance);
    const pulse = Math.sin(currentTime * 0.001 + distance * 0.01) * 0.3 + 0.7;
    
    // Create gradient line
    const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
    gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * pulse})`);
    gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * pulse * 1.2})`);
    gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity * pulse})`);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  });
}

export default AnimatedBackground;
