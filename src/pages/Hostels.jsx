import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Shield, Wifi, Coffee, Users, Scroll,
  BookOpen, Star, HelpCircle, ArrowRight, CheckCircle2, Moon, Sun, 
  MapPin, PhoneCall, Zap, Smile
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function Hostels() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [activeRoom, setActiveRoom] = useState('double');

  const roomTypes = {
    single: {
      name: "Luxury Single Suite",
      desc: "Complete privacy and focused study space. Ideal for senior students and research scholars.",
      features: ["Attached Balcony", "Personal Study Desk", "Ensuite Bath", "AC & Air Purifier"],
      price: "₹1,20,000 / annum",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
    },
    double: {
      name: "Premium Double Sharing",
      desc: "The perfect balance of social connection and academic workspace, equipped with modular lockers.",
      features: ["Partitioned Workstations", "Shared Balcony", "Individual Wardrobes", "High-speed Ethernet"],
      price: "₹85,000 / annum",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop"
    },
    triple: {
      name: "Standard Triple Sharing",
      desc: "Spacious layout with high ceilings and ergonomic furniture, designed to foster deep camaraderie.",
      features: ["Three Single Beds", "Locker Storage Units", "Large Study Desk", "Excellent Ventilation"],
      price: "₹65,000 / annum",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop"
    }
  };

  const amenities = [
    { title: "Symmetrical High-Speed WiFi", desc: "Dedicated student network with gigabit lines and hotspots in all reading complexes.", icon: Wifi },
    { title: "24/7 Security Ring", desc: "Biometric access gates, CCTV network, and continuous security personnel patrol.", icon: Shield },
    { title: "Premium Dining Hall", desc: "Hygienic multi-cuisine mess preparing four fresh meals daily under strict audit.", icon: Coffee },
    { title: "Indoor Recreation Center", desc: "Table tennis tables, board game decks, flat screen TVs, and gaming setups.", icon: Smile },
    { title: "Quiet Library & Study Zones", desc: "Acoustically soundproof spaces open all night during midterms and exams.", icon: BookOpen },
    { title: "Laundry & Housekeeping", desc: "Professional machines and daily room sanitation service included.", icon: Zap }
  ];

  const rules = [
    "Biometric punch-in curfew strictly enforced at 9:30 PM daily.",
    "Prior written consent required from the Warden for leave or visitors.",
    "Absolute silence must be maintained in study lounges after 10:00 PM.",
    "Eco-conscious energy savings policy: Turn off electrical items when leaving."
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FAF6F0] text-stone-800 min-h-screen font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
              alt="Hostels"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,20,28,0.93) 0%, rgba(15,20,28,0.80) 55%, rgba(15,20,28,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Hostels</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Student Residences
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Luxury Student<br />
              <span style={{ color: '#E5AA3E' }}>Living Redefined.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              A premium residential enclave combining comfortable rooms, high-speed amenities, and 24/7 security circles for a peaceful academic environment.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '3', lbl: 'Room Types' }, { val: '24/7', lbl: 'Security' }, { val: 'Biometric', lbl: 'Access Gates' }, { val: 'WiFi', lbl: 'Gigabit Speed' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── ROOM VISUALIZER (360 TABS) ── */}
        <section id="rooms" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Premium Suites</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Explore Room Formats</h2>
          </div>

          {/* Interactive Room Tabs */}
          <div className="flex justify-center gap-3 mb-12">
            {Object.keys(roomTypes).map((type) => (
              <button
                key={type}
                onClick={() => setActiveRoom(type)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeRoom === type 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/10' 
                    : 'bg-white/5 border border-amber-500/20 hover:border-amber-500/40 text-inherit'
                }`}
              >
                {type.replace('Suite', '')} sharing
              </button>
            ))}
          </div>

          {/* Tab Viewer Panel */}
          <div className="bg-white/5 border border-amber-500/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeRoom}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-4 text-amber-500">{roomTypes[activeRoom].name}</h3>
                  <p className="opacity-80 mb-6 text-sm leading-relaxed">{roomTypes[activeRoom].desc}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {roomTypes[activeRoom].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
                        <span className="text-xs font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center py-6 border-t border-amber-500/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider opacity-60">Yearly Tariff</span>
                      <div className="text-xl font-bold text-amber-500">{roomTypes[activeRoom].price}</div>
                    </div>
                    
                  </div>
                </div>

                <div className="h-[350px] rounded-2xl overflow-hidden shadow-xl border border-amber-500/10 relative">
                  <img 
                    src={roomTypes[activeRoom].image} 
                    alt={roomTypes[activeRoom].name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
                    Interactive 3D Render
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>


        {/* ── RESIDENTIAL AMENITIES ── */}
        <section id="amenities" className="py-32 bg-stone-900/5 dark:bg-black/20 border-y border-amber-500/10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Living Standards</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">World-Class Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white/5 border border-amber-500/10 rounded-2xl shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-xs opacity-70 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── RULES & CONDUCT ── */}
        <section className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Welfare & Code</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Hostel Guidelines</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-8">
                To guarantee a secure, peaceful and highly academically-driven atmosphere, all residents must adhere strictly to TAT regulatory frameworks.
              </p>

              <div className="space-y-4">
                {rules.map((rule, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Scroll size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs opacity-80 leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-amber-500">Contact Warden Office</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-500" size={20} />
                  <span className="text-xs">Office of Resident Dean, block A, TAT Campus</span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneCall className="text-amber-500" size={20} />
                  <span className="text-xs">+91-674-6649250 (Warden Office)</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        

      </div>
    </SmoothScrollProvider>
  );
}
