'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');
  const isDashboardRoute = pathname.startsWith('/candidate') || pathname.startsWith('/recruiter');
  
  // Don't show header on dashboard routes (they have their own layout)
  if (isDashboardRoute) {
    return null;
  }
  
  const navItems = [
    { label: 'Jobs', href: '/jobs' },
    { label: 'Companies', href: '/companies' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={cn('bg-white border-b border-gray-200 sticky top-0 z-40', className)}>
      
    </header>
  );
}