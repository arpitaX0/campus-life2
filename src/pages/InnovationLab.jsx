import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Radio, Settings, Hammer, 
  Handshake, CheckCircle2, FlaskConical, ArrowRight 
} from 'lucide-react';

export default function InnovationLab() {

  const labs = [
    { title: "AI & Machine Learning Lab", icon: Brain, desc: "Building neural networks, NLP bots, and machine vision models for autonomous systems.", color: "from-pink-500 to-purple-600" },
    { title: "IoT Innovation Center", icon: Radio, desc: "Working on smart grid technologies, edge computing nodes, and automated remote sensors.", color: "from-cyan-500 to-blue-600" },
    { title: "Robotics Laboratory", icon: Settings, desc: "Creating micro-controller driven arms, line followers, and custom unmanned aerial units.", color: "from-violet-500 to-indigo-600" },
    { title: "Product Prototyping Space", icon: Hammer, desc: "Rapid prototyping equipped with advanced 3D printers, laser cutters, and hardware workshops.", color: "from-purple-500 to-cyan-500" }
  ];

  const showcase = [
    { title: "Smart Crop Health Detector", category: "IoT", team: "Final Year B.Tech CSE", desc: "A smart multispectral camera system checking local plant nutrient deficiencies in real-time." },
    { title: "Unmanned Surveillance Rover", category: "Robotics", team: "Third Year ETC", desc: "All-terrain drone bot designed for remote mapping and safety scanning at hazardous areas." },
    { title: "MedBot Voice Diagnostician", category: "AI / ML", team: "Second Year B.Tech CSE", desc: "An offline NLP diagnostics system mapping natural voice symptoms to primary treatments." }
  ];

  return (
    <div className="bg-[#0b0813] min-h-screen text-slate-200 font-sans overflow-x-hidden">
      
      <section className="relative pt-36 pb-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/50 via-[#0b0813] to-[#0b0813] border-b border-indigo-900/30 overflow-hidden">
        {/* Animated Hologram sweep scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-0 opacity-40 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none font-display">
              Innovation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">
                Laboratory.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-4 leading-relaxed font-light">
              Where bright minds design future-proof systems. Supporting students with hardware tools, supercomputers, and expert research mentors.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ── LAB SUB-DIVISIONS ── */}
      <section id="labs" className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our Core Laboratories
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Equipped with premium compute setups, development kits, and prototyping systems.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {labs.map((lab, idx) => {
            const Icon = lab.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-slate-850 hover:border-cyan-500/30 rounded-3xl p-6 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${lab.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{lab.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{lab.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── STUDENT PROJECTS SHOWCASE ── */}
      <section className="py-24 bg-[#07050d] border-t border-indigo-950">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest">Active Development</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-1">
                Student Projects
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Cutting edge engineering prototypes designed and tested entirely inside our campus innovation workspaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcase.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0f0b1a] border border-slate-800/80 rounded-3xl p-8 hover:border-pink-500/30 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-pink-500/10 text-pink-400 px-3 py-1 rounded">
                    {proj.category}
                  </span>
                  <span className="text-[10px] text-slate-500">{proj.team}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{proj.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{proj.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300">
                  Read Patent Details <ArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATENT SHOWCASE & ECOSYSTEM ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Global IP Strategy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-1 mb-6">
              Patent Support & Prototyping Ecosystem
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We guide innovative project creators through the entire legal process of filing and securing intellectual property. From state-level utility checks to national patent offices, our lab coordinates resources to protect student ideas.
            </p>

            <div className="space-y-4">
              {[
                "100% funding for patent draft & registration fees",
                "Dedicated Intellectual Property Rights (IPR) legal desks",
                "Advanced mentorship loops with global researchers"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="p-6 bg-slate-900/40 border border-slate-850 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0">
                <Handshake size={22} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Industry Collaborators</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trident teams code and build side-by-side with engineers from top tech companies to resolve localized industrial bottlenecks.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 border border-slate-850 rounded-2xl flex gap-6 items-start">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400 flex-shrink-0">
                <FlaskConical size={22} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Government R&D Funding</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our innovation labs coordinate multiple grants backed by national councils to facilitate high-tech sensor procurement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── UNIFIED NAVIGATION SWITCHER ── */}

    </div>
  );
}
