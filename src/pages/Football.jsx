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
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', position: 'Forward', experience: 'School Captaincy', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

        {/* ── HERO SECTION: Scoreboard counter + image overlay ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-green-50/20 via-white to-[#F0FFF4]">
          {/* Pitch background overlays */}
          <div className="absolute inset-0 z-0 opacity-10 filter grayscale">
            <img src={sportsImg2} alt="Football stadium pitch" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-[#F0FFF4] z-1" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              <a href="/" className="hover:text-slate-800 transition-colors flex items-center gap-1"><Home size={12} />Home</a>
              <ChevronRight size={10} />
              <a href="/extra-curricular" className="hover:text-slate-800 transition-colors">Extra Curricular</a>
              <ChevronRight size={10} />
              <span className="text-emerald-600">Football</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-8">
              PLAY WITH PASSION
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tight uppercase">
              FOOTBALL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">PITCH</span>
            </h1>

            <p className="text-slate-650 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Dominate the pitch. Join Trident United for advanced tactical training, inter-college knockout tournaments, and daily training on our standard grass playground.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#join" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-green-600 hover:bg-green-750 transition-all hover:scale-105 shadow-md shadow-green-600/10">
                Register for Tryouts
              </a>
              <a href="#about" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-green-700 border border-green-300 hover:bg-green-50 transition-all">
                Pitch Details
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
            <span className="text-[9px] tracking-widest text-slate-500 uppercase mb-2">scroll down</span>
            <ChevronDown className="w-4 h-4 text-emerald-650 animate-bounce" />
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

        {/* ── RECRUITMENT TRYOUTS ── */}
        <section id="join" className="py-24 bg-white border-t border-emerald-100">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInUp className="text-center mb-12">
              <span className="text-xs text-emerald-700 font-bold uppercase tracking-[0.2em]">squad trial</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A4D2E] mt-3 uppercase">Join the Team</h2>
              <p className="text-slate-500 mt-4 text-xs font-semibold">Submit your details below to register for the campus football squad selection trials.</p>
            </FadeInUp>

            {submitted ? (
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                className="bg-[#F0FFF4] border border-emerald-200 rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[#1A4D2E] mb-2 uppercase">Application Submitted!</h3>
                <p className="text-slate-555 text-sm">Please report to the sports officer at the pitch during evening selection trials.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F0FFF4] border border-emerald-200 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Student Name *</label>
                    <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Roll / ID Number *</label>
                    <input required value={formData.roll} onChange={e => setFormData(p => ({ ...p, roll: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="e.g. 2024ETC120" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Preferred Position</label>
                    <select value={formData.position} onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors bg-white">
                      {['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Winger'].map(pos => <option key={pos}>{pos}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Prior Experience / Achievements</label>
                  <input value={formData.experience} onChange={e => setFormData(p => ({ ...p, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="e.g. School Core Team, Zonal Level, etc." />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Any notes on fitness or game style</label>
                  <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    rows={3} placeholder="Pace, heading accuracy, defensive slide tacking, etc."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-wider text-xs bg-emerald-650 hover:bg-emerald-750 transition-all hover:scale-[1.01] shadow-lg shadow-emerald-650/10">
                  Register for Football Trials
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </SmoothScrollProvider>
  );
}
