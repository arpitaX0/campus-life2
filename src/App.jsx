import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import CampusHero from './components/campus/CampusHero';
import News from './components/campus/News';
import { 
  Research as CampusResearch, 
  Facilities as CampusFacilities,
  Impact, 
  Quote
} from './components/campus/Sections';

import Activities from './components/activities/Activities';
import Clubs from './components/activities/Clubs';
import Events from './components/activities/Events';
import Sports from './components/activities/Sports';
import Leadership from './components/activities/Leadership';

import SectionDivider, { SkewedMarquee } from './components/common/SectionDivider';
import Footer from './components/common/Footer';

import AboutTrident from './pages/AboutTrident';
import DepartmentLibraries from './pages/DepartmentLibraries';

function MainContent() {
  return (
    <main className="bg-[#070B2B]">
      {/* ── Hero ── */}
      <CampusHero />

      {/* wave transition from Hero to dark futuristic zone */}
      <SectionDivider type="wave" topColor="#FAF9F6" bottomColor="#070B2B" height={90} />

      {/* ── News / Highlights ── */}
      <News />

      {/* ── Research ── */}
      <CampusResearch />

      {/* ── Activities Overview ── */}
      <Activities />

      {/* ── Facilities ── */}
      <CampusFacilities />

      {/* ── Impact Stats ── */}
      <Impact />

      {/* ── Events (timeline) ── */}
      <Events />

      {/* ── Marquee ticker ── */}
      <div className="py-12 bg-[#070B2B]">
        <SkewedMarquee
          items={['Quantum Network Active', 'A.I. Security Grid Online', 'Global Sync Complete', 'Neural Nodes Connected', 'Future Engineered']}
          bgColor="#E8BD63"
          speed={35}
        />
      </div>

      {/* ── Clubs ── */}
      <Clubs />

      {/* ── Sports ── */}
      <Sports />

      {/* ── Leadership ── */}
      <Leadership />

      {/* ── Quote ── */}
      <Quote />

      {/* curve → footer dark */}
      <SectionDivider type="curve" topColor="#070B2B" bottomColor="#1A1817" height={80} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="noise-overlay" />
      <Header />
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutTrident />} />
        <Route path="/libraries" element={<DepartmentLibraries />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

