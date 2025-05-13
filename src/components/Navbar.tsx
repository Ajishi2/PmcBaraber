
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-barber-dark py-3 shadow-md' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-barber-gold font-serif text-2xl md:text-3xl font-bold">
            PMC BARBER
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-barber-light hover:text-barber-gold transition-colors uppercase text-sm tracking-widest"
              >
                {item}
              </a>
            ))}
            <a 
              href="#book" 
              className="bg-barber-gold px-5 py-2 text-barber-dark font-medium uppercase text-sm tracking-wider hover:bg-barber-cream transition-colors"
            >
              Book Now
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-barber-gold"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'fixed left-0 right-0 bg-barber-dark z-40 transition-all duration-300 md:hidden',
        isMenuOpen ? 'top-[60px] opacity-100' : '-top-[400px] opacity-0'
      )}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-barber-light hover:text-barber-gold py-2 transition-colors uppercase text-sm tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="bg-barber-gold px-5 py-3 text-center text-barber-dark font-medium uppercase text-sm tracking-wider hover:bg-barber-cream transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
