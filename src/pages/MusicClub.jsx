import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Music, Mic2, Star, Award, Users, Calendar, Sparkles, ArrowRight, ChevronDown, CheckCircle2, Play, Volume2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement, AmbientParticles } from '../utils/animations';
import { GSAPCounter, Tilt3D, ScrollReveal } from '../utils/advanced-animations';

import musicImg from '../assets/Fest.jpeg';
import vocalImg from '../assets/annual function.jpg';

const stats = [
  { end: 80, suffix: '+', label: 'Active Musicians' },
  { end: 12, suffix: '', label: 'Instruments Trained' },
  { end: 30, suffix: '+', label: 'Annual Concerts' },
  { end: 5, suffix: '+', label: 'State Level Awards' },
];

const vocalTeam = [
  { name: 'Rithvik Mohanty', style: 'Hindustani Classical & Semi-Classical', role: 'Vocal Lead (Senior)' },
  { name: 'Arpita Priyadarshini', style: 'Sufi & Western Pop Fusion', role: 'Vocal Co-Lead (Junior)' },
  { name: 'Debasish Mishra', style: 'Bollywood & Folk Rock', role: 'Vocal Mentor' },
];

const instrumentalTeam = [
  { name: 'Sourav Das', instrument: 'Keyboard & Synthesizers', level: 'Grade 5 Trinity' },
  { name: 'Bikram Keshari', instrument: 'Lead & Acoustic Guitar', level: '8 Yrs Experience' },
  { name: 'Pritam Sahoo', instrument: 'Tabla, Congas & Percussion', level: 'Classical Trained' },
];

const workshops = [
  { title: 'Vocal Scale & Breath Control', day: 'Tuesdays', time: '5 PM', mentor: 'Rithvik Mohanty' },
  { title: 'Guitar Chords & Progression', day: 'Thursdays', time: '5 PM', mentor: 'Bikram Keshari' },
  { title: 'Percussion & Rhythm Sync', day: 'Saturdays', time: '3 PM', mentor: 'Pritam Sahoo' },
  { title: 'Sound Engineering & Mixing', day: 'Sundays', time: '11 AM', mentor: 'External Sound Engineers' },
];

const events = [
  { title: 'Swaradhana: Classical Night', month: 'October', desc: 'An evening dedicated entirely to Indian classical and semi-classical music.' },
  { title: 'Trident Rock Battle', month: 'January', desc: 'High-octane inter-departmental battle of bands. Rock, metal, and fusion genres.' },
  { title: 'Trifest Megashow', month: 'March', desc: 'Our headlining performance at the annual college cultural festival.' },
];

export default function MusicClub() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  

  useEffect(() => {
    document.title = 'Music Club | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Discover the Music Club at Trident Academy. Explore Hindustani classical, Western pop, Sufi, rock bands, vocal & instrumental training workshops, and annual concerts.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: 'Vocalist', instrument: '', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#0D0A1A] min-h-screen text-slate-300 font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1600"
              alt="Music Club"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,10,26,0.95) 0%, rgba(20,15,35,0.80) 55%, rgba(13,10,26,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Music Club</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Art & Cultural Wing
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Sound of<br />
              <span style={{ color: '#E5AA3E' }}>Creativity.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Unite with fellow vocalists, guitarists, and percussionists. Master classical ragas, western pop, or raw rock, and take center stage at our major campus concerts.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '80+', lbl: 'Active Musicians' }, { val: '12', lbl: 'Instruments Taught' }, { val: '30+', lbl: 'Annual Concerts' }, { val: '5+', lbl: 'State Awards' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>


          {/* Animated sound waveform at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-1 flex items-end justify-center gap-1.5 px-6 opacity-30">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-full"
                animate={{ height: isPlaying ? [10, Math.random()*80 + 10, 10] : [10, Math.random()*25 + 5, 10] }}
                transition={{ repeat: Infinity, duration: 0.8 + (i % 5) * 0.1, ease: 'easeInOut' }}
              />
            ))}
          </div>

          {/* Audio controller toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-8 right-8 z-20 w-12 h-12 bg-amber-50 hover:bg-amber-400 rounded-full flex items-center justify-center text-black shadow-lg transition-all hover:scale-105"
          >
            <Play className={`w-5 h-5 ${isPlaying ? 'scale-90 rotate-90 text-purple-950 font-bold' : ''}`} />
          </button>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section id="about" className="py-24 border-t border-purple-950/20 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-amber-500 font-bold uppercase tracking-[0.2em]">Harmony & Rhythm</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
                  Where Notes Shape <br /><span className="text-amber-400">Our Community</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Established in 2011, the Trident Music Club provides a shared stage for singers, guitarists, synthesists, and percussionists. We believe that music is not just an extracurricular activity, but a universal language of expression.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  We prepare students for high-energy campus events, competitive battles, and provide access to instrument training workshops and campus studio practice sessions.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-200 text-sm">Free Weekly Masterclasses</p>
                    <p className="text-slate-500 text-xs">For both beginners and trained classical musicians</p>
                  </div>
                </div>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80">
                <img src={musicImg} alt="Students practicing music" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#06040C]/60 border border-purple-950/20 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-serif font-black text-amber-400 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── ENSEMBLE TEAMS (Vocal & Instrument) ── */}
        <section className="py-24 bg-[#06040C]/40 border-y border-purple-950/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vocal Ensemble */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Mic2 className="w-6 h-6 text-amber-400" />
                  <h3 className="font-serif text-2xl font-black text-white">Vocal Ensemble</h3>
                </div>
                <div className="space-y-4">
                  {vocalTeam.map((member, i) => (
                    <div key={i} className="bg-[#06040C]/80 border border-purple-950/20 rounded-xl p-5 hover:border-amber-500/20 transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-white text-sm">{member.name}</h4>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{member.role}</span>
                      </div>
                      <p className="text-slate-505 text-xs mt-2">Genre: {member.style}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instrumental Ensemble */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Music className="w-6 h-6 text-amber-400" />
                  <h3 className="font-serif text-2xl font-black text-white">Instrumental Ensemble</h3>
                </div>
                <div className="space-y-4">
                  {instrumentalTeam.map((member, i) => (
                    <div key={i} className="bg-[#06040C]/80 border border-purple-950/20 rounded-xl p-5 hover:border-amber-500/20 transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif font-bold text-white text-sm">{member.name}</h4>
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{member.level}</span>
                      </div>
                      <p className="text-slate-505 text-xs mt-2">Specialization: {member.instrument}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MUSIC WORKSHOPS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs text-amber-500 font-bold uppercase tracking-[0.2em]">weekly practice</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3 mb-6">Practice & Classes</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Our structured workshop schedules are divided by vocal and instrument classes, accommodating different academic batches and time slots.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64">
                  <img src={vocalImg} alt="Vocal practice" className="w-full h-full object-cover" />
                </div>
              </FadeInUp>

              <StaggerChildren className="space-y-4">
                {workshops.map((w, i) => (
                  <div key={i} className="bg-[#06040C]/80 border border-purple-950/10 hover:border-amber-500/20 rounded-2xl p-6 transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm mb-1">{w.title}</h4>
                      <p className="text-slate-505 text-xs mb-2">Schedule: {w.day} at {w.time}</p>
                      <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">Mentor: {w.mentor}</span>
                    </div>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* ── EVENTS & ANNUAL CONCERTS ── */}
        <section className="py-24 bg-[#06040C]/50 border-t border-purple-950/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-amber-500 font-bold uppercase tracking-[0.2em]">concert list</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3">Annual Concerts</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, i) => (
                <ScrollReveal key={i} from={{ opacity: 0, y: 30 }} duration={0.6}>
                  <div className="bg-[#06040C] border border-purple-950/20 rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{event.month}</span>
                    <h3 className="font-serif text-lg font-bold text-white mt-1 mb-3">{event.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{event.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
