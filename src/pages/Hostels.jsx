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
      <div className={`transition-colors duration-1000 min-h-screen font-sans ${
        isNightMode ? 'bg-[#0f141c] text-slate-100' : 'bg-[#FAF6F0] text-stone-800'
      }`}>
        
        {/* ── Bespoke Floating Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
            <span className="font-serif text-lg font-bold tracking-wider text-amber-500">TAT Luxury Living</span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#rooms" className="hover:text-amber-500 transition-colors">Rooms</a>
              <a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a>
              
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Day/Night Transition ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
          {/* Day & Night Interactive Backdrop */}
          <div className="absolute inset-0 z-0 transition-opacity duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop" 
              alt="Luxury Hostels Day" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isNightMode ? 'opacity-0' : 'opacity-30'
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-1000 ${
              isNightMode 
                ? 'from-blue-950/80 via-slate-900 to-[#0f141c]' 
                : 'from-amber-100/40 via-stone-100/20 to-[#FAF6F0]'
            }`} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Day/Night Interactive Switch */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNightMode(!isNightMode)}
              className="mb-8 px-4 py-2 rounded-full border border-amber-500/30 bg-white/10 backdrop-blur-md flex items-center gap-3 text-xs uppercase font-bold tracking-widest text-amber-500 transition-colors"
            >
              {isNightMode ? <Sun size={14} /> : <Moon size={14} />}
              Toggle {isNightMode ? 'Day Light' : 'Night Mood'}
            </motion.button>

            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-none">
              Luxury Student <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                Living Redefined.
              </span>
            </h1>

            <p className="text-base md:text-lg max-w-2xl mb-12 opacity-80 leading-relaxed font-light">
              Experience a premium residential enclave combining premium rooms, high-speed amenities, and 24/7 security circles to guarantee a comfortable academic environment.
            </p>

            <a href="#rooms" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20">
              Explore Residence Units
            </a>
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
