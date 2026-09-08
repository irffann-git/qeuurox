import React from 'react';

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: 'Evox Event Management',
      techStack: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      id: 2,
      title: 'Business Dashboard',
      techStack: '.NET Core',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      id: 3,
      title: 'Car Rental Mobile App',
      techStack: 'Flutter',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
  ];

  return (
    <section className="w-full  bg-transparent text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 relative">
          {/* Title Box */}
          <div className="text-center sm:text-left w-full sm:w-auto">
            <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase block mb-1">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Recent Projects
            </h2>
          </div>

          {/* View All Projects Link */}
          <a
            href="#projects"
            className="mt-4 sm:mt-0 text-blue-500 hover:text-blue-400 font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-colors duration-300 group"
          >
            VIEW ALL PROJECTS
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f0f0f] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group"
            >
              {/* Project Image Box */}
              <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Footer: Info & Arrow Button */}
              <div className="flex items-end justify-between gap-3 pt-2">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-500 text-xs font-semibold mt-1">
                    {project.techStack}
                  </p>
                </div>

                {/* Arrow Button */}
                <a
                  href={project.link}
                  className="flex-shrink-0 w-10 h-10 rounded-lg border border-blue-600/60 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}