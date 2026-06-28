import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Cpu, Cpu as Microchip, Database, Settings, RefreshCw, 
  CheckCircle, Play, Info, ArrowRight, Zap, HelpCircle
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function ModernLabs() {
  const [selectedLab, setSelectedLab] = useState('ai_ml');
  const [booting, setBooting] = useState(false);
  const [bootLog, setBootLog] = useState([]);

  const labs = {
    ai_ml: {
      name: "AI & Machine Learning Lab",
      hardware: "NVIDIA RTX A6000 GPU Clusters (4 nodes), Xeon 32-core servers",
      software: "TensorFlow 2.15, PyTorch 2.2, JupyterHub, CUDA 12.1",
      projects: "Autonomous Crop Health diagnostics, Smart Traffic telemetry",
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20"
    },
    robotics: {
      name: "Robotics & IoT Laboratory",
      hardware: "UR5 Robotic arms, ROS nodes, STM32 kits, Raspberry Pi 5 complexes",
      software: "ROS2 Humble, Keil uVision, Python IoT suite, Arduino IDE",
      projects: "All-terrain surveillance rover, Smart warehouse load arm",
      color: "border-purple-500/30 text-purple-400 bg-purple-950/20"
    },
    electronics: {
      name: "VLSI & Signals Laboratory",
      hardware: "FPGA Spartan-7 boards, Rigol 100MHz digital storage oscilloscopes",
      software: "Xilinx Vivado suite, LTSpice, MATLAB R22b Signal Processing",
      projects: "Low power ECG telemetry node, FPGA hardware cryptography core",
      color: "border-pink-500/30 text-pink-400 bg-pink-950/20"
    }
  };

  const executeDiagnostics = () => {
    setBooting(true);
    setBootLog(["[INIT] Booting laboratory network connection...", "[CONNECT] Server linked at 10.120.44.15", "[SCAN] Querying local hardware nodes..."]);
    
    setTimeout(() => {
      setBootLog(prev => [...prev, `[OK] ${labs[selectedLab].name} system parameters normal.`, "[SUCCESS] Diagnostic scan completed successfully."]);
      setBooting(false);
    }, 1500);
  };

  return (
    <SmoothScrollProvider>
      <div className="bg-[#F8FAFD] text-slate-800 min-h-screen font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1600"
              alt="Modern Labs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.93) 0%, rgba(2,6,23,0.80) 55%, rgba(2,6,23,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Modern Labs</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Research & Technology Infrastructure
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Modern Labs &<br />
              <span style={{ color: '#E5AA3E' }}>Workspaces.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Powering student prototyping, machine learning, and robotics coding with industrial-grade instrumentation and compute clusters built to push academic limits.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '3', lbl: 'Specialized Labs' }, { val: 'RTX A6000', lbl: 'GPU Clusters' }, { val: 'ROS2', lbl: 'Robotics Stack' }, { val: 'FPGA', lbl: 'VLSI Equipment' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── INTERACTIVE WORKBENCH DIAGNOSTICS ── */}
        <section id="workbench" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Digital Workbench</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 uppercase">Laboratory Node Inventory</h2>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            {/* Lab Select Panel */}
            <div className="bg-slate-950/60 border border-cyan-500/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center gap-2"><Settings size={18} /> Select Lab Interface</h3>
              <div className="flex flex-col gap-3">
                {Object.keys(labs).map((key) => (
                  <button
                    key={key}
                    onClick={() => { setSelectedLab(key); setBootLog([]); }}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      selectedLab === key 
                        ? 'border-cyan-400 bg-cyan-950/20 text-cyan-400' 
                        : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{labs[key].name}</div>
                    <div className="text-[10px] text-slate-500">Run Diagnostics System</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Diagnostic Boot terminal */}
            <div id="diagnostics" className="bg-black border border-cyan-500/20 rounded-3xl p-8 shadow-2xl min-h-[350px] flex flex-col">
              <div className="flex justify-between items-center pb-4 border-b border-slate-900 mb-6">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2"><Terminal size={14} /> Diagnostic Terminal</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>

              {/* Terminal Logs */}
              <div className="flex-1 space-y-2 text-xs text-slate-300 font-mono mb-8 min-h-[160px]">
                <div>Selected: {labs[selectedLab].name}</div>
                {bootLog.map((log, idx) => (
                  <div key={idx} className={log.includes('SUCCESS') ? 'text-emerald-400 font-bold' : log.includes('OK') ? 'text-cyan-400' : ''}>{log}</div>
                ))}
              </div>

              <button
                disabled={booting}
                onClick={executeDiagnostics}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-800 disabled:text-slate-600 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={14} className={booting ? 'animate-spin' : ''} /> {booting ? 'Running Diagnostics...' : 'Boot Laboratory Diagnostics'}
              </button>
            </div>
          </div>
        </section>


        {/* ── CORE LAB SPECIFICATIONS ── */}
        <section id="facilities" className="py-32 bg-slate-950/40 border-y border-cyan-500/10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Hardware Specifications</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 uppercase">Laboratory Infrastructure</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.keys(labs).map((key, idx) => {
                const lab = labs[key];
                return (
                  <div key={idx} className="p-8 bg-slate-900/30 border border-slate-850 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                    <h3 className="text-xl font-bold mb-6 text-cyan-400">{lab.name}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Core Computing/Hardware</span>
                        <p className="text-xs leading-relaxed text-slate-300 mt-1 font-sans">{lab.hardware}</p>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Compilers & Toolchains</span>
                        <p className="text-xs leading-relaxed text-slate-300 mt-1 font-sans">{lab.software}</p>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-500">Active Research</span>
                        <p className="text-xs leading-relaxed text-slate-300 mt-1 font-sans">{lab.projects}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ── INDUSTRY COLLABORATION ── */}
        <section className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Institutional Partnerships</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 uppercase">Corporate R&D Nodes</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-sans">
                Trident partners with global tech leaders to align laboratory facilities with industrial guidelines. Our computers and software suites match active developer workspaces in top-tier organizations.
              </p>

              <div className="space-y-4">
                {[
                  "CISCO networking clusters and telemetry software testing nodes.",
                  "Oracle certified database design and cloud query modules.",
                  "Intel FPGA development boards and chip validation suites."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/20 to-slate-900/30 border border-cyan-500/20 rounded-3xl p-10 space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-cyan-400 uppercase">Interactive Equipment Showcase</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Explore specialized utility tools like CNC controllers, logic analyzers, and 3D printing filaments inside our core prototyping complexes.
              </p>
              
              <div className="pt-6 border-t border-slate-900 space-y-4">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Lab Office Contact:</span>
                  <span className="font-bold text-slate-200">lab-support@trident.ac.in</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Consulting Hours:</span>
                  <span className="font-bold text-slate-200">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
