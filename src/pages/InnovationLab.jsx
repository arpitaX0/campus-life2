import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, CheckCircle2, FlaskConical, ArrowRight 
} from 'lucide-react';

export default function InnovationLab() {

  const showcase = [
    { title: "Smart Crop Health Detector", category: "IoT", team: "Final Year B.Tech CSE", desc: "A smart multispectral camera system checking local plant nutrient deficiencies in real-time." },
    { title: "Unmanned Surveillance Rover", category: "Robotics", team: "Third Year ETC", desc: "All-terrain drone bot designed for remote mapping and safety scanning at hazardous areas." },
    { title: "MedBot Voice Diagnostician", category: "AI / ML", team: "Second Year B.Tech CSE", desc: "An offline NLP diagnostics system mapping natural voice symptoms to primary treatments." }
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#f5eeec', color: '#3e3a36' }}>
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
        {/* Background image + dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
            alt="Innovation Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,27,62,0.90) 0%, rgba(26,38,96,0.75) 55%, rgba(13,27,62,0.40) 100%)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <a href="/" className="hover:text-white transition-colors">Campus Life</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Innovation Lab</span>
          </nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Innovation
            <br />
            <span style={{ color: '#E5AA3E' }}>Laboratory.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl leading-relaxed font-medium mb-12"
            style={{ color: 'rgba(255,255,255,0.80)', fontSize: '18px' }}
          >
            Where bright minds design future-proof systems. Supporting students with hardware tools, supercomputers, and expert research mentors.
          </motion.p>


        </div>
      </section>




      {/* ── STUDENT PROJECTS SHOWCASE ── */}
      <section className="py-24" style={{ backgroundColor: '#eae0d5', borderTop: '1px solid #d6cfc9' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#2c3a8c' }}>Active Development</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-1" style={{ color: '#3e3a36' }}>
                Student Projects
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#6b6460' }}>
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
                className="rounded-3xl p-8 hover:shadow-lg transition-all"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9', boxShadow: '0 2px 12px rgba(62,58,54,0.05)' }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded" style={{ backgroundColor: 'rgba(44,58,140,0.08)', color: '#2c3a8c' }}>
                    {proj.category}
                  </span>
                  <span className="text-[10px]" style={{ color: '#9c9390' }}>{proj.team}</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#3e3a36' }}>{proj.title}</h3>
                <p className="text-xs leading-relaxed mb-6" style={{ color: '#6b6460' }}>{proj.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold" style={{ color: '#2c3a8c' }}>
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
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#2c3a8c' }}>Global IP Strategy</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-1 mb-6" style={{ color: '#3e3a36' }}>
              Patent Support & Prototyping Ecosystem
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: '#6b6460' }}>
              We guide innovative project creators through the entire legal process of filing and securing intellectual property. From state-level utility checks to national patent offices, our lab coordinates resources to protect student ideas.
            </p>

            <div className="space-y-4">
              {[
                "100% funding for patent draft & registration fees",
                "Dedicated Intellectual Property Rights (IPR) legal desks",
                "Advanced mentorship loops with global researchers"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: '#2c3a8c' }} className="flex-shrink-0" />
                  <span className="text-sm" style={{ color: '#3e3a36' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl flex gap-6 items-start" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9', boxShadow: '0 2px 12px rgba(62,58,54,0.05)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(124,58,237,0.08)', color: '#7c3aed' }}>
                <Handshake size={22} />
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#3e3a36' }}>Industry Collaborators</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#6b6460' }}>
                  Trident teams code and build side-by-side with engineers from top tech companies to resolve localized industrial bottlenecks.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl flex gap-6 items-start" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9', boxShadow: '0 2px 12px rgba(62,58,54,0.05)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(219,39,119,0.08)', color: '#db2777' }}>
                <FlaskConical size={22} />
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#3e3a36' }}>Government R&D Funding</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#6b6460' }}>
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
