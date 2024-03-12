import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

export function FormComp() {
  const form = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    messageError: '',
  })

  const handleInputChange = e => {
    const newObj = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObj)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const { from_name: name, reply_to: email, message } = formData

    const newErrors = {
      nameError: '',
      emailError: '',
      messageError: '',
    }
    if (name === '') {
      newErrors.nameError = 'Name is required'
    }

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/

    if (email === '') {
      newErrors.emailError = 'Email is required'
    } else if (!email_pattern.test(email)) {
      newErrors.emailError = 'Email is not valid'
    }

    if (message === '') {
      newErrors.messageError = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.values(newErrors).every(error => error === '')) {
      emailjs
        .sendForm('service_yuccp1c', 'template_9j94hpz', form.current, {
          publicKey: 'xM8bnDZsp_p2lhPZ5',
        })
        .then(
          () => {
            console.log('EMAIL SENT SUCCESSFULLY!')
          },
          error => {
            console.log('EMAIL FAILED TO SEND...', error.text)
          },
        )

      toast.success('Email sent successfully')

      setFormData({
        from_name: '',
        reply_to: '',
        message: '',
      })
    }
  }

  return (
    <form
      className='dark:text-gray-100 space-y-4'
      ref={form}
      onSubmit={handleFormSubmit}
    >
      <div className='lg:flex gap-4 space-y-4 lg:space-y-0'>
        <div className='flex flex-col'>
          <label className='pb-1' htmlFor='from_name'>
            Full Name
          </label>
          <input
            className='border-2 px-3 py-2 rounded-lg dark:bg-zinc-900 placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 focus:ring focus:ring-opacity-40 focus:outline-none'
            id='from_name'
            name='from_name'
            type='text'
            placeholder='John Doe'
            value={formData.from_name}
            onChange={handleInputChange}
          />
          {errors.nameError && <p className='form-error'>{errors.nameError}</p>}
        </div>
        <div className='flex flex-col'>
          <label className='pb-1' htmlFor='reply_to'>
            Email Address
          </label>
          <input
            className='border-2 px-3 py-2 rounded-lg dark:bg-zinc-900 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm focus:ring focus:ring-opacity-40 focus:outline-none'
            id='reply_to'
            name='reply_to'
            type='text'
            placeholder='johndoe@gmail.com'
            value={formData.reply_to}
            onChange={handleInputChange}
          />
          {errors && <p className='form-error'>{errors.emailError}</p>}
        </div>
      </div>
      <div className='flex flex-col'>
        <label className='pb-1' htmlFor='message'>
          Message
        </label>
        <textarea
          className='border-2 dark:bg-zinc-900 px-3 py-2 w-full h-[222px] rounded-lg placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 focus:ring focus:ring-opacity-40 focus:outline-none'
          id='message'
          name='message'
          placeholder='Message'
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.messageError && (
          <p className='form-error'>{errors.messageError}</p>
        )}
      </div>
      <div className='pt-4 pb-8'>
        <button
          type='submit'
          className='w-full h-12 rounded-lg bg-blue-600 font-semibold text-white'
        >
          Get In Touch
        </button>
      </div>
    </form>
  )
}
