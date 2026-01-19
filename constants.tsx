
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
  countryCode: string; // Added for flag icons
}

export const DESTINATIONS: DestinationExtended[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    countryCode: 'gb',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800',
    description: 'Bespoke visa solutions for exploring the UK and its historic landmarks.',
    longDescription: 'The UK Standard Visitor visa allows you to visit the UK for leisure, business, or other private reasons. Our elite audit process ensures your financial documents and ties to Pakistan are presented with maximum credibility to the Home Office.',
    visaType: 'Standard Visitor',
    processingTime: '15-20 Days',
    successRate: '98%',
    requirements: ['6 months bank statements', 'Source of income proof', 'FRC/MRC documentation', 'Confirmed accommodation details'],
    benefits: ['Up to 6 months stay', 'Multi-entry options available', 'Access to premium lounge services']
  },
  {
    id: 'usa',
    name: 'United States',
    countryCode: 'us',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800',
    description: 'Expert guidance for B1/B2 tourism and business visitor visas.',
    longDescription: 'Navigating the US B1/B2 visa interview requires precision and confidence. We provide high-level briefing sessions and document optimization to demonstrate your non-immigrant intent clearly.',
    visaType: 'B1/B2 Visitor',
    processingTime: 'Case Specific',
    successRate: '94%',
    requirements: ['DS-160 confirmation', 'Interview appointment letter', 'Comprehensive tax records', 'Business/Employment credentials'],
    benefits: ['5-year multi-entry common for Pakistanis', 'Tourism and business flexibility', 'Simplified renewal process']
  },
  {
    id: 'schengen',
    name: 'Schengen Area',
    countryCode: 'eu',
    image: 'https://images.unsplash.com/photo-1726516012654-04ee62ac4ba5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Seamless travel documentation for 27 European nations.',
    longDescription: 'A single visa opening doors to 27 European countries. Whether it is France, Italy, or Germany, we manage the specific requirements of the relevant consulate with elite precision.',
    visaType: 'Short-stay (C)',
    processingTime: '15 Days',
    successRate: '96%',
    requirements: ['Travel health insurance', 'Flight itinerary', 'Proof of sufficient funds', 'Employment NOC letter'],
    benefits: ['Borderless travel in Schengen zone', 'Cultural exploration', 'Efficient 15-day processing']
  },
  {
    id: 'canada',
    name: 'Canada',
    countryCode: 'ca',
    image: 'https://images.unsplash.com/photo-1588733103629-b77afe0425ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Reliable processing for Canadian Temporary Resident Visas.',
    longDescription: 'Canada requires a strong demonstration of intent to return. Our specialists focus on auditing your socio-economic ties to ensure a robust application for tourism or family visits.',
    visaType: 'TRV Visitor',
    processingTime: '4-6 Weeks',
    successRate: '95%',
    requirements: ['Digital biometrics', 'Invitation letter (if applicable)', 'Assets/Property valuation', 'Bank maintenance certificate'],
    benefits: ['Multi-entry usually granted until passport expiry', 'Family friendly processing', 'High success rate for audited files']
  },
  {
    id: 'turkey',
    name: 'Turkey',
    countryCode: 'tr',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    description: 'E-Visa and Sticker visa expertise for rapid deployments.',
    longDescription: 'Turkey remains a top choice for Pakistani travelers. We provide expedited e-visa services and meticulous sticker visa filing for those who do not qualify for the electronic system.',
    visaType: 'Tourist / Business',
    processingTime: '5-7 Days',
    successRate: '99%',
    requirements: ['Valid CNIC/Passport', 'Employment proof', 'Hotel/Flight reservations', 'Personal bank statements'],
    benefits: ['Fast turnaround', 'Culturally rich destination', 'Simplified document set']
  },
  {
    id: 'gulf',
    name: 'UAE & Gulf',
    countryCode: 'ae',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'Premier concierge services for Dubai and the wider Gulf region.',
    longDescription: 'The Gulf region demands speed. Our UAE and Saudi Arabia visa units operate 24/7 to ensure your travel plans are never delayed by administrative hurdles.',
    visaType: 'E-Visa',
    processingTime: '48 Hours',
    successRate: '100%',
    requirements: ['Passport scanned copy', 'Smart ID card copy', 'White background photo', 'Previous visa copies (if any)'],
    benefits: ['48-hour processing available', 'Family/Group packages', 'Business travel optimization']
  }
];

export const BRANCHES: Branch[] = [
  {
    city: 'Islamabad Branch',
    address: 'Executive Suite 402, I-8 Markaz, Islamabad',
    phone: '+92 51 123 4567',
    email: 'isb@nfimmiconsult.pk',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.377317769975!2d73.0763297!3d33.641617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95471d48348b%3A0x6d859e075c328574!2sI-8%20Markaz%20Islamabad!5e0!3m2!1sen!2s!4v1715694852934!5m2!1sen!2s'
  },
  {
    city: 'Lahore Branch',
    address: 'Business Wing, Gulberg Town, Lahore',
    phone: '+92 42 123 4567',
    email: 'lhr@nfimmiconsult.pk',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5361327178055!2d74.3409191!3d31.5165936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a281ee2b9%3A0x1994e09841f3e9c!2sGulberg%20Lahore!5e0!3m2!1sen!2s!4v1715694931842!5m2!1sen!2s'
  }
];

export const HOW_IT_WORKS = [
  {
    title: 'Eligibility Audit',
    description: 'A comprehensive review of your profile by our senior consultants.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Document Vetting',
    description: 'Meticulous verification of all financial and professional records.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'Concierge Filing',
    description: 'Secure application submission via our dedicated processing unit.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Approval Support',
    description: 'Liaison and follow-ups until your visa is successfully issued.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export const REASONS = [
  {
    title: 'Elite Case Auditing',
    description: 'We leave nothing to chance. Every case undergoes multiple audit rounds.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Priority Timelines',
    description: 'Our internal workflows are optimized for speed and accuracy.',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: '98% Success Rate',
    description: 'Our results speak for themselves. We only accept viable applications.',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: 'VIP Support',
    description: 'Direct access to your dedicated case manager throughout the process.',
    icon: <Users className="w-5 h-5" />,
  },
];
