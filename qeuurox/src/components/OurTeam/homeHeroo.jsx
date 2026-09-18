import React from "react";
import Lightfall from "@/components/Lightfall";

export default function OurHerooo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* =========================================
          LIGHTFALL BACKGROUND
      ========================================== */}
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={[
            "#380e77",
            "#071532",
            "#dacc0a",
            "#092448",
            "#fa002b",
          ]}
          backgroundColor="#000000"
          speed={2}
          streakCount={3}
          streakWidth={1.2}
          streakLength={1.1}
          density={0.5}
          twinkle={1}
          glow={0.8}
          backgroundGlow={0.6}
          zoom={1.8}
          opacity={1}
          mouseInteraction
          mouseStrength={0.3}
          mouseRadius={0.2}
        />
      </div>

      {/* =========================================
          DARK OVERLAY
          Makes the content easier to read
      ========================================== */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* =========================================
          HERO CONTENT
      ========================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* =====================================
              LEFT CONTENT
          ====================================== */}
          <div className="max-w-2xl">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-sm text-white/80">
                Digital Solutions & Development
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              We Build
              <span className="block text-cyan-400">
                Digital Experiences
              </span>

              That Matter.

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              We create modern, scalable and high-performance digital
              solutions that help businesses turn ideas into powerful
              digital products.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Primary Button */}
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-cyan-400
                  px-6
                  py-3.5
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:bg-cyan-300
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              >
                View Our Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  px-6
                  py-3.5
                  font-medium
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-cyan-400/50
                  hover:bg-white/10
                "
              >
                Let's Talk
              </a>

            </div>

            {/* Small Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">

              <div>
                <h3 className="text-2xl font-bold text-white">
                  20+
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  10+
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  100%
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Commitment
                </p>
              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE VISUAL
          ====================================== */}
          <div className="relative hidden min-h-[500px] lg:block">

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Main Glass Card */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                shadow-2xl
                backdrop-blur-xl
              "
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Our Approach
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Build. Scale. Grow.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <span className="text-xl text-cyan-400">
                    ✦
                  </span>
                </div>

              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Features */}
              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                    01
                  </div>

                  <div>
                    <h4 className="font-medium text-white">
                      Modern Technology
                    </h4>

                    <p className="text-sm text-white/40">
                      Scalable & reliable solutions
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                    02
                  </div>

                  <div>
                    <h4 className="font-medium text-white">
                      User Focused
                    </h4>

                    <p className="text-sm text-white/40">
                      Clean and intuitive experiences
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                    03
                  </div>

                  <div>
                    <h4 className="font-medium text-white">
                      Performance
                    </h4>

                    <p className="text-sm text-white/40">
                      Fast, optimized and responsive
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card 1 */}
            <div
              className="
                absolute
                right-0
                top-16
                rounded-2xl
                border
                border-white/10
                bg-white/[0.06]
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <p className="text-xs text-white/40">
                Development
              </p>

              <p className="mt-1 font-semibold text-cyan-400">
                Full Stack
              </p>
            </div>

            {/* Floating Card 2 */}
            <div
              className="
                absolute
                bottom-16
                left-0
                rounded-2xl
                border
                border-white/10
                bg-white/[0.06]
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <p className="text-xs text-white/40">
                Experience
              </p>

              <p className="mt-1 font-semibold text-white">
                Digital First
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================
          BOTTOM FADE
      ========================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}