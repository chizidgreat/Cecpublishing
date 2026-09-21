export type Page = 
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'authors'
  | 'process'
  | 'faq'
  | 'contact'
  | 'quote'
  | 'verification';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'Editorial' | 'Design & Production' | 'Publishing & Strategy' | 'Media & Content';
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface PortfolioBook {
  id: string;
  title: string;
  author: string;
  category: 'Non-Fiction' | 'Faith & Ministry' | 'Business & Leadership' | 'Fiction' | 'Academic' | 'Memoir';
  services: string[];
  description: string;
  format: string;
  trimSize: string;
  isSamplePlaceholder: boolean;
  coverAccent: string;
  coverPattern?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Editorial' | 'Publishing' | 'Costs & Timelines';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectType: string;
  estimatedBudget: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  pageCount: string;
  wordCount: string;
  projectDescription: string;
  deadline: string;
  budgetRange: string;
  manuscriptStatus: string;
}
