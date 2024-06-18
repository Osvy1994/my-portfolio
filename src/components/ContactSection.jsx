/* eslint-disable react/no-unescaped-entities */
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { Background } from './Background'
import { FormComp } from './FormComp'

export function ContactSection() {
  return (
    <section id='contact' className='bg-graytr py-24 dark:bg-zinc-900'>
      <Background />
      <div className='section lg:flex justify-around gap-8 mx-auto'>
        <div>
          <h1 className='text-4xl text-blue-700 font-semibold'>Let's Talk</h1>
          <div className='h-[3px] w-32 2xl:w-36 mt-1 bg-black dark:bg-gray-200'></div>
          <h3 className='mt-2 italic text-gray-500 dark:text-gray-200 text-lg mb-12'>
            I would like to hear from you ⌨️
          </h3>
          <FormComp />
        </div>
        <div className='flex-col space-y-3'>
          <img
            className='hidden lg:block w-80 h-80 object-cover mb-8 rounded-full'
            src='profile-picture.jpeg'
            alt='My profile Picture'
          />
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-2 text-blue-500 dark:text-blue-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
              ></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              ></path>
            </svg>
            <p className='text-gray-500'>
              Fort Lauderdale, Florida, United States
            </p>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-2 text-blue-500 dark:text-blue-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              ></path>
            </svg>
            <p className='text-gray-500'>+1 (954) 274-1268</p>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-2 text-blue-500 dark:text-blue-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ></path>
            </svg>
            <p className='text-gray-500'>osvaldo.elvirez@gmail.com</p>
          </div>
          <div className='pl-3'>
            <h1 className='italic text-gray-600'>Follow Me:</h1>
            <div className='flex mt-1 -ml-1 items-center gap-2'>
              <a
                href='https://www.linkedin.com/in/osvaldo-madrigal-s3'
                target='_blank'
                rel='noopener noreferrer'
              >
                <CiLinkedin className='text-3xl text-blue-600' />
              </a>
              <a
                href='https://github.com/Osvy1994'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub className='text-2xl text-blue-600' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
