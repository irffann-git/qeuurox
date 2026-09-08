import React from 'react';
import { Lightbulb, Code, Target, Users } from 'lucide-react';

const valuesData = [
  {
    title: 'INNOVATE',
    description:
      'We embrace creativity and new technologies to build smarter solutions.',
    icon: Lightbulb,
  },
  {
    title: 'BUILD',
    description:
      'We build with precision, focus and a commitment to quality.',
    icon: Code,
  },
  {
    title: 'DELIVER',
    description:
      'We are dedicated to delivering results that drive measurable success.',
    icon: Target,
  },
  {
    title: 'GROW TOGETHER',
    description:
      'We grow together with our clients, as partners in their success.',
    icon: Users,
  },
];

export default function OurValues() {
  return (
    <section className="bg-[#030712] text-white py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Column: Heading & Section Label */}
        <div className="lg:col-span-4 space-y-6">
          {/* Subheading */}
          <div className="flex items-center space-x-3 text-blue-500 font-semibold text-xs tracking-widest uppercase">
            <span>What Drives Us</span>
            <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            OUR <span className="text-blue-500">VALUES.</span>
            <br />
            OUR <span className="text-blue-500">PROMISE.</span>
          </h2>
        </div>

        {/* Right Column: 4 Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#030712] border border-blue-900/40 hover:border-blue-500/80 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] hover:-translate-y-1"
              >
                {/* Glowing Neon Icon Container */}
                <div className="mb-8 relative flex items-center justify-center text-blue-500">
                  <IconComponent className="w-12 h-12 stroke-[1.5] filter drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Card Title */}
                <h3 className="text-white font-bold text-base tracking-wider uppercase mb-4">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}