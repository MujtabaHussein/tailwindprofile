import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className=' bg-emerald-100 py-24 '>
      <div className='align-element md:grid md:grid-cols-2 md:items-center md:gap-4'>
        <div className='flex flex-col gap-4'>
          <p className='text-6xl font-bold tracking-normal '>I'm Mujtaba</p>
          <p className='text-3xl text-slate-700 my-2 capitalize'>
            Frot-end developer
          </p>
          <p className='text-1xl capitalize text-slate-700 tracking-wide text-lg '>
            Turning ideas info inreractive reality
          </p>
          <div className='flex flex-row gap-2 text-4xl'>
            <a href='https://github.com/MujtabaHussein'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/mujtaba-huseein-53627a14a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvmsklWQIRTKQ519Aimxjxg%3D%3D'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://t.me/MujtabaHussein'>
              <FaTelegram className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </div>
        <img
          src={heroImg}
          alt='hero image'
          className='hidden md:block lg:h-96 md:h-80  '
        />
      </div>
    </section>
  )
}

export default Hero
