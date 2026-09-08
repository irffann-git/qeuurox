import React from 'react';
import { ArrowRight } from 'lucide-react';

// Custom SVG component to reliably render the LinkedIn icon
const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const teamMembers = [
  {
    name: 'Arjun Patel',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Rohit Sharma',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Neha Verma',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Kunal Mehta',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Priya Singh',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Aman Gupta',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    linkedin: 'https://linkedin.com',
  },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-[#030712] text-white py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Left Title & Subheading */}
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center space-x-3 text-blue-500 font-semibold text-xs tracking-widest uppercase">
              <span>Meet Our Team</span>
              <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PASSIONATE <span className="text-blue-500">PEOPLE.</span>
              <br />
              POWERFUL <span className="text-blue-500">MINDS.</span>
            </h2>
          </div>

          {/* Middle Paragraph */}
          <div className="max-w-md text-gray-400 text-sm sm:text-base leading-relaxed">
            <p>
              We are a team of dreamers, thinkers and doers who are passionate about
              technology and committed to making a difference.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="flex-shrink-0">
            <button className="inline-flex items-center gap-2 border border-blue-600/50 hover:border-blue-500 bg-blue-950/10 hover:bg-blue-900/20 text-blue-400 hover:text-blue-300 font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-md transition-all duration-300 group shadow-[0_0_15px_rgba(37,99,235,0.1)]">
              <span>Meet The Team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 6 Cards Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#030712] border border-blue-900/40 hover:border-blue-500/80 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] hover:-translate-y-1"
            >
              {/* Radial Blue Glow Background Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Portrait Image Container (Standard Full Color) */}
              <div className="relative pt-6 px-3 flex items-end justify-center min-h-[240px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-52 object-cover object-top rounded-b-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Footer Details */}
              <div className="p-3 bg-[#030712]/90 relative z-10 flex items-end justify-between border-t border-blue-900/20">
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn`}
                  className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex-shrink-0"
                >
                  <LinkedinIcon className="w-4 h-4 filter drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}