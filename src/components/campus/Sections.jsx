import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Microscope, Beaker, Globe, Cpu, Home, Utensils, HeartPulse, Wifi, Building, Bus, Quote as QuoteIcon } from 'lucide-react'

import researchImg from '../../assets/real_research.jpg'
import facility1 from '../../assets/facilities_campus_green.jpg'
import facility2 from '../../assets/real_cafeteria.jpg'
import facility3 from '../../assets/facilities_sports.jpg'
import facility4 from '../../assets/real_lab.jpg'
import facility5 from '../../assets/athletics_facility.png'
import facility6 from '../../assets/news_campus_life.jpg'

// ==========================================
// RESEARCH — Card Grid Design
// ==========================================
export function Research() {
  const researchAreas = [
    { icon: Microscope, label: 'Applied Sciences', desc: 'Advancing foundational science through robust experimentation and theoretical modeling.' },
    { icon: Cpu, label: 'AI & ML Research', desc: 'Developing intelligent systems and machine learning algorithms for real-world problems.' },
    { icon: Beaker, label: 'Material Engineering', desc: 'Innovating new materials for sustainable infrastructure and technology.' },
    { icon: Globe, label: 'Sustainable Systems', desc: 'Creating ecological solutions for clean energy, water, and environment.' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-[#F9F7F5]" id="research">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#34785A]">Research & Innovation</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[52px] text-[#3E3A36] leading-[1.1] tracking-tight mt-4">
            Pushing the boundaries <span className="italic font-light text-[#E56D24]">of knowledge.</span>
          </h2>
          <p className="text-[#3E3A36]/70 text-lg mt-6 max-w-2xl mx-auto">
            A DSIR-SIRO recognized institution with active research programmes in AI, IoT, renewable energy, and advanced materials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-[#EFE7DF] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#34785A]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#34785A] transition-all duration-500">
                <area.icon size={24} className="text-[#34785A] group-hover:text-white transition-colors" />
              </div>
              <h3 className="serif text-xl font-bold text-[#3E3A36] mb-3">{area.label}</h3>
              <p className="text-[#3E3A36]/70 text-sm leading-relaxed flex-grow">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// FACILITIES — Card Grid Design
// ==========================================
export function Facilities() {
  const facilities = [
    { title: 'Premium Hostels', desc: 'In-campus safe residence with modern amenities, 24/7 security, and a home-like atmosphere.', img: facility1, icon: Home },
    { title: 'Food Centers', desc: 'Multi-cuisine dining halls offering wholesome meals in spacious, naturally-lit settings.', img: facility2, icon: Utensils },
    { title: 'Healthcare', desc: 'Dedicated health center with qualified medical professionals and emergency care facilities.', img: facility3, icon: HeartPulse },
    { title: 'Modern Labs', desc: 'AICTE-standard smart classrooms and advanced computing labs for immersive learning.', img: facility4, icon: Building },
    { title: 'Campus WiFi', desc: 'High-speed internet connectivity across the entire campus, enabling seamless digital learning.', img: facility5, icon: Wifi },
    { title: 'Safe Transport', desc: 'Extensive bus fleet covering all major routes across Bhubaneswar for safe daily commute.', img: facility6, icon: Bus },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-[#EFE7DF]" id="facilities">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#2C3A8C]">Campus Facilities</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[52px] text-[#3E3A36] leading-[1.1] tracking-tight mt-4">
            Everything you <span className="italic font-light text-[#2C3A8C]">need.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon
            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] overflow-hidden shadow-[0_15px_35px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                <div className="h-[200px] overflow-hidden relative">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="absolute -top-8 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#2C3A8C]">
                    <Icon size={24} />
                  </div>
                  <h4 className="serif text-2xl font-bold text-[#3E3A36] mb-3">{fac.title}</h4>
                  <p className="text-[#3E3A36]/70 text-[15px] leading-relaxed flex-grow">{fac.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// IMPACT — Stat Card Design
// ==========================================
export function Impact() {
  const impactData = [
    { number: '94%', label: 'Placement Rate', desc: 'Students placed in top companies' },
    { number: '120+', label: 'Recruiters', desc: 'Fortune 500 & leading MNCs' },
    { number: '20+', label: 'Years', desc: 'Of academic excellence' },
    { number: '6', label: 'NBA Programmes', desc: 'Nationally accredited courses' },
  ]

  return (
    <section id="impact" className="relative py-24 md:py-32 bg-[#F9F7F5]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#D3494B]">Our Impact</span>
          <h2 className="serif text-4xl md:text-5xl lg:text-[52px] text-[#3E3A36] leading-[1.1] tracking-tight mt-4">
            Numbers that <span className="italic font-light text-[#D3494B]">speak.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactData.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-10 border border-[#EFE7DF] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(211,73,75,0.2)] hover:border-[#D3494B]/30 hover:-translate-y-2 transition-all duration-500 text-center"
            >
              <div className="serif text-5xl md:text-6xl font-black text-[#D3494B] mb-4">
                {item.number}
              </div>
              <h3 className="text-[#3E3A36] text-[15px] font-bold uppercase tracking-widest mb-3">{item.label}</h3>
              <p className="text-[#3E3A36]/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ==========================================
// QUOTE — Highlight Card Design
// ==========================================
export function Quote() {
  return (
    <section className="relative py-24 md:py-32 bg-[#EFE7DF]">
      <div className="max-w-5xl mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] p-12 md:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#3E3A36]/5 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8BD63]/10 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2C3A8C]/10 rounded-tr-[100px] transition-transform duration-700 group-hover:scale-150" />
          
          <QuoteIcon size={50} className="text-[#E8BD63] mx-auto mb-10 relative z-10" />
          
          <blockquote className="serif text-2xl md:text-3xl lg:text-[40px] text-[#3E3A36] leading-[1.4] font-light italic mb-12 relative z-10">
            "Education is not the filling of a pail, but the lighting of a fire. At Trident, we ignite curiosity, foster innovation, and build leaders who shape the future."
          </blockquote>
          
          <div className="w-16 h-[3px] bg-[#2C3A8C] mx-auto mb-8 relative z-10" />
          <p className="text-[#3E3A36] text-[13px] font-bold uppercase tracking-[0.25em] relative z-10">Dr. Biswa Bijayi Panigrahi</p>
          <p className="text-[#3E3A36]/50 text-xs uppercase tracking-widest mt-2 relative z-10">Founder & Chairman, Trident Group</p>
        </motion.div>
      </div>
    </section>
  )
}
