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
        
        {/* ── Artistic Floating Gold Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-[#1A051D]/80 text-[#FAF3EB] border border-[#D4AF37]/35 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="font-serif text-lg font-bold tracking-wider text-[#D4AF37]">TAT Trifest '26</span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-[#FAF3EB]/80">
              <a href="#events" className="hover:text-[#D4AF37] transition-colors">Showcases</a>
              <a href="#schedule" className="hover:text-[#D4AF37] transition-colors">Schedule</a>
              <a href="#spotlight" className="px-4 py-2 bg-[#D4AF37] hover:bg-amber-500 text-slate-950 rounded-full transition-all">VIP Tickets</a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Spotlight reveal ── */}
        <section 
          id="spotlight"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsInside(true)}
          onMouseLeave={() => setIsInside(false)}
          className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 cursor-none"
        >
          {/* Spotlight Mask reveal overlay */}
          <div 
            className="absolute inset-0 bg-[#0C010E] transition-opacity duration-500 pointer-events-none"
            style={{
              clipPath: isInside 
                ? `circle(120px at ${mousePos.x}px ${mousePos.y}px)` 
                : 'circle(0px at 0px 0px)',
              mixBlendMode: 'difference'
            }}
          />

          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=2071&auto=format&fit=crop" 
              alt="Cultural spotlight stage" 
              className="w-full h-full object-cover scale-105"
            />
            {/* Elegant overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A051D]/60 via-[#1A051D]/90 to-[#1A051D]" />
          </div>

          {/* Floating music note symbols (CSS Floating Particles) */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-25">
            <style>{`
              @keyframes note-float {
                0% { transform: translateY(105vh) rotate(0deg); opacity: 0; }
                20% { opacity: 0.8; }
                80% { opacity: 0.8; }
                100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
              }
              .music-note {
                position: absolute;
                bottom: 0;
                font-size: 24px;
                color: #D4AF37;
              }
            `}</style>
            {['♫', '♪', '♬', '♩', '♫', '♪'].map((note, idx) => (
              <div 
                key={idx}
                className="music-note"
                style={{
                  left: `${10 + idx * 18}%`,
                  animation: `note-float ${12 + idx * 3}s ease-in-out ${idx * 2}s infinite`
                }}
              >
                {note}
              </div>
            ))}
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] mb-6 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Hover To Illuminate Stage</span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
              Arts & Cultural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-pink-500 to-purple-500">
                Evening.
              </span>
            </h1>

            <p className="text-sm md:text-base max-w-2xl mb-12 text-slate-300 leading-relaxed font-light font-sans">
              TAT celebrates the symphony of classical traditions and contemporary fusion. Explore stellar dance chronicles, music band showoffs, fashion run walks, and visual art arrays.
            </p>

            <a href="#events" className="px-8 py-4 bg-[#D4AF37] hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              View Showcase Highlights
            </a>
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
