
// Function to handle scroll animations
export function initScrollAnimations() {
  // Only run if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const scrollAnimationElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-reveal-right, .scroll-reveal-left, .scroll-scale'
    );
    
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Only observe once
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px', // negative bottom margin to trigger earlier
      }
    );
    
    scrollAnimationElements.forEach((element) => {
      scrollObserver.observe(element);
    });
  }
  
  // Initialize 3D tilt effect for custom elements
  const tiltElements = document.querySelectorAll('.manual-tilt');
  
  tiltElements.forEach((element) => {
    element.addEventListener('mousemove', (e: MouseEvent) => {
      const htmlElement = element as HTMLElement;
      const rect = htmlElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      htmlElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      htmlElement.style.transition = 'transform 0.1s ease';
    });
    
    element.addEventListener('mouseleave', () => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      htmlElement.style.transition = 'transform 0.5s ease';
    });
  });
}
