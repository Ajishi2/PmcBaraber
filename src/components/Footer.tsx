
import React from 'react';
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barber-dark border-t border-barber-gray/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-barber-gold font-serif text-xl mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneCall size={18} className="text-barber-gold mr-3" />
                <a href="tel:+1234567890" className="text-barber-light hover:text-barber-gold transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-barber-gold mr-3" />
                <a href="mailto:info@pmcbarber.com" className="text-barber-light hover:text-barber-gold transition-colors">
                  info@pmcbarber.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="text-barber-gold mr-3" />
                <span className="text-barber-light">
                  123 Main Street, New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-barber-gold font-serif text-xl mb-6">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-barber-light">Monday - Friday</span>
                <span className="text-barber-gold">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-barber-light">Saturday</span>
                <span className="text-barber-gold">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-barber-light">Sunday</span>
                <span className="text-barber-gold">10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Logo and Social */}
          <div className="flex flex-col items-start md:items-end">
            <h2 className="text-barber-gold font-serif text-3xl md:text-4xl font-bold mb-4">PMC BARBER</h2>
            <p className="text-barber-light/70 mb-6 md:text-right">Premium grooming experience for the modern gentleman.</p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`}
                  className="w-10 h-10 border border-barber-gold/50 flex items-center justify-center text-barber-gold hover:bg-barber-gold hover:text-barber-dark transition-all"
                  aria-label={social}
                >
                  <span className="capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-barber-gray/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-barber-light/50 text-sm mb-4 md:mb-0">
            © {currentYear} PMC Barber. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-barber-light/50 hover:text-barber-gold text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
