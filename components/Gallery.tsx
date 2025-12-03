import React from 'react';
import Section from './Section';
import { GALLERY_IMAGES, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].gallery;

  return (
    <Section id="gallery" className="bg-zinc-950" containerClass="max-w-[1400px] mx-auto px-4 md:px-6">
      <div className="mb-12 flex items-end justify-between px-2">
        <div>
           <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-xs md:text-sm">{t.label}</h2>
           <h3 className="font-display text-3xl md:text-4xl text-white uppercase font-bold">{t.title}</h3>
        </div>
        <div className="hidden md:block h-px bg-zinc-800 flex-grow ml-12 mb-4"></div>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {GALLERY_IMAGES.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden group rounded-sm relative">
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-bold uppercase text-xs tracking-widest">{t.overlay}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
