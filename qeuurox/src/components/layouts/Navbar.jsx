import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Layers,
  Briefcase,
  Users,
  Mail,
} from "lucide-react";

import Dock from "../Dock";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      to: "/",
      icon: <Home size={22} strokeWidth={1.8} />,
    },
    {
      name: "About Us",
      to: "/about",
      icon: <User size={22} strokeWidth={1.8} />,
    },
    {
      name: "Services",
      to: "/services",
      icon: <Layers size={22} strokeWidth={1.8} />,
    },
    {
      name: "Projects",
      to: "/projects",
      icon: <Briefcase size={22} strokeWidth={1.8} />,
    },
    {
      name: "Our Teams",
      to: "/teams",
      icon: <Users size={22} strokeWidth={1.8} />,
    },
    {
      name: "Contact",
      to: "/contact",
      icon: <Mail size={22} strokeWidth={1.8} />,
    },
  ];

  const items = navLinks.map((link) => ({
    label: link.name,
    icon: (
      <Link
        to={link.to}
        className={`flex items-center justify-center w-full h-full ${
          location.pathname === link.to
            ? "text-blue-400"
            : "text-white" 
        }`}
      >
        {link.icon}
      </Link>
    ),
    onClick: () => {},
  }));

  return (
    <Dock
      items={items}
      magnification={72}
      distance={180}
      panelHeight={68}
      dockHeight={120}
      baseItemSize={50}
    />
  );
};

export default Navbar;