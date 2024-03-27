/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import ReactSwitch from 'react-switch'

export function ThemeSwitcher({width, height}) {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ReactSwitch
      width={width}
      height={height}
      offColor='#000'
      onColor='#E95121'
      className=''
      onChange={handleThemeSwitch}
      checked={theme === 'dark'}
      uncheckedIcon={
        <div className='flex justify-center items-center w-full h-full'>
          <MdOutlineDarkMode className='text-white' />
        </div>
      }
      checkedIcon={
        <div className='flex justify-center items-center w-full h-full'>
          <MdOutlineLightMode className='text-gray-200' />
        </div>
      }
    />
  )
}
