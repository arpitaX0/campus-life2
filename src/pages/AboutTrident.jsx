import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Shield, 
  ArrowRight, 
  GraduationCap, 
  Microscope,
  BookOpen,
  Image as ImageIcon,
  Library
} from 'lucide-react';

const AboutTrident = ({ onNavigate }) => {
  // Animation variants
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

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-20 font-jakarta text-charcoal overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-navy-block overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-royal-blue blur-[120px]"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          {/* Breadcrumb */}
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 0.5, x: 0 }}
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={14} />
            <span className="text-white">About Trident</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              About <span className="text-royal-blue">Trident</span> Academy of Technology
            </h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Designing a future where technology serves humanity. We are an institution dedicated to academic rigors, innovation, and global leadership.
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
              Advancing Knowledge, <br />
              <span className="text-royal-blue">Empowering Futures</span>
            </h2>
            <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
              <p>
                Trident Academy of Technology (TAT) stands as a beacon of academic excellence in Eastern India. Established with a vision to nurture technical talent, we have consistently ranked among the top engineering institutions.
              </p>
              <p>
                Our campus is more than just infrastructure; it's an ecosystem designed for breakthrough discoveries. We believe in providing our students with a balance of theoretical foundations and practical industry-ready skills.
              </p>
            </div>
            <div className="mt-10 flex gap-6">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-royal-blue">20+</span>
                  <span className="text-sm font-semibold text-charcoal/40 uppercase tracking-widest">Years of Legacy</span>
               </div>
               <div className="w-px h-12 bg-charcoal/10"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-royal-blue">A++</span>
                  <span className="text-sm font-semibold text-charcoal/40 uppercase tracking-widest">NAAC Accredited</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=1200" 
                alt="TAT Campus Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-block/10"></div>
            </div>
            {/* Soft decorative badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-50">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue">
                     <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-navy-block">Excellence Award</div>
                    <div className="text-sm text-charcoal/50">Top Technical Institution 2025</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY HIGHLIGHTS SECTION */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-block mb-4">Core Pillars of Excellence</h2>
            <p className="text-charcoal/50 text-lg">Foundation of our academic and institutional success.</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: GraduationCap, title: "Academic Rigor", desc: "Curriculum aligned with industry standards and future technological trends." },
              { icon: Microscope, title: "Research Hub", desc: "Dedicated labs for AI, Robotics, and Advanced Materials Science." },
              { icon: Zap, title: "Innovation Cell", desc: "Fostering entrepreneurship and creative problem-solving since inception." },
              { icon: Users, title: "Expert Faculty", desc: "Mentorship from distinguished scholars and industry veterans." },
              { icon: Globe, title: "Global Exposure", desc: "International collaborations and exchange programs for global readiness." },
              { icon: Shield, title: "Student Success", desc: "Comprehensive placement support and holistic personality development." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-royal-blue/5 rounded-2xl flex items-center justify-center text-royal-blue mb-8 group-hover:bg-royal-blue group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-block">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed mb-8">
                  {item.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-royal-blue hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DETAILED CONTENT SECTION (VISION/MISSION) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 px-10 py-16 bg-navy-block rounded-[40px] text-white">
              <h2 className="text-4xl font-bold mb-12">Institutional Philosophy</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Target size={24} className="text-royal-blue" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                     <p className="text-white/60 leading-relaxed">To be a globally recognized center of excellence in technical education and research, producing socially responsible leaders.</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Lightbulb size={24} className="text-royal-blue" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                     <p className="text-white/60 leading-relaxed">Providing high-quality engineering education through innovative teaching methods and industry-aligned training programs.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8 text-navy-block">Detailed Academic Framework</h3>
              <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed mb-10">
                <p>
                  Tracing the trajectory of Trident Academy of Technology reveals a path paved with relentless pursuit of excellence. Our curriculum is dynamic, designed to evolve alongside the rapid shifts in global technology landscapes.
                </p>
                <ul className="space-y-4">
                   {[
                     "Outcome-Based Education (OBE) model",
                     "Strategic industry partnerships for internships",
                     "Focus on lifelong learning and research mindset",
                     "Interdisciplinary labs and creative spaces"
                   ].map((point, i) => (
                     <li key={i} className="flex items-center gap-4 font-semibold text-charcoal">
                        <div className="w-2 h-2 rounded-full bg-royal-blue"></div>
                        {point}
                     </li>
                   ))}
                </ul>
              </div>
              <button className="bg-royal-blue text-white px-10 py-5 rounded-2xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl self-start">
                Download Academic Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATISTICS / ACHIEVEMENTS SECTION */}
      <section className="py-24 bg-navy-block">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Active Students", value: "12k+", icon: Users },
              { label: "Elite Faculty", value: "250+", icon: Award },
              { label: "Specialized Labs", value: "45+", icon: Microscope },
              { label: "Placement Rate", value: "95%", icon: Zap }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <stat.icon className="mx-auto text-royal-blue mb-6 group-hover:scale-110 transition-transform" size={40} />
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/40 font-semibold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY / VISUAL SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-bold text-navy-block">Campus Showcase</h2>
                <p className="text-charcoal/50 text-lg mt-2">Glimpses into life at Trident Academy.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-royal-blue font-bold uppercase tracking-widest text-sm border-b-2 border-royal-blue pb-1 hover:gap-4 transition-all">
                Full Gallery <ChevronRight size={18} />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-[40px] h-[600px] shadow-xl">
                 <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Main Building" />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy-block/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                    <h4 className="text-white text-2xl font-bold">The Administrative Block</h4>
                    <p className="text-white/60">A symbol of institutional leadership.</p>
                 </div>
              </div>
              <div className="relative group overflow-hidden rounded-[40px] h-[288px] shadow-xl">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Robotics Lab" />
                 <div className="absolute inset-0 bg-navy-block/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group overflow-hidden rounded-[40px] h-[288px] shadow-xl">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Digital Library" />
                 <div className="absolute inset-0 bg-navy-block/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-royal-blue rounded-[50px] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
           >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-block/20 rounded-full blur-3xl -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-8">Begin Your Journey Today</h2>
                <p className="text-white/70 text-xl max-w-2xl mx-auto mb-12 font-light">
                  Admissions are currently open for the 2026 academic season. Join a community of forward-thinkers and builders.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-royal-blue px-12 py-5 rounded-2xl font-bold hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1">
                    Apply Now
                  </button>
                  <button className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white/5 transition-all">
                    Inquire Online
                  </button>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 8. RELATED PAGES / NAVIGATION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                 <h4 className="text-2xl font-bold text-navy-block mb-2">Explore Further</h4>
                 <p className="text-charcoal/40 uppercase tracking-[0.2em] text-xs font-bold">Continue exploring the Trident ecosystem</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                 {[
                   { label: "Departments", onClick: () => onNavigate('libraries') },
                   { label: "Research Centers", href: "#" },
                   { label: "Campus Life", href: "#" },
                   { label: "Placements", href: "#" }
                 ].map((link, i) => (
                   <a 
                     key={i} 
                     href={link.href || "#"}
                     onClick={(e) => {
                       if (link.onClick) {
                         e.preventDefault();
                         link.onClick();
                       }
                     }}
                     className="px-8 py-4 bg-slate-50 text-navy-block rounded-2xl font-bold border border-slate-100 hover:border-royal-blue hover:text-royal-blue transition-all cursor-pointer"
                   >
                     {link.label}
                   </a>
                 ))}
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutTrident;
