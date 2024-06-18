export function HeroSection() {
  const icons = [
    'html,css',
    'js,ts',
    'react,next',
    'tailwind,bootstrap',
    'jest,vitest',
    'redux,vite',
  ]

  return (
    <section className=' dark:bg-zinc-800 dark:text-white xl:min-h-full pb-12'>
      <div className='section'>
        <div className='flex flex-col-reverse md:flex-row items-center lg:space-x-14 2xl:space-x-20 mb-8'>
          <div className='basis-2/4 2xl:space-y-2 flex flex-col justify-center'>
            <h1 className='text-2xl lg:text-4xl'>
              Osvaldo Madrigal
            </h1>
            <h2 className='text-blue-700 text-xl lg:text-3xl'>
              Software Engineer
            </h2>
            <h3 className='text-md font-light lg:text-2xl italic mb-4 2xl:text-3xl'>
              Fort Lauderdale, Florida, United States
            </h3>
            <p className='text-gray-500 font-light text-sm lg:text-lg dark:text-gray-300'>
              Software Engineer with a B.S. Degree in Computer Science.
              Passionate about coding and consistently integrating the latest
              advancements and best practices into my professional toolkit. My
              expertise lies in the Front-End development with a focus on:
              ReactJS, Next.js, JavaScript and TypeScript. Highly skilled team
              player with strong communication, problem-solving, and time
              management skills. Proactive, adaptable, and a quick learner with
              a positive attitude and attention to detail. Committed to
              delivering results and exceeding expectations.
            </p>
          </div>
          <div className='basis-2/4'>
            <div className='flex justify-center'>
              <img
                className='h-[200px] w-[200px] my-6 lg:my-0 md:w-[300px] md:h-[300px] lg:h-[500px] lg:w-[500px] 2xl:w-[700px] 2xl:h-[700px] profile-pic object-cover object-top'
                src='/my-picture.jpg'
                alt='Profile Picture'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col xl:pt-5 items-center justify-center space-y-8'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-gray-400 2xl:text-4xl'>
              Tech Stack
            </h1>
            <div className='h-[2px] w-20 2xl:w-36 mt-4 bg-white'></div>
          </div>
          <div className='xl:flex xl:space-x-8 content-center items-center grid grid-cols-3 gap-4'>
            {icons.map(icon => (
              <img
                key={icon}
                className='h-10 lg:h-16'
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={`${icon} icons`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
