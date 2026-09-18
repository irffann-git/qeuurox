import React, { useState } from 'react';

// ===== UPDATED DATA WITH DETAILS & LINKS =====
const projectsData = [
  {
    id: 1,
    category: "Web Development",
    title: "E-Commerce Platform",
    desc: "A scalable e-commerce solution with secure payments and an intuitive user experience.",
    detailedDesc: "This e-commerce platform was built to handle high-traffic sales events. It features a custom cart system, secure Stripe payment integration, an admin dashboard for inventory management, and a fully responsive design that ensures a seamless shopping experience across all devices.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Mobile Apps",
    title: "Fitness Tracking App",
    desc: "A cross-platform mobile app to track workouts, nutrition and progress.",
    detailedDesc: "Developed using Flutter, this fitness app allows users to log workouts, track calorie intake, and view detailed progress charts. It integrates with wearable devices via Bluetooth and features a social feed for sharing achievements with friends.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "UI/UX Design",
    title: "SaaS Dashboard",
    desc: "Modern and user-friendly dashboard design for a SaaS platform.",
    detailedDesc: "A complete UI/UX overhaul for a B2B SaaS platform. The project involved extensive user research, wireframing, and prototyping in Figma. The final design features a clean, data-rich interface with dark mode support, customizable widgets, and advanced data visualization charts.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Automation",
    title: "Trading Automation",
    desc: "Automated trading system with real-time market analysis and execution.",
    detailedDesc: "Built with Python and MetaTrader 5, this automated trading system executes trades based on complex technical indicators. It includes a backtesting engine, real-time risk management, and a web-based dashboard to monitor open positions and performance metrics.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Web Development",
    title: "Corporate Website",
    desc: "A high-performance corporate website with a modern design and SEO optimization.",
    detailedDesc: "A Next.js powered corporate website designed for speed and SEO. It features server-side rendering, dynamic blog functionality, multi-language support, and a custom CMS for easy content updates by the marketing team.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Mobile Apps",
    title: "On-Demand Service App",
    desc: "A feature-rich on-demand service app connecting users and services.",
    detailedDesc: "A two-sided marketplace app built with React Native. It includes real-time geolocation tracking, in-app chat, secure payment processing, and separate dashboards for customers and service providers.",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Automation"];

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // State for Modal

  // Filter logic
  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  // Modal Handlers
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="relative w-full min-h-screen bg-[#050B14] py-24 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 mb-12">
          
          {/* Left: Title & Subtitle */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
                Our Projects
              </span>
              <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Featured <span className="text-[#3B82F6]">Projects</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              A selection of our recent work across different industries.<br className="hidden md:block" />
              Each project is a step towards a smarter, digital future.
            </p>
          </div>

          {/* Right: Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/30"
                    : "bg-[#0A1424] text-gray-400 border border-white/5 hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="relative group rounded-xl bg-[#0A1424] border border-blue-900/30 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full"
            >
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#050B14]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1424] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow relative z-10 -mt-4">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#00A3FF] bg-blue-500/10 border border-blue-500/20 uppercase mb-3 self-start">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-6">
                  {project.desc}
                </p>

                {/* View Project Button (Changed from <a> to <button>) */}
                <button 
                  onClick={() => openModal(project)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] transition-all group-hover:gap-3 group-hover:text-[#00A3FF] mt-auto self-start focus:outline-none"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ===== PROJECT DETAIL MODAL ===== */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} // Close when clicking outside
        >
          <div 
            className="relative w-full max-w-3xl bg-[#0A1424] border border-blue-900/50 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(59,130,246,0.2)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-md"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/5">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1424] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Modal Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#00A3FF] bg-blue-500/10 border border-blue-500/20 uppercase mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Modal Detailed Content */}
            <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              {selectedProject.detailedDesc}
            </p>

            {/* Modal Footer / Links */}
            <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
              <a 
                href={selectedProject.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Demo
              </a>
              
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-sm font-semibold rounded-lg transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedProjects;