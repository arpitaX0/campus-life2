import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const leaders = [
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'CHAIRMAN',
    name: 'Dr. Chandan Kumar Das',
    subtitle: 'Sports Committee',
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'FACULTY GUIDE',
    name: 'Dr. Mili Panigrahi',
    subtitle: 'Music Club (ETC)',
  },
  {
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'FACULTY GUIDE',
    name: 'Mr. Manoj Kumar Rath',
    subtitle: 'Communication Club',
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000',
    role: 'SPORTS OFFICER',
    name: 'Mr. Pratap Kumar Rath',
    subtitle: 'Sports & Games Committee',
  },
]

export default function Leadership() {
  const [featured, ...rest] = leaders

  return (
    <section className="relative py-32 overflow-hidden bg-[#070B2B]" id="leadership">
      {/* Crystal Edge Background overlay */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #349FCC 25%, transparent 25%, transparent 75%, #349FCC 75%, #349FCC), linear-gradient(45deg, #349FCC 25%, transparent 25%, transparent 75%, #349FCC 75%, #349FCC)', backgroundSize: '100px 100px', backgroundPosition: '0 0, 50px 50px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-white text-sm tracking-[0.3em] uppercase font-bold">Guiding Matrix</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            Club <span className="plasma-text">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured Leader - Crystal Edge Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative h-[600px] crystal-edge group overflow-hidden"
          >
            <div className="absolute inset-2 overflow-hidden crystal-edge">
              <img src={featured.img} alt={featured.name} className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B2B] via-[#070B2B]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-10">
                <div className="inline-block px-4 py-2 bg-[#349FCC]/20 backdrop-blur-md border border-[#349FCC] text-[#349FCC] text-xs font-black tracking-widest uppercase mb-4 shadow-[0_0_20px_#349FCC]">
                  {featured.role}
                </div>
                <h3 className="text-5xl font-black text-white mb-2">{featured.name}</h3>
                <p className="text-[#2C3A8C] text-xl font-bold">{featured.subtitle}</p>
              </div>

              {/* Crystal Scanline */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#349FCC] opacity-50 shadow-[0_0_20px_#349FCC] group-hover:animate-[translate-y-full_3s_ease-in-out_infinite]" />
            </div>
          </motion.div>

          {/* Holographic Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 relative rounded-2xl overflow-hidden holographic group cursor-pointer"
              >
                <img src={leader.img} alt={leader.name} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070B2B] to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <span className="text-[#349FCC] text-[10px] font-black tracking-[0.2em] uppercase mb-2">
                    {leader.role}
                  </span>
                  <h4 className="text-white text-2xl font-bold mb-1">{leader.name}</h4>
                  <p className="text-white/50 text-sm">{leader.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

