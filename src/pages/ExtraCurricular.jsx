import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Sparkles, Users, Calendar, Award, Heart, MessageSquare, 
  ChevronDown, ChevronUp, Mail, Phone, MapPin, CheckCircle2, ArrowRight,
  Code, Camera, Music, Play, BookOpen, Activity, Compass, Users2,
  Cpu, Leaf, ChevronLeft, ChevronRight, X, User
} from 'lucide-react';

// Imports from existing animation libraries
import { 
  TextReveal, MaskReveal, MagneticButton, AmbientParticles, 
  FloatingElement, MouseGlow, StaggerChildren, FadeInUp 
} from '../utils/animations';

import { 
  GSAPCounter, Tilt3D, AnimatedGradient 
} from '../utils/advanced-animations';

import { SmoothScrollProvider } from '../lib/smooth-scroll';

// Import local assets for rich visuals
import sportsImg from '../assets/facilities_sports.jpg';
import hackathonImg from '../assets/news_hackathon.png';
import trifestImg from '../assets/news_trifest.png';
import danceImg1 from '../assets/Dance 1.jpeg';
import danceImg2 from '../assets/dance 2.jpg';
import festImg from '../assets/Fest.jpeg';
import freshersImg from '../assets/Freshers party.jpeg';
import gymImg from '../assets/Gym.jpg';
import codingClubImg from '../assets/coding club.jpeg';
import annualFuncImg from '../assets/annual function.jpg';
import convocationImg from '../assets/news_convocation.png';
import athleticsImg from '../assets/athletics_facility.png';

// Testimonial pictures
import abinashImg from '../assets/alumni_abinash_das.jpg';
import smaranikaImg from '../assets/alumni_smaranika_das.jpg';
import bibhutenduImg from '../assets/alumni_bibhutendu_parida.jpg';

export default function ExtraCurricular() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [joinedClubs, setJoinedClubs] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', interest: 'Coding Club', message: '' });
  const [galleryFilter, setGalleryFilter] = useState('All');

  // Hero backgrounds
  const heroSlides = [
    { img: sportsImg, title: "Sports & Athletics", subtitle: "Building character, determination, and leadership on the field." },
    { img: danceImg1, title: "Cultural Events", subtitle: "Expressing creativity and showcasing diverse talents." },
    { img: codingClubImg, title: "Student Clubs", subtitle: "Collaborating to solve real-world technical problems." },
    { img: hackathonImg, title: "Technical Competitions", subtitle: "Pushing the boundaries of coding and innovation." },
    { img: freshersImg, title: "Leadership Programs", subtitle: "Empowering the change-makers of tomorrow." }
  ];

  // Handle SEO metadata dynamically on mount
  useEffect(() => {
    document.title = "Extra Curricular Activities | Trident Academy of Technology";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Explore sports, cultural programs, clubs, leadership opportunities, technical competitions, and student activities at Trident Academy of Technology.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, []);

  // Handle auto-slide for hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Handle auto-slide for success stories
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % successStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleJoinClub = (clubName) => {
    setJoinedClubs(prev => ({ ...prev, [clubName]: !prev[clubName] }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactData({ name: '', email: '', interest: 'Coding Club', message: '' });
    }, 3000);
  };

  // 4 Interactive Domain Cards
  const domainCards = [
    {
      title: "Sports & Athletics",
      desc: "Promoting fitness, sportsmanship, and physical development through highly competitive sports leagues.",
      activities: ["Cricket", "Football", "Volleyball", "Basketball", "Athletics", "Indoor Games"],
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      color: "border-orange-500/10 hover:border-orange-500 bg-orange-500/5",
      accent: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Cultural Activities",
      desc: "A lively platform to celebrate creative expressions, cultural fests, performing arts, and drama.",
      activities: ["Dance", "Music", "Drama", "Fashion Shows", "Talent Competitions"],
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      color: "border-purple-500/10 hover:border-purple-500 bg-purple-500/5",
      accent: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Technical Activities",
      desc: "Challenging analytical minds through national hackathons, developer bootcamps, and robotics combat.",
      activities: ["Coding Contests", "Hackathons", "Robotics", "Innovation Challenges"],
      icon: <Code className="w-8 h-8 text-blue-600" />,
      color: "border-blue-600/10 hover:border-blue-600 bg-blue-600/5",
      accent: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Leadership Programs",
      desc: "Cultivating leadership traits, event coordination, and communication skills via active organizations.",
      activities: ["Student Council", "Event Management", "Campus Ambassadors"],
      icon: <Compass className="w-8 h-8 text-yellow-500" />,
      color: "border-yellow-500/10 hover:border-yellow-500 bg-yellow-500/5",
      accent: "bg-yellow-500/10 text-yellow-600"
    }
  ];

  // Student Clubs Data
  const clubs = [
    { name: "Coding Club", icon: <Code className="w-6 h-6" />, desc: "Sharpen algorithmic skills, coordinate developer bootcamps, and prepare for tech competitions.", color: "text-blue-500 bg-blue-50 border-blue-100" },
    { name: "Robotics Club", icon: <Cpu className="w-6 h-6" />, desc: "Design, configure, and battle customized robots. Work on drone designs and automation technologies.", color: "text-orange-500 bg-orange-50 border-orange-100" },
    { name: "Photography Club", icon: <Camera className="w-6 h-6" />, desc: "Capture campus life, learn camera metrics, edit professional shoots, and display in annual exhibitions.", color: "text-purple-500 bg-purple-50 border-purple-100" },
    { name: "Dance Club", icon: <Sparkles className="w-6 h-6" />, desc: "Express rhythms and choreography in classical, Bollywood, hip-hop, and freestyle dance forms.", color: "text-purple-500 bg-purple-50 border-purple-100" },
    { name: "Music Club", icon: <Music className="w-6 h-6" />, desc: "A home for vocalists, guitarists, and bands. Organize campus concerts, jam nights, and fests.", color: "text-pink-500 bg-pink-50 border-pink-100" },
    { name: "Literary Club", icon: <BookOpen className="w-6 h-6" />, desc: "Explore debate sessions, declamations, creative writing, poetry slams, and publish newsletters.", color: "text-yellow-600 bg-yellow-50 border-yellow-100" },
    { name: "Entrepreneurship Club", icon: <Trophy className="w-6 h-6" />, desc: "Pitch startup initiatives, receive incubation support, and build prototypes for innovative products.", color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
    { name: "Eco Club", icon: <Leaf className="w-6 h-6" />, desc: "Lead campus plantation, waste management campaigns, energy drives, and clean-up programs.", color: "text-green-500 bg-green-50 border-green-100" }
  ];

  // Sports Facilities Data
  const sportsFacilities = [
    { name: "Cricket Ground", desc: "Full-sized green outfield cricket ground with dedicated turf pitch nets for professional practice.", img: athleticsImg },
    { name: "Football Ground", desc: "Vibrant grass field hosting inter-college soccer matches, athletic track events, and practice runs.", img: sportsImg },
    { name: "Basketball Court", desc: "Standard dimensions, acrylic synthetic court layout hosting high-speed dribble and shooting matches.", img: sportsImg },
    { name: "Volleyball Court", desc: "State-of-the-art courts equipped with high-intensity floodlights for competitive matches at night.", img: sportsImg },
    { name: "Indoor Games Arena", desc: "Ergonomically designed tables and seating zones hosting indoor chess, carrom, and table tennis games.", img: sportsImg },
    { name: "Gymnasium", desc: "Fully air-conditioned indoor fitness center with multi-gym setups, free weights, and cardio equipment.", img: gymImg }
  ];

  // Timeline Events Data
  const events = [
    { title: "Freshers Program", date: "September 2025", desc: "A colorful, warm, and highly engaging induction event welcoming the first-year student batch to Trident." },
    { title: "Tech Fest (Tricon)", date: "November 2025", desc: "Our annual flagship technology fest hosting hackathons, drone racing, robotics combat, and web design contests." },
    { title: "Sports Meet (Athleta)", date: "December 2025", desc: "A multi-day, competitive sports meet featuring cricket tournaments, athletic sprints, volleyball, and indoor chess." },
    { title: "Innovation Summit", date: "February 2026", desc: "A gathering of global innovators, entrepreneurs, and startup heads mentoring students and reviewing prototypes." },
    { title: "Cultural Fest (Trifest)", date: "March 2026", desc: "The mega cultural carnival. Creative arts, dance competition, fashion showdowns, and live celebrity band performances." },
    { title: "Farewell Program", date: "May 2026", desc: "Celebrating milestones, sharing nostalgia, and sending off final-year students into their professional careers." }
  ];

  // Benefits Data
  const benefits = [
    { title: "Leadership Development", desc: "Build confidence, decision-making, and public speaking skills by coordinating events and leading teams.", icon: <Compass className="w-8 h-8 text-orange-500" /> },
    { title: "Teamwork", desc: "Learn collaboration, empathy, and constructive communication by working on multi-disciplinary projects.", icon: <Users2 className="w-8 h-8 text-blue-600" /> },
    { title: "Creativity", desc: "Express original ideas, push creative boundaries, and design solutions to real-world challenges.", icon: <Sparkles className="w-8 h-8 text-purple-500" /> },
    { title: "Physical Fitness", desc: "Promote healthy lifestyles, mental agility, and regular athletic participation.", icon: <Activity className="w-8 h-8 text-emerald-500" /> },
    { title: "Networking", desc: "Connect with proactive peers, industry experts, global developers, and mentors.", icon: <Users className="w-8 h-8 text-pink-500" /> },
    { title: "Personal Growth", desc: "Develop confidence, resilience, time management, and a versatile well-rounded personality.", icon: <Award className="w-8 h-8 text-yellow-500" /> }
  ];

  // Student Success Stories Data
  const successStories = [
    {
      name: "Abinash Das",
      dept: "Computer Science & Engineering",
      achievement: "Smart India Hackathon 2024 Winner",
      experience: "Leading our team at the National Hackathon gave me immense confidence. Extracurriculars at Trident taught me how to manage stress, collaborate with diverse minds, and pitch ideas under tight timelines.",
      img: abinashImg
    },
    {
      name: "Smaranika Das",
      dept: "Electronics & Communication Engineering",
      achievement: "Outstanding Cultural Leader 2025",
      experience: "Choreographing performances for Trifest was an unforgettable experience. Organizing cultural shows honed my time management, public speaking, and team execution skills.",
      img: smaranikaImg
    },
    {
      name: "Bibhutendu Parida",
      dept: "Mechanical Engineering",
      achievement: "State Level Athletics Gold Medalist",
      experience: "The support of physical education instructors and facilities at Trident allowed me to balance rigorous academic lectures with intense athletic runs, winning the 400m Gold.",
      img: bibhutenduImg
    }
  ];

  // Gallery Data
  const galleryItems = [
    { title: "Annual Athletic Meet", category: "Sports", img: sportsImg, desc: "Students participating in track and field events." },
    { title: "Smart India Hackathon", category: "Technical", img: hackathonImg, desc: "Trident team coding overnight at SIH." },
    { title: "Trifest Stage Concert", category: "Cultural", img: trifestImg, desc: "A vibrant music concert under the stars." },
    { title: "Dance Club Performance", category: "Cultural", img: danceImg1, desc: "Dynamic dance routines during the annual meet." },
    { title: "Farewell Ceremony Celebration", category: "Clubs", img: freshersImg, desc: "Bidding a warm goodbye to our seniors." },
    { title: "Freshers Induction Fest", category: "Clubs", img: festImg, desc: "Welcoming the new batches of 2026." },
    { title: "Coding Club Hacknight", category: "Technical", img: codingClubImg, desc: "Late night developer sprint at TAT incubation lab." },
    { title: "Annual Function Awards", category: "Ceremonies", img: annualFuncImg, desc: "Distributing academic and activities awards to winners." },
    { title: "Convocation Ceremony", category: "Ceremonies", img: convocationImg, desc: "Graduating batch of students celebrating their degrees." },
    { title: "Dance Performance Group", category: "Cultural", img: danceImg2, desc: "Traditional fusion performance at Trifest stage." }
  ];

  // FAQ Accordion Data
  const faqs = [
    { q: "How can students join activities?", a: "Students can register for any number of clubs during the induction week at the start of each semester, or directly register through the Student Affairs portal by clicking on 'Join' buttons." },
    { q: "Are activities open to all students?", a: "Yes, absolutely! Every extracurricular activity, club membership, or event participation is completely open to all students across B.Tech, MCA, MBA, and other courses." },
    { q: "Is participation mandatory?", a: "While participation is not strictly mandatory, TAT highly encourages students to participate in at least one club or sport to foster a balanced life and earn dynamic growth points." },
    { q: "Are certificates provided?", a: "Yes, students receive official achievement certificates and medals for winning, and participation certificates for representing Trident in state/national events." },
    { q: "Can students start new clubs?", a: "Yes! Students can propose a new club to the Dean of Student Affairs by submitting a formal proposal with the club's objective, core agenda, and signatures of at least 20 interested students." }
  ];

  // Filters gallery items based on selection
  const filteredGallery = galleryFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => {
        if (galleryFilter === 'Sports') return item.category === 'Sports';
        if (galleryFilter === 'Cultural') return item.category === 'Cultural';
        if (galleryFilter === 'Clubs') return item.category === 'Clubs';
        if (galleryFilter === 'Technical') return item.category === 'Technical';
        if (galleryFilter === 'Award Ceremonies') return item.category === 'Ceremonies';
        return true;
      });

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FFF7ED] min-h-screen text-slate-900 font-sans overflow-hidden selection:bg-orange-500 selection:text-white relative">
        
        {/* Ambient background particles */}
        <AmbientParticles count={25} color="rgba(249, 115, 22, 0.12)" />

        {/* ── 1. HERO SECTION ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          
          {/* Animated Background Mesh */}
          <AnimatedGradient 
            colors={["#F97316", "#1E3A8A", "#8B5CF6", "#FACC15"]} 
            speed={25} 
            opacity={0.12} 
          />
          
          {/* Background Images Crossfade Slider */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={heroSlides[heroIndex].img}
                  alt={heroSlides[heroIndex].title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
            {/* Gradient overlays for layout and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/40 to-[#FFF7ED]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#FFF7ED_100%)]" />
          </div>

          {/* Floating Geometric Orbs (Parallax feel) */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <FloatingElement className="absolute top-[20%] left-[10%] opacity-40" range={20} duration={8}>
              <div className="w-16 h-16 rounded-full border border-orange-500/30 bg-orange-500/10 blur-[1px]" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-[25%] right-[12%] opacity-30" range={25} duration={10}>
              <div className="w-24 h-24 rounded-full border border-purple-500/20 bg-purple-500/5 blur-[2px]" />
            </FloatingElement>
            <FloatingElement className="absolute top-[40%] right-[15%] opacity-20" range={15} duration={6}>
              <div className="w-12 h-12 rounded-xl border border-yellow-500/30 bg-yellow-500/10 rotate-12" />
            </FloatingElement>
          </div>

          {/* Hero Content Wrapper */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
            


            <TextReveal blur={true} stagger={0.03} className="w-full">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-blue-900 uppercase">
                Extra Curricular <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 bg-size-200 animate-gradient-shift">
                  Activities
                </span>
              </h1>
            </TextReveal>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-slate-700 max-w-3xl mb-12 font-medium leading-relaxed"
            >
              "Trident promotes and nurtures the talents in its students through sports, athletics, cultural programs, technical events, leadership opportunities, and physical activities."
            </motion.p>



          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-60">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-blue-900 uppercase mb-2">Scroll Down</span>
            <ChevronDown className="w-5 h-5 text-orange-500 animate-bounce" />
          </div>

        </section>

        {/* ── 2. OVERVIEW SECTION ── */}
        <section id="overview" className="py-24 md:py-32 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Holistic Ecosystem</span>
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase leading-tight">
                  Learning Beyond <br />
                  <span className="text-orange-500">The Classroom</span>
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-slate-700 text-lg font-medium leading-relaxed">
                  Extra curricular activities at Trident Academy help students discover their talents, develop leadership qualities, improve teamwork, build confidence, and maintain a healthy balance between academics and personal growth.
                </p>
              </div>
            </div>

            {/* Interactive Domain Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {domainCards.map((domain, idx) => (
                <Tilt3D key={idx} intensity={15} scale={1.02} className="h-full">
                  <div className={`rounded-3xl p-8 border h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500 backdrop-blur-md bg-white/60 ${domain.color}`}>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 border border-slate-100 shadow-sm">
                        {domain.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">{domain.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">{domain.desc}</p>
                    </div>

                    <div className="border-t border-slate-200/50 pt-6">
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">Activities Include</div>
                      <div className="flex flex-wrap gap-2">
                        {domain.activities.map((act, i) => (
                          <span key={i} className="bg-white/80 border border-slate-200/40 text-slate-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              ))}
            </div>

          </div>
        </section>

        {/* ── 3. STUDENT CLUBS SECTION ── */}
        <section id="clubs-section" className="py-24 md:py-32 bg-white/40 border-y border-orange-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Student Guilds</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase">Student Clubs</h2>
              <p className="text-slate-600 text-sm md:text-base mt-4 font-medium">
                Join student-run communities where you can collaborate, learn, build projects, and express creativity.
              </p>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clubs.map((club) => (
                <Tilt3D key={club.name} intensity={10} className="h-full">
                  <div className="bg-white rounded-3xl p-8 border border-orange-500/5 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-500 h-full">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${club.color}`}>
                        {club.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{club.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">{club.desc}</p>
                    </div>
                    
                    <button
                      onClick={() => handleJoinClub(club.name)}
                      className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                        joinedClubs[club.name]
                          ? 'bg-emerald-500 border-emerald-500 text-white hover:bg-emerald-600'
                          : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                      }`}
                    >
                      {joinedClubs[club.name] ? 'Joined! ✓' : 'Join Club'}
                    </button>
                  </div>
                </Tilt3D>
              ))}
            </StaggerChildren>

          </div>
        </section>

        {/* ── 4. SPORTS FACILITIES SECTION ── */}
        <section className="py-24 md:py-32 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Elite Infrastructures</span>
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase leading-tight">Sports Facilities</h2>
              </div>
              <p className="text-slate-600 max-w-md font-medium text-base">
                Discover standard training pitches, playgrounds, and gymnasium centers constructed inside Trident campus coordinates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsFacilities.map((facility, i) => (
                <div 
                  key={i} 
                  className="group bg-white rounded-[32px] overflow-hidden border border-orange-500/5 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={facility.img} 
                      alt={facility.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-8 right-8">
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Trident Facility</span>
                      <h4 className="text-2xl font-black text-white mt-1">{facility.name}</h4>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                      {facility.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                      <span>Interactive view</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 5. ANNUAL EVENTS SECTION ── */}
        <section className="relative z-20 overflow-hidden">
          
          {/* Dark luxury background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#1e3a8a]" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-400 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" /> TAT Timeline
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white mt-5 uppercase leading-tight">
                Annual <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Events</span>
              </h2>
              <p className="text-blue-200/70 text-base mt-5 font-medium leading-relaxed">
                Step through the sequence of flagship campus activities, cultural programs, and hackathons configured across the academic calendar.
              </p>
            </div>

            {/* Alternate-side Timeline Layout */}
            <div className="relative max-w-5xl mx-auto">
              
              {/* Central vertical line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 hidden md:block" />

              <div className="space-y-16">
                {events.map((event, idx) => {
                  const isLeft = idx % 2 === 0;
                  const borderGlow = idx % 3 === 0 
                    ? "hover:border-orange-500/40" 
                    : idx % 3 === 1 
                      ? "hover:border-purple-500/40" 
                      : "hover:border-blue-500/40";

                  return (
                    <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Timeline Central Dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-orange-500 z-10 hidden md:block" />

                      {/* Spacer for structure */}
                      <div className="w-full md:w-[45%] hidden md:block" />

                      {/* Card Content */}
                      <motion.div
                        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`w-full md:w-[45%] bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 ${borderGlow}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                            {event.date}
                          </span>
                          <span className="text-white/20 font-black text-2xl">0{idx + 1}</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 hover:text-orange-300 transition-colors duration-300">
                          {event.title}
                        </h4>
                        <p className="text-blue-200/60 text-sm leading-relaxed font-medium">
                          {event.desc}
                        </p>
                      </motion.div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ── 6. BENEFITS SECTION ── */}
        <section className="py-24 md:py-32 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Value Proposition</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase">Growth Benefits</h2>
              <p className="text-slate-600 text-sm md:text-base mt-4 font-medium">
                Unlock multi-dimensional development and build attributes that prepare you for a global professional career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-white rounded-3xl p-8 border border-orange-500/5 shadow-md flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h4>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 7. STUDENT SUCCESS STORIES ── */}
        <section className="py-24 md:py-32 bg-white/40 border-y border-orange-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">TAT Alumni Achievers</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase">Student Success Stories</h2>
            </div>

            {/* Testimonials Carousel */}
            <div className="max-w-4xl mx-auto relative bg-white rounded-[32px] p-8 md:p-16 border border-orange-500/5 shadow-xl">
              <div className="relative overflow-hidden min-h-[300px]">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-10"
                  >
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0 border-4 border-orange-500/20 shadow-md">
                      <img 
                        src={successStories[currentTestimonial].img} 
                        alt={successStories[currentTestimonial].name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="w-12 h-8 text-orange-500/20 text-6xl font-serif leading-none select-none">“</div>
                      <p className="text-slate-700 text-base md:text-lg italic leading-relaxed font-medium -mt-4">
                        "{successStories[currentTestimonial].experience}"
                      </p>
                      <div className="mt-8 border-t border-slate-100 pt-6">
                        <h4 className="text-xl font-bold text-blue-900">{successStories[currentTestimonial].name}</h4>
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">
                          {successStories[currentTestimonial].dept}
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider">
                          {successStories[currentTestimonial].achievement}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Slider Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 justify-between hidden md:flex pointer-events-none">
                <button 
                  onClick={() => setCurrentTestimonial(prev => (prev - 1 + successStories.length) % successStories.length)}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 flex items-center justify-center text-blue-900 pointer-events-auto transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentTestimonial(prev => (prev + 1) % successStories.length)}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 flex items-center justify-center text-blue-900 pointer-events-auto transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dot navigation */}
              <div className="flex justify-center gap-3 mt-10">
                {successStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentTestimonial === idx 
                        ? 'bg-orange-500 w-6' 
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ── 8. GALLERY SECTION (MASONRY) ── */}
        <section className="py-24 md:py-32 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Visual Memories</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase">Campus Gallery</h2>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['All', 'Sports', 'Cultural', 'Clubs', 'Technical', 'Award Ceremonies'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setGalleryFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    galleryFilter === filter 
                      ? 'bg-orange-500 border-orange-500 text-white shadow-md' 
                      : 'border-slate-200 bg-white/60 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Masonry Columns Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setLightboxImage(item)}
                    className="break-inside-avoid bg-white rounded-3xl overflow-hidden border border-orange-500/5 shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-500"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">{item.category}</span>
                          <h5 className="text-white font-bold text-base mt-1">{item.title}</h5>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* ── GALLERY LIGHTBOX MODAL ── */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl w-full flex flex-col gap-4"
              >
                <div className="relative rounded-3xl overflow-hidden max-h-[75vh] bg-slate-900 flex justify-center items-center">
                  <img 
                    src={lightboxImage.img} 
                    alt={lightboxImage.title} 
                    className="max-h-[75vh] w-auto object-contain"
                  />
                </div>
                <div className="text-left px-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-500">{lightboxImage.category}</span>
                  <h4 className="text-2xl font-black text-white mt-1">{lightboxImage.title}</h4>
                  <p className="text-slate-400 text-sm mt-2 font-medium">{lightboxImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 9. FAQ SECTION (ACCORDION) ── */}
        <section className="py-24 md:py-32 relative z-20">
          <div className="max-w-4xl mx-auto px-6">

            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Resolving Queries</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-orange-500/5 overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-blue-900 text-base md:text-lg">{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-orange-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-500 text-sm leading-relaxed border-t border-slate-50 font-medium">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 10. CONTACT SECTION ── */}
        <section id="contact-section" className="py-24 md:py-32 bg-white/40 border-t border-orange-100 relative z-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Connect Coordinates</span>
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-3 uppercase leading-tight">
                  Student Activities <br />Office
                </h2>
                <p className="text-slate-600 text-sm mt-6 mb-10 font-medium leading-relaxed">
                  Have questions regarding registrations, scheduling, or starting new clubs? Reach out to our campus office directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900 text-xs uppercase tracking-wider">Office Address</h5>
                      <p className="text-slate-600 text-sm mt-1 font-medium">Student Affairs Block, 2nd Floor, Trident Campus</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900 text-xs uppercase tracking-wider">Phone</h5>
                      <p className="text-slate-600 text-sm mt-1 font-medium">+91 98611 91195</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900 text-xs uppercase tracking-wider">Email</h5>
                      <p className="text-slate-600 text-sm mt-1 font-medium">activities@trident.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-[32px] p-8 md:p-12 border border-orange-500/5 shadow-xl">
                  <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase">Registration & Enquiry</h3>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Name</label>
                        <input 
                          type="text" 
                          required
                          value={contactData.name}
                          onChange={e => setContactData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email</label>
                        <input 
                          type="email" 
                          required
                          value={contactData.email}
                          onChange={e => setContactData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="yourname@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Activity Interest</label>
                      <select
                        value={contactData.interest}
                        onChange={e => setContactData(prev => ({ ...prev, interest: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        {clubs.map(club => (
                          <option key={club.name} value={club.name}>{club.name}</option>
                        ))}
                        <option value="Sports">Sports & Athletics</option>
                        <option value="Cultural">Cultural Activities</option>
                        <option value="Technical">Technical Activities</option>
                        <option value="Leadership">Leadership Programs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message</label>
                      <textarea 
                        rows="4"
                        required
                        value={contactData.message}
                        onChange={e => setContactData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder="Hi, I am interested in joining..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95 cursor-pointer"
                    >
                      Send Message
                    </button>

                    <AnimatePresence>
                      {formSubmitted && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 rounded-xl p-4 text-xs font-bold uppercase tracking-wide text-center"
                        >
                          Message Submitted Successfully! ✓
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </form>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </SmoothScrollProvider>
  );
}
