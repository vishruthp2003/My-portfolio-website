
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const moveX = (clientX - width / 2) / 25;
      const moveY = (clientY - height / 2) / 25;
      
      heroRef.current.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-30" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
          <span className="block">Vishruth Pobbathi</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-gray-300 font-light">
            Information Science Engineer | Full Stack Web Developer 
          </span>
        </h1>
            
        <button 
          onClick={handleScrollDown}
          className="glass-morphism px-8 py-3 rounded-full text-white font-medium transition duration-300 hover:bg-white/10"
        >
          Discover More
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white/70"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
