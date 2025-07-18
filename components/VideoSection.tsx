'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = 'LAbLUlXweak';

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <section className="w-full flex justify-center bg-background py-16 md:py-24">
      <div className="w-full max-w-[1000px] px-4 md:px-6">
        
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            {!isLoaded ? (
              // Thumbnail with play button for better performance
              <div 
                className="relative w-full h-full bg-gray-100 cursor-pointer group"
                onClick={handleLoadVideo}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Harmony AI Demo Video Thumbnail"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe with best practices
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                title="Harmony AI - Voice-Powered Email Assistant Demo"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}