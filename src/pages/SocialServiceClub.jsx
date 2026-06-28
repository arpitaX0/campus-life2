import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Heart, Leaf, Droplets, Globe, Users, HandHeart, ArrowRight, ChevronDown, CheckCircle2, TrendingUp } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement } from '../utils/animations';
import { GSAPCounter, Tilt3D, ScrollReveal } from '../utils/advanced-animations';

import facilitiesGreen from '../assets/facilities_campus_green.jpg';
import hackathonImg from '../assets/news_hackathon.png';
import convocationImg from '../assets/news_convocation.png';
import campusLifeImg from '../assets/news_campus_life.jpg';

const impactStats = [
  { end: 500, suffix: '+', label: 'Volunteers' },
  { end: 30, suffix: '+', label: 'NGO Partners' },
  { end: 200, suffix: '+', label: 'Blood Units Donated' },
  { end: 15, suffix: 'K+', label: 'Lives Impacted' },
];

const outreachPrograms = [
  {
    icon: Droplets,
    title: 'Blood Donation Camps',
    color: '#E53E3E',
    bg: 'bg-red-50',
    border: 'border-red-100',
    desc: 'Bi-annual blood donation drives coordinated with Red Cross and district hospitals. Over 200 units donated in the last academic year alone.',
    impact: '200+ units',
  },
  {
    icon: Leaf,
    title: 'Environmental Initiatives',
    color: '#38A169',
    bg: 'bg-green-50',
    border: 'border-green-100',
    desc: 'Tree plantation drives, campus clean-ups, zero-plastic campaigns, and waste segregation awareness programs across local communities.',
    impact: '500+ trees',
  },
  {
    icon: Globe,
    title: 'Social Awareness',
    color: '#3182CE',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    desc: 'Street plays, nukkad nataks, and awareness campaigns on health, hygiene, education rights, and road safety for underserved communities.',
    impact: '50+ camps',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    color: '#805AD5',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    desc: 'Teaching sessions at rural schools, vocational training drives, and digital literacy programs for first-generation learners.',
    impact: '1000+ students',
  },
  {
    icon: Heart,
    title: 'NGO Collaborations',
    color: '#D69E2E',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
    desc: 'Active partnerships with 30+ local and national NGOs including CRY, Teach For India, and Odisha Voluntary Health Association.',
    impact: '30+ partners',
  },
  {
    icon: HandHeart,
    title: 'Disaster Relief',
    color: '#C05621',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    desc: 'Rapid relief operations during cyclones and floods — food kits, clothing drives, and first-aid training for affected communities.',
    impact: '5000+ kits',
  },
];

const impactStories = [
  {
    name: 'Aman Sahoo',
    dept: 'CSE 4th Year',
    story: 'Reaching out and teaching kids at local government schools every weekend was the most humbling experience of my college life. These children\'s gratitude motivates us every day.',
  },
  {
    name: 'Priyanka Nayak',
    dept: 'EE 3rd Year',
    story: 'Organising the blood donation camp and seeing 80 students donate on a single day — that\'s the power of collective social action. I lead this initiative every year now.',
  },
  {
    name: 'Debashis Panda',
    dept: 'MBA 2nd Year',
    story: 'The tree plantation drive we led in partnership with the Forest Department added 200 trees to Bhubaneswar\'s green cover. Small acts compound into massive impact.',
  },
];

const ngoPartners = [
  'CRY – Child Rights and You', 'Teach For India', 'Goonj', 'Odisha Voluntary Health Assoc.',
  'Prayas Odisha', 'SOS Children\'s Villages', 'Helpage India', 'Smile Foundation',
];

export default function SocialServiceClub() {
  const [activeStory, setActiveStory] = useState(0);
  
  

  useEffect(() => {
    document.title = 'Social Service Club | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Join the Social Service Club at Trident Academy — making a difference through blood donation camps, environmental drives, NGO collaborations, and community outreach.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveStory(p => (p + 1) % impactStories.length), 6000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', dept: '', area: 'Blood Donation', message: '' }); }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F0FAF5] min-h-screen text-[#1A3A2A] font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85" alt="Social Service Club" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(5,20,10,0.90) 0%, rgba(5,20,10,0.68) 55%, rgba(5,20,10,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(5,20,10,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Social Service Club</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Heart size={11} /> Making a Difference
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Social Service
                <span className="block" style={{ color: '#E5AA3E' }}>Club</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                We believe education finds its true purpose in service. Join us in creating meaningful change across communities through blood donation, environmental drives, and outreach programs.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#050E05' }}>
                Our Impact <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 w-full" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(229,170,62,0.2)' }}>
            <div className="max-w-7xl mx-auto px-6 xl:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {impactStats.map((s, i) => (
                  <div key={i} className="py-5 px-6 flex flex-col" style={{ borderRight: i < impactStats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
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

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Who We Are</span>
                <h2 className="font-serif text-5xl font-black text-[#1A3A2A] mt-3 mb-6 leading-tight">
                  One Act at a Time, <br /><span className="text-green-600">We Change the World</span>
                </h2>
                <p className="text-slate-650 text-lg leading-relaxed mb-5">
                  The Social Service Club at Trident Academy mobilises students to become active citizens. We run year-round programs that address healthcare, environment, education, and disaster relief.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                  With 500+ active volunteers and partnerships with 30+ NGOs, we're one of the largest student-run social impact organizations in Eastern India's engineering college circuit.
                </p>
                
              </FadeInUp>
              <div className="grid grid-cols-2 gap-4">
                <img src={hackathonImg} alt="Service" className="rounded-3xl h-48 object-cover w-full shadow-sm" />
                <img src={campusLifeImg} alt="Community" className="rounded-3xl h-48 object-cover w-full mt-8 shadow-sm" />
                <img src={convocationImg} alt="Impact" className="rounded-3xl h-48 object-cover w-full shadow-sm" />
                <img src={facilitiesGreen} alt="Green" className="rounded-3xl h-48 object-cover w-full mt-8 shadow-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* ── OUTREACH PROGRAMS ── */}
        <section className="py-24 bg-[#F0FAF5] border-t border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">What We Do</span>
              <h2 className="font-serif text-5xl font-black text-[#1A3A2A] mt-3">Our Programs</h2>
            </FadeInUp>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outreachPrograms.map((prog, i) => {
                const Icon = prog.icon;
                return (
                  <div key={i} className={`${prog.bg} ${prog.border} border rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-500 group shadow-sm`}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-slate-100">
                      <Icon size={24} style={{ color: prog.color }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A3A2A] mb-3">{prog.title}</h3>
                    <p className="text-slate-650 text-sm leading-relaxed flex-1">{prog.desc}</p>
                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider" style={{ color: prog.color }}>
                        Impact: {prog.impact}
                      </span>
                      <ArrowRight size={14} style={{ color: prog.color }} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* ── NGO COLLABORATIONS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Partnerships</span>
              <h2 className="font-serif text-5xl font-black text-[#1A3A2A] mt-3">NGO Collaborations</h2>
              <p className="text-slate-500 mt-4 font-semibold">Working alongside 30+ trusted organizations across India.</p>
            </FadeInUp>

            <StaggerChildren className="flex flex-wrap justify-center gap-4">
              {ngoPartners.map((ngo, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-full px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-default">
                  {ngo}
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── IMPACT STORIES ── */}
        <section className="py-24 bg-[#F0FAF5] border-t border-green-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Real Change</span>
              <h2 className="font-serif text-5xl font-black text-slate-900 mt-3">Student Impact Stories</h2>
            </FadeInUp>

            <div className="bg-white rounded-3xl p-10 border border-green-150 shadow-lg min-h-[200px]">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl font-serif text-green-200 leading-none mb-4">"</div>
                <p className="text-slate-700 text-xl italic leading-relaxed mb-8">
                  {impactStories[activeStory].story}
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-800">{impactStories[activeStory].name}</p>
                  <p className="text-green-700 text-xs font-semibold">{impactStories[activeStory].dept} · Social Service Club</p>
                </div>
              </motion.div>

              <div className="flex gap-2 mt-8">
                {impactStories.map((_, i) => (
                  <button key={i} onClick={() => setActiveStory(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeStory === i ? 'w-8 bg-green-650' : 'w-2 bg-green-200'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
