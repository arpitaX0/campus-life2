import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Star, Users, Calendar, Award, Target, Trophy, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import sportsImg1 from '../assets/facilities_sports.jpg';
import sportsImg2 from '../assets/athletics_facility.png';

const stats = [
  { end: 2, suffix: ' Outdoor Courts', label: 'Sand & Clay Mix' },
  { end: 14, suffix: ' Core Players', label: 'Main Team Roster' },
  { end: 6, suffix: '+', label: 'Annual Tourneys' },
  { end: 2, suffix: ' Champions Cups', label: 'Inter-District Cups' },
];

const teamMembers = [
  { name: 'Amitav Mohapatra', position: 'Setter & Captain', roll: '2023CSE102' },
  { name: 'Sameer Senapati', position: 'Outside Hitter', roll: '2023ETC205' },
  { name: 'Siddhant Mishra', position: 'Middle Blocker', roll: '2024EEE089' },
  { name: 'Biswajit Sahoo', position: 'Libero', roll: '2024ME042' },
];

const upcomingTournaments = [
  { name: 'BPUT State Zonal Meet (Volleyball)', date: 'December 10-12, 2026', location: 'TAT Outdoor Courts' },
  { name: 'Bhubaneswar Inter-Engineering Slam', date: 'January 18-22, 2027', location: 'Silicon Courts' },
];

export default function Volleyball() {
  
  

  useEffect(() => {
    document.title = 'Volleyball Club & Courts | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Power, precision, teamwork. Explore the outdoor sand & clay volleyball courts, team details, coaching rosters, tournaments, and tryout selections at Trident.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', position: 'Outside Hitter', experience: 'School Team', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FFFDF8] min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1400&q=85" alt="Volleyball Court" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(2,10,20,0.90) 0%, rgba(2,10,20,0.68) 55%, rgba(2,10,20,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(2,10,20,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Volleyball</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Target size={11} /> Power. Precision. Teamwork.
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Volleyball
                <span className="block" style={{ color: '#E5AA3E' }}>Club & Courts</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Elevate your vertical jump and spike precision. Train under certified campus sports officers and compete inside our dual clay-sand outdoor court arenas.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#020A14' }}>
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
                <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">campus facilities</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 mb-6 leading-tight uppercase">
                  Dual Clay-Sand <br /><span className="text-amber-600">Outdoor Courts</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  The sports facilities at Trident Academy include two standard outdoor volleyball courts. One clay-based court optimized for fast-paced training sessions and one sand court for recreational beach volleyball events.
                </p>
                <p className="text-slate-505 text-sm leading-relaxed mb-8">
                  The courts feature adjustable-height nets, official boundary markers, side floodlights for late evening matches, and spectator stands.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg1} alt="Volleyball Court" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-sky-100 rounded-2xl p-6 text-center shadow-md shadow-sky-100/20">
                  <div className="text-4xl font-serif font-black text-sky-800 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-550 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── CORE TEAM ROSTER ── */}
        <section className="py-24 bg-white border-y border-sky-100/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">team roster</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 uppercase">Core Squad Members</h2>
            </FadeInUp>

            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-[#FFFDF8] border border-slate-200/60 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 text-sky-850 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="font-serif font-bold text-sky-950 text-sm mb-1">{member.name}</h4>
                  <p className="text-slate-500 text-xs mb-2 font-medium">{member.position}</p>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{member.roll}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TOURNAMENTS & MATCH SCHEDULE ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Tournaments */}
              <div>
                <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em] mb-4 block">Calendar</span>
                <h3 className="font-serif text-2xl font-black text-sky-900 mb-6 uppercase">Upcoming Matches</h3>
                <div className="space-y-4">
                  {upcomingTournaments.map((t, idx) => (
                    <div key={idx} className="bg-white border border-sky-100/60 rounded-xl p-5 flex flex-col justify-between shadow-sm">
                      <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest mb-1">{t.date}</span>
                      <h4 className="font-bold text-sm text-sky-950 mb-2">{t.name}</h4>
                      <div className="text-xs text-slate-500 font-semibold border-t border-slate-100 pt-3">
                        Location: {t.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em] mb-4 block">Trophy Wall</span>
                <h3 className="font-serif text-2xl font-black text-sky-900 mb-6 uppercase">Achievements</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-sky-100/60 rounded-xl p-4 flex gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sky-950 text-xs">Gold — BPUT Inter-Zonal Fest</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">Champions in the final straight-set game (3-0) against GITA.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-sky-100/60 rounded-xl p-4 flex gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sky-950 text-xs">Winners — TAT Sports Carnival</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">Claimed the annual gold medal in the inter-departmental tournament matches.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
