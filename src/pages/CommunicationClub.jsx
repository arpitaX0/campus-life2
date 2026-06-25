import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, MessageSquare, Mic, Users, Award, Briefcase, BookOpen, Star, ArrowRight, ChevronDown, CheckCircle2, Volume2 } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, FloatingElement, AmbientParticles } from '../utils/animations';
import { GSAPCounter, Tilt3D, ScrollReveal } from '../utils/advanced-animations';

import debateImg from '../assets/news_seminar.jpg';
import studentsImg from '../assets/about_students_studying.jpg';

const stats = [
  { end: 180, suffix: '+', label: 'Club Members' },
  { end: 40, suffix: '+', label: 'Debate Contests' },
  { end: 15, suffix: '+', label: 'Placements Guided' },
  { end: 100, suffix: '%', label: 'Confidence Boost' },
];

const sessions = [
  {
    icon: Mic,
    title: 'Public Speaking Training',
    desc: 'Master the art of stage presence, voice modulation, body language, and audience engagement through structured speech drills.',
    focus: 'Elocution & Keynotes',
  },
  {
    icon: MessageSquare,
    title: 'Model United Nations & Debates',
    desc: 'Parliamentary debates, MUN simulations, and open forums discussing global politics, economics, and ethics.',
    focus: 'Logical Reasoning & MUNs',
  },
  {
    icon: Users,
    title: 'Group Discussions & GDs',
    desc: 'Prepare for placement recruitment processes. Learn how to articulate arguments, listen actively, and build consensus.',
    focus: 'Placement & GD Prep',
  },
  {
    icon: Briefcase,
    title: 'Personality Development',
    desc: 'Resume reviews, mock interviews, formal networking etiquette, and grooming sessions led by industry HR experts.',
    focus: 'Corporate Readiness',
  },
];

const successStories = [
  {
    name: 'Siddharth Patnaik',
    achievement: 'Placed at Amazon (SDE)',
    quote: 'The mock group discussions and panel interview simulations at the Communication Club were the key. I went from being extremely nervous to articulate and confident.',
  },
  {
    name: 'Ananya Mohapatra',
    achievement: 'Winner — Inter-College Debate 2025',
    quote: 'Debating weekly at the club sharpened my critical thinking. I learned to structure my thoughts on the spot, which has helped me immensely in both academics and contests.',
  },
  {
    name: 'Subham Behera',
    achievement: 'Placed at TCS Digital',
    quote: 'I joined to overcome my stage fright. Within six months, I was hosting the annual tech fest in front of 3,000 people. The support here is incredible.',
  },
];

const debateTopics = [
  "Will Generative AI fully replace entry-level software developers?",
  "Should social media platforms be regulated like utilities?",
  "Are virtual classrooms as effective as physical campus learning?",
  "Is space exploration worth the multi-billion dollar investment?",
];

export default function CommunicationClub() {
  const [topicIdx, setTopicIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [activeStory, setActiveStory] = useState(0);
  
  

  useEffect(() => {
    document.title = 'Communication Club | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Speak with confidence. Join the Communication Club at Trident Academy of Technology to master debates, public speaking, group discussions, and personality development.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  // Debate topics typing effect cycling
  useEffect(() => {
    let currentTopic = debateTopics[topicIdx];
    let isDeleting = false;
    let charIdx = 0;
    let timer;

    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentTopic.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentTopic.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2000); // pause at full text
        } else {
          timer = setTimeout(tick, 50); // typing speed
        }
      } else {
        setTypedText(currentTopic.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          setTopicIdx(prev => (prev + 1) % debateTopics.length);
          timer = setTimeout(tick, 500); // pause before next topic
        } else {
          timer = setTimeout(tick, 25); // deleting speed
        }
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [topicIdx]);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveStory(prev => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', focusArea: 'Public Speaking', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F8FAFF] min-h-screen text-[#1E293B] font-sans overflow-x-hidden">

        <AmbientParticles count={15} color="rgba(79,70,229,0.06)" />

        {/* ── HERO SECTION: Split layout with Speech Bubble & Debate Cycle ── */}
        <section className="relative min-h-screen grid lg:grid-cols-12 gap-12 items-center px-6 md:px-16 pt-24 pb-16 overflow-hidden">
          {/* Left Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-600/70 mb-8">
              <Link to="/"  className="hover:text-indigo-600 flex items-center gap-1"><Home size={12} />Home</Link>
              <ChevronRight size={10} />
              <Link to="/extra-curricular"  className="hover:text-indigo-600">Extra Curricular</Link>
              <ChevronRight size={10} />
              <span className="text-indigo-600">Communication Club</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 w-fit">
              <Mic size={12} /> Speak with Confidence
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-black text-[#2C3A8C] leading-none mb-6">
              Empowering <br /><span className="text-indigo-600">Voices</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
              Ideas are only as powerful as your ability to articulate them. Join a community of debaters, speakers, and leaders who shape discussions on campus and beyond.
            </p>

            {/* Simulated Animated Speech Bubble */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 relative max-w-lg shadow-sm mb-10">
              <div className="absolute top-4 left-6 text-[10px] text-indigo-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare size={10} /> Discussion Topic
              </div>
              <p className="text-indigo-900 font-serif text-lg md:text-xl font-bold mt-4 min-h-[50px] leading-relaxed">
                "{typedText}"
                <span className="w-1.5 h-4 bg-indigo-500 animate-pulse inline-block ml-1" />
              </p>
              {/* Speech bubble arrow pointer */}
              <div className="absolute left-10 -bottom-3 w-6 h-6 bg-indigo-50 border-r border-b border-indigo-100 rotate-45" />
            </div>

            <div className="flex flex-wrap gap-4">
              
              <a href="#about" className="px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider text-indigo-600 border border-indigo-200 hover:bg-indigo-50 transition-all">
                Learn Modules
              </a>
            </div>
          </div>

          {/* Right Panel: Portrait collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] md:h-[480px]">
              <img src={studentsImg} alt="Students debating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
            </div>
            
            {/* Ambient Speech wave graphic overlays */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-indigo-50 flex items-center gap-3">
              <div className="flex gap-1.5 items-end h-8">
                {[4, 8, 3, 7, 5, 8, 2, 6, 8, 4, 7, 3, 6, 8, 2, 5].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-indigo-600 rounded-full"
                    animate={{ height: [`${h*3}px`, `${h*4}px`, `${h*2}px`, `${h*3}px`] }}
                    transition={{ repeat: Infinity, duration: 1 + (i % 3) * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-xs text-indigo-950">Campus Debate Live</p>
                <p className="text-[10px] text-slate-500">Weekly Open Microphone session</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION & STATS ── */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-[0.2em]">Our Mission</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#2C3A8C] mt-3 mb-6 leading-tight">
                  Crafting Eloquent <br /><span className="text-indigo-600">Campus Leaders</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  At the Trident Communication Club, we help students develop the critical speaking, listening, and debating skills that are essential in the modern corporate and academic world.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Through friendly weekly debates, structured speech craft modules, and mock recruitment panels, we provide a welcoming environment where you can shed stage fright and discover your voice.
                </p>
              </FadeInUp>

              <div className="relative rounded-2xl overflow-hidden shadow-xl h-72">
                <img src={debateImg} alt="Debate panel" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Counters */}
            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#F8FAFF] border border-indigo-50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-serif font-black text-indigo-600 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── TRAINING MODULES ── */}
        <section className="py-24 bg-[#F8FAFF] border-y border-indigo-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-[0.2em]">what you will learn</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#2C3A8C] mt-3">Club Training Modules</h2>
            </FadeInUp>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sessions.map((sess, i) => {
                const Icon = sess.icon;
                return (
                  <Tilt3D key={i} intensity={8} className="h-full">
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500 group">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                          <Icon size={22} />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-indigo-950 mb-3">{sess.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6">{sess.desc}</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                        {sess.focus}
                      </span>
                    </div>
                  </Tilt3D>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* ── SUCCESS STORIES ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp className="text-center mb-16">
              <span className="text-xs text-indigo-600 font-bold uppercase tracking-[0.2em]">Our Alumni</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#2C3A8C] mt-3">Success Stories</h2>
            </FadeInUp>

            <div className="relative bg-[#F8FAFF] rounded-3xl p-8 md:p-10 border border-indigo-50 shadow-md min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-5xl font-serif text-indigo-200 leading-none mb-4">"</div>
                  <p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                    {successStories[activeStory].quote}
                  </p>
                  <div className="border-t border-indigo-100 pt-5">
                    <p className="font-bold text-[#2C3A8C]">{successStories[activeStory].name}</p>
                    <p className="text-indigo-600 text-xs font-semibold">{successStories[activeStory].achievement}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-1.5 mt-8">
                {successStories.map((_, i) => (
                  <button key={i} onClick={() => setActiveStory(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeStory === i ? 'w-6 bg-indigo-600' : 'w-2 bg-indigo-200'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EVENTS & DEBATE BRACKETS ── */}
        <section className="py-24 bg-[#F8FAFF] border-t border-indigo-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 lg:h-96">
                <img src={debateImg} alt="Debaters" className="w-full h-full object-cover" />
              </div>
              <FadeInUp>
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-[0.2em]">yearly contests</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-[#2C3A8C] mt-3 mb-6">Clash of Minds</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We host and represent Trident Academy at prestigious debating contests, oratorical slams, and personality pageants across the region.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-indigo-50 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm text-indigo-950">TAT Oratorical Championship</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Annual campus-wide speech slam.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">October</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-indigo-50 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm text-indigo-950">Inter-College MUN Showcase</h4>
                      <p className="text-slate-500 text-xs mt-0.5">Simulated UN assembly discussion.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">February</span>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
