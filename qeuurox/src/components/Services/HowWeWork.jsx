import React from 'react';

// ===== DATA FOR THE PROCESS STEPS =====
const processSteps = [
  {
    id: "01",
    title: "DISCUSS",
    desc: "We understand your requirements and goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-9 md:h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "PLAN",
    desc: "We create a strategic roadmap for success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-9 md:h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "DEVELOP",
    desc: "We build with precision and best practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-9 md:h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "DELIVER",
    desc: "We launch and support your growth journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-9 md:h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const HowWeWork = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050B14] py-24 overflow-hidden flex flex-col items-center justify-center">
      
      {/* ===== BACKGROUND TECH EFFECTS (Sharp Diagonal Lines) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left side glowing lines */}
        <div className="absolute -left-[100px] top-0 w-[1px] h-[800px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent rotate-[35deg] origin-top-left"></div>
        <div className="absolute -left-[50px] top-0 w-[1px] h-[700px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent rotate-[35deg] origin-top-left"></div>
        <div className="absolute left-[50px] top-0 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent rotate-[35deg] origin-top-left"></div>
        
        {/* Right side glowing lines */}
        <div className="absolute -right-[100px] top-0 w-[1px] h-[800px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent -rotate-[35deg] origin-top-right"></div>
        <div className="absolute -right-[50px] top-0 w-[1px] h-[700px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -rotate-[35deg] origin-top-right"></div>
        <div className="absolute right-[50px] top-0 w-[1px] h-[500px] bg-gradient-to-b from-transparent via-blue-500/10 to-transparent -rotate-[35deg] origin-top-right"></div>

        {/* Subtle central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      {/* ===== HEADER SECTION ===== */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
            Our Process
          </span>
          <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase">
          HOW WE <span className="text-[#00A3FF]">WORK</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          A simple and transparent process to bring your ideas to life.
        </p>
      </div>

      {/* ===== PROCESS STEPS ===== */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-2">
          
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              
              {/* Step Container */}
              <div className="flex flex-col items-center text-center max-w-[200px] w-full">
                
                {/* Circle & Number Container */}
                <div className="relative mb-6">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#00A3FF]/30 shadow-[0_0_20px_rgba(0,163,255,0.2)] animate-pulse"></div>
                  
                  {/* Main Circle */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border border-[#00A3FF] bg-[#050B14] flex flex-col items-center justify-center text-[#00A3FF] shadow-[0_0_25px_rgba(0,163,255,0.3)] hover:shadow-[0_0_40px_rgba(0,163,255,0.6)] hover:scale-105 transition-all duration-300">
                    {/* Icon */}
                    <div className="mb-1">
                      {step.icon}
                    </div>
                    {/* Step Number inside the circle */}
                    <span className="text-[10px] md:text-xs font-bold text-[#00A3FF] tracking-widest">
                      {step.id}
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide uppercase">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Arrow (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mt-12 text-[#00A3FF] opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}

              {/* Connecting Arrow (Mobile - Downwards) */}
              {index < processSteps.length - 1 && (
                <div className="block md:hidden text-[#00A3FF] opacity-80 my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeWork;