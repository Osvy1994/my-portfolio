import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className='pt-12 pb-6 gap-2 px-12 dark:bg-zinc-900 bg-zinc-700/80 text-white'>
      <div className='relative'>
        <h1 className='font-agustina text-3xl text-center'>Osvaldo Madrigal</h1>
        <div className='flex gap-4 lg:gap-8 justify-center text-sm lg:text-lg mt-4'>
          <a className=' hover:cursor-pointer' href='#home'>
            Home
          </a>
          <a className=' hover:cursor-pointer' href='#experience'>
            Experience
          </a>
          <a className=' hover:cursor-pointer' href='#projects'>
            Projects
          </a>
          <a className=' hover:cursor-pointer' href='#contact'>
            Contact
          </a>
        </div>
        <div className='h-[1px] bg-gray-300 mx-auto my-4 lg:my-8'></div>
      </div>

      <div className='lg:flex justify-between relative'>
        <h1 className='flex text-xs  lg:text-lg mb-2 lg-mb-0 justify-center items-center'>
          © Copyright 2024. All Rights Reserved.
        </h1>
        <div className='flex justify-center items-center gap-2'>
          <a
            href='https://www.linkedin.com/in/osvaldo-madrigal-s3'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CiLinkedin className='text-5xl' />
          </a>
          <a
            href='https://github.com/Osvy1994'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-4xl' />
          </a>
        </div>
      </div>
    </footer>
  )
}
