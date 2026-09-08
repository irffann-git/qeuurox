import React, { useEffect, useRef } from 'react';
import { Rocket, Code, Users, Target, ArrowRight } from 'lucide-react';

const timelineSteps = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      'qeuurox was founded with a simple belief — technology can solve real problems.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'Growth & Expansion',
    description:
      'Expanded our team and services globally to deliver end-to-end digital solutions.',
    icon: Code,
  },
  {
    year: '2023',
    title: 'Building Trust',
    description:
      'Partnered with amazing clients and delivered solutions that drive measurable results.',
    icon: Users,
  },
  {
    year: '2024+',
    title: 'The Future',
    description:
      'Continuing our mission to create innovative solutions that make a real impact.',
    icon: Target,
  },
];

const OurStory = () => {
  const leftRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -30px 0px',
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);
    if (leftRef.current) leftObserver.observe(leftRef.current);

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, delay);
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((el) => {
      if (el) itemObserver.observe(el);
    });

    return () => {
      leftObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#020617] text-white py-24 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative z-10">
        {/* Left Content */}
        <div
          ref={leftRef}
          className="lg:col-span-5 space-y-7 pt-2 stagger-children"
        >
          <div className="flex items-center gap-3 text-blue-400 font-semibold text-[11px] tracking-[0.2em] uppercase">
            <span>Our Story</span>
            <span className="w-10 h-[2px] bg-blue-500/70 rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
            A JOURNEY OF
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              INNOVATION
            </span>
          </h2>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            <p>
              Our journey is built on passion, dedication and a relentless
              pursuit of excellence.
            </p>
            <p>
              From a small idea to a global digital partner — we continue to
              evolve, innovate and create impact.
            </p>
          </div>

          <div className="pt-2">
            <button className="group inline-flex items-center gap-3 border border-blue-600/40 hover:border-blue-400 bg-blue-950/20 hover:bg-blue-900/30 text-blue-300 font-semibold text-[11px] tracking-[0.15em] uppercase px-7 py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.08)] hover:shadow-[0_0_30px_rgba(37,99,235,0.18)]">
              <span>View Timeline</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Right Timeline – Vertical List */}
        <div className="lg:col-span-7 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-600 via-blue-400 to-blue-400/10 rounded-full hidden sm:block" />
          <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-600 via-blue-400 to-blue-400/10 rounded-full sm:hidden" />

          <div className="space-y-10 relative">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const delay = index * 150;
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-delay={delay}
                  className="timeline-item flex items-start gap-6 animate-on-scroll"
                >
                  {/* Icon + Dot */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-[#020617] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 z-10">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_12px_#3b82f6,0_0_24px_#3b82f6] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <span className="text-blue-400 font-extrabold text-2xl tracking-tight block mb-0.5 transition-colors duration-300">
                      {step.year}
                    </span>
                    <h3 className="text-white font-semibo   ld text-lg mb-1 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative orb */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Animation styles */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-children > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .stagger-children.in-view > *:nth-child(1) {
          transition-delay: 0.05s;
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-children.in-view > *:nth-child(2) {
          transition-delay: 0.12s;
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-children.in-view > *:nth-child(3) {
          transition-delay: 0.19s;
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-children.in-view > *:nth-child(4) {
          transition-delay: 0.26s;
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item:hover .text-blue-400 {
          color: #60a5fa;
        }
        .timeline-item:hover .text-white {
          color: #bfdbfe;
        }
        .timeline-item:hover .text-gray-400 {
          color: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default OurStory;