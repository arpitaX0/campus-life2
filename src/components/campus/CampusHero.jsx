import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-[160px] pb-24 overflow-hidden relative" style={{ background: '#FAF9F6' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-10 text-[#3E3A36]">
            Tradition <br />
            <span className="italic text-[#253386] font-light">meets</span> <br />
            <span className="font-black text-[#253386]">Innovation</span>
          </h1>
          <p className="text-[1.25rem] font-medium text-[#3E3A36]/60 mb-10 max-w-[520px] leading-relaxed font-body">
            Immerse yourself in Odisha's premier technical ecosystem. Rigorous academics meet world-class innovation labs to forge the leaders of tomorrow.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-full flex items-center"
        >
          <div className="absolute -top-12 -left-24 w-[400px] h-[400px] bg-[#E5AA3E]/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          <div className="w-full aspect-[4/5] bg-[#070B2B] rounded-[40px] overflow-hidden shadow-[0_60px_100px_rgba(7,11,43,0.15)] relative group">
            {slides.map((slide, index) => (
              <img 
                key={index}
                src={slide}
                alt={`Elite Campus Environment ${index + 1}`} 
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${index === currentSlide ? 'opacity-90 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B2B]/60 to-transparent z-20 pointer-events-none"></div>
            
            {/* Live Progress Indicator */}
            <div className="absolute bottom-10 left-10 flex items-center gap-6 text-white/60 text-[12px] font-bold tracking-widest uppercase z-30">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${i === currentSlide ? 'w-12 bg-[#E5AA3E]' : 'w-6 bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <span>{String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
