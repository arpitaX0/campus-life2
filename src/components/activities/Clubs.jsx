import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const clubs = [
  { img: 'assets/club_music_1775284853863.png', icon: 'ph ph-music-note', name: 'The Music Club', desc: 'Acoustic wave manipulation & harmonic resonance.' },
  { img: 'assets/club_theatre_1775284777707.png', icon: 'ph ph-chats-circle', name: 'Communication Sync', desc: 'Honing neural linguistic programming and public debate.' },
  { img: 'assets/club_arts_1775284893434.png', icon: 'ph ph-paint-brush', name: 'Visual Arts Matrix', desc: 'Digital painting, holographic sketching, and visual storytelling.' },
  { img: 'assets/club_dance_1775284873092.png', icon: 'ph ph-hand-heart', name: 'Social Nexus', desc: 'Community outreach and institutional social responsibility mapping.' },
  { img: 'assets/club_robot_1775284912133.png', icon: 'ph ph-robot', name: 'Robo-Dynamics', desc: 'Building the autonomous future, one neural processor at a time.' },
  { img: 'assets/club_code_1775285013076.png', icon: 'ph ph-code', name: 'Code Syndicate', desc: 'Quantum algorithms, deep hackathons, and software innovation.' },
]

export default function Clubs() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-[#070B2B]" id="clubs">
      {/* Neural Network Panels Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="neural-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2C3A8C" strokeWidth="0.1" />
            <circle cx="0" cy="0" r="0.5" fill="#349FCC" className="pulse-glow" />
            <line x1="0" y1="0" x2="10" y2="10" stroke="#349FCC" strokeWidth="0.05" />
          </pattern>
          <rect width="100" height="100" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full border border-[#349FCC]/50 bg-[#349FCC]/10 backdrop-blur-md mb-6"
          >
            <span className="text-[#349FCC] text-sm tracking-[0.3em] uppercase font-bold">Neural Nodes</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            Student <span className="plasma-text">Collectives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-xl text-white/50 max-w-2xl mx-auto font-light"
          >
            Connect, synchronize, and evolve your skills with specialized campus networks.
          </motion.p>
        </div>

        {/* Neural Network Node Layout */}
        <div className="flex flex-wrap justify-center gap-8">
          {clubs.map((club, idx) => (
            <motion.div
              key={club.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="relative group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] h-[400px] perspective-[1000px] cursor-pointer"
            >
              {/* Card Container with Magnetic Field Hover Effect */}
              <div className="w-full h-full rounded-[30px] overflow-hidden portal-card relative transition-transform duration-700 transform-gpu group-hover:rotate-x-12 group-hover:-translate-y-5">
                
                {/* Image Background */}
                <img 
                  src={club.img} 
                  alt={club.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-80 transition-all duration-700 group-hover:scale-125"
                />
                
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[#070B2B]/60 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-[#2C3A8C]/40 to-[#349FCC]/20 mix-blend-overlay" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full border border-[#2C3A8C] bg-[#070B2B]/80 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(157,0,255,0.4)] group-hover:shadow-[0_0_40px_#349FCC] group-hover:border-[#349FCC] transition-all duration-500">
                    <i className={`${club.icon} text-2xl text-white group-hover:text-[#349FCC] transition-colors`} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[#349FCC] transition-colors">{club.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{club.desc}</p>
                </div>

                {/* Cyber Scanner line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#349FCC] opacity-0 group-hover:opacity-100 group-hover:animate-[translate-y-full_2s_linear_infinite] shadow-[0_0_20px_#349FCC]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

