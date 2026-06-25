import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Shield, Heart, HeartPulse, User, 
  Phone, Plus, CheckCircle2, ArrowRight, HelpCircle, Info
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function Healthcare() {
  const [symptom, setSymptom] = useState('');
  
  const advice = {
    fever: {
      advice: "Visit the General OPD immediately for temperature check. Keep hydrated.",
      room: "OPD Room 102",
      doctor: "Dr. K. B. Panda (General Physician)"
    },
    stress: {
      advice: "Take a deep breath. Speak with our campus psychologist for stress management support.",
      room: "Counseling Suite 204",
      doctor: "Ms. Smita Mohanty (Counselor)"
    },
    sprain: {
      advice: "Apply ice immediately. Visit the physiotherapy center for compression wrap support.",
      room: "Sports Therapy Lab 105",
      doctor: "Dr. R. N. Patra (Physiotherapist)"
    },
    dental: {
      advice: "Schedule a checkup with our visiting dentist. Emergency relief medicine is available.",
      room: "Dental Checkup Cabin 103",
      doctor: "Dr. Ananya Roy (Dentist)"
    }
  };

  const doctors = [
    { name: "Dr. K. B. Panda", role: "Chief Medical Officer", spec: "General Medicine", hours: "9:00 AM - 4:00 PM" },
    { name: "Dr. Ananya Roy", role: "Visiting Specialist", spec: "Dental Surgery", hours: "2:00 PM - 5:00 PM (Tue, Thu)" },
    { name: "Ms. Smita Mohanty", role: "Resident Advisor", spec: "Clinical Psychology", hours: "10:00 AM - 6:00 PM" }
  ];

  const checkups = [
    { title: "Annual General Checkup", desc: "Includes basic blood diagnostics, pressure logs, and height/weight charts." },
    { title: "Eye & Dental Screening", desc: "Regular seasonal visits from city eye surgeons and dentists." },
    { title: "Vaccination Drives", desc: "Annual hepatitis, tetanus, and seasonal flu vaccine programs." }
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F0FDF4] min-h-screen text-slate-800 font-sans overflow-x-hidden">
        
        {/* ── Healthcare Floating Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-white/80 border border-emerald-200/80 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
            <span className="font-serif text-lg font-bold tracking-wider text-emerald-600 flex items-center gap-2">
              <HeartPulse size={20} className="text-emerald-500 animate-pulse" /> Wellness Center
            </span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-slate-600">
              <a href="#staff" className="hover:text-emerald-600 transition-colors">OPD Staff</a>
              <a href="#checker" className="hover:text-emerald-600 transition-colors">Symptom Guide</a>
              <a href="tel:+916746649219" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all flex items-center gap-2">
                <Phone size={12} /> Emergency Dial
              </a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Pulse Path SVG Animation ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 bg-white">
          <div className="absolute inset-0 z-0 opacity-10">
            {/* Heart Rate Pulse SVG Line Drawing */}
            <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <motion.path 
                d="M0,200 L400,200 L420,150 L440,250 L460,180 L480,220 L500,200 L1000,200" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="4" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 mb-6">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Active Care Hub</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-none">
              Student Wellness <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                & Healthcare.
              </span>
            </h1>

            <p className="text-base md:text-lg max-w-2xl mb-12 opacity-80 leading-relaxed font-light text-slate-600">
              TAT prioritizes student health. Access 24/7 dedicated first aid beds, general physician consulting, emergency ambulances, and expert psychological guidance on campus.
            </p>

            <a href="#checker" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20">
              Check Consultation Slots
            </a>
          </div>
        </section>


        {/* ── SYMPTOM CHECKER (INTERACTIVE ADVICE) ── */}
        <section id="checker" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Immediate Advice</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Symptom Guide & Directory</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-xl">
              <h3 className="font-serif text-2xl font-bold mb-6 text-slate-800">What best describes your symptom?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'fever', label: 'Fever or Cold' },
                  { id: 'stress', label: 'Exam Anxiety / Stress' },
                  { id: 'sprain', label: 'Sports Injury / Sprain' },
                  { id: 'dental', label: 'Toothache / Dental' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSymptom(s.id)}
                    className={`p-4 rounded-xl text-left text-xs font-bold transition-all border ${
                      symptom === s.id 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                        : 'bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/10 text-slate-700'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[250px] bg-white border border-emerald-100 rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {symptom ? (
                  <motion.div 
                    key={symptom}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded">Recommended Action</span>
                      <p className="text-sm font-semibold mt-4 text-slate-700">{advice[symptom].advice}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Consultation Cabin</span>
                        <div className="text-xs font-bold text-slate-700">{advice[symptom].room}</div>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Assigned Expert</span>
                        <div className="text-xs font-bold text-slate-700">{advice[symptom].doctor}</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center text-slate-400 py-10">
                    <Info size={40} className="mx-auto mb-4 opacity-30 text-emerald-600" />
                    <p className="text-xs">Select a symptom on the left to see immediate care advice and room coordinates.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>


        {/* ── CLINICAL STAFF & DOCTORS ── */}
        <section id="staff" className="py-32 bg-emerald-500/5 border-y border-emerald-100/60">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Medical Officers</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Doctors & OPD Staff</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {doctors.map((doc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <User size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-1 text-slate-800">{doc.name}</h3>
                  <div className="text-xs text-emerald-600 font-bold mb-4">{doc.role}</div>
                  <div className="py-3 border-t border-slate-100 flex justify-between text-xs text-slate-500">
                    <span>Specialization:</span>
                    <span className="font-semibold">{doc.spec}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>OPD Hours:</span>
                    <span className="font-semibold">{doc.hours}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── HEALTH CHECKUPS & EMERGENCIES ── */}
        <section className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Wellness Frameworks</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">OPD Checkup Schedules</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-8">
                Trident coordinates annual physical checking drives in association with city medical schools. All health reports are secured and stored digitally.
              </p>

              <div className="space-y-6">
                {checkups.map((check, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 mb-1">{check.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{check.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 text-white rounded-3xl p-10 space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold">24/7 Ambulance Fleet</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                We maintain a dedicated critical care ambulance node stationed inside TAT administrative zone. Immediate transfer protocols connect directly to city emergency departments.
              </p>
              
              <div className="pt-6 border-t border-emerald-500 space-y-4">
                <div className="flex justify-between text-xs">
                  <span>Ambulance Direct Hotline:</span>
                  <span className="font-bold">+91-674-6649219</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>General Helpdesk:</span>
                  <span className="font-bold">+91-674-6649200</span>
                </div>
              </div>

              <a href="tel:+916746649219" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-850 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all">
                Call Ambulance Now
              </a>
            </div>
          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
