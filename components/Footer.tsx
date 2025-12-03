import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <span className="font-display font-bold text-xl tracking-tighter text-white uppercase">
            Prime<span className="text-brand-gold">Cuts</span>
          </span>
           <p className="text-zinc-600 text-xs mt-2">© {new Date().getFullYear()} PrimeCuts Barbershop. {t.rights}</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
