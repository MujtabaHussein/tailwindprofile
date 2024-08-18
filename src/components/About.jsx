import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section
      className='align-element bg-white grid grid-cols-1 gap-8 items-center justify-center py-20 md:grid-cols-2 '
      id='about'
    >
      <img src={aboutSvg} alt='about image' className='h-64 w-full' />
      <div>
        <SectionTitle title={'Code and coffe'} />
        <p className='mt-8 text-slate-600 leading-loose '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores
          itaque doloribus asperiores dolorum quas voluptates distinctio, porro
          beatae quam provident libero animi totam, praesentium voluptatem
          corrupti dignissimos ipsum accusantium!
        </p>
      </div>
    </section>
  )
}

export default About
