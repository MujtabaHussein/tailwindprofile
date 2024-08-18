import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <>
      <p className='text-3xl py-4 font-medium tracking-wider capitalize '>
        {title}
      </p>
      <div className='border-b border-e-gray-500 '></div>
    </>
  )
}

export default SectionTitle
