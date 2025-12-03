import React from 'react';
import Section from './Section';
import { TRANSLATIONS } from '../constants';
import { Star } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsProps {
  lang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].testimonials;

  return (
    <Section id="testimonials" className="bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.items.map((review) => (
          <div key={review.id} className="bg-zinc-900/50 p-8 border border-zinc-800/50 relative">
            <div className="absolute -top-3 left-8 bg-zinc-950 px-2">
               <div className="flex text-brand-gold gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
            <p className="text-zinc-300 italic mb-6 leading-relaxed text-sm md:text-base">"{review.text}"</p>
            <div className="text-brand-gold font-bold uppercase text-xs tracking-widest">— {review.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
