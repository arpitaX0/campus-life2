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
  { end: 3, suffix: ' Synthetic Courts', label: 'Premium Yonex Mats' },
  { end: 12, suffix: ' Core Players', label: 'Main Team Roster' },
  { end: 10, suffix: '+', label: 'Weekly Matches' },
  { end: 2, suffix: ' Gold Medals', label: 'Inter-College Fests' },
];

const sessions = [
  { title: 'Beginner Basics', schedule: 'Mon / Wed · 5 PM - 7 PM', desc: 'Focuses on grip hold, basic footwork movement, service styles, and simple baseline clears.' },
  { title: 'Advanced Tactics & Fitness', schedule: 'Tue / Thu · 6 PM - 8 PM', desc: 'Conditioning, speed agility drills, smash placement, defense lifts, and game tactics for tournament players.' },
  { title: 'Open Court Recreation', schedule: 'Saturdays · 3 PM - 7 PM', desc: 'Friendly matches open to all students, faculties, and club members.' },
];

const achievements = [
  { year: '2025', title: 'Gold Medal — BPUT Zonal Fest', desc: 'Men\'s singles champions. Won in straight games (21-18, 21-14).' },
  { year: '2024', title: 'Runner-up — Centurion Cup', desc: 'Mixed doubles team reached the finals and won silver medals.' },
];

export default function Badminton() {
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', style: 'Singles (Men)', racquet: '', message: '' });
  

  useEffect(() => {
    document.title = 'Badminton Club & Courts | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Speed & precision. Explore the indoor synthetic badminton courts, coaching programs, tournament matches, achievements, and trials registration at Trident.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', style: 'Singles (Men)', racquet: '', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F8FFEE] min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1400&q=85" alt="Badminton Court" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(5,12,3,0.90) 0%, rgba(5,12,3,0.68) 55%, rgba(5,12,3,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(5,12,3,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Badminton</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Target size={11} /> Speed & Precision
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Badminton
                <span className="block" style={{ color: '#E5AA3E' }}>Club & Courts</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Train inside our centralized indoor badminton arena. Master fast-paced net exchanges, overhead smashes, court coverage, and compete at inter-college zonal events.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#050C03' }}>
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
                <span className="text-xs text-[#1C3F1E] font-bold uppercase tracking-[0.2em]">hall details</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1C3F1E] mt-3 mb-6 leading-tight uppercase">
                  Indoor Synthetic <br /><span className="text-lime-600">Badminton Hall</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  The sports facilities at Trident Academy include a specialized indoor badminton hall. The facility features three standard playing courts covered in professional 4.5mm Yonex synthetic mats to protect player knees and prevent slips.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Equipped with glare-free high floodlights and side gallery stands for viewers, the hall remains open in both morning and evening slots.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg1} alt="Badminton Court Hall" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FFEE] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-lime-100 rounded-2xl p-6 text-center shadow-md shadow-lime-100/20">
                  <div className="text-4xl font-serif font-black text-[#1C3F1E] mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TRAINING SCHEDULES ── */}
        <section className="py-24 bg-white border-y border-lime-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs text-lime-700 font-bold uppercase tracking-[0.2em]">weekly drills</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1C3F1E] mt-3 mb-6 uppercase">Structured Training Schedules</h2>
                <p className="text-slate-655 text-sm leading-relaxed mb-8 font-medium">
                  Our badminton sessions are divided by experience level to ensure beginners get basic conditioning while tournament players can focus on intense tactics.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-md h-64 border border-slate-100">
                  <img src={sportsImg2} alt="Athletics Hall" className="w-full h-full object-cover" />
                </div>
              </FadeInUp>

              <StaggerChildren className="space-y-4">
                {sessions.map((sess, i) => (
                  <div key={i} className="bg-[#F8FFEE] rounded-2xl p-6 border border-lime-100/60 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-bold text-[#1C3F1E] text-sm">{sess.title}</h4>
                      <span className="text-[9px] font-bold text-[#1C3F1E] bg-lime-50 border border-lime-100 px-2 py-0.5 rounded">{sess.schedule}</span>
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
              <span className="text-xs text-lime-700 font-bold uppercase tracking-[0.2em]">trophy room</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1C3F1E] mt-3 uppercase">Achievements</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {achievements.map((ach, i) => (
                <div key={i} className="bg-white border border-lime-100/60 rounded-2xl p-6 shadow-sm flex flex-col justify-between group hover:border-[#1C3F1E] transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-[#1C3F1E] bg-lime-50 border border-lime-100 px-2 py-0.5 rounded">{ach.year}</span>
                      <Trophy className="w-5 h-5 text-lime-600 ml-auto group-hover:scale-115 transition-transform" />
                    </div>
                    <h3 className="font-serif font-bold text-[#1C3F1E] mb-2 text-sm">{ach.title}</h3>
                    <p className="text-slate-505 text-xs leading-relaxed">{ach.desc}</p>
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
