import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, Film, Sparkles, Star, Calendar, MapPin, 
  ChevronRight, Info, Heart, ArrowRight, UserCheck
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function CulturalEvening() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const schedule = [
    { time: "05:30 PM", title: "Classical Odissi Welcome", type: "Dance", lead: "TAT Dance Club" },
    { time: "06:15 PM", title: "Battle of the Bands", type: "Music", lead: "Resident Musicians" },
    { time: "07:30 PM", title: "The Heritage Drama", type: "Theatre", lead: "Drama Club Team" },
    { time: "08:45 PM", title: "Indo-Western Couture Show", type: "Fashion", lead: "Stylists Society" },
    { time: "09:30 PM", title: "Live Celebrity Concert", type: "Concert", lead: "Guest Performer" }
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#1A051D] text-[#FAF3EB] min-h-screen font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=2071&auto=format&fit=crop"
              alt="Cultural Evening"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,5,29,0.95) 0%, rgba(26,5,29,0.80) 55%, rgba(26,5,29,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Cultural Evening</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Annual Cultural Carnival
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Cultural Evening<br />
              <span style={{ color: '#E5AA3E' }}>Trifest 2026.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Celebrate creative expressions, traditional drama, fusion dances, and fashion showcases ending with a high-energy live celebrity musical concert.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '5+', lbl: 'Major Shows' }, { val: '400+', lbl: 'Performers' }, { val: '3000+', lbl: 'Attendees' }, { val: 'Live', lbl: 'Music Band' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── SHOWCASE DOMAINS ── */}
        <section id="events" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Performances</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Arts & Showcases</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Odissi & Folk Dance", desc: "Showcasing traditional rhythmic hand movements and narrative expressions from the heart of Odisha.", icon: Sparkles },
              { title: "Symphony & Rock", desc: "A musical battleground pairing classical instrumentations with electric rock vocals.", icon: Music },
              { title: "Visual Arts Gallery", desc: "Annual display of campus oil paintings, water illustrations, clay sculpts and snaps.", icon: Film }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-purple-950/10 border border-[#D4AF37]/20 rounded-2xl shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-xs opacity-70 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ── SCHEDULE DETAILS (TIMELINE LIST) ── */}
        <section id="schedule" className="py-32 bg-purple-950/10 border-y border-[#D4AF37]/20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Time Schedule</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Show Timeline</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {schedule.map((s, idx) => (
                <div 
                  key={idx}
                  className="bg-[#1A051D] border border-[#D4AF37]/15 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#D4AF37]/45 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold font-mono text-[#D4AF37]">{s.time}</span>
                    <span className="text-slate-500">|</span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">{s.title}</h4>
                      <span className="text-[10px] text-slate-500">Performer: {s.lead}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded">
                    {s.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>


        

      </div>
    </SmoothScrollProvider>
  );
}
