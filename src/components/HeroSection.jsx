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
    <section className=' dark:bg-zinc-800 dark:text-white xl:h-screen pb-12'>
      <div className='section'>
        <div className='flex flex-col-reverse md:flex-row items-center lg:space-x-14 2xl:space-x-20 mb-8'>
          <div className='basis-2/4 2xl:space-y-2 flex flex-col justify-center'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Osvaldo Madrigal</h1>
            <h2 className=' text-blue-700 font-bold text-xl lg:text-3xl'>
              Software Engineer
            </h2>
            <h3 className='text-md lg:text-2xl italic mb-4 2xl:text-3xl'>
              Miami, Florida, United States
            </h3>
            <p className='text-gray-500 text-sm lg:text-lg dark:text-gray-300 font-semibold'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
        <div className='flex flex-col xl:pt-10 items-center justify-center space-y-8'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-gray-400 z-10 font-semibold 2xl:text-4xl'>
              Tech Stack
            </h1>
            <div className='h-[3px] w-20 2xl:w-36 mt-4 bg-white'></div>
          </div>
          <div className='xl:flex  xl:space-x-8 content-center items-center grid grid-cols-3 gap-4'>
            {icons.map(icon => (
              <img
                key={icon}
                className='h-10 lg:h-16 2xl:h-20'
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
