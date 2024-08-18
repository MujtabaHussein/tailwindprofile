import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjecCard = ({ id, img, url, github, title, text }) => {
  return (
    <article className='flex flex-col gap-4 bg-white shadow-md rounded-lg hover:shadow-xl duration-300  '>
      <img
        src={img}
        alt={title}
        className='rounded-tl-lg rounded-tr-lg w-full object-cover'
      />

      <div className='p-4 flex flex-col gap-4'>
        <p className=' text-slate-600 text-2xl font-bold capitalize '>
          {title}
        </p>
        <p className='text-slate-600 leading-loose '>{text}</p>
        <div className='flex flex-row gap-4 text-3xl text-slate-500 '>
          <a href={url} className='hover:text-black'>
            <TbWorldWww />
          </a>
          <a href={github} className='hover:text-black'>
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjecCard
