import React from 'react';
import Section from './Section';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LocationProps {
  lang: Language;
}

const Location: React.FC<LocationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].location;

  return (
    <Section id="location" className="bg-zinc-900 py-0 pb-0" containerClass="max-w-none px-0">
      <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
        {/* Info Side */}
        <div className="w-full md:w-1/3 bg-brand-panel p-8 md:p-12 flex flex-col justify-center border-r border-zinc-800">
           <h3 className="font-display text-3xl text-white uppercase font-bold mb-8">{t.title}</h3>
           
           <div className="space-y-8">
             <div className="flex gap-4">
               <MapPin className="text-brand-gold flex-shrink-0" />
               <div>
                 <h4 className="text-white font-bold uppercase mb-1 text-sm">{t.addressLabel}</h4>
                 <p className="text-zinc-400 text-sm whitespace-pre-line">{t.address}</p>
               </div>
             </div>

             <div className="flex gap-4">
               <Phone className="text-brand-gold flex-shrink-0" />
               <div>
                 <h4 className="text-white font-bold uppercase mb-1 text-sm">{t.phoneLabel}</h4>
                 <p className="text-zinc-400 text-sm">+7 (700) 123-45-67</p>
               </div>
             </div>

             <div className="flex gap-4">
               <Clock className="text-brand-gold flex-shrink-0" />
               <div>
                 <h4 className="text-white font-bold uppercase mb-1 text-sm">{t.hoursLabel}</h4>
                 <p className="text-zinc-400 text-sm">{t.hours}</p>
               </div>
             </div>
           </div>

           <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noreferrer"
            className="mt-10 text-center border border-zinc-700 text-zinc-300 hover:text-white hover:border-white py-3 px-6 uppercase font-bold text-sm tracking-widest transition-colors w-full md:w-auto block md:inline-block"
           >
             {t.mapBtn}
           </a>
        </div>

        {/* Map Side */}
        <div className="w-full md:w-2/3 h-80 md:h-auto bg-zinc-800 relative grayscale invert contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.737158309867!2d71.4287588769315!3d51.13155797173003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245840a483e586b%3A0x7707e4d825827339!2sMangilik%20El%20Ave%2017%2C%20Astana%20020000!5e0!3m2!1sen!2skz!4v1716386455240!5m2!1sen!2skz" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Barbershop Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-t border-zinc-800 md:border-t-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default Location;
