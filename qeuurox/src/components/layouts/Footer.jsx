import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-zinc-400 pt-16 pb-8 px-4 sm:px-8 lg:px-16 border-t border-zinc-900">
      <div className="max-w-8xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900/80">
          
          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1 pr-0 lg:pr-4 border-r-0 lg:border-r border-zinc-900/60">
            
            {/* Logo Image Section */}
            <div className="flex justify-center items-center">
              <img 
                src="/qeuurox.png" 
                alt="Qeuurox Logo" 
                className="w-30 h-30 object-contain flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              We build digital solutions that help businesses grow, scale and succeed in the modern world.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-blue-500 hover:text-blue-500 text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                f
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-blue-500 hover:text-blue-500 text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                l
              </a>
              <a
                href="#github"
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-blue-500 hover:text-blue-500 text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                g
              </a>
              <a
                href="#email"
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950/60 hover:border-blue-500 hover:text-blue-500 text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {['Home', 'About Us', 'Services', 'Projects', 'Our Teams', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                'MERN Stack Development',
                '.NET Solutions',
                'Angular Development',
                'Flutter Apps',
                'EA / Trading Automation',
                'Digital Marketing',
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-blue-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3 border-r-0 lg:border-r border-zinc-900/60 pr-0 lg:pr-4">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
              CONTACT US
            </h4>
            <div className="space-y-3 text-xs font-medium pt-1">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-zinc-300">+92 300 1234567</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:hello@qeurox.com" className="text-zinc-300 hover:text-blue-500 transition-colors">
                  hello@qeurox.com
                </a>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-zinc-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
              NEWSLETTER
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to get updates and latest news.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center pt-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-l-md py-2.5 px-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 rounded-r-md transition-colors flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-[11px] font-medium text-zinc-500">
          © 2026 Qeuurox. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}