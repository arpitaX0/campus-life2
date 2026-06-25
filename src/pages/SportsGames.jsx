import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Activity, CheckCircle, Flame
} from 'lucide-react';

export default function SportsGames() {
  const [activeCategory, setActiveCategory] = useState('outdoor');

  const sportsData = {
    outdoor: [
      { name: "Cricket", details: "Lush green ground with 3 turf wickets and professional practice nets.", icon: "🏏" },
      { name: "Football", details: "Full-sized playground with modern post frames and tournament markings.", icon: "⚽" },
      { name: "Volleyball", details: "Outdoor floodlit clay courts hosting inter-college tournaments.", icon: "🏐" },
      { name: "Athletics", details: "Dedicating tracking segments for high jump, long jump, and running trials.", icon: "🏃" }
    ],
    indoor: [
      { name: "Chess", details: "Dedicated silent chess club room with multiple playing stations.", icon: "♟️" },
      { name: "Table Tennis", details: "Indoor complex housing 4 international-grade tables.", icon: "🏓" },
      { name: "Carrom", details: "Excellent recreational club setups for students and staff.", icon: "🎯" },
      { name: "Badminton", details: "Two wooden indoor courts equipped with modern high-bay lighting.", icon: "🏸" }
    ]
  };

  const facilities = [
    { title: "Indoor Sports Complex", desc: "State-of-the-art wooden court complex for badminton and table tennis.", icon: Trophy },
    { title: "Outdoor Cricket Turf", desc: "Professionally maintained turf pitches with nets for daily practice sessions.", icon: Flame },
    { title: "Modern Campus Gymnasium", desc: "Cardio machines, heavy weights, and experienced fitness coaches.", icon: Activity }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen text-[#3E3A36] font-sans overflow-x-hidden">
      
      {/* ── HERO CHAMPIONS ARENA ── */}
      <section className="relative pt-36 pb-28 bg-[#152e1f] text-white overflow-hidden">
        {/* Dynamic diagonal stripe overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_60%,#f97316_60.1%,#f97316_62%,transparent_62.1%)] opacity-35 z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_64%,#3b82f6_64.1%,#3b82f6_66%,transparent_66.1%)] opacity-35 z-0" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none uppercase font-display italic text-center">
              Sports & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Games.</span>
            </h1>
            
            <p className="text-emerald-100/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light text-center">
              Nurturing athletic excellence, teamwork, and health. We support our athletes with premier coaches, fully loaded arenas, and scholarship benefits.
            </p>

          </motion.div>

        </div>
      </section>


      {/* ── SPORTS CATEGORIES ── */}
      <section id="sports" className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest">Core Disciplines</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-[#152e1f]">
            Indoor & Outdoor Sports
          </h2>
        </div>

        {/* Category Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('outdoor')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'outdoor' 
                ? 'bg-[#152e1f] text-white shadow-lg' 
                : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            Outdoor Sports
          </button>
          <button
            onClick={() => setActiveCategory('indoor')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'indoor' 
                ? 'bg-[#152e1f] text-white shadow-lg' 
                : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-800'
            }`}
          >
            Indoor Sports
          </button>
        </div>

        {/* Grid cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsData[activeCategory].map((sport, idx) => (
            <motion.div 
              key={sport.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{sport.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#152e1f]">{sport.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{sport.details}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FACILITIES & ARENAS ── */}
      <section className="py-24 bg-[#152e1f] text-white border-t border-emerald-900/20">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Training Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-[#FFF]">
              Sports Facilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-black/25 border border-emerald-800/40 p-8 rounded-3xl"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#FFF]">{fac.title}</h3>
                  <p className="text-xs text-emerald-100/60 leading-relaxed">{fac.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ATHLETE AWARDS & ACHIEVEMENT ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest">Elite Achievements</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#152e1f] tracking-tight mt-2 mb-6">
              Championships & Awards
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our varsity teams consistently win laurels across major university meets. We provide complete institutional backing, specialized nutrition diets, and tournament allowances for our student-athletes.
            </p>

            <div className="space-y-4">
              {[
                "100% scholarship fee waiver for national-level participants",
                "Dedicated medical support and sports physiotherapists",
                "Advanced coaches invited from state sports councils"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-white border border-slate-200 p-8 rounded-3xl space-y-6">
            <div className="flex gap-4 items-start pb-6 border-b border-slate-100">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="font-bold text-[#152e1f] mb-1">State Athletics Meet 2025</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Trident won 3 Gold medals in 100m, 400m hurdles, and long jump competitions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-3xl">🏅</span>
              <div>
                <h4 className="font-bold text-[#152e1f] mb-1">BPUT Cricket Cup Winners</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The varsity cricket team clinched the gold trophy beating 32 colleges in Odisha.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>



    </div>
  );
}
