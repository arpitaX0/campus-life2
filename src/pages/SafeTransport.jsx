import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bus, ShieldCheck, MapPin, Phone, HelpCircle, ArrowRight, CheckCircle2, 
  Map, Users, HeartHandshake, AlertCircle
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function SafeTransport() {
  const [selectedRoute, setSelectedRoute] = useState('route1');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const routeDetails = {
    route1: {
      name: "Route 1: Cuttack Link Road Line",
      busNo: "OD-33-A-4560 (Varsity-1)",
      driver: "Mr. Ramesh Samal",
      phone: "+91-94372 88450",
      stops: [
        { time: "07:30 AM", place: "Cuttack Link Road (Start)" },
        { time: "07:45 AM", place: "Phulnakhara Crossing" },
        { time: "08:05 AM", place: "Rasulgarh Square" },
        { time: "08:15 AM", place: "Vani Vihar Chowk" },
        { time: "08:35 AM", place: "Trident Campus (End)" }
      ]
    },
    route2: {
      name: "Route 2: Khandagiri & Airport Line",
      busNo: "OD-33-B-1288 (Varsity-2)",
      driver: "Mr. Dilip Jena",
      phone: "+91-99375 23412",
      stops: [
        { time: "07:40 AM", place: "Khandagiri Square (Start)" },
        { time: "07:50 AM", place: "Airport Crossing" },
        { time: "08:00 AM", place: "Capital Hospital Chowk" },
        { time: "08:10 AM", place: "Acharya Vihar" },
        { time: "08:30 AM", place: "Trident Campus (End)" }
      ]
    },
    route3: {
      name: "Route 3: Patia & KIIT Square Line",
      busNo: "OD-33-A-7704 (Varsity-3)",
      driver: "Mr. Sarat Das",
      phone: "+91-94380 99423",
      stops: [
        { time: "08:00 AM", place: "KIIT Square (Start)" },
        { time: "08:10 AM", place: "Patia Chowk" },
        { time: "08:15 AM", place: "Damana Crossing" },
        { time: "08:25 AM", place: "Trident Campus (End)" }
      ]
    }
  };

  const safetyFeatures = [
    { title: "Live GPS Tracking", desc: "All campus buses are integrated with real-time telematics. Location coordinates sync directly with the student dashboard.", icon: Map },
    { title: "Certified Drivers Only", desc: "All fleet operations are managed by drivers with at least 10 years of heavy transport expertise and strict vetting.", icon: Users },
    { title: "First Aid & Emergency", desc: "Equipped with safety boxes, emergency glass break hammers, fire extinguishers, and speed regulators.", icon: HeartHandshake }
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FAF9F7] text-[#3E3A36] min-h-screen font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1600"
              alt="Safe Transport"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,15,25,0.93) 0%, rgba(11,15,25,0.80) 55%, rgba(11,15,25,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Safe Transport</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Fleet Transit & Safety
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Smart Transit &<br />
              <span style={{ color: '#E5AA3E' }}>Safe Transport.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Connecting Bhubaneswar and Cuttack seamlessly to TAT campus — a fleet of 15+ GPS-tracked buses managed by certified drivers and emergency coordinators.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '15+', lbl: 'Buses in Fleet' }, { val: '3', lbl: 'Major Routes' }, { val: 'GPS', lbl: 'Live Tracking' }, { val: 'Class-A', lbl: 'Safety Rating' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── ROUTE DETAIL VIEWER (INTERACTIVE TABS) ── */}
        <section id="routes" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest">Bus Schedule</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Transit Routes & Stops</h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
            {/* Route Selector Dropdowns */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-[#F59E0B] flex items-center gap-2"><MapPin size={18} /> Select Route Line</h3>
              <div className="flex flex-col gap-3">
                {Object.keys(routeDetails).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRoute(key)}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      selectedRoute === key 
                        ? 'border-[#F59E0B] bg-[#F59E0B]/5 text-[#F59E0B]' 
                        : 'border-slate-800 bg-slate-900/20 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{routeDetails[key].name}</div>
                    <div className="text-[10px] text-slate-500">Bus: {routeDetails[key].busNo}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Route Timeline stops */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl min-h-[350px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedRoute}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded">Transit Times</span>
                    <span className="text-xs text-slate-500">Driver: {routeDetails[selectedRoute].driver}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-200">{routeDetails[selectedRoute].name}</h3>

                  <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
                    {routeDetails[selectedRoute].stops.map((stop, idx) => (
                      <div key={idx} className="relative">
                        {/* Dot indicator */}
                        <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#F59E0B] border-2 border-slate-950" />
                        <div className="flex justify-between text-xs">
                          <span className="font-bold text-slate-300">{stop.place}</span>
                          <span className="text-slate-500 font-bold">{stop.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-900 flex justify-between items-center text-xs text-slate-400">
                    <span>Contact Driver:</span>
                    <span className="font-bold text-slate-200 flex items-center gap-1"><Phone size={12} /> {routeDetails[selectedRoute].phone}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>


        {/* ── FLEET SAFETY STANDARDS ── */}
        <section id="safety" className="py-32 bg-slate-950/40 border-y border-slate-900">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest">Zero Incidents</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Transit Safety Systems</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {safetyFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl relative">
                    <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center text-[#F59E0B] mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{feat.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── EMERGENCY CONTACTS & FEEDBACK ── */}
        <section id="feedback" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest">Fleet Feedback</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Transit Grievance</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                Found a driver exceeding speed limits or want to suggest a new pickup route? Send details to the Transit Superintendent office immediately.
              </p>

              <div className="space-y-4">
                {[
                  "Speed limit restrictors set at maximum 50 km/h.",
                  "Daily safety audits on tire, brake, and telemetry health.",
                  "Direct help hotline extension connected to the control room."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 size={18} className="text-[#F59E0B] flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 space-y-6">
              {feedbackSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="text-emerald-500 mx-auto" size={48} />
                  <h3 className="font-serif text-xl font-bold">Feedback Sent</h3>
                  <p className="text-xs text-slate-400">Our Transit Superintendent will audit the bus driver within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#F59E0B] flex items-center gap-2"><AlertCircle size={22} /> Report Transit Concern</h3>
                  <div className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs focus:ring-1 focus:ring-[#F59E0B] focus:outline-none" />
                    <input type="text" placeholder="Bus Number / Route" className="w-full p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs focus:ring-1 focus:ring-[#F59E0B] focus:outline-none" />
                    <textarea placeholder="Describe issue here..." className="w-full h-24 p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs focus:ring-1 focus:ring-[#F59E0B] focus:outline-none" />
                    <button 
                      onClick={() => setFeedbackSubmitted(true)}
                      className="px-6 py-3 bg-[#F59E0B] hover:bg-amber-600 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-xl transition-colors"
                    >
                      Submit Grievance
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
