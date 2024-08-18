import React from 'react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle title={'tech stack'} />
      <div className='py-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </section>
  )
}

export default Skills
