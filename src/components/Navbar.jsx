import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import SwatchStrip from './SwatchStrip';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'আমাদের গল্প', path: '/about' },
    { name: 'সার্ভিস', path: '/services' },
    { name: 'গ্যালারি', path: '/gallery' },
    { name: 'যোগাযোগ', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#141414] shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 bg-[#E4212B] rounded-sm group-hover:scale-125 transition-transform duration-200"></span>
            <div className="font-heading text-2xl font-bold text-white tracking-wide">
              আইডিয়া <span className="text-[#FBB33C]">অ্যাডভার্টাইজিং</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-[15px] transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FBB33C] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#FBB33C]'
                      : 'text-[#D9D5C9] hover:text-[#FBB33C]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#E4212B] hover:bg-[#c71822] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 shadow hover:shadow-lg active:scale-95"
            >
              <span>অর্ডার করুন</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-neutral-800 focus:outline-none transition-colors"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Signature 5-Color Swatch Stripe */}
      <SwatchStrip />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1D1A14] border-b border-[#322E22] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2A261E] text-[#FBB33C] font-semibold border-l-4 border-[#FBB33C]'
                    : 'text-[#D9D5C9] hover:bg-[#25221B] hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="pt-3 flex flex-col gap-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full bg-[#E4212B] text-white text-center py-3 rounded-lg font-semibold text-sm shadow"
            >
              অর্ডার / যোগাযোগ করুন
            </Link>
            <a
              href="https://wa.me/8801811940042"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#6FA84B] text-white flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>সরাসরি WhatsApp করুন</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
