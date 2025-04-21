'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const links = [
  { label: 'START', href: '/' },
  { label: 'O MNIE', href: '/o-mnie' },
  { label: 'ZDJĘCIA', href: '/galeria' },
  { label: 'OFERTA', href: '/oferta' },
  { label: 'Popularne pytania', href: '/faq' },
  { label: 'KONTAKT', href: 'kontakt' }
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-30 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
        {/* Logo */}
        <div className="text-3xl font-semibold text-white">
          Twoja Strona
        </div>

        {/* Desktop Links (lowered slightly) */}
        <div className="hidden md:flex space-x-12 relative md:top-2">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white uppercase text-lg tracking-wider hover:text-[#FF8C00] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-6">
          <FaFacebookF size={20} className="hover:text-[#FF8C00] transition-colors" />
          <FaYoutube size={20} className="hover:text-[#FF8C00] transition-colors" />
          <FaInstagram size={20} className="hover:text-[#FF8C00] transition-colors" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 w-full absolute top-full left-0 py-4">
          <ul className="flex flex-col items-center space-y-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-white uppercase text-xl tracking-wide hover:text-[#FF8C00] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
