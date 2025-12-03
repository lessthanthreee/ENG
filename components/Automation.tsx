import React from 'react';
import Section from './Section';
import WhatsAppButton from './WhatsAppButton';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface AutomationProps {
  lang: Language;
}

const Automation: React.FC<AutomationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].automation;

  return (
    <Section id="automation" className="bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">{t.label}</h2>
          <h3 className="font-display text-3xl md:text-5xl text-white uppercase font-bold mb-6 leading-tight">
            {t.title}
          </h3>
          <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-md leading-relaxed">
            {t.description}
          </p>

          <div className="space-y-8">
            {t.features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-brand-gold">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1 text-sm md:text-base">{feature.title}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <WhatsAppButton 
              message={t.whatsappMsg}
              label={t.cta}
              variant="primary"
              fullWidth={true}
              className="md:w-auto"
            />
          </div>
        </div>

        {/* Visual / Mockup representation */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[320px] md:max-w-xs h-[500px] bg-zinc-950 border-4 border-zinc-800 rounded-[2.5rem] p-4 shadow-2xl md:rotate-3 md:hover:rotate-0 transition-transform duration-500">
             {/* Phone Screen Mockup */}
             <div className="w-full h-full bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col">
                <div className="bg-[#075E54] p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20"></div>
                  <div>
                    <div className="text-white text-xs font-bold">PrimeCuts Bot</div>
                    <div className="text-white/70 text-[10px]">Online</div>
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-3 font-sans text-xs bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat overflow-hidden">
                    <div className="self-end bg-[#E2F7CB] text-black p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                      {t.mockupUser}
                    </div>
                    <div className="self-start bg-white text-black p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm whitespace-pre-line">
                      {t.mockupBot1}
                    </div>
                     <div className="self-end bg-[#E2F7CB] text-black p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                      {t.mockupUser2}
                    </div>
                     <div className="self-start bg-white text-black p-2 rounded-lg rounded-tl-none max-w-[85%] shadow-sm whitespace-pre-line">
                      {t.mockupBot2}
                    </div>
                </div>
                <div className="bg-zinc-800 p-3 text-center text-[10px] text-zinc-500 uppercase tracking-widest">
                  Type a message
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Automation;
