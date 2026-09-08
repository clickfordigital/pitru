export interface CurriculumItem {
  id: number;
  title: string;
  duration?: string;
  category: string;
}

export interface CourseModule {
  id: number;
  number: number;
  title: string;
  lessonsCount: number;
  durationHours: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  description: string;
  topics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  location: string;
  review: string;
  rating: number;
  highlight: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Rituals' | 'Eligibility' | 'Course Access' | 'Astrology';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    description: string;
  }[];
}
