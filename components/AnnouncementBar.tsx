'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
  message: string;
  href?: string;
  storageKey?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export default function AnnouncementBar({ 
  message, 
  href,
  storageKey = 'announcement-dismissed',
  target = '_self',
  rel
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissedTime = localStorage.getItem(storageKey);
    if (dismissedTime) {
      const timeElapsed = Date.now() - parseInt(dismissedTime);
      const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
      
      if (timeElapsed < oneHour) {
        return; // Still within 1 hour, keep hidden
      }
    }
    
    setIsVisible(true);
  }, [storageKey]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, Date.now().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-1 px-4 relative w-full">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">
        <div className="w-8 flex-shrink-0"></div>
        <div className="flex-1 text-center text-sm">
          {href ? (
            <a 
              href={href} 
              className="hover:underline underline-offset-4"
              target={target}
              rel={rel}
            >
              {message}
            </a>
          ) : (
            message
          )}
        </div>
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer flex-shrink-0"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}