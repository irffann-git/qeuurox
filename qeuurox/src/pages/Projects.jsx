import React from 'react'
import ProjectHero from '../components/Projects/ProjectHero'
import FeaturedProjects from '../components/Projects/FeaturedProjects'
import HaveAProject from '../components/Projects/HaveAProject'
import CallToAction from '../components/Home/CallToAction'

function Projects() {
  return (
    <div>
      <ProjectHero/>
      <FeaturedProjects/>
      <HaveAProject/>
      <CallToAction/>
    </div>
  )
}

export default Projects
