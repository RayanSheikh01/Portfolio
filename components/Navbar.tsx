"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/experience", label: "experience" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#23272f] bg-[#08090b]/85 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Prompt-style wordmark */}
        <Link href="/" className="font-mono text-sm text-[#e6e8eb]">
          <span className="text-[#f5a524]">rayan@sec</span>
          <span className="text-[#8b939e]">:~</span>
          <span className="text-[#8b939e]">{pathname === "/" ? "/" : pathname}</span>
          <span className="ml-1 inline-block h-4 w-2 translate-y-[3px] bg-[#f5a524]" aria-hidden />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 font-mono text-sm transition-colors ${
                  active
                    ? "text-[#f5a524]"
                    : "text-[#8b939e] hover:text-[#e6e8eb]"
                }`}
              >
                {active && <span className="mr-1">&gt;</span>}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="md:hidden font-mono text-xl text-[#8b939e] hover:text-[#f5a524]"
        >
          {open ? "[x]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-[#23272f] transition-[max-height] duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-6 py-3 font-mono text-sm border-b border-[#16191e] ${
              pathname === link.href
                ? "text-[#f5a524]"
                : "text-[#8b939e] hover:text-[#e6e8eb]"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
