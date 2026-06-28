import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Star, Users, Calendar, Award, Target, Trophy, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import sportsImg1 from '../assets/facilities_sports.jpg';
import sportsImg2 from '../assets/athletics_facility.png';

const stats = [
  { end: 4, suffix: ' Stag Tables', label: 'Tournament Standard' },
  { end: 8, suffix: ' Core Players', label: 'Main Team Roster' },
  { end: 15, suffix: '+', label: 'Weekly Scrimmages' },
  { end: 1, suffix: ' Silver Medal', label: 'BPUT Individual' },
];

const schedules = [
  { title: 'Regular Practice Slots', hours: 'Mon - Fri · 4:30 PM - 7:30 PM', desc: 'Focuses on building reflex timing, quick table footwork, top-spin looping, and defensive blocks.' },
  { title: 'Recreational Play', hours: 'Saturdays · 2:00 PM - 5:00 PM', desc: 'Open slots for all students and faculties looking to play recreational matches.' },
];

const achievements = [
  { year: '2025', title: 'Silver Medal — BPUT Individual Championship', desc: 'Singles runner-up performance in a tight 5-set match (11-9, 8-11, 11-7, 9-11, 12-10).' },
  { year: '2024', title: 'Semifinalists — Inter-College Sports Fest', desc: 'Reached the final four in the team event category.' },
];

export default function TableTennis() {
  
  

  useEffect(() => {
    document.title = 'Table Tennis Club & Indoor | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Fast reflexes, sharp focus. Explore the indoor Stag table tennis tables, team rankings, coaching schedules, achievements, and trials registration at Trident.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', style: 'Attack / Top-spin loop', bat: '', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F0F8FF] min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1611251135345-18c56206b863?auto=format&fit=crop&w=1400&q=85" alt="Table Tennis Facility" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(5,8,20,0.90) 0%, rgba(5,8,20,0.68) 55%, rgba(5,8,20,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(5,8,20,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Table Tennis</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Target size={11} /> Fast Reflexes, Sharp Focus
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Table Tennis
                <span className="block" style={{ color: '#E5AA3E' }}>Club & Facility</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Unleash your reaction speed. Practice top-spin loop attacks and chop defenses inside our indoor table tennis facility equipped with competition Stag boards.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#050814' }}>
                View Facilities <ArrowRight size={13} />
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
                <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">hall details</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 mb-6 leading-tight uppercase">
                  Indoor Stag <br /><span className="text-orange-500">Table Tennis Center</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  The sports infrastructure at Trident Academy features a dedicated indoor table tennis room. The center houses four ITTF-approved tournament-standard Stag tables, complete with non-slip flooring mats and barriers.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Paddles, high-bounce balls, and scoring stands are available for student use, with dedicated schedules maintained for training sessions.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg1} alt="Table Tennis room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0F8FF] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-sky-100 rounded-2xl p-6 text-center shadow-md shadow-sky-100/20">
                  <div className="text-4xl font-serif font-black text-sky-850 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-550 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TRAINING SCHEDULES ── */}
        <section className="py-24 bg-white border-y border-sky-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">hours</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 mb-6 uppercase">Daily Practice Hours</h2>
                <p className="text-slate-655 text-sm leading-relaxed mb-8 font-medium">
                  Table tennis practice slots are coordinated to align with the core squad's physical conditioning and recreational play hours.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 border border-slate-100">
                  <img src={sportsImg2} alt="TT Hall" className="w-full h-full object-cover" />
                </div>
              </FadeInUp>

              <StaggerChildren className="space-y-4">
                {schedules.map((sess, i) => (
                  <div key={i} className="bg-[#F0F8FF] rounded-2xl p-6 border border-sky-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-bold text-sky-950 text-sm">{sess.title}</h4>
                      <span className="text-[9px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded">{sess.hours}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{sess.desc}</p>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* ── TROPHY WALL ── */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">trophies</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 uppercase">Achievements</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {achievements.map((ach, i) => (
                <div key={i} className="bg-white border border-sky-100/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-sky-900 transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-sky-850 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded">{ach.year}</span>
                      <Trophy className="w-5 h-5 text-sky-600 ml-auto group-hover:scale-115 transition-transform" />
                    </div>
                    <h3 className="font-serif font-bold text-sky-900 mb-2 text-sm">{ach.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
