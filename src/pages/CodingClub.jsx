import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Terminal, Code, Award, Users, BookOpen, Cpu, Globe, ArrowRight, ChevronDown, CheckCircle2, Copy, Play, Check } from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';
import { FadeInUp, StaggerChildren, AmbientParticles } from '../utils/animations';
import { GSAPCounter, ScrollReveal } from '../utils/advanced-animations';

import codingClubBg from '../assets/coding club.jpeg';
import hackathonImg from '../assets/news_hackathon.png';
import labImg from '../assets/news_innovation_lab.png';

const stats = [
  { end: 250, suffix: '+', label: 'Active Members' },
  { end: 15, suffix: '+', label: 'Hackathon Wins' },
  { end: 40, suffix: '+', label: 'Open Source PRs' },
  { end: 120, suffix: 'K+', label: 'Lines of Code' },
];

const features = [
  { icon: Code, title: 'Competitive Programming', desc: 'Weekly contests on CodeForces, CodeChef, and LeetCode. Master algorithms, data structures, and spatial complexity.', lang: 'C++ / Java / Python' },
  { icon: Cpu, title: 'Hackathons & Building', desc: '48-hour sprint building cycles. From Web3 and GenAI integrations to robust Web2 applications and embedded systems.', lang: 'React / Node.js / Solidity' },
  { icon: Globe, title: 'Open Source Initiative', desc: 'Contribute to real-world global projects. Maintain club repositories and collaborate on Git and GitHub workflows.', lang: 'Git / GitHub / OSS' },
];

const projects = [
  { title: 'Trident Campus Portal', desc: 'A unified portal for students to track attendance, club events, and academic calendars. Designed and maintained by Coding Club members.', tech: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'], stars: 48 },
  { title: 'AlgoVisualizer-3D', desc: 'A 3D visualization tool for sorting algorithms, pathfinding, and graph traversals. Built to help freshmen learn data structures interactively.', tech: ['Three.js', 'React-Three-Fiber', 'TypeScript'], stars: 82 },
  { title: 'Open-Library-API', desc: "A fast, cached REST API wrapper for Trident's library system, enabling developers on campus to query book availability.", tech: ['FastAPI', 'Redis', 'Docker'], stars: 31 },
];

const terminalSnippets = [
  { label: 'bubblesort.py', code: `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr` },
  { label: 'binary_search.cpp', code: `int binarySearch(int arr[], int l, int r, int x) {\n    while (l <= r) {\n        int m = l + (r - l) / 2;\n        if (arr[m] == x) return m;\n        if (arr[m] < x) l = m + 1;\n        else r = m - 1;\n    }\n    return -1;\n}` },
  { label: 'hello_world.rs', code: `fn main() {\n    println!("Hello, Trident Coders!");\n    let mut status = "building_future";\n    println!("Status: {}", status);\n}` },
];

export default function CodingClub() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  
  const canvasRef = useRef(null);

  const fullPrompt = "ssh tat@coding-club -p 2026 && npm run dev --theme=innovate";

  useEffect(() => {
    document.title = 'Coding Club | Trident Academy of Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Explore the Coding Club at Trident Academy — competitive coding, hackathons, open-source projects, and advanced programming workshops.';
    if (meta) meta.setAttribute('content', content);
    else { const m = document.createElement('meta'); m.name = 'description'; m.content = content; document.head.appendChild(m); }
  }, []);

  // Matrix Code Rain effect (Dark Theme)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    const columns = Math.floor(width / 20);
    const yPositions = Array(columns).fill(0);
    const chars = "0101010101ABCDEF<>/{};:_[]+=-*".split("");
    const draw = () => {
      ctx.fillStyle = 'rgba(4, 13, 26, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#00FF41';
      ctx.font = '14px monospace';
      for (let i = 0; i < yPositions.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, yPositions[i]);
        if (yPositions[i] > 100 + Math.random() * 10000) yPositions[i] = 0;
        else yPositions[i] += 15;
      }
    };
    const render = () => { draw(); animationFrameId = requestAnimationFrame(render); };
    render();
    return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); };
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullPrompt.slice(0, index + 1));
      index++;
      if (index >= fullPrompt.length) clearInterval(interval);
    }, 85);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalSnippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', roll: '', language: 'C++', experience: 'Intermediate', message: '' });
    }, 3000);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#040D1A] min-h-screen text-green-400 font-mono overflow-x-hidden">

        <AmbientParticles count={12} color="rgba(0,255,65,0.04)" />

        {/* ── HERO SECTION ── */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A]/70 via-[#040D1A]/50 to-[#040D1A] z-1" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-green-600 mb-8">
              <Link to="/"  className="hover:text-green-400 transition-colors flex items-center gap-1"><Home size={10} />Home</Link>
              <ChevronRight size={8} />
              <Link to="/extra-curricular"  className="hover:text-green-400 transition-colors">Extra Curricular</Link>
              <ChevronRight size={8} />
              <span className="text-green-400">Coding Club</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
              <Terminal size={12} /> Code · Build · Innovate
            </div>

            <div className="bg-[#020811] border border-green-900/40 rounded-lg max-w-lg mx-auto p-3 text-left mb-8 shadow-xl shadow-green-900/10 relative">
              <div className="absolute top-2.5 right-3 text-[10px] text-green-800">bash</div>
              <div className="flex items-center gap-2 text-green-400">
                <span>$</span>
                <span>{typedText}</span>
                <span className="w-1.5 h-4 bg-green-400 animate-pulse inline-block" />
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-8">
              Coding <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Club</span>
            </h1>

            <p className="text-green-500/80 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              We translate coffee into code, ideas into deployments, and logic into legacy. Master competitive programming, build scalable apps, and dominate regional hackathons.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              
              <a href="#about" className="px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider text-green-400 border border-green-500/30 hover:bg-green-500/10 transition-all">
                cat about.txt
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60">
            <span className="text-[9px] tracking-widest text-green-700 uppercase mb-2">scroll down</span>
            <ChevronDown className="w-4 h-4 text-green-400 animate-bounce" />
          </div>
        </section>

        {/* ── ABOUT README ── */}
        <section id="about" className="py-24 border-t border-green-950/30 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-green-400 font-bold uppercase tracking-widest">cat README.md</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3 mb-6 leading-tight">
                  Debugging limits. <br />Creating solutions.
                </h2>
                <p className="text-green-500/80 text-sm leading-relaxed mb-6 font-medium">
                  Founded with a vision to build a thriving developer community on campus, the Coding Club is a launchpad for programmers, engineers, and tech creators.
                </p>
                <p className="text-green-600/70 text-sm leading-relaxed mb-8">
                  From debugging simple sorting algorithms to deploying full-scale React and Next.js portals, we focus on learning by doing. We host peer-to-peer mentoring groups, bootcamps, and run open-source systems that improve student campus life.
                </p>
                <div className="border border-green-900/30 bg-[#020811]/60 rounded-xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-900/30">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-200 text-sm">Open to all branches</p>
                    <p className="text-green-600/70 text-xs font-semibold">CSE, ETC, EEE, Civil, Mechanical, MBA, MCA</p>
                  </div>
                </div>
              </FadeInUp>

              {/* Terminal Code Preview */}
              <div className="bg-[#020811] border border-green-900/30 rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10">
                <div className="bg-[#010609] px-5 py-3 border-b border-green-900/20 flex items-center justify-between text-xs text-green-700">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex gap-4">
                    {terminalSnippets.map((snippet, idx) => (
                      <button key={idx} onClick={() => setActiveSnippet(idx)}
                        className={`transition-colors font-bold ${activeSnippet === idx ? 'text-green-400 border-b border-green-400' : 'text-green-800 hover:text-green-600'}`}>
                        {snippet.label}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleCopyCode} className="text-green-700 hover:text-green-400 transition-colors flex items-center gap-1">
                    {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                    {copied ? 'copied' : 'copy'}
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto text-xs text-green-400/90 leading-relaxed font-mono select-all bg-[#010609] min-h-[170px]">
                  <code>{terminalSnippets[activeSnippet].code}</code>
                </pre>
              </div>
            </div>

            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#020811]/60 border border-green-950/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-1">
                    <GSAPCounter end={s.end} suffix={s.suffix} duration={2} />
                  </div>
                  <p className="text-green-700 text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── CLUB FEATURES ── */}
        <section className="py-24 bg-[#020811]/40 border-y border-green-950/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-green-400 font-bold uppercase tracking-widest">what we focus on</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3">Club Pillars</h2>
            </FadeInUp>
            <StaggerChildren className="grid md:grid-cols-3 gap-8">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="bg-[#020811] border border-green-950/20 rounded-2xl p-8 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-500 group flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{feat.title}</h3>
                      <p className="text-green-600/70 text-xs leading-relaxed mb-6">{feat.desc}</p>
                    </div>
                    <div className="text-[11px] text-green-500 font-bold uppercase tracking-wider border-t border-green-950/30 pt-4 flex items-center justify-between">
                      <span>Stack: {feat.lang}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        {/* ── STUDENT PROJECTS ── */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs text-green-400 font-bold uppercase tracking-widest">peer building</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3">Student Projects</h2>
            </FadeInUp>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((proj, i) => (
                <ScrollReveal key={i} from={{ opacity: 0, y: 30 }} duration={0.6}>
                  <div className="bg-[#020811] border border-green-950/20 hover:border-green-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-lg hover:shadow-green-900/20">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-3">{proj.title}</h3>
                      <p className="text-green-600/70 text-xs leading-relaxed mb-6">{proj.desc}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="bg-green-500/10 text-green-400 text-[10px] px-2 py-0.5 rounded border border-green-900/30">{t}</span>
                        ))}
                      </div>
                      <div className="border-t border-green-950/30 pt-4 flex justify-between items-center text-[10px] text-green-700 font-bold uppercase">
                        <span>GitHub Repository</span>
                        <span className="text-green-400 font-black">★ {proj.stars} stars</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── EVENTS & COMPETITIONS ── */}
        <section className="py-24 bg-[#020811]/40 border-t border-green-950/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <span className="text-xs text-green-400 font-bold uppercase tracking-widest">coding calendar</span>
                <h2 className="font-serif text-4xl md:text-5xl font-black text-white mt-3 mb-6">Hackathons & Bootcamps</h2>
                <p className="text-green-500/80 text-sm leading-relaxed mb-6 font-medium">
                  We coordinate year-round tech activities — from our signature campus-wide hackathon, to specialized peer workshops on data structures, system design, and AI models.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm">Trident Hack-a-Thon 2026</h4>
                      <p className="text-green-600/70 text-xs leading-relaxed">Our annual 36-hour build sprint. Over 40 teams compete for mentorship and cash prizes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm">Algorithm & Competitive Bootcamps</h4>
                      <p className="text-green-600/70 text-xs leading-relaxed">Structured training sessions to prepare juniors for technical interviews and placement tests.</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10 border border-green-900/20">
                <img src={hackathonImg} alt="Coding competition" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </SmoothScrollProvider>
  );
}
