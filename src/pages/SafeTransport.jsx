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
      <div className="bg-[#0B0F19] text-slate-100 min-h-screen font-sans overflow-x-hidden selection:bg-[#F59E0B] selection:text-black">
        
        {/* ── Fleet Floating Header ── */}
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-5xl">
          <div className="backdrop-blur-md bg-slate-900/90 text-slate-100 border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <span className="font-bold tracking-wider text-[#F59E0B] flex items-center gap-2">
              <Bus size={18} className="text-[#F59E0B] animate-pulse" /> Fleet Transit
            </span>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#routes" className="hover:text-[#F59E0B] transition-colors">Transit Routes</a>
              <a href="#safety" className="hover:text-[#F59E0B] transition-colors">Safety Standards</a>
              <a href="#feedback" className="px-4 py-2 bg-[#F59E0B] hover:bg-amber-600 text-slate-900 rounded-full transition-all">Submit Feedback</a>
            </div>
          </div>
        </div>

        {/* ── HERO BANNER with Bus Line animations ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
          {/* Moving routes/vectors background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M0,100 L400,100 L600,400 L1000,400" fill="none" stroke="#6366F1" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M0,500 L500,500 L700,200 L1000,200" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] mb-6 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 animate-bounce" />
              <span>Safety Rating: Class-A Fleet</span>
            </div>

            <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
              Smart Transit & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-indigo-400 to-[#F59E0B]">
                Safe Transport.
              </span>
            </h1>

            <p className="text-sm md:text-base max-w-2xl mb-12 text-slate-400 leading-relaxed font-light">
              Connecting Bhubaneswar and Cuttack seamlessly to TAT campus. We operate a fleet of 15+ multi-stop passenger buses, managed by GPS trackers and emergency response coordinators.
            </p>

            <a href="#routes" className="px-8 py-4 bg-[#F59E0B] hover:bg-amber-600 text-slate-900 font-bold text-xs uppercase tracking-widest transition-all rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              View Route Timing
            </a>
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
