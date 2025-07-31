'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-5 left-5 z-50 px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white text-xl font-bold shadow-2xl">
        Spark
      </div>

      {/* Desktop Center Navigation */}
      <nav className="hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl flex items-center gap-6 px-6 py-2 rounded-full text-white">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-2 py-1 transition duration-300 ease-in-out hover:text-white ${
                  isActive ? 'font-semibold text-white' : 'text-white/70'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full mr-1" />
                )}
                <span className="ml-4">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Buttons - Top Right */}
      <div className="hidden md:flex fixed top-5 right-5 z-50 gap-4">
        <Link
          href="/signin"
          className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl px-4 py-2 rounded-full text-white hover:bg-white/20 transition"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl px-4 py-2 rounded-full text-white hover:bg-white/20 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Hamburger Icon - Top Right */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-2 rounded-full text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-white text-xl">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white/80 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4 mt-6">
            <Link
              href="/signin"
              className="px-4 py-2 border border-white/30 rounded-full bg-white/10 hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-white/30 rounded-full bg-white/10 hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

