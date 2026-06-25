import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MonitorPlay, Wifi, Volume2, PlayCircle, Users, Settings } from 'lucide-react';

// --- Main Page Component ---
const ICTClassrooms = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const showcaseData = [
    {
      title: "Interactive Smart Boards",
      icon: <MonitorPlay className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      features: ["Real-time presentations", "Multimedia integration", "Touch-enabled interaction"]
    },
    {
      title: "High-Speed Connectivity",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      features: ["Campus-wide internet access", "Seamless online learning", "Low-latency streaming"]
    },
    {
      title: "AV Enabled Learning",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      features: ["HD projectors", "Surround audio systems", "Live demonstrations"]
    }
  ];

  const hotspots = [
    { id: 1, label: "Interactive Smart Board", top: "35%", left: "45%", icon: <MonitorPlay className="w-5 h-5"/>, desc: "75-inch 4K multi-touch display for immersive collaborative learning." },
    { id: 2, label: "Audio System", top: "20%", left: "70%", icon: <Volume2 className="w-5 h-5"/>, desc: "Acoustically tuned surround sound for crystal clear lectures." },
    { id: 3, label: "HD Projector", top: "15%", left: "50%", icon: <PlayCircle className="w-5 h-5"/>, desc: "Ceiling mounted 5000-lumen projector for vivid visuals." },
    { id: 4, label: "Collaboration Zone", top: "70%", left: "60%", icon: <Users className="w-5 h-5"/>, desc: "Modular ergonomic seating designed for group work." },
    { id: 5, label: "Faculty Control Panel", top: "60%", left: "30%", icon: <Settings className="w-5 h-5"/>, desc: "Centralized podium controlling lighting, AV, and networking." }
  ];

  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-50 font-sans overflow-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* ── HERO SECTION ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          {/* A high-tech abstract video loop placeholder */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
            poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          >
            {/* If the video fails to load, the poster image remains */}
            <source src="https://cdn.pixabay.com/vimeo/328221652/technology-22688.mp4?width=1920&hash=8528f11ecdb1d3f3f1e9447e171b3dc92a2a7f5a" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-transparent to-[#0f172a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">


          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", damping: 20 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
          >
            Future-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              Learning Spaces.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Experience technology-driven education through smart classrooms equipped with advanced digital tools and collaborative learning systems.
          </motion.p>


        </div>


      </section>

      {/* ── VISION STATEMENT ── */}
      <section className="py-24 relative z-20 border-b border-slate-800/50 bg-[#0b1120]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl text-slate-300 leading-tight font-medium"
          >
            "Our ICT enabled classrooms are designed to create an interactive, modern, and effective learning environment. With the support of digital tools, smart teaching methods, and advanced presentation systems, students gain a better understanding of concepts through engaging and technology-driven education."
          </motion.p>
        </div>
      </section>



      {/* ── SMART CLASSROOM SHOWCASE ── */}
      <section className="py-32 relative bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Smart Classroom <span className="text-indigo-400">Showcase.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Every room is meticulously engineered to provide an uninterrupted, high-fidelity learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors duration-500"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-100 mb-6">{item.title}</h3>
                
                <ul className="space-y-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ICTClassrooms;
