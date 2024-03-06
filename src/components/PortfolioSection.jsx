import { Project } from './Project'
import { myProjects } from '../mocks/myProjects'
import { Background } from './Background'

export function PortfolioSection() {
  return (
    <section className='mt-24 bg-graytr'>
      <Background />
      <div className='section'>
        <h1 className='text-4xl text-blue-700 font-semibold'>Portfolio</h1>
        <div className='h-[3px] w-32 2xl:w-36 mt-1 bg-black'></div>
        <h3 className='mt-2 italic text-gray-500 text-lg'>
          Each project is a unique piece of development 🧩
        </h3>
        <ul className='grid 2xl:grid-cols-3 lg:grid-cols-2 gap-12 mt-24'>
          {myProjects.map(project => (
            <li key={project.id}>
              <Project
                name={project.projectName}
                date={project.projectDate}
                image={project.projectImage}
                details={project.projectDetails}
                jsFramework={project.jsFramework}
                cssFramework={project.cssFramework}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
