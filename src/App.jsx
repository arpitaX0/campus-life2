import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import SubNav from './components/common/SubNav';
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
    <main>
      {/* ── Hero (dark bg with campus images) ── */}
      <CampusHero />

      {/* Hero (dark) → News (light beige) */}
      <SectionDivider type="gradient" topColor="#1A1817" bottomColor="#EFE7DF" accentColor="#E8BD63" accentHeight={6} height={80} />

      {/* ── News — Magazine Spread ── */}
      <News />

      {/* News (light beige) → Research (off-white) */}
      <SectionDivider type="curve" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Research — Split Screen ── */}
      <CampusResearch />

      {/* Research (off-white) → Activities (light beige) */}
      <SectionDivider type="wave" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Activities — Accordion ── */}
      <Activities />

      {/* Activities (light beige) → Facilities (off-white) */}
      <SectionDivider type="curve" topColor="#EFE7DF" bottomColor="#F9F7F5" height={60} />

      {/* ── Facilities — Tabs ── */}
      <CampusFacilities />

      {/* Facilities (off-white) → Impact (light beige) */}
      <SectionDivider type="tilt" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Impact — Counter Dashboard ── */}
      <Impact />

      {/* Skewed marquee band — organic visual break */}
      <SkewedMarquee 
        items={["Vibrant Campus", "24/7 Innovation", "100+ Clubs", "State-of-the-Art Sports", "Diverse Community", "Green Environment", "Modern Hostels", "Endless Opportunities"]}
        bgColor="#1A1817"
        speed={40}
      />

      {/* Impact (light beige) → Events (off-white) */}
      <SectionDivider type="wave" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Events — Horizontal Cards ── */}
      <Events />

      {/* Events (off-white) → Clubs (light beige) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#EFE7DF" height={70} />

      {/* ── Clubs — Film-strip Carousel ── */}
      <Clubs />

      {/* Clubs (light beige) → Sports (off-white) */}
      <SectionDivider type="torn" topColor="#EFE7DF" bottomColor="#F9F7F5" height={50} />

      {/* ── Sports — Mosaic Gallery ── */}
      <Sports />

      {/* Sports (off-white) → Leadership (dark) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#1A1817" height={70} />

      {/* ── Leadership — Circular Portraits ── */}
      <Leadership />

      {/* Leadership (light beige) → Quote (off-white) */}
      <SectionDivider type="wave" topColor="#EFE7DF" bottomColor="#F9F7F5" height={70} />

      {/* ── Quote — Cinematic ── */}
      <Quote />

      {/* Quote (off-white) → Footer (dark) */}
      <SectionDivider type="curve" topColor="#F9F7F5" bottomColor="#1A1817" height={70} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <SubNav />
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutTrident />} />
        <Route path="/libraries" element={<DepartmentLibraries />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}
