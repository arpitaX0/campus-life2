import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Wifi, Volume2, PlayCircle, Users, Settings, CheckCircle2 } from 'lucide-react';

const ICTClassrooms = () => {

  const showcaseData = [
    {
      title: "Interactive Smart Boards",
      icon: <MonitorPlay className="w-7 h-7" />,
      accentColor: '#2c3a8c',
      features: ["Real-time presentations", "Multimedia integration", "Touch-enabled interaction"]
    },
    {
      title: "High-Speed Connectivity",
      icon: <Wifi className="w-7 h-7" />,
      accentColor: '#1a6b4a',
      features: ["Campus-wide internet access", "Seamless online learning", "Low-latency streaming"]
    },
    {
      title: "AV Enabled Learning",
      icon: <Volume2 className="w-7 h-7" />,
      accentColor: '#7c3aed',
      features: ["HD projectors", "Surround audio systems", "Live demonstrations"]
    }
  ];

  const hotspots = [
    { id: 1, label: "Interactive Smart Board", top: "35%", left: "45%", icon: <MonitorPlay className="w-5 h-5"/>, desc: "75-inch 4K multi-touch display for immersive collaborative learning." },
    { id: 2, label: "Audio System", top: "20%", left: "70%", icon: <Volume2 className="w-5 h-5"/>, desc: "Acoustically tuned surround sound for crystal clear lectures." },
    { id: 3, label: "HD Projector", top: "15%", left: "50%", icon: <PlayCircle className="w-5 h-5"/>, desc: "Ceiling mounted 5000-lumen projector for vivid visuals." },
    { id: 4, label: "Collaboration Zone", top: "70%", left: "60%", icon: <Users className="w-5 h-5"/>, desc: "Modular ergonomic seating designed for group work." },
    { id: 5, label: "Faculty Control Panel", top: "60%", left: "30%", icon: <Settings className="w-5 h-5"/>, desc: "Centralized podium controlling lighting, AV, and networking." }
  ];

  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div style={{ backgroundColor: '#FAF9F7', color: '#1a1a2e' }} className="min-h-screen font-sans overflow-hidden">

      {/* ── HERO (academics-tat style) ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[480px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
            alt="ICT Classrooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,27,62,0.90) 0%, rgba(26,38,96,0.75) 55%, rgba(13,27,62,0.40) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <a href="/" className="hover:text-white transition-colors">Campus Life</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>ICT Classrooms</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Future-Ready
            <br />
            <span style={{ color: '#E5AA3E' }}>Learning Spaces.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl leading-relaxed font-medium"
            style={{ color: 'rgba(255,255,255,0.80)', fontSize: '18px' }}
          >
            Experience technology-driven education through smart classrooms equipped with advanced digital tools and collaborative learning systems.
          </motion.p>
        </div>
      </section>

      {/* ── VISION STATEMENT ── */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ede8e3' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="leading-relaxed font-medium"
            style={{ color: '#4a4540', fontSize: '20px' }}
          >
            "Our ICT enabled classrooms are designed to create an interactive, modern, and effective learning environment. With the support of digital tools, smart teaching methods, and advanced presentation systems, students gain a better understanding of concepts through engaging and technology-driven education."
          </motion.p>
        </div>
      </section>

      {/* ── SMART CLASSROOM SHOWCASE ── */}
      <section style={{ backgroundColor: '#FAF9F7', borderBottom: '1px solid #ede8e3' }} className="py-24">
        <div className="max-w-[1300px] mx-auto px-6 xl:px-12">

          {/* Section heading */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#2c3a8c' }}>Technology Infrastructure</p>
            <h2 className="font-bold tracking-tight leading-tight" style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(30px, 4vw, 48px)', color: '#1a1a2e' }}>
              Smart Classroom <span style={{ color: '#2c3a8c' }}>Showcase.</span>
            </h2>
            <p className="mt-4 max-w-xl" style={{ color: '#6b6460', fontSize: '17px' }}>
              Every room is meticulously engineered to provide an uninterrupted, high-fidelity learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#ffffff', border: '1px solid #ede8e3' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-7"
                  style={{ backgroundColor: `${item.accentColor}12`, color: item.accentColor }}
                >
                  {item.icon}
                </div>

                {/* Accent line */}
                <div className="w-10 h-[3px] rounded-full mb-5" style={{ backgroundColor: item.accentColor }} />

                <h3 className="text-xl font-bold mb-5" style={{ color: '#1a1a2e' }}>{item.title}</h3>

                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: item.accentColor }} />
                      <span style={{ color: '#4a4540', fontSize: '15px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE HOTSPOT MAP ── */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-24">
        <div className="max-w-[1300px] mx-auto px-6 xl:px-12">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#2c3a8c' }}>Classroom Layout</p>
            <h2 className="font-bold tracking-tight" style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', color: '#1a1a2e' }}>
              Explore the <span style={{ color: '#2c3a8c' }}>Smart Room.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Hotspot image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ border: '1px solid #ede8e3' }}>
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=900"
                alt="Smart Classroom Layout"
                className="w-full h-full object-cover"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,27,62,0.35)' }} />

              {hotspots.map(h => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  className="absolute flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 focus:outline-none"
                  style={{
                    top: h.top, left: h.left,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: activeHotspot === h.id ? '#E5AA3E' : 'rgba(255,255,255,0.90)',
                    color: activeHotspot === h.id ? '#1a1a2e' : '#2c3a8c',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                    border: '2px solid rgba(255,255,255,0.7)'
                  }}
                  title={h.label}
                >
                  {h.icon}
                </button>
              ))}
            </div>

            {/* Hotspot detail panel */}
            <div className="flex flex-col gap-4">
              {hotspots.map(h => (
                <motion.div
                  key={h.id}
                  onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  className="cursor-pointer rounded-xl p-5 transition-all duration-200"
                  style={{
                    backgroundColor: activeHotspot === h.id ? '#f0f4ff' : '#ffffff',
                    border: `1px solid ${activeHotspot === h.id ? '#2c3a8c' : '#ede8e3'}`,
                  }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2c3a8c12', color: '#2c3a8c' }}>
                      {h.icon}
                    </div>
                    <h4 className="font-bold text-sm" style={{ color: '#1a1a2e' }}>{h.label}</h4>
                  </div>
                  {activeHotspot === h.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-sm ml-11 leading-relaxed"
                      style={{ color: '#6b6460' }}
                    >
                      {h.desc}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ICTClassrooms;
