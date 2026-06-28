import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Calendar, MapPin, Users, Ticket, CheckCircle2, 
  Terminal, Sparkles, X, Plus, Clock, Cpu
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function TechFest() {
  const [selectedPass, setSelectedPass] = useState('general');
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [activeDay, setActiveDay] = useState('day1');

  // Live countdown timer (simulate techfest date)
  const [timeLeft, setTimeLeft] = useState({ days: 85, hours: 14, minutes: 22, seconds: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const passes = {
    general: { name: "General Student Pass", price: 200, access: ["All Keynotes", "General Hackathons", "Sponsor Stalls"] },
    developer: { name: "Elite Developer Pass", price: 500, access: ["All Keynotes", "Main Coding Tracks", "Networking Dinner", "Dev Kit Bag"] },
    vip: { name: "Super VIP Delegate", price: 1000, access: ["All Keynotes", "All Coding & Gaming Tracks", "Exclusive VIP Lounge", "Expert Mentorship Panels", "TechFest Hoodie"] }
  };

  const schedule = {
    day1: [
      { time: "09:30 AM", title: "Cyber-Opening Ceremony", speaker: "Dr. A. K. Nayak", hall: "Auditorium A" },
      { time: "11:00 AM", title: "National Hackathon Kickoff", speaker: "Github Dev Relations Team", hall: "Lab Complex 4" },
      { time: "02:00 PM", title: "Autonomous Robotics Combat", speaker: "TAT Robotics Club", hall: "Central Ground" }
    ],
    day2: [
      { time: "10:00 AM", title: "AI & Generative Coding Panel", speaker: "Google DeepMind Engineers", hall: "Auditorium A" },
      { time: "01:30 PM", title: "Hackathon Final Pitching", speaker: "VC Investor Board", hall: "IEDC Hub" },
      { time: "04:30 PM", title: "Award & Closing Showcase", speaker: "Chief Guest Office", hall: "Central Ground" }
    ]
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#030014] text-slate-100 min-h-screen font-sans overflow-x-hidden selection:bg-fuchsia-500 selection:text-black">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600"
              alt="TechFest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(3,0,20,0.95) 0%, rgba(15,10,35,0.85) 55%, rgba(3,0,20,0.45) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>TechFest</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Annual Technology Symposium
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              TAT TechFest<br />
              <span style={{ color: '#E5AA3E' }}>TRIDENT 2025.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Eastern India's mega technology carnival is back — featuring automated robotics combat, 36-hour developer hackathons, global tech panels, and esports arenas.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[
                { val: String(timeLeft.days).padStart(2, '0'), lbl: 'Days Left' },
                { val: String(timeLeft.hours).padStart(2, '0'), lbl: 'Hours' },
                { val: String(timeLeft.minutes).padStart(2, '0'), lbl: 'Minutes' },
                { val: String(timeLeft.seconds).padStart(2, '0'), lbl: 'Seconds' }
              ].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center min-w-[90px]" style={{ backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-[24px] font-black text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-purple-400 font-mono">{s.val}</div>
                  <div className="text-[9px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── EVENT SCHEDULE (INTERACTIVE DAY SWAP) ── */}
        <section id="schedule" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Time Matrix</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Festival Schedule</h2>
          </div>

          <div className="flex justify-center gap-3 mb-12">
            {['day1', 'day2'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDay === day 
                    ? 'bg-fuchsia-600 text-white shadow-lg' 
                    : 'bg-purple-950/20 border border-purple-500/20 text-slate-400'
                }`}
              >
                {day === 'day1' ? 'Day 01 (Tech Tracks)' : 'Day 02 (Demos & Awards)'}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence mode="wait">
              {schedule[activeDay]?.map((s, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-purple-950/10 border border-purple-500/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-fuchsia-500/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-200">{s.title}</h4>
                      <span className="text-[10px] text-slate-500">Host: {s.speaker}</span>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center text-xs font-bold font-mono">
                    <span className="text-fuchsia-400">{s.time}</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-slate-300">{s.hall}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* ── TICKETS & PASSES ── */}
        <section id="passes" className="py-24 max-w-[1300px] mx-auto px-6 border-t border-purple-950/30">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Entry Authorization</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Get Your Festival Pass</h2>
            <p className="text-slate-400 text-sm mt-3">Select a access pass level and download your instant registration receipt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.keys(passes).map((key) => {
              const pass = passes[key];
              return (
                <motion.div
                  key={key}
                  whileHover={{ y: -5 }}
                  className="bg-purple-950/10 border border-purple-500/10 rounded-3xl p-8 flex flex-col justify-between hover:border-fuchsia-500/30 transition-all relative overflow-hidden"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-4">{pass.name}</h3>
                    <div className="text-3xl font-black text-fuchsia-400 mb-6 font-mono">₹{pass.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pass.access.map((acc, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 size={12} className="text-fuchsia-500" />
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPass(key);
                      setIsReceiptOpen(true);
                    }}
                    className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Claim Pass
                  </button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── REGISTRATION RECEIPT OVERLAY (MOCK TERMINAL) ── */}
        <AnimatePresence>
          {isReceiptOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="w-full max-w-md bg-stone-950 border border-fuchsia-500/30 rounded-3xl p-8 relative overflow-hidden font-mono shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-2xl" />

                <div className="flex justify-between items-center pb-4 border-b border-purple-950 mb-6">
                  <span className="text-xs text-fuchsia-400 font-bold uppercase tracking-widest flex items-center gap-2"><Terminal size={14} /> Receipt Module</span>
                  <button 
                    onClick={() => setIsReceiptOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="text-center py-6 text-fuchsia-400 font-bold text-sm tracking-wider border-y border-purple-950/40">
                    TRIDENT TECHFEST 2025
                  </div>

                  <div className="flex justify-between">
                    <span>Ticket Type:</span>
                    <span className="font-bold text-slate-100">{passes[selectedPass].name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Access clearance:</span>
                    <span className="font-bold text-slate-100 text-right">{passes[selectedPass].access[0]} + {passes[selectedPass].access.length - 1} more</span>
                  </div>

                  <div className="flex justify-between py-4 border-t border-purple-950/40 font-bold text-sm">
                    <span className="text-slate-400">Total Price</span>
                    <span className="text-fuchsia-400 font-mono">₹{passes[selectedPass].price}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-950/40">
                  
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SmoothScrollProvider>
  );
}
