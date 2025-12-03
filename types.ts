import { LucideIcon } from "lucide-react";

export type Language = 'ru' | 'kz';

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
}

export interface BarberProfile {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  rating: number;
}
