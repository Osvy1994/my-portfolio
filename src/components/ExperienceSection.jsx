import { companies } from '../mocks/companies'
import { Experiences } from './Experiences'

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='bg-graytr 2xl:py-32 py-12 dark:bg-zinc-900'
    >
      <div className='section'>
        <h1 className='text-4xl text-blue-700 font-semibold'>Experience</h1>
        <div className='h-[3px] w-32 2xl:w-36 mt-1 bg-black dark:bg-gray-200'></div>
        <h3 className='mt-2 italic text-gray-500 dark:text-gray-200 text-lg'>
          Software Engineer with +3 years of Software Development experience 🚀
        </h3>
        <ul className='grid xl:grid-cols-3 lg:grid-cols-2 mx-auto gap-8'>
          {companies.map(company => (
            <li key={company.id}>
              <Experiences
                role={company.role}
                description={company.description}
                technologies={company.technologies}
                date={company.date}
                name={company.companyName}
                location={company.location}
                logo={company.companyLogo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
