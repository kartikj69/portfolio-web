import React from 'react'
// import './App.css';
import ProjectSec from './ProjectSec';
import RecommSec from './RecommSec';
import SkillsSection from './SkillsSection';
import Title from './Title';
import About from './about';
import BlogSection from './BlogSection';
export default function Home() {
  return (
    <div>
      <Title />
      <RecommSec/>
      <SkillsSection/>
      <ProjectSec/>
      <About/>
      <BlogSection/>  
    </div>
        
    
  )
}
