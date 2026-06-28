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
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#f5eeec', color: '#3e3a36' }}>
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
        {/* Background image + dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600"
            alt="Incubation Cell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,16,6,0.92) 0%, rgba(60,38,12,0.78) 50%, rgba(13,27,62,0.40) 100%)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <a href="/" className="hover:text-white transition-colors">Campus Life</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Incubation Cell</span>
          </nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Incubation
            <br />
            <span style={{ color: '#E5AA3E' }}>Cell.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl leading-relaxed font-medium mb-12"
            style={{ color: 'rgba(255,255,255,0.80)', fontSize: '18px' }}
          >
            Transforming innovative ideas into viable commercial enterprises. Providing workspaces, seed funding, legal backing, and venture mentorship.
          </motion.p>


        </div>
      </section>


      {/* ── SUPPORT GRIDS ── */}
      <section id="support" className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#a07828' }}>Startup Acceleration</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2" style={{ color: '#3e3a36' }}>
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
                className="p-8 rounded-3xl"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9', boxShadow: '0 2px 12px rgba(62,58,54,0.05)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(44,58,140,0.08)', color: '#2c3a8c' }}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#3e3a36' }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6b6460' }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── INCUBATED STARTUPS TABLE ── */}
      <section className="py-24" style={{ backgroundColor: '#eae0d5', borderTop: '1px solid #d6cfc9' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2c3a8c' }}>Active Ventures</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2" style={{ color: '#3e3a36' }}>
              Incubated Startups
            </h2>
          </div>

          <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9', boxShadow: '0 4px 24px rgba(62,58,54,0.07)' }}>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-xs font-bold uppercase tracking-wider" style={{ borderBottom: '1px solid #e8e2d9', backgroundColor: '#faf6f3', color: '#9c9390' }}>
                  <th className="p-6">Company Name</th>
                  <th className="p-6">Sector</th>
                  <th className="p-6">Year</th>
                  <th className="p-6 text-right">Capital Status</th>
                </tr>
              </thead>
              <tbody style={{ color: '#6b6460' }}>
                {startups.map((st, i) => (
                  <tr key={i} className="transition-colors" style={{ borderTop: '1px solid #f0ece8' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#faf6f3'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td className="p-6 font-bold" style={{ color: '#3e3a36' }}>{st.name}</td>
                    <td className="p-6">{st.sector}</td>
                    <td className="p-6">{st.year}</td>
                    <td className="p-6 text-right font-mono font-bold" style={{ color: '#2c3a8c' }}>{st.capital}</td>
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
