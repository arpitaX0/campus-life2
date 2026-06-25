import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Server, Database
} from 'lucide-react';

export default function IncubationCell() {

  const support = [
    { title: "Co-Working Infrastructure", desc: "Access to high-speed fiber internet, private cabins, meeting desks, and 24/7 power backup.", icon: Server },
    { title: "Business Mentorship", desc: "One-on-one sessions with industry veterans on scalability, marketing, and legal parameters.", icon: Briefcase },
    { title: "Investor Networking", desc: "Direct pitches to institutional angels, venture capitalists, and seed fund agencies.", icon: Database }
  ];

  const startups = [
    { name: "Vanguard Tech Labs", sector: "Cybersecurity", year: "Incubated 2024", capital: "Seed Funded" },
    { name: "GreenDrive Solutions", sector: "EV Telemetry", year: "Incubated 2024", capital: "Angel Funded" },
    { name: "MedAssist AI", sector: "Healthcare AI", year: "Incubated 2025", capital: "Grant Funded" }
  ];

  return (
    <div className="bg-[#080d1a] min-h-screen text-slate-100 font-sans overflow-x-hidden">
      
      <section className="relative pt-36 pb-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-[#080d1a] to-[#080d1a] border-b border-blue-900/20 overflow-hidden">
        {/* Abstract Gold and Purple lines background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500 blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[30%] w-[400px] h-[400px] rounded-full bg-purple-500 blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-display text-white">
              Incubation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400">
                Cell.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-4 leading-relaxed font-light">
              Transforming innovative ideas into viable commercial enterprises. Providing workspaces, seed funding, legal backing, and venture mentorship.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ── SUPPORT GRIDS ── */}
      <section id="support" className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Startup Acceleration</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-white">
            Ecosystem Support
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {support.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-slate-850 p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── INCUBATED STARTUPS TABLE ── */}
      <section className="py-24 bg-[#040811] border-t border-slate-900">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Active Ventures</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-white">
              Incubated Startups
            </h2>
          </div>

          <div className="bg-slate-900/30 border border-slate-850 rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="p-6">Company Name</th>
                  <th className="p-6">Sector</th>
                  <th className="p-6">Year</th>
                  <th className="p-6 text-right">Capital Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850 text-slate-300">
                {startups.map((st, i) => (
                  <tr key={i} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-6 font-bold text-white">{st.name}</td>
                    <td className="p-6">{st.sector}</td>
                    <td className="p-6">{st.year}</td>
                    <td className="p-6 text-right font-mono text-blue-400">{st.capital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      

      {/* ── UNIFIED NAVIGATION SWITCHER ── */}

    </div>
  );
}
