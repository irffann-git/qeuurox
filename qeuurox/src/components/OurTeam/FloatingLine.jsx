import React from "react";
import FloatingLines from "./FloatingLines";

export default function FloatingLinesSection() {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-[#020B1D]">

      {/* =========================================
          FLOATING LINES BACKGROUND
      ========================================== */}
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive
          parallax={true}
          animationSpeed={1}
          gradientStart="#3b82f6"
          gradientMid="#7c3aed"
          gradientEnd="#a855f7"
        />
      </div>

      {/* =========================================
          DARK OVERLAY
      ========================================== */}
      <div className="absolute inset-0 z-[1] bg-[#020B1D]/45" />

      {/* =========================================
          CONTENT
      ========================================== */}
      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">

          {/* Small Label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">

            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />

            <span className="text-sm font-medium text-white/70">
              Technology & Innovation
            </span>

          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

            We Build
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            From powerful web applications to scalable digital products,
            we combine modern technology, creative design and engineering
            to build experiences that move businesses forward.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-3.5
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
              "
            >
              Explore Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/5
                px-7
                py-3.5
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/50
                hover:bg-white/10
              "
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>

      {/* =========================================
          BOTTOM FADE
      ========================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-40 bg-gradient-to-t from-[#020B1D] to-transparent" />

    </section>
  );
}