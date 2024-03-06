/* eslint-disable react/prop-types */


export function Experiences({role, date, description, technologies}) {
  return (
    <div className='relative mt-32 rounded-3xl bg-white p-6 flex flex-col items-center justify-center gap-5 shadow-xl'>
      <div className='basis-2/4 my-4 flex flex-col items-center justify-center gap-3'>
        <h1 className='font-semibold'>{role}</h1>
        <h3 className='font-semibold'>{date}</h3>
        <p className='text-center text-sm max-w-64 font-semibold text-gray-600'>
          {description}
        </p>
        <div className='flex gap-4'>{technologies}</div>
      </div>
      <div className='absolute -top-12 right-8'>
        <img
          className='rounded-full'
          width={96}
          src='https://lazaroestrada.com/companies/Nariel.webp'
          alt=''
        />
      </div>
    </div>
  )
}