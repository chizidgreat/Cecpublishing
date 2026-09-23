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
  category: 'Editorial' | 'Design & Production' | 'Publishing & Strategy';
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
  quoteModel?: string;
}

export interface PortfolioBook {
  id: string;
  title: string;
  author: string;
  workType: 'my-book' | 'client-work';
  category: 'Books by Chizi Ezugwu' | 'Selected Client Works' | string;
  services: string[];
  description: string;
  format: string;
  trimSize: string;
  isSamplePlaceholder: boolean;
  coverAccent: string;
  coverPattern?: string;
  coverImage?: string;
  objectPosition?: string;
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
  projectTitle: string;
  service: string;
  pageCount: string;
  wordCount: string;
  projectDescription: string;
  deadline: string;
  budgetRange: string;
  manuscriptStatus: string;
}
