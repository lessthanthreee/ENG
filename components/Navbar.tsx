import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  lang: Language;
}

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.automation, href: '#automation' },
    { name: t.barbers, href: '#barbers' },
    { name: t.location, href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-gold p-1.5 rounded-sm group-hover:bg-brand-goldHover transition-colors">
            <Scissors className="text-black h-5 w-5 md:h-6 md:w-6 transform -rotate-45" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white uppercase">
            Prime<span className="text-brand-gold">Cuts</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#services" 
            className="border border-brand-gold text-brand-gold px-6 py-2 text-sm font-bold uppercase hover:bg-brand-gold hover:text-black transition-all"
          >
            {t.bookBtn}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-zinc-950 border-t border-zinc-800 p-8 flex flex-col gap-8 shadow-2xl overflow-y-auto pb-32">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-display font-bold uppercase text-white hover:text-brand-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-brand-gold text-black px-6 py-4 text-center text-lg font-bold uppercase"
          >
            {t.bookBtn}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
