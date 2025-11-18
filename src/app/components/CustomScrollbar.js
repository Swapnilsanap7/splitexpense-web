'use client'; 

import { useEffect } from 'react';

export default function CustomScrollbar() {
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      document.body.classList.add('scrolling'); 
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove('scrolling'); 
      }, 1500); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; 
}
