import React, { useEffect, useRef, createRef } from 'react';
import { Rocket, Code, Users, Target, ArrowRight } from 'lucide-react';
import LightRays from '../LightRays';
import VariableProximity from '../VariableProximity';
import TrueFocus from '../TrueFocus';
import TextType from '../TextType';

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

const OurStory2 = () => {
  const leftRef = useRef(null);
  const itemRefs = useRef([]);
  const headingRef = useRef(null);
  const stepRefs = useRef(timelineSteps.map(() => createRef())).current;

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

      {/* Light rays WebGL background */}
      <div className="absolute inset-0 z-[1] opacity-60">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.4}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.2}
          followMouse={true}
          mouseInfluence={0.12}
          noiseAmount={0.05}
          distortion={0.05}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full relative z-10">
        {/* Left Content */}
        <div
          ref={leftRef}
          className="lg:col-span-5 space-y-7 pt-2 stagger-children"
        >
          <div className="-mx-1">
            <TrueFocus
              sentence="Our Story"
              borderColor="#3b82f6"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>

          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] -ml-1"
          >
            <VariableProximity
              label="A JOURNEY OF"
              className="text-white"
              style={{ display: 'block' }}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={headingRef}
              radius={120}
              falloff="linear"
            />
            <VariableProximity
              label="INNOVATION"
              className="text-blue-400"
              style={{ display: 'block' }}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={headingRef}
              radius={120}
              falloff="linear"
            />
          </h2>
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');`}</style>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            <TextType
              as="p"
              text="Our journey is built on passion, dedication and a relentless pursuit of excellence."
              typingSpeed={30}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible
            />
            <TextType
              as="p"
              text="From a small idea to a global digital partner — we continue to evolve, innovate and create impact."
              typingSpeed={30}
              initialDelay={2200}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible
            />
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
          {/* Traveling light that sweeps down the line */}
          <div className="absolute left-[23px] top-8 bottom-8 w-[2px] pointer-events-none">
            <span className="timeline-travel-light" />
          </div>

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
                    <div
                      className="icon-circle w-12 h-12 rounded-full border border-blue-500/30 bg-[#020617] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.1)] group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 z-10"
                      style={{ animationDelay: `${(index * 1.05 + 0.2).toFixed(2)}s` }}
                    >
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_12px_#3b82f6,0_0_24px_#3b82f6] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1" ref={stepRefs[index]}>
                    <VariableProximity
                      label={step.year}
                      className="text-blue-400 font-extrabold text-2xl tracking-tight mb-0.5 transition-colors duration-300"
                      style={{ display: 'block' }}
                      fromFontVariationSettings="'wght' 400, 'opsz' 9"
                      toFontVariationSettings="'wght' 900, 'opsz' 40"
                      containerRef={stepRefs[index]}
                      radius={90}
                      falloff="linear"
                    />
                    <VariableProximity
                      label={step.title}
                      className="text-white font-semibold text-lg mb-1 transition-colors duration-300"
                      style={{ display: 'block' }}
                      fromFontVariationSettings="'wght' 400, 'opsz' 9"
                      toFontVariationSettings="'wght' 900, 'opsz' 40"
                      containerRef={stepRefs[index]}
                      radius={90}
                      falloff="linear"
                    />
                    <TextType
                      as="p"
                      text={step.description}
                      className="text-gray-400 text-sm leading-relaxed max-w-md transition-colors duration-300"
                      typingSpeed={25}
                      loop={false}
                      showCursor={true}
                      cursorCharacter="|"
                      startOnVisible
                    />
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

        /* Light that travels down the connecting line, top to bottom */
        .timeline-travel-light {
          position: absolute;
          left: 50%;
          top: -12%;
          transform: translateX(-50%);
          width: 5px;
          height: 60px;
          border-radius: 9999px;
          background: linear-gradient(to bottom, transparent, #93c5fd, #3b82f6, transparent);
          filter: blur(1px);
          box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.45), 0 0 16px 5px rgba(59, 130, 246, 0.18);
          animation: travelDown 4.5s linear infinite;
        }

        @keyframes travelDown {
          0% {
            top: -12%;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        /* Icon circle briefly lights up as the traveling light passes, then returns to black */
        .icon-circle {
          background-color: #020617;
          border-color: rgba(59, 130, 246, 0.3);
          animation: circleGlow 4.5s ease-in-out infinite;
        }

        @keyframes circleGlow {
          0%,
          12%,
          100% {
            background-color: #020617;
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.1);
          }
          19%,
          23% {
            background-color: #2563eb;
            border-color: #93c5fd;
            box-shadow: 0 0 18px 3px rgba(59, 130, 246, 0.45);
          }
          30% {
            background-color: #020617;
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default OurStory2;