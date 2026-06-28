import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Dumbbell, Award, Flame, Users, Calendar, Clock, ArrowRight, ChevronDown, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren } from '../utils/animations';
import { GSAPCounter, Tilt3D, ScrollReveal } from '../utils/advanced-animations';

import gymImg from '../assets/Gym.jpg';
import sportsImg from '../assets/facilities_sports.jpg';

const stats = [
  { end: 350, suffix: '+', label: 'Daily Members' },
  { end: 3000, suffix: ' sq ft', label: 'Facility Space' },
  { end: 40, suffix: '+', label: 'Workstations' },
  { end: 5, suffix: '', label: 'Certified Trainers' },
];

const equipment = [
  { name: 'Strength Workstations', desc: 'Olympic lifting platforms, multi-cables, plate-loaded smith machines, and dumbbell sets up to 40kg.', count: '18 Stations' },
  { name: 'Cardio Section', desc: 'Commercial-grade motorized treadmills, elliptical trainers, spin bikes, and fluid rowing machines.', count: '12 Machines' },
  { name: 'Free Weights & Racks', desc: 'Multiple squat racks, bench presses (flat, incline, decline), and adjustable utility benches.', count: '8 Racks' },
  { name: 'Functional Area', desc: 'Kettlebells, battle ropes, medicine balls, resistance bands, and suspension trainers.', count: 'Dedicated Zone' },
];

const plans = [
  { name: 'Student Access', price: 'Free', features: ['Valid Student ID card required', 'Full access to gym equipment', 'Floor trainer guidance', 'Locker & shower facilities'], note: 'Must follow campus schedules' },
  { name: 'Faculty & Staff', price: 'Free', features: ['Valid Faculty ID required', 'Priority locker assignment', 'Access during dedicated slots', 'Wellness counseling'], note: 'Early morning & late evening' },
];

const trainers = [
  { name: 'Coach Rajesh Panda', role: 'Head Trainer & Strength Specialist', certs: 'Gold\'s Gym Certified' },
  { name: 'Coach Smita Senapati', role: 'Cardio & Functional Training Coach', certs: 'ACE Certified' },
];

const timings = [
  { batch: 'Morning Batch (Boys)', hours: '06:00 AM - 08:30 AM' },
  { batch: 'Morning Batch (Girls)', hours: '08:30 AM - 10:00 AM' },
  { batch: 'Evening Batch (Girls)', hours: '04:00 PM - 05:30 PM' },
  { batch: 'Evening Batch (Boys)', hours: '05:30 PM - 08:00 PM' },
];

export default function Gymnasium() {
  const [formData, setFormData] = useState({ name: '', email: '', roll: '', batch: 'Evening Batch (Boys)', message: '' });
  

  useEffect(() => {
    document.title = 'Gymnasium & Fitness Center | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Train at the Trident Academy Gymnasium. Fully equipped strength stations, cardio machinery, certified trainers, and structured daily training schedules.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', batch: 'Evening Batch (Boys)', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FAF9F7] text-slate-800 min-h-screen font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src={gymImg}
              alt="Gymnasium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(20,20,30,0.93) 0%, rgba(20,20,30,0.80) 55%, rgba(20,20,30,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Gymnasium</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Sports & Fitness Infrastructure
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Strength &<br />
              <span style={{ color: '#E5AA3E' }}>Fitness Center.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Transform your physical potential. Train with heavy-duty commercial equipment, customized schedules for boys and girls, and expert supervision inside our 3,000 sq ft fitness arena.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '350+', lbl: 'Daily Members' }, { val: '3000', lbl: 'Sq Ft Space' }, { val: '40+', lbl: 'Workstations' }, { val: '5', lbl: 'Certified Coaches' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section id="about" className="py-24 border-t border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-red-600 font-bold uppercase tracking-[0.2em]">wellness center</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight uppercase">
                  Fully Equipped <br /><span className="text-red-600">Training Arena</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 font-medium">
                  At Trident Academy, physical wellness is integral to student life. Our centralized campus gymnasium is equipped with premium cardiovascular machines, heavy strength rigs, functional cages, and free weights.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Whether you are looking to build strength, maintain heart health, or practice flexibility under guided mentors, our fitness programs cater to all levels of conditioning.
                </p>
                <div className="flex items-center gap-3 bg-red-50 border border-red-100 p-4 rounded text-xs text-red-700 font-semibold shadow-sm">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0 text-red-600" />
                  <span>Always bring your college ID. Clean sports shoes and a workout towel are mandatory for entry.</span>
                </div>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 border border-slate-100">
                <img src={sportsImg} alt="Students workout" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-slate-100 shadow-md shadow-slate-100/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-serif font-black text-red-600 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── EQUIPMENT SHOWCASE ── */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-red-650 font-bold uppercase tracking-[0.2em]">infrastructure</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-slate-900 mt-3 uppercase">Equipment Showcase</h2>
            </FadeInUp>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((eq, i) => (
                <div key={i} className="bg-slate-50 border border-slate-150 shadow-sm rounded-2xl p-8 h-full flex flex-col justify-between hover:border-red-500/20 transition-all duration-500 group">
                  <div>
                    <div className="w-12 h-12 rounded bg-red-50 border border-red-150 flex items-center justify-center text-red-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Dumbbell size={22} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors uppercase">{eq.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">{eq.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-100 px-3 py-1 rounded w-fit">
                    {eq.count}
                  </span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TIMINGS SCHEDULE GRID ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs text-red-600 font-bold uppercase tracking-[0.2em]">gym calendar</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6 uppercase">Daily Batches & Hours</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                  The gym operates under strict timings to ensure comfortable training densities for all student batches. Floor trainers are present during all timings.
                </p>
                <div className="space-y-4">
                  {timings.map((time, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex justify-between items-center">
                      <span className="font-bold text-sm text-slate-800">{time.batch}</span>
                      <div className="flex items-center gap-2 text-xs font-semibold text-red-650">
                        <Clock size={14} />
                        <span>{time.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInUp>

              {/* Trainers grid */}
              <div>
                <span className="text-xs text-red-600 font-bold uppercase tracking-[0.2em] mb-4 block">Coaches & Supervision</span>
                <h3 className="font-serif text-2xl font-black text-slate-900 mb-6 uppercase">Certified Trainers</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {trainers.map((tr, i) => (
                    <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
                      <div className="w-16 h-16 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mb-4 text-xl font-serif font-black">
                        {tr.name.charAt(tr.name.indexOf(' ') + 1)}
                      </div>
                      <h4 className="font-serif font-bold text-slate-850 text-sm mb-1">{tr.name}</h4>
                      <p className="text-slate-500 text-xs mb-3 font-semibold">{tr.role}</p>
                      <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded">{tr.certs}</span>
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
