import React from 'react';
import Section from './Section';
import WhatsAppButton from './WhatsAppButton';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface BarbersProps {
  lang: Language;
}

const Barbers: React.FC<BarbersProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].barbers;

  return (
    <Section id="barbers" className="bg-zinc-900 border-t border-zinc-800">
      <div className="text-center mb-16">
        <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">{t.label}</h2>
        <h3 className="font-display text-3xl md:text-5xl text-white uppercase font-bold">{t.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {t.list.map((barber) => (
          <div key={barber.id} className="flex flex-col items-center text-center group">
            <div className="w-full aspect-[4/5] overflow-hidden mb-6 relative border border-zinc-800 group-hover:border-brand-gold transition-colors">
              <img 
                src={barber.image} 
                alt={barber.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 pt-20">
                  <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1">{barber.role}</p>
                  <h4 className="text-xl md:text-2xl text-white font-display font-bold uppercase">{barber.name}</h4>
              </div>
            </div>
            
            <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-6">{barber.experience}</p>
            
            <WhatsAppButton 
              message={`${t.whatsappPrefix}${barber.name}.`}
              label={`${t.bookBtn} ${barber.name.split(' ')[0]}`}
              variant="outline"
              className="w-full md:w-auto"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Barbers;
