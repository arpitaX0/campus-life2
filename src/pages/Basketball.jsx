import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Dribbble, Award, Target, Users, Calendar, Trophy, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import sportsImg1 from '../assets/facilities_sports.jpg';
import sportsImg2 from '../assets/athletics_facility.png';

const stats = [
  { end: 1, suffix: ' Standard Court', label: 'FIBA Approved' },
  { end: 4, suffix: ' Practice Hoops', label: 'Side Practice Rings' },
  { end: 8, suffix: '+', label: 'Annual Tournaments' },
  { end: 3, suffix: ' Gold Trophies', label: 'BPUT Fest Wins' },
];

const programs = [
  { title: 'Morning Drills & Conditioning', schedule: 'Mon / Wed / Fri · 6 AM - 8 AM', desc: 'Focuses on building stamina, agility, footwork, and core strength specifically for basketball movements.' },
  { title: 'Tactical Play & scrimmages', schedule: 'Tue / Thu · 5 PM - 7 PM', desc: 'Emphasis on offensive sets, defense coordination, screen-and-rolls, and real game-like scrimmage practice.' },
  { title: 'Freshman Selection & Bootcamps', schedule: 'Every August', desc: 'Two-week selection trials to scout new talent and build our freshman developmental squad.' },
];

const achievements = [
  { year: '2025', title: 'Champions — BPUT Athletic Meet', desc: 'Defeated PMEC in a thrilling final (74-68).' },
  { year: '2024', title: 'Winners — Inter-College Sports Fest', desc: 'Held at Silicon Institute, claiming gold.' },
  { year: '2023', title: 'Runner-Up — Utkal University Basketball Cup', desc: 'Silver medal performance in a 24-team tournament.' },
];

const upcomingMatches = [
  { date: 'June 28, 2026', tournament: 'BPUT Zonal Meet', opponent: 'vs. KIIT University', time: '04:00 PM', location: 'Trident Campus Court' },
  { date: 'July 05, 2026', tournament: 'BPUT Finals', opponent: 'TBD', time: '03:30 PM', location: 'Barabati Indoor Stadium' },
];

export default function Basketball() {
  
  

  useEffect(() => {
    document.title = 'Basketball Club & Courts | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Rise above the rim. Discover the FIBA-standard basketball courts, conditioning training, BPUT tournaments, coaching staff, and tryouts at Trident Academy.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', position: 'Point Guard', height: '', experience: 'School Level', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FFF8F2] min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=85" alt="Basketball Court" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(12,6,2,0.90) 0%, rgba(12,6,2,0.68) 55%, rgba(12,6,2,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(12,6,2,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Basketball</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Target size={11} /> Rise Above the Rim
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Basketball
                <span className="block" style={{ color: '#E5AA3E' }}>Club & Courts</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Experience FIBA-standard court action at Trident Academy. Master ball-handling, tactical spacing, conditioning drills, and compete at national-level university athletic meets.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#0C0602' }}>
                Facilities Details <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 w-full" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(229,170,62,0.2)' }}>
            <div className="max-w-7xl mx-auto px-6 xl:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((s, i) => (
                  <div key={i} className="py-5 px-6 flex flex-col" style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <span className="font-black text-2xl text-white">
                      <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                    </span>
                    <span className="text-[11px] text-white/55 uppercase tracking-widest mt-0.5 font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section id="about" className="py-24 relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-orange-600 font-bold uppercase tracking-[0.2em]">tat facilities</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A120B] mt-3 mb-6 leading-tight uppercase">
                  FIBA Standard <br /><span className="text-orange-500">Outdoor Arena</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  The sports ecosystem at Trident Academy boasts a top-tier outdoor basketball court. Complete with FIBA-regulation acrylic cushion coating, high-lux floodlighting for night training, and steel practice hoops on the sidelines.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Our courts are actively used for morning physical drills, weekly department tournaments, and training sessions for the main Trident athletic teams.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg1} alt="Basketball Court" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F2] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-orange-100 rounded-2xl p-6 text-center shadow-md shadow-orange-100/20">
                  <div className="text-4xl font-serif font-black text-orange-600 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-550 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TRAINING SCHEDULING ── */}
        <section className="py-24 bg-white border-y border-orange-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs text-orange-600 font-bold uppercase tracking-[0.2em]">regular workouts</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A120B] mt-3 mb-6 uppercase">Squad Training Programs</h2>
                <p className="text-slate-655 text-sm leading-relaxed mb-8 font-medium">
                  We maintain a rigorous schedule for our core and developmental squads. Session focuses alternate between stamina training and tactical set plays.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 border border-slate-100">
                  <img src={sportsImg2} alt="Athletics" className="w-full h-full object-cover" />
                </div>
              </FadeInUp>

              <StaggerChildren className="space-y-4">
                {programs.map((prog, i) => (
                  <div key={i} className="bg-[#FFF8F2] rounded-2xl p-6 border border-orange-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-bold text-[#1A120B] text-sm">{prog.title}</h4>
                      <span className="text-[9px] font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">{prog.schedule}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{prog.desc}</p>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* ── MATCH CALENDAR & ACHIEVEMENTS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Upcoming Matches */}
              <div>
                <span className="text-xs text-orange-600 font-bold uppercase tracking-[0.2em] mb-4 block">Calendar</span>
                <h3 className="font-serif text-2xl font-black text-[#1A120B] mb-6 uppercase">Upcoming Matches</h3>
                <div className="space-y-4">
                  {upcomingMatches.map((m, idx) => (
                    <div key={idx} className="bg-white border border-orange-100/60 rounded-xl p-5 flex flex-col justify-between shadow-sm">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-2 uppercase">
                        <span>{m.tournament}</span>
                        <span>{m.date}</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#1A120B] mb-2">{m.opponent}</h4>
                      <div className="flex justify-between text-xs text-orange-650 font-semibold">
                        <span>Time: {m.time}</span>
                        <span>Location: {m.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <span className="text-xs text-orange-600 font-bold uppercase tracking-[0.2em] mb-4 block">Trophy Wall</span>
                <h3 className="font-serif text-2xl font-black text-[#1A120B] mb-6 uppercase">Recent Trophies</h3>
                <div className="space-y-4">
                  {achievements.map((ach, i) => (
                    <div key={i} className="bg-white border border-orange-100/60 rounded-xl p-4 flex gap-4 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">{ach.year}</span>
                          <h4 className="font-bold text-[#1A120B] text-xs">{ach.title}</h4>
                        </div>
                        <p className="text-slate-500 text-[11px] leading-relaxed">{ach.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
