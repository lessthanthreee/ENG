import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Automation from './components/Automation';
import Gallery from './components/Gallery';
import Barbers from './components/Barbers';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Language } from './types';
import { Scissors } from 'lucide-react';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language | null>(null);

  // Prevent scrolling when language modal is open
  useEffect(() => {
    if (!language) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [language]);

  if (!language) {
    return (
      <div className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col items-center justify-center p-6">
         <div className="mb-12 animate-pulse">
            <div className="bg-brand-gold p-3 rounded-full inline-block">
               <Scissors className="text-black h-12 w-12 transform -rotate-45" />
            </div>
         </div>
         <h1 className="text-white font-display text-2xl uppercase tracking-widest mb-8 text-center">
           Prime<span className="text-brand-gold">Cuts</span> Barbershop
         </h1>
         <div className="flex flex-col gap-4 w-full max-w-sm">
           <button 
             onClick={() => setLanguage('kz')}
             className="w-full py-6 bg-transparent border-2 border-zinc-700 hover:border-brand-gold hover:bg-brand-gold hover:text-black text-white font-display font-bold text-xl uppercase tracking-widest transition-all duration-300 rounded-sm"
           >
             Қазақша
           </button>
           <button 
             onClick={() => setLanguage('ru')}
             className="w-full py-6 bg-transparent border-2 border-zinc-700 hover:border-brand-gold hover:bg-brand-gold hover:text-black text-white font-display font-bold text-xl uppercase tracking-widest transition-all duration-300 rounded-sm"
           >
             Русский
           </button>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-zinc-100 font-sans selection:bg-brand-gold selection:text-black">
      <Navbar lang={language} />
      
      <main>
        <Hero lang={language} />
        <Services lang={language} />
        <Automation lang={language} />
        <Gallery lang={language} />
        <Barbers lang={language} />
        <Testimonials lang={language} />
        <Location lang={language} />
        <FinalCTA lang={language} />
      </main>

      <Footer lang={language} />
      
      <WhatsAppButton 
        message={language === 'ru' ? "Привет! У меня есть вопрос." : "Сәлем! Менде сұрақ бар."}
        label=""
        variant="floating"
      />
    </div>
  );
};

export default App;
