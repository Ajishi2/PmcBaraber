
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, rating }) => {
  return (
    <div className="bg-barber-gray/20 p-6 md:p-8 border border-barber-gray/30 hover:border-barber-gold/50 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(200,164,86,0.2)] group relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-barber-gold/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
      <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-barber-gold/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out delay-100"></div>
      
      {/* Star rating with animation */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg 
            key={index} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={index < rating ? "#C8A456" : "none"} 
            stroke={index < rating ? "none" : "#C8A456"}
            className={cn(
              "w-5 h-5 mr-1 transition-all duration-300",
              "group-hover:opacity-100 group-hover:transform",
              index === 0 ? "group-hover:translate-y-0 opacity-70" : 
              index === 1 ? "group-hover:translate-y-0 delay-75 opacity-80" : 
              index === 2 ? "group-hover:translate-y-0 delay-100 opacity-90" : 
              index === 3 ? "group-hover:translate-y-0 delay-150 opacity-95" : 
              "group-hover:translate-y-0 delay-200"
            )}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
      
      {/* Quote with animation */}
      <p className="text-barber-light italic mb-4 transition-all duration-500 group-hover:text-barber-light">"{quote}"</p>
      
      {/* Author with shimmering effect */}
      <p className="text-barber-gold font-serif text-lg relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-barber-gold/50 after:origin-bottom-right after:transition-transform after:duration-500 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">— {author}</p>
    </div>
  );
};

export default TestimonialCard;
