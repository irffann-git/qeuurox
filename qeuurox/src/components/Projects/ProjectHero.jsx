import React from 'react';

const ProjectHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050B14] py-20 overflow-hidden flex items-center">
      
      {/* ===== BACKGROUND TECH EFFECTS ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial glow behind the right image */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[130px]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_60%_50%,#000_60%,transparent_100%)] opacity-20"></div>
        
        {/* Faint diagonal tech line on the right */}
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent rotate-[25deg] origin-top-right"></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* ===== LEFT SIDE: TEXT & BUTTONS ===== */}
          <div className="flex flex-col items-start text-left">
            
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
                Our Work
              </span>
              <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] text-white mb-6 tracking-tight">
              Real Projects <br />
              <span className="text-[#3B82F6]">Real Impact</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Explore our latest work and see how we turn ideas into powerful digital solutions that drive growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* Primary Button */}
              <button className="group flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/30">
                LET'S DISCUSS YOUR PROJECT 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* ===== RIGHT SIDE: IMAGE & FLOATING LABELS ===== */}
          <div className="relative w-full flex justify-center items-center mt-12 lg:mt-0">
            
            {/* Main Image Area */}
            <div className="relative w-full max-w-4xl">
              {/* Glow behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[100px]"></div>
              
              {/* 
                ===== YOUR LAPTOP IMAGE GOES HERE ===== 
                Replace src with your actual image path.
              */}
              <img 
                src="/projectHero.png" 
                alt="Project Showcase" 
                className="relative z-10 w-full object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.2)]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectHero;