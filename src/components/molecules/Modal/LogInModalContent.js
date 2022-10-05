import React, { useState, useContext, useEffect } from 'react'
import Button from '../../atoms/Button'
import Subtitle from '../../atoms/Subtitle'
import { AppContext } from '../../../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../../contexts/ModalContext'

const LogInModalContent = () => {
  let navigate = useNavigate()

  const { closeModal } = useContext(ModalContext)
  const { globalState, dispatch } = useContext(AppContext)
  const [formData, setFormData] = useState({ email: '', password: '' })

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleKeyDown(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      submit()
    }
  }

  const submit = () => {
    dispatch({ type: 'LOG_IN', email: formData.email, password: formData.password })
  }

  useEffect(() => {
    if (globalState.loginToken) {
      closeModal()
      navigate('/dashboard')
    }
  }, [globalState.loginToken])

  return (
    <div className='w-72 h-80 flex flex-col pt-6'>
      <Subtitle>Log In</Subtitle>
      <form onKeyDown={handleKeyDown} className='flex flex-col mt-4'>
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 
          ${!globalState.auth.failMessage ? 'border-white' : 'border-rose-600'}`}
          type='email'
          placeholder='Email Address'
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
        <input
          className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 
          ${!globalState.auth.failMessage ? 'border-white' : 'border-rose-600'}`}
          type='password'
          placeholder='Password'
          onChange={handleChange}
          name='password'
          value={formData.password}
        />
      </form>
      <Button text='Log In' onClick={submit} size='sm' className='mt-8' />
      <div className='text-rose-600 mt-4'>{globalState.auth.failMessage}</div>
    </div>
  )
}

export default LogInModalContent
