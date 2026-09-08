import React from 'react';

export default function WhyChooseUs() {
  const features = [
    'Experienced & Dedicated Team',
    'On-time Delivery',
    'Clean & Scalable Code',
    'Transparent Communication',
    'Agile Development Process',
    'Long-term Support & Maintenance',
  ];

  return (
    <section className="w-full  bg-transparent text-white py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Subtitle */}
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">
            WHY CHOOSE US
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            We’re More Than <br className="hidden sm:block" />
            Just a <span className="text-blue-600">Development Team</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Blue Check Icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center bg-blue-600/10">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* Feature Label */}
                <span className="text-zinc-200 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="pt-6">
            <button className="px-6 py-3 border border-blue-600/80 rounded-md text-white text-xs font-bold tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 group">
              ABOUT US
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Image Column with Floating Experience Card */}
        <div className="lg:col-span-6 relative">
          {/* Main Workspace Image Container */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src="/homeabout.png"
              alt="Development Team at work"
              className="w-full h-[380px] sm:h-[420px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Experience Badge (Bottom Right) */}
          <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-[#0d0d0d]/90 backdrop-blur-md border border-zinc-800 p-5 rounded-xl flex items-center gap-4 shadow-2xl z-10">
            {/* Blue People Icon */}
            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            {/* Experience Count Text */}
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                5+
              </div>
              <div className="text-zinc-400 text-xs font-medium">
                Expert Developers
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}