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
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', position: 'Outside Hitter', experience: 'School Team', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

        {/* ── HERO SECTION: Beige-to-sky gradient hero ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-sky-50/20 via-white to-[#FFFDF8]">
          {/* Volleyball Arc trajectory indicator */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 1200 800 Q 600 200 50 800"
              fill="none"
              stroke="#0284C7"
              strokeWidth="4"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </svg>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              <a href="/" className="hover:text-slate-800 transition-colors flex items-center gap-1"><Home size={12} />Home</a>
              <ChevronRight size={10} />
              <a href="/extra-curricular" className="hover:text-slate-800 transition-colors">Extra Curricular</a>
              <ChevronRight size={10} />
              <span className="text-sky-600">Volleyball</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              <Target size={12} className="text-sky-600" /> POWER. PRECISION. TEAMWORK.
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tight uppercase">
              SPIKE & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-600">DEFEND</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Elevate your vertical jump and spike precision. Train under certified campus sports officers and compete inside our dual clay-sand outdoor court arenas.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#join" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-all hover:scale-105 shadow-md shadow-sky-600/10">
                Join the Team
              </a>
              <a href="#about" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-sky-700 border border-sky-300 hover:bg-sky-50 transition-all">
                Facilities Details
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
            <span className="text-[9px] tracking-widest text-slate-500 uppercase mb-2">scroll down</span>
            <ChevronDown className="w-4 h-4 text-sky-600 animate-bounce" />
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

        {/* ── SQUAD TRYOUTS SIGNUP ── */}
        <section id="join" className="py-24 bg-white border-t border-sky-100">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInUp className="text-center mb-12">
              <span className="text-xs text-sky-700 font-bold uppercase tracking-[0.2em]">tryouts open</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-sky-900 mt-3 uppercase">Join the Team</h2>
              <p className="text-slate-500 mt-4 text-xs font-semibold">Do you have the height, jump reach, and power? Register below for upcoming tryouts.</p>
            </FadeInUp>

            {submitted ? (
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                className="bg-[#FFFDF8] border border-sky-200 rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle2 className="w-16 h-16 text-sky-700 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-sky-900 mb-2 uppercase">Application Submitted!</h3>
                <p className="text-slate-500 text-sm">Our captain will reach out to schedule your physical tryout session at the courts.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#FFFDF8] border border-sky-100 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Student Name *</label>
                    <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Roll / ID Number *</label>
                    <input required value={formData.roll} onChange={e => setFormData(p => ({ ...p, roll: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
                      placeholder="e.g. 2023CSE102" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Preferred Court Position</label>
                    <select value={formData.position} onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors bg-white">
                      {['Setter', 'Outside Hitter', 'Opposite Hitter', 'Middle Blocker', 'Libero'].map(pos => <option key={pos}>{pos}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Prior Experience</label>
                  <input value={formData.experience} onChange={e => setFormData(p => ({ ...p, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="e.g. School Core Squad, Zonal Meet, etc." />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Describe your jump reach, spike strength, or motivation</label>
                  <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    rows={3} placeholder="Share details about your playing style..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-sky-500 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-wider text-xs bg-sky-650 hover:bg-sky-750 transition-all hover:scale-[1.01] shadow-lg shadow-sky-650/10">
                  Register for Volleyball Tryouts
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </SmoothScrollProvider>
  );
}
