import React from 'react';
import { Globe, ShieldCheck, Clock, Users, Plane, FileText, CheckCircle, Headphones } from 'lucide-react';
import { Destination, Branch } from './types';

export const COLORS = {
  primary: '#0F172A',   // Midnight Navy
  secondary: '#1E293B', // Slate Grey
  accent: '#2563EB',    // Royal Blue
  elite: '#B45309',     // Gold/Amber
  light: '#F8FAFC',
};

export interface DestinationExtended extends Destination {
  longDescription: string;
  requirements: string[];
  benefits: string[];
  countryCode: string; 
}

export const DESTINATIONS: DestinationExtended[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    countryCode: 'gb',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    description: 'Personalized visa support for your trip to the UK.',
    longDescription: 'The UK Standard Visitor visa is for tourism, business meetings, or visiting family. Our team carefully checks your documents to make sure your application is strong and meets all embassy requirements.',
    visaType: 'Standard Visitor',
    processingTime: '15-20 Days',
    successRate: '98%',
    requirements: ['6 months bank statements', 'Proof of income', 'Family registration (FRC)', 'Hotel booking details'],
    benefits: ['Stay up to 6 months', 'Multiple entry options', 'Expert document checking']
  },
  {
    id: 'usa',
    name: 'United States',
    countryCode: 'us',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    description: 'Expert help for your US B1/B2 tourist and business visas.',
    longDescription: 'Applying for a US visa involves an interview. We help you prepare for your interview and organize your paperwork so you can clearly show your plans to the visa officer.',
    visaType: 'B1/B2 Visitor',
    processingTime: 'Case Specific',
    successRate: '94%',
    requirements: ['DS-160 form help', 'Interview preparation', 'Tax records (NTN)', 'Business or job proof'],
    benefits: ['Usually 5-year multi-entry', 'Travel for tourism or work', 'Guided interview prep']
  },
  {
    id: 'schengen',
    name: 'Europe (Schengen)',
    countryCode: 'eu',
    image: 'https://images.unsplash.com/photo-1726516012654-04ee62ac4ba5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Visit 27 European countries with a single visa.',
    longDescription: 'A Schengen visa lets you travel across 27 countries like France, Germany, and Italy. we handle the specific rules for each embassy to make your application smooth and easy.',
    visaType: 'Short-stay (C)',
    processingTime: '15 Days',
    successRate: '96%',
    requirements: ['Travel insurance', 'Flight bookings', 'Sufficient funds proof', 'Job NOC letter'],
    benefits: ['Travel freely across Europe', 'Explore multiple cultures', 'Fast 15-day processing']
  },
  {
    id: 'canada',
    name: 'Canada',
    countryCode: 'ca',
    image: 'https://images.unsplash.com/photo-1588733103629-b77afe0425ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Trusted help for Canadian tourist and family visas.',
    longDescription: 'For a Canadian visa, you need to show strong ties to Pakistan. Our experts review your assets and job details to build a strong case for your visit.',
    visaType: 'Visitor Visa',
    processingTime: '4-6 Weeks',
    successRate: '95%',
    requirements: ['Fingerprinting (Biometrics)', 'Invitation (if visiting family)', 'Property or asset proof', 'Bank certificate'],
    benefits: ['Long-term multi-entry', 'Great for family visits', 'High success for checked files']
  },
  {
    id: 'turkey',
    name: 'Turkey',
    countryCode: 'tr',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    description: 'Fast E-Visa and Sticker visa services for Turkey.',
    longDescription: 'Turkey is a favorite for Pakistani tourists. We offer quick E-Visas and help with full sticker visa applications for those who need them.',
    visaType: 'Tourist / Business',
    processingTime: '5-7 Days',
    successRate: '99%',
    requirements: ['Valid Passport & CNIC', 'Job proof', 'Hotel & Flight bookings', 'Personal bank statements'],
    benefits: ['Very fast results', 'Beautiful holiday destination', 'Simple document list']
  },
  {
    id: 'gulf',
    name: 'Dubai & Gulf',
    countryCode: 'ae',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'Quick visa services for Dubai and other Gulf countries.',
    longDescription: 'Planning a quick trip to Dubai or Saudi Arabia? Our dedicated team handles your E-Visa quickly so you don’t have to worry about travel delays.',
    visaType: 'E-Visa',
    processingTime: '48 Hours',
    successRate: '100%',
    requirements: ['Passport copy', 'ID card copy', 'Photo with white background', 'Previous visas (if any)'],
    benefits: ['Results in just 2 days', 'Packages for families', 'Perfect for business trips']
  }
];

export const BRANCHES: Branch[] = [
  {
    city: 'Islamabad Office',
    address: 'Suite 402, I-8 Markaz, Islamabad',
    phone: '+92 51 123 4567',
    email: 'isb@nfimmiconsult.pk',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.377317769975!2d73.0763297!3d33.641617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95471d48348b%3A0x6d859e075c328574!2sI-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1715694852934!5m2!1sen!2s'
  },
  {
    city: 'Lahore Office',
    address: 'Business Wing, Gulberg, Lahore',
    phone: '+92 42 123 4567',
    email: 'lhr@nfimmiconsult.pk',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5361327178055!2d74.3409191!3d31.5165936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a281ee2b9%3A0x1994e09841f3e9c!2sGulberg%20Lahore!5e0!3m2!1sen!2s!4v1715694931842!5m2!1sen!2s'
  }
];

export const TESTIMONIALS = [
  {
    name: "Ahmad Suleman",
    destination: "United Kingdom",
    countryCode: "gb",
    quote: "The team checked my documents very carefully. They found a small mistake in my bank letter that could have caused a problem. I got my visa in 12 days!",
    role: "Architect"
  },
  {
    name: "Mariam Khan",
    destination: "Europe (France)",
    countryCode: "fr",
    quote: "N.F. ImmiConsult helped my family with our Europe trip. They explained everything simply and made the whole process easy for us.",
    role: "Business Owner"
  },
  {
    name: "Zubair Hashmi",
    destination: "USA",
    countryCode: "us",
    quote: "The interview practice they gave me was the best part. I felt ready and confident. My 5-year visa was approved on the spot!",
    role: "Software Engineer"
  }
];

export const HOW_IT_WORKS = [
  {
    title: 'Initial Check',
    description: 'We look at your profile to see if you meet the visa rules.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Document Prep',
    description: 'We help you gather and check all your bank and job papers.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Easy Submission',
    description: 'We handle the online forms and submit everything for you.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Visa Approval',
    description: 'We track your case until your visa is ready for pick up.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export const REASONS = [
  {
    title: 'Expert Document Check',
    description: 'We check every detail so there are no mistakes in your file.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Fast Processing',
    description: 'We work quickly to get your application submitted on time.',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: '98% Success Rate',
    description: 'Our proven results give you the best chance of getting your visa.',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: 'Dedicated Support',
    description: 'Talk directly to our experts who will guide you every step of the way.',
    icon: <Users className="w-5 h-5" />,
  },
];