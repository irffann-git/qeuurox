/**
 * @name: FlowField
 * @description: Canvas particle flow field background — organic noise-driven streams of glowing light.
 * @version: 1.0.0
 * @author: @dorian_baffier
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 *
 * JavaScript (JSX) port.
 * If you use framer-motion v11 or older, change the import below to:
 *   import { motion } from "framer-motion";
 */

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import DepthText from "../DepthText";
import TextType from "../TextType";


// ─── Utils ────────────────────────────────────────────────────────────────────

// Tiny class-name joiner (drop this and import your own `cn` if you have one)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PARTICLE_COUNTS = {
  sparse: 600,
  medium: 1200,
  dense: 2000,
};

const THEMES = {
  aurora: {
    hueStart: 120,
    hueRange: 200,
    saturation: 90,
    lightness: 62,
    bg: "5, 5, 8",
    trailAlpha: 0.06,
  },
  ember: {
    hueStart: 0,
    hueRange: 55,
    saturation: 95,
    lightness: 58,
    bg: "8, 4, 2",
    trailAlpha: 0.07,
  },
  ocean: {
    hueStart: 180,
    hueRange: 90,
    saturation: 88,
    lightness: 60,
    bg: "2, 6, 10",
    trailAlpha: 0.06,
  },
};

// ─── Noise / vector-field ─────────────────────────────────────────────────────

/**
 * Smooth organic 2D noise via a multi-octave trigonometric series.
 * Returns an angle in radians that evolves continuously with time `t`.
 */
function fieldAngle(x, y, t) {
  const s = 0.0025;
  return (
    Math.sin(x * s + t * 0.0007) * Math.PI +
    Math.cos(y * s + t * 0.0005) * Math.PI +
    Math.sin((x + y) * s * 0.6 + t * 0.0009) * Math.PI * 0.6 +
    Math.cos((x - y) * s * 0.4 + t * 0.0006) * Math.PI * 0.4
  );
}

// ─── Default hero content ─────────────────────────────────────────────────────

function DefaultContent() {
  // Single source of truth for the headline size: scales down to ~1.75rem on
  // 320px screens and caps at 6.25rem on large displays.
  const headlineSize = "clamp(1.75rem, 7vw, 6.25rem)";

  // Shared DepthText config so both lines stay perfectly in sync.
  const depthTextProps = {
    layers: 40,
    depth: 2.8,
    faceColor: "#dfe3ed",
    depthColor: "#000000",
    tilt: 10,
    pointerTracking: true,
    smoothing: 0.12,
    perspective: 900,
    autoOrbit: true,
    orbitSpeed: 0.3,
    fontSize: headlineSize,
    fontWeight: 700,
    shadow: true,
  };

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 px-5 text-center sm:gap-6 sm:px-8 lg:gap-8 lg:px-10">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-[min(1400px,92vw)] flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <DepthText text="Digital Solutions" {...depthTextProps} />
        <DepthText text="That Deliver Results" {...depthTextProps} />
      </motion.div>

     <motion.div
  animate={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 16 }}
  transition={{
    duration: 0.9,
    delay: 0.56,
    ease: "easeOut",
  }}
  className="mx-auto max-w-[60ch]"
>
<TextType
  text="We turn ideas into powerful digital products that help businesses grow, scale, and succeed."
  typingSpeed={30}
  pauseDuration={3000}
  loop={false}
  showCursor={true}
  cursorCharacter="|"
  cursorClassName="text-emerald-300"
  className="text-[clamp(0.9rem,1.4vw,1.25rem)] leading-relaxed text-white/70"
/>
</motion.div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FlowaField({
  className,
  children,
  theme = "aurora",
  density = "medium",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cfg = THEMES[theme];
    const count = PARTICLE_COUNTS[density];
    const dpr = window.devicePixelRatio ?? 1;

    let width = 0;
    let height = 0;
    let animId = 0;
    let time = 0;
    let particles = [];

    const spawnParticle = () => {
      const maxLife = 200 + Math.floor(Math.random() * 300);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 1.1 + Math.random() * 1.8,
        hue: cfg.hueStart + Math.random() * cfg.hueRange,
        life: Math.floor(Math.random() * maxLife),
        maxLife,
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Fill dark base on resize
      ctx.fillStyle = `rgb(${cfg.bg})`;
      ctx.fillRect(0, 0, width, height);

      // Re-seed particles spread across the canvas
      particles = Array.from({ length: count }, spawnParticle);
    };

    const render = () => {
      time++;

      // Fade previous frame — each dot persists ~16 frames, creating soft trails
      ctx.fillStyle = `rgba(${cfg.bg}, ${cfg.trailAlpha})`;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, time);

        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        // Respawn aged-out particles at a random position
        if (p.life > p.maxLife) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 0;
          p.hue = cfg.hueStart + Math.random() * cfg.hueRange;
          continue;
        }

        // Wrap edges
        if (p.x < 0) p.x += width;
        else if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        else if (p.y > height) p.y -= height;

        // Fade in / out over particle lifetime
        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(progress * 8, 1);
        const fadeOut = Math.min((1 - progress) * 6, 1);
        const alpha = fadeIn * fadeOut * 0.9;

        // Hue shifts subtly with field direction for color variety
        const hueMod = (p.hue + (angle / (Math.PI * 2)) * 70 + 360) % 360;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hueMod}, ${cfg.saturation}%, ${cfg.lightness}%, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [theme, density]);

  const bgColor = THEMES[theme].bg;

 return (
  <div
    className={cn(
      "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
      className
    )}
    style={{ background: `rgb(${bgColor})` }}
  >
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      ref={canvasRef}
    />

    {/* Radial vignette — focuses center, dims edges */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(
          ellipse 65% 60% at 50% 50%,
          transparent 20%,
          rgba(${bgColor}, 0.92) 100%
        )`,
      }}
    />

    {/* Soft top fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-40"
      style={{
        background: `linear-gradient(
          to bottom,
          rgb(${bgColor}),
          transparent
        )`,
      }}
    />

    {/* Soft bottom fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
      style={{
        background: `linear-gradient(
          to top,
          rgb(${bgColor}),
          transparent
        )`,
      }}
    />

    {/* Content */}
    {children ?? <DefaultContent />}
  </div>
);
}