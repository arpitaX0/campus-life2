import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Music, Palette, Trophy, Code, Camera, Mic, Dumbbell, Globe, Heart, Users, Zap, BookOpen , CheckCircle} from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const CLUBS = [
  { icon: Code, name: "Coding Club", category: "Technical", color: "#283B91", members: "200+", desc: "Competitive programming, hackathons, and coding workshops fostering algorithmic thinking and software development skills." },
  { icon: Zap, name: "Robotics Club", category: "Technical", color: "#283B91", members: "80+", desc: "Designing and building autonomous robots, participating in national robotics competitions and innovation challenges." },
  { icon: Camera, name: "Photography Club", category: "Cultural", color: "#E5AA3E", members: "120+", desc: "Capturing campus life, organizing photo walks, exhibitions, and workshops on digital photography and editing." },
  { icon: Music, name: "Music Club (Sur Sadhana)", category: "Cultural", color: "#E5AA3E", members: "100+", desc: "Vocal and instrumental performances, band practices, and cultural event performances across genres." },
  { icon: Palette, name: "Art & Design Club", category: "Cultural", color: "#E5AA3E", members: "90+", desc: "Painting, sketching, digital art, and design thinking workshops encouraging creative expression." },
  { icon: Mic, name: "Debate & Literary Club", category: "Cultural", color: "#2E7D32", members: "75+", desc: "Debates, essay competitions, poetry slams, and Model United Nations preparation." },
  { icon: Trophy, name: "Sports Club", category: "Sports", color: "#C5282F", members: "300+", desc: "Cricket, football, basketball, badminton, athletics, and inter-college sports tournament participation." },
  { icon: Dumbbell, name: "Fitness Club", category: "Sports", color: "#C5282F", members: "150+", desc: "Yoga sessions, gym training, marathon running, and wellness programs for holistic health." },
  { icon: Globe, name: "Eco Club (Green Brigade)", category: "Social", color: "#2E7D32", members: "100+", desc: "Environmental awareness drives, tree plantation, waste management, and sustainability campaigns." },
  { icon: Heart, name: "NSS Unit", category: "Social", color: "#2E7D32", members: "200+", desc: "National Service Scheme — community service, blood donation camps, rural development initiatives." },
  { icon: Users, name: "Entrepreneurship Cell", category: "Technical", color: "#283B91", members: "60+", desc: "Startup mentoring, business plan competitions, ideation workshops, and investor pitch events." },
  { icon: BookOpen, name: "Quiz Club", category: "Cultural", color: "#E5AA3E", members: "80+", desc: "Inter-college quizzes, weekly quiz sessions, and knowledge-sharing events across diverse domains." },
];

const CATEGORIES = ["All", "Technical", "Cultural", "Sports", "Social"];

export default function StudentClubsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = activeCategory === "All" ? CLUBS : CLUBS.filter(c => c.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* academics-tat style Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">
        {/* Full-width photo background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85" alt="Student Clubs" className="w-full h-full object-cover object-center" />
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(10,8,25,0.90) 0%, rgba(10,8,25,0.68) 55%, rgba(10,8,25,0.30) 100%)' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(10,8,25,0.75) 0%, transparent 50%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-12 w-full pb-0">
          <div className="max-w-3xl pt-36 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              <Link to="/" className="hover:text-[#E5AA3E] transition-colors flex items-center gap-1"><Home size={12} />Home</Link>
              <ChevronRight size={10} className="text-white/40" />
              <span className="text-[#E5AA3E]">Student Clubs</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#E5AA3E]/60 text-[#E5AA3E] text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-6">
              <Users size={11} /> Trident Academy
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-[1.05] mb-5">
              Student
              <span className="block" style={{ color: '#E5AA3E' }}>Clubs</span>
            </h1>

            {/* Description */}
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              Explore your passion beyond the classroom through our vibrant student clubs and organizations.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 w-full" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', borderTop: '1px solid rgba(229,170,62,0.2)' }}>
          <div className="max-w-7xl mx-auto px-6 xl:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[{ val: '12+', label: 'Active Clubs' }, { val: '1500+', label: 'Total Members' }, { val: '50+', label: 'Events/Year' }, { val: '4', label: 'Categories' }].map((s, i) => (
                <div key={i} className="py-5 px-6 flex flex-col" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <span className="font-black text-2xl text-white">{s.val}</span>
                  <span className="text-[11px] text-white/55 uppercase tracking-widest mt-0.5 font-semibold">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-12">

        {/* Category Filter */}
        <FadeInUp>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#283B91] text-white border-[#283B91] shadow-lg shadow-[#283B91]/20"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#283B91]/30 hover:text-[#283B91]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Clubs Grid */}
        <motion.div
          key={activeCategory}
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filtered.map((club, i) => (
            <motion.div key={club.name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="group p-8 border-l-2 border-transparent hover:border-[currentColor]/30 transition-all hover:bg-gray-50 duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[60px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{ background: club.color }} />
              
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${club.color}15` }}>
                  <club.icon size={22} style={{ color: club.color }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: club.color, background: `${club.color}10` }}>
                  {club.category}
                </span>
              </div>

              <h3 className="font-sans text-[20px] font-bold text-[#1E3A5F] mb-2">{club.name}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-5">{club.desc}</p>
              
              <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400">
                <Users size={14} />
                <span>{club.members} Members</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
