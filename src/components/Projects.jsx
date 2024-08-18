import React from 'react'
import { projects } from '../data'
import ProjecCard from './ProjecCard'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section className='align-element' id='projects'>
      <SectionTitle title={'web creations'} />
      <div className='py-24 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((project) => {
          return <ProjecCard key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
