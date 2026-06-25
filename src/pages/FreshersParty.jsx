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
        
        {/* ── Vibrant Floating Party Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-[#0A0612]/80 text-[#FAF3EB] border border-[#06B6D4]/30 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="font-bold tracking-wider text-[#06B6D4]">Freshers '26</span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#gallery" className="hover:text-[#06B6D4] transition-colors">Polaroids</a>
              <a href="#highlights" className="hover:text-[#06B6D4] transition-colors">Highlights</a>
              <a href="#welcome" className="px-4 py-2 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] hover:from-cyan-400 hover:to-purple-500 text-black font-bold rounded-full transition-all">Event Guide</a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Confetti Drop ── */}
        <section id="welcome" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
          {/* Neon light nodes */}
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-[120px] -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/15 blur-[120px] -z-10" />

          {/* Confetti particles shower */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
            <style>{`
              @keyframes confetti-fall {
                0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
                100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
              }
              .confetti-piece {
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 20%;
              }
            `}</style>
            {[...Array(20)].map((_, idx) => {
              const bgColors = ["#06B6D4", "#F97316", "#8B5CF6", "#EC4899"];
              return (
                <div 
                  key={idx}
                  className="confetti-piece animate-pulse"
                  style={{
                    left: `${Math.random() * 95}%`,
                    top: `-20px`,
                    backgroundColor: bgColors[idx % bgColors.length],
                    animation: `confetti-fall ${5 + Math.random() * 5}s linear ${Math.random() * 4}s infinite`
                  }}
                />
              );
            })}
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] mb-6 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 animate-bounce" />
              <span>Theme: Welcoming Batches</span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#F97316] to-[#8B5CF6]">
                Trident Academy.
              </span>
            </h1>

            <p className="text-sm md:text-base max-w-2xl mb-12 text-slate-400 leading-relaxed font-light font-sans">
              TAT welcomes the freshers batch of 2026. Join us for a colorful event welcoming new talent, featuring active games, dance showdowns, fashion pageants, and high-energy music.
            </p>

            <a href="#gallery" className="px-8 py-4 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] text-black font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              View Memories Gallery
            </a>
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
