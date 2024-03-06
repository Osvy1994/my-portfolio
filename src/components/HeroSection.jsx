import { Background } from './Background'

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
    <section className='relative isolate md:mt-5 mt-24 lg:h-screen 2xl-pt-10'>
      <div className='section'>
        <Background />
        <div className='flex flex-col-reverse md:flex-row items-center lg:space-x-14 2xl:space-x-20 mb-8'>
          <div className='basis-2/4 2xl:space-y-2 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold 2xl:text-6xl'>
              Osvaldo Madrigal
            </h1>
            <h2 className=' text-blue-700 font-bold text-3xl 2xl:text-5xl'>
              Software Engineer
            </h2>
            <h3 className='text-2xl italic mb-4 2xl:text-3xl'>
              Miami, Florida, United States
            </h3>
            <p className='text-gray-500 font-semibold 2xl:text-xl'>
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
                className='h-[500px] w-[500px] 2xl:w-[700px] 2xl:h-[700px] profile-pic object-cover object-top'
                src='/my-picture.jpg'
                alt='Profile Picture'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-gray-400 font-semibold 2xl:text-4xl'>
              Tech Stack
            </h1>
            <div className='h-[3px] w-20 2xl:w-36 mt-4 bg-black'></div>
          </div>
          <div className='lg:flex space-x-8 content-center items-center'>
            {icons.map(icon => (
              <img
                key={icon}
                className='h-16 2xl:h-20'
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
