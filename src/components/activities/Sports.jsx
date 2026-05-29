import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const sports = [
  { img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600&h=800', label: 'Cricket', accent: '#E8BD63' },
  { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600&h=800', label: 'Basketball', accent: '#E56D24' },
  { img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600&h=800', label: 'Football', accent: '#349FCC' },
  { img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=600&h=800', label: 'Volleyball', accent: '#E63946' },
  { img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=600&h=800', label: 'Badminton', accent: '#10B981' },
  { img: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&q=80&w=600&h=800', label: 'Table Tennis', accent: '#8B5CF6' },
]

export default function Sports() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-[#070B2B]" id="sports">
      {/* Infinity Tunnel Background */}
      <div className="absolute inset-0 pointer-events-none perspective-[1000px] flex items-center justify-center opacity-30">
        <div className="w-[200vw] h-[200vh] border-[10px] border-[#349FCC]/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[150vw] h-[150vh] border-[8px] border-[#2C3A8C]/20 rounded-full animate-[spin_40s_linear_reverse_infinite]" />
        <div className="absolute w-[100vw] h-[100vh] border-[5px] border-[#E56D24]/20 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
            >
              <span className="text-white text-sm tracking-[0.3em] uppercase font-bold">Physical Matrices</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white"
            >
              Athletic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349FCC] to-[#E56D24]">Dynamics</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 mt-8 md:mt-0"
          >
            <div className="liquid-metal p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-[#349FCC]">15+</div>
              <div className="text-xs text-white/50 tracking-widest uppercase mt-2">Facilities</div>
            </div>
            <div className="liquid-metal p-6 rounded-2xl text-center">
              <div className="text-4xl font-black text-[#2C3A8C]">5x</div>
              <div className="text-xs text-white/50 tracking-widest uppercase mt-2">Championships</div>
            </div>
          </motion.div>
        </div>

        {/* Infinity Horizontal Scroll Area */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070B2B] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070B2B] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {sports.map((sport, idx) => (
              <motion.div
                key={sport.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0 w-[320px] h-[480px] relative rounded-[30px] overflow-hidden snap-center group cursor-pointer"
              >
                <img 
                  src={sport.img} 
                  alt={sport.label} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Cyber Grid Overlay */}
                <div className="absolute inset-0 cyber-grid-bg opacity-20 mix-blend-screen" />
                
                {/* Glowing borders */}
                <div className="absolute inset-0 border-2 rounded-[30px] pointer-events-none transition-colors duration-500" style={{ borderColor: `${sport.accent}40`, boxShadow: `inset 0 0 30px ${sport.accent}20` }} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Label container floating like liquid metal */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl liquid-metal border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: sport.accent, boxShadow: `0 0 10px ${sport.accent}` }} />
                  <h4 className="text-white text-2xl font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all" style={{ backgroundImage: `linear-gradient(to right, #fff, ${sport.accent})` }}>
                    {sport.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

