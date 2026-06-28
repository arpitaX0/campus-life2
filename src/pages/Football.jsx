import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, ShieldAlert, Award, Star, Users, Calendar, Trophy, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import sportsImg1 from '../assets/facilities_sports.jpg';
import sportsImg2 from '../assets/athletics_facility.png';

const stats = [
  { end: 1, suffix: ' Regulation Pitch', label: 'Lush Green Grass' },
  { end: 22, suffix: ' Core Players', label: 'Main Team Squad' },
  { end: 12, suffix: '+', label: 'Friendly Matches Yearly' },
  { end: 2, suffix: ' Silver Cups', label: 'State Zonal Runner-Up' },
];

const coaches = [
  { name: 'Coach Devendra Mohanty', role: 'Head Coach & Tactical Analyst', experience: '15+ Years, AIFF C License' },
  { name: 'Coach Samir Behera', role: 'Physical Trainer & Conditioning Coach', experience: '8+ Years, Specialized in Athletics' },
];

const upcomingTournaments = [
  { tournament: 'BPUT State Football Championship', date: 'November 12-18, 2026', host: 'TAT Campus Ground', format: 'Knockout Bracket' },
  { tournament: 'Bhubaneswar Inter-Club Invitational', date: 'December 04-10, 2026', host: 'Kalinga Stadium Outer Grounds', format: 'League + Knockout' },
];

const teamAchievements = [
  { year: '2025', title: 'Champions — Inter-Technical Fest', desc: 'Won the championship trophy at the Centurion Sports Carnival.' },
  { year: '2024', title: 'Runner-Up — BPUT State Athletics Meet', desc: 'Narrow defeat in penalty shootouts (4-3) in the finals.' },
  { year: '2023', title: 'Semifinalists — Odisha College League', desc: 'Reached the final four in a competitive multi-stage tournament.' },
];

export default function Football() {
  
  

  useEffect(() => {
    document.title = 'Football Club & Pitch | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Play with passion. Learn about the regulation football grounds, coaching staff, inter-college tournaments, match schedules, and tryout trials at Trident Academy.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', position: 'Forward', experience: 'School Captaincy', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F0FFF4] min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1400&q=85" alt="Football Pitch" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(3,12,5,0.90) 0%, rgba(3,12,5,0.68) 55%, rgba(3,12,5,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(3,12,5,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Football</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                Play With Passion
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Football
                <span className="block" style={{ color: '#E5AA3E' }}>Club & Pitch</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Dominate the pitch. Join Trident United for advanced tactical training, inter-college knockout tournaments, and daily training on our standard grass playground.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#030C05' }}>
                Pitch Details <ArrowRight size={13} />
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
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-[0.2em]">facilities</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A4D2E] mt-3 mb-6 leading-tight uppercase">
                  Regulation Grass <br /><span className="text-emerald-600">Playground</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  Trident Academy features a regulation-size natural grass football pitch. Carefully maintained year-round, it provides the perfect field for tactical scrimmage matches, daily physical conditioning, and inter-college tournaments.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  The facility is equipped with standard steel-framed goalposts, pitch marking kits, and spectator seating areas on the sidelines.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg1} alt="Sports Ground" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0FFF4] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-emerald-100 rounded-2xl p-6 text-center shadow-md shadow-green-100/10">
                  <div className="text-4xl font-serif font-black text-emerald-650 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-555 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── COACHES & SQUAD TRYOUTS ── */}
        <section className="py-24 bg-white border-y border-emerald-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Coaches */}
              <div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-[0.2em] mb-4 block">tactical mentors</span>
                <h3 className="font-serif text-2xl font-black text-[#1A4D2E] mb-6 uppercase">Coaching Staff</h3>
                <div className="space-y-4">
                  {coaches.map((c, idx) => (
                    <div key={idx} className="bg-[#F0FFF4] rounded-2xl p-6 border border-emerald-100/60 flex items-start gap-4 shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xl font-serif font-bold flex-shrink-0">
                        {c.name.charAt(c.name.indexOf(' ') + 1)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#1A4D2E]">{c.name}</h4>
                        <p className="text-slate-550 text-xs mt-0.5">{c.role}</p>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded mt-2 block w-fit">{c.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tournaments list */}
              <div>
                <span className="text-xs text-emerald-700 font-bold uppercase tracking-[0.2em] mb-4 block">Calendar</span>
                <h3 className="font-serif text-2xl font-black text-[#1A4D2E] mb-6 uppercase">Upcoming Tournaments</h3>
                <div className="space-y-4">
                  {upcomingTournaments.map((t, i) => (
                    <div key={i} className="bg-[#F0FFF4] rounded-2xl p-6 border border-emerald-100/60 shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">{t.date}</span>
                        <h4 className="font-serif font-bold text-[#1A4D2E] mt-1 mb-3 text-sm">{t.tournament}</h4>
                      </div>
                      <div className="flex justify-between text-xs text-slate-550 font-semibold border-t border-emerald-100/40 pt-4">
                        <span>Host: {t.host}</span>
                        <span>Format: {t.format}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TROPHY WALL ── */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-emerald-700 font-bold uppercase tracking-[0.2em]">trophy wall</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A4D2E] mt-3 uppercase">Squad Achievements</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-3 gap-8">
              {teamAchievements.map((ach, i) => (
                <div key={i} className="bg-white border border-emerald-100/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-emerald-600 transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">{ach.year}</span>
                      <Trophy className="w-5 h-5 text-emerald-600 ml-auto group-hover:scale-115 transition-transform" />
                    </div>
                    <h3 className="font-serif font-bold text-[#1A4D2E] mb-2 text-sm">{ach.title}</h3>
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
