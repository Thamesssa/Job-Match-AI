'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Don't show footer on dashboard routes
  const isDashboardRoute = pathname.startsWith('/candidate') || pathname.startsWith('/recruiter');
  
  if (isDashboardRoute) {
    return null;
  }
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    'For Job Seekers': [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Career Advice', href: '/career-advice' },
      { label: 'Resume Builder', href: '/resume-builder' },
      { label: 'Salary Guide', href: '/salary-guide' },
    ],
    'For Employers': [
      { label: 'Post a Job', href: '/recruiter/post-job' },
      { label: 'Find Candidates', href: '/candidates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
    ],
    'Support': [
      { label: 'Help Center', href: '/help' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      
    </footer>
  );
}