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
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Students celebrating graduation" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-indigo-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-display">
              Empowering Dreams Through <span className="text-indigo-300">Financial Support</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              "Trident Academy of Technology is committed to ensuring that deserving students receive financial assistance to pursue quality education."
            </motion.p>
            
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Statement */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 text-center mb-20 max-w-4xl mx-auto transform -translate-y-12"
          >
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              The institution provides Scholarships from its own fund/corpus and supports scholarships on various heads from various available State and National schemes and the financial aid are disbursed in time.
            </p>
          </motion.div>

          {/* In-House Scholarships */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <IndianRupee className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">In-House Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {inHouseScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* State Level Scholarships */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">State Level Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stateScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* National Level Scholarships */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">National Level Scholarships</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {nationalScholarships.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-lg shadow-slate-200/40 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex-shrink-0 w-2 bg-indigo-500 rounded-full h-full" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
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
