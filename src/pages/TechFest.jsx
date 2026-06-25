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
        
        {/* ── Cyber Event Floating Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-purple-950/70 border border-fuchsia-500/20 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(236,72,153,0.15)]">
            <span className="font-mono text-sm font-bold tracking-wider text-fuchsia-400 flex items-center gap-2">
              <Cpu size={16} className="text-fuchsia-400 animate-spin" /> TRIDENT '25
            </span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#schedule" className="hover:text-fuchsia-400 transition-colors">Schedule</a>
              <a href="#tickets" className="hover:text-fuchsia-400 transition-colors">Tickets</a>
              <button 
                onClick={() => setIsReceiptOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white rounded-full transition-all"
              >
                Register Pass
              </button>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Glitch Countdown ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
          {/* Cyber matrix purple gradient circles */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[130px] -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[130px] -z-10" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Live Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 text-center bg-purple-950/20 border border-purple-500/15 p-6 rounded-3xl backdrop-blur-md">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.minutes },
                { label: "Secs", val: timeLeft.seconds }
              ].map((t, idx) => (
                <div key={idx}>
                  <div className="text-3xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-purple-500">
                    {String(t.val).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{t.label}</div>
                </div>
              ))}
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
              TAT TechFest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 animate-pulse">
                TRIDENT 2025.
              </span>
            </h1>

            <p className="text-sm md:text-base max-w-2xl mb-12 text-slate-400 leading-relaxed font-light font-sans">
              Eastern India's mega technology carnival is back. Featuring automated robotics combat, 36-hour developer hackathons, global tech panels, and esports arenas.
            </p>

            <a href="#tickets" className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              Claim Your Entry Pass
            </a>
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


        {/* ── PASS SELECTOR (TICKETS SECTOR) ── */}
        <section id="tickets" className="py-32 bg-purple-950/10 border-y border-purple-500/15">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">Entry Gates</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Claim Entry Passes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.keys(passes).map((key) => {
                const pass = passes[key];
                return (
                  <div 
                    key={key} 
                    className={`bg-[#050212] border p-8 rounded-3xl relative flex flex-col justify-between transition-all ${
                      selectedPass === key 
                        ? 'border-fuchsia-500 shadow-xl shadow-fuchsia-500/10 scale-105' 
                        : 'border-purple-500/25 hover:border-purple-500/50'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 bg-purple-950/40 px-3 py-1 rounded">Register Type</span>
                        <Ticket size={20} className={selectedPass === key ? 'text-fuchsia-400' : 'text-slate-600'} />
                      </div>
                      
                      <h3 className="font-serif text-xl font-bold text-slate-200 mb-2">{pass.name}</h3>
                      <div className="text-3xl font-mono font-black text-fuchsia-400 mb-6">₹{pass.price}</div>

                      <div className="space-y-3 pb-8 border-b border-purple-500/10">
                        {pass.access.map((acc, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-xs text-slate-400 font-sans">
                            <CheckCircle2 size={12} className="text-fuchsia-400 flex-shrink-0" />
                            <span>{acc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => { setSelectedPass(key); setIsReceiptOpen(true); }}
                      className={`w-full mt-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                        selectedPass === key 
                          ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' 
                          : 'bg-purple-950/20 text-slate-300 hover:bg-purple-950/40'
                      }`}
                    >
                      {selectedPass === key ? 'Confirming Ticket' : 'Choose Pass'}
                    </button>
                  </div>
                );
              })}
            </div>
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
                  <button onClick={() => setIsReceiptOpen(false)} className="text-slate-500 hover:text-slate-100 transition-colors">
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
                  <button 
                    onClick={() => setIsReceiptOpen(false)}
                    className="w-full py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                  >
                    Confirm Registration Receipt
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SmoothScrollProvider>
  );
}
