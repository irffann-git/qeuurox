import React, { useState } from 'react';

export default function TeamJourneySection() {
  const [activeId, setActiveId] = useState(1);

  const teamMembers = [
    {
      id: 1,
      name: 'VAISHNAV P',
      role: '(MernStack Developer)',
      title: 'Founder, Edex Life School',
      bio: 'In today’s fast-changing world, having potential alone is not enough. The market now rewards people who continuously learn, adapt, and build real skills that create value.',
      image: '/vaishnav.jpeg',
      instagram: '#',
    },
    {
      id: 2,
      name: 'MUHAMMED IRFAN KP',
      role: '(MernStack Developer)',
      title: 'Head of Engineering',
      bio: 'Building robust, scalable architectures that empower modern digital solutions. Passionate about innovation, smooth UI/UX, and performance optimization.',
      image: '/irfan.jpeg',
      instagram: '#',
    },
    {
      id: 3,
      name: 'MOHAMMED FAHSIN K',
      role: '(.Net & EA Expert)',
      title: 'Lead Product Designer',
      bio: 'Crafting intuitive interfaces and impactful user experiences. Bridging the gap between aesthetic design and functional development.',
      image: '/fahsin.jpeg',
      instagram: '#',
    },
    {
      id: 4,
      name: 'VINAYAK',
      role: '(Flutter Developer)',
      title: 'Senior Software Engineer',
      bio: 'Transforming complex ideas into sleek code. Focused on high-performance frontend and resilient server-side applications.',
      image: '/vinayak.jpeg',
      instagram: '#',
    },
    {
      id: 5,
      name: 'HAFIZ JALEEL',
      role: '(Marketing Strategist)',
      title: 'Growth & Brand Specialist',
      bio: 'Scaling brands through strategic marketing, SEO, and targeted outreach programs to drive long-term business growth.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      instagram: '#',
    },
    {
      id: 6,
      name: 'RANIA ZAHRA',
      role: '(Content Lead)',
      title: 'Creative Director',
      bio: 'Driving brand narratives and creative direction. Crafting compelling stories that engage users and elevate the overall product identity.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      instagram: '#',
    },
  ];

  return (
    <section className="relative w-full  bg-transparent text-white py-20 px-4 sm:px-8 overflow-hidden select-none">
      
      {/* Background Grid Accent Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blue Glow Light Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Title Header */}
      <div className="text-center mb-12 relative z-10">
        <span className="text-blue-500 tracking-[0.2em] text-xs font-bold uppercase">
          WORKED WITH ALONG THIS JOURNEY
        </span>
        <div className="w-12 h-[2px] bg-blue-600 mx-auto mt-3" />
      </div>

      {/* Expandable Accordion Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 h-[650px] md:h-[500px] relative z-10">
        {teamMembers.map((member) => {
          const isActive = member.id === activeId;

          return (
            <div
              key={member.id}
              onMouseEnter={() => setActiveId(member.id)}
              onClick={() => setActiveId(member.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border ${
                isActive
                  ? 'flex-[3.5] md:flex-[4] border-blue-600/50 shadow-[0_0_30px_rgba(37,99,235,0.2)] bg-zinc-900 opacity-100'
                  : 'flex-[1] border-zinc-800/80 opacity-60 bg-zinc-950'
              }`}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                  isActive ? 'scale-105 grayscale-0' : 'scale-100 grayscale'
                }`}
              />

              {/* Dark Overlay Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                  isActive
                    ? 'from-black via-black/75 to-transparent opacity-100'
                    : 'from-black/90 via-black/50 to-transparent opacity-80'
                }`}
              />

              {/* ACTIVE CARD CONTENT */}
              {isActive ? (
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10 animate-fadeIn">
                  {/* Top Name & Role */}
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white uppercase leading-none">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-500 mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Bottom Bio & Details */}
                  <div className="space-y-2 pt-3 border-t border-zinc-700/50">
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-200">
                      {member.title}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed max-w-sm line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Instagram Icon Link */}
                    <div className="pt-1 flex items-center justify-between">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-blue-500 hover:border-blue-600 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* COLLAPSED CARD VERTICAL TEXT */
                <div className="absolute inset-0 p-2 sm:p-4 flex items-center justify-center pointer-events-none">
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-400 tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                    {member.name}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}