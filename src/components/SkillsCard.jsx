import React from 'react'

const SkillsCard = ({ id, icon, text, title }) => {
  return (
    <article key={id} className='flex flex-col gap-4'>
      <div>{icon}</div>
      <h3 className='font-bold'>{title}</h3>
      <p className='text-gray-600'>{text}</p>
    </article>
  )
}

export default SkillsCard
