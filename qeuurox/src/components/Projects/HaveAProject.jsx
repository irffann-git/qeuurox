import React from 'react';

const HaveAProject = () => {
  return (
    <section className="relative w-full bg-[#050B14] py-24 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      
      {/* ===== BACKGROUND EFFECTS (Glowing Planet Horizon) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
        {/* Outer glowing arc */}
        <div className="absolute -top-[600px] w-[200%] h-[800px] rounded-[100%] border-t border-[#00A3FF]/30 shadow-[0_-20px_80px_rgba(0,163,255,0.15)]"></div>
        {/* Inner glowing arc */}
        <div className="absolute -top-[580px] w-[180%] h-[750px] rounded-[100%] border-t border-[#00A3FF]/50 shadow-[0_-10px_40px_rgba(0,163,255,0.2)]"></div>
        {/* Central glow behind text */}
        <div className="absolute top-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
            Let's Build Together
          </span>
          <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-[1.1] mb-6">
          Have a <span className="text-[#00A3FF]">Project</span> in Mind?
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Turn your ideas into reality. Let's create something amazing together.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 mb-24">
          GET STARTED
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* ===== FEATURES ROW ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-white/10">
            <div className="w-16 h-16 rounded-full border border-[#00A3FF]/40 bg-[#0A1424] flex items-center justify-center text-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.15)] mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-base mb-2">Free Consultation</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Discuss your ideas with our experts.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-white/10">
            <div className="w-16 h-16 rounded-full border border-[#00A3FF]/40 bg-[#0A1424] flex items-center justify-center text-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.15)] mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-base mb-2">Tailored Solutions</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Get a solution designed for your business.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center px-4 lg:border-r lg:border-white/10">
            <div className="w-16 h-16 rounded-full border border-[#00A3FF]/40 bg-[#0A1424] flex items-center justify-center text-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.15)] mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-base mb-2">On-Time Delivery</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">We deliver quality work on time.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-16 h-16 rounded-full border border-[#00A3FF]/40 bg-[#0A1424] flex items-center justify-center text-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.15)] mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-base mb-2">Ongoing Support</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">We're with you even after launch.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HaveAProject;