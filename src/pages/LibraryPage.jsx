import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Clock, Users, Wifi, Monitor, BookMarked, Search, Globe, Bookmark } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const FACILITIES = [
  { icon: BookMarked, title: "Vast Collection", desc: "Over 50,000+ books, journals, and periodicals across engineering and science disciplines.", stat: "50,000+" },
  { icon: Monitor, title: "Digital Library", desc: "Access to e-journals, e-books, and online databases including IEEE, Springer, and Elsevier.", stat: "10,000+" },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "High-speed internet connectivity throughout the library for seamless digital access.", stat: "24/7" },
  { icon: Users, title: "Reading Hall", desc: "Spacious air-conditioned reading hall with seating capacity for 300+ students simultaneously.", stat: "300+" },
  { icon: Globe, title: "DELNET Member", desc: "Member of Developing Library Network for inter-library loan and resource sharing.", stat: "Active" },
  { icon: Search, title: "OPAC System", desc: "Online Public Access Catalogue for easy search and discovery of library resources.", stat: "Digital" },
];

const TIMINGS = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Exam Period", time: "7:00 AM – 10:00 PM" },
  { day: "Sunday / Holidays", time: "Closed" },
];

const E_RESOURCES = [
  "IEEE Xplore Digital Library", "Springer Nature Journals", "Elsevier ScienceDirect", "NPTEL Video Lectures",
  "National Digital Library (NDL)", "DELNET Resources", "Shodhganga (PhD Theses)", "J-Gate Plus",
];

export default function LibraryPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507842217343-581384b0818b?q=80&w=2000&auto=format&fit=crop" alt="Library" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(4,47,46,0.93) 0%, rgba(19,78,74,0.80) 55%, rgba(4,47,46,0.40) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <Link to="/" className="hover:text-white transition-colors">Campus Life</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Library</span>
          </nav>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
          >
            Knowledge Hub
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Central<br />
            <span style={{ color: '#E5AA3E' }}>Library.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl leading-relaxed font-medium mb-10"
            style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
          >
            A modern knowledge ecosystem empowering academic excellence with vast physical and digital collections — open to all students and faculty.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            {[{ val: '50K+', lbl: 'Books' }, { val: '10K+', lbl: 'E-Resources' }, { val: '300+', lbl: 'Seats' }, { val: 'DELNET', lbl: 'Member' }].map((s, i) => (
              <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="text-[22px] font-black text-white">{s.val}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-4">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-[#78716C] uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-[#134E4A] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#134E4A] font-bold">Library</span>
        </nav>

        {/* Facilities */}
        <FadeInUp>
          <h2 className="font-serif text-[32px] font-bold text-[#134E4A] mb-2">Facilities & Resources</h2>
          <p className="text-gray-500 text-[15px] mb-10 max-w-2xl">Our state-of-the-art library provides everything students need for academic research and learning.</p>
        </FadeInUp>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FACILITIES.map((f, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0F766E]/20 transition-all duration-300">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F766E]/10 flex items-center justify-center group-hover:bg-[#0F766E] transition-colors">
                  <f.icon size={22} className="text-[#0F766E] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[#0D9488] text-[13px] font-black bg-[#0D9488]/8 px-3 py-1 rounded-full">{f.stat}</span>
              </div>
              <h3 className="font-sans text-[20px] font-bold text-[#134E4A] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <FadeInUp>
            <div className="py-12 border-b border-gray-100 last:border-0 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 flex items-center justify-center">
                  <Clock size={20} className="text-[#0F766E]" />
                </div>
                <h3 className="font-serif text-[24px] font-bold text-[#134E4A]">Library Timings</h3>
              </div>
              <div className="space-y-4">
                {TIMINGS.map((t,i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-dashed border-gray-100 last:border-0">
                    <span className="text-[15px] font-medium text-gray-700">{t.day}</span>
                    <span className="text-[14px] font-bold text-[#0F766E] bg-[#0F766E]/5 px-4 py-1.5 rounded-full">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={150}>
            <div className="py-12 px-6 lg:px-12 bg-[#134E4A] rounded-3xl shadow-xl h-full text-white">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Globe size={20} className="text-[#5EEAD4]" />
                </div>
                <h3 className="font-serif text-[24px] font-bold">E-Resources</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {E_RESOURCES.map((r,i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Bookmark size={14} className="text-[#5EEAD4] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-white/80">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
