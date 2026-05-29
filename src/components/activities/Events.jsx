import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const events = [
  { year: '2025', title: 'TechFest', desc: 'Annual technology symposium', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { year: '2025', title: 'Cultural Eve', desc: 'Annual college cultural festival', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800' },
  { year: '2026', title: 'Alumni Meet', desc: 'Connecting past with present', img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800' },
]

export default function Events() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Time Warp effect on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-[#070B2B]" id="events">
      {/* Time Warp Tunnel */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none flex flex-col justify-center"
        style={{ y: backgroundY }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="w-full h-px border-t border-[#349FCC]/30 border-dashed" 
            style={{ 
              transform: `rotateX(60deg) translateZ(${i * 50}px)`,
              opacity: 1 - (i * 0.05)
            }} 
          />
        ))}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-[#349FCC] to-transparent shadow-[0_0_20px_#349FCC]" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          style={{ scale, opacity }}
          className="text-center mb-24"
        >
          <div className="inline-block px-6 py-2 rounded-full border border-[#349FCC]/50 bg-[#349FCC]/10 backdrop-blur-md mb-6">
            <span className="text-[#349FCC] text-sm tracking-[0.3em] uppercase font-bold">Temporal Log</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Chronological <span className="plasma-text">Events</span>
          </h2>
        </motion.div>

        {/* Time Warp Nodes */}
        <div className="relative max-w-4xl mx-auto">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex items-center gap-8 mb-20 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Event Content */}
              <div className="w-1/2 flex flex-col justify-center holographic p-8 rounded-3xl transform transition-transform hover:scale-105 hover:shadow-[0_0_30px_#349FCC]">
                <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-[#349FCC] text-xl font-black tracking-widest mb-4">{event.year}</p>
                <p className="text-white/60">{event.desc}</p>
              </div>

              {/* Time Node Center */}
              <div className="w-12 h-12 rounded-full bg-[#070B2B] border-2 border-[#349FCC] flex items-center justify-center shadow-[0_0_20px_#349FCC] z-10 shrink-0 relative pulse-glow">
                <div className="w-4 h-4 rounded-full bg-[#349FCC]" />
              </div>

              {/* Image Preview */}
              <div className="w-1/2 h-64 rounded-3xl overflow-hidden portal-card relative group">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2C3A8C]/20 to-[#349FCC]/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

