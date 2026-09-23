import { ServiceItem } from '../types';

export const STANDARD_PAYMENT_TERMS = '50% payment before commencement and 50% upon completion / before final delivery.';

export const VALUE_PRICING_MESSAGE = {
  headline: 'Exceptional Quality. Accessible Pricing.',
  body: 'At CEC Publishing & Media, we believe professional publishing services should be both excellent and accessible. We deliver high-quality writing, editing, design and publishing support at competitive, affordable rates, with each project quoted according to its specific requirements.',
  ctaText: 'Request a Quote',
  ctaSupportingText: 'Tell us about your project and we’ll provide a personalised quotation based on your specific needs.',
  paymentTerms: STANDARD_PAYMENT_TERMS,
  pillars: [
    {
      title: 'Tailored to Project Scope',
      description: 'Quotes are calculated precisely from your manuscript page count, editorial depth, and production format.'
    },
    {
      title: 'Competitive & Affordable Rates',
      description: 'Industry-standard excellence structured to be accessible for authors, ministers, executives, and organizations.'
    },
    {
      title: 'Transparent Milestone Terms',
      description: 'Standard 50% commencement and 50% upon completion schedule with zero hidden charges.'
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ghostwriting',
    title: 'Ghostwriting',
    category: 'Editorial',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Transform ideas, lived experiences, expertise and concepts into professionally written manuscripts.',
    fullDesc: 'Our ghostwriting service pairs dedicated collaborative writers with professionals, ministers, leaders, and thinkers who have compelling messages to share but lack the time or literary bandwidth to write a full book. We preserve your authentic voice, worldview, and terminology while structuring an engaging, reader-focused narrative.',
    deliverables: [
      'In-depth interview sessions & concept discovery recording',
      'Detailed chapter-by-chapter book outline & narrative roadmap',
      'Complete manuscript drafts written in your natural tone and voice',
      'Iterative revision rounds based on your editorial feedback',
      'Final polished digital manuscript with full transfer of copyright ownership'
    ],
    idealFor: 'Professionals, business executives, pastors, ministry founders, public figures, and retirees documenting their memoirs and expertise.',
    iconName: 'Feather'
  },
  {
    id: 'manuscript-editing',
    title: 'Manuscript Editing',
    category: 'Editorial',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Structural, developmental, and line editing tailored to your manuscript’s specific requirements.',
    fullDesc: 'We evaluate your draft comprehensively from broad architecture down to sentence-level nuance. Our editorial process refines pacing, thematic flow, clarity, tone consistency, and argument cohesion while honoring your authorial vision.',
    deliverables: [
      'Comprehensive structural assessment and chapter-by-chapter editorial memo',
      'Line-by-line refinements for tone, rhythm, clarity, and sentence economy',
      'Pacing, chapter transitions, and continuity review',
      'Tracked changes in Microsoft Word or Google Docs for total transparency',
      'One-on-one editorial consultation to review recommended revisions'
    ],
    idealFor: 'Authors with a completed draft who need professional guidance to sharpen literary impact and clarity.',
    iconName: 'FileEdit'
  },
  {
    id: 'proofreading',
    title: 'Proofreading',
    category: 'Editorial',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Final language, grammar, spelling, punctuation and typographical consistency checks before production.',
    fullDesc: 'The essential final defense against errors. Once your manuscript has undergone editing and formatting, our proofreaders conduct meticulous checks to eliminate typos, spelling variations, grammatical slips, punctuation errors, and typesetting anomalies.',
    deliverables: [
      'Rigorous detection of typographical, spelling, and syntactic errors',
      'Verification of names, headings, footnote references, and chapter numbering',
      'Consistent style and hyphenation checks',
      'Pre-press final proof check on formatted page proofs',
      'Clean editorial sign-off for publication readiness'
    ],
    idealFor: 'Authors with completed, edited manuscripts ready for layout or pre-press verification.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'book-formatting',
    title: 'Book Formatting',
    category: 'Design & Production',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Professional interior layout and typesetting for print books and responsive reflowable ebooks.',
    fullDesc: 'A well-designed interior ensures an effortless, comfortable reading experience. We craft balanced margins, elegant running headers, chapter headings, drop caps, and typographic hierarchies formatted specifically for trade print standards and digital screens.',
    deliverables: [
      'Professional interior typesetting tailored to genre standards',
      'Custom chapter opening styling, headers, and pagination',
      'Print-ready PDF formatted to exact printer trim dimensions',
      'Reflowable digital formatting compliant with major e-readers',
      'Clean treatment of tables, callout quotes, and footnotes'
    ],
    idealFor: 'Authors preparing manuscripts for physical printing and digital distribution.',
    iconName: 'LayoutTemplate'
  },
  {
    id: 'book-cover-design',
    title: 'Book Cover Design',
    category: 'Design & Production',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Professional cover designs created to communicate your book’s genre, subject, and unique identity.',
    fullDesc: 'Your cover is your book’s primary visual presentation. We design custom front, spine, and back cover layouts that reflect your subject matter, command attention on digital platforms, and conform to printer mechanical requirements.',
    deliverables: [
      'High-impact front cover design optimized for digital thumbnail visibility',
      'Full jacket wrap (front, spine, back) calculated to exact printer spine width',
      'Typography, barcode placement, blurb layout, and author bio styling',
      'High-resolution 300 DPI print-ready CMYK PDFs and RGB digital mockups',
      'Design direction alignment and revision rounds'
    ],
    idealFor: 'Any author releasing a new title who requires an industry-standard visual presentation.',
    iconName: 'Palette'
  },
  {
    id: 'ebook-publishing',
    title: 'Ebook Publishing',
    category: 'Publishing & Strategy',
    quoteModel: 'Quoted by Project Scope',
    shortDesc: 'Preparation and publishing support for global digital distribution platforms.',
    fullDesc: 'We guide authors through digital publishing setup, ensuring your ebook is properly validated, meta-tagged, and published across major international digital platforms.',
    deliverables: [
      'Ebook file validation compliant with modern standards',
      'Metadata configuration (categories, keywords, and book descriptions)',
      'Account setup guidance for Amazon Kindle Direct Publishing (KDP) and digital platforms',
      'Pricing and royalty guidance',
      'Verification of live digital distribution'
    ],
    idealFor: 'Authors seeking broad digital reach without physical inventory requirements.',
    iconName: 'Smartphone'
  },
  {
    id: 'print-publishing',
    title: 'Print Publishing',
    category: 'Publishing & Strategy',
    quoteModel: 'Quoted by Specifications',
    shortDesc: 'Support with preparing books for physical production and distribution channels.',
    fullDesc: 'Physical books provide lasting tangibility. We assist authors in preparing and publishing print editions through print-on-demand channels as well as managing local print runs for conferences, book launches, and retail distribution.',
    deliverables: [
      'Guidance on paperweights, trim sizes, and binding styles (paperback / hardcover)',
      'Print-on-demand setup for international availability',
      'Assistance with local print runs for Nigerian book launches',
      'Pre-press file checks to prevent printer misalignments',
      'Proof copy review and physical production coordination'
    ],
    idealFor: 'Authors, organizations, and speakers who require physical copies for distribution and sale.',
    iconName: 'BookOpen'
  },
  {
    id: 'publishing-consultancy-isbn',
    title: 'Publishing Consultancy & ISBN',
    category: 'Publishing & Strategy',
    quoteModel: 'Consultation & Advisory',
    shortDesc: 'Guidance on publishing options, National Library of Nigeria ISBN, barcodes, and strategic planning.',
    fullDesc: 'Navigating publishing choices requires strategic clarity. We offer consultative advisory on publishing pathways, copyright, legal deposit requirements, and obtaining official ISBNs and barcodes through the National Library of Nigeria.',
    deliverables: [
      'Objective advisory on self-publishing, print-on-demand, and custom distribution models',
      'National Library of Nigeria ISBN registration guidance',
      'High-resolution vector barcode generation for cover placement',
      'National Library Legal Deposit requirement advisory',
      'Publication timeline planning and budgeting roadmap'
    ],
    idealFor: 'Authors at the planning stage seeking clear direction before committing financial resources.',
    iconName: 'Compass'
  }
];
