import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barber cutting hair" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-10">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full bg-black/50 backdrop-blur-md">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-zinc-300">{t.status}</span>
        </div>
        
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.1] text-white mb-6 drop-shadow-2xl">
          {t.titleStart} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">{t.titleHighlight}</span>
        </h1>
        
        <p className="text-zinc-300 text-base md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-4 md:px-0">
          <WhatsAppButton 
            message={t.whatsappMsg}
            label={t.ctaPrimary} 
            variant="primary"
            className="w-full md:w-auto md:min-w-[240px]"
          />
          <a 
            href="#services"
            className="inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-sm border-2 border-zinc-600 text-white hover:border-white hover:bg-white hover:text-black px-8 py-4 uppercase text-sm md:text-base w-full md:w-auto md:min-w-[200px]"
          >
            {t.ctaSecondary}
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-12 opacity-80">
           {t.badges.map((badge) => (
             <div key={badge} className="flex items-center gap-2 text-zinc-400 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap">
               <span className="text-brand-gold">✓</span> {badge}
             </div>
           ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
