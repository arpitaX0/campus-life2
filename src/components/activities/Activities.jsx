import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const activityCategories = [
  {
    title: 'Extra Curricular',
    description: 'Trident promotes and nurtures the talents in its students through sports, athletics, and physical activities.',
    icon: 'ph-fill ph-trophy',
    color: '#E56D24',
    href: 'https://activities-tat.tekkzy.com/extra-curricullar/',
    stats: '15+ Sports',
    img: 'https://images.unsplash.com/photo-1461896836934-bd45ba8bf8bd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Co-Curricular',
    description: 'Activities that complement the academic curriculum — debates, quizzes, seminars, workshops.',
    icon: 'ph-fill ph-book-open-text',
    color: '#349FCC',
    href: 'https://activities-tat.tekkzy.com/co-curricular/',
    stats: '30+ Events',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Innovation Lab',
    description: 'Fostering innovation through incubation cells, startup mentoring, and technical project competitions.',
    icon: 'ph-fill ph-lightbulb-filament',
    color: '#E8BD63',
    href: 'https://activities-tat.tekkzy.com/innovation-&-entrepreneurship/',
    stats: 'Innovation Cell',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Sports & Games',
    description: 'World-class sports facilities including cricket ground, football field, basketball, volleyball, badminton, and more.',
    icon: 'ph-fill ph-soccer-ball',
    color: '#10B981',
    href: 'https://activities-tat.tekkzy.com/sports-&-games/',
    stats: '10+ Facilities',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'IEDC',
    description: 'Innovation & Entrepreneurship Development Cell (IEDC) supported by DST, Government of India.',
    icon: 'ph-fill ph-rocket-launch',
    color: '#F59E0B',
    href: 'https://activities-tat.tekkzy.com/iedc(activites)/',
    stats: 'Govt. Recognized',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Incubation Cell',
    description: 'A dedicated incubation center that supports student startups with mentoring, infrastructure, and seed funding.',
    icon: 'ph-fill ph-atom',
    color: '#D3494B',
    href: 'https://activities-tat.tekkzy.com/incubation-cell/',
    stats: 'Startup Support',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Activities() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden bg-[#070B2B] min-h-screen">
      {/* Background Quantum Flux Simulation */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="quantum-flux w-full h-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(0,243,255,0.2)]"
          >
            <span className="plasma-text text-sm tracking-[0.4em] uppercase font-black">Beyond Matrix</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            A World of <span className="text-[#349FCC] drop-shadow-[0_0_20px_#349FCC]">Possibilities</span>
          </motion.h2>
        </div>

        {/* Quantum Interface Layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          
          {/* Holographic Navigation List */}
          <div className="flex flex-col gap-6">
            {activityCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden ${activeIdx === idx ? 'bg-white/10 border-l-4' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}
                style={{ borderColor: activeIdx === idx ? cat.color : 'transparent' }}
              >
                {/* Active Glow State */}
                {activeIdx === idx && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, ${cat.color}33, transparent)` }} />
                )}
                
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg" style={{ backgroundColor: `${cat.color}22`, boxShadow: activeIdx === idx ? `0 0 20px ${cat.color}66` : 'none' }}>
                    <i className={cat.icon} style={{ fontSize: 24, color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">{cat.title}</h3>
                    <span className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: cat.color }}>{cat.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Morphing Geometry Display */}
          <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden border border-white/10 holographic shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative w-full h-full rounded-[30px] overflow-hidden border-2"
                style={{ borderColor: `${activityCategories[activeIdx].color}55` }}
              >
                <img 
                  src={activityCategories[activeIdx].img} 
                  alt={activityCategories[activeIdx].title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B2B] via-[#070B2B]/40 to-transparent" />
                
                {/* Inner Content overlay */}
                <div className="absolute bottom-0 left-0 w-full p-12 transform translate-z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6" style={{ background: activityCategories[activeIdx].color, boxShadow: `0 0 30px ${activityCategories[activeIdx].color}` }}>
                      <i className="ph-fill ph-check text-white text-xl" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{activityCategories[activeIdx].title}</h3>
                    <p className="text-white/80 text-lg max-w-xl leading-relaxed">{activityCategories[activeIdx].description}</p>
                    <a href={activityCategories[activeIdx].href} className="inline-flex items-center gap-3 mt-8 text-white font-bold tracking-widest uppercase text-sm hover:gap-5 transition-all">
                      Access Terminal <i className="ph ph-arrow-right" style={{ color: activityCategories[activeIdx].color }} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

