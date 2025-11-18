'use client';

import { useAuth } from '@/app/context/AuthContext';
import { motion } from 'framer-motion';
import { Caveat } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const caveat = Caveat({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
  const { user, logout, isLoginOpen, setIsLoginOpen } = useAuth(); 
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(true); 
    setTimeout(() => {
      setIsLoginOpen(false);
    }, 2000);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`font-bold text-3xl ${caveat.className}`}>
            SpliteXpense
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-500 transition"
            >
              Features
            </button>
            
            {/* Contact Page Link */}
            <Link href="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>

            {!user && pathname !== "/dashboard" && (
              <motion.button
                onClick={toggleLogin}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setIsLoginOpen(false);
                }}
                animate={isLoginOpen ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Login
              </motion.button>
            )}
            
            {user && pathname === "/dashboard" && (
              <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded">
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-transparent backdrop-blur-xs transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-8 py-4 flex flex-col gap-4">
            <button
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="text-left hover:text-blue-500 transition"
            >
              Features
            </button>
            
            <Link 
              href="/contact" 
              className="hover:text-blue-500 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {!user && pathname !== "/dashboard" && (
              <button
                onClick={() => {
                  toggleLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded w-fit"
              >
                Login
              </button>
            )}
            
            {user && pathname === "/dashboard" && (
              <button 
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-red-500 text-white py-2 px-4 rounded w-fit"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
