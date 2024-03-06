import { Background } from './Background'
import { companies } from '../mocks/companies'
import { Experiences } from './Experiences'

export function ExperienceSection() {
  return (
    <section>
      <Background />
      <div className='section'>
        <h1 className='text-4xl text-blue-700 font-semibold'>Experience</h1>
        <div className='h-[3px] w-32 2xl:w-36 mt-1 bg-black'></div>
        <h3 className='mt-2 italic text-gray-500 text-lg'>
          Software Engineer with 3 years of Software Development experience
        </h3>
        <ul className='grid lg:grid-cols-3 gap-8'>
          {companies.map(company => (
            <li key={company.id}>
              <Experiences
                role={company.role}
                description={company.description}
                technologies={company.technologies}
                date={company.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
