import { Link } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050B14] overflow-hidden flex items-center py-20">
      
      {/* ===== BACKGROUND EFFECTS (glow only, no lines) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial glow behind the right image */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ===== LEFT SIDE: TEXT & BUTTONS ===== */}
          <div className="flex flex-col items-start text-left">
            
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
                Our Services
              </span>
              <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] text-white mb-6">
              Digital Solutions <br />
              <span className="text-[#3B82F6]">That Drive Growth</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              We design, develop and deliver powerful digital solutions to help businesses grow, scale and succeed in the modern world.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
                <a>
                 <button className="group flex items-center gap-2 rounded bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/30">
                GET A FREE CONSULTATION 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button></a>
             
              
              <button className="group flex items-center gap-3 rounded border border-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2563EB]/10">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] transition group-hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white transition group-hover:text-[#2563EB]">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </span>
                WATCH VIDEO
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 border-t border-gray-800 pt-8 w-full max-w-lg">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">20+</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Clients Satisfied</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">3+</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Years Experienced</p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE: IMAGE & EFFECTS ===== */}
          <div className="relative w-full flex justify-center items-center mt-12 lg:mt-0">
            {/* Glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[100px]"></div>
            
            <img 
              src="/servicesHero.png" 
              alt="Digital Solutions Graphic" 
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;