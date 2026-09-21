import { PortfolioBook } from '../types';

/**
 * PORTFOLIO CATALOG
 * 
 * NOTE FOR CEC PUBLISHING & MEDIA:
 * These items represent sample project placeholders demonstrating layout,
 * typography, and service classification. As real titles are published,
 * simply replace or add new book objects to this array.
 */
export const PORTFOLIO_BOOKS: PortfolioBook[] = [
  {
    id: 'sample-project-01',
    title: 'Echoes of the Niger',
    author: '[Sample Author: Dr. E. Okafor]',
    category: 'Non-Fiction',
    services: ['Developmental Editing', 'Interior Formatting', 'Print Production'],
    description: 'A socio-historical inquiry examining cultural evolution and community resilience in southeastern Nigeria.',
    format: 'Hardcover & Paperback',
    trimSize: '6" x 9"',
    isSamplePlaceholder: true,
    coverAccent: '#16223B',
    coverPattern: 'geometric'
  },
  {
    id: 'sample-project-02',
    title: 'The Purpose-Driven Leader',
    author: '[Sample Author: Pastor M. Adeleke]',
    category: 'Faith & Ministry',
    services: ['Ghostwriting Collaboration', 'Cover Design', 'Ebook & Print Publishing'],
    description: 'A 12-chapter leadership handbook designed for church executives, ministry stewards, and marketplace leaders.',
    format: 'Paperback & Kindle Ebook',
    trimSize: '5.5" x 8.5"',
    isSamplePlaceholder: true,
    coverAccent: '#1A365D',
    coverPattern: 'sunburst'
  },
  {
    id: 'sample-project-03',
    title: 'Scaling African Enterprises',
    author: '[Sample Author: K. C. Nwankwo, MBA]',
    category: 'Business & Leadership',
    services: ['Manuscript Editing', 'Cover Design', 'Typesetting', 'ISBN Registration'],
    description: 'Strategic frameworks and operating principles for small-to-medium scale founders navigating emerging markets.',
    format: 'Paperback & Global POD',
    trimSize: '6" x 9"',
    isSamplePlaceholder: true,
    coverAccent: '#1E293B',
    coverPattern: 'diagonal'
  },
  {
    id: 'sample-project-04',
    title: 'When Dust Whispers',
    author: '[Sample Author: Chidera V. Eze]',
    category: 'Fiction',
    services: ['Proofreading', 'Interior Typesetting', 'Cover Design'],
    description: 'A literary novel exploring diaspora return, generational ties, and reconciliation in modern Enugu.',
    format: 'Paperback & Ebook',
    trimSize: '5" x 8"',
    isSamplePlaceholder: true,
    coverAccent: '#2D1B36',
    coverPattern: 'curved'
  },
  {
    id: 'sample-project-05',
    title: 'Pedagogy in Transition',
    author: '[Sample Author: Prof. A. I. Nnamani]',
    category: 'Academic',
    services: ['Copyediting', 'Indexing', 'Typesetting', 'Print Management'],
    description: 'Comprehensive academic textbook on curriculum redesign and instructional technologies in higher education.',
    format: 'Clothbound Hardcover & Digital PDF',
    trimSize: '7" x 10"',
    isSamplePlaceholder: true,
    coverAccent: '#0F2C2C',
    coverPattern: 'classic'
  },
  {
    id: 'sample-project-06',
    title: 'Footprints Across Coal City',
    author: '[Sample Author: Elder B. U. Okoli]',
    category: 'Memoir',
    services: ['Ghostwriting', 'Photo Archiving', 'Custom Cover', 'Limited Hardcover Run'],
    description: 'A personal memoir reflecting on five decades of civic duty, mining heritage, and family life in Enugu.',
    format: 'Commemorative Hardcover',
    trimSize: '6" x 9"',
    isSamplePlaceholder: true,
    coverAccent: '#2C1D11',
    coverPattern: 'vintage'
  }
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Non-Fiction',
  'Faith & Ministry',
  'Business & Leadership',
  'Fiction',
  'Academic',
  'Memoir'
] as const;
