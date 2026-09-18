import React, { useState } from 'react';

// ===== UPDATED DATA WITH DETAILED INFO =====
const servicesData = [
  {
    id: 1,
    title: "MERN Stack Development",
    desc: "Scalable and high-performance web applications using modern technologies.",
    detailedDesc: "Our MERN stack development services provide end-to-end solutions for building robust web applications. We leverage MongoDB, Express.js, React, and Node.js to create seamless, scalable, and high-performing digital experiences tailored to your business needs.",
    features: ["Custom API Development", "Real-time Data Processing", "Scalable Architecture", "Responsive UI/UX"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: ".NET Solutions",
    desc: "Enterprise-grade applications built with Microsoft .NET technologies.",
    detailedDesc: "We build secure, enterprise-grade applications using the Microsoft .NET framework. From Windows desktop apps to large-scale web APIs, our .NET solutions are designed for performance, security, and seamless integration with your existing Microsoft ecosystem.",
    features: ["Enterprise Web APIs", "Windows Desktop Apps", "Azure Cloud Integration", "High-Security Standards"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Angular Development",
    desc: "Dynamic and responsive frontend solutions using Angular.",
    detailedDesc: "Our Angular development team creates dynamic, single-page applications (SPAs) that are fast, responsive, and highly interactive. We utilize the latest Angular features to deliver a smooth user experience across all devices.",
    features: ["Single Page Applications", "RxJS State Management", "Progressive Web Apps", "Component-Driven Architecture"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Flutter Apps",
    desc: "Cross-platform mobile applications with stunning UI and native performance.",
    detailedDesc: "We develop beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter. Our apps deliver high performance and a pixel-perfect UI on both iOS and Android.",
    features: ["Single Codebase", "Native Performance", "Custom Widgets", "Fast Prototyping"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "EA / Trading Automation",
    desc: "Automated trading systems and Expert Advisors for Forex and financial markets.",
    detailedDesc: "We design and develop custom Expert Advisors (EAs) and automated trading systems for the Forex and financial markets. Our solutions help you execute trades 24/7 with precision, removing emotional bias and maximizing efficiency.",
    features: ["Custom EA Development", "Backtesting & Optimization", "Risk Management Systems", "API Integration"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies to boost your brand and reach.",
    detailedDesc: "Our digital marketing services are designed to grow your brand online. We use data-driven strategies including SEO, social media marketing, and PPC campaigns to increase your visibility, drive traffic, and convert leads.",
    features: ["Search Engine Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Cloud Solutions",
    desc: "Secure, scalable and flexible cloud infrastructure for your business.",
    detailedDesc: "We provide secure, scalable, and flexible cloud infrastructure solutions. Whether you are migrating to the cloud or building cloud-native applications, we ensure your data is safe and your systems are always available.",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps & CI/CD", "24/7 Monitoring"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Custom Software Solutions",
    desc: "Tailored software to solve your unique business challenges.",
    detailedDesc: "We build custom software solutions tailored specifically to solve your unique business challenges. From internal tools to customer-facing platforms, our software is designed to streamline your operations and drive growth.",
    features: ["Requirement Analysis", "Custom CRM/ERP", "Legacy System Modernization", "Dedicated Support"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const OurServices = () => {
  // State for the modal
  const [selectedService, setSelectedService] = useState(null);

  // Open modal handler
  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  // Close modal handler
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#050B14] py-20 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          
          {/* Left: Title & Subtitle */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold tracking-[0.2em] text-[#00A3FF] uppercase">
                What We Offer
              </span>
              <span className="w-12 h-[1px] bg-[#00A3FF]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              OUR <span className="text-[#3B82F6]">SERVICES</span>
            </h2>
            <p className="text-gray-400 text-lg">
              End-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          {/* Right: Feature Bar */}
          <div className="flex flex-col sm:flex-row gap-6 bg-[#0A1424] border border-blue-900/50 rounded-xl p-4 lg:p-6 w-full lg:w-auto">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Custom Solutions</p>
                <p className="text-xs text-gray-400">Built for your goals</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Expert Team</p>
                <p className="text-xs text-gray-400">Skilled & experienced</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">On-Time Delivery</p>
                <p className="text-xs text-gray-400">Your success matters</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="relative group rounded-xl bg-[#0A1424] border border-blue-900/30 p-6 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col h-full"
            >
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 mb-5 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-6">
                {service.desc}
              </p>

              {/* Learn More Button (Changed from <a> to <button>) */}
              <button 
                onClick={() => handleLearnMore(service)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B82F6] transition-all group-hover:gap-3 group-hover:text-[#00A3FF] focus:outline-none"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* ===== DETAIL MODAL ===== */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} // Close when clicking outside
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0A1424] border border-blue-900/50 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(59,130,246,0.2)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition bg-white/5 hover:bg-white/10 rounded-full p-2"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
                {selectedService.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
            </div>

            {/* Modal Body */}
            <p className="text-gray-300 leading-relaxed mb-8">
              {selectedService.detailedDesc}
            </p>
            
            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {selectedService.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[#3B82F6]">✦</span> {feature}
                </li>
              ))}
            </ul>

            {/* Modal Footer / CTA */}
            <button className="w-full py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30">
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default OurServices;