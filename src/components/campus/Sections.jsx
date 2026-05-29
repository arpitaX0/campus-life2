import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Microscope, Beaker, Globe, ShieldCheck, Cpu, Lightbulb, Building, Home, Utensils, HeartPulse, Wifi, Bus } from 'lucide-react'

// ==========================================
// RESEARCH SECTION (Cyber Grid / Holographic)
// ==========================================
export function Research() {
  const features = [
    { label: 'Quantum AI', icon: Cpu, val: 'Lab 1' },
    { label: 'Bio-Tech', icon: Microscope, val: 'Lab 2' },
    { label: 'Materials', icon: Beaker, val: 'Lab 3' },
    { label: 'Global Sync', icon: Globe, val: 'Node' },
  ]

  return (
    <section className="relative py-32 bg-[#070B2B] cyber-grid-bg overflow-hidden" id="research">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B2B] via-transparent to-[#070B2B] pointer-events-none z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Holographic Prism Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="holographic p-12 rounded-[40px]"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#349FCC] bg-[#349FCC]/10 text-[#349FCC] text-xs font-black tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
            Core Division
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Research & <br/> <span className="plasma-text">Innovation</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
            Pushing the boundaries of theoretical and applied sciences through our state-of-the-art dimensional laboratories.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#349FCC]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#349FCC]/10 flex items-center justify-center group-hover:bg-[#349FCC]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#349FCC]" />
                  </div>
                  <div>
                    <div className="text-white font-bold">{f.label}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{f.val}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Floating Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] float-slow"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#E8BD63] rounded-full blur-[100px] opacity-30" />
          <div className="absolute inset-0 portal-card rounded-[40px] overflow-hidden border-2 border-white/10">
            <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200" alt="Lab" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-[#10B981]/10 mix-blend-overlay" />
            
            {/* Animated HUD overlay */}
            <div className="absolute top-10 left-10 right-10 bottom-10 border border-[#10B981]/30 rounded-[20px] pointer-events-none flex items-center justify-center">
              <div className="w-[300px] h-[300px] border border-[#10B981]/50 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
              <div className="absolute w-[200px] h-[200px] border border-[#E8BD63]/50 rounded-full animate-[spin_7s_linear_reverse_infinite]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ==========================================
// FACILITIES SECTION (Floating Islands)
// ==========================================
export function Facilities() {
  const facilities = [
    { title: 'Premium Hostels', desc: 'In-campus safe residence with modern amenities.', img: '/facilities/premium_hostels.png', icon: Home, span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Food Centers', desc: 'Multi-cuisine cafeterias.', img: '/facilities/food_centers.png', icon: Utensils, span: '' },
    { title: 'Healthcare', desc: 'Dedicated health center.', img: '/facilities/healthcare.png', icon: HeartPulse, span: '' },
    { title: 'Modern Infrastructure', desc: 'AICTE-standard classrooms.', img: '/facilities/modern_infrastructure.png', icon: Building, span: '' },
    { title: 'Campus WiFi', desc: 'High-speed internet.', img: '/facilities/campus_wifi.png', icon: Wifi, span: '' },
    { title: 'Safe Transport', desc: 'Extensive bus fleet.', img: '/facilities/safe_transport.png', icon: Bus, span: 'lg:col-span-2' },
  ]

  return (
    <section className="relative py-32 bg-[#070B2B] overflow-hidden" id="facilities">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Campus <span className="plasma-text">Ecosystem</span>
          </h2>
          <p className="mt-6 text-xl text-white/50 font-light">Floating spatial nodes providing state-of-the-art amenities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon
            return (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative group rounded-[30px] overflow-hidden portal-card float-slow block ${fac.span}`}
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                <img src={fac.img} alt={fac.title} className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                
                {/* Glowing bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#349FCC] to-[#2C3A8C] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_#349FCC]" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:border-[#349FCC] group-hover:bg-[#349FCC]/20 transition-all">
                    <Icon className="w-5 h-5 text-white group-hover:text-[#349FCC]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{fac.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm">{fac.desc}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// IMPACT SECTION (Energy Core / Plasma)
// ==========================================
export function Impact() {
  const stats = [
    { val: '12+', label: 'Research Labs' },
    { val: '400+', label: 'Global Patents' },
    { val: '98%', label: 'Placement Matrix' },
    { val: '50+', label: 'Tech Partners' },
  ]

  return (
    <section className="relative py-32 bg-[#070B2B] overflow-hidden" id="impact">
      {/* Central Energy Core Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#349FCC] to-[#E56D24] opacity-20 filter blur-[150px] pulse-glow" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Metrics of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E56D24] to-[#349FCC]">Excellence</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
              Our energy core drives unparalleled results across academia, research, and global industry integration.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#349FCC]" />
              <span className="text-[#349FCC] text-sm uppercase tracking-widest font-bold">System Status: Optimal</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="liquid-metal p-10 rounded-[30px] text-center group cursor-pointer hover:shadow-[0_0_40px_rgba(0,243,255,0.3)]"
              >
                <div className="text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">
                  {stat.val}
                </div>
                <div className="text-[#349FCC] text-sm tracking-[0.2em] uppercase font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ==========================================
// QUOTE SECTION (Dimensional Portal)
// ==========================================
export function Quote() {
  return (
    <section className="relative py-40 bg-[#070B2B] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B2B] via-transparent to-[#070B2B]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center crystal-edge p-16 md:p-24 rounded-[40px]"
      >
        <div className="w-20 h-20 mx-auto rounded-full border border-[#E8BD63] flex items-center justify-center mb-10 shadow-[0_0_30px_#E8BD63]">
          <span className="text-[#E8BD63] text-4xl leading-none pt-2">"</span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-12">
          The future is not something we enter. The future is something we <span className="plasma-text">engineer</span>.
        </h3>

        <div className="flex flex-col items-center">
          <div className="text-[#E8BD63] font-bold tracking-[0.2em] uppercase text-lg mb-2">Trident Vision</div>
          <div className="text-white/40 tracking-widest text-sm uppercase">Directive 2026</div>
        </div>
      </motion.div>
    </section>
  )
}

