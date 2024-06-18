/* eslint-disable react/prop-types */
export function Project({
  name,
  image,
  details,
  jsFramework,
  cssFramework,
  page,
  github,
}) {
  return (
    <div className='rounded-3xl bg-white dark:bg-zinc-900/70 dark:text-gray-100 p-6 flex flex-col items-center justify-center gap-5 shadow-xl h-[700px] max-w-[500px] mx-auto'>
      <div className='basis-2/4 overflow-hidden rounded-3xl shadow-lg transition hover:scale-105 ease-in-out'>
        <img
          className='rounded-3xl object-cover xl:hover:-translate-y-[77%] hover:-translate-y-[71%] hover:cursor-pointer duration-[8s]'
          src={image}
          alt={`${name} web page preview `}
        />
      </div>
      <div className='basis-2/4 flex flex-col items-center justify-center gap-3'>
        <h1 className='font-semibold dark:text-blue-500 text-blue-600'>
          {name.toUpperCase()}
        </h1>
        <p className='text-center text-sm max-w-72 text-gray-600 dark:text-gray-300'>
          {details}
        </p>
        <div className='flex gap-4'>
          <div className='project-tech-stack'>{jsFramework}</div>
          <div className='project-tech-stack'>{cssFramework}</div>
        </div>
        <div className='flex gap-6'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-1 items-center'
          >
            {`Code `}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='tabler-icon tabler-icon-brand-github'
            >
              <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
            </svg>
          </a>
          <a
            href={page}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-1 items-center'
          >
            {`Live Demo `}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='tabler-icon tabler-icon-external-link'
            >
              <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
              <path d='M11 13l9 -9'></path>
              <path d='M15 4h5v5'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
