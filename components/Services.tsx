import React from 'react';
import Section from './Section';
import WhatsAppButton from './WhatsAppButton';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].services;

  return (
    <Section id="services" className="bg-zinc-950 py-20">
      <div className="text-center mb-16">
        <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">{t.label}</h2>
        <h3 className="font-display text-3xl md:text-5xl text-white uppercase font-bold">{t.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.items.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-brand-panel border border-zinc-800 p-8 hover:border-brand-gold/50 transition-all duration-300 flex flex-col h-full active:scale-[0.98] transform"
          >
            <div className="mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300 origin-left">
              <service.icon size={40} strokeWidth={1.5} />
            </div>
            
            <h4 className="text-lg md:text-xl font-bold text-white uppercase mb-2 leading-tight">{service.name}</h4>
            <div className="text-2xl font-display font-bold text-brand-gold mb-4">{service.price}</div>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>
            
            <div className="mt-auto">
              <WhatsAppButton 
                message={`${t.whatsappPrefix}${service.name}`} 
                label={t.bookBtn} 
                variant="outline" 
                fullWidth
                className="text-xs"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
