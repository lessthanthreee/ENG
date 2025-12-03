import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface WhatsAppButtonProps {
  message: string;
  label: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'floating';
  className?: string;
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message, 
  label, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-brand-gold hover:bg-brand-goldHover text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] px-8 py-4 uppercase text-sm md:text-base",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-8 py-4 uppercase text-sm md:text-base",
    ghost: "text-zinc-300 hover:text-brand-gold underline underline-offset-4 text-sm",
    floating: "fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
  };

  const widthClass = fullWidth ? "w-full" : "";

  if (variant === 'floating') {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${variants.floating} ${className}`} aria-label={label}>
        <MessageCircle size={32} strokeWidth={2.5} />
      </a>
    );
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {label}
    </a>
  );
};

export default WhatsAppButton;