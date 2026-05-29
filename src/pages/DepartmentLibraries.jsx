import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Book, 
  Search, 
  Globe, 
  Zap, 
  ArrowRight, 
  GraduationCap, 
  Library,
  Layers,
  Monitor,
  Cpu,
  Unplug,
  HardHat,
  Settings,
  Atom,
  TestTube2,
  Plus,
  Type
} from 'lucide-react';

const DepartmentLibraries = ({ onNavigate }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const departments = [
    { name: "Computer Science Engineering", icon: Monitor, color: "blue" },
    { name: "Electronics & Telecommunication", icon: Cpu, color: "indigo" },
    { name: "Electrical & Electronics Engineering", icon: Zap, color: "yellow" },
    { name: "Electrical Engineering", icon: Unplug, color: "orange" },
    { name: "Civil Engineering", icon: HardHat, color: "slate" },
    { name: "Mechanical Engineering", icon: Settings, color: "zinc" },
    { name: "Physics", icon: Atom, color: "cyan" },
    { name: "Chemistry", icon: TestTube2, color: "emerald" },
    { name: "Mathematics", icon: Plus, color: "violet" },
    { name: "English", icon: Type, color: "rose" }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-20 font-jakarta text-charcoal overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-navy-block overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-royal-blue blur-[120px]"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="lib-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#lib-grid)" />
          </svg>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.5, x: 0 }}
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={14} />
            <span className="text-white">Department Libraries</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Specialized <span className="text-royal-blue">Learning</span> Resources
            </h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Beyond our Central Library, we maintain 10 specialized departmental units, ensuring that students have immediate access to technical literature within their specific fields of study.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="w-12 h-1.5 bg-royal-blue mb-8 rounded-full"></div>
            <h2 className="text-4xl font-bold mb-8 text-navy-block leading-tight">
              A Hub for Research and <br />
              <span className="text-royal-blue">Academic Growth</span>
            </h2>
            <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
              <p>
                The TAT Library ecosystem consists of a sprawling Central Library and 10 Departmental libraries which collectively support the teaching, research, and extension programs of the Institute.
              </p>
              <p>
                These specialized hubs are designed to provide a more intimate and focused environment for deep study. Each unit is managed by subject experts to assist students in navigating advanced technical journals and research papers.
              </p>
            </div>
            <div className="mt-10 flex gap-10">
               <div>
                  <div className="text-4xl font-bold text-royal-blue mb-1">11</div>
                  <div className="text-sm font-semibold text-charcoal/40 uppercase tracking-widest leading-tight">Total Units<br />Institutional Wide</div>
               </div>
               <div className="w-px h-12 bg-charcoal/10"></div>
               <div>
                  <div className="text-4xl font-bold text-royal-blue mb-1">100%</div>
                  <div className="text-sm font-semibold text-charcoal/40 uppercase tracking-widest leading-tight">Student & Faculty<br />Entitlement</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1549675584-91f19337af3d?auto=format&fit=crop&q=80&w=1200" 
                alt="TAT Department Library Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-block/20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE HIGHLIGHTS */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Book, title: "Specialized Text", desc: "Curated collections of textbooks and reference manuals for specific engineering branches." },
              { icon: Layers, title: "Research Journals", desc: "Access to the latest publications from IEEE, Springer, and other leading tech publishers." },
              { icon: Globe, title: "E-Resources", desc: "Digital connectivity to global repositories and online database subscriptions." },
              { icon: Search, title: "OPAC Search", desc: "Digital cataloging for quick and efficient search across the entire institutional collection." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-block">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DEPARTMENTAL UNITS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-block mb-4">Our Departmental Libraries</h2>
            <p className="text-charcoal/50 text-lg">Specialized hubs at the heart of every academic division.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-6 p-6 bg-[#FAF9F6] border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-royal-blue/20 transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white shadow-sm text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-all`}>
                  <dept.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy-block group-hover:text-royal-blue transition-colors">{dept.name}</h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal/30 group-hover:text-royal-blue/50 transition-colors">
                    View Details <ArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-navy-block rounded-[50px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
           >
              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 italic">Enhancing Knowledge Ecosystems</h2>
                <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light">
                  All students and faculty members are entitled to make use of the library facilities on taking library membership.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-royal-blue text-white px-12 py-5 rounded-2xl font-bold hover:shadow-[0_20px_40px_-15px_rgba(37,51,134,0.3)] transition-all hover:-translate-y-1">
                    Apply for Membership
                  </button>
                  <button className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/5 transition-all">
                    Search Online Catalog
                  </button>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

    </div>
  );
};

export default DepartmentLibraries;
