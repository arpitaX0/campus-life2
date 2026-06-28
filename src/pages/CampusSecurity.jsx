import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Eye, Users, Key, Heart, AlertOctagon,
  PhoneCall, HelpCircle, Lock, Camera, Radio, Siren
} from 'lucide-react';

const tabs = [
  {
    id: 'surveillance',
    label: 'Surveillance',
    icon: Camera,
    color: 'blue',
    title: '24/7 CCTV & Smart Analytics',
    desc: 'Over 300+ high-definition network cameras cover every corner of the campus. Our smart analytic servers automatically detect unusual congregations, boundary breaches, and unauthorized entries in real-time.',
    badges: ['300+ Cameras', 'Smart Detection', 'Live Monitoring'],
    stat: '300+',
    statLabel: 'HD Cameras',
  },
  {
    id: 'personnel',
    label: 'Personnel',
    icon: Users,
    color: 'teal',
    title: 'Elite Patrol Guards & Supervisors',
    desc: 'We deploy professionally trained guards, active 24 hours a day, performing regular walking patrols. Supervisors monitor gate checkpoints and ensure strictly audited entry rules for outer vehicles.',
    badges: ['50+ Personnel', 'Shift Patrols', 'Trained Staff'],
    stat: '50+',
    statLabel: 'Guard Personnel',
  },
  {
    id: 'access',
    label: 'Access Control',
    icon: Key,
    color: 'purple',
    title: 'RFID & Smart Access Control',
    desc: 'Students and staff validate entries using high-security RFID access cards. Turnstile barriers protect library complexes, hostels, and labs from general external trespassers.',
    badges: ['Turnstile Control', 'RFID Database', 'Biometric Ready'],
    stat: '12',
    statLabel: 'Access Points',
  },
  {
    id: 'womens-safety',
    label: "Women's Safety",
    icon: Heart,
    color: 'rose',
    title: "Dedicated Women's Safety Escorts",
    desc: "A dedicated team of security guards is deployed exclusively for night walks, hostel perimeter patrols, and responding to direct emergency calls. Safe transport solutions are also provided for late-night lab works.",
    badges: ['Escort Patrols', 'Emergency Desk', '24/7 Hotline'],
    stat: '24/7',
    statLabel: 'Active Coverage',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   glow: 'shadow-blue-100',   badge: 'bg-blue-50 text-blue-700 border border-blue-200',   active: 'bg-blue-700' },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-200',   text: 'text-teal-700',   glow: 'shadow-teal-100',   badge: 'bg-teal-50 text-teal-700 border border-teal-200',   active: 'bg-teal-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', glow: 'shadow-purple-100', badge: 'bg-purple-50 text-purple-700 border border-purple-200', active: 'bg-purple-700' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-700',   glow: 'shadow-rose-100',   badge: 'bg-rose-50 text-rose-700 border border-rose-200',   active: 'bg-rose-700' },
};

const protocols = [
  { icon: Lock, title: 'Gated Perimeter Security', desc: 'No vehicles or individuals are allowed entry past gate checkpoints without digital logging or a valid institutional ID.' },
  { icon: Shield, title: 'Night Curfew Escorts', desc: 'Escorts are provided on-request between academic buildings and hostels after 9:30 PM.' },
  { icon: Siren, title: 'Fire Safety Audits', desc: 'All blocks have smoke detectors, active hose pipes, and undergo quarterly fire evacuation drills.' },
  { icon: Radio, title: 'Emergency Communication', desc: 'Campus-wide PA system and walkie-talkie network for instant coordination between all security personnel.' },
];

const faqs = [
  { q: 'What should I do in an emergency?', a: 'Immediately call the 24/7 Security Control Room Hotline at +91-674-6649200 or locate the nearest security officer.' },
  { q: 'Are hostels secured separately?', a: 'Yes, all hostels have dedicated security guards, gated entry with RFID validation, and 24/7 CCTV monitoring at all exit and entry points.' },
  { q: "How is women's safety ensured at night?", a: "We have dedicated night patrol squads, emergency call boxes, and a strictly enforced escort policy for female students moving across campus after hours." },
];

const contacts = [
  { title: 'Control Room', detail: '+91-674-6649200', info: '24/7 Emergencies', color: 'blue' },
  { title: "Women's Safety Desk", detail: '+91-674-6649215', info: 'Direct Emergency', color: 'rose' },
  { title: 'Medical Center', detail: '+91-674-6649219', info: 'Medical Assistance', color: 'teal' },
  { title: 'Chief Security Officer', detail: '+91-94370 23412', info: 'Administrative', color: 'purple' },
];

export default function CampusSecurity() {
  const [activeTab, setActiveTab] = useState('surveillance');
  const [openFaq, setOpenFaq] = useState(null);

  const current = tabs.find(t => t.id === activeTab);
  const c = colorMap[current.color];
  const Icon = current.icon;

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#f5eeec', color: '#3e3a36' }}>

      {/* ── HERO (academics-tat style) ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
        {/* Background image with dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d475d4a1e2f?auto=format&fit=crop&q=80&w=1600"
            alt="Campus Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,27,62,0.88) 0%, rgba(26,38,96,0.72) 50%, rgba(13,27,62,0.45) 100%)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
            <span className="text-white/30">›</span>
            <a href="/" className="hover:text-white transition-colors">Campus Life</a>
            <span className="text-white/30">›</span>
            <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Campus Security</span>
          </nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
          >
            Trident Smart
            <br />
            <span style={{ color: '#E5AA3E' }}>Security Systems.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-3xl leading-relaxed font-medium mb-12"
            style={{ color: 'rgba(255,255,255,0.80)', fontSize: '18px' }}
          >
            Integrating 24/7 advanced surveillance, access control, and specialized quick response squads to maintain an absolute safety envelope.
          </motion.p>


        </div>
      </section>

      {/* ── SECURITY DEPLOYMENTS (TABS) ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#3e3a36' }}>
            Security Deployments
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#6b6460' }}>
            Our multi-tier deployment coordinates electronic security, personnel, and fast-response units.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            const cc = colorMap[tab.color];
            const TIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? `${cc.active} text-white shadow-lg`
                    : 'text-xs font-bold uppercase tracking-wider transition-all duration-200'
                }`}
                style={!isActive ? { backgroundColor: '#eae0d5', border: '1px solid #d6cfc9', color: '#6b6460' } : {}}
              >
                <TIcon size={13} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl border ${c.border} p-8 md:p-12`}
            style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 20px rgba(62,58,54,0.06)' }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center ${c.text} mb-6 shadow-sm`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#3e3a36' }}>{current.title}</h3>
                <p className="leading-relaxed mb-8 text-base" style={{ color: '#6b6460' }}>{current.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {current.badges.map(badge => (
                    <span key={badge} className={`text-xs font-bold px-3 py-1.5 rounded-lg ${c.badge}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual panel */}
              <div className={`h-[280px] rounded-2xl border ${c.border} ${c.bg} flex flex-col items-center justify-center gap-4 relative overflow-hidden`}>
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`${c.text} absolute`}
                >
                  <Icon size={180} />
                </motion.div>
                <div className="relative z-10 text-center">
                  <div className={`text-6xl font-black ${c.text}`}>{current.stat}</div>
                  <div className="text-sm uppercase tracking-widest mt-2" style={{ color: '#9c9390' }}>{current.statLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── PROTOCOLS & FAQ ── */}
      <section className="py-24" style={{ borderTop: '1px solid #e8e2d9' }}>
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Safety Protocols */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3" style={{ color: '#3e3a36' }}>
              <AlertOctagon style={{ color: '#2c3a8c' }} size={28} />
              Safety Protocols
            </h2>
            <div className="space-y-4">
              {protocols.map((p, i) => {
                const PIcon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl transition-all"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #e8e2d9' }}
                  >
                    <div className="mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(44,58,140,0.08)', color: '#2c3a8c' }}>
                      <PIcon size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1" style={{ color: '#3e3a36' }}>{p.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#6b6460' }}>{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3" style={{ color: '#3e3a36' }}>
              <HelpCircle style={{ color: '#2c3a8c' }} size={28} />
              Safety FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid #e8e2d9' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 transition-all text-left"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <span className="font-bold text-sm pr-4" style={{ color: '#3e3a36' }}>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#9c9390' }}
                      className="flex-shrink-0"
                    >
                      <span className="text-xl leading-none">+</span>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed px-5 pb-5" style={{ backgroundColor: '#faf6f3', color: '#6b6460' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CONTACTS ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6" style={{ borderTop: '1px solid #e8e2d9' }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: '#3e3a36' }}>
            Security Control Desk
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#6b6460' }}>
            Save these numbers in your contacts for immediate response in any situation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {contacts.map((contact, i) => {
            const cc = colorMap[contact.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${cc.border} text-center hover:scale-[1.03] transition-transform cursor-default`}
                style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(62,58,54,0.05)' }}
              >
                <div className={`w-11 h-11 ${cc.bg} rounded-full flex items-center justify-center ${cc.text} mx-auto mb-4`}>
                  <PhoneCall size={18} />
                </div>
                <h4 className="font-bold text-sm mb-1" style={{ color: '#3e3a36' }}>{contact.title}</h4>
                <p className={`font-mono text-lg font-black my-2 ${cc.text}`}>{contact.detail}</p>
                <span className="text-[10px] uppercase tracking-widest" style={{ color: '#9c9390' }}>{contact.info}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
