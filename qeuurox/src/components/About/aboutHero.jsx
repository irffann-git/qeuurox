import React from "react";
// import SideRays from "../SideRays";
import BlurText from "../BlurText";
import TextType from "../TextType";
import { motion } from "motion/react";
import SpecularButton from '../SpecularButton';
import LightRays from '../LightRays';
const headingClass =
  "text-[48px] font-medium uppercase leading-[1.06] tracking-[-0.035em] sm:text-[58px] md:text-[64px] lg:text-[67px] xl:text-[72px]";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white border-b border-blue-500/70 shadow-[0_1px_25px_rgba(59,130,246,0.55)]">

      {/* =========================================
          SIDE RAYS WEBGL EFFECT
      ========================================== */}
      <div className="absolute inset-0 z-[1]">
        {/* <SideRays
          origin="top-right"
          rayColor1="#2563eb"
          rayColor2="#60a5fa"
          intensity={2}
          spread={2.2}
          speed={1.8}
          tilt={0}
          saturation={1.4}
          blend={0.7}
          falloff={1.6}
          opacity={0.85}
        /> */}

        <LightRays
          raysOrigin="bottom-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.4}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.2}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.05}
          distortion={0.05}
          
        />
      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 py-24 lg:px-10 xl:px-16">

        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[120px_0.9fr_1.25fr]">

          {/* =====================================
              VERTICAL ABOUT
          ====================================== */}
          <div className="hidden h-[620px] items-center justify-center lg:flex">
            <div
              className="select-none text-[170px] font-dark uppercase leading-none tracking-[-0.02em] pl-19 text-transparent [-webkit-text-stroke:1px_rgba(59,130,246,0.25)]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              ABOUT
            </div>
          </div>

          {/* =====================================
              TEXT CONTENT
          ====================================== */}
          <div className="relative z-20 max-w-[620px]">

            <div className=" flex items-center gap-3">
              
              <motion.div
  animate={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 16 }}
  transition={{
    duration: 0.9,
    delay: 0.56,
    ease: "easeOut",
  }}
  // className="mx-auto max-w-[60ch]"
>
<TextType
  text="WHO WE ARE"
  typingSpeed={30}
  pauseDuration={3000}
  loop={false}
  showCursor={true}
  cursorCharacter="|"
  cursorClassName="text-emerald-300"
  className="text-[1rem] leading-relaxed text-blue-500"
/>
</motion.div>
            </div>

            <div>
              <BlurText
                text="WE TURN"
                className={headingClass}
                animateBy="words"
                direction="top"
                delay={80}
              />
              <BlurText
                text="COMPLEX IDEAS"
                className={headingClass}
                animateBy="words"
                direction="top"
                delay={80}
              />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <BlurText
                  text="INTO"
                  className={headingClass}
                  animateBy="words"
                  direction="top"
                  delay={80}
                />
                <BlurText
                  text="DIGITAL"
                  className={`${headingClass} text-blue-500`}
                  animateBy="words"
                  direction="top"
                  delay={80}
                />
              </div>
              <BlurText
                text="PRODUCTS."
                className={`${headingClass} text-blue-500`}
                animateBy="words"
                direction="top"
                delay={80}
              />
            </div>

            
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
  text="At qeuurox, we blend creativity, technology and strategy to build digital solutions that help businesses grow, scale and lead."
  typingSpeed={30}
  pauseDuration={3000}
  loop={false}
  showCursor={true}
  cursorCharacter="|"
  cursorClassName="text-emerald-300"
  className="text-[clamp(0.9rem,1.4vw,1.25rem)] leading-relaxed text-white/70"
/>
</motion.div>

              <div className="mt-9">
              <SpecularButton
                size="lg"
                radius={4}
                lineColor="#3b82f6"
                baseColor="#0cc6f5"
                textColor="#1e5dbd"
                intensity={1.2}
                onClick={() => {
                  document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="uppercase tracking-[0.15em] !text-[11px] font-semibold border border-blue-600"
              >
                DISCOVER OUR STORY →
              </SpecularButton>
            </div>


          </div>

        </div>

      </div>

      {/* =========================================
          FOLLOW US
      ========================================== */}
      <div
        className="
          absolute
          right-6
          top-1/2
          z-30
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-5
          lg:flex
        "
      >
        <span
          className="
            rotate-90
            whitespace-nowrap
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-zinc-500
          "
        >
          FOLLOW US
        </span>
        <div className="h-16 w-px bg-zinc-800" />
        <a href="#" className="text-sm text-zinc-400 transition hover:text-blue-500">in</a>
        <a href="#" className="text-sm text-zinc-400 transition hover:text-blue-500">𝕏</a>
        <a href="#" className="text-lg text-zinc-400 transition hover:text-blue-500">◎</a>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <div
        className="
          absolute
          bottom-8
          right-7
          z-30
          hidden
          flex-col
          items-center
          gap-3
          lg:flex
        "
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">SCROLL</span>
      </div>

    </section>
  );
};

export default AboutHero;