import { Project } from './Project'
import { myProjects } from '../mocks/myProjects'

export function PortfolioSection() {
  return (
    <section id='projects' className='py-16 dark:bg-zinc-800'>
      <div className='section'>
        <h1 className='text-4xl text-blue-700 font-semibold'>Projects</h1>
        <div className='h-[3px] w-32 2xl:w-60 mt-1 bg-black dark:bg-gray-200'></div>
        <h3 className='mt-2 italic text-gray-500 dark:text-gray-200 text-lg'>
          Check out my personal projects. Each one is a unique development
          creation 🧩
        </h3>
        <ul className='grid lg:grid-cols-2 gap-12 mt-24 max-w-screen-lg mx-auto'>
          {myProjects.map(project => (
            <li key={project.id}>
              <Project
                name={project.projectName}
                image={project.projectImage}
                details={project.projectDetails}
                jsFramework={project.jsFramework}
                cssFramework={project.cssFramework}
                page={project.projectLink}
                github={project.github}
              />
            </li>
          ))}
        </ul>
      </div>
      <p className='animate-bounce my-12 xl:text-xl dark:text-gray-300 bg-gray-200 text-center font-mono dark:bg-zinc-900/90 py-1'>
        MORE PROJECTS COMING SOON...
      </p>
    </section>
  )
}
