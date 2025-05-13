
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  // List of reliable fallback images from Unsplash
  const fallbackImages = [
    "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=500",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500",
    "https://images.unsplash.com/photo-1584316712724-f5d8fd559eb0?q=80&w=500",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500"
  ];

  // Handle image loading error
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
    
    // If the current image is already a fallback, try a different one
    if (fallbackImages.includes(imgSrc)) {
      // Choose a random fallback that's not the current one
      const availableFallbacks = fallbackImages.filter(img => img !== imgSrc);
      const randomFallback = availableFallbacks[Math.floor(Math.random() * availableFallbacks.length)];
      setImgSrc(randomFallback);
    } else {
      // First error - use a random fallback
      const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
      setImgSrc(randomFallback);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={cn(
      'overflow-hidden relative group',
      className
    )}>
      {/* Enhanced overlay with reveal effect */}
      <div className="absolute inset-0 bg-barber-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-50 transition-all duration-500">
          <div className="w-12 h-12 rounded-full border-2 border-barber-gold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-barber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Image with enhanced zoom effect */}
      <img 
        src={imgSrc} 
        alt={alt} 
        className={cn(
          'w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Loading spinner */}
      <div className={cn(
        'absolute inset-0 bg-barber-dark flex items-center justify-center',
        isLoaded ? 'opacity-0' : 'opacity-100',
        'transition-opacity duration-300'
      )}>
        <div className="w-8 h-8 border-2 border-barber-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Error state */}
      {hasError && (
        <div className="absolute bottom-0 left-0 right-0 bg-barber-dark/80 text-barber-gold text-xs p-1 text-center">
          Alternative image
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
