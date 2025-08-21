"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between transition-all">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Rayan Sheikh</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-lg font-medium transition-colors ${
              pathname === link.href
                ? "bg-blue-100 text-blue-700"
                : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-800 text-2xl focus:outline-none"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full md:hidden bg-white shadow-md rounded-b-2xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-6 py-3 border-b border-gray-100 font-medium ${
              pathname === link.href
                ? "bg-blue-100 text-blue-700"
                : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
