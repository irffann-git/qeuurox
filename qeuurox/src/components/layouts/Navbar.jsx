import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ logoSrc = "/qeuurox.png" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Define routes – each with a path and a display name
    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Projects", to: "/projects" },
        { name: "Our Teams", to: "/teams" },
        { name: "Contact", to: "/contact" },
    ];

    // Determine active link based on current path
    const isActive = (path) => location.pathname === path;

    // Scroll Detection for Sticky/Floating Styles
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent Background Scroll when Mobile Menu is Open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 sm:py-4 px-3 sm:px-6 lg:px-8">
            {/* Embedded Custom Styles – BLUE THEME (unchanged) */}
            <style>{`
                :root {
                    --qx-black: #070707;
                    --qx-blue: #2563eb;
                    --qx-blue-bright: #3b82f6;
                }

                .qx-navbar-floating {
                    background: rgba(10, 11, 13, 0.85);
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.9),
                                0 0 20px rgba(37, 99, 235, 0.15);
                }

                .qx-navbar-top {
                    background: transparent;
                }

                .qx-nav-item {
                    position: relative;
                    color: #9ca3af;
                    transition: color 0.25s ease-in-out;
                }

                .qx-nav-item:hover, .qx-nav-item.active {
                    color: #ffffff;
                }

                .qx-nav-item::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    width: 0%;
                    height: 2px;
                    background: linear-gradient(90deg, var(--qx-blue), var(--qx-blue-bright));
                    border-radius: 2px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateX(-50%);
                    box-shadow: 0 0 10px var(--qx-blue-bright);
                }

                .qx-nav-item:hover::after, .qx-nav-item.active::after {
                    width: 75%;
                }

                .qx-btn-glow {
                    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .qx-btn-glow:hover {
                    box-shadow: 0 0 25px rgba(37, 99, 235, 0.6);
                    transform: translateY(-1px);
                }
            `}</style>

            {/* Main Navbar Bar */}
            <div
                className={`max-w-8xl mx-auto rounded-2xl transition-all duration-300 ${
                    isScrolled
                        ? "qx-navbar-floating px-4 sm:px-6 py-2"
                        : "qx-navbar-top px-2 sm:px-4 py-3"
                }`}
            >
                <div className="flex items-center justify-between">
                    {/* Brand Logo – using Link to home */}
                    <Link to="/" className="flex items-center gap-2 group relative z-10 shrink-0">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                            <img
                                src={logoSrc}
                                alt="Brand Logo"
                                className="w-24 h-12 md:w-42 md:h-24 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-black/40 border border-white/10 px-5 py-1.5 rounded-full backdrop-blur-md">
                        {navLinks.map((link) => {
                            const active = isActive(link.to);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className={`qx-nav-item px-3 xl:px-4 py-2 text-xs xl:text-sm font-medium tracking-wide uppercase ${
                                        active ? "active font-semibold" : ""
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Right CTA */}
                    <div className="hidden lg:flex items-center shrink-0">
                        <Link
                            to="/contact"
                            className="qx-btn-glow group inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 text-xs xl:text-sm font-semibold uppercase tracking-wider text-white rounded-full border border-blue-400/30"
                        >
                            <span>Get Started</span>
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none hover:bg-white/10 transition-colors"
                        aria-label="Toggle Menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span
                                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                                    isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-blue-500" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                                    isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-blue-500" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Backdrop Overlay for Mobile Drawer */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 -z-10 ${
                    isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Navigation Drawer */}
            <div
                className={`lg:hidden fixed inset-x-4 top-20 transition-all duration-300 transform origin-top ${
                    isMobileMenuOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="bg-[#0b0c0e]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link) => {
                            const active = isActive(link.to);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 uppercase tracking-wider flex items-center justify-between ${
                                        active
                                            ? "text-white bg-blue-600/10 border border-blue-500/20 font-semibold"
                                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    <span
                                        className={`transition-opacity duration-200 ${
                                            active ? "text-blue-500 opacity-100" : "text-zinc-500 opacity-0"
                                        }`}
                                    >
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="pt-3 border-t border-white/10">
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="qx-btn-glow flex items-center justify-center gap-2 w-full py-3 text-sm font-bold uppercase tracking-wider text-white rounded-xl shadow-lg"
                        >
                            <span>Get Started</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;