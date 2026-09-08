import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const services = [
    {
      id: 1,
      title: 'MERN Stack Development',
      description: 'Scalable and high-performance web applications using MongoDB, Express, React, and Node.js.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '.NET Enterprise Solutions',
      description: 'Robust, secure and scalable enterprise applications built with the power of Microsoft .NET.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 01-1.183-1.002l-.184-.368a2 2 0 01.183-2.18l2.388-3.582a6 6 0 013.86-.517l.318-.158a6 6 0 003.86-.517l2.387.477a2 2 0 011.022.547l1.02 1.02" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Angular Development',
      description: 'Modern, fast and responsive web applications with Angular and best architecture standards.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7l10 15 10-15-10-5z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Flutter Mobile Apps',
      description: 'Cross-platform mobile apps for iOS & Android with beautiful UI and smooth performance.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'EA / Trading Automation',
      description: 'Expert Advisors and trading bots to automate your strategies and maximize performance.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'SEO, SEM, Social Media and content strategies that grow your brand and increase ROI.',
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
  ];

  const total = services.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const handleStart = (clientX) => {
    setIsPaused(true);
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    isDragging.current = true;
  };

  const handleMove = (clientX) => {
    if (isDragging.current) {
      touchEndX.current = clientX;
    }
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }

    setIsPaused(false);
  };

  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="relative w-full  bg-transparent text-white py-20 px-4 overflow-hidden select-none">
      
      {/* Background Blue Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header Title */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-blue-500 tracking-widest text-xs font-bold uppercase">
          WHAT WE DO
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
          Our Services
        </h2>
        <div className="w-12 h-[3px] bg-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* CAROUSEL CONTAINER */}
      <div 
        className="relative max-w-6xl mx-auto h-[380px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {services.map((item, index) => {
          const offset = getOffset(index);

          if (Math.abs(offset) > 2) return null;

          let positionStyles = '';
          let blurStyle = '';

          if (offset === 0) {
            positionStyles = 'z-30 scale-100 opacity-100 translate-x-0 border-blue-600/50 shadow-[0_0_30px_rgba(37,99,235,0.25)] bg-[#111111]';
            blurStyle = 'blur-0';
          } else if (offset === -1) {
            positionStyles = 'z-20 scale-90 opacity-50 -translate-x-[110%] sm:-translate-x-[120%] border-zinc-800 bg-[#0c0c0c]';
            blurStyle = 'blur-[2px] hover:blur-0 hover:opacity-80';
          } else if (offset === 1) {
            positionStyles = 'z-20 scale-90 opacity-50 translate-x-[110%] sm:translate-x-[120%] border-zinc-800 bg-[#0c0c0c]';
            blurStyle = 'blur-[2px] hover:blur-0 hover:opacity-80';
          } else if (offset === -2) {
            positionStyles = 'z-10 scale-75 opacity-20 -translate-x-[200%] border-zinc-900 bg-[#080808] hidden lg:block';
            blurStyle = 'blur-sm';
          } else if (offset === 2) {
            positionStyles = 'z-10 scale-75 opacity-20 translate-x-[200%] border-zinc-900 bg-[#080808] hidden lg:block';
            blurStyle = 'blur-sm';
          }

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[280px] sm:w-[320px] p-8 rounded-2xl border transition-all duration-500 ease-out flex flex-col items-center text-center ${positionStyles} ${blurStyle}`}
            >
              <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl mb-6 pointer-events-none">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-wide text-white pointer-events-none">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed pointer-events-none">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8 relative z-20">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-zinc-800 hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>

    </section>
  );
}