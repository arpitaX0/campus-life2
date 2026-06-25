import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Hammer, Briefcase, Handshake, CheckCircle2, Compass 
} from 'lucide-react';

export default function IEDC() {

  const programs = [
    { title: "Ideation Bootcamps", desc: "Structured brainstorming events to refine raw technical plans into solid business models.", icon: Lightbulb },
    { title: "Prototyping Grants", desc: "Seed funding of up to ₹2 Lakhs to build Minimum Viable Products (MVPs).", icon: Hammer },
    { title: "IPR & Legal Guidance", desc: "Direct legal consultation sessions for patents, trademarks, and company formation.", icon: Briefcase }
  ];

  const startups = [
    { name: "AgroSens Tech", founder: "CSE Alumni Team", status: "Seed Funded", desc: "Automated crop moisture scanner helping local farmers improve yield." },
    { name: "EdVantage AI", founder: "Third Year CSE", status: "Prototype Stage", desc: "An offline NLP diagnostics system mapping student skills to study modules." },
    { name: "EcoGrid Solutions", founder: "ETC Student Team", status: "Bootstrapped", desc: "Smart electricity telemetry nodes reducing household power leakage." }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#3E3A36] font-sans overflow-x-hidden">
      
      {/* ── HERO ECOSYSTEM ── */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-[#1a1230] via-[#2A1D4E] to-[#120B24] text-white overflow-hidden">
        {/* Abstract background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.15),transparent_40%)]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-display text-white">
              IEDC <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#e9bd63]">Ecosystem.</span>
            </h1>
            
            <p className="text-slate-300/80 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed font-light">
              Supported by DST, Govt. of India. The Innovation & Entrepreneurship Development Cell (IEDC) accelerates student ideas into scaled commercial startups.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ── PROGRAMS & OPPORTUNITIES ── */}
      <section id="programs" className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest">Growth Support</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-[#2A1D4E]">
            IEDC Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 p-8 rounded-3xl hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2A1D4E]">{prog.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{prog.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── STARTUPS SHOWCASE ── */}
      <section className="py-24 bg-gradient-to-br from-[#FAF9F6] to-slate-100 border-t border-slate-200/60">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest">Student Innovation</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#2A1D4E] mt-1">
                Student Startups
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm leading-relaxed">
              Real commercial ventures conceptualized and launched by Trident students during their course of study.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {startups.map((startup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 px-3 py-1 rounded">
                    {startup.status}
                  </span>
                  <span className="text-[10px] text-slate-400">{startup.founder}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2A1D4E]">{startup.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{startup.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTOR NETWORK & COLLABORATION ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest">Global Networking</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2A1D4E] tracking-tight mt-2 mb-6">
              Mentorship & Funding Network
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              We connect student ideators with venture capitalists, patent attorneys, and experienced domain coaches. IEDC coordinates direct handholding to apply for national funding bodies and seed incubation support.
            </p>

            <div className="space-y-4">
              {[
                "Regular interactions with corporate startup mentors",
                "Facilitated access to government angel funding boards",
                "Assistance in pitching at regional seed round events"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#8b5cf6] flex-shrink-0" />
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-6 items-start shadow-sm">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <Compass size={22} />
              </div>
              <div>
                <h4 className="font-bold text-[#2A1D4E] mb-2">Government Recognized</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Trident IEDC is fully backed by the Department of Science and Technology (DST), Govt. of India, securing constant resources.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-6 items-start shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                <Handshake size={22} />
              </div>
              <div>
                <h4 className="font-bold text-[#2A1D4E] mb-2">Corporate Partnerships</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Direct networking tie-ups with localized industry hubs and incubator facilities across the country.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>



    </div>
  );
}
