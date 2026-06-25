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
      <div className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-x-hidden">

        {/* ── HERO SECTION: Clean light overlay ── */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-red-50/20 via-white to-slate-50">
          <div className="absolute inset-0 z-0 opacity-15 filter grayscale">
            <img src={gymImg} alt="Gymnasium facility" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-slate-50 z-1" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              <Link to="/"  className="hover:text-slate-800 transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
              <ChevronRight size={10} />
              <Link to="/extra-curricular"  className="hover:text-slate-800 transition-colors">Extra Curricular</Link>
              <ChevronRight size={10} />
              <span className="text-red-655">Gymnasium</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-8">
              <Flame size={12} className="text-red-600 animate-pulse" /> PUSH YOUR LIMITS
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tight uppercase">
              STRENGTH & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">FITNESS</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Transform your physical potential. Train with heavy-duty commercial equipment, customized schedules for boys and girls, and expert supervision inside our 3,000 sq ft fitness arena.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              
              <a href="#about" className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-red-700 border border-red-300 hover:bg-red-50 transition-all">
                View Equipment
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
            <span className="text-[9px] tracking-widest text-slate-500 uppercase mb-2">scroll down</span>
            <ChevronDown className="w-4 h-4 text-red-600 animate-bounce" />
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
