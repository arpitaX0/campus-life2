import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Gift, Camera, Music, Calendar, MapPin, 
  ChevronRight, Info, Heart, ArrowRight, HeartPulse
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function FreshersParty() {
  const [activePolaroid, setActivePolaroid] = useState(null);

  const gallery = [
    { id: 1, title: "Mr. & Ms. Freshers '25", desc: "Celebrating the coronation of B.Tech batch representatives.", angle: "-4deg", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, title: "DJ Night Opening Beat", desc: "Students dancing to the electronic dance beats at the central stage.", angle: "3deg", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Talent Showcase", desc: "First year student performing unplugged acoustic guitar covers.", angle: "-2deg", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop" }
  ];

  const highlights = [
    { title: "DJ EDM Night", desc: "Spanning electronic beats, live sound arrays and interactive lighting rigs.", icon: Music },
    { title: "Mr. & Ms. Freshers", desc: "Interactive crown pageants reviewing student personalities, talents, and skills.", icon: Sparkles },
    { title: "Welcome Dinner", desc: "Multi-course premium dinner prepared to welcome the new academic batches.", icon: Gift }
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#0A0612] text-slate-200 min-h-screen font-sans overflow-x-hidden selection:bg-[#06B6D4] selection:text-black">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
              alt="Freshers Party"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,6,18,0.95) 0%, rgba(20,10,35,0.80) 55%, rgba(10,6,18,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Freshers Party</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Annual Induction Fest
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Welcome to<br />
              <span style={{ color: '#E5AA3E' }}>Trident Academy.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              TAT welcomes the freshers batch of 2026. Join us for a colorful event welcoming new talent, featuring active games, dance showdowns, fashion pageants, and high-energy music.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '2026', lbl: 'Welcome Batch' }, { val: 'DJ EDM', lbl: 'Theme Night' }, { val: 'Mr/Ms', lbl: 'Freshers Pageant' }, { val: '100%', lbl: 'Student Fun' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── POLAROID GALLERY (INTERACTIVE SCALE) ── */}
        <section id="gallery" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">Memories Frame</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Interactive Polaroid Gallery</h2>
          </div>

          {/* Polaroid Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
            {gallery.map((p) => (
              <motion.div 
                key={p.id}
                style={{ rotate: p.angle }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                onClick={() => setActivePolaroid(p.id)}
                className="bg-white text-stone-850 p-4 pb-8 rounded-lg shadow-2xl border border-stone-200 cursor-pointer transition-all"
              >
                <div className="h-64 overflow-hidden relative mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-800">{p.title}</h3>
                <p className="text-[10px] text-stone-500 font-sans leading-relaxed mt-1">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ── PARTY HIGHLIGHTS ── */}
        <section id="highlights" className="py-32 bg-[#06B6D4]/5 border-y border-[#06B6D4]/20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">Party Plan</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Event Highlights</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-slate-900/30 border border-[#06B6D4]/15 rounded-2xl shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-xl flex items-center justify-center text-[#06B6D4] mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-xs opacity-75 leading-relaxed font-sans">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── SCHEDULE DETAILS ── */}
        <section className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest">Event Timeline</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Day Schedule</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-8 font-sans">
                Curated program designed to help juniors interact, showcase talents, and network with seniors in a high-energy fun environment.
              </p>

              <div className="space-y-4 font-mono text-xs">
                {[
                  { time: "04:30 PM", task: "Registrations & Welcome Drink" },
                  { time: "05:15 PM", task: "Inaugural Performance & Speech" },
                  { time: "06:30 PM", task: "Talent Round & Coronation Pageant" },
                  { time: "08:15 PM", task: "DJ Dance Night & Dinner" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center py-3 border-b border-slate-900">
                    <span className="text-[#06B6D4] font-bold">{item.time}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-300 font-sans">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
