import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const highlights = [
    { title: 'Quantum Scholarships', desc: 'Merit-based institutional support for the brightest minds.', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400', link: 'https://campuslife-tat.tekkzy.com/scholarship/' },
    { title: 'Holographic Classrooms', desc: 'Digital-first environments equipped with smart matrices.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400', link: 'https://campuslife-tat.tekkzy.com/ict-Enable-classroom/' },
    { title: 'A.I. Security Grid', desc: '24/7 neural surveillance ensuring absolute safety.', img: '/facilities/security_safety.png', link: 'https://campuslife-tat.tekkzy.com/campus-security/' },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#070B2B] aurora-bg min-h-screen flex items-center">
      {/* Aurora Background Simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D3494B] rounded-full mix-blend-screen filter blur-[150px] opacity-30 float-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#2C3A8C] rounded-full mix-blend-screen filter blur-[150px] opacity-30 float-medium" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full border border-[#2C3A8C]/50 bg-[#2C3A8C]/10 backdrop-blur-md mb-6"
          >
            <span className="text-[#2C3A8C] text-sm tracking-[0.3em] uppercase font-bold">Dimensional Updates</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(157,0,255,0.5)]"
          >
            Current <span className="plasma-text">Initiatives</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Dimensional Portal Left */}
          <motion.div
            initial={{ opacity: 0, rotateY: -30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative h-[600px] portal-card group perspective-[1000px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1400" 
              alt="Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#D3494B]/30 rounded-[30px]" />
            
            {/* Holographic Overlay content */}
            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-z-12">
              <div className="w-16 h-16 rounded-full border border-[#D3494B] flex items-center justify-center mb-6 pulse-glow">
                <div className="w-8 h-8 bg-[#D3494B] rounded-full blur-[10px]" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">The Quantum Lab</h3>
              <p className="text-white/60 text-lg">Exploring neural networks and hardware architecture in our dimensional flagship facility.</p>
            </div>
          </motion.div>

          {/* Liquid Metal / Crystal Edge List Right */}
          <div className="flex flex-col gap-6">
            {highlights.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="crystal-edge p-6 flex items-center gap-8 group hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#2C3A8C]/50 group-hover:border-[#349FCC] transition-colors">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#2C3A8C]/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white group-hover:text-[#349FCC] transition-colors mb-2">{item.title}</h4>
                  <p className="text-white/50">{item.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#349FCC] group-hover:bg-[#349FCC]/20 transition-all">
                  <svg className="w-5 h-5 text-white group-hover:text-[#349FCC] transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;

