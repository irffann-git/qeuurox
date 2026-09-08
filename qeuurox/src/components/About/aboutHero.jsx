import React from "react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02050a] text-white">

      {/* =========================================
          BACKGROUND ATMOSPHERE
      ========================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,255,0.08),transparent_35%)]" />
      <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.04] blur-[150px]" />


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

            <div className="mb-6 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-500">
                WHO WE ARE
              </span>
              <span className="h-[1px] w-10 bg-blue-500" />
            </div>

            <h1
              className="
                text-[48px]
                font-medium
                uppercase
                leading-[1.06]
                tracking-[-0.035em]
                sm:text-[58px]
                md:text-[64px]
                lg:text-[67px]
                xl:text-[72px]
              "
            >
              WE TURN
              <br />
              COMPLEX IDEAS
              <br />
              INTO{" "}
              <span className="text-blue-500">DIGITAL</span>
              <br />
              <span className="text-blue-500">PRODUCTS.</span>
            </h1>

            <p
              className="
                mt-8
                max-w-[470px]
                text-sm
                leading-7
                text-zinc-400
                sm:text-[15px]
              "
            >
              At qeuurox, we blend creativity, technology
              and strategy to build digital solutions that
              help businesses grow, scale and lead.
            </p>

            <div className="mt-9">
              <a
                href="#story"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  border
                  border-blue-600
                  bg-blue-600/[0.03]
                  px-6
                  py-3.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-blue-500
                  transition-all
                  duration-300
                  hover:bg-blue-600
                  hover:text-white
                  hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]
                "
              >
                DISCOVER OUR STORY
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

          </div>

          {/* =====================================
              RIGHT Q VISUAL + BLUE GLOW BEHIND
          ====================================== */}
          <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">

            {/* ----- BLUE GLOW (behind the image) ----- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="
                  h-[250px] w-[250px]
                  sm:h-[350px] sm:w-[350px]
                  md:h-[420px] md:w-[420px]
                  lg:h-[500px] lg:w-[500px]
                  xl:h-[600px] xl:w-[600px]
                  rounded-full
                  bg-blue-900/20
                  blur-[120px]
                "
              />
            </div>

            {/* ----- YOUR TRANSPARENT PNG ----- */}
            <img
              src="/aboutHero.png"
              alt="QEUUROX 3D Logo"
              className="
                relative
                z-10
                w-[360px]
                sm:w-[450px]
                md:w-[500px]
                lg:w-[560px]
                xl:w-[650px]
                max-w-none
                object-contain
                animate-q-float
              "
            />
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