import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import GalleryImage from '../components/GalleryImage';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { initScrollAnimations } from '@/lib/scrollAnimations';

const Index = () => {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Services data
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional haircut with precision cutting, including neck shave and styling.",
      price: "$35",
    },
    {
      title: "Premium Fade",
      description: "Expertly crafted fade haircut with detailed finishing and styling.",
      price: "$45",
      featured: true,
    },
    {
      title: "Hot Towel Shave",
      description: "Luxurious straight razor shave with hot towels, oils, and moisturizing finish.",
      price: "$40",
    },
    {
      title: "Beard Trim & Style",
      description: "Precision beard trim with shape up, hot towel, and conditioning treatment.",
      price: "$30",
    },
    {
      title: "Father & Son Package",
      description: "Haircuts for both father and son, enjoy quality time together.",
      price: "$60",
    },
    {
      title: "Executive Package",
      description: "Premium haircut, hot towel shave, facial scrub, and style.",
      price: "$75",
      featured: true,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Best haircut I've ever had. The attention to detail and the hot towel experience made it perfect.",
      author: "James Wilson",
      rating: 5
    },
    {
      quote: "PMC Barber isn't just a barbershop—it's an experience every man should treat himself to.",
      author: "Michael Rodriguez",
      rating: 5
    },
    {
      quote: "Been coming here for years. Exceptional service and consistently great results every time.",
      author: "Robert Thomas",
      rating: 4
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="h-screen relative flex items-center justify-center bg-barber-dark"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.7), rgba(15,15,15,0.8)), url('https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4 animate-fade-in">
            <span className="block text-reveal">
              <span>Premium</span>
            </span>
            <span className="font-bold gold-gradient shimmer">Grooming Experience</span>
          </h1>
          <p className="text-barber-light/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elevate your style with expert precision at PMC Barber, where tradition meets modern technique.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#book" 
              className="bg-barber-gold hover:bg-barber-cream text-barber-dark px-8 py-3 text-lg uppercase font-medium tracking-wider transition-colors btn-hover-effect gold-glow"
            >
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="border border-barber-gold/70 hover:border-barber-gold text-barber-gold px-8 py-3 text-lg uppercase font-medium tracking-wider transition-colors btn-hover-effect"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-barber-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-barber-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-4"></div>
            <p className="text-barber-light/80 max-w-2xl mx-auto">
              We offer a range of premium grooming services tailored to meet the needs of the modern gentleman.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`scroll-fade-in scroll-fade-in-delay-${index % 3}`}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  featured={service.featured}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-barber-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal-left">
              <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-6">Craftsmanship & Tradition Since 1998</h2>
              <div className="w-24 h-1 bg-barber-gold mb-8"></div>
              <p className="text-barber-light/90 mb-6">
                PMC Barber was founded on the principles of exceptional craftsmanship and dedication to the art of barbering. For over two decades, we've been providing premium grooming services that blend traditional techniques with modern styles.
              </p>
              <p className="text-barber-light/90 mb-6">
                Our master barbers have decades of combined experience and are continuously refining their craft. Each haircut and shave is performed with meticulous attention to detail, ensuring you leave looking and feeling your absolute best.
              </p>
              <p className="text-barber-gold font-serif text-xl mb-8 shimmer">
                "The difference is in the details."
              </p>
              <a 
                href="#book" 
                className="inline-block bg-barber-gold hover:bg-barber-cream text-barber-dark px-8 py-3 text-lg uppercase font-medium tracking-wider transition-colors btn-hover-effect"
              >
                Experience It
              </a>
            </div>
            <div className="relative scroll-reveal-right">
              <div className="relative z-10 transform lg:translate-x-6 lg:translate-y-6 transition-all duration-700 hover:translate-y-4 hover:translate-x-4 manual-tilt">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800" 
                  alt="Barber at work" 
                  className="w-full h-auto shadow-xl"
                />
              </div>
              <div className="absolute inset-0 border-2 border-barber-gold transform lg:-translate-x-6 lg:-translate-y-6 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-barber-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-4"></div>
            <p className="text-barber-light/80 max-w-2xl mx-auto">
              Take a look at our barbershop and our master barbers in action.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=500",
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=500",
              "https://images.unsplash.com/photo-1622296089106-5be28aea3f9a?q=80&w=500",
              "https://images.unsplash.com/photo-1635273051927-385fcc45ad9e?q=80&w=500",
              "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=500",
              "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500",
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=500",
              "https://images.unsplash.com/photo-1584316712724-f5d8fd559eb0?q=80&w=500"
            ].map((src, index) => (
              <div key={index} className={`scroll-scale scroll-fade-in-delay-${index % 3}`}>
                <GalleryImage
                  src={src}
                  alt={`Barbershop gallery image ${index + 1}`}
                  className={cn(
                    index === 0 ? "md:col-span-2 md:row-span-2" : "",
                    index === 3 ? "md:col-span-2" : "",
                    "aspect-square md:aspect-auto"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-barber-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-barber-gold mx-auto mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`scroll-fade-in scroll-fade-in-delay-${index}`}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Book Section */}
      <section 
        id="book" 
        className="section-padding bg-barber-dark"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,15,15,0.8), rgba(15,15,15,0.9)), url('https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-6">Book Your Appointment</h2>
            <p className="text-barber-light/90 mb-8">
              Ready to experience premium grooming? Book your appointment now and elevate your style with our expert barbers.
            </p>
            <div className="bg-barber-dark/80 border border-barber-gold/30 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-barber-gold mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-barber-gray/50 border border-barber-gray/30 p-3 text-barber-light focus:border-barber-gold focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-barber-gold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-barber-gray/50 border border-barber-gray/30 p-3 text-barber-light focus:border-barber-gold focus:outline-none transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-barber-gold mb-2">Service</label>
                  <select 
                    id="service" 
                    className="w-full bg-barber-gray/50 border border-barber-gray/30 p-3 text-barber-light focus:border-barber-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title} - {service.price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-barber-gold mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full bg-barber-gray/50 border border-barber-gray/30 p-3 text-barber-light focus:border-barber-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button 
                type="button" 
                className="w-full bg-barber-gold hover:bg-barber-cream text-barber-dark py-3 text-lg uppercase font-medium tracking-wider transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-barber-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-barber-gold mb-6">Visit Our Shop</h2>
              <div className="w-24 h-1 bg-barber-gold mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-barber-gold mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-barber-gold mb-2">Address</h3>
                    <p className="text-barber-light">123 Main Street<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-barber-gold mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-barber-gold mb-2">Phone</h3>
                    <p className="text-barber-light">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-barber-gold mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-barber-gold mb-2">Email</h3>
                    <p className="text-barber-light">info@pmcbarber.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-barber-gold mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-barber-gold mb-2">Hours</h3>
                    <p className="text-barber-light">Mon-Fri: 9:00 AM - 7:00 PM<br />Sat: 9:00 AM - 6:00 PM<br />Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] md:h-auto">
              {/* This is a placeholder for a map - in a real application you would integrate Google Maps or similar */}
              <div className="w-full h-full bg-barber-dark/50 flex items-center justify-center border border-barber-gray/30">
                <div className="text-center">
                  <div className="text-barber-gold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p className="text-barber-gold text-lg">Interactive Map</p>
                  <p className="text-barber-light/70 text-sm mt-2">(Map integration would be here in production)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
