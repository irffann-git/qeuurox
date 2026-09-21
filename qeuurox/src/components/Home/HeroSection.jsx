import React from "react";
import { motion } from "framer-motion";
import Galaxy from "../Galaxy";
import DepthText from "../DepthText";
import TextType from "../TextType";

// Paste your existing DepthText props here (this object wasn't in the code you sent)
const depthTextProps = {};

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#ddddd]">

      {/* GALAXY BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* CONTENT */}
      <div className="pointer-events-none relative z-10 flex w-full flex-col items-center justify-center gap-5 px-5 py-20 text-center sm:gap-6 sm:px-8 lg:gap-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex w-full max-w-[min(1400px,92vw)] flex-col items-center"
        >
          <DepthText text="Digital Solutions" {...depthTextProps} />
          <DepthText text="That Deliver Results" {...depthTextProps} />
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.56, ease: "easeOut" }}
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
    </section>
  );
}