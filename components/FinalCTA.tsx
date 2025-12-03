import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FinalCTAProps {
  lang: Language;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-black text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-6xl text-white uppercase mb-6 leading-tight">
          {t.titleStart} <span className="text-brand-gold">{t.titleHighlight}</span>
        </h2>
        <p className="text-zinc-400 text-base md:text-lg mb-10">
          {t.subtitle}
        </p>
        <WhatsAppButton 
          message={t.whatsappMsg} 
          label={t.btn}
          variant="primary"
          className="w-full md:w-auto min-w-[300px] text-lg py-5"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
