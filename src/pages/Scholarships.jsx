import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle2, IndianRupee } from 'lucide-react';

const Scholarships = () => {
  const inHouseScholarships = [
    {
      title: "In-House Scholarships",
      description: "The college provides scholarships of various kinds every year to students such as highest attendance, batch toppers, best innovations, best entrepreneurs etc. The college gives Gold-medal to the college topper of Degree-completion under “Pranati Mishra memorial” every year.",
      icon: <Award className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "TFW (Total Fee Waiver)",
      description: "The College admits 5% of students through TFW schemes according to government guidelines.",
      icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />
    }
  ];

  const stateScholarships = [
    {
      title: "PRERANA STATE: ODISHA",
      description: "Provides financial assistance to students in Odisha to support their education. Aims to reduce dropout rates and encourage academic excellence.",
    },
    {
      title: "MEDHABRUTI",
      description: "Merit-based scholarship for high-performing students pursuing higher education. Rewards academic achievement and motivates continued excellence.",
    },
    {
      title: "PRERANA STATE: BIHAR",
      description: "Offers scholarships to students from Bihar to promote inclusive education. Supports economically weaker sections in continuing their studies.",
    },
    {
      title: "WELFARE FUND",
      description: "Provides financial support for students facing economic challenges. Ensures access to education and overall student welfare.",
    }
  ];

  const nationalScholarships = [
    {
      title: "CENTRAL SECTOR SCHOLARSHIP",
      description: "A government initiative to support meritorious students from low-income families. Helps cover higher education expenses and encourages academic achievement.",
    },
    {
      title: "EX-SERVICEMAN SCHOLARSHIP",
      description: "Provides financial assistance to children of ex-servicemen. Honors their service by supporting the education of their dependents.",
    },
    {
      title: "PRAGATI",
      description: "A scholarship scheme aimed at empowering girl students in technical education. Encourages female participation and reduces gender disparity in professional fields.",
    },
    {
      title: "SITARAM JINDAL SCHOLARSHIPS",
      description: "Offers financial aid to students across various levels of education. Focuses on supporting deserving students from economically weaker backgrounds.",
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF9F7' }} className="min-h-screen font-sans">
      {/* ── HERO (academics-tat style) ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[480px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
            alt="Scholarships"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,27,62,0.90) 0%, rgba(26,38,96,0.75) 55%, rgba(13,27,62,0.40) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <a href="/" className="hover:text-white transition-colors">Campus Life</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Scholarships</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Empowering Dreams
            <br />
            <span style={{ color: '#E5AA3E' }}>Through Financial Support.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl leading-relaxed font-medium"
            style={{ color: 'rgba(255,255,255,0.80)', fontSize: '18px' }}
          >
            Trident Academy is committed to ensuring that deserving students receive financial assistance to pursue quality education.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 relative z-20" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Statement */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="rounded-3xl p-8 md:p-12 text-center mb-20 max-w-4xl mx-auto transform -translate-y-12"
            style={{ backgroundColor: '#ffffff', border: '1px solid #ede8e3', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}
          >
            <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ color: '#3e3a36' }}>
              The institution provides Scholarships from its own fund/corpus and supports scholarships on various heads from various available State and National schemes and the financial aid are disbursed in time.
            </p>
          </motion.div>

          {/* In-House Scholarships */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8ecf8', color: '#2c3a8c' }}>
                <IndianRupee className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e', fontFamily: '"Source Serif 4", Georgia, serif' }}>In-House Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {inHouseScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-8 transition-all duration-300 group hover:shadow-lg"
                style={{ backgroundColor: '#ffffff', border: '1px solid #ede8e3' }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#e8ecf8', color: '#2c3a8c' }}>
                    {item.icon}
                  </div>
                  <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: '#2c3a8c' }} />
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#6b6460' }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* State Level Scholarships */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e0f4ec', color: '#1a6b4a' }}>
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e', fontFamily: '"Source Serif 4", Georgia, serif' }}>State Level Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stateScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-6 transition-all hover:shadow-md"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #ede8e3' }}
                >
                  <div className="w-6 h-[3px] rounded-full mb-4" style={{ backgroundColor: '#1a6b4a' }} />
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b6460' }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* National Level Scholarships */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8ecf8', color: '#2c3a8c' }}>
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1a1a2e', fontFamily: '"Source Serif 4", Georgia, serif' }}>National Level Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {nationalScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #ede8e3', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                >
                  <div className="flex-shrink-0 w-1.5 rounded-full" style={{ backgroundColor: '#2c3a8c', minHeight: '100%' }} />
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                    <p className="leading-relaxed" style={{ color: '#6b6460' }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
