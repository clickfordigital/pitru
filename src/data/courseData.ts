import { CurriculumItem, CourseModule, Testimonial, FaqItem, QuizQuestion } from '../types';

export const STATS = [
  { value: '17+', label: 'Years of Experience', icon: 'Award' },
  { value: '50,000+', label: 'Happy Students', icon: 'Users' },
  { value: '100+', label: 'Video Lessons', icon: 'Video' },
  { value: '4.9/5', label: 'Google Rating', icon: 'Star' },
  { value: 'Lifetime', label: 'Access to Material', icon: 'Infinity' },
];

export const CURRICULUM_20_PARTS: CurriculumItem[] = [
  { id: 1, title: 'Introduction to Pitru Paksh & Ancestral Lineage in Vedic Astrology', category: 'Foundations' },
  { id: 2, title: 'Mythology & Shastric Significance of Pitru Rin & Garuda Purana', category: 'Foundations' },
  { id: 3, title: 'Characteristics & Planetary Significations of the 9th & 5th House', category: 'Kundli' },
  { id: 4, title: 'Understanding Pitru Dosh: Rahu-Ketu Axis & Sun/Moon Afflictions', category: 'Kundli' },
  { id: 5, title: 'Exalted, Debilitated & Afflicted Sun (Surya) in Ancestral Karma', category: 'Kundli' },
  { id: 6, title: 'Symptoms of Pitru Dosh: Financial Stagnation, Health & Progeny Delays', category: 'Diagnosis' },
  { id: 7, title: 'Astronomical Timing: Pitru Paksh 16 Tithis & Kutup Muhurta Calculation', category: 'Muhurta' },
  { id: 8, title: 'Authentic Tarpan Vidhi at Home (Step-by-Step with Til, Water & Kusha)', category: 'Tarpan' },
  { id: 9, title: 'Deva, Rishi & Divya Manushya Tarpan Sequence with Mantras', category: 'Tarpan' },
  { id: 10, title: 'Matru & Pitru Kula Tarpan: Honoring Paternal & Maternal Ancestors', category: 'Tarpan' },
  { id: 11, title: 'Pind Daan Vidhi: Shastric Ingredients, Preparation & Ritual Sanskars', category: 'Pind Daan' },
  { id: 12, title: 'Panchbali Karma: Food Offerings to Cow, Dog, Crow, Devas & Ants', category: 'Rituals' },
  { id: 13, title: 'Shradh Bhojan Rules: Shastric Cooking, Forbidden Items & Serving Ettiquette', category: 'Rituals' },
  { id: 14, title: 'Brahmin & Needy Daan: Anna, Vastra, Til, Deep & Gau Daan Mahatmyam', category: 'Remedies' },
  { id: 15, title: 'Sarva Pitru Amavasya Vidhi — Resolving Unknown & Forgotten Death Dates', category: 'Special Vidhi' },
  { id: 16, title: 'Tripindi Shradh & Narayana Bali — When & Why They Are Prescribed', category: 'Special Vidhi' },
  { id: 17, title: 'Sacred Mantras for Pitru Trupti: Pitru Gayatri & Pitru Suktam with Pronunciation', category: 'Mantras' },
  { id: 18, title: 'Pitru Dosh Remedies for 1st to 12th House Kundli Placements', category: 'Astrology' },
  { id: 19, title: 'Daily & Annual Ancestral Healing Rituals for Modern Householders', category: 'Lifestyle' },
  { id: 20, title: 'Conclusion, Shanti Path & Receiving Continuous Ancestral Blessings (Ashirwad)', category: 'Blessings' },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: 1,
    title: 'Module 1: Introduction to Ancestral Karma & Pitru Paksh',
    lessonsCount: 12,
    durationHours: 4,
    level: 'Beginner',
    description: 'De-mystify the Vedic worldview of Rin (ancestral debts), why Pitrus descend during the dark fortnight of Bhadrapada/Ashwin, and the spiritual physics of ancestral memory.',
    topics: [
      'The 3 Rins: Deva Rin, Rishi Rin, and Pitru Rin explained',
      'The cosmic realm of Pitru Loka and its connection to Surya Dev',
      'Garuda Purana insights on soul transit and ancestral thirst/hunger',
      'Why modern generations experience unexplainable blocks due to Pitru Rin',
    ]
  },
  {
    id: 2,
    number: 2,
    title: 'Module 2: Kundli Diagnosis & Identifying Pitru Dosh',
    lessonsCount: 14,
    durationHours: 5,
    level: 'Beginner',
    description: 'Learn to read birth charts to pinpoint exact indicators of Pitru Dosh, afflicted houses, and karmic debts inherited through paternal and maternal lineages.',
    topics: [
      'The 9th House (Dharma & Ancestors) and 5th House (Poorva Punya)',
      'Sun (Surya) conjunct Rahu or Ketu — Grahan Dosha & Father Lineage',
      'Moon (Chandra) afflictions — Maternal lineage and emotional debt',
      'Saturn aspecting 9th lord or Jupiter — Chronic delay patterns',
    ]
  },
  {
    id: 3,
    number: 3,
    title: 'Module 3: Complete Step-by-Step Tarpan Vidhi at Home',
    lessonsCount: 16,
    durationHours: 6,
    level: 'Intermediate',
    description: 'A practical, high-definition video walkthrough on performing sacred Tarpan with water, black sesame (Kala Til), and sacred Kusha grass on your own balcony or puja altar.',
    topics: [
      'Asana, sacred cord (Yajnopavita / Janeu or Kusha ring) position changes',
      'Brahma Tarpan, Rishi Tarpan, Divya Manushya Tarpan sequences',
      'Yama Tarpan and Pitru Tarpan precise water offering mudras',
      'Audio chants with exact Sanskrit pronunciation and downloadable text',
    ]
  },
  {
    id: 4,
    number: 4,
    title: 'Module 4: Pind Daan, Panchbali & Shradh Bhojan Vidhi',
    lessonsCount: 12,
    durationHours: 5,
    level: 'Intermediate',
    description: 'Master the sacred preparation of Pinds using cooked rice, barley flour, and honey, along with the 5 sacred animal and nature offerings (Panchbali).',
    topics: [
      'Pind formation method with ghee, milk, black sesame, and sacred chants',
      'Panchbali rituals: Gau Bali (Cow), Shwan Bali (Dog), Kaga Bali (Crow), Deva Bali, and Kitee Bali (Ants)',
      'Kutup and Rohina Muhurtas — the exact auspicious times for Shradh',
      'What foods must strictly be included (Kheer, Puri) and prohibited (garlic, onion, masoor)',
    ]
  },
  {
    id: 5,
    number: 5,
    title: 'Module 5: Sarva Pitru Amavasya & Unknown Death Tithis',
    lessonsCount: 14,
    durationHours: 5,
    level: 'Intermediate',
    description: 'Special guidance on how to satisfy all departed ancestors whose death dates or names are unknown, forgotten, or lost over generations.',
    topics: [
      'Mahalaya Sarva Pitru Amavasya rules and highest-merit remedies',
      'How to offer Shradh for ancestors who died of unnatural causes',
      'Lighting the Deepam (Akhanda Pitru Deep) for guiding souls',
      'Collective ancestor satisfaction prayer for peace and family prosperity',
    ]
  },
  {
    id: 6,
    number: 6,
    title: 'Module 6: Vedic Mantras, Stotras & Shastric Daan',
    lessonsCount: 18,
    durationHours: 7,
    level: 'Advanced',
    description: 'Harness the transcendental sound frequencies that immediately reach Pitru Loka to dissolve heavy generational karmas and bestow divine blessings.',
    topics: [
      'Pitru Gayatri Mantra and Pitru Suktam recitation methodology',
      'Gita Chapter 7 & Chapter 11 recitation merits during Shradh',
      'Daan Mahatmyam: Anna Daan (grain), Vastra Daan (clothes), Chhatra (umbrella), and Til Daan',
      'Gau Seva (cow service) as the ultimate instant cleanser of Pitru Rin',
    ]
  },
  {
    id: 7,
    number: 7,
    title: 'Module 7: Special Rites (Tripindi & Narayana Bali)',
    lessonsCount: 15,
    durationHours: 6,
    level: 'Advanced',
    description: 'When home Tarpan is not enough: learn how to diagnose acute spiritual disturbances and understand the mechanics of pilgrimage rites at Gaya, Pehowa, or Haridwar.',
    topics: [
      'Distinction between general Pitru Dosh and acute Preta Badha',
      'Symptoms requiring Tripindi Shradh (3 generations of unappeased souls)',
      'Narayana Bali Shradh: Ritual overview and astrological necessity',
      'Selecting the right Teerth Kshetra (Gaya, Badrinath, Trimbakeshwar)',
    ]
  },
  {
    id: 8,
    number: 8,
    title: 'Module 8: Practical Consultation & Lifetime Family Healing',
    lessonsCount: 10,
    durationHours: 4,
    level: 'Advanced',
    description: 'Transform ancestral healing into a lifelong source of peace, financial growth, and family harmony, with practical consulting frameworks for astrology practitioners.',
    topics: [
      'Client counseling techniques for people fearful of Pitru Dosh',
      'How to convert Pitru Dosh into Pitru Ashirwad (Ancestral Grace)',
      'Designing customized annual remedial calendars for families',
      'Final assessment, certification process, and community Q&A forum',
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    initials: 'RS',
    role: 'IT Professional',
    location: 'Bengaluru',
    rating: 5,
    highlight: 'Career breakthrough after 3 years of stagnation',
    review: 'This course changed my life. We had recurrent career stalls and unexplained health issues. Following Acharya ji\'s authentic Tarpan vidhi and Sarva Pitru remedies at home brought unbelievable calm and a promotion within 2 months.',
    date: 'Verified Student • September 2025'
  },
  {
    id: '2',
    name: 'Neha Verma',
    initials: 'NV',
    role: 'Business Owner',
    location: 'Delhi NCR',
    rating: 5,
    highlight: 'Pure Shastric clarity without superstition or fear',
    review: 'Acharya Ganesh\'s guidance is truly priceless. Every pandit I met gave scary remedies costing lakhs. Here, Acharya ji explained the Garuda Purana logic simply. The home Tarpan and Panchbali steps are crystal clear and empowering.',
    date: 'Verified Student • August 2025'
  },
  {
    id: '3',
    name: 'Amit Kapoor',
    initials: 'AK',
    role: 'Vedic Astrologer & Teacher',
    location: 'Mumbai',
    rating: 5,
    highlight: 'Invaluable chart breakdown for astrology consultants',
    review: 'The chart breakdown sessions and personal doubt clearing from Acharya ji make this course unmatched in India. I now accurately spot 9th house afflictions in client charts and prescribe authentic Shastric remedies.',
    date: 'Verified Student • October 2025'
  },
  {
    id: '4',
    name: 'Priya Mehta',
    initials: 'PM',
    role: 'Educator & Researcher',
    location: 'Jaipur',
    rating: 5,
    highlight: 'Best course on Shradh Vidhi in the digital age',
    review: 'Best astrology course I have ever taken. Everything is taught with deep Shastric depth yet explained in relatable language. The downloadable PDF manual and mantra audio recordings alone are worth 10x the fee.',
    date: 'Verified Student • September 2025'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Eligibility',
    question: 'Is this course beginner-friendly or do I need prior astrology knowledge?',
    answer: 'Yes, absolutely! The course starts from absolute zero. Even if you have never seen a Kundli before, every concept is taught with deep Shastric authenticity yet explained in intuitive, real-world examples without confusing jargon.'
  },
  {
    id: 'faq-2',
    category: 'Rituals',
    question: 'Can I perform Tarpan at home if I am not a Brahmin or priest?',
    answer: 'Yes! The ancient Dharma Shastras (such as Manu Smriti and Garuda Purana) state that every householder (Grihastha) has an innate duty and sacred right to offer water and gratitude to their departed ancestors. We teach simple, authentic rituals using water, black sesame seeds, and Kusha grass that require no costly priest.'
  },
  {
    id: 'faq-3',
    category: 'Rituals',
    question: 'What if I do not know the exact death dates (Tithis) of my ancestors?',
    answer: 'This is a very common concern in modern families. Module 5 is dedicated specifically to Sarva Pitru Amavasya and universal Shradh remedies where you can satisfy all known and unknown ancestors across multiple generations effectively.'
  },
  {
    id: 'faq-4',
    category: 'Course Access',
    question: 'What is the duration of the course and how long do I have access?',
    answer: 'The course includes 20+ hours of structured video lessons across 8 comprehensive modules, plus live Q&A sessions. You receive lifetime access to all course recordings, downloadable guides, and future annual Shradh updates on both web and mobile.'
  },
  {
    id: 'faq-5',
    category: 'Astrology',
    question: 'Will I be able to diagnose Pitru Dosh in my own and family horoscopes?',
    answer: 'Yes! In Module 2 and Module 8, Acharya Ganesh breaks down real case studies covering 9th house afflictions, Sun-Rahu conjuncts, Saturn-Jupiter interactions, and specific planetary combinations so you can confidently evaluate charts.'
  },
  {
    id: 'faq-6',
    category: 'Course Access',
    question: 'Will I receive a verified certificate upon completion?',
    answer: 'Yes, you will receive a verifiable Certificate of Completion authenticated by Acharya Ganesh Academy of Vedic Astrology, with a unique digital verification ID suitable for astrology consultants and learners.'
  },
  {
    id: 'faq-7',
    category: 'Course Access',
    question: 'Can I access the course on my mobile phone and download study materials?',
    answer: 'Yes, the learning portal works seamlessly on Android, iOS, tablets, and laptops. All course PDFs, mantra audio files, and Tarpan checklists can be downloaded for offline reference.'
  },
  {
    id: 'faq-8',
    category: 'Rituals',
    question: 'Can women perform Tarpan or Shradh prayers?',
    answer: 'Yes. In Vedic tradition, women can offer prayers, chant Pitru Gayatri, prepare pure Shradh food, arrange Daan (charity), and offer water Tarpan in specific situations recognized by Rishi Parashara and Katyayana Smriti.'
  }
];

export const PITRU_DOSH_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Do you experience persistent financial delays or sudden unexpected expenses despite hard work?',
    options: [
      { text: 'Frequently — money slips away or deals fall through at the last moment', points: 3, description: 'Classic 9th house / Sun affliction indicator' },
      { text: 'Occasionally during specific transitions', points: 1, description: 'Mild transitory planetary transit effect' },
      { text: 'Rarely / Not noticeable', points: 0, description: 'Balanced financial karma' }
    ]
  },
  {
    id: 2,
    question: 'Do you or family members frequently dream of departed relatives asking for food, water, or shelter?',
    options: [
      { text: 'Yes, vivid recurring dreams of ancestors looking distressed', points: 3, description: 'Direct indication of unappeased Pitru souls' },
      { text: 'Once or twice a year near Shradh / Amavasya', points: 2, description: 'Seasonal reminder to offer Tarpan' },
      { text: 'Never / Very rarely', points: 0, description: 'No acute dream symptoms' }
    ]
  },
  {
    id: 3,
    question: 'Are there recurrent delays in marriage, child conception, or chronic generational ailments in your family?',
    options: [
      { text: 'Yes, repetitive relationship breakdowns or progeny delays across siblings/cousins', points: 3, description: 'Significant Pitru Rin indicator in 5th house' },
      { text: 'Minor delays but eventually resolved', points: 1, description: 'Moderate karmic resistance' },
      { text: 'No such pattern in the family', points: 0, description: 'Harmonious ancestral flow' }
    ]
  },
  {
    id: 4,
    question: 'How often does your household currently perform Tarpan or charity during the 16 days of Pitru Paksh?',
    options: [
      { text: 'Never or only irregular puja due to lack of authentic knowledge', points: 3, description: 'Crucial need for step-by-step Shradh learning' },
      { text: 'We hire a local priest but do not understand the vidhi ourselves', points: 2, description: 'Ready to empower yourself with authentic knowledge' },
      { text: 'We perform complete daily Tarpan with full Shastric rules', points: 0, description: 'Excellent devotion' }
    ]
  }
];
