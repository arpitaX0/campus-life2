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
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', position: 'Point Guard', height: '', experience: 'School Level', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

        {/* ── HERO SECTION: Scoreboard counter + Animated Basketball Arc SVG ── */}
        <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-[#FFF8F2]">
          {/* Animated ball arc SVG path */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 100 800 Q 600 100 1100 800"
              fill="none"
              stroke="#F97316"
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
              <span className="text-orange-600">Basketball</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              <Target size={12} className="text-orange-600 animate-pulse" /> RISE ABOVE THE RIM
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tight uppercase">
              COURT & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-650 to-orange-500">ATHLETICS</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Experience FIBA-standard court action at Trident Academy. Master ball-handling, tactical spacing, conditioning drills, and compete at national-level university athletic meets.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#join" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-750 transition-all hover:scale-105 shadow-md shadow-orange-600/10">
                Join the Squad
              </a>
              <a href="#about" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-orange-700 border border-orange-300 hover:bg-orange-50 transition-all">
                Facilities Details
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
            <span className="text-[9px] tracking-widest text-slate-500 uppercase mb-2">scroll down</span>
            <ChevronDown className="w-4 h-4 text-orange-600 animate-bounce" />
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

        {/* ── RECRUITMENT TRYOUTS ── */}
        <section id="join" className="py-24 bg-white border-t border-orange-100">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInUp className="text-center mb-12">
              <span className="text-xs text-orange-600 font-bold uppercase tracking-[0.2em]">squad selections</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#1A120B] mt-3 uppercase">Join the Team</h2>
              <p className="text-slate-500 mt-4 text-xs font-semibold">Ready to hit the courts? Submit your student profile below for selection trial dates.</p>
            </FadeInUp>

            {submitted ? (
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                className="bg-[#FFF8F2] border border-orange-200 rounded-2xl p-10 text-center shadow-xl">
                <CheckCircle2 className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[#1A120B] mb-2 uppercase">Application Submitted!</h3>
                <p className="text-slate-500 text-sm">Our team captain will reach out to you with selection dates and slots.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#FFF8F2] border border-orange-200 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Student Name *</label>
                    <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Roll / ID Number *</label>
                    <input required value={formData.roll} onChange={e => setFormData(p => ({ ...p, roll: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. 2024CSE180" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Court Position</label>
                    <select value={formData.position} onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors bg-white">
                      {['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'].map(pos => <option key={pos}>{pos}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Height (cm / ft)</label>
                    <input value={formData.height} onChange={e => setFormData(p => ({ ...p, height: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g. 182 cm" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Prior Experience</label>
                  <select value={formData.experience} onChange={e => setFormData(p => ({ ...p, experience: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors bg-white">
                    {['Beginner / Interest only', 'School Level Core Team', 'District / Zonal Level', 'State / National Level'].map(ex => <option key={ex}>{ex}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-550 mb-2 block">Tell us about your game, strengths or fitness</label>
                  <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    rows={3} placeholder="Three-point shooting, fast defense, scoring agility, etc."
                    className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-wider text-xs bg-orange-600 hover:bg-orange-700 transition-all hover:scale-[1.01] shadow-lg shadow-orange-650/10">
                  Register for Selection Trials
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </SmoothScrollProvider>
  );
}
