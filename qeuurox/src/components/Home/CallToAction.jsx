import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full bg-transparent py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* Main Banner Container */}
        <div className="relative rounded-2xl border border-blue-800/40 bg-gradient-to-r from-blue-950/40 via-[#0a0506] to-black p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(37,99,235,0.12)] overflow-hidden">
          
          {/* Top-Left Blue Glow Effect */}
          <div className="absolute -top-16 -left-16 w-80 h-80 bg-blue-600/30 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Side: Hexagon Badge & Text Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 text-center sm:text-left z-10">
            
            {/* Hexagon Badge with Rocket Icon */}
            <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
              {/* Glowing Background Hexagon */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-950 shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400/60"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              />
              
              {/* Static Rocket Icon */}
              <div className="z-10 text-white">
                <svg
                  className="w-9 h-9 -rotate-45 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a6 6 0 00-2.12 4.13h3.01m-3.01-4.13a14.9 14.9 0 00-.312.06m0 0a6 6 0 00-4.13 2.12v-3.01"
                  />
                </svg>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-1">
              <span className="text-blue-500 font-bold tracking-widest text-xs uppercase block">
                HAVE AN IDEA?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Let’s Build Something Amazing Together!
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium pt-1">
                Share your idea with us and we’ll turn it into a powerful digital product.
              </p>
            </div>
          </div>

          {/* Right Side: Skewed Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
            
            {/* Primary CTA Button (GET A FREE QUOTE) */}
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg -skew-x-12 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] group"
            >
              <span className="skew-x-12 flex items-center gap-2">
                GET A FREE QUOTE
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </a>

            {/* Secondary CTA Button (WHATSAPP US) */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-blue-900/60 hover:border-blue-500 bg-black/60 hover:bg-zinc-900 text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg -skew-x-12 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="skew-x-12 flex items-center gap-2">
                {/* WhatsApp Icon */}
                <svg
                  className="w-4 h-4 text-white group-hover:text-green-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WHATSAPP US
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}