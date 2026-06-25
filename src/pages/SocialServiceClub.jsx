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
  const [formData, setFormData] = useState({ name: '', email: '', dept: '', area: 'Blood Donation', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

        {/* ── HERO: Split-screen Light themed layout ── */}
        <section className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-[#F0FAF5]">
          {/* Left Panel */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-28 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              <a href="/" className="hover:text-slate-800 transition-colors flex items-center gap-1"><Home size={12} />Home</a>
              <ChevronRight size={10} /><a href="/extra-curricular" className="hover:text-slate-800 transition-colors">Extra Curricular</a>
              <ChevronRight size={10} /><span className="text-green-700">Social Service Club</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 w-fit">
              <Heart size={12} className="text-green-600" /> Making a Difference
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-black text-slate-900 leading-none mb-6">
              Social <br /><span className="text-green-600">Service</span><br />Club
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-md font-medium">
              We believe that education finds its true purpose in service. Join us in creating meaningful change across communities.
            </p>

            {/* Big Impact Numbers */}
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-green-100 shadow-sm">
                  <div className="font-serif text-4xl font-black text-green-600">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2.5} />
                  </div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="relative overflow-hidden lg:h-auto h-96 border-l border-green-100">
            <img src={facilitiesGreen} alt="Community Service" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F0FAF5]/30 to-transparent" />
            {/* Floating badges */}
            <FloatingElement className="absolute top-[20%] right-[15%] z-20" range={15} duration={8}>
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-green-700 text-sm">15,000+</p>
                    <p className="text-green-500 text-xs">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </FloatingElement>
            <FloatingElement className="absolute bottom-[25%] right-[10%] z-20" range={12} duration={10} delay={2}>
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-550 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-slate-800 text-sm">200+ Units</p>
                    <p className="text-slate-500 text-xs font-semibold">Blood Donated</p>
                  </div>
                </div>
              </div>
            </FloatingElement>

            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-70">
              <span className="text-[10px] text-white tracking-[0.2em] uppercase font-bold mb-2">Scroll Down</span>
              <ChevronDown className="w-5 h-5 text-green-600 animate-bounce" />
            </a>
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
                <a href="#volunteer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #1A4731, #38A169)' }}>
                  Become a Volunteer <ArrowRight size={14} />
                </a>
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

        {/* ── VOLUNTEER REGISTRATION ── */}
        <section id="volunteer" className="py-24 bg-white border-t border-green-100">
          <div className="max-w-3xl mx-auto px-6">
            <FadeInUp className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Be the Change</span>
              <h2 className="font-serif text-5xl font-black text-[#1A3A2A] mt-3">Volunteer Registration</h2>
              <p className="text-slate-500 mt-4">Every volunteer matters. Every action counts.</p>
            </FadeInUp>

            {submitted ? (
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                className="bg-[#F0FAF5] rounded-3xl p-12 text-center border border-green-200 shadow-xl">
                <CheckCircle2 className="w-16 h-16 text-green-650 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-black text-[#1A3A2A] mb-2">Welcome, Changemaker!</h3>
                <p className="text-slate-500">Our coordinator will reach out to you within 48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-lg space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Full Name *</label>
                    <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 bg-white transition-colors text-slate-800"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Email *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 bg-white transition-colors text-slate-800"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Department</label>
                    <input value={formData.dept} onChange={e => setFormData(p => ({ ...p, dept: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 bg-white transition-colors text-slate-800"
                      placeholder="CSE / ECE / MBA..." />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Interest Area</label>
                    <select value={formData.area} onChange={e => setFormData(p => ({ ...p, area: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 bg-white transition-colors text-slate-800">
                      {['Blood Donation', 'Environmental Drives', 'Teaching & Literacy', 'Disaster Relief', 'Awareness Campaigns', 'NGO Coordination'].map(a => <option key={a}>{a}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">Why do you want to volunteer?</label>
                  <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    rows={3} placeholder="Share your motivation..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 bg-white transition-colors resize-none text-slate-800" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-sm transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #1A4731, #38A169)' }}>
                  Register as Volunteer
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </SmoothScrollProvider>
  );
}
