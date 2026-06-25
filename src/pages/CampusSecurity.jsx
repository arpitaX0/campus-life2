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
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/30',   text: 'text-blue-400',   glow: 'shadow-blue-500/20',   badge: 'bg-blue-500/10 text-blue-300',   active: 'bg-blue-600' },
  teal:   { bg: 'bg-teal-500/10',   border: 'border-teal-500/30',   text: 'text-teal-400',   glow: 'shadow-teal-500/20',   badge: 'bg-teal-500/10 text-teal-300',   active: 'bg-teal-600' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'shadow-purple-500/20', badge: 'bg-purple-500/10 text-purple-300', active: 'bg-purple-600' },
  rose:   { bg: 'bg-rose-500/10',   border: 'border-rose-500/30',   text: 'text-rose-400',   glow: 'shadow-rose-500/20',   badge: 'bg-rose-500/10 text-rose-300',   active: 'bg-rose-600' },
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
    <div className="bg-[#030712] min-h-screen text-slate-100 font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        {/* Animated radar rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-blue-500/10"
              style={{ width: i * 220, height: i * 220 }}
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          {/* Radar sweep */}
          <motion.div
            className="absolute w-[500px] h-[500px] origin-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-1/2 left-1/2 w-[250px] h-[2px] origin-left"
              style={{ background: 'linear-gradient(to right, rgba(59,130,246,0.6), transparent)' }}
            />
          </motion.div>
        </div>

        {/* Blue glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          >
            <Shield size={14} />
            Campus Security Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]"
          >
            Trident Smart
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Security Systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Integrating 24/7 advanced surveillance, access control, and specialized quick response squads to maintain an absolute safety envelope.
          </motion.p>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {[
              { val: '300+', label: 'CCTV Cameras' },
              { val: '24/7', label: 'Active Coverage' },
              { val: '50+', label: 'Security Personnel' },
              { val: '12', label: 'Access Points' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-black text-white">{s.val}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECURITY DEPLOYMENTS (TABS) ── */}
      <section className="py-24 max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Security Deployments
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
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
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
                }`}
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
            className={`rounded-3xl border ${c.border} bg-slate-900/50 p-8 md:p-12 backdrop-blur-sm`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center ${c.text} mb-6 shadow-lg ${c.glow}`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{current.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-base">{current.desc}</p>
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
                  animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className={`${c.text} opacity-20 absolute`}
                >
                  <Icon size={180} />
                </motion.div>
                <div className="relative z-10 text-center">
                  <div className={`text-6xl font-black ${c.text}`}>{current.stat}</div>
                  <div className="text-slate-500 text-sm uppercase tracking-widest mt-2">{current.statLabel}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── PROTOCOLS & FAQ ── */}
      <section className="py-24 border-t border-slate-900">
        <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Safety Protocols */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
              <AlertOctagon className="text-blue-500" size={28} />
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
                    className="flex gap-4 p-5 bg-slate-900/40 rounded-2xl border border-slate-800/60 hover:border-blue-800/50 transition-all"
                  >
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <PIcon size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-white">
              <HelpCircle className="text-cyan-400" size={28} />
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
                  className="rounded-2xl border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 bg-slate-900/40 hover:bg-slate-900/70 transition-all text-left"
                  >
                    <span className="font-bold text-white text-sm pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-500 flex-shrink-0"
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
                        <p className="text-sm text-slate-400 leading-relaxed px-5 pb-5 bg-slate-900/20">
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
      <section className="py-24 max-w-[1300px] mx-auto px-6 border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Security Control Desk
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
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
                className={`bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border ${cc.border} text-center hover:scale-[1.03] transition-transform cursor-default`}
              >
                <div className={`w-11 h-11 ${cc.bg} rounded-full flex items-center justify-center ${cc.text} mx-auto mb-4`}>
                  <PhoneCall size={18} />
                </div>
                <h4 className="text-slate-300 font-bold text-sm mb-1">{contact.title}</h4>
                <p className={`font-mono text-lg font-black my-2 ${cc.text}`}>{contact.detail}</p>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{contact.info}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
