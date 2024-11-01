// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CounterSection from './components/CounterSection';
import Services from './components/ServicesSection';
import Skills from './components/SkillsSection';
// import Education from './components/Education';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

import styles from './App.module.css';
import Educationd from './components/EducationSection';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <Services />
        <CounterSection />
        <Skills />
        <Educationd />
        <ExperienceSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
