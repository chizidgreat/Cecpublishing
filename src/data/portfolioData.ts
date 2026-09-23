import { PortfolioBook } from '../types';

/**
 * PORTFOLIO CATALOG
 * 
 * Six actual book covers:
 * - Four books authored by Chizi Ezugwu
 * - Two selected client works completed for clients by CEC Publishing & Media
 * 
 * Categories:
 * - "Books by Chizi Ezugwu"
 * - "Selected Client Works"
 */
export const PORTFOLIO_BOOKS: PortfolioBook[] = [
  // 1. Books by Chizi Ezugwu (First Four)
  {
    id: 'my-book-01',
    title: 'Half-Baked Bread',
    author: 'Chizi Ezugwu',
    workType: 'my-book',
    category: 'Books by Chizi Ezugwu',
    services: ['Authored Work', 'Publishing & Editorial Direction', 'Book Formatting', 'Cover Design'],
    description: 'The “Developing Nation” status permanently tagged on Africa by the big brother, Europe seems to be the result of her woes; a vicious circle... just like Helen’s big sister role to Kachi in “Half-Baked Bread”. A celebrated work by Chizi Ezugwu exploring self-determination and African socioeconomic reality.',
    format: 'Print & Digital Editions',
    trimSize: '5.5" x 8.5" Trade Paperback',
    isSamplePlaceholder: false,
    coverAccent: '#A8381D',
    coverPattern: 'geometric',
    coverImage: '/images/books/my-book-01.jpg'
  },
  {
    id: 'my-book-02',
    title: 'Licensed Crime',
    author: 'Chizi Ezugwu',
    workType: 'my-book',
    category: 'Books by Chizi Ezugwu',
    services: ['Authored Work', 'Publishing & Editorial Direction', 'Book Formatting', 'Cover Design'],
    description: 'A novel by Chizi Ezugwu.',
    format: 'Print & Digital Editions',
    trimSize: 'Standard Trade',
    isSamplePlaceholder: false,
    coverAccent: '#1A365D',
    coverPattern: 'sunburst',
    coverImage: '/images/books/my-book-02.jpg'
  },
  {
    id: 'my-book-03',
    title: 'Can I Still Become a Successful Artist?',
    author: 'Chizi Ezugwu',
    workType: 'my-book',
    category: 'Books by Chizi Ezugwu',
    services: ['Authored Work', 'Publishing & Editorial Direction', 'Book Formatting', 'Cover Design'],
    description: 'The Practical Blueprint for Building an Independent Music Career in 2026 and Beyond.',
    format: 'Print & Digital Editions',
    trimSize: 'Standard Trade',
    isSamplePlaceholder: false,
    coverAccent: '#1E293B',
    coverPattern: 'diagonal',
    coverImage: '/images/books/my-book-03.jpg'
  },
  {
    id: 'my-book-04',
    title: 'The Money You Are Not Seeing',
    author: 'Chizi Ezugwu',
    workType: 'my-book',
    category: 'Books by Chizi Ezugwu',
    services: ['Authored Work', 'Publishing & Editorial Direction', 'Book Formatting', 'Cover Design'],
    description: 'Making massive money from what you know. Opportunities are everywhere. Wealth belongs to those who can see them — see opportunities, create value, build wealth, and leave a legacy.',
    format: 'Print & Digital Editions',
    trimSize: 'Standard Trade',
    isSamplePlaceholder: false,
    coverAccent: '#2D1B36',
    coverPattern: 'classic',
    coverImage: '/images/books/my-book-04.jpg'
  },

  // 2. Selected Client Works (Final Two - Completed for clients by CEC Publishing & Media)
  {
    id: 'client-work-01',
    title: 'Pecksniffian: A Practical Guide to Authentic Living in a World of Appearance',
    author: 'Evang. Kelvin Dike',
    workType: 'client-work',
    category: 'Selected Client Works',
    services: ['Publishing Support', 'Book Formatting', 'Cover Design'],
    description: 'A Practical Guide to Authentic Living in a World of Appearance — The Danger of a Fake Life and the Beauty of True Character. Completed for client by CEC Publishing & Media.',
    format: 'Commissioned Publication',
    trimSize: 'Standard Trade',
    isSamplePlaceholder: false,
    coverAccent: '#0F2C2C',
    coverPattern: 'vintage',
    coverImage: '/images/books/client-work-01.jpg'
  },
  {
    id: 'client-work-02',
    title: 'Anneal: The Act of Becoming Stronger Through Pressure',
    author: 'Betsy Mbrukem',
    workType: 'client-work',
    category: 'Selected Client Works',
    services: ['Publishing Support', 'Editorial Direction', 'Book Formatting', 'Cover Design'],
    description: 'Structure, not pressure. Integrity, not hype. ANNEAL is a journey of healing, growth and becoming a stronger you. It explores how pressure, pain, difficulty and seasons of change can become part of a process that builds character, clarity and purpose. Completed for client by CEC Publishing & Media.',
    format: 'Commissioned Publication',
    trimSize: 'Standard Trade',
    isSamplePlaceholder: false,
    coverAccent: '#2C1D11',
    coverPattern: 'curved',
    coverImage: '/images/books/client-work-02.jpg',
    objectPosition: 'left center'
  }
];

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Books by Chizi Ezugwu',
  'Selected Client Works'
] as const;
