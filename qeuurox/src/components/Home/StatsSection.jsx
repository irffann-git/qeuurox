import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: '20+',
      label: 'Projects Delivered',
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a6 6 0 00-1.72 1.72" />
        </svg>
      ),
    },
    {
      id: 2,
      value: '5+',
      label: 'Expert Developers',
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      value: '100%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 4,
      value: '24/7',
      label: 'Support Available',
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#080808] py-10 border-y border-zinc-900">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
          
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-start md:justify-center gap-4 pt-6 md:pt-0 md:px-6 group"
            >
              {/* Icon with hover glow + scale */}
              <div className="text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                {item.icon}
              </div>

              {/* Text Information */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}