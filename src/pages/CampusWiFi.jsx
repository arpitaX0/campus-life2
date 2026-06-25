import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, ShieldCheck, Laptop, HelpCircle, ArrowRight, CheckCircle2, 
  MapPin, Radio, Activity, Terminal
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function CampusWiFi() {
  const [selectedZone, setSelectedZone] = useState('library');

  const coverageZones = {
    library: {
      name: "Central Library Complex",
      ssid: "Trident_Library_HighSpeed",
      speed: "750 Mbps",
      users: "320 active devices",
      latency: "4 ms",
      strength: "Excellent (-48 dBm)",
      color: "border-[#38BDF8]"
    },
    academic: {
      name: "Main Academic Blocks",
      ssid: "Trident_Academic_OPD",
      speed: "500 Mbps",
      users: "850 active devices",
      latency: "8 ms",
      strength: "Very Good (-55 dBm)",
      color: "border-teal-500"
    },
    hostels: {
      name: "Residence Halls / Hostels",
      ssid: "Trident_Hostels_Secure",
      speed: "350 Mbps",
      users: "1100 active devices",
      latency: "12 ms",
      strength: "Good (-62 dBm)",
      color: "border-indigo-500"
    },
    canteen: {
      name: "Main Cafeteria & Ground",
      ssid: "Trident_Dining_Free",
      speed: "250 Mbps",
      users: "180 active devices",
      latency: "15 ms",
      strength: "Good (-65 dBm)",
      color: "border-amber-500"
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#090D1F] text-slate-100 min-h-screen font-sans overflow-x-hidden selection:bg-[#38BDF8] selection:text-black">
        
        {/* ── NetOps Floating Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-[#090D1F]/90 text-white border border-[#38BDF8]/20 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(56,189,248,0.15)]">
            <span className="font-mono text-sm font-bold tracking-wider text-[#38BDF8] flex items-center gap-2">
              <Wifi size={16} className="text-[#38BDF8] animate-bounce" /> NetOps Online
            </span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#coverage" className="hover:text-[#38BDF8] transition-colors">Hotspots Map</a>
              <a href="#setup" className="hover:text-[#38BDF8] transition-colors">Setup Guide</a>
              <a href="#policies" className="px-4 py-2 bg-[#38BDF8] hover:bg-[#0EA5E9] text-black rounded-full font-bold transition-all">Support Desk</a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Network Radar Pulse ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
          {/* Pulsing visual radial wave background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[#38BDF8]/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                animate={{ scale: [1, 1.5, 2], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                className="w-full h-full border border-[#38BDF8] rounded-full"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] mb-6 text-xs font-bold uppercase tracking-widest">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Network Status: NORMAL (10 Gbps Backbone)</span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
              Connected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-indigo-500">
                Anywhere.
              </span>
            </h1>

            <p className="text-sm md:text-base max-w-2xl mb-12 text-slate-400 leading-relaxed font-light font-sans">
              Enjoy high-speed enterprise-grade WiFi across the entire campus. Seamlessly connect to digital libraries, online compilers, and lecture portals with optimized latency.
            </p>

            <a href="#coverage" className="px-8 py-4 bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              Open Hotspots Map
            </a>
          </div>
        </section>


        {/* ── HOTSPOT COVERS (INTERACTIVE MAP SELECTOR) ── */}
        <section id="coverage" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">Active Access Nodes</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Coverage Map & Speed Telemetry</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Zone Selector */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-[#38BDF8] flex items-center gap-2"><MapPin size={18} /> Select Hotspot Location</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(coverageZones).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedZone(key)}
                    className={`p-4 rounded-xl text-left text-xs font-bold transition-all border ${
                      selectedZone === key 
                        ? 'bg-[#38BDF8] text-black border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20' 
                        : 'bg-[#38BDF8]/5 hover:bg-[#38BDF8]/10 border-[#38BDF8]/10 text-slate-300'
                    }`}
                  >
                    {coverageZones[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Telemetry Specs */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl min-h-[300px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedZone}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded">Telemetry Specs</span>
                    <span className="text-xs font-mono text-slate-500">SSID: {coverageZones[selectedZone].ssid}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-200">{coverageZones[selectedZone].name}</h3>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-900">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500">Download Speed</span>
                      <div className="text-lg font-bold text-emerald-400">{coverageZones[selectedZone].speed}</div>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500">Network Latency</span>
                      <div className="text-lg font-bold text-[#38BDF8]">{coverageZones[selectedZone].latency}</div>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500">Signal Strength</span>
                      <div className="text-xs font-bold text-slate-300 mt-1">{coverageZones[selectedZone].strength}</div>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-500">Node Congestion</span>
                      <div className="text-xs font-bold text-slate-300 mt-1">{coverageZones[selectedZone].users}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>


        {/* ── CONNECTION SETUP GUIDE ── */}
        <section id="setup" className="py-32 bg-slate-950/40 border-y border-slate-900">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">Connect Device</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Access & Setup Guide</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Select Network SSID", desc: "Open your device parameters and join 'Trident_Academic_OPD' or 'Trident_Library_HighSpeed'." },
                { title: "Sign-in to Captive Portal", desc: "Your web browser will prompt for login credentials. Enter your roll number and TAT password." },
                { title: "Secure Browsing Active", desc: "Enjoy uninterrupted sessions. Our network servers block spam domains and unauthorized trackers automatically." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl relative">
                  <div className="w-10 h-10 bg-[#38BDF8]/10 rounded-xl flex items-center justify-center text-[#38BDF8] mb-6 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── WIFI POLICIES & NETWORK SECURITY ── */}
        <section id="policies" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest">Digital Boundaries</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Fair Usage Guidelines</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                Our infrastructure guarantees equal bandwidth for all students. Activities are monitored for ethical academic research purposes under institutional guidelines.
              </p>

              <div className="space-y-4">
                {[
                  "Bulk downloads or streaming games is optimized to maintain load balancing.",
                  "TAT firewalls inspect data packets to block access to malicious pages.",
                  "Sharing login accounts is strictly restricted under NetOps rules."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 size={18} className="text-[#38BDF8] flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#38BDF8] text-black rounded-3xl p-10 space-y-6 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold">Contact NetOps Support</h3>
              <p className="text-xs leading-relaxed font-sans">
                Experiencing slow speeds in your hostel ward? Open an immediate ticket with our server administrators for signal adjustment.
              </p>
              
              <div className="pt-6 border-t border-sky-600 space-y-4 text-xs font-bold">
                <div className="flex justify-between">
                  <span>Support Email:</span>
                  <span>net-support@trident.ac.in</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotline extension:</span>
                  <span>+91-674-6649215 (NetOps)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
