import React from 'react';

export default function HeroSection() {
  // Extreme disarranged / scattered laser rays configuration
  const laserRays = [
    { left: '95%', top: '-20%', angle: '52deg', width: '2px', height: '650px', opacity: 0.7, speed: '4.5s', delay: '0s' },
    { left: '82%', top: '10%', angle: '-35deg', width: '3px', height: '480px', opacity: 0.35, speed: '6s', delay: '1.2s' },
    { left: '74%', top: '-30%', angle: '65deg', width: '1px', height: '700px', opacity: 0.5, speed: '3.5s', delay: '2.5s' },
    { left: '62%', top: '-5%', angle: '-18deg', width: '2.5px', height: '550px', opacity: 0.6, speed: '5s', delay: '0.8s' },
    { left: '50%', top: '-25%', angle: '48deg', width: '4px', height: '600px', opacity: 0.25, speed: '7s', delay: '3.1s' },
    { left: '42%', top: '15%', angle: '-42deg', width: '1px', height: '500px', opacity: 0.65, speed: '4.2s', delay: '1.7s' },
    { left: '30%', top: '-35%', angle: '58deg', width: '2px', height: '750px', opacity: 0.4, speed: '5.5s', delay: '0.4s' },
    { left: '18%', top: '5%', angle: '-25deg', width: '1.5px', height: '450px', opacity: 0.5, speed: '4.8s', delay: '2.2s' },
    { left: '8%', top: '-15%', angle: '38deg', width: '3px', height: '580px', opacity: 0.3, speed: '6.2s', delay: '1.0s' },
    { left: '-2%', top: '-10%', angle: '-50deg', width: '1px', height: '620px', opacity: 0.6, speed: '3.8s', delay: '2.8s' },
  ];

  return (
    <section className="relative w-full min-h-screen  bg-transparent text-white flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-12 lg:py-0 overflow-hidden">
      
      {/* Animations */}
      <style>{`
        /* Smooth Spreading Ambient Glow */
        @keyframes spreadGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.15);
          }
        }

        /* Disarranged Floating Shift */
        @keyframes rayShift {
          0%, 100% {
            opacity: 0.15;
            transform: rotate(var(--ray-angle)) translateY(-15px) scaleY(0.95);
          }
          50% {
            opacity: 0.85;
            transform: rotate(var(--ray-angle)) translateY(20px) scaleY(1.05);
          }
        }

        .animate-spread-glow {
          animation: spreadGlow 8s ease-in-out infinite;
        }

        .animate-ray {
          animation: rayShift ease-in-out infinite;
        }
      `}</style>

      {/* Main Grid Container */}
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="flex flex-col items-start space-y-6 text-left">
          
          <div className="flex flex-col space-y-2">
            <span className="text-blue-500 tracking-widest text-xs sm:text-sm font-bold uppercase">
  WE BUILD
</span>

<div className="w-10 h-[2px] bg-blue-600 rounded-full" />
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] uppercase">
  Digital Solutions <br />
  That <span className="text-blue-600">Deliver Results</span>
</h1>

          <p className="text-zinc-400 text-sm sm:text-base max-w-lg font-normal leading-relaxed">
            We design, develop and deliver powerful digital solutions 
            to help startups and businesses grow, scale and succeed 
            in the modern world.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
  href="#project"
  className="w-full sm:w-auto text-center px-7 py-3.5
  bg-blue-600 hover:bg-blue-700
  text-white font-semibold text-xs tracking-wider uppercase
  rounded-md transition-all duration-300
  shadow-lg shadow-blue-600/25
  flex items-center justify-center gap-2 group"
>
  START A PROJECT
  <span className="group-hover:translate-x-1 transition-transform">
    →
  </span>
</a>

            <a
  href="#video"
  className="w-full sm:w-auto text-center px-7 py-3.5
  border border-zinc-800 hover:border-blue-600
  text-white font-semibold text-xs tracking-wider uppercase
  rounded-md transition-all duration-200
  flex items-center justify-center gap-2
  bg-black/40 backdrop-blur-md"
>
  <svg
    className="w-4 h-4 fill-current text-blue-500"
    viewBox="0 0 24 24"
  >
    <path d="M8 5v14l11-7z" />
  </svg>

  WATCH VIDEO
</a>
          </div>
        </div>

        {/* RIGHT COLUMN: VISUAL DISPLAY */}
        <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
          
          {/* FIXED: Smooth Spreading Radial Glows without visible circle borders */}
          <div
  className="absolute w-[300px] sm:w-[450px]
  h-[300px] sm:h-[450px]
  bg-blue-600/20 rounded-full
  blur-[100px] sm:blur-[130px]
  animate-spread-glow pointer-events-none"
/>

<div
  className="absolute w-[180px] sm:w-[280px]
  h-[180px] sm:h-[280px]
  bg-blue-500/30 rounded-full
  blur-[70px] sm:blur-[100px]
  animate-spread-glow pointer-events-none"
  style={{ animationDelay: '3s' }}
/>

          {/* DISARRANGED LASER RAYS */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {laserRays.map((ray, index) => (
              <div
                key={index}
                className="animate-ray absolute"
                style={{
                  left: ray.left,
                  top: ray.top,
                  width: ray.width,
                  height: ray.height,
                  '--ray-angle': ray.angle,
                  transformOrigin: 'top center',
                  transform: `rotate(${ray.angle})`,
                  background: `linear-gradient(
  180deg,
  transparent,
  rgba(59, 130, 246, ${ray.opacity}),
  transparent
)`,
                  animationDuration: ray.speed,
                  animationDelay: ray.delay,
                }}
              />
            ))}
          </div>

          {/* Pedestal Base Soft Blur */}
          <div className="absolute bottom-2 sm:bottom-4 w-[280px] sm:w-[420px] h-[80px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Center Visual/Logo Image */}
          <img
  src="/q-logoo.png"
  alt="Hero Visual"
  className="relative z-10 w-full max-w-[320px] sm:max-w-[550px] lg:max-w-[800px]
  h-auto object-contain
  drop-shadow-[0_20px_40px_rgba(37,99,235,0.45)]
  transition-transform duration-500"
/>

        </div>

      </div>
    </section>
  );
}