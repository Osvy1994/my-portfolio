/* eslint-disable react/prop-types */

export function Experiences({
  role,
  name,
  location,
  date,
  description,
  technologies,
  logo,
}) {
  return (
    <div className='relative max-w-[420px] mx-auto mt-16 lg:mt-32 rounded-3xl bg-white dark:text-gray-100 dark:bg-zinc-800 p-6 flex flex-col items-center justify-center gap-5 shadow-xl'>
      <div className='basis-2/4 my-4 flex flex-col'>
        <h1 className='font-semibold text-xl'>{role}</h1>
        <h1 className='text-lg'>{name}</h1>
        <h1>{location}</h1>
        <h3 className='italic mb-3'>({date})</h3>
        <p className='text-sm max-w-64 dark:text-gray-300 text-gray-600'>
          {description}
        </p>
        <div className='flex gap-1 mt-3 flex-col'>
          <h1 className='font-semibold mb-1'>Technologies: </h1>
          <ul className='grid gap-1 grid-cols-2 xl:grid-cols-3'>
            {technologies.map((tech, index) => (
              <li
                className='border-2 p-2 py-1 text-sm text-blue-700 border-blue-700 flex justify-center items-center rounded-xl'
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='absolute -top-12 right-8'>
        <img className='rounded-full' width={96} src={logo} alt='' />
      </div>
    </div>
  )
}
