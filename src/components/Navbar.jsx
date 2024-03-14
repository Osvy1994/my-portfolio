import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

export function Navbar() {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header id='home' className='bg-white dark:bg-zinc-800'>
      <nav className='p-5 lg:px-8 flex items-center justify-between relative mx-auto  max-w-[1900px]'>
        <div className='max-w-fit pt-2'>
          <h1 className='font-agustina lg:text-2xl dark:text-white'>
            Osvaldo Madrigal
          </h1>
        </div>
        <div className='hidden lg:flex lg:gap-x-8'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-md dark:text-white leading-6 text-gray-900'
            >
              {`// ${item.name}`}
            </a>
          ))}
          <ThemeSwitcher width={52} height={26} />
        </div>
        <div className='flex lg:hidden justify-center items-center gap-3'>
          <ThemeSwitcher width={42} height={22} className=' hover:scale-105' />
          {mobileMenuOpen ? (
            <RxCross2
              onClick={() => setMobileMenuOpen(false)}
              className='cursor-pointer dark:text-white text-2xl'
            />
          ) : (
            <RxHamburgerMenu
              className='cursor-pointer dark:text-white text-2xl'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          )}
        </div>
        {mobileMenuOpen && (
          <div className='absolute z-50 flex flex-col bg-transparent top-16 left-0 w-full p-4 nav-button'>
            <div className='flex flex-col gap-4 items-end'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-sm dark:text-white leading-6 text-gray-900'
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
