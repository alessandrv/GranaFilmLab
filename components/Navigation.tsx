'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="GranaLab Logo"
              width={200}
              height={67}
              className="h-16 w-auto"
              priority
            />
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-gray-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="hover:text-gray-400 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-400 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-gray-400 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
