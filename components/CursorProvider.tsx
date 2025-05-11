"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import('./CustomCursor'),
  { 
    ssr: false,
    loading: () => null
  }
);

export default function CursorProvider() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if screen width is greater than mobile breakpoint (768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only render custom cursor on non-mobile devices
  if (isMobile) return null;
  
  return <CustomCursor />;
}