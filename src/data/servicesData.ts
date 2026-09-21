import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ghostwriting',
    title: 'Ghostwriting',
    category: 'Editorial',
    shortDesc: 'Help clients turn ideas, experiences, expertise and concepts into professionally written manuscripts.',
    fullDesc: 'Our ghostwriting service partners experienced collaborative writers with visionary leaders, pastors, professionals, and thought leaders who have profound stories and lessons to share but lack the time or literary technique to write a full book. We preserve your authentic voice while structuring a compelling narrative.',
    deliverables: [
      'In-depth recorded interview sessions & concept discovery',
      'Detailed chapter-by-chapter book outline & structural arc',
      'Complete manuscript drafts written in your natural tone and voice',
      'Iterative revision rounds based on your editorial feedback',
      'Final polished, print-ready digital manuscript with complete transfer of copyright'
    ],
    idealFor: 'Executives, business leaders, coaches, pastors, ministry founders, public figures, and retirees wishing to document their memoirs and expertise.',
    iconName: 'Feather'
  },
  {
    id: 'manuscript-editing',
    title: 'Manuscript Editing',
    category: 'Editorial',
    shortDesc: 'Structural, developmental and line editing depending on the project’s specific requirements.',
    fullDesc: 'We evaluate your completed manuscript from macro to micro levels. Our editorial team refines pacing, thematic cohesion, character development, logic flow, clarity, and sentence-level prose while honouring your original authorial vision.',
    deliverables: [
      'Comprehensive developmental assessment and structural feedback memo',
      'Line-by-line editorial refinements for tone, rhythm, and sentence economy',
      'Pacing, chapter transitions, and argument continuity review',
      'Tracked changes in Microsoft Word or Google Docs for full transparency',
      'One-on-one editorial consultation to review recommended revisions'
    ],
    idealFor: 'Writers with a completed draft who need professional guidance to sharpen narrative impact and literary rigor.',
    iconName: 'FileEdit'
  },
  {
    id: 'proofreading',
    title: 'Proofreading',
    category: 'Editorial',
    shortDesc: 'Final language, grammar, spelling, punctuation and consistency checks before production.',
    fullDesc: 'The critical final defense against typographical errors. Once your manuscript has completed structural editing and layout, our proofreaders conduct meticulous scrutiny of grammar, punctuation, spelling variations, syntax, hyphenation, and typesetting quirks.',
    deliverables: [
      'Rigorous detection of typographical, spelling, and syntactic errors',
      'Consistent adherence to standard style guides (Chicago Manual of Style, Oxford)',
      'Verification of names, headings, footnote references, and chapter numbering',
      'Pre-press final proof check on formatted page proofs (PDF)',
      'Editorial clean certificate of readiness for publication'
    ],
    idealFor: 'Authors with edited manuscripts ready for layout or pre-press verification.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'book-formatting',
    title: 'Book Formatting & Typesetting',
    category: 'Design & Production',
    shortDesc: 'Professional interior formatting for print books and responsive reflowable ebooks.',
    fullDesc: 'A great book requires an interior that feels effortless to read. We engineer elegant margins, running headers, drop caps, orphan and widow suppression, chapter opening styling, and custom font pairings for physical paperbacks, hardcovers, and digital readers.',
    deliverables: [
      'Industry-standard Adobe InDesign interior typesetting for print',
      'Custom typographic styling tailored to your genre (headers, folios, callouts)',
      'Reflowable EPUB and MOBI/KDP-compliant formats for Kindle, Apple Books, and Kobo',
      'Clean handling of tables, footnotes, poetry, and index sections',
      'Print-ready PDF formatted precisely to printer trim size specifications'
    ],
    idealFor: 'Self-publishing authors, academic researchers, and institutions preparing books for physical printing and digital distribution.',
    iconName: 'LayoutTemplate'
  },
  {
    id: 'book-cover-design',
    title: 'Book Cover Design',
    category: 'Design & Production',
    shortDesc: 'Professional covers designed to communicate the book’s genre, subject and identity.',
    fullDesc: 'Your cover is your book’s most important marketing tool. We craft custom, genre-aligned cover art for front, spine, and back covers that instantly capture attention on digital bookshelves and physical bookstore displays.',
    deliverables: [
      'Front cover design optimized for thumbnail readability on online stores',
      'Full jacket wrap design (front, spine, back) calculated to exact printer paper caliper',
      'Custom typography, barcode placement, blurb typography, and author bio styling',
      'High-resolution 300 DPI print-ready CMYK PDFs and RGB digital marketing mockups',
      'Multiple conceptual directions with revision rounds'
    ],
    idealFor: 'Any author releasing a new title who requires an industry-standard, bookstore-quality visual identity.',
    iconName: 'Palette'
  },
  {
    id: 'ebook-publishing',
    title: 'Ebook Publishing',
    category: 'Publishing & Strategy',
    shortDesc: 'Preparation and publishing support for global digital distribution platforms.',
    fullDesc: 'We guide authors through digital publishing, ensuring your ebook is properly validated, meta-tagged, and distributed across major online stores worldwide.',
    deliverables: [
      'Strict EPUB validation compliant with IDPF standards',
      'Metadata optimization (keywords, BISAC categories, search descriptions)',
      'Account setup guidance for Amazon Kindle Direct Publishing (KDP), Smashwords, and local African platforms',
      'Digital pricing and royalty strategy consultation',
      'Step-by-step upload assistance and verification'
    ],
    idealFor: 'Authors wanting international digital reach without upfront physical inventory costs.',
    iconName: 'Smartphone'
  },
  {
    id: 'print-publishing',
    title: 'Print Book Publishing',
    category: 'Publishing & Strategy',
    shortDesc: 'Support with preparing books for physical production and distribution channels.',
    fullDesc: 'Physical books carry lasting weight. We help authors prepare, license, and publish print editions through print-on-demand networks (such as Amazon KDP Print and IngramSpark) and local press runs for book launches and conferences.',
    deliverables: [
      'Selection of appropriate paperweights, binding styles (paperback vs. case laminate hardcover), and laminations',
      'Print-on-demand setup enabling global print availability with zero required inventory',
      'Guidance on printing local author batches for launches in Nigeria',
      'Proof copy ordering and pre-flight physical print inspection',
      'Distribution channel enablement across international bookstores'
    ],
    idealFor: 'Writers, ministers, speakers, and organizations needing physical copies for distribution and retail.',
    iconName: 'BookOpen'
  },
  {
    id: 'book-production',
    title: 'Book Production Management',
    category: 'Design & Production',
    shortDesc: 'End-to-end coordination of editorial, design and physical production requirements.',
    fullDesc: 'A turnkey project management service. CEC Publishing & Media oversees every moving part of turning raw manuscripts into finished boxed books—supervising editors, proofreaders, typesetters, cover artists, and quality printers.',
    deliverables: [
      'Single point of contact project management with clear milestones',
      'Pre-press prep, digital proof approvals, and color profile calibration',
      'Liaison with vetted printing houses in Nigeria and abroad',
      'Quality assurance checks on sample runs and binding durability',
      'Delivery coordination to your specified location'
    ],
    idealFor: 'Clients and busy organizations who want a seamless, hands-off publishing experience executed to elite standards.',
    iconName: 'PackageCheck'
  },
  {
    id: 'publishing-consultancy',
    title: 'Publishing Consultancy',
    category: 'Publishing & Strategy',
    shortDesc: 'Guidance on publishing options, ISBN, platforms, book preparation and strategic decisions.',
    fullDesc: 'Navigating today’s publishing landscape can be overwhelming. We offer one-on-one strategic advisory sessions to help you make informed decisions about your manuscript, distribution channels, timeline, budget, and marketing approach.',
    deliverables: [
      'Objective analysis of traditional vs. self-publishing vs. hybrid models',
      'Manuscript readiness evaluation and target audience mapping',
      'Budget planning and resource allocation recommendations',
      'Book launch roadmap and sales channel guidance',
      'Actionable written strategic summary following the consultation'
    ],
    idealFor: 'Authors at the planning stage who want clarity before committing time and financial resources.',
    iconName: 'Compass'
  },
  {
    id: 'isbn-publishing-guidance',
    title: 'ISBN & Publishing Guidance',
    category: 'Publishing & Strategy',
    shortDesc: 'Official copyright, legal deposit, barcode generation, and ISBN cataloguing advisory.',
    fullDesc: 'Ensure your book is legally recognized and commercially tradable. We advise Nigerian and international authors on registering ISBNs through the National Library of Nigeria, obtaining CIP cataloguing data, barcodes, and copyright protection.',
    deliverables: [
      'National Library of Nigeria ISBN application guidance',
      'EAN-13 high-resolution vector barcode generation with price extensions',
      'National Library Legal Deposit requirement advisory',
      'Copyright statement wording and intellectual property best practices',
      'Cataloguing-in-Publication (CIP) data preparation advice'
    ],
    idealFor: 'Every author and organisation publishing a book for commercial sale or archival in Nigeria.',
    iconName: 'QrCode'
  },
  {
    id: 'digital-content-creation',
    title: 'Digital Content Creation',
    category: 'Media & Content',
    shortDesc: 'Creative written and digital content for individuals, brands and organisations.',
    fullDesc: 'Beyond books, your message needs compelling digital media. We craft high-impact long-form articles, whitepapers, executive thought leadership essays, newsletters, corporate annual reports, and website copy that reflect the highest editorial standards.',
    deliverables: [
      'Corporate profiles, brochures, and commemorative milestone publications',
      'Executive thought leadership pieces and LinkedIn articles',
      'Editorial newsletters and brand magazines',
      'Whitepapers, policy briefs, and research reports',
      'Copy editing and tone harmonization for web content'
    ],
    idealFor: 'Corporations, NGOs, educational institutions, and professionals seeking polished corporate and literary communications.',
    iconName: 'Sparkles'
  },
  {
    id: 'literary-creative-services',
    title: 'Literary & Creative Services',
    category: 'Media & Content',
    shortDesc: 'Other writing, editing and publishing-related creative projects tailored to custom specifications.',
    fullDesc: 'Custom literary engagements requiring bespoke attention. From anthologies, poetry chapbooks, speechwriting, and creative manuscript critiques to translation and adaptation management.',
    deliverables: [
      'Speechwriting for keynotes, commencement addresses, and book launches',
      'Anthology coordination and multi-author editorial management',
      'Poetry collection editing and artistic typesetting',
      'Manuscript appraisal reports with scoring on key narrative criteria',
      'Bespoke creative writing workshops and literary mentorship'
    ],
    idealFor: 'Creative writers, event speakers, literary collectives, and cultural organizations.',
    iconName: 'Bookmark'
  }
];
