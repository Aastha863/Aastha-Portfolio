import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import ExperienceSection from './components/Experience/ExperienceSection'
import SkillsSection from './components/Skills/SkillsSection'
import EducationSection from './components/Education/EducationSection'
import AchievementsSection from './components/Achievements/AchievementsSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'



function App() {

  return (
    <>
      <Toaster position="center-top" />
      <Navbar />
      <Hero/>
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      
      <Footer />
      
    </>
  );
}

export default App
