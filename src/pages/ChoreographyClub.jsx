import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Star, Users, Calendar, Award, Music, Heart, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import danceImg1 from '../assets/Dance 1.jpeg';
import danceImg2 from '../assets/dance 2.jpg';
import festImg from '../assets/Fest.jpeg';
import annualFuncImg from '../assets/annual function.jpg';
import trifestImg from '../assets/news_trifest.png';
import freshersImg from '../assets/Freshers party.jpeg';

const stats = [
  { end: 120, suffix: '+', label: 'Active Members' },
  { end: 8, suffix: '', label: 'Dance Styles' },
  { end: 25, suffix: '+', label: 'Annual Performances' },
  { end: 12, suffix: '', label: 'Awards Won' },
];

const danceStyles = [
  { name: 'Classical Odissi', desc: 'The ancient temple dance of Odisha — grace, devotion, and storytelling through precise mudras.', color: '#C4882A', bg: 'bg-amber-50', border: 'border-amber-100' },
  { name: 'Bollywood Fusion', desc: 'High-energy Bollywood moves blended with contemporary styles for electrifying stage performances.', color: '#D97706', bg: 'bg-orange-50', border: 'border-orange-100' },
  { name: 'Hip-Hop & Urban', desc: 'Freestyle urban expressions — popping, locking, krumping — trained under expert urban choreographers.', color: '#7C3AED', bg: 'bg-violet-50', border: 'border-violet-100' },
  { name: 'Contemporary', desc: 'Fluid, expressive contemporary dance exploring emotions through body movement and spatial storytelling.', color: '#059669', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { name: 'Freestyle Salsa', desc: 'Latin rhythm, passion, and footwork — Salsa nights at Trident are legendary.', color: '#DC2626', bg: 'bg-rose-50', border: 'border-rose-100' },
  { name: 'Folk Dance', desc: 'Traditional folk dances of Odisha and India — preserving cultural roots with modern energy.', color: '#2563EB', bg: 'bg-blue-50', border: 'border-blue-100' },
];

const workshops = [
  { title: 'Beginner Movement Workshop', freq: 'Every Monday & Wednesday', duration: '2 hrs', mentor: 'Smita Rath' },
  { title: 'Classical Technique Masterclass', freq: 'Every Saturday', duration: '3 hrs', mentor: 'Prof. Anjali Mohanty' },
  { title: 'Choreography & Staging', freq: 'Bi-weekly Sundays', duration: '4 hrs', mentor: 'Ravi Sharma' },
  { title: 'Competition Prep Bootcamp', freq: 'Pre-festival months', duration: 'Intensive', mentor: 'Club Committee' },
];

const events = [
  { title: 'Freshers Nite', month: 'September', desc: "Grand welcoming performance for the new batch with a choreographed 45-minute show.", img: freshersImg },
  { title: 'Trifest Cultural Carnival', month: 'March', desc: "Our most prestigious show — competing against 30+ colleges across Odisha.", img: trifestImg },
  { title: 'Annual Function', month: 'May', desc: "A spectacular year-end stage performance celebrating the year's best choreography.", img: annualFuncImg },
];

const achievements = [
  { year: '2024', title: '1st Place — Utkal University Cultural Fest', detail: 'Contemporary dance category' },
  { year: '2024', title: 'Best Choreography Award — ITER Inferno', detail: 'Group folk fusion performance' },
  { year: '2023', title: 'Runner-up — SOA University Dance Fest', detail: 'Bollywood group category' },
  { year: '2023', title: 'Best Costume & Performance — Trifest', detail: 'Classical Odissi segment' },
];

const mentors = [
  { name: 'Prof. Anjali Mohanty', role: 'Faculty Coordinator & Classical Dance Trainer', exp: '18 years' },
  { name: 'Smita Rath', role: 'Contemporary & Bollywood Choreographer', exp: '10 years' },
  { name: 'Ravi Sharma', role: 'Hip-Hop & Urban Dance Coach', exp: '8 years' },
];

const testimonials = [
  { name: 'Priya Patel', dept: 'CSE 3rd Year', quote: 'The Choreography Club transformed my shy self into a confident performer. The stage at Trifest felt like home.' },
  { name: 'Rohan Mishra', dept: 'ECE 2nd Year', quote: 'Learning Bollywood fusion here was life-changing. The weekly workshops are incredibly well-structured and fun.' },
  { name: 'Sneha Das', dept: 'MBA 1st Year', quote: 'Even as a management student, this club welcomed me with open arms. Dance is the best stress-buster!' },
];

export default function ChoreographyClub() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  

  useEffect(() => {
    document.title = 'Choreography Club | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Join the Choreography Club at Trident Academy of Technology — explore classical, Bollywood, hip-hop & contemporary dance, workshops, and annual performances.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', style: 'Bollywood Fusion', message: '' }); }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FDF6EF] min-h-screen text-[#3E3A36] font-sans overflow-x-hidden">

        {/* ── HERO SECTION (academics-tat style) ── */}
        <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
          {/* Full-width photo background */}
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1400&q=85" alt="Indian Classical Dance Performance" className="w-full h-full object-cover object-center" />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.65) 55%, rgba(10,8,5,0.30) 100%)' }} />
          <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(10,8,5,0.75) 0%, transparent 50%)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
            <div className="max-w-3xl pt-36 pb-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
                <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
                <ChevronRight size={10} className="text-white/40" />
                <Link to="/extra-curricular" className="hover:text-[#E5AA3E] transition-colors">Extra Curricular</Link>
                <ChevronRight size={10} className="text-white/40" />
                <span className="text-[#E5AA3E]">Choreography Club</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
                <Music size={11} /> Creative Movement Studio
              </div>

              {/* Title */}
              <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
                Choreography
                <span className="block" style={{ color: '#E5AA3E' }}>Club</span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8">
                Where every step tells a story. Join Trident's most expressive community — performing classical, contemporary, and fusion dance across India's biggest college stages.
              </p>

              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" style={{ background: '#E5AA3E', color: '#0A0805' }}>
                Explore Club <ArrowRight size={13} />
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
        <section id="about" className="py-24 border-t border-amber-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Story</span>
                <h2 className="font-serif text-5xl md:text-6xl font-black text-[#2C2117] mt-3 mb-6 leading-tight">
                  The Art of <br /><span className="text-amber-600">Movement</span>
                </h2>
                <p className="text-[#6B5B45] text-lg leading-relaxed mb-6">
                  The Choreography Club at Trident Academy of Technology was founded with the belief that every student has a dancer within them. We are a 120+ member strong community united by rhythm, expression, and the love of performance.
                </p>
                <p className="text-[#9C8060] text-base leading-relaxed mb-8 font-medium">
                  From ancient classical Odissi to electrifying urban hip-hop, our club covers the full spectrum of dance. We perform at inter-college fests, state competitions, and our legendary on-campus cultural events — winning trophies and hearts alike.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C4882A, #E8BD63)' }}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#3E3A36] text-sm">Est. 2010</p>
                    <p className="text-[#9C8060] text-xs font-semibold">15 years of creative excellence</p>
                  </div>
                </div>
              </FadeInUp>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden h-72 row-span-2 shadow-2xl">
                  <img src={danceImg1} alt="Dance" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-34 shadow-xl">
                  <img src={danceImg2} alt="Performance" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-34 shadow-xl">
                  <img src={festImg} alt="Festival" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Stats */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
              {stats.map((s, i) => (
                <div key={i} className="bg-white border border-amber-100 rounded-3xl p-8 text-center shadow-md shadow-amber-100/30">
                  <div className="font-serif text-5xl font-black text-amber-600 mb-2">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2.5} />
                  </div>
                  <p className="text-[#9C8060] text-sm font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── DANCE STYLES ── */}
        <section className="py-24 bg-white border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Genres We Master</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Dance Styles</h2>
            </FadeInUp>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {danceStyles.map((style, i) => (
                <div key={i} className={`${style.bg} border ${style.border} rounded-3xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-500 group`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm border border-slate-100">
                    <Music size={22} style={{ color: style.color }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C2117] mb-3">{style.name}</h3>
                  <p className="text-[#6B5B45] text-sm leading-relaxed flex-1">{style.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                    style={{ color: style.color }}>
                    <span>Learn More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── WORKSHOPS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeInUp>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Regular Training</span>
                <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3 mb-8">Workshops & Training</h2>
                <p className="text-[#6B5B45] text-lg leading-relaxed mb-8 font-medium">
                  Our structured workshop program runs throughout the academic year, from beginner fundamentals to advanced competition choreography under professional mentors.
                </p>
              </FadeInUp>
              <StaggerChildren className="space-y-4">
                {workshops.map((w, i) => (
                  <div key={i} className="bg-white border border-amber-100 rounded-2xl p-6 hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 shadow-sm">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-black"
                      style={{ background: 'linear-gradient(135deg, #C4882A, #E8BD63)' }}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#3E3A36] mb-1">{w.title}</h4>
                      <p className="text-[#9C8060] text-xs mb-2">{w.freq} · {w.duration}</p>
                      <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">Mentor: {w.mentor}</span>
                    </div>
                  </div>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        {/* ── PERFORMANCE GALLERY ── */}
        <section className="py-24 bg-white border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Visual Memories</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Performance Gallery</h2>
            </FadeInUp>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {[danceImg1, danceImg2, festImg, annualFuncImg, trifestImg, freshersImg].map((img, i) => (
                <motion.div key={i} className="break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <img src={img} alt={`Performance ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANNUAL EVENTS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Stage Calendar</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Annual Events</h2>
            </FadeInUp>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, i) => (
                <ScrollReveal key={i} from={{ opacity: 0, y: 40 }} duration={0.7}>
                  <div className="group rounded-3xl overflow-hidden bg-white border border-amber-100 hover:border-amber-300 shadow-lg transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">{event.month}</span>
                        <h3 className="font-serif text-xl font-black text-white mt-1">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#6B5B45] text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section className="py-24 bg-white border-y border-amber-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Trophy Wall</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Competition Achievements</h2>
            </FadeInUp>
            <StaggerChildren className="space-y-4 max-w-4xl mx-auto">
              {achievements.map((a, i) => (
                <div key={i} className="bg-[#FDF6EF] border border-amber-100 hover:border-amber-300 rounded-2xl p-6 transition-all duration-300 flex items-center gap-6 hover:-translate-y-0.5 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C4882A, #E8BD63)' }}>
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">{a.year}</span>
                    </div>
                    <h4 className="font-bold text-[#3E3A36]">{a.title}</h4>
                    <p className="text-[#9C8060] text-sm">{a.detail}</p>
                  </div>
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── FACULTY MENTORS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Guided By Masters</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Faculty Mentors</h2>
            </FadeInUp>
            <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {mentors.map((m, i) => (
                <div key={i} className="bg-white border border-amber-100 rounded-3xl p-8 text-center hover:border-amber-300 hover:shadow-lg transition-all duration-500 shadow-sm">
                  <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #C4882A, #E8BD63)' }}>
                    {m.name.charAt(0)}
                  </div>
                  <h4 className="font-serif font-bold text-[#3E3A36] mb-2">{m.name}</h4>
                  <p className="text-[#9C8060] text-xs mb-3 leading-relaxed">{m.role}</p>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">{m.exp} experience</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-white border-t border-amber-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Voices from the Stage</span>
              <h2 className="font-serif text-5xl font-black text-[#2C2117] mt-3">Student Testimonials</h2>
            </FadeInUp>
            <div className="relative bg-[#FDF6EF] border border-amber-100 rounded-3xl p-10 shadow-lg min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}>
                  <div className="text-5xl font-serif text-amber-300 leading-none mb-4">"</div>
                  <p className="text-[#6B5B45] text-lg italic leading-relaxed mb-6 font-medium">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="border-t border-amber-100 pt-5">
                    <p className="font-bold text-[#3E3A36]">{testimonials[activeTestimonial].name}</p>
                    <p className="text-[#9C8060] text-sm">{testimonials[activeTestimonial].dept}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'w-6 bg-amber-500' : 'w-2 bg-amber-200'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
