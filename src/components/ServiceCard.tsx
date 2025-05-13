
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  featured = false,
}) => {
  return (
    <div 
      className={cn(
        'border p-6 md:p-8 transition-all duration-500 group hover:shadow-xl relative overflow-hidden',
        featured 
          ? 'border-barber-gold bg-gradient-to-b from-barber-gray to-barber-dark hover:shadow-[0_20px_50px_-15px_rgba(200,164,86,0.3)]' 
          : 'border-barber-gray/40 bg-barber-gray/10 hover:border-barber-gray'
      )}
    >
      {/* Background effects */}
      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-barber-gold/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
      
      {/* Featured indicator with animation */}
      {featured && (
        <div className="absolute -right-12 -top-12 transform rotate-45 group-hover:rotate-[42deg] transition-transform duration-500">
          <div className="w-24 h-24 bg-barber-gold/20"></div>
        </div>
      )}
      
      {/* Card content with animations */}
      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4 group-hover:translate-y-0 transform transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-serif text-barber-gold group-hover:text-barber-gold transition-colors duration-500">{title}</h3>
          <span className={cn(
            'text-lg md:text-xl font-semibold transition-all duration-500 transform origin-right',
            featured ? 'text-barber-gold' : 'text-barber-light',
            'group-hover:scale-110'
          )}>
            {price}
          </span>
        </div>
        <p className="text-barber-light/80 mb-auto transform transition-all duration-500 group-hover:text-barber-light">{description}</p>
        <div className="mt-6 transform transition-all duration-500">
          <a 
            href="#book" 
            className={cn(
              'inline-block text-sm uppercase tracking-wider font-medium transition-all duration-500 relative',
              featured ? 'text-barber-gold' : 'text-barber-light group-hover:text-barber-gold',
              'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-barber-gold after:transition-all after:duration-500 group-hover:after:w-full'
            )}
          >
            Book Now
            <span className="inline-block ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
